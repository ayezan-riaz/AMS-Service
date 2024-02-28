import { User } from 'src/users/entities/users.entity';
export declare class Profile {
    id: number;
    date_of_birth: Date;
    country: string;
    timezone: string;
    resume: string;
    createdAt: Date;
    updatedAt: Date;
    user: User;
}
