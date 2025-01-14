import type { CSSProperties } from "react";

import useMousePosition from "~/hooks/useMousePosition";

const CursorHighlight = () => {
  const mousePosition = useMousePosition();

  const highlightStyle: CSSProperties = {
    background: `radial-gradient(500px at ${mousePosition.x}px ${mousePosition.y}px, rgba(69, 69, 69, 0.2) 0%, transparent 80%)`,
  };

  return (
    <div
      style={highlightStyle}
      className="pointer-events-none absolute z-40 hidden h-screen w-screen lg:block"
    />
  );
};

export default CursorHighlight;
