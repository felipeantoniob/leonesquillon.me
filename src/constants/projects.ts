import type { ImageMetadata } from "astro";

import imsCover from "~/assets/images/projects/ims/ims-cover.png";
import imsLogoDark from "~/assets/images/projects/ims/ims-logo-dark.png";
import imsLogoLight from "~/assets/images/projects/ims/ims-logo-light.png";
import imsSample1 from "~/assets/images/projects/ims/ims-sample-1.png";
import imsSample2 from "~/assets/images/projects/ims/ims-sample-2.png";
import imsSample3 from "~/assets/images/projects/ims/ims-sample-3.png";
import onthagoCover from "~/assets/images/projects/onthago/onthago-cover.png";
import onthagoLogoDark from "~/assets/images/projects/onthago/onthago-logo-dark.png";
import onthagoLogoLight from "~/assets/images/projects/onthago/onthago-logo-light.png";
import onthagoSample1 from "~/assets/images/projects/onthago/onthago-sample-1.png";
import onthagoSample2 from "~/assets/images/projects/onthago/onthago-sample-2.png";
import replayCover from "~/assets/images/projects/replay/replay-cover.png";
import replayLogoDark from "~/assets/images/projects/replay/replay-logo-dark.png";
import replayLogoLight from "~/assets/images/projects/replay/replay-logo-light.png";
import replaySample1 from "~/assets/images/projects/replay/replay-sample-1.png";
import replaySample2 from "~/assets/images/projects/replay/replay-sample-2.png";
import replaySample3 from "~/assets/images/projects/replay/replay-sample-3.png";
import replaySample4 from "~/assets/images/projects/replay/replay-sample-4.png";
import ticketNationCover from "~/assets/images/projects/ticketnation/ticketnation-cover.png";
import ticketNationLogoDark from "~/assets/images/projects/ticketnation/ticketnation-logo-dark.png";
import ticketNationLogoLight from "~/assets/images/projects/ticketnation/ticketnation-logo-light.png";
import ticketNationSample1 from "~/assets/images/projects/ticketnation/ticketnation-sample-1.png";
import ticketNationSample2 from "~/assets/images/projects/ticketnation/ticketnation-sample-2.png";
import tokiCover from "~/assets/images/projects/toki/toki-cover.png";
import tokiLogoDark from "~/assets/images/projects/toki/toki-logo-dark.png";
import tokiLogoLight from "~/assets/images/projects/toki/toki-logo-light.png";
import tokiSample1 from "~/assets/images/projects/toki/toki-sample-1.png";
import tokiSample2 from "~/assets/images/projects/toki/toki-sample-2.png";

export interface Project {
  title: string;
  summary: string;
  role: string;
  period: string;
  description: string;
  slug: string;
  webUrl?: string;
  androidUrl?: string;
  iosUrl?: string;
  coverImage: ImageMetadata;
  logoImageLight: ImageMetadata;
  logoImageDark: ImageMetadata;
  sampleImages: ImageMetadata[];
  tags: string[];
  sortOrder: number;
  gradients: {
    light: string;
    dark: string;
  };
}

export const PROJECTS: Project[] = [
  {
    title: "Onthago",
    summary:
      "A campus-focused app simplifying food pickups and deliveries for Oklahoma University students.",
    role: "Product Designer",
    period: "2023",
    description:
      "Developed a campus-focused app for food pickups and deliveries, tailored to Oklahoma University students. Prioritized usability, geolocation integration, and streamlined user flows to enhance convenience and efficiency.",
    slug: "onthago",
    webUrl: "https://onthago.app/",
    androidUrl:
      "https://play.google.com/store/apps/details?id=co.tierzen.onthago",
    iosUrl: "https://apps.apple.com/us/app/onthago/id6449786148",
    coverImage: onthagoCover,
    logoImageLight: onthagoLogoLight,
    logoImageDark: onthagoLogoDark,
    sampleImages: [onthagoSample1, onthagoSample2],
    tags: ["Mobile Application", "E-commerce", "Food"],
    sortOrder: 4,
    gradients: {
      light: "linear-gradient(180deg, #FCFCFC 0%, #FFBCBC 100%)",
      dark: "linear-gradient(180deg, #0F0F0F 0%, #390400 100%)",
    },
  },

  {
    title: "Replay",
    summary:
      "A data visualizer and platform for creating playlists based on Spotify listening activity.",
    role: "Product Designer & Co-Founder",
    period: "2022 - 2023",
    description:
      "Designed a cross-platform tool that visualizes Spotify listening habits and enables personalized playlist creation. Focused on data visualization, user-friendly design, and seamless web and mobile experiences.",
    slug: "replay",
    webUrl: "https://spotify-replay.vercel.app/",
    coverImage: replayCover,
    logoImageLight: replayLogoLight,
    logoImageDark: replayLogoDark,
    sampleImages: [replaySample1, replaySample2, replaySample3, replaySample4],
    tags: ["Data Visualization", "Streaming", "Personalization"],
    sortOrder: 5,
    gradients: {
      light: "linear-gradient(180deg, #FCFCFC 0%, #D2BCFF 100%)",
      dark: "linear-gradient(180deg, #0F0F0F 0%, #1E0051 100%)",
    },
  },

  {
    title: "Toki",
    summary:
      "A social ecommerce app merging live streaming with buying and selling collectibles.",
    role: "Senior UI/UX Designer",
    period: "November 2023 - Current",
    description:
      "Led end-to-end design and research for the Toki mobile app while designing critical web app features, such as the Cart, Live Show UI, and Product Pages, ensuring functionality and user satisfaction.",
    slug: "toki",
    webUrl: "https://www.tokiasia.com/",
    coverImage: tokiCover,
    logoImageLight: tokiLogoLight,
    logoImageDark: tokiLogoDark,
    sampleImages: [tokiSample1, tokiSample2],
    tags: ["Design Systems", "E-commerce", "Mobile App", "UI/UX Design"],
    sortOrder: 1,
    gradients: {
      light: "linear-gradient(180deg, #FCFCFC 0%, #9BA1E7 100%)",
      dark: "linear-gradient(180deg, #0F0F0F 0%, #182253 100%)",
    },
  },
  {
    title: "Ticketnation",
    summary:
      "A ticketing platform connecting secondary markets with customers for Metro Manila events.",
    role: "UI/UX Designer",
    period: "2024",
    description:
      "Designed a user-friendly interface to connect secondary ticket markets with customers, prioritizing trust, transparency, and scalability for high-traffic events.",
    slug: "ticket-nation",
    webUrl: "https://www.ticketnation.ph/",
    coverImage: ticketNationCover,
    logoImageLight: ticketNationLogoLight,
    logoImageDark: ticketNationLogoDark,
    sampleImages: [ticketNationSample1, ticketNationSample2],
    tags: ["E-commerce", "SaaS", "Market Bridging"],
    sortOrder: 3,
    gradients: {
      light: "linear-gradient(180deg, #FCFCFC 0%, #B7D8FF 100%)",
      dark: "linear-gradient(180deg, #0F0F0F 0%, #3559E0 100%)",
    },
  },
  {
    title: "Toki IMS",
    summary:
      "A SaaS platform similar to Zoho, enabling inventory creation and management across multiple platforms and stores.",
    role: "Senior UI/UX Designer",
    period: "2024",
    description:
      "Designed a SaaS platform to manage inventory across multiple platforms and stores. Focused on scalability, operational efficiency, and delivering a user-friendly interface for businesses and partner merchants.",
    slug: "ims-toki",
    coverImage: imsCover,
    logoImageLight: imsLogoLight,
    logoImageDark: imsLogoDark,
    sampleImages: [imsSample1, imsSample2, imsSample3],
    tags: ["SaaS", "B2B", "E-commerce"],
    sortOrder: 2,
    gradients: {
      light: "linear-gradient(180deg, #FCFCFC 0%, #A4A4A4 100%)",
      dark: "linear-gradient(180deg, #0F0F0F 0%, #444444 100%)",
    },
  },
] as const;
