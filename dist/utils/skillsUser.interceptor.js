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
exports.SkillsUserInterceptor = void 0;
const common_1 = require("@nestjs/common");
const operators_1 = require("rxjs/operators");
const skills_service_1 = require("../src/skills/skills.service");
let SkillsUserInterceptor = class SkillsUserInterceptor {
    constructor(skillsService) {
        this.skillsService = skillsService;
    }
    async intercept(context, next) {
        const req = context.switchToHttp().getRequest();
        const skill_user = await this.skillsService.findSkillWithUser(req.params.id);
        if (!skill_user)
            throw new common_1.HttpException('Skill not found', common_1.HttpStatus.BAD_REQUEST);
        if (skill_user)
            req.custom = {
                userId: skill_user.user.id,
                certificate: skill_user.certificate,
            };
        return next.handle().pipe((0, operators_1.tap)((data) => {
            return data;
        }));
    }
};
exports.SkillsUserInterceptor = SkillsUserInterceptor;
exports.SkillsUserInterceptor = SkillsUserInterceptor = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [skills_service_1.SkillsService])
], SkillsUserInterceptor);
//# sourceMappingURL=skillsUser.interceptor.js.map