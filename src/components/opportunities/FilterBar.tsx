import { useState } from 'react';
import { Search, SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { COLORS } from '../../utils/constants';
import type { OpportunityFilters } from '../../types';

interface FilterBarProps {
  search: string;
  filters: OpportunityFilters;
  resultCount: number;
  totalCount: number;
  onSearchChange: (value: string) => void;
  onFilterChange: (key: keyof OpportunityFilters, value: string) => void;
  onClearAll: () => void;
}

const FILTER_OPTIONS = {
  type: ['All Types', 'Commercial', 'Residential', 'Luxury', 'Plots'],
  city: ['All Cities', 'Mumbai', 'Navi Mumbai', 'Pune', 'Bengaluru', 'Hyderabad', 'Delhi NCR'],
  budget: [
    'Any Budget',
    'Under ₹50L',
    '₹50L – ₹1 Cr',
    '₹1 Cr – ₹5 Cr',
    '₹5 Cr – ₹10 Cr',
    '₹10 Cr+',
  ],
  status: ['Any Status', 'Ready Possession', 'Under Construction', 'New Launch'],
  sortBy: ['Newest', 'Price: Low to High', 'Price: High to Low', 'ROI: High to Low'],
};

interface SelectFilterProps {
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
}

/** A single styled select dropdown for the filter bar */
function SelectFilter({ label, value, options, onChange }: SelectFilterProps) {
  const isActive = value !== options[0]; // Non-default selection

  return (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="appearance-none text-sm font-medium pl-3 pr-7 py-2.5 rounded-xl border outline-none cursor-pointer transition-all duration-150"
        style={{
          borderColor: isActive ? COLORS.gold : 'rgba(26,39,68,0.12)',
          background: isActive ? `${COLORS.gold}0D` : 'white',
          color: isActive ? COLORS.navy : `${COLORS.navy}88`,
          minWidth: 130,
        }}
        aria-label={label}
      >
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      <ChevronDown
        size={13}
        className="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none"
        style={{ color: isActive ? COLORS.gold : `${COLORS.navy}66` }}
      />
    </div>
  );
}

/**
 * Sticky filter and search bar for the opportunities page.
 *
 * Desktop: a single horizontal row of controls.
 * Mobile: search input always visible; remaining filters hidden behind a
 * "Filters" toggle button that expands into a stacked grid.
 */
export default function FilterBar({
  search,
  filters,
  resultCount,
  totalCount,
  onSearchChange,
  onFilterChange,
  onClearAll,
}: FilterBarProps) {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  /** Count of non-default (active) filters */
  const activeFilterCount = [
    filters.type !== FILTER_OPTIONS.type[0],
    filters.city !== FILTER_OPTIONS.city[0],
    filters.budget !== FILTER_OPTIONS.budget[0],
    filters.status !== FILTER_OPTIONS.status[0],
    filters.sortBy !== FILTER_OPTIONS.sortBy[0],
  ].filter(Boolean).length;

  const hasActiveFilters = activeFilterCount > 0 || search.length > 0;

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        {/* Main row: search + desktop filters */}
        <div className="flex items-center gap-3">
          {/* Search input */}
          <div
            className="flex items-center gap-2 flex-1 max-w-xs px-3.5 py-2.5 rounded-xl border transition-all"
            style={{ background: 'white', borderColor: 'rgba(26,39,68,0.12)' }}
          >
            <Search size={15} style={{ color: `${COLORS.navy}66`, flexShrink: 0 }} />
            <input
              type="text"
              aria-label="Search projects or locations"
              placeholder="Search projects or locations…"
              value={search}
              onChange={(e) => onSearchChange(e.target.value)}
              className="flex-1 text-sm outline-none bg-transparent placeholder-shown:text-opacity-40 min-w-0"
              style={{ color: COLORS.navy }}
            />
            {search && (
              <button onClick={() => onSearchChange('')} aria-label="Clear search">
                <X size={13} style={{ color: `${COLORS.navy}66` }} />
              </button>
            )}
          </div>

          {/* Desktop filter selects */}
          <div className="hidden lg:flex items-center gap-2 flex-wrap">
            <SelectFilter
              label="Property type"
              value={filters.type}
              options={FILTER_OPTIONS.type}
              onChange={(v) => onFilterChange('type', v)}
            />
            <SelectFilter
              label="City"
              value={filters.city}
              options={FILTER_OPTIONS.city}
              onChange={(v) => onFilterChange('city', v)}
            />
            <SelectFilter
              label="Budget"
              value={filters.budget}
              options={FILTER_OPTIONS.budget}
              onChange={(v) => onFilterChange('budget', v)}
            />
            <SelectFilter
              label="Status"
              value={filters.status}
              options={FILTER_OPTIONS.status}
              onChange={(v) => onFilterChange('status', v)}
            />
            <SelectFilter
              label="Sort by"
              value={filters.sortBy}
              options={FILTER_OPTIONS.sortBy}
              onChange={(v) => onFilterChange('sortBy', v)}
            />
          </div>

          {/* Mobile: Filters toggle button */}
          <button
            className="lg:hidden flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl border text-sm font-medium transition-all"
            style={{
              borderColor: activeFilterCount > 0 ? COLORS.gold : 'rgba(26,39,68,0.12)',
              background: activeFilterCount > 0 ? `${COLORS.gold}0D` : 'white',
              color: activeFilterCount > 0 ? COLORS.navy : `${COLORS.navy}88`,
            }}
            onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
            aria-expanded={mobileFiltersOpen}
          >
            <SlidersHorizontal size={14} />
            Filters
            {activeFilterCount > 0 && (
              <span
                className="w-5 h-5 rounded-full flex items-center justify-center text-white text-xs font-bold"
                style={{ background: COLORS.gold }}
              >
                {activeFilterCount}
              </span>
            )}
          </button>

          {/* Clear all — rightmost, only visible when filters are active */}
          {hasActiveFilters && (
            <button
              onClick={onClearAll}
              className="hidden lg:flex items-center gap-1 text-xs font-medium transition-colors hover:opacity-80 ml-auto flex-shrink-0"
              style={{ color: COLORS.gold }}
            >
              <X size={12} />
              Clear all
            </button>
          )}

          {/* Result count — desktop right */}
          <div
            className="hidden lg:block text-xs ml-auto flex-shrink-0"
            style={{ color: `${COLORS.navy}66` }}
          >
            <span className="font-semibold" style={{ color: COLORS.navy }}>
              {resultCount}
            </span>{' '}
            of {totalCount} projects
          </div>
        </div>

        {/* Mobile expanded filters */}
        {mobileFiltersOpen && (
          <div className="lg:hidden mt-3 pt-3 border-t grid grid-cols-2 gap-2" style={{ borderColor: 'rgba(26,39,68,0.07)' }}>
            <SelectFilter
              label="Property type"
              value={filters.type}
              options={FILTER_OPTIONS.type}
              onChange={(v) => onFilterChange('type', v)}
            />
            <SelectFilter
              label="City"
              value={filters.city}
              options={FILTER_OPTIONS.city}
              onChange={(v) => onFilterChange('city', v)}
            />
            <SelectFilter
              label="Budget"
              value={filters.budget}
              options={FILTER_OPTIONS.budget}
              onChange={(v) => onFilterChange('budget', v)}
            />
            <SelectFilter
              label="Status"
              value={filters.status}
              options={FILTER_OPTIONS.status}
              onChange={(v) => onFilterChange('status', v)}
            />
            <SelectFilter
              label="Sort by"
              value={filters.sortBy}
              options={FILTER_OPTIONS.sortBy}
              onChange={(v) => onFilterChange('sortBy', v)}
            />
            {hasActiveFilters && (
              <button
                onClick={() => { onClearAll(); setMobileFiltersOpen(false); }}
                className="flex items-center justify-center gap-1 text-xs font-semibold py-2.5 rounded-xl border col-span-2"
                style={{ borderColor: COLORS.gold, color: COLORS.gold }}
              >
                <X size={12} />
                Clear all filters
              </button>
            )}
          </div>
        )}

        {/* Mobile result count */}
        <div className="lg:hidden mt-2 text-xs" style={{ color: `${COLORS.navy}66` }}>
          <span className="font-semibold" style={{ color: COLORS.navy }}>{resultCount}</span> of {totalCount} projects
        </div>
      </div>
    </div>
  );
}
