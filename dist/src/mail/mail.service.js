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
exports.MailService = void 0;
const common_1 = require("@nestjs/common");
const mailer_1 = require("@nestjs-modules/mailer");
const oauth2_1 = require("@googleapis/oauth2");
let MailService = class MailService {
    constructor(mailerService) {
        this.mailerService = mailerService;
    }
    async setTransport() {
        const OAuth2 = oauth2_1.auth.OAuth2;
        const oauth2Client = new OAuth2(process.env.GMAIL_CLIENT_ID, process.env.GMAIL_CLIENT_SECRET, 'https://developers.google.com/oauthplayground');
        oauth2Client.setCredentials({
            refresh_token: process.env.GMAIL_REFRESH_TOKEN,
        });
        const accessToken = await new Promise((resolve, reject) => {
            oauth2Client.getAccessToken((err, token) => {
                if (err) {
                    reject('Opps Failed to create access token');
                }
                resolve(token);
            });
        });
        const config = {
            service: 'gmail',
            auth: {
                type: 'OAuth2',
                user: process.env.GMAIL_EMAIL,
                clientId: process.env.GMAIL_CLIENT_ID,
                clientSecret: process.env.GMAIL_CLIENT_SECRET,
                accessToken,
            },
        };
        this.mailerService.addTransporter('gmail', config);
    }
    async sendMail(to) {
        try {
            await this.setTransport();
        }
        catch (err) {
            console.log(err);
            console.log('Email HALT');
            return;
        }
        this.mailerService
            .sendMail({
            transporterName: 'gmail',
            to: 'se201003@dsu.edu.pk,gosaad@outlook.com',
            from: 'DSU Alumni Portal <no-reply@dsu.edu.pk>',
            subject: 'Testing Nest Mailermodule with template ✔',
            template: 'welcome',
            context: {
                code: 'cf1a3f828287',
                username: 'john doe',
            },
        })
            .then((success) => {
            console.log(success);
        })
            .catch((err) => {
            console.log(err);
        });
    }
    async sendVerificationEmail(to, token, type) {
        try {
            await this.setTransport();
        }
        catch (err) {
            console.log(err);
            console.log('Email HALT');
            return;
        }
        this.mailerService
            .sendMail({
            transporterName: 'gmail',
            to: 'se201003@dsu.edu.pk,gosaad@outlook.com',
            from: 'DSU Alumni Portal <no-reply@dsu.edu.pk>',
            subject: type === 'internal'
                ? 'Registration: Alumni Verification'
                : 'Registration: Email Verification',
            template: 'AlumniUniEmail',
            context: {
                token,
                username: 'Alumni Name',
                domain: process.env.DOMAIN || 'https://alumni.dsu.edu.pk',
                link: type === 'internal'
                    ? '/registrations/validateUniEmail'
                    : '/registrations/validateAccountEmail',
            },
        })
            .then((success) => {
            console.log(success);
        })
            .catch((err) => {
            console.log(err);
        });
    }
    async sendPasswordConfirmationEmail(to, token) {
        try {
            await this.setTransport();
        }
        catch (err) {
            console.log(err);
            console.log('Email HALT');
            return;
        }
        this.mailerService
            .sendMail({
            transporterName: 'gmail',
            to: 'se201003@dsu.edu.pk,gosaad@outlook.com',
            from: 'DSU Alumni Portal <no-reply@dsu.edu.pk>',
            subject: 'Password Change Request Confirmation',
            template: 'AlumniPasswordChange',
            context: {
                token,
                username: 'Alumni Name',
                domain: process.env.FRONT_DOMAIN || 'https://alumni.dsu.edu.pk',
                link: process.env.FORGOT_PASS_PATH,
            },
        })
            .then((success) => {
            console.log(success);
        })
            .catch((err) => {
            console.log(err);
        });
    }
};
exports.MailService = MailService;
exports.MailService = MailService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [mailer_1.MailerService])
], MailService);
//# sourceMappingURL=mail.service.js.map