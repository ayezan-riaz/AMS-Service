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
exports.Experience = void 0;
const swagger_1 = require("@nestjs/swagger");
const users_entity_1 = require("../../users/entities/users.entity");
const typeorm_1 = require("typeorm");
let Experience = class Experience {
};
exports.Experience = Experience;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Id', example: '1' }),
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int' }),
    __metadata("design:type", Number)
], Experience.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'company', example: 'SPARCO' }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Experience.prototype, "company", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'designation', example: 'Trainee' }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Experience.prototype, "designation", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'status', example: 'Contract' }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Experience.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'nature of job', example: 'Federal Government' }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Experience.prototype, "nature_of_job", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'start year', example: '2020-12-25 05:00:00' }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Experience.prototype, "start_year", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'end year', example: '2022-11-25 05:10:00' }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Experience.prototype, "end_year", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Experience.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Experience.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => users_entity_1.User, (user) => user.id),
    __metadata("design:type", users_entity_1.User)
], Experience.prototype, "user", void 0);
exports.Experience = Experience = __decorate([
    (0, typeorm_1.Entity)({ name: 'experiences' })
], Experience);
//# sourceMappingURL=experience.entity.js.map