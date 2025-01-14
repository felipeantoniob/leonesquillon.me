type Experience = {
  position: string;
  company: string;
  period: string;
  sortOrder: number;
};

export const EXPERIENCE: Experience[] = [
  {
    position: "Graphic Designer",
    company: "Tripda",
    period: "2014 - 2015",
    sortOrder: 4,
  },
  {
    position: "Senior Graphic Designer",
    company: "Uncloset (UK)",
    period: "2015 - 2017",
    sortOrder: 3,
  },
  {
    position: "Product Designer & Co-Founder",
    company: "Replay",
    period: "2022",
    sortOrder: 2,
  },
  {
    position: "Product Designer",
    company: "Emblem Technologies",
    period: "2023",
    sortOrder: 1,
  },
  {
    position: "UI/UX Designer",
    company: "Toki",
    period: "2023 - Current",
    sortOrder: 0,
  },
] as const;
