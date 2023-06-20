import { Module } from '@nestjs/common';
import { AcademicsService } from './academics.service';
import { AcademicsController } from './academics.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Academic } from './entities/academic.entity';
import { User } from 'src/users/entities/users.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Academic, User])],
  controllers: [AcademicsController],
  providers: [AcademicsService],
})
export class AcademicsModule {}
