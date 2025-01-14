// @ts-check
import partytown from "@astrojs/partytown";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://leonesquillon.me",
  output: "static",
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "load",
  },
  integrations: [react(), tailwind(), sitemap(), partytown()],
  experimental: {
    svg: true,
  },
});
