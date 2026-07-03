import { COLORS } from '../../utils/constants';

type ButtonVariant = 'gold' | 'navy' | 'outline-white' | 'outline-gold';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  /** Renders as an <a> tag when provided */
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  /** Trailing icon element */
  icon?: React.ReactNode;
  /** Stretches to full container width */
  fullWidth?: boolean;
  className?: string;
}

const SIZE_CLASSES: Record<ButtonSize, string> = {
  sm: 'px-5 py-2.5 text-xs',
  md: 'px-8 py-3.5 text-sm',
  lg: 'px-10 py-4 text-sm',
};

/** Style map for each variant — returns an inline style object */
function getVariantStyle(variant: ButtonVariant): React.CSSProperties {
  switch (variant) {
    case 'gold':
      return {
        background: `linear-gradient(135deg, ${COLORS.gold}, ${COLORS.goldDark})`,
        color: 'white',
        boxShadow: `0 6px 24px ${COLORS.gold}44`,
      };
    case 'navy':
      return { background: COLORS.navy, color: 'white' };
    case 'outline-white':
      return {
        background: 'transparent',
        color: 'white',
        border: '1.5px solid rgba(255,255,255,0.2)',
      };
    case 'outline-gold':
      return {
        background: 'transparent',
        color: COLORS.gold,
        border: `1.5px solid ${COLORS.gold}55`,
      };
  }
}

/**
 * Multi-variant CTA button — renders as <button> or <a> depending on whether
 * an href is provided. All visual variants share the same pill shape and
 * lift-on-hover micro-interaction.
 */
export default function Button({
  children,
  variant = 'gold',
  size = 'md',
  href,
  onClick,
  type = 'button',
  icon,
  fullWidth = false,
  className = '',
}: ButtonProps) {
  const baseClass = [
    'inline-flex items-center justify-center gap-2 font-semibold rounded-full',
    'transition-all duration-200 hover:-translate-y-0.5',
    SIZE_CLASSES[size],
    fullWidth ? 'w-full' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const style = getVariantStyle(variant);

  if (href) {
    return (
      <a href={href} className={baseClass} style={style}>
        {children}
        {icon}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={baseClass} style={style}>
      {children}
      {icon}
    </button>
  );
}
