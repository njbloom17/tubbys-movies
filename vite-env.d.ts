interface ImportMetaEnv {
  readonly VITE_TMDB_READ_ACCESS_TOKEN: string; // Replace with your actual environment variables
  readonly TMDB_API_KEY: string;
  // Add other environment variables as needed, e.g.:
  // readonly VITE_API_URL: string;
  // readonly VITE_ANOTHER_VAR: number;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
