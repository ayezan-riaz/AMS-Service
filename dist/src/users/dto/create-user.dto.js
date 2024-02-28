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
exports.CreateUserDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const IsEmailAvailable_1 = require("./IsEmailAvailable");
const IsPhoneAvailable_1 = require("./IsPhoneAvailable");
const IsUniEmailUnique_1 = require("./IsUniEmailUnique");
class CreateUserDto {
}
exports.CreateUserDto = CreateUserDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Alumni Email', example: 'gosaad@outlook.com' }),
    (0, class_validator_1.IsEmail)(),
    (0, IsEmailAvailable_1.EmailAvailable)({ message: 'Email Already Exists' }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'University Email / Verification Email',
        example: 'saad.luqman@dsu.edu.pk',
    }),
    (0, class_validator_1.IsEmail)(),
    (0, IsUniEmailUnique_1.UniEmailAvailable)({ message: 'Uni Email Already Exists' }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "uni_email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Phone Number',
        example: '+92 337033321',
    }),
    (0, IsPhoneAvailable_1.PhoneAvailable)({ message: 'Phone Already Exists' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Alumni Password', example: '12345678' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'first name', example: 'Syed' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "first_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'middle name', example: 'Saad' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "middle_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'last name', example: 'Luqman', required: false }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "last_name", void 0);
//# sourceMappingURL=create-user.dto.js.map