import { loadEnv } from 'vite'

type ParseEnv = {
  [key: keyof ReturnType<typeof loadEnv>]: any
}

export const parseEnv = (env: ReturnType<typeof loadEnv>) => {
  const res: ParseEnv = {}
  for (const key in Object.keys(env)) {
    let envValue: any = env[key].replace(/\\n/g, '\n')
    envValue = envValue === 'true' ? true : envValue === 'false' ? false : envValue
    if (key === "VITE_PORT") {
      envValue = Number(envValue)
    }
    res[key] = envValue
  }
  return res
}
