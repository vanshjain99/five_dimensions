import { Shield, Award, Users } from 'lucide-react';
import { COLORS, FONT_SERIF, HERO_IMAGE_URL } from '../utils/constants';
import ConsultationForm from '../components/forms/ConsultationForm';
import OptimizedImage from '../components/ui/OptimizedImage';

const TRUST_BADGES = [
  { icon: Shield, text: 'RERA Compliant' },
  { icon: Award, text: '10+ Years' },
  { icon: Users, text: '500+ Clients' },
];

const TRUSTED_BRANDS = ['Experion', 'Godrej', 'L&T', 'Gaurs', 'ATS', 'Max', 'ACE'];

/**
 * Full-viewport hero section.
 *
 * Layout:
 * - Background: Unsplash city skyline with a warm ivory gradient overlay.
 * - Left col (desktop) / top (mobile): value proposition — headline, badges, brand logos.
 * - Right col (desktop) / bottom (mobile): glassmorphic consultation form card.
 */
export default function HeroSection() {
  return (
    <section id="consultation" className="relative min-h-screen flex items-center">
      {/* ── Background image with warm overlay ── */}
      <div className="absolute inset-0" style={{ background: COLORS.navy }}>
        <OptimizedImage
          src={HERO_IMAGE_URL}
          alt="Aerial view of luxury city skyline at night"
          className="w-full h-full object-cover hero-bg-image"
          fetchPriority="high"
          loading="eager"
          width={1200}
          height={675}
        />
        {/* Ivory-to-navy horizontal gradient — heavier on left for text legibility */}
        <div className="absolute inset-0 hero-overlay-gradient" />
        {/* Fade to ivory at the section bottom for seamless transition */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, transparent 50%, rgba(250,248,245,0.85) 100%)',
          }}
        />
      </div>

      {/* ── Content grid ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 pb-16 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Value proposition */}
          <div
            style={{
              animation: 'hero-fade-up 0.7s ease-out both',
            }}
          >
            {/* Category overline badge */}
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-7 border"
              style={{
                background: `${COLORS.gold}1A`,
                borderColor: `${COLORS.gold}44`,
              }}
            >
              <div className="w-1.5 h-1.5 rounded-full" style={{ background: COLORS.gold }} />
              <span
                className="text-xs font-semibold tracking-widest uppercase"
                style={{ color: COLORS.gold }}
              >
                Premium Real Estate Advisory
              </span>
            </div>

            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.08] mb-6 tracking-tight"
              style={{ fontFamily: FONT_SERIF, color: COLORS.navy }}
            >
              Secure Your Wealth in NCR's Foremost{' '}
              <span className="italic" style={{ color: COLORS.gold }}>
                Investment-Grade
              </span>{' '}
              Real Estate
            </h1>

            <p className="text-base lg:text-lg leading-relaxed mb-8 max-w-md" style={{ color: COLORS.navy }}>
              We source, vet, and manage RERA-compliant, high-yield commercial and residential assets. Protect your capital with our rigorous 47-point due diligence audit.
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-5 mb-8">
              {TRUST_BADGES.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2">
                  <Icon size={15} style={{ color: COLORS.gold }} />
                  <span className="text-sm font-semibold" style={{ color: `${COLORS.navy}D9` }}>
                    {text}
                  </span>
                </div>
              ))}
            </div>

            {/* Trusted-by brand strip — desktop only */}
            <div className="hidden lg:flex items-center gap-3 mt-2">
              <span
                className="text-xs font-medium tracking-widest uppercase"
                style={{ color: `${COLORS.navy}55` }}
              >
                Trusted by leaders from
              </span>
              <div className="flex gap-4" style={{ color: `${COLORS.navy}44` }}>
                {TRUSTED_BRANDS.map((brand, i) => (
                  <span key={brand} className="text-sm font-semibold">
                    {brand}
                    {i < TRUSTED_BRANDS.length - 1 && (
                      <span className="ml-4 opacity-30">·</span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Consultation form card */}
          <div
            style={{
              animation: 'hero-fade-up 0.7s ease-out 0.15s both',
            }}
          >
            <div
              className="rounded-2xl overflow-hidden border"
              style={{
                background: 'rgba(255,255,255,0.97)',
                borderColor: 'rgba(255,255,255,0.9)',
                boxShadow: `0 32px 80px ${COLORS.navy}22, 0 8px 24px ${COLORS.navy}14`,
              }}
            >
              {/* Card header */}
              <div
                className="px-6 py-5"
                style={{
                  background: `linear-gradient(135deg, ${COLORS.navy} 0%, ${COLORS.navyLight} 100%)`,
                }}
              >
                <h2
                  className="text-xl font-bold text-white"
                  style={{ fontFamily: FONT_SERIF }}
                >
                  Request a Free Strategy Session
                </h2>
                <p className="text-white/65 text-sm mt-1">
                  Confidential advice from a senior real estate architect. No obligation.
                </p>
              </div>

              <ConsultationForm />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-bg-image {
          opacity: 0.38;
        }
        .hero-overlay-gradient {
          background: linear-gradient(to bottom, rgba(250,248,245,0.98) 0%, rgba(250,248,245,0.9) 60%, rgba(250,248,245,0.5) 100%);
        }
        @media (min-width: 1024px) {
          .hero-bg-image {
            opacity: 0.55;
          }
          .hero-overlay-gradient {
            background: linear-gradient(to right, rgba(250,248,245,0.96) 0%, rgba(250,248,245,0.78) 40%, rgba(250,248,245,0.38) 70%, rgba(26,39,68,0.55) 100%);
          }
        }
        @keyframes hero-fade-up {
          from { opacity: 0; transform: translateY(28px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}