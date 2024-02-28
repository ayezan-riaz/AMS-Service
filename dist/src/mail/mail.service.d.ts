import { MailerService } from '@nestjs-modules/mailer';
export declare class MailService {
    private readonly mailerService;
    constructor(mailerService: MailerService);
    private setTransport;
    sendMail(to: string): Promise<void>;
    sendVerificationEmail(to: string, token: string, type: string): Promise<void>;
    sendPasswordConfirmationEmail(to: string, token: string): Promise<void>;
}
