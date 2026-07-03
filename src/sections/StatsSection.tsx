import { COLORS, FONT_SERIF } from '../utils/constants';
import { STATS } from '../data/stats';
import AnimatedSection from '../components/ui/AnimatedSection';

/**
 * Full-width stats bar on a dark navy background.
 * Renders four key performance metrics with animated fade-in.
 */
export default function StatsSection() {
  return (
    <section style={{ background: COLORS.navy }} className="py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {STATS.map(({ value, label }, index) => (
            <AnimatedSection key={label} delay={index * 0.09} className="text-center">
              <div
                className="text-3xl lg:text-4xl font-bold mb-1"
                style={{ fontFamily: FONT_SERIF, color: COLORS.gold }}
              >
                {value}
              </div>
              <div className="text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>
                {label}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
