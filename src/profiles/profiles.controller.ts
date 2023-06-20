import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProfilesService } from './profiles.service';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Profile } from './entities/profile.entity';

@ApiTags('Profiles')
@Controller('profiles')
export class ProfilesController {
  constructor(private readonly profilesService: ProfilesService) {}

  @Post(':userId')
  @ApiCreatedResponse({ description: 'Profile Created', type: Profile })
  @ApiBadRequestResponse({ description: 'Profile Creation Failed' })
  create(
    @Param('userId') userId: string,
    @Body() createProfileDto: CreateProfileDto,
  ) {
    return this.profilesService.create(+userId, createProfileDto);
  }

  @Get()
  @ApiOkResponse({
    description: 'All Profile',
    type: [Profile],
  })
  findAll() {
    return this.profilesService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ description: 'Profile by Id', type: Profile })
  @ApiBadRequestResponse({ description: 'Profile Not Found' })
  findOne(@Param('id') id: string) {
    return this.profilesService.findOne(+id);
  }

  @Patch(':id')
  @ApiCreatedResponse({ description: 'Profile Update' })
  @ApiBadRequestResponse({ description: 'Profile Update Failed' })
  update(@Param('id') id: string, @Body() updateProfileDto: UpdateProfileDto) {
    return this.profilesService.update(+id, updateProfileDto);
  }

  @Delete(':id')
  @ApiOkResponse({
    description: 'Profile Deleted',
  })
  remove(@Param('id') id: string) {
    return this.profilesService.remove(+id);
  }
}
