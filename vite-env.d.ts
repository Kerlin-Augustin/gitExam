/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SUPABASE_URL: string;
  readonly VITE_SUPABASE_ANON_URL: string;
  // Add other Environment Variables here if needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}