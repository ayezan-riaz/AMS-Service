import { ValidationOptions, ValidatorConstraintInterface, ValidationArguments } from 'class-validator';
import { User } from 'src/users/entities/users.entity';
import { Repository } from 'typeorm';
export declare class DoesEmailExist implements ValidatorConstraintInterface {
    private userRepository;
    constructor(userRepository: Repository<User>);
    validate(email: string, args: ValidationArguments): Promise<boolean>;
}
export declare function EmailExist(validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
