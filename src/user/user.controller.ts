// src/user/user.controller.ts
import { Controller, Get, Param, Patch, Body } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly service: UserService) {}

  @Get()
  async listUsers() {
    return this.service.findAll();
  }

  @Patch(':id')
  async updateUser(@Param('id') id: string, @Body() body: any) {
    return this.service.update(id, body);
  }
}
