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
exports.CreateSurveyDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateSurveyDto {
}
exports.CreateSurveyDto = CreateSurveyDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Choice Question (A to F)',
        example: 'A',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateSurveyDto.prototype, "q1", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Choice Question (A to F)',
        example: 'A',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateSurveyDto.prototype, "q2", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Choice Question (A to F)',
        example: 'A',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateSurveyDto.prototype, "q3", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Choice Question (A to F)',
        example: 'A',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateSurveyDto.prototype, "q4", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Choice Question (A to F)',
        example: 'A',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateSurveyDto.prototype, "q5", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Choice Question (A to F)',
        example: 'A',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateSurveyDto.prototype, "q6", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Choice Question (A to F)',
        example: 'A',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateSurveyDto.prototype, "q7", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Choice Question (A to F)',
        example: 'A',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateSurveyDto.prototype, "q8", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Choice Question (A to F)',
        example: 'A',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateSurveyDto.prototype, "q9", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Choice Question (A to F)',
        example: 'A',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateSurveyDto.prototype, "q10", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Choice Question (A to F)',
        example: 'A',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateSurveyDto.prototype, "q11", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Choice Question (A to F)',
        example: 'A',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateSurveyDto.prototype, "q12", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Choice Question (A to F)',
        example: 'A',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateSurveyDto.prototype, "q13", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Choice Question (A to F)',
        example: 'A',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateSurveyDto.prototype, "q14", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Choice Question (A to F)',
        example: 'A',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateSurveyDto.prototype, "q15", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Choice Question (A to F)',
        example: 'A',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateSurveyDto.prototype, "q16", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Choice Question (A to F)',
        example: 'A',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateSurveyDto.prototype, "q17", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Choice Question (Yes/No)',
        example: 'No',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateSurveyDto.prototype, "q18", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Choice Question (Yes/No with Reason)',
        example: 'Yes, I could do ..',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateSurveyDto.prototype, "q19", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Choice Question (1 to 5)',
        example: '1',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateSurveyDto.prototype, "q20", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Choice Question (1 to 5)',
        example: '1',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateSurveyDto.prototype, "q21", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Choice Question (1 to 5)',
        example: '1',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateSurveyDto.prototype, "q22", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Choice Question (1 to 5)',
        example: '1',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateSurveyDto.prototype, "q23", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Choice Question (1 to 5)',
        example: '1',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateSurveyDto.prototype, "q24", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Custom string',
        example: 'abcd...',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateSurveyDto.prototype, "q25", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Choice Question (A to F)',
        example: 'B',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateSurveyDto.prototype, "q26", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Choice Question (A to F)',
        example: 'A',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateSurveyDto.prototype, "q27", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Choice Question (A to F)',
        example: 'A',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateSurveyDto.prototype, "q28", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Choice Question (A to F)',
        example: 'A',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateSurveyDto.prototype, "q29", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Choice Question (A to F)',
        example: 'A',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateSurveyDto.prototype, "q30", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'name',
        example: 'Saad',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateSurveyDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'registrationNo',
        example: 'SE232223',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateSurveyDto.prototype, "registrationNo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'yearOfIntake',
        example: '2020',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateSurveyDto.prototype, "yearOfIntake", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'degreeProgram',
        example: 'SE',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateSurveyDto.prototype, "degreeProgram", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'yearOfGraduation',
        example: '2024',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateSurveyDto.prototype, "yearOfGraduation", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'employed',
        example: 'No',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateSurveyDto.prototype, "employed", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'current Employer',
        example: 'Avanza',
    }),
    __metadata("design:type", String)
], CreateSurveyDto.prototype, "currentEmployer", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'position',
        example: 'Sr. Developer',
    }),
    __metadata("design:type", String)
], CreateSurveyDto.prototype, "position", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'industry',
        example: 'Information Technology',
    }),
    __metadata("design:type", String)
], CreateSurveyDto.prototype, "industry", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'employmentPeriod1',
        example: '2020-12-25 05:00:00',
    }),
    __metadata("design:type", Date)
], CreateSurveyDto.prototype, "employmentPeriod1", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'employmentPeriod2',
        example: '2020-12-25 05:00:00',
    }),
    __metadata("design:type", Date)
], CreateSurveyDto.prototype, "employmentPeriod2", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'lastSalary',
        example: '240000',
    }),
    __metadata("design:type", Number)
], CreateSurveyDto.prototype, "lastSalary", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'academicSpecialization',
        example: 'Software Engineer',
    }),
    __metadata("design:type", String)
], CreateSurveyDto.prototype, "academicSpecialization", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'professionalSpecialization',
        example: 'Software Engineer',
    }),
    __metadata("design:type", String)
], CreateSurveyDto.prototype, "professionalSpecialization", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'firstJobExperienceYear',
        example: '2000',
    }),
    __metadata("design:type", String)
], CreateSurveyDto.prototype, "firstJobExperienceYear", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'firstJobEmploymentPeriod1',
        example: '2020-12-25 05:00:00',
    }),
    __metadata("design:type", Date)
], CreateSurveyDto.prototype, "firstJobEmploymentPeriod1", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'firstJobEmploymentPeriod2',
        example: '2020-12-25 05:00:00',
    }),
    __metadata("design:type", Date)
], CreateSurveyDto.prototype, "firstJobEmploymentPeriod2", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'firstJobSalary',
        example: '24000',
    }),
    __metadata("design:type", Number)
], CreateSurveyDto.prototype, "firstJobSalary", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'personalEmail',
        example: 'ab@gmail.com',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateSurveyDto.prototype, "personalEmail", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'mobileContact',
        example: '033392382292',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateSurveyDto.prototype, "mobileContact", void 0);
//# sourceMappingURL=create-survey.dto.js.map