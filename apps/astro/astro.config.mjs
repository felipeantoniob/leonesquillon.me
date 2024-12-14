// @ts-check
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import sanity from "@sanity/astro";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    tailwind(),
    sanity({
      projectId: "qsjhxvmt",
      dataset: "production",
      useCdn: false, // for static builds
    }),
  ],
  experimental: {
    svg: true,
  },
});
