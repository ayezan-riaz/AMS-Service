import { CreateExperienceDto } from './create-experience.dto';
declare const UpdateExperienceDto_base: import("@nestjs/common").Type<Partial<CreateExperienceDto>>;
export declare class UpdateExperienceDto extends UpdateExperienceDto_base {
    company: string;
    designation: string;
    status: string;
    nature_of_job: string;
    start_year: Date;
    end_year: Date;
}
export {};
