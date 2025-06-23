import { Injectable } from '@nestjs/common';
import { createClient } from '@supabase/supabase-js';
import { env } from 'src/config';

@Injectable()
export class SupabaseService {
  private supabase = createClient(env.sup_url, env.sup_service_role_key);

  get client() {
    return this.supabase;
  }
}
