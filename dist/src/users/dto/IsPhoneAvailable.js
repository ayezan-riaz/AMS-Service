"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhoneAvailable = exports.IsPhoneAvailable = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const class_validator_1 = require("class-validator");
const typeorm_2 = require("typeorm");
const users_entity_1 = require("../entities/users.entity");
let IsPhoneAvailable = class IsPhoneAvailable {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async validate(phone, args) {
        const user = await this.userRepository.findOneBy({ phone });
        if (user)
            return false;
        return true;
    }
};
exports.IsPhoneAvailable = IsPhoneAvailable;
exports.IsPhoneAvailable = IsPhoneAvailable = __decorate([
    (0, class_validator_1.ValidatorConstraint)({ async: true }),
    __param(0, (0, typeorm_1.InjectRepository)(users_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], IsPhoneAvailable);
function PhoneAvailable(validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: [],
            validator: IsPhoneAvailable,
        });
    };
}
exports.PhoneAvailable = PhoneAvailable;
//# sourceMappingURL=IsPhoneAvailable.js.map