import { useEffect, useRef, useState } from "react";

const useScrollSectionIndex = <T>(sections: T[]) => {
  const [selectedSectionIndex, setSelectedSectionIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  const updateSectionIndex = () => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const scrollTop = container.scrollTop;
    const containerVisibleHeight = container.clientHeight;
    const totalContentHeight = container.scrollHeight;

    const scrollProgress = Math.max(
      scrollTop / (totalContentHeight - containerVisibleHeight),
      0,
    );

    const currentSectionIndex = Math.min(
      Math.floor(scrollProgress * sections.length),
      sections.length - 1,
    );

    setSelectedSectionIndex(currentSectionIndex);
  };

  const scrollToSection = (index: number) => {
    const container = scrollContainerRef.current;

    if (!container) return;

    const scrollProgress = index / (sections.length - 1);
    const totalScrollableHeight =
      container.scrollHeight - container.clientHeight;

    const targetScrollPosition = totalScrollableHeight * scrollProgress;

    container.scrollTo({ top: targetScrollPosition, behavior: "smooth" });
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", updateSectionIndex);
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", updateSectionIndex);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sections.length]);

  return { scrollContainerRef, scrollToSection, selectedSectionIndex };
};

export default useScrollSectionIndex;
