import { CreateSkillDto } from './create-skill.dto';
declare const UpdateSkillDto_base: import("@nestjs/common").Type<Partial<CreateSkillDto>>;
export declare class UpdateSkillDto extends UpdateSkillDto_base {
    category: string;
    sub_category: string;
    tags: string;
    level: number;
    has_certificate: boolean;
    certificate: string;
    certificate_link: string;
}
export {};
