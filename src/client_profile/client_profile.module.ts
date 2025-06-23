import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientProfile } from './client_profile.entity';
import { AuthUser } from 'src/auth/auth.entity';
import { ClientProfileService } from './client_profile.service';
import { ClientProfileController } from './client_profile.controller';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([ClientProfile, AuthUser]), AuthModule],
  providers: [ClientProfileService],
  controllers: [ClientProfileController],
})
export class ClientProfileModule {}
