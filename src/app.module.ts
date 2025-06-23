import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { env } from './config';
import { User } from './user/user.entity';
import { SupabaseService } from './supabase/supabase.service';
import { AuthService } from './auth/auth.service';
import { UserService } from './user/user.service';
import { UserController } from './user/user.controller';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { ClientProfileModule } from './client_profile/client_profile.module';
import { ClientProfile } from './client_profile/client_profile.entity';
import { AuthUser } from './auth/auth.entity';
import { TrainerProfiles } from './trainer_profile/trainer_profile.entity';
import { TrainerProfileModule } from './trainer_profile/trainer_profile.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: env.db_url,
      // entities: [User, ClientProfile, AuthUser, TrainerProfiles],
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    AuthModule,
    UserModule,
    ClientProfileModule,
    TrainerProfileModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
