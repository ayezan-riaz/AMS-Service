import { User } from 'src/users/entities/users.entity';
export declare class Academic {
    id: number;
    qualification_type: string;
    qualification: string;
    area: string;
    institute: string;
    institute_address: string;
    start_year: Date;
    end_year: Date;
    score: string;
    score_unit: string;
    status: string;
    has_certificate: boolean;
    certificate: string;
    certificate_link: string;
    createdAt: Date;
    updatedAt: Date;
    user: User;
}
