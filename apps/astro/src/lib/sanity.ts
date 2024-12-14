import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "qsjhxvmt",
  dataset: "production",
  useCdn: false,
});
