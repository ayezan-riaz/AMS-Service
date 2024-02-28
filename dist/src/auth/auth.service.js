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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("../users/users.service");
const mail_service_1 = require("../mail/mail.service");
const jwt_1 = require("@nestjs/jwt");
let AuthService = class AuthService {
    constructor(userService, jwtService, mailService) {
        this.userService = userService;
        this.jwtService = jwtService;
        this.mailService = mailService;
    }
    async validateUser(email, password) {
        const user = await this.userService.findByEmail(email);
        if (user && user.password === password) {
            const { password } = user, rest = __rest(user, ["password"]);
            return rest;
        }
        return null;
    }
    async login(user) {
        const payload = {
            sub: user.id,
            email: user.email,
            sys: 'AMS',
        };
        return { access_token: this.jwtService.sign(payload) };
    }
    async applyResetPassword(applyPasswordReset) {
        const user = await this.userService.findByEmail(applyPasswordReset.email);
        const my_token = this.genToken(40);
        console.log('Waiting..');
        await this.mailService.sendPasswordConfirmationEmail(user.email, my_token);
        this.userService.updatePasswordToken(user.id, my_token);
        return {
            message: 'Password Reset Request Sent',
        };
    }
    async resetPassword(token, resetPassDto) {
        const user = await this.userService.findByToken(token);
        if (user) {
            let res = await this.userService.updatePassword(user.id, resetPassDto.password);
            return res;
        }
        else
            throw new common_1.HttpException('User not found with token: ' + token, common_1.HttpStatus.BAD_REQUEST);
    }
    genToken(size) {
        const rand = () => Math.random().toString(36).substring(2);
        const token = (length) => (rand() + rand() + rand() + rand()).substring(0, length);
        return token(size);
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UserService,
        jwt_1.JwtService,
        mail_service_1.MailService])
], AuthService);
//# sourceMappingURL=auth.service.js.map