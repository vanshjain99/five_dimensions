import { useRef } from 'react';
import { X, Calendar, Clock, ExternalLink, User } from 'lucide-react';
import { COLORS, FONT_SERIF } from '../../utils/constants';
import type { Insight, InsightContentBlock } from '../../types';
import OptimizedImage from '../ui/OptimizedImage';


interface InsightCardProps {
  insight: Insight;
  isExpanded: boolean;
  onToggle: () => void;
  onClose: () => void;
  /** Attached only when this card is the expanded one — used for outside-click detection */
  expandedRef?: React.RefObject<HTMLDivElement>;
}

/** Truncates text to a max word count, appending an ellipsis if cut short */
function truncateWords(text: string, wordLimit: number): { text: string; truncated: boolean } {
  const words = text.trim().split(/\s+/);
  if (words.length <= wordLimit) return { text, truncated: false };
  return { text: words.slice(0, wordLimit).join(' '), truncated: true };
}

/** Renders a single structured content block within an expanded article */
function ContentBlock({ block }: { block: InsightContentBlock }) {
  switch (block.type) {
    case 'heading':
      return (
        <h3
          className="text-lg font-bold mt-6 mb-2"
          style={{ fontFamily: FONT_SERIF, color: COLORS.navy }}
        >
          {block.text}
        </h3>
      );
    case 'paragraph':
      return (
        <p className="text-sm leading-relaxed mb-4" style={{ color: `${COLORS.navy}99` }}>
          {block.text}
        </p>
      );
    case 'bullets':
      return (
        <ul className="space-y-2 mb-4 pl-1">
          {block.items?.map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed" style={{ color: `${COLORS.navy}99` }}>
              <span
                className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ background: COLORS.gold }}
              />
              {item}
            </li>
          ))}
        </ul>
      );
    case 'quote':
      return (
        <blockquote
          className="my-5 pl-4 py-1 text-sm italic leading-relaxed"
          style={{ borderLeft: `3px solid ${COLORS.gold}`, color: COLORS.navy }}
        >
          "{block.text}"
        </blockquote>
      );
    case 'image':
      return (
        <div className="my-5 rounded-xl overflow-hidden" style={{ background: '#E8E4DC' }}>
          <OptimizedImage
            src={block.src}
            alt={block.alt ?? ''}
            className="w-full h-auto object-cover"
            loading="lazy"
            width={800}
            simpleImg={true}
          />
        </div>
      );
    default:
      return null;
  }
}

/**
 * Vertical-list insight card. Collapsed state shows a 50-word excerpt;
 * expanded state reveals the full structured article + source attribution.
 * Expand/collapse animates via a CSS grid-rows transition (no JS measuring needed).
 */
export default function InsightCard({
  insight,
  isExpanded,
  onToggle,
  onClose,
  expandedRef,
}: InsightCardProps) {
  const { text: shortExcerpt, truncated } = truncateWords(insight.excerpt, 50);
  const localRef = useRef<HTMLDivElement>(null);

  return (
    <article
      ref={isExpanded ? expandedRef : localRef}
      className="rounded-2xl border overflow-hidden transition-all duration-300"
      style={{
        background: 'white',
        borderColor: isExpanded ? `${COLORS.gold}55` : COLORS.border,
        boxShadow: isExpanded
          ? `0 16px 48px ${COLORS.navy}18`
          : '0 2px 12px rgba(26,39,68,0.05)',
      }}
    >
      {/* ── Collapsed header (always visible, click to toggle) ── */}
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex flex-col sm:flex-row gap-4 sm:gap-5 p-4 sm:p-5 text-left"
        aria-expanded={isExpanded}
      >
        <div
          className="w-full sm:w-44 h-40 sm:h-28 rounded-xl overflow-hidden flex-shrink-0"
          style={{ background: '#E8E4DC' }}
        >
          <OptimizedImage
            src={insight.image}
            alt={insight.alt}
            loading="lazy"
            className="w-full h-full object-cover"
            width={360}
            height={160}
          />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-3 mb-2">
            <span
              className="text-xs font-semibold tracking-wide uppercase"
              style={{ color: COLORS.gold }}
            >
              {insight.category}
            </span>
            <span
              className="hidden sm:flex items-center gap-1 text-xs flex-shrink-0"
              style={{ color: `${COLORS.navy}55` }}
            >
              <Clock size={12} />
              {insight.readTime} read
            </span>
          </div>

          <h3
            className="text-base sm:text-lg font-bold leading-snug mb-1.5"
            style={{ fontFamily: FONT_SERIF, color: COLORS.navy }}
          >
            {insight.title}
          </h3>

          {!isExpanded && (
            <p className="text-sm leading-relaxed" style={{ color: `${COLORS.navy}77` }}>
              {shortExcerpt}
              {truncated && (
                <span className="font-semibold" style={{ color: COLORS.gold }}>
                  {' '}
                  ... read more
                </span>
              )}
            </p>
          )}

          <div
            className="flex items-center gap-3 mt-2.5 text-xs"
            style={{ color: `${COLORS.navy}55` }}
          >
            <span className="flex items-center gap-1">
              <Calendar size={12} />
              {insight.date}
            </span>
            <span className="sm:hidden flex items-center gap-1">
              <Clock size={12} />
              {insight.readTime} read
            </span>
          </div>
        </div>
      </button>

      {/* ── Expandable region — CSS grid-rows animation ── */}
      <div
        style={{
          display: 'grid',
          gridTemplateRows: isExpanded ? '1fr' : '0fr',
          transition: 'grid-template-rows 0.4s ease',
        }}
      >
        <div style={{ overflow: 'hidden' }}>
          <div
            className="px-5 sm:px-8 pb-8 pt-2 border-t relative"
            style={{ borderColor: 'rgba(26,39,68,0.07)' }}
          >
            {/* Close button */}
            <button
              type="button"
              onClick={onClose}
              aria-label="Close article"
              className="absolute top-4 right-4 sm:right-6 w-8 h-8 rounded-full flex items-center justify-center transition-colors"
              style={{ background: `${COLORS.navy}0A`, color: COLORS.navy }}
            >
              <X size={16} />
            </button>

            <div className="max-w-2xl pt-4">
              {insight.content.map((block, i) => (
                <ContentBlock key={i} block={block} />
              ))}

              {/* ── Source / Credits ── */}
              <div
                className="mt-8 p-4 sm:p-5 rounded-xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3"
                style={{ background: '#FAF6F0', border: `1px solid ${COLORS.border}` }}
              >
                <div className="flex items-center gap-2.5">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: `${COLORS.gold}1E` }}
                  >
                    <User size={15} style={{ color: COLORS.gold }} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold" style={{ color: COLORS.navy }}>
                      {insight.author}
                    </p>
                    <p className="text-xs" style={{ color: `${COLORS.navy}66` }}>
                      Published {insight.date}
                    </p>
                  </div>
                </div>

                {insight.sourceUrl && (
                  <a
                    href={insight.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-2 rounded-full transition-colors flex-shrink-0"
                    style={{ border: `1.5px solid ${COLORS.gold}55`, color: COLORS.gold }}
                  >
                    Read Original Source
                    <ExternalLink size={12} />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}