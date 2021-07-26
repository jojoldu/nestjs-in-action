import { Controller, Get } from '@nestjs/common';
import { UserService } from './service/UserService';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/users')
  async getUsers() {
    const result = await this.userService.findAll();
    return result;
  }
}
