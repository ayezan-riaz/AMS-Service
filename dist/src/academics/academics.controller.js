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
exports.AcademicsController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const swagger_1 = require("@nestjs/swagger");
const FilesHelper_1 = require("../../files/FilesHelper");
const multer_1 = require("multer");
const path_1 = require("path");
const academicsUser_interceptor_1 = require("../../utils/academicsUser.interceptor");
const constants_1 = require("../../utils/constants");
const academics_service_1 = require("./academics.service");
const create_academic_dto_1 = require("./dto/create-academic.dto");
const update_academic_dto_1 = require("./dto/update-academic.dto");
const academic_entity_1 = require("./entities/academic.entity");
let AcademicsController = class AcademicsController {
    constructor(academicsService) {
        this.academicsService = academicsService;
    }
    create(createAcademicDto, id) {
        return this.academicsService.create(+id, createAcademicDto);
    }
    findAll() {
        return this.academicsService.findAll();
    }
    findAllforUser(id) {
        return this.academicsService.findAllforUser(+id);
    }
    findOne(id) {
        return this.academicsService.findOne(+id);
    }
    update(id, updateAcademicDto) {
        return this.academicsService.update(+id, updateAcademicDto);
    }
    remove(id) {
        return this.academicsService.remove(+id);
    }
    uploadFile(id, req, file) {
        return this.academicsService.updateCertificate(+id, file);
    }
};
exports.AcademicsController = AcademicsController;
__decorate([
    (0, common_1.Post)(':userId'),
    (0, swagger_1.ApiCreatedResponse)({
        description: 'Academics Record Created',
        type: academic_entity_1.Academic,
    }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Academic Error' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_academic_dto_1.CreateAcademicDto, String]),
    __metadata("design:returntype", void 0)
], AcademicsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOkResponse)({
        description: 'All Users with Profile',
        type: [academic_entity_1.Academic],
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AcademicsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('user/:userId'),
    (0, swagger_1.ApiOkResponse)({
        description: 'All Academic for a User',
        type: [academic_entity_1.Academic],
    }),
    __param(0, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AcademicsController.prototype, "findAllforUser", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOkResponse)({ description: 'Academic by Id', type: academic_entity_1.Academic }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Academic Not Found' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AcademicsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiCreatedResponse)({ description: 'Academics Update' }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Academic Update Failed' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_academic_dto_1.UpdateAcademicDto]),
    __metadata("design:returntype", void 0)
], AcademicsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOkResponse)({
        description: 'User Deleted',
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AcademicsController.prototype, "remove", null);
__decorate([
    (0, common_1.Post)(':id/uploadCertificate'),
    (0, swagger_1.ApiOkResponse)({
        description: 'Certificate Upload Successfully - Request Body: multipart/form-data, Field Name: file',
    }),
    (0, common_1.UseInterceptors)(academicsUser_interceptor_1.AcademicsUserInterceptor, (0, platform_express_1.FileInterceptor)('file', {
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
                const filename = `${req.userId}/academicCertificates/${req.params.id}${fn.ext}`;
                const fileSys = new FilesHelper_1.default();
                if (req.custom.certificate)
                    fileSys.removeFolderOrFile(constants_1.constants.UPLOAD_LOCATION + req.custom.certificate);
                fileSys.createAlumniAcademicsFolder({ userId: req.userId });
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
], AcademicsController.prototype, "uploadFile", null);
exports.AcademicsController = AcademicsController = __decorate([
    (0, swagger_1.ApiTags)('Academics'),
    (0, common_1.Controller)('academics'),
    __metadata("design:paramtypes", [academics_service_1.AcademicsService])
], AcademicsController);
//# sourceMappingURL=academics.controller.js.map