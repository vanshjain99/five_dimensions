import type { CSSProperties } from "react";

export const HERO_IMG =
  "https://images.unsplash.com/photo-1611323340350-bdcc0e6cfae5?w=1920&h=1080&fit=crop&auto=format";
export const CTA_IMG =
  "https://images.unsplash.com/photo-1664353655151-9d94a9170eb0?w=1920&h=800&fit=crop&auto=format";

export const GOLD = "#C9A84C";
export const LIGHT_GOLD = "#E8C96A";
export const NAVY = "#050C1A";

export const glassCard: CSSProperties = {
  background: "rgba(5, 12, 26, 0.72)",
  backdropFilter: "blur(28px)",
  WebkitBackdropFilter: "blur(28px)",
  border: "1px solid rgba(201, 168, 76, 0.22)",
  boxShadow: "0 32px 80px rgba(0,0,0,0.55), inset 0 1px 0 rgba(201,168,76,0.12)",
};

export const subtleCard: CSSProperties = {
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(255,255,255,0.07)",
};

export const goldGradient = `linear-gradient(135deg, ${GOLD} 0%, ${LIGHT_GOLD} 50%, ${GOLD} 100%)`;
