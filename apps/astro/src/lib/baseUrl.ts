import {
  VERCEL_ENV,
  VERCEL_PROJECT_PRODUCTION_URL,
  VERCEL_URL,
} from "astro:env/client";

const url =
  VERCEL_ENV === "production" ? VERCEL_PROJECT_PRODUCTION_URL : VERCEL_URL;

export const BASE_URL = url ? `https://${url}` : `http://localhost:4321`;
