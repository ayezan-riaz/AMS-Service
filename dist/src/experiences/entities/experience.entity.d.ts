import { User } from 'src/users/entities/users.entity';
export declare class Experience {
    id: number;
    company: string;
    designation: string;
    status: string;
    nature_of_job: string;
    start_year: Date;
    end_year: Date;
    createdAt: Date;
    updatedAt: Date;
    user: User;
}
