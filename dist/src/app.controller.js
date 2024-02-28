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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const auth_service_1 = require("./auth/auth.service");
const apply_reset_password_dto_1 = require("./auth/dto/apply-reset-password.dto");
const login_dto_1 = require("./auth/dto/login.dto");
const reset_password_dto_1 = require("./auth/dto/reset-password.dto");
const jwt_auth_guard_1 = require("./auth/jwt-auth.guard");
const local_auth_guard_1 = require("./auth/local-auth.guard");
const mail_service_1 = require("./mail/mail.service");
let AppController = class AppController {
    constructor(authService, mailService) {
        this.authService = authService;
        this.mailService = mailService;
    }
    login(req, loginDto) {
        console.log(req);
        return this.authService.login(req.user);
    }
    applyResetPassword(applyPasswordReset) {
        return this.authService.applyResetPassword(applyPasswordReset);
    }
    resetPassword(token, resetPassDto) {
        return this.authService.resetPassword(token, resetPassDto);
    }
    getHello(req) {
        const user = req.user;
        console.log(user);
        const { sub, eml, sys, sts, iat, exp } = user;
        return { sub, eml, sys, sts, iat, exp };
    }
    main() {
        return `This is a deployed Service for Alumni Management System,
    " https://ams-service-production.up.railway.app/api " 
    is no longer active, the new root url is : => 
    " https://amsbackend-ghub.onrender.com/api "`;
    }
    message() {
        return `This is a deployed Service Message`;
    }
    sendMail(email) {
        return this.mailService.sendMail(email);
    }
};
exports.AppController = AppController;
__decorate([
    (0, common_1.UseGuards)(local_auth_guard_1.LocalAuthGuard),
    (0, common_1.Post)('login'),
    (0, swagger_1.ApiOkResponse)({
        description: 'Profile by Id',
        type: typeof { message: 'asda' },
    }),
    (0, swagger_1.ApiBadRequestResponse)({
        description: 'Authentication Failed',
    }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, login_dto_1.LoginDto]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "login", null);
__decorate([
    (0, common_1.Post)('applyPasswordReset'),
    (0, swagger_1.ApiOkResponse)({
        description: 'Reset Password',
        type: (Promise),
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [apply_reset_password_dto_1.ApplyResetPasswordDto]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "applyResetPassword", null);
__decorate([
    (0, common_1.Post)('resetPassword'),
    (0, swagger_1.ApiOkResponse)({
        description: 'Reset Password',
        type: typeof true,
    }),
    __param(0, (0, common_1.Query)('token')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, reset_password_dto_1.ResetPasswordDto]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "resetPassword", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('protected'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], AppController.prototype, "getHello", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "main", null);
__decorate([
    (0, common_1.Get)('message'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "message", null);
__decorate([
    (0, common_1.Post)('sendMail/:email'),
    __param(0, (0, common_1.Param)('email')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "sendMail", null);
exports.AppController = AppController = __decorate([
    (0, swagger_1.ApiTags)('Auth'),
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [auth_service_1.AuthService,
        mail_service_1.MailService])
], AppController);
//# sourceMappingURL=app.controller.js.map