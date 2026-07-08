import { MapPin, ArrowRight, TrendingUp } from 'lucide-react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { COLORS, FONT_SERIF } from '../../utils/constants';
import type { Opportunity } from '../../types';

interface OpportunityCardProps {
  opportunity: Opportunity;
  /** Stagger delay for entrance animation */
  animationDelay?: number;
}

/** Badge colour map by property type */
const TYPE_COLORS: Record<Opportunity['type'], string> = {
  Commercial: '#2563EB',
  Luxury: COLORS.gold,
  Plots: '#059669',
  Residential: '#7C3AED',
};

/** Status badge styles */
const STATUS_STYLES: Record<Opportunity['status'], { bg: string; color: string }> = {
  'Ready Possession': { bg: '#D1FAE5', color: '#065F46' },
  'Under Construction': { bg: '#FEF3C7', color: '#92400E' },
  'New Launch': { bg: '#EDE9FE', color: '#5B21B6' },
};

/**
 * Full-featured opportunity card used on the /opportunities grid page.
 * Shows image, all badges, price, ROI, one-line description, and a
 * "View Details" link that routes to /opportunities/:id.
 */
export default function OpportunityCard({
  opportunity,
  animationDelay = 0,
}: OpportunityCardProps) {
  const {
    id,
    type,
    title,
    location,
    price,
    returns,
    tag,
    status,
    description,
    image,
    alt,
  } = opportunity;

  const statusStyle = STATUS_STYLES[status];
  const typeColor = TYPE_COLORS[type];

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: 'easeOut', delay: animationDelay }}
      className="group rounded-2xl overflow-hidden border flex flex-col cursor-pointer transition-all duration-300 hover:-translate-y-1.5"
      style={{
        background: 'white',
        borderColor: COLORS.border,
        boxShadow: '0 2px 12px rgba(26,39,68,0.06)',
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.boxShadow = '0 16px 40px rgba(26,39,68,0.12)')
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.boxShadow = '0 2px 12px rgba(26,39,68,0.06)')
      }
    >
      {/* Property image */}
      <div className="relative h-48 overflow-hidden flex-shrink-0" style={{ background: '#E8E4DC' }}>
        <img
          src={image}
          alt={alt}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Type badge — top left */}
        <span
          className="absolute top-3 left-3 text-white text-xs font-semibold px-2.5 py-1 rounded-full"
          style={{ background: typeColor }}
        >
          {type}
        </span>

        {/* Highlight tag — top right */}
        <span
          className="absolute top-3 right-3 text-xs font-semibold px-2.5 py-1 rounded-full"
          style={{
            background: 'rgba(255,255,255,0.92)',
            backdropFilter: 'blur(8px)',
            color: COLORS.navy,
          }}
        >
          {tag}
        </span>

        {/* Status badge — bottom left */}
        <span
          className="absolute bottom-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full"
          style={{ background: statusStyle.bg, color: statusStyle.color }}
        >
          {status}
        </span>
      </div>

      {/* Card body */}
      <div className="p-4 flex flex-col flex-1">
        {/* Title + location */}
        <h3
          className="text-base font-bold leading-snug mb-1"
          style={{ fontFamily: FONT_SERIF, color: COLORS.navy }}
        >
          {title}
        </h3>
        <div
          className="flex items-center gap-1 text-xs mb-2"
          style={{ color: `${COLORS.navy}66` }}
        >
          <MapPin size={11} />
          <span>{location}</span>
        </div>

        {/* One-line description */}
        <p className="text-xs leading-relaxed mb-3 flex-1" style={{ color: `${COLORS.navy}77` }}>
          {description}
        </p>

        {/* Price + ROI row */}
        <div
          className="flex items-end justify-between py-3 border-t border-b mb-3"
          style={{ borderColor: 'rgba(26,39,68,0.07)' }}
        >
          <div>
            <div className="text-xs mb-0.5" style={{ color: `${COLORS.navy}55` }}>
              Starting from
            </div>
            <div
              className="text-xl font-bold"
              style={{ fontFamily: FONT_SERIF, color: COLORS.gold }}
            >
              {price}
            </div>
          </div>
          <div className="text-right">
            <div className="text-xs mb-0.5" style={{ color: `${COLORS.navy}55` }}>
              Expected return
            </div>
            <div
              className="flex items-center gap-1 text-sm font-semibold justify-end"
              style={{ color: COLORS.navy }}
            >
              <TrendingUp size={13} style={{ color: COLORS.gold }} />
              {returns}
            </div>
          </div>
        </div>

        {/* View Details CTA */}
        <Link
          to={`/opportunities/${id}`}
          className="flex items-center justify-center gap-1.5 text-xs font-semibold py-2.5 rounded-xl transition-all duration-200 group/btn"
          style={{
            border: `1.5px solid ${COLORS.gold}55`,
            color: COLORS.gold,
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.background = `${COLORS.gold}0D`)
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.background = 'transparent')
          }
        >
          View Details
          <ArrowRight size={12} className="group-hover/btn:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </motion.article>
  );
}
