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
exports.Skill = void 0;
const swagger_1 = require("@nestjs/swagger");
const users_entity_1 = require("../../users/entities/users.entity");
const typeorm_1 = require("typeorm");
let Skill = class Skill {
};
exports.Skill = Skill;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Id', example: '1' }),
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int' }),
    __metadata("design:type", Number)
], Skill.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'main category', example: 'Software' }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Skill.prototype, "category", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'sub category', example: 'Web Development' }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Skill.prototype, "sub_category", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'tags', example: 'MERN Stack,CSS,HTML,JS,REACT' }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Skill.prototype, "tags", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'expert level', nullable: true }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Skill.prototype, "level", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'has certificate', nullable: true }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], Skill.prototype, "has_certificate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'certificate', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Skill.prototype, "certificate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'certificate link', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Skill.prototype, "certificate_link", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Skill.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Skill.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => users_entity_1.User, (user) => user.id),
    __metadata("design:type", users_entity_1.User)
], Skill.prototype, "user", void 0);
exports.Skill = Skill = __decorate([
    (0, typeorm_1.Entity)({ name: 'skills' })
], Skill);
//# sourceMappingURL=skill.entity.js.map