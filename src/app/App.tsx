/**
 * App.tsx — root composition component.
 *
 * Responsibilities:
 * - Renders the Navbar and Footer layout shells.
 * - Composes all page sections in order.
 * - Contains zero business logic, state, or styling — those live in their
 *   respective section and component files.
 *
 * Section order:
 *   Hero → Stats → Leadership → Opportunities → Why Choose →
 *   Process → Testimonials → Insights → FAQ → CTA
 */

import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

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

import { SpeedInsights } from "@vercel/speed-insights/react"


export default function App() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden" style={{ fontFamily: "'Inter', sans-serif" }}>
      <Navbar />

      <main>
        <HeroSection />
        <StatsSection />
        <LeadershipSection />
        <OpportunitiesSection />
        <WhyChooseSection />
        <ProcessSection />
        <TestimonialsSection />
        <InsightsSection />
        <FaqSection />
        <CtaSection />
      </main>

      <Footer />
      <SpeedInsights/>
    </div>
  );
}
