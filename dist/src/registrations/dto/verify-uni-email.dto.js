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
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerifyUniEmailDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const DoesUniEmailExists_1 = require("./DoesUniEmailExists");
class VerifyUniEmailDto {
}
exports.VerifyUniEmailDto = VerifyUniEmailDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'University Id / Verification Id',
        example: 'SE102293',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, DoesUniEmailExists_1.UniEmailExists)({
        message: 'Requested Email not exists in Examination Records: Registration or Format Issue',
    }),
    __metadata("design:type", String)
], VerifyUniEmailDto.prototype, "uni_reg_id", void 0);
//# sourceMappingURL=verify-uni-email.dto.js.map