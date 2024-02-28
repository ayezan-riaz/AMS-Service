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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const create_user_dto_1 = require("./create-user.dto");
const IsEmailAvailable_1 = require("./IsEmailAvailable");
const IsPhoneAvailable_1 = require("./IsPhoneAvailable");
const IsUniEmailUnique_1 = require("./IsUniEmailUnique");
class UpdateUserDto extends (0, mapped_types_1.PartialType)(create_user_dto_1.CreateUserDto) {
}
exports.UpdateUserDto = UpdateUserDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Email', example: 'gosaad@outlook.com' }),
    (0, class_validator_1.IsEmail)(),
    (0, IsEmailAvailable_1.EmailAvailable)({ message: 'Email Already Exists' }),
    __metadata("design:type", String)
], UpdateUserDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'University Email / Verification Email',
        example: 'saad.luqman@dsu.edu.pk',
    }),
    (0, class_validator_1.IsEmail)(),
    (0, IsUniEmailUnique_1.UniEmailAvailable)({ message: 'Uni Email Already Exists' }),
    __metadata("design:type", String)
], UpdateUserDto.prototype, "uni_email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Phone Number',
        example: '+92 337033321',
    }),
    (0, IsPhoneAvailable_1.PhoneAvailable)({ message: 'Phone Already Exists' }),
    __metadata("design:type", String)
], UpdateUserDto.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Registration Status', default: 0 }),
    __metadata("design:type", Number)
], UpdateUserDto.prototype, "registration_status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Active Status', default: false }),
    __metadata("design:type", Boolean)
], UpdateUserDto.prototype, "active_status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Password', example: '12345678' }),
    __metadata("design:type", String)
], UpdateUserDto.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Password Reset Token', example: '12345678' }),
    __metadata("design:type", String)
], UpdateUserDto.prototype, "password_reset_token", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'first name', example: 'Syed' }),
    __metadata("design:type", String)
], UpdateUserDto.prototype, "first_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'middle name', example: 'Saad' }),
    __metadata("design:type", String)
], UpdateUserDto.prototype, "middle_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'last name', example: 'Luqman', required: false }),
    __metadata("design:type", String)
], UpdateUserDto.prototype, "last_name", void 0);
//# sourceMappingURL=update-user.dto.js.map