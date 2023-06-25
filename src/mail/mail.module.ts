import { Module } from '@nestjs/common';
import { MailService } from './mail.service';
import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';

@Module({
  imports: [
    MailerModule.forRoot({
      //transport: 'smtps://user@domain.com:pass@smtp.domain.com',
      transport: {
        host: 'smtp.gmail.com',
        auth: {
          user: 'syed.saad.luqman.1994@gmail.com',
          pass: 'developer12345',
        },
      },
      preview: true,
      defaults: {
        from: '"syed saad" <syed.saad.luqman.1994@gmail.com>',
      },
      template: {
        dir: __dirname + '/templates',
        adapter: new HandlebarsAdapter(),
        options: {
          strict: true,
        },
      },
    }),
  ],
  providers: [MailService],
  exports: [MailService],
})
export class MailModule {}
