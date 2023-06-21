import { Controller, Get, Post, UseGuards, Req, Body } from '@nestjs/common';
import { ApiBadRequestResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Request } from 'express';
import { AuthService } from './auth/auth.service';
import { AuthUser } from './auth/decorator/user.decorator';
import { LoginDto } from './auth/dto/login.dto';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { User } from './users/entities/users.entity';

// const user = {
//   sub: 39,
//   name: 'TestF TM TLast',
//   status: 'verified',
//   id: 39,
//   email: 'test@tt.tt',
//   first_name: 'TestF',
//   middle_name: 'TM',
//   last_name: 'TLast',
//   password: 'tttt',
//   role: 2,
//   avatar: '39/1685824482298-Capture.PNG',
//   createdAt: '2023-06-03T20:32:59.605Z',
//   updatedAt: '2023-06-03T20:34:42.000Z',
//   profile: null,
// };

@ApiTags('Auth')
@Controller()
export class AppController {
  constructor(private readonly authService: AuthService) {}

  //POST /login
  @UseGuards(LocalAuthGuard)
  @Post('login')
  @ApiOkResponse({
    description: 'Profile by Id',
    type: Promise<{ access_token: string }>,
  })
  @ApiBadRequestResponse({
    description: 'Authentication Failed',
  })
  //  login(@Req() req: Request): Promise<{ access_token: string }> { // adding @Body tag just for swagger docs
  login(
    @Req() req: Request,
    @Body() loginDto: LoginDto,
  ): Promise<{ access_token: string }> {
    console.log(req); //local strategy return the user after validating it
    // TODO: return JWT access Token once user is validated
    return this.authService.login(req.user);
  }
  /*
  //GET /protected (after login & if not login show error)
  @UseGuards(JwtAuthGuard)
  @Get('protected')
  getHello(@Req() req: Request): any {
    //TODO: require bearer token + a validate token
    console.log(req);
    return req.user;
    //return this.appService.getHello();
  }
  */

  //GET /protected (after login & if not login show error)
  @UseGuards(JwtAuthGuard)
  @Get('protected')
  getHello(@Req() req: any): any {
    const user = req.user;
    console.log(user);
    const { name, sub, email } = user;
    return { name, sub, email };
  }

  @Get()
  main() {
    return `This is a deployed Service for Alumni Management System,
    to understand all api's visit documentation => 
    " https://ams-service-production.up.railway.app/api" `;
  }
}
