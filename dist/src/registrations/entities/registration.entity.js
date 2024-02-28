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
exports.Registration = void 0;
const swagger_1 = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
let Registration = class Registration {
};
exports.Registration = Registration;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Id', example: '1' }),
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int' }),
    __metadata("design:type", Number)
], Registration.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'University Email / Verification Email',
        example: 'saad.luqman@dsu.edu.pk',
    }),
    (0, typeorm_1.Column)({ type: 'varchar', length: 200, unique: true }),
    __metadata("design:type", String)
], Registration.prototype, "uni_email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'first name', example: 'Syed' }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Registration.prototype, "first_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'middle name', example: 'Saad' }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Registration.prototype, "middle_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'last name', example: 'Luqman' }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Registration.prototype, "last_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'qualification', example: 'Masters' }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Registration.prototype, "qualification", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'area', example: 'Computer Science' }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Registration.prototype, "area", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Time of Registration',
        example: '2018-06-01 00:00:00',
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Registration.prototype, "registration_time", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Time of Graduation',
        example: '2022-06-01 00:00:00',
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Registration.prototype, "graduation_time", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'cgpa', example: '3.7' }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Registration.prototype, "cgpa", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Registartion Step', example: '0' }),
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], Registration.prototype, "step", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'uni_token',
        example: '40charsrc92oqaltm6bwgzf1idgon0wiak0u0o64',
    }),
    (0, typeorm_1.Column)({ length: 40, nullable: true }),
    __metadata("design:type", String)
], Registration.prototype, "uni_token", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'uni verified', example: 'false' }),
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], Registration.prototype, "uni_verified", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Count of uni verification email sent',
        example: '0',
    }),
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], Registration.prototype, "uni_email_sent", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'email_token',
        example: '40charsrc92oqaltm6bwgzf1idgon0wiak0u0o64',
    }),
    (0, typeorm_1.Column)({ length: 40, nullable: true }),
    __metadata("design:type", String)
], Registration.prototype, "email_token", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'email verified', example: 'false' }),
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], Registration.prototype, "email_verified", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Count of account verification email sent',
        example: '0',
    }),
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], Registration.prototype, "email_sent", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Registration.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Registration.prototype, "updatedAt", void 0);
exports.Registration = Registration = __decorate([
    (0, typeorm_1.Entity)({ name: 'registrations' })
], Registration);
//# sourceMappingURL=registration.entity.js.map