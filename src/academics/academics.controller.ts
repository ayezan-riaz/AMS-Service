import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { AcademicsService } from './academics.service';
import { CreateAcademicDto } from './dto/create-academic.dto';
import { UpdateAcademicDto } from './dto/update-academic.dto';
import { Academic } from './entities/academic.entity';

@ApiTags('Academics')
@Controller('academics')
export class AcademicsController {
  constructor(private readonly academicsService: AcademicsService) {}

  @Post(':userId')
  @ApiCreatedResponse({
    description: 'Academics Record Created',
    type: Academic,
  })
  @ApiBadRequestResponse({ description: 'Academic Error' })
  create(
    @Body() createAcademicDto: CreateAcademicDto,
    @Param('userId') id: string,
  ) {
    return this.academicsService.create(+id, createAcademicDto);
  }

  @Get()
  @ApiOkResponse({
    description: 'All Users with Profile',
    type: [Academic],
  })
  findAll() {
    return this.academicsService.findAll();
  }

  @Get('user/:userId')
  @ApiOkResponse({
    description: 'All Academic for a User',
    type: [Academic],
  })
  findAllforUser(@Param('userId') id: string) {
    return this.academicsService.findAllforUser(+id);
  }

  @Get(':id')
  @ApiOkResponse({ description: 'Academic by Id', type: Academic })
  @ApiBadRequestResponse({ description: 'Academic Not Found' })
  findOne(@Param('id') id: string) {
    return this.academicsService.findOne(+id);
  }

  @Patch(':id')
  @ApiCreatedResponse({ description: 'Academics Update' })
  @ApiBadRequestResponse({ description: 'Academic Update Failed' })
  update(
    @Param('id') id: string,
    @Body() updateAcademicDto: UpdateAcademicDto,
  ) {
    return this.academicsService.update(+id, updateAcademicDto);
  }

  @Delete(':id')
  @ApiOkResponse({
    description: 'User Deleted',
  })
  remove(@Param('id') id: string) {
    return this.academicsService.remove(+id);
  }
}
