import { CreateAcademicDto } from './create-academic.dto';
declare const UpdateAcademicDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateAcademicDto>>;
export declare class UpdateAcademicDto extends UpdateAcademicDto_base {
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
}
export {};
