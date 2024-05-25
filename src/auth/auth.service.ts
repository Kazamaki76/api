import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UserService,
  ) { }

  async validateUser(userId: number): Promise<any> {
    const user = await this.usersService.findOne(userId);
    if (user) {
      return user;
    }
    return null;
  }

  async login(user: any) {
    return {
      username: user.username,
    };
  }
}
