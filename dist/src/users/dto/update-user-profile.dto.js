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
exports.UpdateUserProfileDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
class UpdateUserProfileDto {
}
exports.UpdateUserProfileDto = UpdateUserProfileDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Email', example: 'gosaad@outlook.com' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], UpdateUserProfileDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'University Email / Verification Email',
        example: 'saad.luqman@dsu.edu.pk',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], UpdateUserProfileDto.prototype, "uni_email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Phone Number',
        example: '+92 337033321',
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateUserProfileDto.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'first name', example: 'Syed' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateUserProfileDto.prototype, "first_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'middle name', example: 'Saad' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateUserProfileDto.prototype, "middle_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'last name', example: 'Luqman', required: false }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateUserProfileDto.prototype, "last_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'date of birth', example: '2020-12-25 05:00:00' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDate)(),
    (0, class_transformer_1.Transform)(({ value }) => new Date(value)),
    (0, class_validator_1.MinDate)(new Date('1800-12-29')),
    __metadata("design:type", Date)
], UpdateUserProfileDto.prototype, "date_of_birth", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Country', example: 'Pakistan' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.MinLength)(3),
    __metadata("design:type", String)
], UpdateUserProfileDto.prototype, "country", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Timezone', example: 'GMT+5' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateUserProfileDto.prototype, "timezone", void 0);
//# sourceMappingURL=update-user-profile.dto.js.map