"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const users_module_1 = require("./users/users.module");
const auth_module_1 = require("./auth/auth.module");
const academics_module_1 = require("./academics/academics.module");
const users_entity_1 = require("./users/entities/users.entity");
const academic_entity_1 = require("./academics/entities/academic.entity");
const profiles_module_1 = require("./profiles/profiles.module");
const profile_entity_1 = require("./profiles/entities/profile.entity");
const config_1 = require("@nestjs/config");
const skills_module_1 = require("./skills/skills.module");
const skill_entity_1 = require("./skills/entities/skill.entity");
const experiences_module_1 = require("./experiences/experiences.module");
const experience_entity_1 = require("./experiences/entities/experience.entity");
const mail_module_1 = require("./mail/mail.module");
const registrations_module_1 = require("./registrations/registrations.module");
const registration_entity_1 = require("./registrations/entities/registration.entity");
const survey_module_1 = require("./survey/survey.module");
const survey_entity_1 = require("./survey/entities/survey.entity");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: process.env.DB_HOST || 'localhost',
                port: parseInt(process.env.DB_PORT) || 3306,
                username: process.env.DB_USER,
                password: process.env.DB_PASS,
                database: process.env.DB_NAME || 'ams_dev',
                entities: [
                    users_entity_1.User,
                    academic_entity_1.Academic,
                    profile_entity_1.Profile,
                    skill_entity_1.Skill,
                    experience_entity_1.Experience,
                    survey_entity_1.Survey,
                    registration_entity_1.Registration,
                ],
                synchronize: true,
            }),
            users_module_1.UserModule,
            auth_module_1.AuthModule,
            academics_module_1.AcademicsModule,
            profiles_module_1.ProfilesModule,
            skills_module_1.SkillsModule,
            experiences_module_1.ExperiencesModule,
            mail_module_1.MailModule,
            registrations_module_1.RegistrationsModule,
            survey_module_1.SurveyModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map