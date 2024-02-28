import { Request } from 'express';
import { AuthService } from './auth/auth.service';
import { ApplyResetPasswordDto } from './auth/dto/apply-reset-password.dto';
import { LoginDto } from './auth/dto/login.dto';
import { ResetPasswordDto } from './auth/dto/reset-password.dto';
import { MailService } from './mail/mail.service';
export declare class AppController {
    private readonly authService;
    private readonly mailService;
    constructor(authService: AuthService, mailService: MailService);
    login(req: Request, loginDto: LoginDto): Promise<{
        access_token: string;
    }>;
    applyResetPassword(applyPasswordReset: ApplyResetPasswordDto): Promise<{
        message: string;
    }>;
    resetPassword(token: string, resetPassDto: ResetPasswordDto): Promise<import("typeorm").UpdateResult>;
    getHello(req: any): any;
    main(): string;
    message(): string;
    sendMail(email: string): Promise<void>;
}
