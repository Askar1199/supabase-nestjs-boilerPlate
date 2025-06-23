import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ClientProfile } from './client_profile.entity';
import { CreateClientProfileDto } from './client_profile.dto';

@Injectable()
export class ClientProfileService {
  constructor(
    @InjectRepository(ClientProfile)
    private clientRepo: Repository<ClientProfile>,
  ) {}

  async completeProfile(dto: CreateClientProfileDto, user) {
    const profile = this.clientRepo.create({
      user_id: user.id,
      ...dto,
      profile_completed: true,
    });

    const data = await this.clientRepo.save(profile);

    return data;
  }

  async getAllClients(user) {
    const clients = await this.clientRepo.find({ relations: ['user'] });
    return {
      success: true,
      clients,
    };
  }
}
