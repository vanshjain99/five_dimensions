import { ArrowRight, Phone } from 'lucide-react';
import { COLORS, FONT_SERIF } from '../utils/constants';
import AnimatedSection from '../components/ui/AnimatedSection';
import Button from '../components/ui/Button';

/**
 * Full-width final CTA banner on a navy-to-navyLight gradient.
 * Two action buttons: book consultation (gold) and phone call (outline-white).
 * Decorative blurred gold orbs create depth without distraction.
 */
export default function CtaSection() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div
            className="rounded-3xl p-10 lg:p-16 text-center relative overflow-hidden"
            style={{
              background: `linear-gradient(135deg, ${COLORS.navy} 0%, ${COLORS.navyLight} 100%)`,
            }}
          >
            {/* Decorative gold orbs — purely visual, pointer-events disabled */}
            <div
              className="absolute top-0 right-0 w-72 h-72 rounded-full pointer-events-none"
              style={{
                background: `${COLORS.gold}14`,
                transform: 'translate(40%, -40%)',
              }}
            />
            <div
              className="absolute bottom-0 left-0 w-52 h-52 rounded-full pointer-events-none"
              style={{
                background: `${COLORS.gold}0E`,
                transform: 'translate(-40%, 40%)',
              }}
            />

            {/* Content */}
            <div className="relative z-10">
              <span
                className="text-xs font-semibold tracking-widest uppercase"
                style={{ color: COLORS.gold }}
              >
                Take the First Step
              </span>
              <h2
                className="text-3xl lg:text-5xl font-bold text-white mt-4 mb-5 leading-tight"
                style={{ fontFamily: FONT_SERIF }}
              >
                Ready to Build a Legally-Vetted, High-Yield Portfolio?
              </h2>
              <p
                className="text-base lg:text-lg leading-relaxed mb-10 max-w-2xl mx-auto"
                style={{ color: 'rgba(255,255,255,0.6)' }}
              >
                Schedule a confidential 30-minute wealth architecture call. Get direct access to off-market institutional opportunities and RERA-compliant assets.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="gold"
                  size="lg"
                  href="#consultation"
                  icon={<ArrowRight size={17} />}
                >
                  Book Free Consultation
                </Button>
                <Button
                  variant="outline-white"
                  size="lg"
                  href="tel:+919711193630"
                  icon={<Phone size={15} />}
                >
                  +91 9711193630
                </Button>
                <Button
                  variant="outline-white"
                  size="lg"
                  href="tel:+7042756678"
                  icon={<Phone size={15} />}
                >
                  +91 7042756678
                </Button>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
