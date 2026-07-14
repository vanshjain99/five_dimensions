import { useState, useMemo, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, Building2, Search, Loader2 } from 'lucide-react';
import { COLORS, FONT_SERIF } from '../utils/constants';
import { fetchOpportunities } from '../lib/opportunitiesApi';
import type { OpportunityFilters, Opportunity } from '../types';
import FilterBar from '../components/opportunities/FilterBar';
import OpportunityCard from '../components/opportunities/OpportunityCard';
import SEO from '../components/SEO';

const PAGE_SIZE = 9;

const DEFAULT_FILTERS: OpportunityFilters = {
  type: 'All Types',
  city: 'All Cities',
  budget: 'Any Budget',
  status: 'Any Status',
  sortBy: 'Newest',
};

/** Parse the budget filter string into a numeric [min, max] range in lakhs */
function parseBudgetRange(budget: string): [number, number] {
  switch (budget) {
    case 'Under ₹50L':         return [0, 50];
    case '₹50L – ₹1 Cr':      return [50, 100];
    case '₹1 Cr – ₹5 Cr':     return [100, 500];
    case '₹5 Cr – ₹10 Cr':    return [500, 1000];
    case '₹10 Cr+':            return [1000, Infinity];
    default:                   return [0, Infinity];
  }
}

/** Apply all active filters and sort criteria to the full catalogue */
function applyFilters(
  items: Opportunity[],
  search: string,
  filters: OpportunityFilters
): Opportunity[] {
  let result = [...items];

  if (search.trim()) {
    const q = search.toLowerCase();
    result = result.filter(
      (o) =>
        o.title.toLowerCase().includes(q) ||
        o.location.toLowerCase().includes(q) ||
        o.city.toLowerCase().includes(q) ||
        o.type.toLowerCase().includes(q)
    );
  }

  if (filters.type !== 'All Types') {
    result = result.filter((o) => o.type === filters.type);
  }
  if (filters.city !== 'All Cities') {
    result = result.filter((o) => o.city === filters.city);
  }
  if (filters.status !== 'Any Status') {
    result = result.filter((o) => o.status === filters.status);
  }

  if (filters.budget !== 'Any Budget') {
    const [min, max] = parseBudgetRange(filters.budget);
    result = result.filter((o) => o.priceValue >= min && o.priceValue <= max);
  }

  switch (filters.sortBy) {
    case 'Price: Low to High':
      result.sort((a, b) => a.priceValue - b.priceValue);
      break;
    case 'Price: High to Low':
      result.sort((a, b) => b.priceValue - a.priceValue);
      break;
    case 'ROI: High to Low':
      result.sort((a, b) => b.roiValue - a.roiValue);
      break;
    // 'Newest' keeps original catalogue order
  }

  return result;
}

/** Page hero with breadcrumb, title, subtitle, and headline metrics */
function OpportunitiesHero({
  totalCount,
}: {
  totalCount: number;
}) {
  return (
    <section
      className="pt-20 pb-10 lg:pt-28 lg:pb-12 relative overflow-hidden"
      style={{ background: `linear-gradient(135deg, ${COLORS.navy} 0%, ${COLORS.navyLight} 100%)` }}
    >
      {/* Decorative orbs */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none opacity-20"
        style={{
          background: `radial-gradient(circle, ${COLORS.gold} 0%, transparent 70%)`,
          transform: 'translate(30%, -30%)',
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-64 h-64 rounded-full pointer-events-none opacity-10"
        style={{
          background: `radial-gradient(circle, ${COLORS.gold} 0%, transparent 70%)`,
          transform: 'translate(-30%, 30%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breadcrumb */}
        <nav
          className="flex items-center gap-1.5 text-xs mb-6"
          aria-label="Breadcrumb"
          style={{ color: 'rgba(255,255,255,0.5)' }}
        >
          <Link
            to="/"
            className="hover:text-white transition-colors"
            style={{ color: 'rgba(255,255,255,0.5)' }}
          >
            Home
          </Link>
          <ChevronRight size={12} />
          <span className="text-white font-medium">Investment Opportunities</span>
        </nav>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <span
            className="inline-block text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ color: COLORS.gold }}
          >
            Curated Portfolio
          </span>
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight"
            style={{ fontFamily: FONT_SERIF }}
          >
            Investment Opportunities
          </h1>
          <p className="text-base lg:text-lg max-w-2xl mb-8 leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)' }}>
            Every asset on this page has cleared our 47-point due diligence process. Browse with
            confidence — or let an advisor curate a shortlist for your specific goals.
          </p>

          {/* Headline metrics row */}
          <div className="flex flex-wrap gap-8">
            {[
              { value: `${totalCount}`, label: 'Active Projects' },
              { value: '6', label: 'Cities' },
              { value: '4', label: 'Asset Classes' },
            ].map(({ value, label }) => (
              <div key={label}>
                <div
                  className="text-2xl font-bold"
                  style={{ fontFamily: FONT_SERIF, color: COLORS.gold }}
                >
                  {value}
                </div>
                <div className="text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>
                  {label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/** Empty state shown when no results match active filters */
function EmptyState({ onClear }: { onClear: () => void }) {
  return (
    <div className="py-24 text-center col-span-full">
      <div
        className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4"
        style={{ background: `${COLORS.gold}14` }}
      >
        <Search size={24} style={{ color: COLORS.gold }} />
      </div>
      <h3
        className="text-xl font-bold mb-2"
        style={{ fontFamily: FONT_SERIF, color: COLORS.navy }}
      >
        No projects match your filters
      </h3>
      <p className="text-sm mb-6" style={{ color: `${COLORS.navy}77` }}>
        Try broadening your search or adjusting the filters.
      </p>
      <button
        onClick={onClear}
        className="text-sm font-semibold px-6 py-2.5 rounded-full text-white transition-all hover:-translate-y-px"
        style={{ background: `linear-gradient(135deg, ${COLORS.gold}, ${COLORS.goldDark})` }}
      >
        Clear All Filters
      </button>
    </div>
  );
}

/**
 * Investment Opportunities listing page (/opportunities).
 *
 * Features:
 * - Hero section with breadcrumb, headline, and portfolio metrics
 * - Sticky filter + search bar (collapsible on mobile)
 * - Responsive card grid: 1 col → 2 col → 3 col
 * - Progressive disclosure via "Load More" (PAGE_SIZE items per batch)
 * - Animated card entrance; empty state with clear-filters CTA
 */
export default function OpportunitiesPage() {
  const [opportunities, setOpportunities] = useState<Opportunity[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState<string | null>(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const typeParam = searchParams.get('type');

  const [search, setSearch] = useState('');
  const [filters, setFilters] = useState<OpportunityFilters>(() => ({
    ...DEFAULT_FILTERS,
    type: typeParam && ['Commercial', 'Residential', 'Luxury', 'Plots'].includes(typeParam) ? typeParam : 'All Types',
  }));
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  useEffect(() => {
    fetchOpportunities()
      .then(setOpportunities)
      .catch(() => setLoadError('Unable to load opportunities right now.'))
      .finally(() => setIsLoading(false));
  }, []);

  // Update filter state if the URL search query parameter changes (e.g. from footer link click)
  useEffect(() => {
    const type = searchParams.get('type');
    if (type && ['Commercial', 'Residential', 'Luxury', 'Plots'].includes(type)) {
      setFilters((prev) => ({ ...prev, type }));
    } else if (!type) {
      setFilters((prev) => ({ ...prev, type: 'All Types' }));
    }
  }, [searchParams]);

  const filteredItems = useMemo(
    () => applyFilters(opportunities, search, filters),
    [opportunities, search, filters]
  );

  const visibleItems = filteredItems.slice(0, visibleCount);
  const hasMore = visibleCount < filteredItems.length;

  const handleFilterChange = (key: keyof OpportunityFilters, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
    setVisibleCount(PAGE_SIZE); // Reset pagination when filters change

    // Synchronize selected type to URL query parameters
    if (key === 'type') {
      if (value === 'All Types') {
        searchParams.delete('type');
      } else {
        searchParams.set('type', value);
      }
      setSearchParams(searchParams, { replace: true });
    }
  };

  const handleSearchChange = (value: string) => {
    setSearch(value);
    setVisibleCount(PAGE_SIZE);
  };

  const handleClearAll = () => {
    setSearch('');
    setFilters(DEFAULT_FILTERS);
    setVisibleCount(PAGE_SIZE);
    setSearchParams(new URLSearchParams(), { replace: true });
  };

  const opportunitiesSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    'name': 'Investment-Grade Real Estate Opportunities',
    'description': 'Browse pre-vetted commercial and residential real estate listings in Delhi NCR. Every property passes our rigorous 47-point legal and financial due diligence audit.',
    'url': 'https://fivedimensions.in/opportunities',
    'keywords': 'flats in Noida, plots in Noida, commercial property, apartment buying, investment in flats, land, buy property Noida, commercial property Noida, luxury flats Noida, luxury property Noida, commercial real estate Noida, residential property Noida, buy flat Noida, buy land Noida',
    'breadcrumb': {
      '@type': 'BreadcrumbList',
      'itemListElement': [
        {
          '@type': 'ListItem',
          'position': 1,
          'name': 'Home',
          'item': 'https://fivedimensions.in'
        },
        {
          '@type': 'ListItem',
          'position': 2,
          'name': 'Opportunities',
          'item': 'https://fivedimensions.in/opportunities'
        }
      ]
    }
  };

  return (
    <>
      <SEO
        title="Noida Property Listings & Investment Opportunities"
        description="Find prime flats in Noida, commercial property, and residential plots for investment. Browse pre-vetted apartment buying and land opportunities."
        canonicalUrl="https://fivedimensions.in/opportunities"
        jsonLd={opportunitiesSchema}
      />
      <OpportunitiesHero totalCount={opportunities.length} />

      <FilterBar
        search={search}
        filters={filters}
        resultCount={filteredItems.length}
        totalCount={opportunities.length}
        onSearchChange={handleSearchChange}
        onFilterChange={handleFilterChange}
        onClearAll={handleClearAll}
      />

      <section className="py-10 lg:py-14 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Card grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {isLoading ? (
              <div className="col-span-full py-20 flex justify-center">
                <Loader2 size={24} className="animate-spin" style={{ color: COLORS.gold }} />
              </div>
            ) : loadError ? (
              <p className="col-span-full text-center text-sm py-20" style={{ color: `${COLORS.navy}77` }}>
                {loadError}
              </p>
            ) : (
              <AnimatePresence mode="popLayout">
                {visibleItems.length > 0 ? (
                  visibleItems.map((opportunity, index) => (
                    <OpportunityCard
                      key={opportunity.id}
                      opportunity={opportunity}
                      animationDelay={Math.min(index % PAGE_SIZE, 5) * 0.07}
                    />
                  ))
                ) : (
                  <EmptyState onClear={handleClearAll} />
                )}
              </AnimatePresence>
            )}
          </div>

          {/* Load More button */}
          {hasMore && (
            <div className="text-center mt-10">
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onClick={() => setVisibleCount((n) => n + PAGE_SIZE)}
                className="text-sm font-semibold px-10 py-3.5 rounded-full border-2 transition-all duration-200 hover:-translate-y-px"
                style={{
                  borderColor: COLORS.navy,
                  color: COLORS.navy,
                  background: 'transparent',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = COLORS.navy;
                  e.currentTarget.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = COLORS.navy;
                }}
              >
                Load More Projects ({filteredItems.length - visibleCount} remaining)
              </motion.button>
            </div>
          )}

          {/* "All shown" indicator */}
          {!hasMore && filteredItems.length > 0 && (
            <p
              className="text-center text-xs mt-8"
              style={{ color: `${COLORS.navy}44` }}
            >
              All {filteredItems.length} projects displayed
            </p>
          )}
        </div>
      </section>

      {/* Bottom CTA — nudge to book consultation */}
      <section className="py-14 lg:py-20" style={{ background: '#FAF6F0' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5"
            style={{ background: `${COLORS.gold}18` }}
          >
            <Building2 size={24} style={{ color: COLORS.gold }} />
          </div>
          <h2
            className="text-2xl lg:text-3xl font-bold mb-4"
            style={{ fontFamily: FONT_SERIF, color: COLORS.navy }}
          >
            Not Sure Where to Start?
          </h2>
          <p className="text-sm lg:text-base leading-relaxed mb-7 max-w-lg mx-auto" style={{ color: `${COLORS.navy}77` }}>
            Book a free 30-minute consultation and our advisors will shortlist the three best
            opportunities for your goals, budget, and timeline.
          </p>
          <Link
            to="/#consultation"
            className="inline-flex items-center gap-2 text-white font-semibold px-8 py-3.5 rounded-full text-sm transition-all hover:-translate-y-px"
            style={{
              background: `linear-gradient(135deg, ${COLORS.gold}, ${COLORS.goldDark})`,
              boxShadow: `0 6px 24px ${COLORS.gold}44`,
            }}
          >
            Book Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
