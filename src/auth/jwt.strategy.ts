import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UserService } from 'src/users/users.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private userService: UserService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'ENV.FILE.SECRET',
      ignoreExpiration: false,
    });
  }

  // anything that is returned will be save in request.user
  async validate(payload: any) {
    const user = await this.userService.findOne(payload.sub);
    return {
      // user from database
      sub: payload.sub,
      name: payload.name,
      status: 'verified',
      ...user,
    };
  }
}
