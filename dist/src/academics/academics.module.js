"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcademicsModule = void 0;
const common_1 = require("@nestjs/common");
const academics_service_1 = require("./academics.service");
const academics_controller_1 = require("./academics.controller");
const typeorm_1 = require("@nestjs/typeorm");
const academic_entity_1 = require("./entities/academic.entity");
const users_entity_1 = require("../users/entities/users.entity");
const FilesHelper_1 = require("../../files/FilesHelper");
let AcademicsModule = class AcademicsModule {
};
exports.AcademicsModule = AcademicsModule;
exports.AcademicsModule = AcademicsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([academic_entity_1.Academic, users_entity_1.User])],
        controllers: [academics_controller_1.AcademicsController],
        providers: [academics_service_1.AcademicsService, FilesHelper_1.default],
        exports: [academics_service_1.AcademicsService],
    })
], AcademicsModule);
//# sourceMappingURL=academics.module.js.map