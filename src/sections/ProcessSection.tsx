import { COLORS, FONT_SERIF } from '../utils/constants';
import { PROCESS_STEPS } from '../data/process';
import SectionHeader from '../components/ui/SectionHeader';
import AnimatedSection from '../components/ui/AnimatedSection';
import type { ProcessStep } from '../types';

/** A single numbered step in the investment process */
function ProcessStepCard({ step, index }: { step: ProcessStep; index: number }) {
  return (
    <AnimatedSection delay={index * 0.1} className="text-center relative">
      {/* Step number circle */}
      <div
        className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 border-2"
        style={{
          background: 'white',
          borderColor: `${COLORS.gold}44`,
          boxShadow: `0 4px 16px ${COLORS.gold}22`,
        }}
      >
        <span
          className="text-xl font-bold"
          style={{ fontFamily: FONT_SERIF, color: COLORS.gold }}
        >
          {step.step}
        </span>
      </div>
      <h3
        className="text-sm font-bold mb-2 leading-snug px-2"
        style={{ fontFamily: FONT_SERIF, color: COLORS.navy }}
      >
        {step.title}
      </h3>
      <p className="text-xs leading-relaxed px-1" style={{ color: `${COLORS.navy}77` }}>
        {step.desc}
      </p>
    </AnimatedSection>
  );
}

/**
 * Five-step investment process timeline.
 * On desktop, a horizontal gold hairline connects the step circles.
 * On mobile, steps collapse into a 2-column responsive grid.
 */
export default function ProcessSection() {
  return (
    <section id="process" className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          overline="How We Work"
          title="Our Investment Process"
          subtitle="A structured five-step methodology refined over 15 years and thousands of successful transactions."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 relative">
          {/* Horizontal connector line — desktop only */}
          <div
            className="hidden lg:block absolute top-[38px] left-[12%] right-[12%] h-px pointer-events-none"
            style={{
              background: `linear-gradient(to right, transparent, ${COLORS.gold}44, ${COLORS.gold}44, transparent)`,
            }}
          />
          {PROCESS_STEPS.map((step, index) => (
            <ProcessStepCard key={step.step} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
