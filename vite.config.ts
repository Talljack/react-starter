import { loadEnv } from 'vite'
import type { UserConfig, ConfigEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import { parseEnv } from './scripts/vite/util'

export default ({ command, mode }: ConfigEnv): UserConfig => {
  const root = process.cwd()
  const env = loadEnv(mode, root)
  const { VITE_PORT, VITE_DROP_CONSOLE, VITE_DROP_DEBUGGER, VITE_PUBLIC_PATH = '/' } = parseEnv(env);
  const drop = [VITE_DROP_CONSOLE ? 'console' : '', VITE_DROP_DEBUGGER ? 'debugger' : ''].filter(Boolean)
  return {
    base: VITE_PUBLIC_PATH,
    root,
    server: {
      host: true,
      port: Number(VITE_PORT)
    },
    build: {
      reportCompressedSize: false,
      chunkSizeWarningLimit: 2000
    },
    esbuild: {
      // @ts-ignore
      drop
    },
    plugins: [react(), tsconfigPaths()],
  }
}
