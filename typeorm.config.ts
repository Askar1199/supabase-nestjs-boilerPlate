// typeorm.config.ts
import { DataSource } from 'typeorm';
import { ClientProfile } from './src/client_profile/client_profile.entity';
import { AuthUser } from './src/auth/auth.entity';
import * as dotenv from 'dotenv';

dotenv.config(); // Loads .env

export default new DataSource({
  type: 'postgres',
  url: process.env.DATABASE_URL,
  entities: [ClientProfile, AuthUser],
  migrations: ['src/migrations/*.ts'],
  synchronize: false,
});
