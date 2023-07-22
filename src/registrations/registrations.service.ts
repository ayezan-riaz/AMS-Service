import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { InjectRepository } from '@nestjs/typeorm';
import { MailService } from 'src/mail/mail.service';
import { UserService } from 'src/users/users.service';
import { Repository } from 'typeorm';
import { CreateRegistrationDto } from './dto/create-registration.dto';
import { UpdateRegistrationDto } from './dto/update-registration.dto';
import { VerifyNewAccountDto } from './dto/verify-new-account.dto';
import { VerifyUniEmailDto } from './dto/verify-uni-email.dto';
import { Registration } from './entities/registration.entity';

//https://orkhan.gitbook.io/typeorm/docs/repository-api
@Injectable()
export class RegistrationsService {
  constructor(
    @InjectRepository(Registration)
    private registrationRepository: Repository<Registration>,
    private readonly userService: UserService,
    private readonly mailService: MailService,
  ) {}

  genToken(size: number) {
    const rand = () => Math.random().toString(36).substring(2);
    const token = (length: number) =>
      (rand() + rand() + rand() + rand()).substring(0, length);
    return token(size);
  }

  create(createRegistrationDto: CreateRegistrationDto) {
    const regUser = this.registrationRepository.create(createRegistrationDto);
    return this.registrationRepository.save(regUser);
  }

  async verifyUniEmail({ uni_reg_id }: VerifyUniEmailDto) {
    let uni_email = uni_reg_id.toLowerCase() + '@dsu.edu.pk';
    const my_token = this.genToken(40);
    this.mailService.sendVerificationEmail(uni_email, my_token, 'internal');
    await this.registrationRepository.increment(
      { uni_email },
      'uni_email_sent',
      1,
    );
    await this.registrationRepository.update({ uni_email }, { step: 1 });

    await this.registrationRepository.update(
      { uni_email },
      { uni_token: my_token },
    );

    //change this back once done with frontend
    const reg_user = await this.registrationRepository.findOneBy({ uni_email });
    return { token: reg_user.uni_token, id: reg_user.id };
  }

  async validateUniEmail(token: string) {
    const res = await this.registrationRepository.findOneBy({
      uni_token: token,
    });
    if (!res) throw new HttpException('Invalid Token', HttpStatus.BAD_REQUEST);
    else {
      await this.registrationRepository.update(
        { id: res.id },
        { uni_verified: true, step: 2 },
      );
      const {
        email_token,
        email_verified,
        email_sent,
        uni_verified,
        uni_token,
        uni_email_sent,
        createdAt,
        updatedAt,
        ...more
      } = res;
      return more;
    }
  }

  async verifyNewAccountEmail(verifyNewAccountDto: VerifyNewAccountDto) {
    //Register User
    const registration = await this.registrationRepository.findOneBy({
      id: verifyNewAccountDto.reg_id,
    });
    if (!registration)
      throw new HttpException('Registration not found', HttpStatus.BAD_REQUEST);

    const my_token = this.genToken(40);

    const { id, first_name, middle_name, last_name, uni_email } = registration;
    const { phone, email, password } = verifyNewAccountDto;

    this.mailService.sendVerificationEmail(email, my_token, 'external');

    await this.registrationRepository.increment({ id }, 'email_sent', 1);

    await this.registrationRepository.update(
      { id },
      { step: 3, email_token: my_token },
    );

    const { password: pwd, ...other } = await this.userService.create({
      uni_email,
      phone,
      first_name,
      middle_name,
      last_name,
      email,
      password,
    });

    return other;
  }

  async validateNewAccountEmail(token: string) {
    const res = await this.registrationRepository.findOneBy({
      email_token: token,
    });
    if (!res) throw new HttpException('Invalid Token', HttpStatus.BAD_REQUEST);
    else {
      await this.registrationRepository.update(
        { id: res.id },
        { email_verified: true, step: 4 },
      );
      const {
        email_sent,
        email_token,
        email_verified,
        uni_email_sent,
        uni_token,
        uni_verified,
        createdAt,
        updatedAt,
        step,
        id: regId,
        ...more
      } = res;
      const { email, id: userId } = await this.userService.findByUniEmail(
        more.uni_email,
      );
      return {
        userId,
        email,
        regId,
        ...more,
        step: step != 4 ? step + 1 : step,
      };
    }
  }

  findAll() {
    return this.registrationRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} registration`;
  }

  update(id: number, updateRegistrationDto: UpdateRegistrationDto) {
    return `This action updates a #${id} registration`;
  }

  remove(id: number) {
    return `This action removes a #${id} registration`;
  }

  async getRegistratonStep({ uni_reg_id }: VerifyUniEmailDto) {
    let uni_email = uni_reg_id.toLowerCase() + '@dsu.edu.pk';
    const reg_user = await this.registrationRepository.findOneBy({ uni_email });
    return { step: reg_user.step };
  }
}
