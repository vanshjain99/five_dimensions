import { Link, useRouteError } from 'react-router';
import { COLORS, FONT_SERIF } from '../utils/constants';
import { Home, RefreshCw } from 'lucide-react';
import SEO from '../components/SEO';

/** 500 / General Error page — used as a fallback for application runtime crashes */
export default function ServerErrorPage() {
  const error = useRouteError() as any;
  return (
    <>
      <SEO
        title="System Error"
        description="Something went wrong on our end. Back to Five Dimensions Luxury Real Estate Advisory."
      />
      <div
        className="min-h-screen flex items-center justify-center px-4"
        style={{ background: '#FAF6F0' }}
      >
        <div className="text-center max-w-md">
          <div
            className="text-8xl font-bold mb-4"
            style={{ fontFamily: FONT_SERIF, color: `${COLORS.navy}18` }}
          >
            500
          </div>
          <h1
            className="text-3xl font-bold mb-3"
            style={{ fontFamily: FONT_SERIF, color: COLORS.navy }}
          >
            System Error
          </h1>
          <p className="text-sm leading-relaxed mb-8" style={{ color: `${COLORS.navy}77` }}>
            Something went wrong on our end. We are already looking into it. Please try refreshing or return to safety.
          </p>
          {error?.message && (
            <pre className="p-3 bg-red-50/50 text-red-700 text-xs rounded-xl mb-6 text-left overflow-auto max-h-32 border border-red-100">
              {error.message}
            </pre>
          )}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => window.location.reload()}
              className="inline-flex items-center justify-center gap-2 text-white font-semibold px-7 py-3.5 rounded-full text-sm transition-all hover:-translate-y-px cursor-pointer"
              style={{
                background: `linear-gradient(135deg, ${COLORS.gold}, ${COLORS.goldDark})`,
                boxShadow: `0 6px 20px ${COLORS.gold}44`,
              }}
            >
              <RefreshCw size={15} />
              Refresh Page
            </button>
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 font-semibold px-7 py-3.5 rounded-full text-sm border-2 transition-all hover:-translate-y-px"
              style={{ borderColor: COLORS.navy, color: COLORS.navy }}
            >
              <Home size={15} />
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
