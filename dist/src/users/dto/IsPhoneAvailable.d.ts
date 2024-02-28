import { ValidationOptions, ValidatorConstraintInterface, ValidationArguments } from 'class-validator';
import { Repository } from 'typeorm';
import { User } from '../entities/users.entity';
export declare class IsPhoneAvailable implements ValidatorConstraintInterface {
    private userRepository;
    constructor(userRepository: Repository<User>);
    validate(phone: string, args: ValidationArguments): Promise<boolean>;
}
export declare function PhoneAvailable(validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
