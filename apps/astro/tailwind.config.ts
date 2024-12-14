import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

import baseConfig from "@leon/tailwind-config/web";

export default {
  content: [...baseConfig.content],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Work Sans", ...fontFamily.sans],
        serif: ["Lora", ...fontFamily.serif],
      },
    },
  },
  plugins: [],
} satisfies Config;
