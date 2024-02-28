import { CreateUserDto } from './create-user.dto';
declare const UpdateUserDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateUserDto>>;
export declare class UpdateUserDto extends UpdateUserDto_base {
    email: string;
    uni_email: string;
    phone: string;
    registration_status: number;
    active_status: boolean;
    password: string;
    password_reset_token: string;
    first_name: string;
    middle_name: string;
    last_name: string;
}
export {};
