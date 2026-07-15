import { COLORS } from '../utils/constants';
import { BUILDER_PARTNERS } from '../data/builders';
import AnimatedSection from '../components/ui/AnimatedSection';

/**
 * Full-width developer logo strip on a dark navy background.
 * Mirrors the compact layout of StatsSection — placed directly below Leadership.
 */
export default function BuilderPartnersSection() {
  return (
    <section style={{ background: COLORS.navy }} className="py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-8 lg:mb-10">
          <p
            className="text-xs font-semibold tracking-widest uppercase"
            style={{ color: 'rgba(255,255,255,0.45)' }}
          >
            Trusted Developer Partners
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-10 lg:gap-y-8 items-center">
          {BUILDER_PARTNERS.map(({ name, Logo }, index) => (
            <AnimatedSection
              key={name}
              delay={index * 0.07}
              className="flex items-center justify-center px-2"
            >
              <div
                role="img"
                className="w-full max-w-[9.5rem] h-10 flex items-center justify-center transition-opacity duration-200 hover:opacity-100 opacity-70"
                style={{ color: 'rgba(255,255,255,0.92)' }}
                title={name}
                aria-label={name}
              >
                <Logo className="w-full h-full" />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
