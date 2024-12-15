import type { CSSProperties } from "react";
import { useEffect, useState } from "react";

interface Position {
  x: number;
  y: number;
}

const CursorHighlight = () => {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setPosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const highlightStyle: CSSProperties = {
    position: "absolute",
    width: 700,
    height: 700,
    background:
      "radial-gradient(circle, rgba(69, 69, 69, 0.1) 0%,rgba(15, 15, 15, 0) 60%)",
    borderRadius: "50%",
    pointerEvents: "none",
    transform: "translate(-50%, -50%)",
    transition: "all 0.05s ease-out",
    zIndex: 40,
    left: position.x,
    top: position.y,
  };

  return <div style={highlightStyle} className="hidden lg:block" />;
};

export default CursorHighlight;
