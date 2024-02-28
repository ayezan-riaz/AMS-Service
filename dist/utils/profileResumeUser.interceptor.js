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
exports.ProfileResumeUserInterceptor = void 0;
const common_1 = require("@nestjs/common");
const operators_1 = require("rxjs/operators");
const profiles_service_1 = require("../src/profiles/profiles.service");
let ProfileResumeUserInterceptor = class ProfileResumeUserInterceptor {
    constructor(profilesService) {
        this.profilesService = profilesService;
    }
    async intercept(context, next) {
        const req = context.switchToHttp().getRequest();
        const profile_user = await this.profilesService.findOne(req.params.id);
        if (!profile_user)
            throw new common_1.HttpException('Profile not found', common_1.HttpStatus.BAD_REQUEST);
        if (profile_user)
            req.custom = {
                userId: profile_user.user.id,
                resume: profile_user.resume,
            };
        return next.handle().pipe((0, operators_1.tap)((data) => {
            return data;
        }));
    }
};
exports.ProfileResumeUserInterceptor = ProfileResumeUserInterceptor;
exports.ProfileResumeUserInterceptor = ProfileResumeUserInterceptor = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [profiles_service_1.ProfilesService])
], ProfileResumeUserInterceptor);
//# sourceMappingURL=profileResumeUser.interceptor.js.map