import { Controller, Post, Body, UseGuards, Get } from '@nestjs/common';
import { ClientProfileService } from './client_profile.service';
import { CreateClientProfileDto } from './client_profile.dto';
import { ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/guards/jwt-auth-guard';
import { UserDecorator } from 'src/user.decorator';

@Controller('client-profile')
@ApiBearerAuth('USER')
@UseGuards(JwtAuthGuard)
export class ClientProfileController {
  constructor(private readonly clientService: ClientProfileService) {}

  @Post('complete')
  async complete(@Body() body: CreateClientProfileDto, @UserDecorator() user) {
    return await this.clientService.completeProfile(body, user);
  }

  @Get('')
  async getAllClientProfile(@UserDecorator() user) {
    return await this.clientService.getAllClients(user);
  }
}
