"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModule = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("./users.service");
const users_controller_1 = require("./users.controller");
const typeorm_1 = require("@nestjs/typeorm");
const users_entity_1 = require("./entities/users.entity");
const IsEmailAvailable_1 = require("./dto/IsEmailAvailable");
const FilesHelper_1 = require("../../files/FilesHelper");
const IsUniEmailUnique_1 = require("./dto/IsUniEmailUnique");
const IsPhoneAvailable_1 = require("./dto/IsPhoneAvailable");
const profile_entity_1 = require("../profiles/entities/profile.entity");
let UserModule = class UserModule {
};
exports.UserModule = UserModule;
exports.UserModule = UserModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([profile_entity_1.Profile, users_entity_1.User])],
        controllers: [users_controller_1.UserController],
        providers: [
            users_service_1.UserService,
            IsEmailAvailable_1.IsEmailAvailable,
            IsPhoneAvailable_1.IsPhoneAvailable,
            IsUniEmailUnique_1.IsUniEmailUnique,
            FilesHelper_1.default,
        ],
        exports: [users_service_1.UserService, IsEmailAvailable_1.IsEmailAvailable],
    })
], UserModule);
//# sourceMappingURL=users.module.js.map