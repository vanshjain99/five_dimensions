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
 *   Hero → Stats → Leadership → Builder Partners → Opportunities → Why Choose →
 *   Process → Testimonials → Insights → FAQ → CTA
 *
 * Performance note:
 * - Hero, Stats, Leadership, Opportunities, and WhyChoose are above/near the
 *   fold and loaded eagerly so first paint isn't delayed further.
 * - BuilderPartners, Process, Testimonials, Insights, FAQ, and CTA are
 *   below the fold on first load and are code-split with React.lazy so
 *   their JS doesn't block the initial bundle.
 */

import { lazy, Suspense } from 'react';

import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

import HeroSection from '../sections/HeroSection';
import StatsSection from '../sections/StatsSection';
import LeadershipSection from '../sections/LeadershipSection';
import OpportunitiesSection from '../sections/OpportunitiesSection';
import WhyChooseSection from '../sections/WhyChooseSection';

import { SpeedInsights } from "@vercel/speed-insights/react";

const BuilderPartnersSection = lazy(() => import('../sections/BuilderPartnersSection'));
const ProcessSection = lazy(() => import('../sections/ProcessSection'));
const TestimonialsSection = lazy(() => import('../sections/TestimonialsSection'));
const InsightsSection = lazy(() => import('../sections/InsightsSection'));
const FaqSection = lazy(() => import('../sections/FaqSection'));
const CtaSection = lazy(() => import('../sections/CtaSection'));

export default function App() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden" style={{ fontFamily: "'Inter', sans-serif" }}>
      <Navbar />

      <main>
        <HeroSection />
        <StatsSection />
        <LeadershipSection />

        <Suspense fallback={null}>
          <BuilderPartnersSection />
        </Suspense>

        <OpportunitiesSection />
        <WhyChooseSection />

        <Suspense fallback={null}>
          <ProcessSection />
        </Suspense>

        <Suspense fallback={null}>
          <TestimonialsSection />
        </Suspense>

        <Suspense fallback={null}>
          <InsightsSection />
        </Suspense>

        <Suspense fallback={null}>
          <FaqSection />
        </Suspense>

        <Suspense fallback={null}>
          <CtaSection />
        </Suspense>
      </main>

      <Footer />
      <SpeedInsights />
    </div>
  );
}