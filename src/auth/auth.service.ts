import { Injectable } from '@nestjs/common';
import { UserService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.userService.findByEmail(email);
    if (user && user.password === password) {
      const { email, password, ...rest } = user;
      return rest;
    }
    return null;
  }

  async login(user: any) {
    const payload = {
      name: [user.first_name, user.middle_name, user.last_name].join(' '),
      sub: user.id,
    };
    return { access_token: this.jwtService.sign(payload) };
  }
}
