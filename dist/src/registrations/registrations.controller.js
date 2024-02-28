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
exports.RegistrationsController = void 0;
const common_1 = require("@nestjs/common");
const registrations_service_1 = require("./registrations.service");
const create_registration_dto_1 = require("./dto/create-registration.dto");
const swagger_1 = require("@nestjs/swagger");
const registration_entity_1 = require("./entities/registration.entity");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const constants_1 = require("../../utils/constants");
const path_1 = require("path");
const FilesHelper_1 = require("../../files/FilesHelper");
const verify_uni_email_dto_1 = require("./dto/verify-uni-email.dto");
const verify_new_account_dto_1 = require("./dto/verify-new-account.dto");
const token_dto_1 = require("./dto/token.dto");
const users_entity_1 = require("../users/entities/users.entity");
const csv_parse_1 = require("csv-parse");
const fs = require("fs");
let RegistrationsController = class RegistrationsController {
    constructor(registrationsService) {
        this.registrationsService = registrationsService;
    }
    findAll() {
        return this.registrationsService.findAll();
    }
    create(createRegistrationDto) {
        return this.registrationsService.create(createRegistrationDto);
    }
    async uploadFile(file) {
        const headers = ['id', 'fname', 'lname'];
        const records = [];
        const csvFilePath = constants_1.constants.UPLOAD_LOCATION + file.filename;
        const fileContent = fs.readFileSync(csvFilePath, { encoding: 'utf-8' });
        let readError = 'No Error';
        const parser = (0, csv_parse_1.parse)(fileContent, {
            delimiter: ',',
            columns: headers,
            trim: true,
            skip_empty_lines: true,
        });
        parser
            .on('readable', function () {
            let record;
            while ((record = parser.read()) !== null) {
                records.push(record);
            }
        })
            .on('error', function (err) {
            let x = this.pause();
            console.log(err.message);
            readError = err.message;
            console.log('Saad');
        })
            .on('end', function () {
            console.log(records);
        });
        return {
            readError,
            records,
            status: 'Uploaded',
            file: constants_1.constants.UPLOAD_LOCATION + file.filename,
        };
    }
    sendMail(verifyUniEmailDta) {
        return this.registrationsService.verifyUniEmail(verifyUniEmailDta);
    }
    getUniTokenData(tokenData) {
        return this.registrationsService.getUniEmailTokenData(tokenData);
    }
    validate(token) {
        return this.registrationsService.validateUniEmail(token);
    }
    sendAccountRequest(verifyNewAccountDto) {
        return this.registrationsService.verifyNewAccountEmail(verifyNewAccountDto);
    }
    getEmailTokenData(tokenData) {
        return this.registrationsService.getNewAccountTokenData(tokenData);
    }
    validateEmail(token) {
        return this.registrationsService.validateNewAccountEmail(token);
    }
    getStepWithId(roll_number) {
        return this.registrationsService.getStepWithId(roll_number);
    }
};
exports.RegistrationsController = RegistrationsController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOkResponse)({
        description: 'All Registration',
        type: [registration_entity_1.Registration],
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RegistrationsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiCreatedResponse)({
        description: 'Create Registered Records',
        type: registration_entity_1.Registration,
    }),
    (0, swagger_1.ApiBadRequestResponse)({
        description: 'Creating Registration Records Failed',
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_registration_dto_1.CreateRegistrationDto]),
    __metadata("design:returntype", void 0)
], RegistrationsController.prototype, "create", null);
__decorate([
    (0, common_1.Post)('uploadRecord'),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiBody)({
        schema: {
            type: 'object',
            properties: {
                file: {
                    type: 'string',
                    format: 'binary',
                },
            },
        },
    }),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', {
        limits: { fileSize: 4 * 1024 * 1024 },
        fileFilter: (req, file, callback) => {
            const ext = (0, path_1.parse)(file.originalname).ext.toLowerCase();
            if (!['.csv'].includes(ext)) {
                req.fileValidationError = 'Invalid file type';
                return callback(new common_1.HttpException('Invalid File Type ' + ext, common_1.HttpStatus.BAD_REQUEST), false);
            }
            return callback(null, true);
        },
        storage: (0, multer_1.diskStorage)({
            destination: constants_1.constants.UPLOAD_LOCATION,
            filename: (req, file, cb) => {
                const fn = (0, path_1.parse)(file.originalname);
                const filename = `examination/records${fn.ext}`;
                const fileSys = new FilesHelper_1.default();
                fileSys.removeFolderOrFile(constants_1.constants.UPLOAD_LOCATION + 'examination');
                fileSys.createGeneralFolder('examination');
                cb(null, filename);
            },
        }),
    })),
    __param(0, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RegistrationsController.prototype, "uploadFile", null);
__decorate([
    (0, common_1.Post)('verifyUniversityEmail'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [verify_uni_email_dto_1.VerifyUniEmailDto]),
    __metadata("design:returntype", void 0)
], RegistrationsController.prototype, "sendMail", null);
__decorate([
    (0, common_1.Post)('getUniversityEmailTokenData'),
    (0, swagger_1.ApiOkResponse)({
        description: 'Token is Valid',
        type: registration_entity_1.Registration,
    }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Invalid Token or Not Verified' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [token_dto_1.TokenDto]),
    __metadata("design:returntype", void 0)
], RegistrationsController.prototype, "getUniTokenData", null);
__decorate([
    (0, common_1.Get)('validateUniEmail'),
    (0, swagger_1.ApiOkResponse)({
        description: 'Validate the token',
        type: 'ok validated',
    }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Invalid Token' }),
    __param(0, (0, common_1.Query)('token')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RegistrationsController.prototype, "validate", null);
__decorate([
    (0, common_1.Post)('registerAccount'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [verify_new_account_dto_1.VerifyNewAccountDto]),
    __metadata("design:returntype", void 0)
], RegistrationsController.prototype, "sendAccountRequest", null);
__decorate([
    (0, common_1.Post)('getEmailTokenData'),
    (0, swagger_1.ApiOkResponse)({
        description: 'Token is Valid',
        type: users_entity_1.User,
    }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Invalid Token or Not Verified' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [token_dto_1.TokenDto]),
    __metadata("design:returntype", void 0)
], RegistrationsController.prototype, "getEmailTokenData", null);
__decorate([
    (0, common_1.Get)('validateAccountEmail'),
    (0, swagger_1.ApiOkResponse)({
        description: 'Validate the account email address token',
        type: 'ok validated',
    }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Invalid Token' }),
    __param(0, (0, common_1.Query)('token')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RegistrationsController.prototype, "validateEmail", null);
__decorate([
    (0, common_1.Get)('getStepWithId/:roll_number'),
    (0, swagger_1.ApiOkResponse)({
        description: 'Registration Step for Id',
        type: typeof { step: '3', reg_id: '1' },
    }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Roll Number Not Found' }),
    __param(0, (0, common_1.Param)('roll_number')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RegistrationsController.prototype, "getStepWithId", null);
exports.RegistrationsController = RegistrationsController = __decorate([
    (0, swagger_1.ApiTags)('Registration'),
    (0, common_1.Controller)('registrations'),
    __metadata("design:paramtypes", [registrations_service_1.RegistrationsService])
], RegistrationsController);
//# sourceMappingURL=registrations.controller.js.map