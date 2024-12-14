import type { HTMLAttributes } from "react";

import { cn } from "@leon/ui";

interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
  text: string;
  className?: string;
}
const Badge = ({ text, className, ...props }: BadgeProps) => {
  return (
    <div
      className={cn(
        "whitespace-nowrap rounded-full border border-[#2137AC] bg-[#182253] px-3 py-1 font-sans text-sm text-[#95BEFB]",
        className,
      )}
      {...props}
    >
      {text}
    </div>
  );
};

export default Badge;
