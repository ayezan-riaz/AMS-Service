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
exports.CreateRegistrationDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const IsUniEmailUnique_1 = require("./IsUniEmailUnique");
class CreateRegistrationDto {
}
exports.CreateRegistrationDto = CreateRegistrationDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'University Email / Verification Email',
        example: 'saad.luqman@dsu.edu.pk',
    }),
    (0, class_validator_1.IsEmail)(),
    (0, IsUniEmailUnique_1.UniEmailAvailable)({ message: 'Duplicate uni_email' }),
    __metadata("design:type", String)
], CreateRegistrationDto.prototype, "uni_email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'first name', example: 'Syed' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateRegistrationDto.prototype, "first_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'middle name', example: 'Saad' }),
    __metadata("design:type", String)
], CreateRegistrationDto.prototype, "middle_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'last name', example: 'Luqman' }),
    __metadata("design:type", String)
], CreateRegistrationDto.prototype, "last_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'qualification', example: 'Masters' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateRegistrationDto.prototype, "qualification", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'area', example: 'Computer Science' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateRegistrationDto.prototype, "area", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Time of Registration',
        example: '2018-06-01 00:00:00',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Date)
], CreateRegistrationDto.prototype, "registration_time", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Time of Graduation',
        example: '2022-06-01 00:00:00',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Date)
], CreateRegistrationDto.prototype, "graduation_time", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'cgpa', example: '3.7' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateRegistrationDto.prototype, "cgpa", void 0);
//# sourceMappingURL=create-registration.dto.js.map