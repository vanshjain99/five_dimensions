import { COLORS, FONT_SERIF } from '../utils/constants';
import { LEADERS } from '../data/leadership';
import SectionHeader from '../components/ui/SectionHeader';
import AnimatedSection from '../components/ui/AnimatedSection';
import type { Leader } from '../types';

/** Single leader card with circular profile image, name, designation, and bio */
function LeaderCard({ leader, index }: { leader: Leader; index: number }) {
  return (
    <AnimatedSection delay={index * 0.15} className="flex flex-col items-center text-center px-4">
      {/* Circular profile image with gold ring */}
      <div
        className="relative mb-6 rounded-full flex-shrink-0"
        style={{
          width: 180,
          height: 180,
          padding: 4,
          background: `linear-gradient(135deg, ${COLORS.gold}, ${COLORS.goldDark})`,
          boxShadow: `0 8px 32px ${COLORS.gold}33`,
        }}
      >
        <img
          src={leader.image}
          alt={leader.alt}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover rounded-full"
          style={{ background: '#EDE8DF' }}
        />
      </div>

      {/* Name and designation */}
      <h3
        className="text-xl font-bold mb-1"
        style={{ fontFamily: FONT_SERIF, color: COLORS.navy }}
      >
        {leader.name}
      </h3>
      <p
        className="text-xs font-semibold tracking-widest uppercase mb-4"
        style={{ color: COLORS.gold }}
      >
        {leader.designation}
      </p>

      {/* Short bio */}
      <p className="text-sm leading-relaxed max-w-sm" style={{ color: `${COLORS.navy}77` }}>
        {leader.bio}
      </p>
    </AnimatedSection>
  );
}

/**
 * Leadership section showcasing the Founder and CEO.
 * Renders circular profile images with gold accent rings, names, designations,
 * and short bios. Responsive: stacks on mobile, side-by-side on desktop.
 */
export default function LeadershipSection() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          overline="Our Founders"
          title="The Minds Behind 5 Dimensions"
          subtitle="Decades of combined experience in real estate finance, institutional investment, and wealth strategy — at the service of every client."
        />

        {/* Decorative gold rule above cards */}
        <div
          className="w-16 h-0.5 mx-auto mb-14 -mt-6 rounded-full"
          style={{ background: `linear-gradient(to right, ${COLORS.gold}, ${COLORS.goldDark})` }}
        />

        <div className="grid sm:grid-cols-2 gap-12 lg:gap-20 max-w-3xl mx-auto">
          {LEADERS.map((leader, index) => (
            <LeaderCard key={leader.name} leader={leader} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}