import { ValidationOptions, ValidatorConstraintInterface, ValidationArguments } from 'class-validator';
import { Repository } from 'typeorm';
import { User } from '../entities/users.entity';
export declare class IsEmailAvailable implements ValidatorConstraintInterface {
    private userRepository;
    constructor(userRepository: Repository<User>);
    validate(email: string, args: ValidationArguments): Promise<boolean>;
}
export declare function EmailAvailable(validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
