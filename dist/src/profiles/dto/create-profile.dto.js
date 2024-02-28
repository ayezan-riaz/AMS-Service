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
exports.CreateProfileDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
class CreateProfileDto {
}
exports.CreateProfileDto = CreateProfileDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'date of birth', example: '2020-12-25 05:00:00' }),
    (0, class_validator_1.IsDate)(),
    (0, class_transformer_1.Transform)(({ value }) => new Date(value)),
    (0, class_validator_1.MinDate)(new Date('1800-12-29')),
    __metadata("design:type", Date)
], CreateProfileDto.prototype, "date_of_birth", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Country', example: 'Pakistan' }),
    (0, class_validator_1.MinLength)(2),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateProfileDto.prototype, "country", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Timezone', example: 'GMT+5' }),
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateProfileDto.prototype, "timezone", void 0);
//# sourceMappingURL=create-profile.dto.js.map