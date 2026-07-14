import { ArrowRight } from 'lucide-react';
import { COLORS, FONT_SERIF } from '../utils/constants';
import { REASONS } from '../data/reasons';
import AnimatedSection from '../components/ui/AnimatedSection';
import Button from '../components/ui/Button';
import type { Reason } from '../types';

/** Individual feature card with icon, title, and description */
function ReasonCard({ reason, index }: { reason: Reason; index: number }) {
  const { icon: Icon, title, desc } = reason;

  return (
    <AnimatedSection
      delay={index * 0.07}
      className="rounded-2xl p-5 border transition-all duration-200 cursor-default"
      style={{ background: 'white', borderColor: COLORS.border }}
    >
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
        style={{ background: `${COLORS.gold}18` }}
      >
        <Icon size={20} style={{ color: COLORS.gold }} />
      </div>
      <h3
        className="text-sm font-bold leading-snug mb-1.5"
        style={{ fontFamily: FONT_SERIF, color: COLORS.navy }}
      >
        {title}
      </h3>
      <p className="text-xs leading-relaxed" style={{ color: `${COLORS.navy}77` }}>
        {desc}
      </p>
    </AnimatedSection>
  );
}

/**
 * Asymmetric two-column section: editorial text + gold CTA on the left,
 * a 2×3 grid of feature cards on the right.
 */
export default function WhyChooseSection() {
  return (
    <section id="services" className="py-20 lg:py-28" style={{ background: '#FAF6F0' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-16 items-start">
          {/* Editorial left column */}
          <div>
            <span
              className="text-xs font-semibold tracking-widest uppercase"
              style={{ color: COLORS.gold }}
            >
              Our Difference
            </span>
            <h2
              className="text-3xl lg:text-4xl font-bold mt-3 mb-6 leading-tight"
              style={{ fontFamily: FONT_SERIF, color: COLORS.navy }}
            >
              Why Discerning Investors Choose 5 Dimensions
            </h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: `${COLORS.navy}88` }}>
              We do not list properties; we engineer wealth. Every investment opportunity we present is filtered through a rigorous 47-point legal and financial audit, giving you total security and peace of mind.
            </p>
            <Button
              variant="gold"
              href="#consultation"
              icon={<ArrowRight size={15} />}
            >
              Start Your Journey
            </Button>
          </div>

          {/* Feature cards grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {REASONS.map((reason, index) => (
              <ReasonCard key={reason.title} reason={reason} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
