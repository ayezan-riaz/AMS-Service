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
exports.AcademicsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const users_entity_1 = require("../users/entities/users.entity");
const typeorm_2 = require("typeorm");
const academic_entity_1 = require("./entities/academic.entity");
let AcademicsService = class AcademicsService {
    constructor(userRepository, academicsRepository) {
        this.userRepository = userRepository;
        this.academicsRepository = academicsRepository;
    }
    async create(id, createAcademicDto) {
        const user = await this.userRepository.findOneBy({ id });
        if (!user)
            throw new common_1.HttpException('User not found', common_1.HttpStatus.BAD_REQUEST);
        const newAcademics = this.academicsRepository.create(Object.assign(Object.assign({}, createAcademicDto), { createdAt: new Date(), updatedAt: new Date(), user }));
        return this.academicsRepository.save(newAcademics);
    }
    findAll() {
        return this.academicsRepository.find();
    }
    async findAllforUser(id) {
        const user = await this.userRepository.findOneBy({ id });
        if (!user)
            throw new common_1.HttpException('User not found', common_1.HttpStatus.BAD_REQUEST);
        return this.academicsRepository.find({
            where: {
                user: {
                    id,
                },
            },
        });
    }
    findOne(id) {
        return this.academicsRepository.findOneBy({ id });
    }
    update(id, updateAcademicDto) {
        return this.academicsRepository.update(id, Object.assign(Object.assign({}, updateAcademicDto), { updatedAt: new Date() }));
    }
    remove(id) {
        return this.academicsRepository.delete(id);
    }
    async updateCertificate(id, file) {
        return this.academicsRepository.update({ id }, { certificate: file.filename, has_certificate: true });
    }
    async findAcademicsWithUser(id) {
        let academics = await this.academicsRepository.findOne({
            where: { id },
            relations: ['user'],
        });
        return academics;
    }
};
exports.AcademicsService = AcademicsService;
exports.AcademicsService = AcademicsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(users_entity_1.User)),
    __param(1, (0, typeorm_1.InjectRepository)(academic_entity_1.Academic)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], AcademicsService);
//# sourceMappingURL=academics.service.js.map