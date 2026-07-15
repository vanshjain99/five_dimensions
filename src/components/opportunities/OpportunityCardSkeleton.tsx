import { COLORS } from '../../utils/constants';

interface OpportunityCardSkeletonProps {
  /** If true, matches the catalog page layout (which is taller and contains descriptions) */
  isCatalog?: boolean;
}

/**
 * Loading skeleton component mimicking OpportunityCard.
 * Keeps structural height identical to eliminate Cumulative Layout Shift (CLS).
 */
export default function OpportunityCardSkeleton({
  isCatalog = false,
}: OpportunityCardSkeletonProps) {
  const imageHeight = isCatalog ? 'h-48' : 'h-44';

  return (
    <div
      className="animate-pulse rounded-2xl overflow-hidden border flex flex-col w-full"
      style={{
        background: 'white',
        borderColor: COLORS.border,
        boxShadow: '0 2px 12px rgba(26,39,68,0.06)',
      }}
    >
      {/* Property image skeleton placeholder */}
      <div className={`w-full ${imageHeight}`} style={{ background: '#e2e8f0' }} />

      {/* Card body skeleton placeholder */}
      <div className="p-4 flex flex-col flex-1">
        {/* Title skeleton */}
        <div className="h-5 bg-slate-200 rounded-md w-3/4 mb-2" />
        
        {/* Location skeleton */}
        <div className="h-3 bg-slate-200 rounded-md w-1/2 mb-4" />

        {isCatalog && (
          /* Description skeleton (only rendered for catalog cards) */
          <div className="space-y-2 mb-4 flex-1">
            <div className="h-3 bg-slate-150 rounded-md w-full" style={{ background: '#f1f5f9' }} />
            <div className="h-3 bg-slate-150 rounded-md w-5/6" style={{ background: '#f1f5f9' }} />
          </div>
        )}

        {/* Price + ROI row skeleton */}
        <div
          className="flex items-end justify-between py-3 border-t border-b mb-3 mt-auto"
          style={{ borderColor: 'rgba(26,39,68,0.07)' }}
        >
          <div className="space-y-1.5">
            <div className="h-2.5 bg-slate-200 rounded-md w-12" />
            <div className="h-5 bg-slate-300 rounded-md w-20" />
          </div>
          <div className="space-y-1.5 flex flex-col items-end">
            <div className="h-2.5 bg-slate-200 rounded-md w-16" />
            <div className="h-4.5 bg-slate-300 rounded-md w-16" />
          </div>
        </div>

        {/* View Details CTA skeleton */}
        <div className="h-9 bg-slate-200 rounded-xl w-full" />
      </div>
    </div>
  );
}
