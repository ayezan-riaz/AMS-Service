import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
  ParseFilePipe,
  FileTypeValidator,
  MaxFileSizeValidator,
  Request,
} from '@nestjs/common';
import { RegistrationsService } from './registrations.service';
import { CreateRegistrationDto } from './dto/create-registration.dto';
import { UpdateRegistrationDto } from './dto/update-registration.dto';
import {
  ApiBadRequestResponse,
  ApiBody,
  ApiConsumes,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Registration } from './entities/registration.entity';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { constants } from 'utils/constants';
import { parse } from 'path';
import FilesHelper from 'files/FilesHelper';

@ApiTags('Registration')
@Controller('registrations')
export class RegistrationsController {
  constructor(private readonly registrationsService: RegistrationsService) {}

  @Post()
  @ApiCreatedResponse({
    description: 'Create Registered Records',
    type: Registration,
  })
  @ApiBadRequestResponse({
    description: 'Creating Registration Records Failed',
  })
  create(@Body() createRegistrationDto: CreateRegistrationDto) {
    return this.registrationsService.create(createRegistrationDto);
  }

  @Post('uploadRecord')
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: {
          // 👈 this property
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: constants.UPLOAD_LOCATION,
        filename: (req: any, file, cb) => {
          const fn = parse(file.originalname);
          const filename = `examination/records${fn.ext}`;
          const fileSys = new FilesHelper();
          fileSys.createGeneralFolder('examination');
          cb(null, filename);
        },
      }),
    }),
  )
  uploadFile(
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new FileTypeValidator({ fileType: '.(xls|doc|csv)' }),
          new MaxFileSizeValidator({ maxSize: 1024 * 1024 * 4 }),
        ],
      }),
    )
    file: Express.Multer.File,
  ) {
    return { status: 'Uploaded', file: file.filename };
  }

  // @Get()
  // findAll() {
  //   return this.registrationsService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.registrationsService.findOne(+id);
  // }

  // @Patch(':id')
  // update(
  //   @Param('id') id: string,
  //   @Body() updateRegistrationDto: UpdateRegistrationDto,
  // ) {
  //   return this.registrationsService.update(+id, updateRegistrationDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.registrationsService.remove(+id);
  // }
}
