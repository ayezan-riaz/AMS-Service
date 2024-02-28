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
exports.UniEmailAvailable = exports.IsUniEmailUnique = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const class_validator_1 = require("class-validator");
const typeorm_2 = require("typeorm");
const users_entity_1 = require("../entities/users.entity");
let IsUniEmailUnique = class IsUniEmailUnique {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async validate(uni_email, args) {
        const user = await this.userRepository.findOneBy({ uni_email });
        if (user)
            return false;
        return true;
    }
};
exports.IsUniEmailUnique = IsUniEmailUnique;
exports.IsUniEmailUnique = IsUniEmailUnique = __decorate([
    (0, class_validator_1.ValidatorConstraint)({ async: true }),
    __param(0, (0, typeorm_1.InjectRepository)(users_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], IsUniEmailUnique);
function UniEmailAvailable(validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: [],
            validator: IsUniEmailUnique,
        });
    };
}
exports.UniEmailAvailable = UniEmailAvailable;
//# sourceMappingURL=IsUniEmailUnique.js.map