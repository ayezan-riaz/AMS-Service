import { UserService } from 'src/users/users.service';
import { MailService } from 'src/mail/mail.service';
import { JwtService } from '@nestjs/jwt';
import { ApplyResetPasswordDto } from './dto/apply-reset-password.dto';
import { ResetPasswordDto } from './dto/reset-password.dto';
export declare class AuthService {
    private userService;
    private jwtService;
    private mailService;
    constructor(userService: UserService, jwtService: JwtService, mailService: MailService);
    validateUser(email: string, password: string): Promise<any>;
    login(user: any): Promise<{
        access_token: string;
    }>;
    applyResetPassword(applyPasswordReset: ApplyResetPasswordDto): Promise<{
        message: string;
    }>;
    resetPassword(token: string, resetPassDto: ResetPasswordDto): Promise<import("typeorm").UpdateResult>;
    genToken(size: number): string;
}
