interface ImportMetaEnv {
  readonly PUBLIC_FEATURE_CHECKOUT?: string;
  readonly PUBLIC_FEATURE_ASSISTANT?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
