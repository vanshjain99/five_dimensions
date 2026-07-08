import { Link } from 'react-router';
import { COLORS, FONT_SERIF } from '../utils/constants';
import { Home, ArrowRight } from 'lucide-react';

/** 404 fallback page — shown for any unmatched route */
export default function NotFoundPage() {
  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
      style={{ background: '#FAF6F0' }}
    >
      <div className="text-center max-w-md">
        <div
          className="text-8xl font-bold mb-4"
          style={{ fontFamily: FONT_SERIF, color: `${COLORS.navy}18` }}
        >
          404
        </div>
        <h1
          className="text-3xl font-bold mb-3"
          style={{ fontFamily: FONT_SERIF, color: COLORS.navy }}
        >
          Page Not Found
        </h1>
        <p className="text-sm leading-relaxed mb-8" style={{ color: `${COLORS.navy}77` }}>
          The page you're looking for doesn't exist or has been moved. Let us guide you back to
          the right place.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 text-white font-semibold px-7 py-3.5 rounded-full text-sm transition-all hover:-translate-y-px"
            style={{
              background: `linear-gradient(135deg, ${COLORS.gold}, ${COLORS.goldDark})`,
              boxShadow: `0 6px 20px ${COLORS.gold}44`,
            }}
          >
            <Home size={15} />
            Back to Home
          </Link>
          <Link
            to="/opportunities"
            className="inline-flex items-center justify-center gap-2 font-semibold px-7 py-3.5 rounded-full text-sm border-2 transition-all hover:-translate-y-px"
            style={{ borderColor: COLORS.navy, color: COLORS.navy }}
          >
            View Opportunities
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </div>
  );
}
