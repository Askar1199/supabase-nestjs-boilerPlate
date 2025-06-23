import { config } from 'dotenv';

config();

interface ICONFIG {
  port: number;
  sup_url: string;
  sup_service_role_key: string;
  sup_anon_key: string;
  db_url: string;
  sup_jwt: string;
}

let configCache: ICONFIG;

const getEnvVariable = (key: string, defaultValue?: string): string => {
  const value = process.env[key];
  //   if (value === undefined && defaultValue === undefined) {
  //     console.error(`Environment variable not defined: ${key}`);
  //     process.exit(-1);
  //   }
  //   return value || defaultValue;

  if (value !== undefined) return value;
  if (defaultValue !== undefined) return defaultValue;

  throw new Error(`Environment variable not defined: ${key}`);
};

const parseNumber = (key: string, defaultValue: number = 0): number => {
  const value = process.env[key];
  return value ? parseInt(value, 10) : defaultValue;
};

const configuration = (): ICONFIG => {
  if (!configCache) {
    configCache = {
      port: parseNumber('PORT', 3004),
      db_url: getEnvVariable('DATABASE_URL'),
      sup_url: getEnvVariable('SUPABASE_URL'),
      sup_service_role_key: getEnvVariable('SUPABASE_SERVICE_ROLE_KEY'),
      sup_anon_key: getEnvVariable('SUPABASE_ANON_KEY'),
      sup_jwt: getEnvVariable('SUPABASE_JWT_SECRET'),
    };
  }
  return configCache;
};

export const env = configuration();
