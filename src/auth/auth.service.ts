import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
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
