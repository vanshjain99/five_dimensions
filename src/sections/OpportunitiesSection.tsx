import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
import { COLORS } from '../utils/constants';
import { fetchOpportunities } from '../lib/opportunitiesApi';
import SectionHeader from '../components/ui/SectionHeader';
import OpportunityCard from '../components/opportunities/OpportunityCard';
import OpportunityCardSkeleton from '../components/opportunities/OpportunityCardSkeleton';
import type { Opportunity } from '../types';

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
                <OpportunityCard key={opportunity.id} opportunity={opportunity} animationDelay={index * 0.09} />
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