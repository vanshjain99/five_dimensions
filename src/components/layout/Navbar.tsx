import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router';
import { COLORS, FONT_SERIF } from '../../utils/constants';
import { NAV_LINKS } from '../../data/navigation';

/**
 * Sticky top navigation bar.
 *
 * Behaviour:
 * - Transparent on the hero; transitions to frosted-glass white once the user
 *   scrolls past 60px (tracked via a scroll event listener).
 * - On inner routes (no hero below) the bar starts in solid white.
 * - Desktop: horizontal link list + gold CTA pill.
 * - Mobile: hamburger icon that toggles a full-width dropdown drawer.
 */
export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();

  const isInnerPage = pathname !== '/';
  const showSolidBar = isScrolled || isInnerPage;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={
        showSolidBar
          ? { background: 'rgba(255,255,255,0.96)', backdropFilter: 'blur(16px)', boxShadow: '0 1px 12px rgba(0,0,0,0.06)' }
          : { background: 'transparent' }
      }
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main Navigation">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="flex items-center gap-4" aria-label="Five Dimensions Home">
            <div
              className="w-12 h-12 lg:w-12 lg:h-12 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ background: `linear-gradient(135deg, ${COLORS.gold}, ${COLORS.goldDark})` }}
            >
              <span className="text-white font-bold text-lg tracking-tight">5D</span>
            </div>
            <span
              className="font-bold text-xl lg:text-3xl tracking-wide transition-colors duration-200"
              style={{ fontFamily: FONT_SERIF, color: COLORS.navy }}
            >
              Five Dimensions
            </span>
          </Link>
 
          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map(({ label, href }) => {
              const isActive = pathname === href || (href.startsWith('/#') && pathname === '/');
              return (
                <Link
                  key={label}
                  to={href}
                  aria-current={isActive ? 'page' : undefined}
                  className="text-sm font-medium tracking-wide transition-colors duration-200 hover:text-[#C9A96E]"
                  style={{
                    color: isActive
                      ? COLORS.gold
                      : showSolidBar
                      ? COLORS.navy
                      : 'rgba(255,255,255,0.88)',
                  }}
                >
                  {label}
                </Link>
              );
            })}
            <Link
              to="/#consultation"
              className="text-sm font-semibold px-5 py-2.5 rounded-full text-white transition-all duration-200 hover:-translate-y-px hover:shadow-lg"
              style={{ background: `linear-gradient(135deg, ${COLORS.gold}, ${COLORS.goldDark})` }}
            >
              Book Consultation
            </Link>
          </div>
 
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg cursor-pointer"
            style={{ color: showSolidBar ? COLORS.navy : 'white' }}
            aria-label={isMobileMenuOpen ? 'Close main menu' : 'Open main menu'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>
 
      {isMobileMenuOpen && (
        <div
          className="lg:hidden border-t"
          style={{
            background: 'rgba(255,255,255,0.98)',
            backdropFilter: 'blur(20px)',
            borderColor: 'rgba(0,0,0,0.05)',
          }}
        >
          <div className="px-5 py-4 flex flex-col gap-1">
            {NAV_LINKS.map(({ label, href }) => {
              const isActive = pathname === href || (href.startsWith('/#') && pathname === '/');
              return (
                <Link
                  key={label}
                  to={href}
                  onClick={closeMobileMenu}
                  aria-current={isActive ? 'page' : undefined}
                  className="text-sm font-medium py-3 border-b last:border-0"
                  style={{
                    color: isActive ? COLORS.gold : COLORS.navy,
                    borderColor: 'rgba(0,0,0,0.05)',
                  }}
                >
                  {label}
                </Link>
              );
            })}
            <Link
              to="/#consultation"
              onClick={closeMobileMenu}
              className="mt-3 text-center text-white font-semibold text-sm py-3.5 rounded-full"
              style={{ background: `linear-gradient(135deg, ${COLORS.gold}, ${COLORS.goldDark})` }}
            >
              Book Free Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
