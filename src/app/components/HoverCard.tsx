import { useState } from "react";
import type { ReactNode, CSSProperties } from "react";

interface HoverCardProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  hoverBorder?: string;
  hoverBg?: string;
}

// --- Card hover helper ---
export function HoverCard({
  children, className = "", style = {}, hoverBorder = "rgba(201,168,76,0.28)", hoverBg
}: HoverCardProps) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className={className}
      style={{
        ...style,
        borderColor: hovered ? hoverBorder : (style.borderColor ?? "rgba(255,255,255,0.07)"),
        background: hovered && hoverBg ? hoverBg : style.background,
        transform: hovered ? "translateY(-4px)" : "none",
        boxShadow: hovered ? "0 24px 60px rgba(0,0,0,0.4)" : "none",
        transition: "all 0.3s ease",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </div>
  );
}
