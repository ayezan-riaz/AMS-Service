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
exports.SurveyController = void 0;
const common_1 = require("@nestjs/common");
const survey_service_1 = require("./survey.service");
const create_survey_dto_1 = require("./dto/create-survey.dto");
const update_survey_dto_1 = require("./dto/update-survey.dto");
const swagger_1 = require("@nestjs/swagger");
const survey_entity_1 = require("./entities/survey.entity");
let SurveyController = class SurveyController {
    constructor(surveyService) {
        this.surveyService = surveyService;
    }
    create(userId, createSurveyDto) {
        return this.surveyService.create(+userId, createSurveyDto);
    }
    findAll() {
        return this.surveyService.findAll();
    }
    findAllforUser(id) {
        return this.surveyService.findAllforUser(+id);
    }
    findOne(id) {
        return this.surveyService.findOne(+id);
    }
    update(id, updateSurveyDto) {
        return this.surveyService.update(+id, updateSurveyDto);
    }
    remove(id) {
        return this.surveyService.remove(+id);
    }
};
exports.SurveyController = SurveyController;
__decorate([
    (0, common_1.Post)(':userId'),
    (0, swagger_1.ApiCreatedResponse)({ description: 'Survey Created', type: survey_entity_1.Survey }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Survey Creation Failed' }),
    __param(0, (0, common_1.Param)('userId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_survey_dto_1.CreateSurveyDto]),
    __metadata("design:returntype", void 0)
], SurveyController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOkResponse)({
        description: 'All Survey',
        type: [survey_entity_1.Survey],
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SurveyController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('user/:userId'),
    (0, swagger_1.ApiOkResponse)({
        description: 'Survey for a User',
        type: [survey_entity_1.Survey],
    }),
    __param(0, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SurveyController.prototype, "findAllforUser", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOkResponse)({ description: 'Survey by Id', type: survey_entity_1.Survey }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Survey Not Found' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SurveyController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiCreatedResponse)({ description: 'Survey Update' }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Survey Update Failed' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_survey_dto_1.UpdateSurveyDto]),
    __metadata("design:returntype", void 0)
], SurveyController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOkResponse)({
        description: 'Survey Deleted',
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SurveyController.prototype, "remove", null);
exports.SurveyController = SurveyController = __decorate([
    (0, swagger_1.ApiTags)('Survey'),
    (0, common_1.Controller)('survey'),
    __metadata("design:paramtypes", [survey_service_1.SurveyService])
], SurveyController);
//# sourceMappingURL=survey.controller.js.map