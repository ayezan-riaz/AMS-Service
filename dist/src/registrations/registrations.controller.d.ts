/// <reference types="multer" />
import { RegistrationsService } from './registrations.service';
import { CreateRegistrationDto } from './dto/create-registration.dto';
import { Registration } from './entities/registration.entity';
import { VerifyUniEmailDto } from './dto/verify-uni-email.dto';
import { VerifyNewAccountDto } from './dto/verify-new-account.dto';
import { TokenDto } from './dto/token.dto';
export declare class RegistrationsController {
    private readonly registrationsService;
    constructor(registrationsService: RegistrationsService);
    findAll(): Promise<Registration[]>;
    create(createRegistrationDto: CreateRegistrationDto): Promise<Registration>;
    uploadFile(file: Express.Multer.File): Promise<{
        readError: string;
        records: {
            id: number;
            fname: string;
            lname: string;
        }[];
        status: string;
        file: string;
    }>;
    sendMail(verifyUniEmailDta: VerifyUniEmailDto): Promise<{
        token: string;
        id: number;
    }>;
    getUniTokenData(tokenData: TokenDto): Promise<{
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
    validate(token: string): Promise<string>;
    sendAccountRequest(verifyNewAccountDto: VerifyNewAccountDto): Promise<{
        user_id: number;
        token: string;
    }>;
    getEmailTokenData(tokenData: TokenDto): Promise<{
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
    validateEmail(token: string): Promise<string>;
    getStepWithId(roll_number: string): Promise<{
        step: number;
        id: number;
    }>;
}
