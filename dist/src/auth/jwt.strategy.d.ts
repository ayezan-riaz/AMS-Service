import { Strategy } from 'passport-jwt';
import { UserService } from 'src/users/users.service';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private userService;
    constructor(userService: UserService);
    validate(payload: any): Promise<{
        id: number;
        email: string;
        uni_email: string;
        phone: string;
        first_name: string;
        middle_name: string;
        last_name: string;
        password: string;
        role: number;
        registration_status: number;
        active_status: boolean;
        avatar: string;
        password_reset_token: string;
        createdAt: Date;
        updatedAt: Date;
        profile: import("../profiles/entities/profile.entity").Profile;
        survey: import("../survey/entities/survey.entity").Survey;
        academics: import("../academics/entities/academic.entity").Academic[];
        skills: import("../skills/entities/skill.entity").Skill[];
        experiences: import("../experiences/entities/experience.entity").Experience[];
        sub: any;
        eml: any;
        sys: any;
        iat: any;
        exp: any;
        sts: string;
        human: string;
    }>;
}
export {};
