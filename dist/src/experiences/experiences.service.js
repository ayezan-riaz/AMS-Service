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
exports.ExperiencesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const users_entity_1 = require("../users/entities/users.entity");
const typeorm_2 = require("typeorm");
const experience_entity_1 = require("./entities/experience.entity");
let ExperiencesService = class ExperiencesService {
    constructor(userRepository, experienceRepository) {
        this.userRepository = userRepository;
        this.experienceRepository = experienceRepository;
    }
    async create(userId, createExperienceDto) {
        const user = await this.userRepository.findOne({
            where: { id: userId },
            relations: { profile: true, skills: true },
        });
        if (!user)
            throw new common_1.HttpException('User Not Found', common_1.HttpStatus.BAD_REQUEST);
        const newExp = this.experienceRepository.create(Object.assign(Object.assign({}, createExperienceDto), { user }));
        return this.experienceRepository.save(newExp);
    }
    findAll() {
        return this.experienceRepository.find();
    }
    async findAllforUser(id) {
        const user = await this.userRepository.findOneBy({ id });
        if (!user)
            throw new common_1.HttpException('User not found', common_1.HttpStatus.BAD_REQUEST);
        return this.experienceRepository.find({
            where: {
                user: {
                    id,
                },
            },
        });
    }
    findOne(id) {
        return this.experienceRepository.findOneBy({ id });
    }
    update(id, updateExperienceDto) {
        return this.experienceRepository.update(id, updateExperienceDto);
    }
    remove(id) {
        return this.experienceRepository.delete(id);
    }
};
exports.ExperiencesService = ExperiencesService;
exports.ExperiencesService = ExperiencesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(users_entity_1.User)),
    __param(1, (0, typeorm_1.InjectRepository)(experience_entity_1.Experience)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], ExperiencesService);
//# sourceMappingURL=experiences.service.js.map