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
exports.RegistrationsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const mail_service_1 = require("../mail/mail.service");
const users_service_1 = require("../users/users.service");
const typeorm_2 = require("typeorm");
const registration_entity_1 = require("./entities/registration.entity");
let RegistrationsService = class RegistrationsService {
    constructor(registrationRepository, userService, mailService) {
        this.registrationRepository = registrationRepository;
        this.userService = userService;
        this.mailService = mailService;
    }
    genToken(size) {
        const rand = () => Math.random().toString(36).substring(2);
        const token = (length) => (rand() + rand() + rand() + rand()).substring(0, length);
        return token(size);
    }
    create(createRegistrationDto) {
        const regUser = this.registrationRepository.create(createRegistrationDto);
        return this.registrationRepository.save(regUser);
    }
    async verifyUniEmail({ uni_reg_id }) {
        let uni_email = uni_reg_id.toLowerCase() + '@dsu.edu.pk';
        const my_token = this.genToken(40);
        this.mailService.sendVerificationEmail(uni_email, my_token, 'internal');
        await this.registrationRepository.increment({ uni_email }, 'uni_email_sent', 1);
        await this.registrationRepository.update({ uni_email }, { step: 1 });
        await this.registrationRepository.update({ uni_email }, { uni_token: my_token });
        const reg_user = await this.registrationRepository.findOneBy({ uni_email });
        return { token: reg_user.uni_token, id: reg_user.id };
    }
    async getUniEmailTokenData({ token }) {
        const reg_user = await this.registrationRepository.findOne({
            where: { uni_token: token, uni_verified: true },
        });
        if (!reg_user)
            throw new common_1.HttpException('Invalid Token or Not Verified', common_1.HttpStatus.BAD_REQUEST);
        const { uni_email_sent, uni_token, uni_verified, email_sent, email_token, email_verified, createdAt, updatedAt } = reg_user, more = __rest(reg_user, ["uni_email_sent", "uni_token", "uni_verified", "email_sent", "email_token", "email_verified", "createdAt", "updatedAt"]);
        return more;
    }
    async validateUniEmail(token) {
        const res = await this.registrationRepository.findOneBy({
            uni_token: token,
        });
        if (!res)
            throw new common_1.HttpException('Invalid Token', common_1.HttpStatus.BAD_REQUEST);
        else {
            await this.registrationRepository.update({ id: res.id }, { uni_verified: true, step: 2 });
            return 'Your University Email Account has been Verified please Proceed with the Registration';
        }
    }
    async verifyNewAccountEmail(verifyNewAccountDto) {
        const registration = await this.registrationRepository.findOneBy({
            id: verifyNewAccountDto.reg_id,
        });
        if (!registration)
            throw new common_1.HttpException('Registration not found', common_1.HttpStatus.BAD_REQUEST);
        const my_token = this.genToken(40);
        const { id, first_name, middle_name, last_name, uni_email } = registration;
        const { phone, email, password } = verifyNewAccountDto;
        this.mailService.sendVerificationEmail(email, my_token, 'external');
        await this.registrationRepository.increment({ id }, 'email_sent', 1);
        await this.registrationRepository.update({ id }, { step: 3, email_token: my_token });
        const _a = await this.userService.create({
            uni_email,
            phone,
            first_name,
            middle_name,
            last_name,
            email,
            password,
        }), { password: pwd, id: uid } = _a, other = __rest(_a, ["password", "id"]);
        return { user_id: uid, token: my_token };
    }
    async getNewAccountTokenData({ token }) {
        const reg_user = await this.registrationRepository.findOne({
            where: { email_token: token, email_verified: true },
        });
        if (!reg_user)
            throw new common_1.HttpException('Invalid Token or Not Verified', common_1.HttpStatus.BAD_REQUEST);
        const _a = await this.userService.findByUniEmail(reg_user.uni_email), { password, role, active_status, registration_status, createdAt, updatedAt } = _a, more = __rest(_a, ["password", "role", "active_status", "registration_status", "createdAt", "updatedAt"]);
        return more;
    }
    async validateNewAccountEmail(token) {
        const res = await this.registrationRepository.findOneBy({
            email_token: token,
        });
        if (!res)
            throw new common_1.HttpException('Invalid Token', common_1.HttpStatus.BAD_REQUEST);
        else {
            await this.registrationRepository.update({ id: res.id }, { email_verified: true, step: 4 });
            return 'Your Public Email Account has been Verified please Proceed with the Registration';
        }
    }
    findAll() {
        return this.registrationRepository.find();
    }
    findOne(id) {
        return `This action returns a #${id} registration`;
    }
    update(id, updateRegistrationDto) {
        return `This action updates a #${id} registration`;
    }
    remove(id) {
        return `This action removes a #${id} registration`;
    }
    async getStepWithId(roll_number) {
        let uni_email = roll_number.toLowerCase() + '@dsu.edu.pk';
        const reg_user = await this.registrationRepository.findOneBy({ uni_email });
        if (!reg_user)
            throw new common_1.HttpException('Invalid roll number', common_1.HttpStatus.BAD_REQUEST);
        return { step: reg_user.step, id: reg_user.id };
    }
};
exports.RegistrationsService = RegistrationsService;
exports.RegistrationsService = RegistrationsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(registration_entity_1.Registration)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        users_service_1.UserService,
        mail_service_1.MailService])
], RegistrationsService);
//# sourceMappingURL=registrations.service.js.map