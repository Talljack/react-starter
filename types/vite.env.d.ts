import 'vite/client'

interface ImportMetaEnv {
  readonly VITE_PORT: number
  readonly VITE_DROP_CONSOLE: boolean
  readonly VITE_DROP_DEBUGGER: boolean
  readonly VITE_PUBLIC_PATH: string
  readonly VITE_I18N: boolean
}
