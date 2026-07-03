import { ArrowRight, MapPin } from 'lucide-react';
import { COLORS, FONT_SERIF } from '../utils/constants';
import { OPPORTUNITIES } from '../data/opportunities';
import SectionHeader from '../components/ui/SectionHeader';
import AnimatedSection from '../components/ui/AnimatedSection';
import Button from '../components/ui/Button';
import type { Opportunity } from '../types';

/** Individual property card with image, type badge, pricing, and a detail CTA */
function OpportunityCard({ opportunity, index }: { opportunity: Opportunity; index: number }) {
  const { type, title, location, price, returns, tag, image, alt } = opportunity;

  return (
    <AnimatedSection
      delay={index * 0.09}
      className="group rounded-2xl overflow-hidden border cursor-pointer transition-all duration-300 hover:-translate-y-1.5"
      style={{
        background: 'white',
        borderColor: COLORS.border,
        boxShadow: '0 2px 12px rgba(26,39,68,0.06)',
      }}
    >
      {/* Property image with type and demand badges */}
      <div className="relative h-44 overflow-hidden" style={{ background: '#E8E4DC' }}>
        <img
          src={image}
          alt={alt}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3">
          <span
            className="text-white text-xs font-semibold px-2.5 py-1 rounded-full"
            style={{ background: COLORS.gold }}
          >
            {type}
          </span>
        </div>
        <div className="absolute top-3 right-3">
          <span
            className="text-xs font-semibold px-2.5 py-1 rounded-full"
            style={{
              background: 'rgba(255,255,255,0.92)',
              backdropFilter: 'blur(8px)',
              color: COLORS.navy,
            }}
          >
            {tag}
          </span>
        </div>
      </div>

      {/* Card body */}
      <div className="p-4">
        <h3
          className="text-base font-bold leading-snug mb-1"
          style={{ fontFamily: FONT_SERIF, color: COLORS.navy }}
        >
          {title}
        </h3>
        <div className="flex items-center gap-1 text-xs mb-3" style={{ color: `${COLORS.navy}66` }}>
          <MapPin size={11} />
          <span>{location}</span>
        </div>
        <div className="flex items-end justify-between">
          <div
            className="text-xl font-bold"
            style={{ fontFamily: FONT_SERIF, color: COLORS.gold }}
          >
            {price}
          </div>
          <div className="text-right">
            <div className="text-xs" style={{ color: `${COLORS.navy}55` }}>
              Expected
            </div>
            <div className="text-xs font-semibold" style={{ color: COLORS.navy }}>
              {returns}
            </div>
          </div>
        </div>
        <Button
          variant="outline-gold"
          size="sm"
          fullWidth
          className="mt-3"
        >
          View Details
        </Button>
      </div>
    </AnimatedSection>
  );
}

/**
 * Featured investment opportunities grid — four handpicked property cards.
 * Below the grid, a navy CTA button links to the full portfolio.
 */
export default function OpportunitiesSection() {
  return (
    <section id="opportunities" className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          overline="Curated Selection"
          title="Featured Investment Opportunities"
          subtitle="Handpicked assets meeting our stringent investment-grade criteria — vetted across return potential, liquidity, and legal integrity."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {OPPORTUNITIES.map((opportunity, index) => (
            <OpportunityCard key={opportunity.title} opportunity={opportunity} index={index} />
          ))}
        </div>

        <div className="text-center mt-10">
          <Button variant="navy" icon={<ArrowRight size={15} />}>
            Explore All Opportunities
          </Button>
        </div>
      </div>
    </section>
  );
}
