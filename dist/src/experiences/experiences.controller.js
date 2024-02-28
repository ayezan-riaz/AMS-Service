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
exports.ExperiencesController = void 0;
const common_1 = require("@nestjs/common");
const experiences_service_1 = require("./experiences.service");
const create_experience_dto_1 = require("./dto/create-experience.dto");
const update_experience_dto_1 = require("./dto/update-experience.dto");
const swagger_1 = require("@nestjs/swagger");
const experience_entity_1 = require("./entities/experience.entity");
let ExperiencesController = class ExperiencesController {
    constructor(experiencesService) {
        this.experiencesService = experiencesService;
    }
    create(userId, createExperienceDto) {
        return this.experiencesService.create(+userId, createExperienceDto);
    }
    findAll() {
        return this.experiencesService.findAll();
    }
    findAllforUser(id) {
        return this.experiencesService.findAllforUser(+id);
    }
    findOne(id) {
        return this.experiencesService.findOne(+id);
    }
    update(id, updateExperienceDto) {
        return this.experiencesService.update(+id, updateExperienceDto);
    }
    remove(id) {
        return this.experiencesService.remove(+id);
    }
};
exports.ExperiencesController = ExperiencesController;
__decorate([
    (0, common_1.Post)(':userId'),
    (0, swagger_1.ApiCreatedResponse)({
        description: 'Experience Registered',
        type: experience_entity_1.Experience,
    }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Experience Registration Failed' }),
    __param(0, (0, common_1.Param)('userId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_experience_dto_1.CreateExperienceDto]),
    __metadata("design:returntype", void 0)
], ExperiencesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOkResponse)({
        description: 'All Experience',
        type: [experience_entity_1.Experience],
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ExperiencesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('user/:userId'),
    (0, swagger_1.ApiOkResponse)({
        description: 'All Experience for a User',
        type: [experience_entity_1.Experience],
    }),
    __param(0, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ExperiencesController.prototype, "findAllforUser", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOkResponse)({ description: 'Experience by Id', type: experience_entity_1.Experience }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Exp Not Found' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ExperiencesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiCreatedResponse)({ description: 'Experience Update' }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Experience Update Failed' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_experience_dto_1.UpdateExperienceDto]),
    __metadata("design:returntype", void 0)
], ExperiencesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOkResponse)({
        description: 'Experience Deleted',
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ExperiencesController.prototype, "remove", null);
exports.ExperiencesController = ExperiencesController = __decorate([
    (0, swagger_1.ApiTags)('Experiences'),
    (0, common_1.Controller)('experiences'),
    __metadata("design:paramtypes", [experiences_service_1.ExperiencesService])
], ExperiencesController);
//# sourceMappingURL=experiences.controller.js.map