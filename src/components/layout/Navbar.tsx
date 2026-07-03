import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { COLORS, FONT_SERIF } from '../../utils/constants';
import { NAV_LINKS } from '../../data/navigation';

/**
 * Sticky top navigation bar.
 *
 * Behaviour:
 * - Transparent on the hero; transitions to frosted-glass white once the user
 *   scrolls past 60px (tracked via a scroll event listener).
 * - Desktop: horizontal link list + gold CTA pill.
 * - Mobile: hamburger icon that toggles a full-width dropdown drawer.
 */
export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={
        isScrolled
          ? { background: 'rgba(255,255,255,0.96)', backdropFilter: 'blur(16px)', boxShadow: '0 1px 12px rgba(0,0,0,0.06)' }
          : { background: 'transparent' }
      }
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Brand mark */}
          <div className="flex items-center gap-2.5">
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ background: `linear-gradient(135deg, ${COLORS.gold}, ${COLORS.goldDark})` }}
            >
              <span className="text-white font-bold text-xs tracking-tight">5D</span>
            </div>
            <span
              className="font-bold text-lg tracking-wide transition-colors duration-200"
              style={{ fontFamily: FONT_SERIF, color: isScrolled ? COLORS.navy : 'white' }}
            >
              5 Dimensions
            </span>
          </div>

          {/* Desktop navigation links */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="text-sm font-medium tracking-wide transition-colors duration-200 hover:text-[#C9A96E]"
                style={{ color: isScrolled ? COLORS.navy : 'rgba(255,255,255,0.88)' }}
              >
                {label}
              </a>
            ))}
            <a
              href="#consultation"
              className="text-sm font-semibold px-5 py-2.5 rounded-full text-white transition-all duration-200 hover:-translate-y-px hover:shadow-lg"
              style={{ background: `linear-gradient(135deg, ${COLORS.gold}, ${COLORS.goldDark})` }}
            >
              Book Consultation
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg"
            style={{ color: isScrolled ? COLORS.navy : 'white' }}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown drawer */}
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
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                onClick={closeMobileMenu}
                className="text-sm font-medium py-3 border-b last:border-0"
                style={{ color: COLORS.navy, borderColor: 'rgba(0,0,0,0.05)' }}
              >
                {label}
              </a>
            ))}
            <a
              href="#consultation"
              onClick={closeMobileMenu}
              className="mt-3 text-center text-white font-semibold text-sm py-3.5 rounded-full"
              style={{ background: `linear-gradient(135deg, ${COLORS.gold}, ${COLORS.goldDark})` }}
            >
              Book Free Consultation
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
