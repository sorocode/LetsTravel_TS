/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GOOGLE_KEY: string;
  readonly VITE_GOOGLE_MAP_ID: string;
  readonly VITE_GPT_KEY: string;
  readonly VITE_GCP_URL: string;
  // 추가로 필요한 환경 변수를 여기에 정의하세요.
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
