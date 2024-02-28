"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistrationsModule = void 0;
const common_1 = require("@nestjs/common");
const registrations_service_1 = require("./registrations.service");
const registrations_controller_1 = require("./registrations.controller");
const typeorm_1 = require("@nestjs/typeorm");
const registration_entity_1 = require("./entities/registration.entity");
const IsUniEmailUnique_1 = require("./dto/IsUniEmailUnique");
const DoesUniEmailExists_1 = require("./dto/DoesUniEmailExists");
const IsEmailAvailable_1 = require("../users/dto/IsEmailAvailable");
const users_service_1 = require("../users/users.service");
const users_entity_1 = require("../users/entities/users.entity");
const FilesHelper_1 = require("../../files/FilesHelper");
const IsPhoneAvailable_1 = require("../users/dto/IsPhoneAvailable");
const profile_entity_1 = require("../profiles/entities/profile.entity");
let RegistrationsModule = class RegistrationsModule {
};
exports.RegistrationsModule = RegistrationsModule;
exports.RegistrationsModule = RegistrationsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([registration_entity_1.Registration, users_entity_1.User, profile_entity_1.Profile])],
        controllers: [registrations_controller_1.RegistrationsController],
        providers: [
            registrations_service_1.RegistrationsService,
            IsUniEmailUnique_1.IsUniEmailUnique,
            DoesUniEmailExists_1.DoesUniEmailExists,
            IsEmailAvailable_1.IsEmailAvailable,
            IsPhoneAvailable_1.IsPhoneAvailable,
            users_service_1.UserService,
            FilesHelper_1.default,
        ],
    })
], RegistrationsModule);
//# sourceMappingURL=registrations.module.js.map