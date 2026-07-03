import { Star } from 'lucide-react';
import { COLORS, FONT_SERIF } from '../utils/constants';
import { TESTIMONIALS } from '../data/testimonials';
import SectionHeader from '../components/ui/SectionHeader';
import AnimatedSection from '../components/ui/AnimatedSection';
import type { Testimonial } from '../types';

/** A single client testimonial card — glassmorphic style on dark navy */
function TestimonialCard({ testimonial, index }: { testimonial: Testimonial; index: number }) {
  const { name, role, text, rating, initials } = testimonial;

  return (
    <AnimatedSection
      delay={index * 0.12}
      className="rounded-2xl p-6 border transition-colors"
      style={{
        background: 'rgba(255,255,255,0.05)',
        borderColor: 'rgba(255,255,255,0.09)',
        backdropFilter: 'blur(12px)',
      }}
    >
      {/* Star rating */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} size={13} style={{ color: COLORS.gold, fill: COLORS.gold }} />
        ))}
      </div>

      {/* Quote */}
      <p
        className="text-sm leading-relaxed mb-6 italic font-light"
        style={{ color: 'rgba(255,255,255,0.8)' }}
      >
        "{text}"
      </p>

      {/* Client identity */}
      <div className="flex items-center gap-3">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
          style={{
            background: `linear-gradient(135deg, ${COLORS.gold}, ${COLORS.goldDark})`,
          }}
        >
          <span className="text-white text-xs font-bold">{initials}</span>
        </div>
        <div>
          <div className="text-white font-semibold text-sm">{name}</div>
          <div className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>
            {role}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

/**
 * Client testimonials section on a deep navy background.
 * Three cards displayed in a responsive grid.
 */
export default function TestimonialsSection() {
  return (
    <section style={{ background: COLORS.navy }} className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          overline="Client Stories"
          title="What Our Clients Say"
          subtitle="Our greatest measure of success is the trust our clients place in us, year after year."
          light
        />
        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testimonial, index) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
