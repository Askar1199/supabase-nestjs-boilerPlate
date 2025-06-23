import { Controller, UseGuards } from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/guards/jwt-auth-guard';

@Controller('trainer_profile')
@ApiBearerAuth('USER')
@UseGuards(JwtAuthGuard)
export class TrainerProfileController {}
