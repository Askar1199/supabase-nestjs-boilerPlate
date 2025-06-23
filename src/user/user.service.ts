// src/user/user.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly repo: Repository<User>,
  ) {}

  async findAll() {
    return this.repo.find();
  }

  async update(id: string, data: Partial<User>) {
    await this.repo.update({ id }, data);
    return this.repo.findOneBy({ id });
  }
}
