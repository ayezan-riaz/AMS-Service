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
  HttpException,
  HttpStatus,
  Query,
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
import { VerifyUniEmailDto } from './dto/verify-uni-email.dto';
import { VerifyNewAccountDto } from './dto/verify-new-account.dto';

@ApiTags('Registration')
@Controller('registrations')
export class RegistrationsController {
  constructor(private readonly registrationsService: RegistrationsService) {}

  @Get()
  @ApiOkResponse({
    description: 'All Registration',
    type: [Registration],
  })
  findAll() {
    return this.registrationsService.findAll();
  }

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
      limits: { fileSize: 4 * 1024 * 1024 },
      fileFilter: (req, file, callback) => {
        const ext = parse(file.originalname).ext;
        if (!['.csv', '.xls', '.xlsx'].includes(ext)) {
          req.fileValidationError = 'Invalid file type';
          return callback(
            new HttpException(
              'Invalid File Type ' + ext,
              HttpStatus.BAD_REQUEST,
            ),
            false,
          );
        }
        return callback(null, true);
      },
      storage: diskStorage({
        destination: constants.UPLOAD_LOCATION,
        filename: (req: any, file, cb) => {
          const fn = parse(file.originalname);
          const filename = `examination/records${fn.ext}`;
          const fileSys = new FilesHelper();
          fileSys.removeFolderOrFile(constants.UPLOAD_LOCATION + 'examination');
          fileSys.createGeneralFolder('examination');
          cb(null, filename);
        },
      }),
    }),
  )
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    return { status: 'Uploaded', file: file.filename };
  }

  @Post('verifyUniversityEmail')
  sendMail(@Body() verifyUniEmailDta: VerifyUniEmailDto) {
    return this.registrationsService.verifyUniEmail(verifyUniEmailDta);
  }

  @Get('validateUniEmail')
  @ApiOkResponse({
    description: 'Validate the token',
    type: 'ok validated',
  })
  @ApiBadRequestResponse({ description: 'Invalid Token' })
  validate(@Query('token') token: string) {
    return this.registrationsService.validateUniEmail(token);
  }

  @Post('registerAccount')
  sendAccountRequest(@Body() verifyNewAccountDto: VerifyNewAccountDto) {
    return this.registrationsService.verifyNewAccountEmail(verifyNewAccountDto);
  }

  @Get('validateAccountEmail')
  @ApiOkResponse({
    description: 'Validate the account email address token',
    type: 'ok validated',
  })
  @ApiBadRequestResponse({ description: 'Invalid Token' })
  validateEmail(@Query('token') token: string) {
    return this.registrationsService.validateNewAccountEmail(token);
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
