/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_ESRI_KEY: string;
  readonly VITE_SENDGRID_FUNCTION_URL: string;
  readonly VITE_SENDGRID_AZURE_FUNCTION_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
