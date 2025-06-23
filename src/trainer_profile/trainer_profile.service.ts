import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TrainerProfiles } from './trainer_profile.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TrainerProfilesService {
  constructor(
    @InjectRepository(TrainerProfiles)
    private trainerRepositary: Repository<TrainerProfiles>,
  ) {}
}
