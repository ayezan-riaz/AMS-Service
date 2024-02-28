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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const FilesHelper_1 = require("../../files/FilesHelper");
const profile_entity_1 = require("../profiles/entities/profile.entity");
const typeorm_2 = require("typeorm");
const users_entity_1 = require("./entities/users.entity");
let UserService = class UserService {
    constructor(profileRepository, userRepository, fileHelper) {
        this.profileRepository = profileRepository;
        this.userRepository = userRepository;
        this.fileHelper = fileHelper;
    }
    async create(userDetails) {
        const newUser = this.userRepository.create(Object.assign(Object.assign({}, userDetails), { role: 2 }));
        const createdUser = await this.userRepository.save(newUser);
        if (this.fileHelper.createAlumniFolder(createdUser))
            return createdUser;
        else
            throw new common_1.HttpException('Something Went Wrong - Folder Write failed!', common_1.HttpStatus.FORBIDDEN);
    }
    findAll() {
        return this.userRepository.find({ relations: ['profile'] });
    }
    async findOne(id) {
        const user = await this.userRepository.findOne({
            where: { id },
        });
        if (user)
            return user;
        else
            throw new common_1.HttpException('User not found', common_1.HttpStatus.BAD_REQUEST);
    }
    async findOneWithSkills(id) {
        const user = await this.userRepository.findOne({
            where: { id },
            relations: ['skills'],
        });
        if (user)
            return user;
        else
            throw new common_1.HttpException('User not found', common_1.HttpStatus.BAD_REQUEST);
    }
    async findOneWithAcademics(id) {
        const user = await this.userRepository.findOne({
            where: { id },
            relations: ['academics'],
        });
        if (user)
            return user;
        else
            throw new common_1.HttpException('User not found', common_1.HttpStatus.BAD_REQUEST);
    }
    async findOneWithExperiences(id) {
        const user = await this.userRepository.findOne({
            where: { id },
            relations: ['experiences'],
        });
        if (user)
            return user;
        else
            throw new common_1.HttpException('User not found', common_1.HttpStatus.BAD_REQUEST);
    }
    async findOneWithSurvey(id) {
        const user = await this.userRepository.findOne({
            where: { id },
            relations: ['survey'],
        });
        if (user)
            return user;
        else
            throw new common_1.HttpException('User not found', common_1.HttpStatus.BAD_REQUEST);
    }
    async findOneWithProfile(id) {
        const user = await this.userRepository.findOne({
            where: { id },
            relations: ['profile'],
        });
        if (user)
            return user;
        else
            throw new common_1.HttpException('User not found', common_1.HttpStatus.BAD_REQUEST);
    }
    async findByEmail(email) {
        const user = await this.userRepository.findOneBy({ email });
        if (user)
            return user;
        else
            throw new common_1.HttpException('User not found with email: ' + email, common_1.HttpStatus.BAD_REQUEST);
    }
    async findByToken(token) {
        const user = await this.userRepository.findOneBy({
            password_reset_token: token,
        });
        if (user)
            return user;
        else
            throw new common_1.HttpException('User not found with token: ' + token, common_1.HttpStatus.BAD_REQUEST);
    }
    async findByUniEmail(uni_email) {
        console.log('Email seaching ..');
        const user = await this.userRepository.findOneBy({ uni_email });
        if (user)
            return user;
        else
            throw new common_1.HttpException('User not found with email: ' + uni_email, common_1.HttpStatus.BAD_REQUEST);
    }
    update(id, userDetails) {
        return this.userRepository.update({ id }, Object.assign({}, userDetails));
    }
    async updateWithProfile(id, userProfileDetails) {
        const user = await this.userRepository.findOne({
            where: { id },
            relations: ['profile'],
        });
        if (!user.profile)
            throw new common_1.HttpException('First Create a Profile Befor Updating It: ', common_1.HttpStatus.BAD_REQUEST);
        if (userProfileDetails.email) {
            const emailUser = await this.userRepository.findOneBy({
                email: userProfileDetails.email,
            });
            if (emailUser && emailUser.id !== user.id)
                throw new common_1.HttpException('User found with email: ' + userProfileDetails.email, common_1.HttpStatus.BAD_REQUEST);
        }
        if (userProfileDetails.uni_email) {
            const uniEmailUser = await this.userRepository.findOneBy({
                uni_email: userProfileDetails.uni_email,
            });
            if (uniEmailUser && uniEmailUser.id !== user.id)
                throw new common_1.HttpException('User found with uni email: ' + userProfileDetails.uni_email, common_1.HttpStatus.BAD_REQUEST);
        }
        if (userProfileDetails.phone) {
            const phoneUser = await this.userRepository.findOneBy({
                phone: userProfileDetails.phone,
            });
            if (phoneUser && phoneUser.id !== user.id)
                throw new common_1.HttpException('User found with phone: ' + userProfileDetails.phone, common_1.HttpStatus.BAD_REQUEST);
        }
        const { date_of_birth, country, timezone } = userProfileDetails, more = __rest(userProfileDetails, ["date_of_birth", "country", "timezone"]);
        await this.profileRepository.update(user.profile.id, {
            date_of_birth,
            country,
            timezone,
        });
        return this.userRepository.update({ id }, Object.assign({}, more));
    }
    updatePassword(id, password) {
        return this.userRepository.update({ id }, { password, password_reset_token: null });
    }
    updatePasswordToken(id, password_reset_token) {
        return this.userRepository.update({ id }, { password_reset_token });
    }
    async updateAvatar(id, file) {
        return this.userRepository.update({ id }, { avatar: file.filename });
    }
    remove(id) {
        return this.userRepository.delete({ id });
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(profile_entity_1.Profile)),
    __param(1, (0, typeorm_1.InjectRepository)(users_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        FilesHelper_1.default])
], UserService);
//# sourceMappingURL=users.service.js.map