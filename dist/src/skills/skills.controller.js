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
exports.SkillsController = void 0;
const common_1 = require("@nestjs/common");
const skills_service_1 = require("./skills.service");
const create_skill_dto_1 = require("./dto/create-skill.dto");
const update_skill_dto_1 = require("./dto/update-skill.dto");
const swagger_1 = require("@nestjs/swagger");
const skill_entity_1 = require("./entities/skill.entity");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const constants_1 = require("../../utils/constants");
const path_1 = require("path");
const FilesHelper_1 = require("../../files/FilesHelper");
const skillsUser_interceptor_1 = require("../../utils/skillsUser.interceptor");
let SkillsController = class SkillsController {
    constructor(skillsService) {
        this.skillsService = skillsService;
    }
    create(id, createSkillDto) {
        return this.skillsService.create(+id, createSkillDto);
    }
    findAll() {
        return this.skillsService.findAll();
    }
    findAllforUser(id) {
        return this.skillsService.findAllforUser(+id);
    }
    findOne(id) {
        return this.skillsService.findOne(+id);
    }
    update(id, updateSkillDto) {
        return this.skillsService.update(+id, updateSkillDto);
    }
    remove(id) {
        return this.skillsService.remove(+id);
    }
    uploadFile(id, req, file) {
        return this.skillsService.updateCertificate(+id, file);
    }
};
exports.SkillsController = SkillsController;
__decorate([
    (0, common_1.Post)(':userId'),
    (0, swagger_1.ApiCreatedResponse)({ description: 'Skill created', type: skill_entity_1.Skill }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Skill request failed' }),
    __param(0, (0, common_1.Param)('userId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_skill_dto_1.CreateSkillDto]),
    __metadata("design:returntype", void 0)
], SkillsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOkResponse)({
        description: 'All Skills',
        type: [skill_entity_1.Skill],
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SkillsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('user/:userId'),
    (0, swagger_1.ApiOkResponse)({
        description: 'All Skills for a User',
        type: [skill_entity_1.Skill],
    }),
    __param(0, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SkillsController.prototype, "findAllforUser", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOkResponse)({ description: 'Skill by Id', type: skill_entity_1.Skill }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Skill Not Found' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SkillsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiCreatedResponse)({ description: 'Skill Update' }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Skill Update Failed' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_skill_dto_1.UpdateSkillDto]),
    __metadata("design:returntype", void 0)
], SkillsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOkResponse)({
        description: 'Skill Deleted',
    }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Skill Not Found' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SkillsController.prototype, "remove", null);
__decorate([
    (0, common_1.Post)(':id/uploadCertificate'),
    (0, swagger_1.ApiOkResponse)({
        description: 'Certificate Upload Successfully - Request Body: multipart/form-data, Field Name: file',
    }),
    (0, common_1.UseInterceptors)(skillsUser_interceptor_1.SkillsUserInterceptor, (0, platform_express_1.FileInterceptor)('file', {
        limits: { fileSize: 4 * 1024 * 1024 },
        fileFilter: (req, file, callback) => {
            const ext = (0, path_1.parse)(file.originalname).ext;
            if (!['.pdf', '.doc', '.html', '.png', '.jpeg', '.jpg', '.docx'].includes(ext)) {
                req.fileValidationError = 'Invalid file type';
                return callback(new common_1.HttpException('Invalid File Type ' + ext, common_1.HttpStatus.BAD_REQUEST), false);
            }
            return callback(null, true);
        },
        storage: (0, multer_1.diskStorage)({
            destination: constants_1.constants.UPLOAD_LOCATION,
            filename: (req, file, cb) => {
                req.userId = req.custom.userId;
                const unique = new Date().getTime();
                const fn = (0, path_1.parse)(file.originalname);
                const filename = `${req.userId}/skillCertificates/${req.params.id}${fn.ext}`;
                const fileSys = new FilesHelper_1.default();
                if (req.custom.certificate)
                    fileSys.removeFolderOrFile(constants_1.constants.UPLOAD_LOCATION + req.custom.certificate);
                fileSys.createAlumniCertificateFolder({ userId: req.userId });
                cb(null, filename);
            },
        }),
    })),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Request)()),
    __param(2, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", void 0)
], SkillsController.prototype, "uploadFile", null);
exports.SkillsController = SkillsController = __decorate([
    (0, swagger_1.ApiTags)('Skills'),
    (0, common_1.Controller)('skills'),
    __metadata("design:paramtypes", [skills_service_1.SkillsService])
], SkillsController);
//# sourceMappingURL=skills.controller.js.map