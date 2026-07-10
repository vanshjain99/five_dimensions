import { Search, X } from 'lucide-react';
import { COLORS } from '../../utils/constants';
import { INSIGHT_CATEGORIES } from '../../data/insights';

export type SortOption = 'Latest' | 'Most Popular' | 'Oldest';

interface InsightsFilterBarProps {
  search: string;
  category: string;
  sortBy: SortOption;
  resultCount: number;
  onSearchChange: (value: string) => void;
  onCategoryChange: (value: string) => void;
  onSortChange: (value: SortOption) => void;
}

const SORT_OPTIONS: SortOption[] = ['Latest', 'Most Popular', 'Oldest'];

/** Sticky search + category pills + sort dropdown for the Insights page */
export default function InsightsFilterBar({
  search,
  category,
  sortBy,
  resultCount,
  onSearchChange,
  onCategoryChange,
  onSortChange,
}: InsightsFilterBarProps) {
  const categories = ['All', ...INSIGHT_CATEGORIES];

  return (
    <div
      className="sticky z-40 border-b"
      style={{
        top: 64,
        background: 'rgba(250,248,245,0.97)',
        backdropFilter: 'blur(16px)',
        borderColor: 'rgba(26,39,68,0.08)',
        boxShadow: '0 4px 16px rgba(26,39,68,0.05)',
      }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        {/* Search + sort row */}
        <div className="flex items-center gap-3 mb-3">
          <div
            className="flex items-center gap-2 flex-1 px-3.5 py-2.5 rounded-xl border transition-all"
            style={{ background: 'white', borderColor: 'rgba(26,39,68,0.12)' }}
          >
            <Search size={15} style={{ color: `${COLORS.navy}66`, flexShrink: 0 }} />
            <input
              type="text"
              placeholder="Search articles by title or topic…"
              value={search}
              onChange={(e) => onSearchChange(e.target.value)}
              className="flex-1 text-sm outline-none bg-transparent min-w-0"
              style={{ color: COLORS.navy }}
              aria-label="Search insights"
            />
            {search && (
              <button onClick={() => onSearchChange('')} aria-label="Clear search">
                <X size={13} style={{ color: `${COLORS.navy}66` }} />
              </button>
            )}
          </div>

          <select
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value as SortOption)}
            className="text-sm font-medium px-3 py-2.5 rounded-xl border outline-none cursor-pointer flex-shrink-0"
            style={{ borderColor: 'rgba(26,39,68,0.12)', background: 'white', color: COLORS.navy }}
            aria-label="Sort insights"
          >
            {SORT_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>

        {/* Category pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 -mb-1" style={{ scrollbarWidth: 'none' }}>
          {categories.map((cat) => {
            const isActive = cat === category;
            return (
              <button
                key={cat}
                onClick={() => onCategoryChange(cat)}
                className="flex-shrink-0 text-xs font-semibold px-3.5 py-1.5 rounded-full border transition-all whitespace-nowrap"
                style={{
                  borderColor: isActive ? COLORS.gold : 'rgba(26,39,68,0.12)',
                  background: isActive ? `${COLORS.gold}18` : 'white',
                  color: isActive ? COLORS.navy : `${COLORS.navy}77`,
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        <div className="mt-2.5 text-xs" style={{ color: `${COLORS.navy}66` }}>
          <span className="font-semibold" style={{ color: COLORS.navy }}>
            {resultCount}
          </span>{' '}
          article{resultCount !== 1 ? 's' : ''} found
        </div>
      </div>
    </div>
  );
}