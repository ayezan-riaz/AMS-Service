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
exports.VerifyNewAccountDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const IsEmailAvailable_1 = require("../../users/dto/IsEmailAvailable");
const IsPhoneAvailable_1 = require("../../users/dto/IsPhoneAvailable");
class VerifyNewAccountDto {
}
exports.VerifyNewAccountDto = VerifyNewAccountDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Account Email / Verification Email',
        example: 'gosaad@outlook.com',
    }),
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, IsEmailAvailable_1.EmailAvailable)({
        message: 'Requested Email is Already Registered: Registration',
    }),
    __metadata("design:type", String)
], VerifyNewAccountDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Phone Number',
        example: '+92 337033321',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, IsPhoneAvailable_1.PhoneAvailable)({ message: 'Phone is Already Registered: Registration' }),
    __metadata("design:type", String)
], VerifyNewAccountDto.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Password', example: '12345678' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], VerifyNewAccountDto.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Registration Id', example: '23' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], VerifyNewAccountDto.prototype, "reg_id", void 0);
//# sourceMappingURL=verify-new-account.dto.js.map