// auth/guards/jwt-auth.guard.ts
import {
  Injectable,
  ExecutionContext,
  UnauthorizedException,
  BadRequestException,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from 'src/auth/auth.service';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  constructor(private authService: AuthService) {
    super();
  }
  async canActivate(context: ExecutionContext): Promise<boolean> {
    await super.canActivate(context); // run passport-jwt first
    console.info('******************** step 1');
    const request = context.switchToHttp().getRequest();
    const userId = request.user?.id || request.user?.sub;
    console.info('******************** step 2');
    const user = await this.authService.validateUser(userId);
    console.info('******************** step 3');
    if (!user) {
      throw new UnauthorizedException('User not found');
    }
    console.info('******************** step 4');

    request.user = user;
    return true;
  }
}
