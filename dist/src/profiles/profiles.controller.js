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
exports.ProfilesController = void 0;
const common_1 = require("@nestjs/common");
const profiles_service_1 = require("./profiles.service");
const create_profile_dto_1 = require("./dto/create-profile.dto");
const update_profile_dto_1 = require("./dto/update-profile.dto");
const swagger_1 = require("@nestjs/swagger");
const profile_entity_1 = require("./entities/profile.entity");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const constants_1 = require("../../utils/constants");
const path_1 = require("path");
const FilesHelper_1 = require("../../files/FilesHelper");
const profileResumeUser_interceptor_1 = require("../../utils/profileResumeUser.interceptor");
let ProfilesController = class ProfilesController {
    constructor(profilesService) {
        this.profilesService = profilesService;
    }
    create(userId, createProfileDto) {
        return this.profilesService.create(+userId, createProfileDto);
    }
    findAll() {
        return this.profilesService.findAll();
    }
    findAllforUser(id) {
        return this.profilesService.findAllforUser(+id);
    }
    findOne(id) {
        return this.profilesService.findOne(+id);
    }
    update(id, updateProfileDto) {
        return this.profilesService.update(+id, updateProfileDto);
    }
    remove(id) {
        return this.profilesService.remove(+id);
    }
    uploadFile(id, req, file) {
        return this.profilesService.updateResume(+id, file);
    }
};
exports.ProfilesController = ProfilesController;
__decorate([
    (0, common_1.Post)(':userId'),
    (0, swagger_1.ApiCreatedResponse)({ description: 'Profile Created', type: profile_entity_1.Profile }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Profile Creation Failed' }),
    __param(0, (0, common_1.Param)('userId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_profile_dto_1.CreateProfileDto]),
    __metadata("design:returntype", void 0)
], ProfilesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOkResponse)({
        description: 'All Profile',
        type: [profile_entity_1.Profile],
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProfilesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('user/:userId'),
    (0, swagger_1.ApiOkResponse)({
        description: 'Profile for a User',
        type: [profile_entity_1.Profile],
    }),
    __param(0, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProfilesController.prototype, "findAllforUser", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOkResponse)({ description: 'Profile by Id', type: profile_entity_1.Profile }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Profile Not Found' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProfilesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiCreatedResponse)({ description: 'Profile Update' }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Profile Update Failed' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_profile_dto_1.UpdateProfileDto]),
    __metadata("design:returntype", void 0)
], ProfilesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOkResponse)({
        description: 'Profile Deleted',
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProfilesController.prototype, "remove", null);
__decorate([
    (0, common_1.Post)(':id/uploadResume'),
    (0, swagger_1.ApiOkResponse)({
        description: 'Resume Upload Successfully - Request Body: multipart/form-data, Field Name: file',
    }),
    (0, common_1.UseInterceptors)(profileResumeUser_interceptor_1.ProfileResumeUserInterceptor, (0, platform_express_1.FileInterceptor)('file', {
        limits: { fileSize: 4 * 1024 * 1024 },
        fileFilter: (req, file, callback) => {
            const ext = (0, path_1.parse)(file.originalname).ext;
            if (!['.pdf', '.doc', '.docx', '.html', '.png', '.jpeg', '.jpg'].includes(ext)) {
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
                const filename = `${req.userId}/profileResume/${req.params.id}${fn.ext}`;
                const fileSys = new FilesHelper_1.default();
                if (req.custom.resume) {
                    console.log('deleting folder: Start');
                    fileSys.removeFolderOrFile(constants_1.constants.UPLOAD_LOCATION + req.custom.resume);
                    console.log('deleting folder: End');
                }
                console.log('creating folder: Start');
                fileSys.createAlumniResumeFolder({ userId: req.userId });
                console.log('creating folder: End');
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
], ProfilesController.prototype, "uploadFile", null);
exports.ProfilesController = ProfilesController = __decorate([
    (0, swagger_1.ApiTags)('Profiles'),
    (0, common_1.Controller)('profiles'),
    __metadata("design:paramtypes", [profiles_service_1.ProfilesService])
], ProfilesController);
//# sourceMappingURL=profiles.controller.js.map