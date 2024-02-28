import { ValidationOptions, ValidatorConstraintInterface, ValidationArguments } from 'class-validator';
import { Repository } from 'typeorm';
import { User } from '../entities/users.entity';
export declare class IsUniEmailUnique implements ValidatorConstraintInterface {
    private userRepository;
    constructor(userRepository: Repository<User>);
    validate(uni_email: string, args: ValidationArguments): Promise<boolean>;
}
export declare function UniEmailAvailable(validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
