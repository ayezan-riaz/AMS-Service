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
exports.Profile = void 0;
const swagger_1 = require("@nestjs/swagger");
const users_entity_1 = require("../../users/entities/users.entity");
const typeorm_1 = require("typeorm");
let Profile = class Profile {
};
exports.Profile = Profile;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Profile.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'date of birth', example: '2020-12-25 05:00:00' }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Profile.prototype, "date_of_birth", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'country', example: 'Pakistan' }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Profile.prototype, "country", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Timezone', example: 'GMT+5' }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Profile.prototype, "timezone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Resume' }),
    (0, typeorm_1.Column)({
        nullable: true,
    }),
    __metadata("design:type", String)
], Profile.prototype, "resume", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Profile.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Profile.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => users_entity_1.User),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", users_entity_1.User)
], Profile.prototype, "user", void 0);
exports.Profile = Profile = __decorate([
    (0, typeorm_1.Entity)({ name: 'profiles' })
], Profile);
//# sourceMappingURL=profile.entity.js.map