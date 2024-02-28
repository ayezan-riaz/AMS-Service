import { Academic } from 'src/academics/entities/academic.entity';
import { Experience } from 'src/experiences/entities/experience.entity';
import { Profile } from 'src/profiles/entities/profile.entity';
import { Skill } from 'src/skills/entities/skill.entity';
import { Survey } from 'src/survey/entities/survey.entity';
export declare class User {
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
    profile: Profile;
    survey: Survey;
    academics: Academic[];
    skills: Skill[];
    experiences: Experience[];
}
