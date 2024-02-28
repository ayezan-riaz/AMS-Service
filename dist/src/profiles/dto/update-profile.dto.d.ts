import { CreateProfileDto } from './create-profile.dto';
declare const UpdateProfileDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateProfileDto>>;
export declare class UpdateProfileDto extends UpdateProfileDto_base {
    date_of_birth: Date;
    country: string;
    timezone: string;
}
export {};
