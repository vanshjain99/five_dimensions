import { Link } from 'react-router';
import { ChevronRight } from 'lucide-react';
import { COLORS, FONT_SERIF } from '../utils/constants';
import SEO from '../components/SEO';
import AnimatedSection from '../components/ui/AnimatedSection';

export default function TermsConditionsPage() {
  const termsSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': 'https://fivedimensions.in/terms-conditions/#webpage',
        'url': 'https://fivedimensions.in/terms-conditions',
        'name': 'Terms & Conditions | Five Dimensions',
        'description': 'Terms and Conditions governing the use of Five Dimensions Real Estate Advisory.',
        'breadcrumb': {
          '@id': 'https://fivedimensions.in/terms-conditions/#breadcrumb'
        }
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://fivedimensions.in/terms-conditions/#breadcrumb',
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': 'Home',
            'item': 'https://fivedimensions.in'
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'name': 'Terms & Conditions',
            'item': 'https://fivedimensions.in/terms-conditions'
          }
        ]
      }
    ]
  };

  return (
    <>
      <SEO
        title="Terms & Conditions | Five Dimensions Real Estate"
        description="Review the terms and conditions governing the use of Five Dimensions services, website, and advisory. Learn about our investment disclaimers."
        canonicalUrl="https://fivedimensions.in/terms-conditions"
        jsonLd={termsSchema}
      />

      {/* Hero Banner */}
      <section
        className="pt-24 pb-14 lg:pt-32 lg:pb-20 relative overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${COLORS.navy} 0%, ${COLORS.navyLight} 100%)` }}
      >
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none opacity-20"
          style={{
            background: `radial-gradient(circle, ${COLORS.gold} 0%, transparent 70%)`,
            transform: 'translate(30%, -30%)',
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-64 h-64 rounded-full pointer-events-none opacity-10"
          style={{
            background: `radial-gradient(circle, ${COLORS.gold} 0%, transparent 70%)`,
            transform: 'translate(-30%, 30%)',
          }}
        />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <nav
            className="flex items-center justify-center gap-1.5 text-xs mb-6"
            aria-label="Breadcrumb"
            style={{ color: 'rgba(255,255,255,0.5)' }}
          >
            <Link to="/" className="hover:text-white transition-colors" style={{ color: 'rgba(255,255,255,0.5)' }}>
              Home
            </Link>
            <ChevronRight size={12} />
            <span className="text-white font-medium">Terms & Conditions</span>
          </nav>

          <span
            className="inline-block text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ color: COLORS.gold }}
          >
            Legal
          </span>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            style={{ fontFamily: FONT_SERIF }}
          >
            Terms & Conditions
          </h1>
          <p className="text-sm sm:text-base max-w-2xl mx-auto leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>
            Last Updated: July 15, 2026. Please review these terms carefully. By using our website and services, you agree to these terms.
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16 lg:py-24 bg-[#FAF6F0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="bg-white rounded-3xl p-8 lg:p-12 border border-black/[0.03] space-y-8" style={{ boxShadow: '0 4px 30px rgba(0,0,0,0.01)' }}>
              
              <div>
                <h2 className="text-xl font-bold mb-4" style={{ fontFamily: FONT_SERIF, color: COLORS.navy }}>
                  1. Acceptance of Terms
                </h2>
                <p className="text-sm leading-relaxed" style={{ color: `${COLORS.navy}88` }}>
                  By accessing and browsing the Five Dimensions website (https://fivedimensions.in) or utilizing our advisory services, you accept and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please discontinue using this website and our advisory platforms.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-4" style={{ fontFamily: FONT_SERIF, color: COLORS.navy }}>
                  2. Nature of Advisory Services
                </h2>
                <p className="text-sm leading-relaxed mb-3" style={{ color: `${COLORS.navy}88` }}>
                  Five Dimensions provides consulting and marketing advisory services for real estate properties. While we perform extensive due diligence on developers and layouts, please note:
                </p>
                <ul className="list-disc pl-5 text-sm space-y-2" style={{ color: `${COLORS.navy}77` }}>
                  <li>All listed prices, configurations, and projections are estimates and subject to market changes.</li>
                  <li>Real estate investments carry risk. Previous yields or market dynamics do not guarantee future returns.</li>
                  <li>We recommend all clients review legal documents with independent counsel before signing registration papers or booking forms.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-4" style={{ fontFamily: FONT_SERIF, color: COLORS.navy }}>
                  3. Use of Website and Content
                </h2>
                <p className="text-sm leading-relaxed" style={{ color: `${COLORS.navy}88` }}>
                  The text, imagery, logo, and metadata shown on this website are the intellectual property of Five Dimensions and protected by copyright law. You may not republish, scrape, or reproduce any material for commercial purposes without explicit prior written authorization.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-4" style={{ fontFamily: FONT_SERIF, color: COLORS.navy }}>
                  4. Disclaimer of Liability
                </h2>
                <p className="text-sm leading-relaxed" style={{ color: `${COLORS.navy}88` }}>
                  Five Dimensions, its founders, and employees will not be held liable for any financial losses, transaction delays, or property depreciation arising from actions taken based on information available on this website or discussed during consultation sessions. Real estate decisions are made at the investor's sole discretion and risk.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-4" style={{ fontFamily: FONT_SERIF, color: COLORS.navy }}>
                  5. Governing Law and Jurisdiction
                </h2>
                <p className="text-sm leading-relaxed" style={{ color: `${COLORS.navy}88` }}>
                  These terms are governed by and construed in accordance with the laws of India. Any disputes or claims arising out of or in connection with these terms, the website, or our services shall be subject to the exclusive jurisdiction of the courts of Noida/Gautam Buddha Nagar, Uttar Pradesh.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-4" style={{ fontFamily: FONT_SERIF, color: COLORS.navy }}>
                  6. Changes to Terms
                </h2>
                <p className="text-sm leading-relaxed" style={{ color: `${COLORS.navy}88` }}>
                  We reserve the right to amend these Terms and Conditions at any time. Any revisions will be updated on this page with an adjusted "Last Updated" date. Continued use of our site or services after modifications indicates acceptance of the updated terms.
                </p>
              </div>

              <div className="pt-6 border-t" style={{ borderColor: 'rgba(0,0,0,0.05)' }}>
                <h2 className="text-lg font-bold mb-3" style={{ fontFamily: FONT_SERIF, color: COLORS.navy }}>
                  Contact Information
                </h2>
                <p className="text-sm leading-relaxed" style={{ color: `${COLORS.navy}77` }}>
                  If you have questions regarding these terms, please contact:
                  <br />
                  <strong>Email:</strong> contact@fivedimensions.in<br />
                  <strong>Address:</strong> Bhutani Alphathum, A-707, Sector 90, Noida, Uttar Pradesh 201305
                </p>
              </div>

            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
