// @ts-check
import partytown from "@astrojs/partytown";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import sanity from "@sanity/astro";
import { defineConfig, envField } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://leonesquillon.me",
  output: "static",
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
  experimental: {
    svg: true,
  },
});
