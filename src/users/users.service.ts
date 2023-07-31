import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { validate } from 'class-validator';
import FilesHelper from 'files/FilesHelper';
import { parse } from 'path';
import { Repository } from 'typeorm';
import { constants } from 'utils/constants';
import { CreateUserParams, UpdateUserParams } from 'utils/types';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/users.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    private fileHelper: FilesHelper,
  ) {}

  async create(userDetails: CreateUserDto) {
    const newUser = this.userRepository.create({
      ...userDetails,
      role: 2,
    });

    // const errors = await validate(newUser);
    // console.log(userDetails);
    // console.log(errors);

    // if (errors.length > 0)
    //   throw new HttpException(
    //     'Validation failed!',
    //     HttpStatus.EXPECTATION_FAILED,
    //   );
    const createdUser = await this.userRepository.save(newUser);
    if (this.fileHelper.createAlumniFolder(createdUser)) return createdUser;
    else
      throw new HttpException(
        'Something Went Wrong - Folder Write failed!',
        HttpStatus.FORBIDDEN,
      );
  }

  findAll() {
    return this.userRepository.find({ relations: ['profile'] });
  }

  async findOne(id: number) {
    //const user = await this.userRepository.findOneBy({ id }); or
    const user = await this.userRepository.findOne({
      where: { id },
      //relations: ['profile', 'skills', 'academics'],
    });
    if (user) return user;
    else throw new HttpException('User not found', HttpStatus.BAD_REQUEST);
  }

  async findOneWithSkills(id: number) {
    //const user = await this.userRepository.findOneBy({ id }); or
    const user = await this.userRepository.findOne({
      where: { id },
      relations: ['skills'],
    });
    if (user) return user;
    else throw new HttpException('User not found', HttpStatus.BAD_REQUEST);
  }

  async findOneWithAcademics(id: number) {
    //const user = await this.userRepository.findOneBy({ id }); or
    const user = await this.userRepository.findOne({
      where: { id },
      relations: ['academics'],
    });
    if (user) return user;
    else throw new HttpException('User not found', HttpStatus.BAD_REQUEST);
  }

  async findOneWithExperiences(id: number) {
    //const user = await this.userRepository.findOneBy({ id }); or
    const user = await this.userRepository.findOne({
      where: { id },
      relations: ['experiences'],
    });
    if (user) return user;
    else throw new HttpException('User not found', HttpStatus.BAD_REQUEST);
  }

  async findOneWithSurvey(id: number) {
    //const user = await this.userRepository.findOneBy({ id }); or
    const user = await this.userRepository.findOne({
      where: { id },
      relations: ['survey'],
    });
    if (user) return user;
    else throw new HttpException('User not found', HttpStatus.BAD_REQUEST);
  }

  async findOneWithProfile(id: number) {
    //const user = await this.userRepository.findOneBy({ id }); or
    const user = await this.userRepository.findOne({
      where: { id },
      relations: ['profile'],
    });
    if (user) return user;
    else throw new HttpException('User not found', HttpStatus.BAD_REQUEST);
  }

  async findByEmail(email: string) {
    const user = await this.userRepository.findOneBy({ email });
    if (user) return user;
    else
      throw new HttpException(
        'User not found with email: ' + email,
        HttpStatus.BAD_REQUEST,
      );
  }

  async findByToken(token: string) {
    const user = await this.userRepository.findOneBy({
      password_reset_token: token,
    });
    if (user) return user;
    else
      throw new HttpException(
        'User not found with token: ' + token,
        HttpStatus.BAD_REQUEST,
      );
  }

  async findByUniEmail(uni_email: string) {
    console.log('Email seaching ..');
    const user = await this.userRepository.findOneBy({ uni_email });
    if (user) return user;
    else
      throw new HttpException(
        'User not found with email: ' + uni_email,
        HttpStatus.BAD_REQUEST,
      );
  }

  update(id: number, userDetails: UpdateUserParams) {
    return this.userRepository.update({ id }, { ...userDetails });
  }

  updatePassword(id: number, password: string) {
    return this.userRepository.update(
      { id },
      { password, password_reset_token: null },
    );
  }

  updatePasswordToken(id: number, password_reset_token: string) {
    return this.userRepository.update({ id }, { password_reset_token });
  }

  async updateAvatar(id: number, file: Express.Multer.File) {
    // const user = await this.userRepository.findOneBy({ id });
    // if (user && user.avatar != 'default/avatar.jpg') {
    //   const fileSys = new FilesHelper();
    //   fileSys.removeFolderOrFile(constants.UPLOAD_LOCATION + user.avatar);
    // }
    return this.userRepository.update({ id }, { avatar: file.filename });
  }

  remove(id: number) {
    return this.userRepository.delete({ id });
  }

  // doLook(e: string) {
  //   return this.userRepository.findOneBy({ uni_email: e });
  // }
}
