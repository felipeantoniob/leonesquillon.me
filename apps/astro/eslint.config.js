// @ts-nocheck
import baseConfig, { restrictEnvAccess } from "@leon/eslint-config/base";
import reactConfig from "@leon/eslint-config/react";

/** @type {import('typescript-eslint').Config} */
export default [
  {
    ignores: [".next/**", ".astro/types.d.ts", ".astro/content.d.ts"],
  },
  ...baseConfig,
  ...reactConfig,
  ...restrictEnvAccess,
];
