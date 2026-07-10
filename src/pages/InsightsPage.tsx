import { useState, useMemo, useEffect, useRef } from 'react';
import { Link } from 'react-router';
import { ChevronRight, Search, Loader2 } from 'lucide-react';
import { COLORS, FONT_SERIF } from '../utils/constants';
import { INSIGHTS } from '../data/insights';
import InsightCard from '../components/insights/InsightCard';
import InsightsFilterBar, { type SortOption } from '../components/insights/InsightsFilterBar';


import { fetchInsights } from '../lib/insightsApi';
import type { Insight } from '../types';

function applyFilters(
  items: Insight[],
  search: string,
  category: string,
  sortBy: SortOption
) {
  let result = [...items];

  if (search.trim()) {
    const q = search.toLowerCase();
    result = result.filter(
      (i) =>
        i.title.toLowerCase().includes(q) ||
        i.excerpt.toLowerCase().includes(q) ||
        i.category.toLowerCase().includes(q)
    );
  }

  if (category !== 'All') {
    result = result.filter((i) => i.category === category);
  }

  switch (sortBy) {
    case 'Latest':
      result.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
      break;
    case 'Oldest':
      result.sort((a, b) => new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime());
      break;
    case 'Most Popular':
      result.sort((a, b) => (b.views ?? 0) - (a.views ?? 0));
      break;
  }

  return result;
}


/** Hero banner — mirrors the OpportunitiesPage hero for visual consistency */
function InsightsHero() {
  return (
    <section
      className="pt-20 pb-10 lg:pt-28 lg:pb-12 relative overflow-hidden"
      style={{ background: `linear-gradient(135deg, ${COLORS.navy} 0%, ${COLORS.navyLight} 100%)` }}
    >
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

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <nav
          className="flex items-center gap-1.5 text-xs mb-6"
          aria-label="Breadcrumb"
          style={{ color: 'rgba(255,255,255,0.5)' }}
        >
          <Link to="/" className="hover:text-white transition-colors" style={{ color: 'rgba(255,255,255,0.5)' }}>
            Home
          </Link>
          <ChevronRight size={12} />
          <span className="text-white font-medium">Insights</span>
        </nav>

        <span
          className="inline-block text-xs font-semibold tracking-widest uppercase mb-4"
          style={{ color: COLORS.gold }}
        >
          Intelligence
        </span>
        <h1
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight"
          style={{ fontFamily: FONT_SERIF }}
        >
          Market Insights
        </h1>
        <p className="text-base lg:text-lg max-w-2xl leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)' }}>
          Research, analysis, and on-the-ground perspective from our advisory desk — helping you
          read the market before you act on it.
        </p>
      </div>
    </section>
  );
}

function EmptyState({ onClear }: { onClear: () => void }) {
  return (
    <div className="py-24 text-center">
      <div
        className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4"
        style={{ background: `${COLORS.gold}14` }}
      >
        <Search size={24} style={{ color: COLORS.gold }} />
      </div>
      <h3 className="text-xl font-bold mb-2" style={{ fontFamily: FONT_SERIF, color: COLORS.navy }}>
        No articles match your search
      </h3>
      <p className="text-sm mb-6" style={{ color: `${COLORS.navy}77` }}>
        Try a different keyword or clear your filters.
      </p>
      <button
        onClick={onClear}
        className="text-sm font-semibold px-6 py-2.5 rounded-full text-white transition-all hover:-translate-y-px"
        style={{ background: `linear-gradient(135deg, ${COLORS.gold}, ${COLORS.goldDark})` }}
      >
        Clear Filters
      </button>
    </div>
  );
}

/**
 * Dedicated Insights listing page (/insights).
 * Vertical, searchable, filterable list of articles. Cards expand inline
 * (accordion-style, one open at a time) instead of navigating away.
 */
export default function InsightsPage() {
  const [insights, setInsights] = useState<Insight[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState<string | null>(null);

  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [sortBy, setSortBy] = useState<SortOption>('Latest');
  const [activeId, setActiveId] = useState<string | null>(null);

  const expandedRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetchInsights()
      .then(setInsights)
      .catch(() => setLoadError('Unable to load insights right now. Please try again shortly.'))
      .finally(() => setIsLoading(false));
  }, []);

  const filtered = useMemo(
    () => applyFilters(insights, search, category, sortBy),
    [insights, search, category, sortBy]
  );

  const handleToggle = (id: string) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  const handleClearAll = () => {
    setSearch('');
    setCategory('All');
  };

  // Close the expanded card when clicking anywhere outside of it
  useEffect(() => {
    if (!activeId) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (expandedRef.current && !expandedRef.current.contains(e.target as Node)) {
        setActiveId(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [activeId]);

  return (
    <>
      <InsightsHero />

      <InsightsFilterBar
        search={search}
        category={category}
        sortBy={sortBy}
        resultCount={filtered.length}
        onSearchChange={setSearch}
        onCategoryChange={setCategory}
        onSortChange={setSortBy}
      />

      <section className="py-10 lg:py-14 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {isLoading ? (
            <div className="py-24 flex flex-col items-center justify-center gap-3">
              <Loader2 size={24} className="animate-spin" style={{ color: COLORS.gold }} />
              <p className="text-sm" style={{ color: `${COLORS.navy}66` }}>
                Loading articles…
              </p>
            </div>
          ) : loadError ? (
            <div className="py-24 text-center">
              <p className="text-sm" style={{ color: `${COLORS.navy}77` }}>
                {loadError}
              </p>
            </div>
          ) : filtered.length > 0 ? (
            <div className="flex flex-col gap-5">
              {filtered.map((insight) => (
                <InsightCard
                  key={insight.id}
                  insight={insight}
                  isExpanded={activeId === insight.id}
                  onToggle={() => handleToggle(insight.id)}
                  onClose={() => setActiveId(null)}
                  expandedRef={activeId === insight.id ? expandedRef : undefined}
                />
              ))}
            </div>
          ) : (
            <EmptyState onClear={handleClearAll} />
          )}
        </div>
      </section>
    </>
  );
}