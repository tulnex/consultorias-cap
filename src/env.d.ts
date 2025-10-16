/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly RESEND_API_KEY: string
  readonly FROM_EMAIL: string
  readonly TO_EMAIL: string
  readonly COMPANY_NAME: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
