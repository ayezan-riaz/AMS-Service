import { ValidationOptions, ValidatorConstraintInterface, ValidationArguments } from 'class-validator';
import { Repository } from 'typeorm';
import { Registration } from '../entities/registration.entity';
export declare class DoesUniEmailExists implements ValidatorConstraintInterface {
    private registrationRepository;
    constructor(registrationRepository: Repository<Registration>);
    validate(uni_reg_id: string, args: ValidationArguments): Promise<boolean>;
}
export declare function UniEmailExists(validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
