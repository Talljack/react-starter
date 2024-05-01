/// <reference types="vitest" />
import { loadEnv } from 'vite'
import type { ConfigEnv, UserConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import { parseEnv } from './src/utils/parseEnv'

export default ({ mode }: ConfigEnv): UserConfig => {
  const root = process.cwd()
  const env = loadEnv(mode, root)
  const { VITE_PORT, VITE_DROP_CONSOLE, VITE_DROP_DEBUGGER, VITE_PUBLIC_PATH = '/' } = parseEnv(env)
  const drop = [VITE_DROP_CONSOLE ? 'console' : '', VITE_DROP_DEBUGGER ? 'debugger' : ''].filter(Boolean)
  return {
    base: VITE_PUBLIC_PATH,
    root,
    server: {
      host: true,
      port: Number(VITE_PORT),
    },
    build: {
      reportCompressedSize: false,
      chunkSizeWarningLimit: 2000,
    },
    esbuild: {
      // @ts-expect-error
      drop,
    },
    // @ts-expect-error
    plugins: [react(), tsconfigPaths()],
    test: {
      environment: 'happy-dom',
      globals: true,
    },
  }
}
