import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto, RefreshTokenDto, SignUpDto } from './auth.dto';
import { JwtAuthGuard } from 'src/guards/jwt-auth-guard';
import { ApiBearerAuth } from '@nestjs/swagger';

@Controller('auth/')
export class AuthController {
  constructor(private readonly authservice: AuthService) {}

  @Post('signup')
  async signup(@Body() body: SignUpDto) {
    return this.authservice.signup(body.email, body.password);
  }

  @Post('login')
  async login(@Body() body: LoginDto) {
    return this.authservice.login(body.email, body.password);
  }

  @Post('refresh')
  async refresh(@Body() body: RefreshTokenDto) {
    return this.authservice.refresh(body.refresh_token);
  }

  @Get('me')
  @ApiBearerAuth('USER')
  @UseGuards(JwtAuthGuard)
  async getMe(@Req() req) {
    return {
      message: 'this is a protected route',
      user: req.user,
    };
  }
}
