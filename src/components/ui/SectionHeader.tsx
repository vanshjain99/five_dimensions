import { COLORS, FONT_SERIF } from '../../utils/constants';

interface SectionHeaderProps {
  /** Small overline text rendered above the title (e.g. "Curated Selection") */
  overline: string;
  /** Main heading text */
  title: string;
  /** Optional supporting paragraph below the title */
  subtitle?: string;
  /** Centre-aligns text. Defaults to true. */
  centered?: boolean;
  /** Renders text in light colours for use on dark backgrounds */
  light?: boolean;
}

/** Reusable three-level section heading: overline → title → optional subtitle. */
export default function SectionHeader({
  overline,
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionHeaderProps) {
  const titleColor = light ? 'white' : COLORS.navy;
  const subtitleColor = light ? 'rgba(255,255,255,0.5)' : `${COLORS.navy}88`;

  return (
    <div className={`mb-14 ${centered ? 'text-center' : ''}`}>
      <span
        className="text-xs font-semibold tracking-widest uppercase"
        style={{ color: COLORS.gold }}
      >
        {overline}
      </span>
      <h2
        className="text-3xl lg:text-4xl font-bold mt-3 mb-4 leading-tight"
        style={{ fontFamily: FONT_SERIF, color: titleColor }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-base leading-relaxed ${centered ? 'mx-auto' : ''} max-w-xl`}
          style={{ color: subtitleColor }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
