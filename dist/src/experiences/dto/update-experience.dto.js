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
exports.UpdateExperienceDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const create_experience_dto_1 = require("./create-experience.dto");
class UpdateExperienceDto extends (0, swagger_1.PartialType)(create_experience_dto_1.CreateExperienceDto) {
}
exports.UpdateExperienceDto = UpdateExperienceDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'company', example: 'SPARCO' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateExperienceDto.prototype, "company", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'designation', example: 'Trainee' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateExperienceDto.prototype, "designation", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'status', example: 'Contract' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateExperienceDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'nature of job', example: 'Federal Government' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateExperienceDto.prototype, "nature_of_job", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'start year', example: '2020-12-25 05:00:00' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Date)
], UpdateExperienceDto.prototype, "start_year", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'end year', example: '2022-11-25 05:10:00' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Date)
], UpdateExperienceDto.prototype, "end_year", void 0);
//# sourceMappingURL=update-experience.dto.js.map