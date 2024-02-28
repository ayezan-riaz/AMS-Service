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
exports.User = void 0;
const swagger_1 = require("@nestjs/swagger");
const academic_entity_1 = require("../../academics/entities/academic.entity");
const experience_entity_1 = require("../../experiences/entities/experience.entity");
const profile_entity_1 = require("../../profiles/entities/profile.entity");
const skill_entity_1 = require("../../skills/entities/skill.entity");
const survey_entity_1 = require("../../survey/entities/survey.entity");
const typeorm_1 = require("typeorm");
const constants_1 = require("../../../utils/constants");
let User = class User {
};
exports.User = User;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Id', example: '1' }),
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int' }),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Email', example: 'gosaad@outlook.com' }),
    (0, typeorm_1.Column)({ type: 'varchar', length: 200, unique: true }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'University Email / Verification Email',
        example: 'saad.luqman@dsu.edu.pk',
    }),
    (0, typeorm_1.Column)({ type: 'varchar', length: 200, unique: true }),
    __metadata("design:type", String)
], User.prototype, "uni_email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Phone Number',
        example: '+92 337033321',
    }),
    (0, typeorm_1.Column)({ type: 'varchar', length: 20, unique: true, nullable: true }),
    __metadata("design:type", String)
], User.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'first name', example: 'Syed' }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "first_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'middle name', example: 'Saad' }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "middle_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'last name', example: 'Luqman' }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], User.prototype, "last_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Password', example: '12345678' }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Role', default: 2 }),
    (0, typeorm_1.Column)({ default: 2 }),
    __metadata("design:type", Number)
], User.prototype, "role", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Registration Status', default: 0 }),
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], User.prototype, "registration_status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Active Status', default: false }),
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], User.prototype, "active_status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: constants_1.constants.DEFAULT_AVATAR }),
    (0, typeorm_1.Column)({ default: constants_1.constants.DEFAULT_AVATAR }),
    __metadata("design:type", String)
], User.prototype, "avatar", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'password reset token',
        example: '40charsrc92oqaltm6bwgzf1idgon0wiak0u0o64',
    }),
    (0, typeorm_1.Column)({ length: 40, nullable: true }),
    __metadata("design:type", String)
], User.prototype, "password_reset_token", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], User.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], User.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => profile_entity_1.Profile, (profile) => profile.user),
    __metadata("design:type", profile_entity_1.Profile)
], User.prototype, "profile", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => survey_entity_1.Survey, (survey) => survey.user),
    __metadata("design:type", survey_entity_1.Survey)
], User.prototype, "survey", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => academic_entity_1.Academic, (academic) => academic.user),
    __metadata("design:type", Array)
], User.prototype, "academics", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => skill_entity_1.Skill, (skill) => skill.user),
    __metadata("design:type", Array)
], User.prototype, "skills", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => experience_entity_1.Experience, (experience) => experience.user),
    __metadata("design:type", Array)
], User.prototype, "experiences", void 0);
exports.User = User = __decorate([
    (0, typeorm_1.Entity)({ name: 'users' })
], User);
//# sourceMappingURL=users.entity.js.map