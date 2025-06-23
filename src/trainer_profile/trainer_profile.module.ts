import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TrainerProfiles } from './trainer_profile.entity';
import { AuthModule } from 'src/auth/auth.module';
import { TrainerProfilesService } from './trainer_profile.service';
import { TrainerProfileController } from './trainer_profile.controller';

@Module({
  imports: [TypeOrmModule.forFeature([TrainerProfiles]), AuthModule],
  providers: [TrainerProfilesService],
  controllers: [TrainerProfileController],
})
export class TrainerProfileModule {}
