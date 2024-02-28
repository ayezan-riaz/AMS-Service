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
exports.UpdateAcademicDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const create_academic_dto_1 = require("./create-academic.dto");
class UpdateAcademicDto extends (0, mapped_types_1.PartialType)(create_academic_dto_1.CreateAcademicDto) {
}
exports.UpdateAcademicDto = UpdateAcademicDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'qualification type', example: 'Degree' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateAcademicDto.prototype, "qualification_type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'qualification', example: 'Masters' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateAcademicDto.prototype, "qualification", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'area', example: 'Computer Science' }),
    __metadata("design:type", String)
], UpdateAcademicDto.prototype, "area", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'institute', example: 'DHA Suffa University' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateAcademicDto.prototype, "institute", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'institute address',
        example: 'KHI Branch',
        required: false,
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateAcademicDto.prototype, "institute_address", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'start year', example: '2020-12-25 05:00:00' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Date)
], UpdateAcademicDto.prototype, "start_year", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'end year', example: '2022-11-25 05:10:00' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Date)
], UpdateAcademicDto.prototype, "end_year", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'score', example: '3.7' }),
    __metadata("design:type", String)
], UpdateAcademicDto.prototype, "score", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'score unit', example: 'cgpa' }),
    __metadata("design:type", String)
], UpdateAcademicDto.prototype, "score_unit", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'status', example: 'Completed' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateAcademicDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'has certificate', default: false }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Boolean)
], UpdateAcademicDto.prototype, "has_certificate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'certificate', required: false, default: null }),
    __metadata("design:type", String)
], UpdateAcademicDto.prototype, "certificate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'certificate link',
        required: false,
        default: null,
    }),
    __metadata("design:type", String)
], UpdateAcademicDto.prototype, "certificate_link", void 0);
//# sourceMappingURL=update-academic.dto.js.map