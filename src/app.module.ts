import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { AcademicsModule } from './academics/academics.module';
import { User } from './users/entities/users.entity';
import { Academic } from './academics/entities/academic.entity';
import { ProfilesModule } from './profiles/profiles.module';
import { Profile } from './profiles/entities/profile.entity';
import { ConfigModule } from '@nestjs/config';
import { SkillsModule } from './skills/skills.module';
import { Skill } from './skills/entities/skill.entity';
import { ExperiencesModule } from './experiences/experiences.module';
import { Experience } from './experiences/entities/experience.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: 'ams_dev',
      entities: [User, Academic, Profile, Skill, Experience],
      synchronize: true,
    }),
    UserModule,
    AuthModule,
    AcademicsModule,
    ProfilesModule,
    SkillsModule,
    ExperiencesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
