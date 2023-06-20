import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SkillsService } from './skills.service';
import { CreateSkillDto } from './dto/create-skill.dto';
import { UpdateSkillDto } from './dto/update-skill.dto';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Skill } from './entities/skill.entity';

@ApiTags('Skills')
@Controller('skills')
export class SkillsController {
  constructor(private readonly skillsService: SkillsService) {}

  @Post(':userId')
  @ApiCreatedResponse({ description: 'Skill created', type: Skill })
  @ApiBadRequestResponse({ description: 'Skill request failed' })
  create(@Param('userId') id: string, @Body() createSkillDto: CreateSkillDto) {
    return this.skillsService.create(+id, createSkillDto);
  }

  @Get()
  @ApiOkResponse({
    description: 'All Skills',
    type: [Skill],
  })
  findAll() {
    return this.skillsService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ description: 'Skill by Id', type: Skill })
  @ApiBadRequestResponse({ description: 'Skill Not Found' })
  findOne(@Param('id') id: string) {
    return this.skillsService.findOne(+id);
  }

  @Patch(':id')
  @ApiCreatedResponse({ description: 'Skill Update' })
  @ApiBadRequestResponse({ description: 'Skill Update Failed' })
  update(@Param('id') id: string, @Body() updateSkillDto: UpdateSkillDto) {
    return this.skillsService.update(+id, updateSkillDto);
  }

  @Delete(':id')
  @ApiOkResponse({
    description: 'Skill Deleted',
  })
  @ApiBadRequestResponse({ description: 'Skill Not Found' })
  remove(@Param('id') id: string) {
    return this.skillsService.remove(+id);
  }
}
