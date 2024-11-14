/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_BACKEND_URL: string; // Declare your variable here
    // Add other variables if needed
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
  