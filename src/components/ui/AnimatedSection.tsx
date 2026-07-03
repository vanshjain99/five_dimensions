import { motion } from 'motion/react';

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
 * Wraps children in a motion.div that fades + rises into view once.
 * Used throughout to keep whileInView boilerplate out of section components.
 */
export default function AnimatedSection({
  children,
  delay = 0,
  yOffset = 24,
  className,
  style,
}: AnimatedSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: 'easeOut', delay }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}
