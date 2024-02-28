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
exports.Academic = void 0;
const swagger_1 = require("@nestjs/swagger");
const users_entity_1 = require("../../users/entities/users.entity");
const typeorm_1 = require("typeorm");
let Academic = class Academic {
};
exports.Academic = Academic;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Id', example: '1' }),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Academic.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'qualification type', example: 'Degree' }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Academic.prototype, "qualification_type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'qualification', example: 'Masters' }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Academic.prototype, "qualification", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'area', example: 'Computer Science' }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Academic.prototype, "area", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'institute', example: 'DHA Suffa University' }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Academic.prototype, "institute", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'institute address', example: 'KHI Branch' }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Academic.prototype, "institute_address", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'start year', example: '2020-12-25 05:00:00' }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Academic.prototype, "start_year", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'end year', example: '2022-11-25 05:10:00' }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Academic.prototype, "end_year", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'score', example: '3.7' }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Academic.prototype, "score", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'score unit', example: 'cgpa' }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Academic.prototype, "score_unit", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'status', example: 'Completed' }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Academic.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'has certificate',
        nullable: true,
        default: false,
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], Academic.prototype, "has_certificate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'certificate', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Academic.prototype, "certificate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'certificate link', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Academic.prototype, "certificate_link", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Academic.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Academic.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => users_entity_1.User, (user) => user.id),
    __metadata("design:type", users_entity_1.User)
], Academic.prototype, "user", void 0);
exports.Academic = Academic = __decorate([
    (0, typeorm_1.Entity)({ name: 'academics' })
], Academic);
//# sourceMappingURL=academic.entity.js.map