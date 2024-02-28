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
exports.UpdateSkillDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const create_skill_dto_1 = require("./create-skill.dto");
class UpdateSkillDto extends (0, swagger_1.PartialType)(create_skill_dto_1.CreateSkillDto) {
}
exports.UpdateSkillDto = UpdateSkillDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'main category', example: 'Software' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateSkillDto.prototype, "category", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'sub category', example: 'Web Development' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateSkillDto.prototype, "sub_category", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'tags', example: 'MERN Stack,CSS,HTML,JS,REACT' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateSkillDto.prototype, "tags", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'expert level', example: 50 }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], UpdateSkillDto.prototype, "level", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'has certificate', default: false }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Boolean)
], UpdateSkillDto.prototype, "has_certificate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'certificate', required: false, default: null }),
    __metadata("design:type", String)
], UpdateSkillDto.prototype, "certificate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'certificate link',
        required: false,
        default: null,
    }),
    __metadata("design:type", String)
], UpdateSkillDto.prototype, "certificate_link", void 0);
//# sourceMappingURL=update-skill.dto.js.map