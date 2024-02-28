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
exports.AcademicsUserInterceptor = void 0;
const common_1 = require("@nestjs/common");
const operators_1 = require("rxjs/operators");
const academics_service_1 = require("../src/academics/academics.service");
let AcademicsUserInterceptor = class AcademicsUserInterceptor {
    constructor(academicsService) {
        this.academicsService = academicsService;
    }
    async intercept(context, next) {
        const req = context.switchToHttp().getRequest();
        const academic_user = await this.academicsService.findAcademicsWithUser(req.params.id);
        if (!academic_user)
            throw new common_1.HttpException('Academic not found', common_1.HttpStatus.BAD_REQUEST);
        if (academic_user)
            req.custom = {
                userId: academic_user.user.id,
                certificate: academic_user.certificate,
            };
        return next.handle().pipe((0, operators_1.tap)((data) => {
            return data;
        }));
    }
};
exports.AcademicsUserInterceptor = AcademicsUserInterceptor;
exports.AcademicsUserInterceptor = AcademicsUserInterceptor = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [academics_service_1.AcademicsService])
], AcademicsUserInterceptor);
//# sourceMappingURL=academicsUser.interceptor.js.map