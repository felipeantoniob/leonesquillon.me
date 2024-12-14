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
      "radial-gradient(circle, rgba(200, 200, 200, 0.1) 10%, rgba(255, 255, 255, 0) 90%)",
    borderRadius: "50%",
    pointerEvents: "none",
    transform: "translate(-50%, -50%)",
    transition: "all 0.05s ease-out",
    zIndex: 40,
    left: position.x,
    top: position.y,
  };

  return <div style={highlightStyle} />;
};

export default CursorHighlight;
