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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const swagger_1 = require("@nestjs/swagger");
const FilesHelper_1 = require("../../files/FilesHelper");
const multer_1 = require("multer");
const path_1 = require("path");
const constants_1 = require("../../utils/constants");
const create_user_dto_1 = require("./dto/create-user.dto");
const update_user_profile_dto_1 = require("./dto/update-user-profile.dto");
const update_user_dto_1 = require("./dto/update-user.dto");
const users_entity_1 = require("./entities/users.entity");
const users_service_1 = require("./users.service");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    create(createUserDto) {
        return this.userService.create(createUserDto);
    }
    findAll() {
        const users = this.userService.findAll();
        return users;
    }
    findOne(id) {
        return this.userService.findOne(+id);
    }
    findOneS(id) {
        return this.userService.findOneWithSkills(+id);
    }
    findOneA(id) {
        return this.userService.findOneWithAcademics(+id);
    }
    findOneE(id) {
        return this.userService.findOneWithExperiences(+id);
    }
    findOneSur(id) {
        return this.userService.findOneWithSurvey(+id);
    }
    findOneP(id) {
        return this.userService.findOneWithProfile(+id);
    }
    findByEmail(email) {
        return this.userService.findByEmail(email);
    }
    update(id, updateUserDto) {
        return this.userService.update(+id, updateUserDto);
    }
    updateWithProfile(id, updateUserProfileDto) {
        return this.userService.updateWithProfile(+id, updateUserProfileDto);
    }
    remove(id) {
        return this.userService.remove(+id);
    }
    uploadFile(id, req, file) {
        return this.userService.updateAvatar(+id, file);
    }
};
exports.UserController = UserController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiCreatedResponse)({ description: 'User Registered', type: users_entity_1.User }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'User Registration Failed' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOkResponse)({
        description: 'All Users with Profile',
        type: [users_entity_1.User],
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOkResponse)({ description: 'User by Id', type: users_entity_1.User }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'User Not Found' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(':id/skills'),
    (0, swagger_1.ApiOkResponse)({
        description: 'User with Skills by Id',
        type: 'user with skills',
    }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'User Not Found' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "findOneS", null);
__decorate([
    (0, common_1.Get)(':id/academics'),
    (0, swagger_1.ApiOkResponse)({
        description: 'User with Academics by Id',
        type: 'user with academics',
    }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'User Not Found' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "findOneA", null);
__decorate([
    (0, common_1.Get)(':id/experiences'),
    (0, swagger_1.ApiOkResponse)({
        description: 'User with Experience by Id',
        type: 'user with Experience',
    }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'User Not Found' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "findOneE", null);
__decorate([
    (0, common_1.Get)(':id/survey'),
    (0, swagger_1.ApiOkResponse)({
        description: 'User with Survey by Id',
        type: 'user with survey',
    }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'User Not Found' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "findOneSur", null);
__decorate([
    (0, common_1.Get)(':id/profile'),
    (0, swagger_1.ApiOkResponse)({
        description: 'User with Profile by Id',
        type: 'user with profile',
    }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'User Not Found' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "findOneP", null);
__decorate([
    (0, common_1.Get)('email/:email'),
    (0, swagger_1.ApiOkResponse)({ description: 'User by Email', type: users_entity_1.User }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'User Not Found' }),
    __param(0, (0, common_1.Param)('email')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "findByEmail", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiCreatedResponse)({ description: 'User Update' }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'User Update Failed' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_user_dto_1.UpdateUserDto]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "update", null);
__decorate([
    (0, common_1.Patch)(':userId/withProfile'),
    (0, swagger_1.ApiCreatedResponse)({ description: 'User + Profile Update' }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'User + Profile Update Failed' }),
    __param(0, (0, common_1.Param)('userId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_user_profile_dto_1.UpdateUserProfileDto]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "updateWithProfile", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOkResponse)({
        description: 'User Deleted',
    }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "remove", null);
__decorate([
    (0, common_1.Post)(':id/uploadProfilePic'),
    (0, swagger_1.ApiOkResponse)({
        description: 'Avatar Upload Successfully - Request Body: multipart/form-data, Field Name: file',
    }),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', {
        limits: { fileSize: 4 * 1024 * 1024 },
        fileFilter: (req, file, callback) => {
            const ext = (0, path_1.parse)(file.originalname).ext;
            if (!['.png', '.jpeg', '.jpg'].includes(ext)) {
                req.fileValidationError = 'Invalid file type';
                return callback(new common_1.HttpException('Invalid File Type ' + ext, common_1.HttpStatus.BAD_REQUEST), false);
            }
            return callback(null, true);
        },
        storage: (0, multer_1.diskStorage)({
            destination: constants_1.constants.UPLOAD_LOCATION,
            filename: (req, file, cb) => {
                const fn = (0, path_1.parse)(file.originalname);
                const filename = `${req.params.id}/avatar/profilePic${fn.ext}`;
                const fileSys = new FilesHelper_1.default();
                fileSys.removeFolderOrFile(constants_1.constants.UPLOAD_LOCATION + req.params.id + '/avatar');
                fileSys.createAlumniProfileFolder({ id: req.params.id });
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
], UserController.prototype, "uploadFile", null);
exports.UserController = UserController = __decorate([
    (0, swagger_1.ApiTags)('Users'),
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [users_service_1.UserService])
], UserController);
//# sourceMappingURL=users.controller.js.map