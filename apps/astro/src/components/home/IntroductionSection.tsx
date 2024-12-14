import type { Variants } from "motion/react";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

import { cn } from "~/utils/cn";

type RoleTab =
  | "For anyone"
  | "Hiring Managers"
  | "Product Designers"
  | "Product Managers";

const roleData: Record<RoleTab, { content: string; underline: JSX.Element }> = {
  "For anyone": {
    content:
      "Hi, I’m Leon! A Product Designer that turns ideas into impactful digital experiences. With over five years of experience in retail and e-commerce, I thrive on collaboration and crafting intuitive solutions that make life easier for people every day.",
    underline: (
      <div className="h-[1px] w-full bg-gradient-to-r from-[#777] from-10% to-20%" />
    ),
  },
  "Hiring Managers": {
    content:
      "I’m Leon - an experienced Product Designer having over half a decade of professional expertise in e-commerce and SaaS, with a strong foundation in UI & UX design principles.",
    underline: (
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent from-15% via-[#777] to-45%" />
    ),
  },
  "Product Designers": {
    content:
      "I’m Leon, a Product Designer who’s always exploring new tech and design trends to elevate my craft. With a strong background in retail and e-commerce, I believe great design comes from understanding not only the user but also the team behind the product—and I love bridging those connections.",
    underline: (
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent from-45% via-[#777] to-75%" />
    ),
  },
  "Product Managers": {
    content:
      "Hi, I’m Leon—a Product Designer with a knack for aligning user needs with business strategy. I’ve spent 5+ years designing for retail and e-commerce, leveraging my communication skills and deep understanding of tech trends to deliver designs that drive results and foster team collaboration.",
    underline: (
      <div className="h-[1px] w-full bg-gradient-to-l from-[#777] from-10% to-25%" />
    ),
  },
};

const variants: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const IntroductionSection = () => {
  const [activeTab, setActiveTab] = useState<RoleTab>("For anyone");

  return (
    <div className="flex max-w-screen-lg flex-col gap-10 pt-16">
      <div className="flex flex-row justify-between gap-10">
        {Object.keys(roleData).map((tab) => (
          <button
            key={tab}
            className={cn(
              "whitespace-nowrap font-sans font-medium text-[#444]",
              activeTab === tab && "text-white",
            )}
            onClick={() => setActiveTab(tab as RoleTab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="relative">
        <motion.div
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
          key={activeTab}
        >
          {roleData[activeTab].underline}
        </motion.div>
      </div>
      <div className="relative">
        <AnimatePresence>
          <motion.h2
            layout
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            key={activeTab}
            className="absolute font-serif text-3xl text-white"
          >
            {roleData[activeTab].content}
          </motion.h2>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default IntroductionSection;
