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
exports.SkillsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const FilesHelper_1 = require("../../files/FilesHelper");
const users_entity_1 = require("../users/entities/users.entity");
const typeorm_2 = require("typeorm");
const skill_entity_1 = require("./entities/skill.entity");
let SkillsService = class SkillsService {
    constructor(userRepository, skillRepository, fileHelper) {
        this.userRepository = userRepository;
        this.skillRepository = skillRepository;
        this.fileHelper = fileHelper;
    }
    async create(id, createSkillDto) {
        const user = await this.userRepository.findOneBy({ id });
        if (!user)
            throw new common_1.HttpException('User not found', common_1.HttpStatus.BAD_REQUEST);
        const newSkill = this.skillRepository.create(Object.assign(Object.assign({}, createSkillDto), { user }));
        return this.skillRepository.save(newSkill);
    }
    findAll() {
        return this.skillRepository.find();
    }
    async findAllforUser(id) {
        const user = await this.userRepository.findOneBy({ id });
        if (!user)
            throw new common_1.HttpException('User not found', common_1.HttpStatus.BAD_REQUEST);
        return this.skillRepository.find({
            where: {
                user: {
                    id,
                },
            },
        });
    }
    async findOne(id) {
        const skill = await this.skillRepository.findOneBy({ id });
        if (!skill)
            throw new common_1.HttpException('Skill not found', common_1.HttpStatus.BAD_REQUEST);
        return skill;
    }
    update(id, updateSkillDto) {
        return this.skillRepository.update({ id }, Object.assign({}, updateSkillDto));
    }
    async remove(id) {
        const delUser = await this.skillRepository.delete({ id });
        if (!delUser.affected)
            throw new common_1.HttpException('Skill not found', common_1.HttpStatus.BAD_REQUEST);
        return delUser;
    }
    async updateCertificate(id, file) {
        return this.skillRepository.update({ id }, { certificate: file.filename, has_certificate: true });
    }
    async findSkillWithUser(id) {
        let skill = await this.skillRepository.findOne({
            where: { id },
            relations: ['user'],
        });
        return skill;
    }
};
exports.SkillsService = SkillsService;
exports.SkillsService = SkillsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(users_entity_1.User)),
    __param(1, (0, typeorm_1.InjectRepository)(skill_entity_1.Skill)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        FilesHelper_1.default])
], SkillsService);
//# sourceMappingURL=skills.service.js.map