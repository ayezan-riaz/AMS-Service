import { ValidationOptions, ValidatorConstraintInterface, ValidationArguments } from 'class-validator';
import { Repository } from 'typeorm';
import { Registration } from '../entities/registration.entity';
export declare class IsUniEmailUnique implements ValidatorConstraintInterface {
    private registrationRepository;
    constructor(registrationRepository: Repository<Registration>);
    validate(uni_email: string, args: ValidationArguments): Promise<boolean>;
}
export declare function UniEmailAvailable(validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
