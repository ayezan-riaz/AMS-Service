import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
  ParseIntPipe,
  UseGuards,
  UseInterceptors,
  UploadedFile,
  ParseFilePipe,
  FileTypeValidator,
  MaxFileSizeValidator,
  Request,
  HttpException,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import FilesHelper from 'files/FilesHelper';
import { multerOptions } from 'files/muttler.config';
import { diskStorage } from 'multer';
import { extname, parse } from 'path';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { DeleteResult } from 'typeorm';
import { constants } from 'utils/constants';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/users.entity';
import { UserService } from './users.service';

@ApiTags('Users')
@Controller('users')
//@UseGuards(JwtAuthGuard)
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @ApiCreatedResponse({ description: 'User Registered', type: User })
  @ApiBadRequestResponse({ description: 'User Registration Failed' })
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  @ApiOkResponse({
    description: 'All Users with Profile',
    type: [User],
  })
  findAll() {
    const users = this.userService.findAll();
    return users;
  }

  @Get(':id')
  @ApiOkResponse({ description: 'User by Id', type: User })
  @ApiBadRequestResponse({ description: 'User Not Found' })
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Get('email/:email')
  @ApiOkResponse({ description: 'User by Email', type: User })
  @ApiBadRequestResponse({ description: 'User Not Found' })
  findByEmail(@Param('email') email: string) {
    return this.userService.findByEmail(email);
  }

  @Patch(':id')
  @ApiCreatedResponse({ description: 'User Update' })
  @ApiBadRequestResponse({ description: 'User Update Failed' })
  update(
    @Param('id', ParseIntPipe) id: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  @ApiOkResponse({
    description: 'User Deleted',
  })
  remove(@Param('id', ParseIntPipe) id: string) {
    return this.userService.remove(+id);
  }

  @UseGuards(JwtAuthGuard)
  @Post('upload')
  @UseInterceptors(
    FileInterceptor('profileImage', {
      storage: diskStorage({
        destination: constants.UPLOAD_LOCATION,
        filename: (req: any, file, cb) => {
          //const subfolder = req.user.sub + '-' + req.user.name;
          const unique = new Date().getTime();
          const fn = parse(file.originalname);
          const filename = `${req.user.sub}/${unique}-${fn.name}${fn.ext}`;
          const fileSys = new FilesHelper();
          fileSys.createAlumniFolder(req.user);
          fileSys.removeOldAvatar(constants.UPLOAD_LOCATION + req.user.avatar);
          cb(null, filename);
        },
      }),
    }),
  )
  uploadFile(
    @Request() req,
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new FileTypeValidator({ fileType: '.(png|jpeg|jpg)' }),
          new MaxFileSizeValidator({ maxSize: 1024 * 1024 * 4 }),
        ],
      }),
    )
    file: Express.Multer.File,
  ) {
    console.log('Pathcc: ' + process.env.UPLOAD_LOCATION);
    console.log(file);
    return this.userService.updateProfile(req.user.sub, file);
  }
}
