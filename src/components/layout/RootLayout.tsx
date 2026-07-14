import { useEffect, Suspense } from 'react';
import { Outlet, useLocation } from 'react-router';
import { Loader2 } from 'lucide-react';
import { COLORS } from '../../utils/constants';
import Navbar from './Navbar';
import Footer from './Footer';

/** Simple premium page loader spinner shown when routing lazy chunks */
function PageLoader() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center gap-3" role="status" aria-live="polite">
      <Loader2 size={36} className="animate-spin" style={{ color: COLORS.gold }} />
      <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: `${COLORS.navy}66` }}>
        Loading...
      </span>
    </div>
  );
}

/**
 * Persistent shell rendered for every route.
 * Scrolls to the top whenever the pathname changes so deep-linked pages
 * don't inherit the previous scroll position.
 */
export default function RootLayout() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        const timer = setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 80);
        return () => clearTimeout(timer);
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [location.pathname, location.hash]);

  return (
    <div
      className="min-h-screen bg-background overflow-x-hidden flex flex-col"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <Navbar />
      <main className="flex-grow">
        <Suspense fallback={<PageLoader />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
