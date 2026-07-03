import { ArrowRight } from 'lucide-react';
import { COLORS, FONT_SERIF } from '../utils/constants';
import { INSIGHTS } from '../data/insights';
import AnimatedSection from '../components/ui/AnimatedSection';
import type { Insight } from '../types';

/** A single market insight article card with image, category, and excerpt */
function InsightCard({ insight, index }: { insight: Insight; index: number }) {
  const { category, title, excerpt, date, readTime, image, alt } = insight;

  return (
    <AnimatedSection
      delay={index * 0.1}
      className="group rounded-2xl overflow-hidden border cursor-pointer transition-all duration-300 hover:-translate-y-1.5"
      style={{
        background: 'white',
        borderColor: COLORS.border,
        boxShadow: '0 2px 12px rgba(26,39,68,0.05)',
      }}
    >
      {/* Article image */}
      <div className="h-48 overflow-hidden" style={{ background: '#E8E4DC' }}>
        <img
          src={image}
          alt={alt}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Article metadata and content */}
      <div className="p-5">
        <div className="flex items-center justify-between mb-3">
          <span
            className="text-xs font-semibold tracking-wide"
            style={{ color: COLORS.gold }}
          >
            {category}
          </span>
          <span className="text-xs" style={{ color: `${COLORS.navy}44` }}>
            {readTime} read
          </span>
        </div>
        <h3
          className="text-base font-bold leading-snug mb-2 transition-colors group-hover:text-[#C9A96E]"
          style={{ fontFamily: FONT_SERIF, color: COLORS.navy }}
        >
          {title}
        </h3>
        <p className="text-xs leading-relaxed mb-4" style={{ color: `${COLORS.navy}77` }}>
          {excerpt}
        </p>
        <div className="text-xs" style={{ color: `${COLORS.navy}44` }}>
          {date}
        </div>
      </div>
    </AnimatedSection>
  );
}

/**
 * Market insights editorial section — three article cards in a responsive grid.
 * Section header includes an "All Insights" text link aligned to the right on desktop.
 */
export default function InsightsSection() {
  return (
    <section id="insights" className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header — custom layout to accommodate the right-aligned link */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <span
              className="text-xs font-semibold tracking-widest uppercase"
              style={{ color: COLORS.gold }}
            >
              Intelligence
            </span>
            <h2
              className="text-3xl lg:text-4xl font-bold mt-3"
              style={{ fontFamily: FONT_SERIF, color: COLORS.navy }}
            >
              Market Insights
            </h2>
          </div>
          <a
            href="#"
            className="flex items-center gap-1.5 text-sm font-semibold transition-all hover:gap-2.5"
            style={{ color: COLORS.gold }}
          >
            All Insights <ArrowRight size={14} />
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {INSIGHTS.map((insight, index) => (
            <InsightCard key={insight.title} insight={insight} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
