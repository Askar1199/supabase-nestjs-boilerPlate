// src/auth/auth.service.ts
import { BadRequestException, Injectable } from '@nestjs/common';
import { SupabaseService } from '../supabase/supabase.service';

@Injectable()
export class AuthService {
  constructor(private readonly supabase: SupabaseService) {}

  async signup(email: string, password: string) {
    const { data, error } = await this.supabase.client.auth.admin.createUser({
      email,
      password,
      email_confirm: true,
    });
    if (error) throw new BadRequestException(error.message);
    // await this.supabase.client.schema('public').schemaName;
    return data;
  }

  async login(email: string, password: string) {
    const { data, error } = await this.supabase.client.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      throw new BadRequestException(error?.message);
    }
    return {
      access_token: data.session.access_token,
      refresh_token: data.session.refresh_token,
      expires_in: data.session.expires_in,
      user: data.user,
    };
  }

  async refresh(refreshToken: string) {
    const { data, error } = await this.supabase.client.auth.refreshSession({
      refresh_token: refreshToken,
    });

    if (error) throw new Error(error.message);

    return {
      access_token: data?.session?.access_token,
      refresh_token: data?.session?.refresh_token,
      expires_in: data?.session?.expires_in,
      user: data.user,
    };
  }

  async validateUser(id: string) {
    const { data, error } =
      await this.supabase.client.auth.admin.getUserById(id);
    if (error) {
      throw new BadRequestException(error.message);
    }

    return data?.user;
    return 'datas';
  }
}
