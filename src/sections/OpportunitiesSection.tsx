import { useState, useEffect } from 'react';
import { ArrowRight, MapPin } from 'lucide-react';
import { Link } from 'react-router';
import { COLORS, FONT_SERIF } from '../utils/constants';
import { fetchOpportunities } from '../lib/opportunitiesApi';
import SectionHeader from '../components/ui/SectionHeader';
import AnimatedSection from '../components/ui/AnimatedSection';
import OpportunityCardSkeleton from '../components/opportunities/OpportunityCardSkeleton';
import type { Opportunity } from '../types';
import OptimizedImage from '../components/ui/OptimizedImage';


/** Badge colour map for each property type */
const TYPE_COLORS: Record<string, string> = {
  Commercial: '#2563EB',
  Luxury: COLORS.gold,
  Plots: '#059669',
  Residential: '#7C3AED',
  Farmland: '#B45309',
};

/** Compact property card used in the homepage featured section */
function FeaturedCard({ opportunity, index }: { opportunity: Opportunity; index: number }) {
  const { id, type, title, location, price, returns, tag, image, alt } = opportunity;

  return (
    <AnimatedSection
      delay={index * 0.09}
      className="group rounded-2xl overflow-hidden border cursor-pointer transition-all duration-300 hover:-translate-y-1.5 flex flex-col h-[600px]"
      style={{ background: 'white', borderColor: COLORS.border, boxShadow: '0 2px 12px rgba(26,39,68,0.06)' }}
    >
      <div className="relative h-[70%] overflow-hidden flex-shrink-0" style={{ background: '#E8E4DC' }}>
        <OptimizedImage
          src={image}
          alt={alt}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          width={400}
          height={420}
          loading="lazy"
        />
        <div className="absolute top-3 left-3">
          <span className="text-white text-xs font-semibold px-2.5 py-1 rounded-full" style={{ background: TYPE_COLORS[type] ?? COLORS.navy }}>
            {type}
          </span>
        </div>
        <div className="absolute top-3 right-3">
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full" style={{ background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(8px)', color: COLORS.navy }}>
            {tag}
          </span>
        </div>
      </div>

      <div className="h-[30%] p-5 flex flex-col justify-between flex-shrink-0">
        <div>
          <h3 className="text-lg font-bold leading-snug mb-1 truncate" style={{ fontFamily: FONT_SERIF, color: COLORS.navy }}>
            {title}
          </h3>
          <div className="flex items-center gap-1 text-sm text-slate-500" style={{ color: `${COLORS.navy}66` }}>
            <MapPin size={13} />
            <span className="truncate">{location}</span>
          </div>
        </div>
        
        <div className="flex items-end justify-between">
          <div className="text-2xl font-bold" style={{ fontFamily: FONT_SERIF, color: COLORS.gold }}>
            {price}
          </div>
          {returns && (
            <div className="text-right">
              <div className="text-xs" style={{ color: `${COLORS.navy}55` }}>Expected</div>
              <div className="text-sm font-semibold" style={{ color: COLORS.navy }}>{returns}</div>
            </div>
          )}
        </div>

        <Link
          to={`/opportunities/${id}`}
          className="w-full text-sm font-semibold py-2.5 rounded-xl text-center block transition-all duration-200"
          style={{ border: `1.5px solid ${COLORS.gold}55`, color: COLORS.gold }}
          onMouseEnter={(e) => (e.currentTarget.style.background = `${COLORS.gold}0D`)}
          onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
        >
          View Details
        </Link>
      </div>
    </AnimatedSection>
  );
}

export default function OpportunitiesSection() {
  const [opportunities, setOpportunities] = useState<Opportunity[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchOpportunities()
      .then((all) => setOpportunities(all.slice(0, 4)))
      .catch(() => setOpportunities([]))
      .finally(() => setIsLoading(false));
  }, []);

  if (!isLoading && opportunities.length === 0) return null;

  return (
    <section id="opportunities" className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          overline="Curated Selection"
          title="Featured Investment Opportunities"
          subtitle="Handpicked assets meeting our stringent investment-grade criteria — vetted across return potential, liquidity, and legal integrity."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {isLoading
            ? Array.from({ length: 4 }).map((_, idx) => (
                <OpportunityCardSkeleton key={idx} />
              ))
            : opportunities.map((opportunity, index) => (
                <FeaturedCard key={opportunity.id} opportunity={opportunity} index={index} />
              ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/opportunities"
            className="inline-flex items-center gap-2 font-semibold px-8 py-3.5 rounded-full text-white text-sm transition-all hover:-translate-y-px"
            style={{ background: COLORS.navy }}
            onMouseEnter={(e) => (e.currentTarget.style.background = COLORS.navyLight)}
            onMouseLeave={(e) => (e.currentTarget.style.background = COLORS.navy)}
          >
            Explore All Opportunities
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}