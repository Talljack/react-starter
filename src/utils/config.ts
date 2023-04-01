import { loadEnv } from 'vite';
import type { ParseEnv } from './parseEnv';
import { parseEnv } from './parseEnv';
const env = import.meta.env.MODE || 'development';
const envs = loadEnv(env, process.cwd());
const config = parseEnv(envs) as ParseEnv;
export default config;
