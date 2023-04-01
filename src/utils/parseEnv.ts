import type { loadEnv } from 'vite';

export interface ParseEnv {
  [key: keyof ReturnType<typeof loadEnv>]: any;
}

export function parseEnv(env: ReturnType<typeof loadEnv>) {
  const res: ParseEnv = {};
  Object.entries(env).forEach(([key, value]) => {
    let envValue: any = value?.replace(/\\n/g, '\n');
    envValue = envValue === 'true' ? true : envValue === 'false' ? false : envValue;
    if (key === 'VITE_PORT') {
      envValue = Number(envValue);
    }
    res[key] = envValue;
  });
  return res;
}
