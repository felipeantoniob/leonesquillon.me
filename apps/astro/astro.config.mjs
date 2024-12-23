// @ts-check
import partytown from "@astrojs/partytown";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel";
import sanity from "@sanity/astro";
import { defineConfig, envField } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://leon-esquillon.vercel.app",
  output: "static",
  adapter: vercel(),
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "load",
  },
  integrations: [
    react(),
    tailwind(),
    sanity({
      projectId: "qsjhxvmt",
      dataset: "production",
      useCdn: false, // for static builds
    }),
    sitemap(),
    partytown(),
  ],
  env: {
    schema: {
      PUBLIC_VERCEL_ENV: envField.string({
        context: "client",
        access: "public",
        optional: true,
        default: "development",
      }),
      PUBLIC_VERCEL_PROJECT_PRODUCTION_URL: envField.string({
        context: "client",
        access: "public",
        optional: true,
      }),
      PUBLIC_VERCEL_URL: envField.string({
        context: "client",
        access: "public",
        optional: true,
      }),
    },
  },
  experimental: {
    svg: true,
  },
});
