import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get('profile')
  getUser(): object {
    return {
      id: '123',
      name: 'test',
      age: '40',
    };
  }
}
