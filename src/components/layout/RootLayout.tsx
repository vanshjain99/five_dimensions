import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router';
import Navbar from './Navbar';
import Footer from './Footer';

/**
 * Persistent shell rendered for every route.
 * Scrolls to the top whenever the pathname changes so deep-linked pages
 * don't inherit the previous scroll position.
 */
export default function RootLayout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return (
    <div
      className="min-h-screen bg-background overflow-x-hidden"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
