import { useEffect, useRef, useState } from 'react';

interface AnimatedSectionProps {
  children: React.ReactNode;
  /** Stagger delay in seconds — incremented per card in a list */
  delay?: number;
  /** Vertical distance (px) the element rises from on entry. Defaults to 24. */
  yOffset?: number;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * Wraps children in a div that fades + rises into view once, using
 * IntersectionObserver + CSS transitions instead of framer-motion.
 * Used throughout to keep scroll-reveal boilerplate out of section components.
 */
export default function AnimatedSection({
  children,
  delay = 0,
  yOffset = 24,
  className,
  style,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...style,
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : `translateY(${yOffset}px)`,
        transition: `opacity 0.5s ease-out ${delay}s, transform 0.5s ease-out ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}