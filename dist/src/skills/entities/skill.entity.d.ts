import { User } from 'src/users/entities/users.entity';
export declare class Skill {
    id: number;
    category: string;
    sub_category: string;
    tags: string;
    level: number;
    has_certificate: boolean;
    certificate: string;
    certificate_link: string;
    createdAt: Date;
    updatedAt: Date;
    user: User;
}
