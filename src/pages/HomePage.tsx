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
import SEO from '../components/SEO';
import ScrollToTopButton from '../components/layout/ScrollToTopButton';
import WhatsAppButton from '../components/layout/WhatsAppButton';

/** Homepage — composes all marketing sections in sequence with SEO metadata. */
export default function HomePage() {
  const homeSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://fivedimensions.in/#organization',
        'name': 'Five Dimensions',
        'url': 'https://fivedimensions.in',
        'logo': 'https://images.unsplash.com/photo-1523374228107-6e44bd2b524e?w=1200&h=675&fit=crop&auto=format&q=60',
        'founder': [
          {
            '@type': 'Person',
            'name': 'Sachin Jain',
            'jobTitle': 'Co-Founder & CEO'
          },
          {
            '@type': 'Person',
            'name': 'Praveen Kushwah',
            'jobTitle': 'Co-Founder & CEO'
          }
        ],
        'contactPoint': {
          '@type': 'ContactPoint',
          'telephone': '+91 9711193630',
          'contactType': 'customer service',
          'email': 'sachin.jaiparas@gmail.com',
          'areaServed': 'IN'
        }
      },
      {
        '@type': 'WebSite',
        '@id': 'https://fivedimensions.in/#website',
        'url': 'https://fivedimensions.in',
        'name': 'Five Dimensions',
        'description': 'Delhi NCR\'s premium investment-grade real estate advisory and bespoke wealth architecture.',
        'keywords': 'real estate, property investment, real estate Noida, Noida property, property in Noida, investment, Noida real estate, property advisory Noida, real estate agent Noida, best property Noida',
        'publisher': {
          '@id': 'https://fivedimensions.in/#organization'
        }
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://fivedimensions.in/#faq',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'What is the minimum investment to work with 5 Dimensions?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Our advisory is accessible from ₹50 lakhs for residential and plot investments. For commercial and luxury assets, the typical entry point is ₹1 crore. We tailor solutions across budget ranges and never turn away a serious investor.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Do you charge advisory fees or earn commissions?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'We operate transparently on a dual model. For certain mandates we charge a flat advisory retainer; in others, we earn a developer-paid sourcing fee at no cost to you. The exact structure is disclosed in writing before any engagement — there are no hidden charges.'
            }
          },
          {
            '@type': 'Question',
            'name': 'How do you ensure the legal integrity of properties you recommend?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Every asset clears a 47-point due diligence checklist: title verification, encumbrance search, RERA registration, NOC status, and financial structure review — all conducted by empanelled independent legal firms before we recommend any property.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Can NRIs invest in Indian real estate through 5 Dimensions?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Absolutely. Our dedicated NRI desk handles FEMA compliance, tax structuring, repatriation planning, and power of attorney arrangements — fully managed remotely so you never need to be present in India for routine steps.'
            }
          },
          {
            '@type': 'Question',
            'name': 'How long does the process from consultation to completed investment take?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'For most residential transactions: 4–8 weeks from first consultation to registered sale deed. Commercial deals may take 8–16 weeks depending on due diligence complexity. We set realistic timelines and keep you informed at every milestone.'
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <SEO
        title="Noida Property Investment & Advisory"
        description="Five Dimensions is Noida's premier real estate and property investment advisory. Secure pre-vetted land, commercial property, and luxury residential investments."
        canonicalUrl="https://fivedimensions.in"
        jsonLd={homeSchema}
      />
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
      <ScrollToTopButton />
      <WhatsAppButton />
    </>
  );
}
