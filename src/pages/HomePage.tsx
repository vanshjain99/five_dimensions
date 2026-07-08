import HeroSection from '../sections/HeroSection';
import StatsSection from '../sections/StatsSection';
import LeadershipSection from '../sections/LeadershipSection';
import OpportunitiesSection from '../sections/OpportunitiesSection';
import WhyChooseSection from '../sections/WhyChooseSection';
import ProcessSection from '../sections/ProcessSection';
import TestimonialsSection from '../sections/TestimonialsSection';
import InsightsSection from '../sections/InsightsSection';
import FaqSection from '../sections/FaqSection';
import CtaSection from '../sections/CtaSection';
import BuilderPartnersSection from '../sections/BuilderPartnersSection';

/** Homepage — composes all marketing sections in sequence. Zero logic here. */
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <LeadershipSection />
      <BuilderPartnersSection />
      <OpportunitiesSection />
      <WhyChooseSection />
      <ProcessSection />
      <TestimonialsSection />
      <InsightsSection />
      <FaqSection />
      <CtaSection />
    </>
  );
}
