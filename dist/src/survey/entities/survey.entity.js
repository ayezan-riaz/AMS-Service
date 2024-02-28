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
exports.Survey = void 0;
const swagger_1 = require("@nestjs/swagger");
const users_entity_1 = require("../../users/entities/users.entity");
const typeorm_1 = require("typeorm");
let Survey = class Survey {
};
exports.Survey = Survey;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Survey.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Choice Question (A to F)',
        example: 'A',
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Survey.prototype, "q1", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Choice Question (A to F)',
        example: 'A',
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Survey.prototype, "q2", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Choice Question (A to F)',
        example: 'A',
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Survey.prototype, "q3", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Choice Question (A to F)',
        example: 'A',
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Survey.prototype, "q4", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Choice Question (A to F)',
        example: 'A',
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Survey.prototype, "q5", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Choice Question (A to F)',
        example: 'A',
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Survey.prototype, "q6", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Choice Question (A to F)',
        example: 'A',
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Survey.prototype, "q7", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Choice Question (A to F)',
        example: 'A',
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Survey.prototype, "q8", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Choice Question (A to F)',
        example: 'A',
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Survey.prototype, "q9", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Choice Question (A to F)',
        example: 'A',
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Survey.prototype, "q10", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Choice Question (A to F)',
        example: 'A',
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Survey.prototype, "q11", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Choice Question (A to F)',
        example: 'A',
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Survey.prototype, "q12", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Choice Question (A to F)',
        example: 'A',
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Survey.prototype, "q13", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Choice Question (A to F)',
        example: 'A',
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Survey.prototype, "q14", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Choice Question (A to F)',
        example: 'A',
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Survey.prototype, "q15", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Choice Question (A to F)',
        example: 'A',
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Survey.prototype, "q16", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Choice Question (A to F)',
        example: 'A',
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Survey.prototype, "q17", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Choice Question (Yes/No)',
        example: 'No',
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Survey.prototype, "q18", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Choice Question (Yes/No with Reason)',
        example: 'Yes, I could do ..',
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Survey.prototype, "q19", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Choice Question (1 to 5)',
        example: '1',
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Survey.prototype, "q20", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Choice Question (1 to 5)',
        example: '1',
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Survey.prototype, "q21", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Choice Question (1 to 5)',
        example: '1',
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Survey.prototype, "q22", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Choice Question (1 to 5)',
        example: '1',
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Survey.prototype, "q23", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Choice Question (1 to 5)',
        example: '1',
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Survey.prototype, "q24", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Custom string',
        example: 'abcd...',
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Survey.prototype, "q25", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Choice Question (A to F)',
        example: 'B',
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Survey.prototype, "q26", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Choice Question (A to F)',
        example: 'A',
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Survey.prototype, "q27", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Choice Question (A to F)',
        example: 'A',
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Survey.prototype, "q28", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Choice Question (A to F)',
        example: 'A',
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Survey.prototype, "q29", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Choice Question (A to F)',
        example: 'A',
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Survey.prototype, "q30", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'name',
        example: 'Saad',
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Survey.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'registrationNo',
        example: 'SE232223',
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Survey.prototype, "registrationNo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'yearOfIntake',
        example: '2020',
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Survey.prototype, "yearOfIntake", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'degreeProgram',
        example: 'SE',
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Survey.prototype, "degreeProgram", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'yearOfGraduation',
        example: '2024',
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Survey.prototype, "yearOfGraduation", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'employed',
        example: 'No',
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Survey.prototype, "employed", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'current Employer',
        example: 'Avanza',
    }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Survey.prototype, "currentEmployer", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'position',
        example: 'Sr. Developer',
    }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Survey.prototype, "position", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'industry',
        example: 'Information Technology',
    }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Survey.prototype, "industry", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'employmentPeriod1',
        example: '2020-12-25 05:00:00',
    }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Date)
], Survey.prototype, "employmentPeriod1", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'employmentPeriod2',
        example: '2020-12-25 05:00:00',
    }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Date)
], Survey.prototype, "employmentPeriod2", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'lastSalary',
        example: '240000',
    }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], Survey.prototype, "lastSalary", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'academicSpecialization',
        example: 'Software Engineer',
    }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Survey.prototype, "academicSpecialization", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'professionalSpecialization',
        example: 'Software Engineer',
    }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Survey.prototype, "professionalSpecialization", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'firstJobExperienceYear',
        example: '2000',
    }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Survey.prototype, "firstJobExperienceYear", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'firstJobEmploymentPeriod1',
        example: '2020-12-25 05:00:00',
    }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Date)
], Survey.prototype, "firstJobEmploymentPeriod1", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'firstJobEmploymentPeriod2',
        example: '2020-12-25 05:00:00',
    }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Date)
], Survey.prototype, "firstJobEmploymentPeriod2", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'firstJobSalary',
        example: '24000',
    }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], Survey.prototype, "firstJobSalary", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'personalEmail',
        example: 'ab@gmail.com',
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Survey.prototype, "personalEmail", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'mobileContact',
        example: '033392382292',
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Survey.prototype, "mobileContact", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Survey.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Survey.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => users_entity_1.User),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", users_entity_1.User)
], Survey.prototype, "user", void 0);
exports.Survey = Survey = __decorate([
    (0, typeorm_1.Entity)({ name: 'survey' })
], Survey);
//# sourceMappingURL=survey.entity.js.map