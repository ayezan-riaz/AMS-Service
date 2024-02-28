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
exports.ProfilesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const users_entity_1 = require("../users/entities/users.entity");
const typeorm_2 = require("typeorm");
const profile_entity_1 = require("./entities/profile.entity");
let ProfilesService = class ProfilesService {
    constructor(userRepository, profileRepository) {
        this.userRepository = userRepository;
        this.profileRepository = profileRepository;
    }
    async create(userId, createProfileDto) {
        const user = await this.userRepository.findOne({
            where: { id: userId },
            relations: { profile: true },
        });
        if (!user)
            throw new common_1.HttpException('User Not Found', common_1.HttpStatus.BAD_REQUEST);
        else if (user.profile != null) {
            throw new common_1.HttpException('User Profile Previously Exists', common_1.HttpStatus.BAD_REQUEST);
        }
        const createProfile = this.profileRepository.create(createProfileDto);
        createProfile.user = user;
        return this.profileRepository.save(createProfile);
    }
    findAll() {
        return this.profileRepository.find();
    }
    async findAllforUser(id) {
        const user = await this.userRepository.findOneBy({ id });
        if (!user)
            throw new common_1.HttpException('User not found', common_1.HttpStatus.BAD_REQUEST);
        return this.profileRepository.findOne({
            where: {
                user: {
                    id,
                },
            },
        });
    }
    findOne(id) {
        return this.profileRepository.findOne({
            where: { id },
            relations: ['user'],
        });
    }
    update(id, updateProfileDto) {
        return this.profileRepository.update(id, updateProfileDto);
    }
    remove(id) {
        return this.profileRepository.delete(id);
    }
    async updateResume(id, file) {
        return this.profileRepository.update({ id }, { resume: file.filename });
    }
};
exports.ProfilesService = ProfilesService;
exports.ProfilesService = ProfilesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(users_entity_1.User)),
    __param(1, (0, typeorm_1.InjectRepository)(profile_entity_1.Profile)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], ProfilesService);
//# sourceMappingURL=profiles.service.js.map