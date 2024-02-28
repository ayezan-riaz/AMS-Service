import { MailService } from 'src/mail/mail.service';
import { UserService } from 'src/users/users.service';
import { Repository } from 'typeorm';
import { CreateRegistrationDto } from './dto/create-registration.dto';
import { TokenDto } from './dto/token.dto';
import { UpdateRegistrationDto } from './dto/update-registration.dto';
import { VerifyNewAccountDto } from './dto/verify-new-account.dto';
import { VerifyUniEmailDto } from './dto/verify-uni-email.dto';
import { Registration } from './entities/registration.entity';
export declare class RegistrationsService {
    private registrationRepository;
    private readonly userService;
    private readonly mailService;
    constructor(registrationRepository: Repository<Registration>, userService: UserService, mailService: MailService);
    genToken(size: number): string;
    create(createRegistrationDto: CreateRegistrationDto): Promise<Registration>;
    verifyUniEmail({ uni_reg_id }: VerifyUniEmailDto): Promise<{
        token: string;
        id: number;
    }>;
    getUniEmailTokenData({ token }: TokenDto): Promise<{
        id: number;
        uni_email: string;
        first_name: string;
        middle_name: string;
        last_name: string;
        qualification: string;
        area: string;
        registration_time: Date;
        graduation_time: Date;
        cgpa: number;
        step: number;
    }>;
    validateUniEmail(token: string): Promise<string>;
    verifyNewAccountEmail(verifyNewAccountDto: VerifyNewAccountDto): Promise<{
        user_id: number;
        token: string;
    }>;
    getNewAccountTokenData({ token }: TokenDto): Promise<{
        id: number;
        email: string;
        uni_email: string;
        phone: string;
        first_name: string;
        middle_name: string;
        last_name: string;
        avatar: string;
        password_reset_token: string;
        profile: import("../profiles/entities/profile.entity").Profile;
        survey: import("../survey/entities/survey.entity").Survey;
        academics: import("../academics/entities/academic.entity").Academic[];
        skills: import("../skills/entities/skill.entity").Skill[];
        experiences: import("../experiences/entities/experience.entity").Experience[];
    }>;
    validateNewAccountEmail(token: string): Promise<string>;
    findAll(): Promise<Registration[]>;
    findOne(id: number): string;
    update(id: number, updateRegistrationDto: UpdateRegistrationDto): string;
    remove(id: number): string;
    getStepWithId(roll_number: string): Promise<{
        step: number;
        id: number;
    }>;
}
