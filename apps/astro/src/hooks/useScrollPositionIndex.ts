import { useEffect, useRef } from "react";

const useScrollPositionIndex = <T>(
  items: T[],
  setIndex: (index: number) => void,
) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = () => {
    const container = containerRef.current;
    if (!container) return;

    const scrollPosition = container.scrollTop;
    const containerHeight = container.clientHeight;
    const contentHeight = container.scrollHeight;

    const scrollPercentage = Math.max(
      (scrollPosition / (contentHeight - containerHeight)) * 100,
      0,
    );

    const section = Math.min(
      Math.floor((scrollPercentage / 100) * items.length),
      items.length - 1,
    );

    setIndex(section);
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items.length]);

  return containerRef;
};

export default useScrollPositionIndex;
