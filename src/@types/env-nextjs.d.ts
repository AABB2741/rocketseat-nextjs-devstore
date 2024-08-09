declare module '@t3-oss/env-nextjs' {
  import { ZodType } from 'zod'

  export interface CreateEnvConfig {
    server: Record<string, ZodType>
    client: Record<string, ZodType>
    runtimeEnv: Record<string, string | undefined>
  }

  export function createEnv(config: CreateEnvConfig): Record<string, string>
}
