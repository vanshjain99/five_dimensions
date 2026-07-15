import { Link } from 'react-router';
import { ChevronRight } from 'lucide-react';
import { COLORS, FONT_SERIF } from '../utils/constants';
import SEO from '../components/SEO';
import AnimatedSection from '../components/ui/AnimatedSection';

export default function PrivacyPolicyPage() {
  const privacySchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': 'https://fivedimensions.in/privacy-policy/#webpage',
        'url': 'https://fivedimensions.in/privacy-policy',
        'name': 'Privacy Policy | Five Dimensions',
        'description': 'Privacy Policy of Five Dimensions Real Estate Advisory.',
        'breadcrumb': {
          '@id': 'https://fivedimensions.in/privacy-policy/#breadcrumb'
        }
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://fivedimensions.in/privacy-policy/#breadcrumb',
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
            'name': 'Privacy Policy',
            'item': 'https://fivedimensions.in/privacy-policy'
          }
        ]
      }
    ]
  };

  return (
    <>
      <SEO
        title="Privacy Policy | Five Dimensions Real Estate"
        description="Learn how Five Dimensions protects, collects, and secures your personal information. Read our complete privacy policy guidelines."
        canonicalUrl="https://fivedimensions.in/privacy-policy"
        jsonLd={privacySchema}
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
            <span className="text-white font-medium">Privacy Policy</span>
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
            Privacy Policy
          </h1>
          <p className="text-sm sm:text-base max-w-2xl mx-auto leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>
            Last Updated: July 15, 2026. This policy outlines how Five Dimensions collects, protects, and uses your personal information.
          </p>
        </div>
      </section>

      {/* Policy Content */}
      <section className="py-16 lg:py-24 bg-[#FAF6F0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="bg-white rounded-3xl p-8 lg:p-12 border border-black/[0.03] space-y-8" style={{ boxShadow: '0 4px 30px rgba(0,0,0,0.01)' }}>
              
              <div>
                <h2 className="text-xl font-bold mb-4" style={{ fontFamily: FONT_SERIF, color: COLORS.navy }}>
                  1. Information We Collect
                </h2>
                <p className="text-sm leading-relaxed mb-3" style={{ color: `${COLORS.navy}88` }}>
                  We collect information that you voluntarily provide to us when you fill out contact forms, book a consultation, or communicate with us. This information includes:
                </p>
                <ul className="list-disc pl-5 text-sm space-y-2" style={{ color: `${COLORS.navy}77` }}>
                  <li>Contact details (such as your full name, email address, phone number, and country code).</li>
                  <li>Investment preferences (including interest in Commercial, Residential, Luxury properties or Plots).</li>
                  <li>Approximate investment budgets.</li>
                  <li>Any supplementary notes or messages you submit through our platform.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-4" style={{ fontFamily: FONT_SERIF, color: COLORS.navy }}>
                  2. How We Use Your Information
                </h2>
                <p className="text-sm leading-relaxed mb-3" style={{ color: `${COLORS.navy}88` }}>
                  The personal data we collect is utilized strictly to provide, improve, and personalize our advisory services. Specifically, we use your data to:
                </p>
                <ul className="list-disc pl-5 text-sm space-y-2" style={{ color: `${COLORS.navy}77` }}>
                  <li>Contact you to conduct the requested 30-minute property wealth consultation.</li>
                  <li>Filter and recommend real estate properties that match your specified budget and interests.</li>
                  <li>Send newsletters, market updates, or promotional materials (only if you have opted in).</li>
                  <li>Verify compliance with regulatory guidelines (such as FEMA and RERA mandates).</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-4" style={{ fontFamily: FONT_SERIF, color: COLORS.navy }}>
                  3. Information Sharing and Disclosure
                </h2>
                <p className="text-sm leading-relaxed" style={{ color: `${COLORS.navy}88` }}>
                  We hold your privacy in the highest regard. We do not sell, rent, or trade your personal data to third parties. We may disclose data only under strict conditions:
                </p>
                <ul className="list-disc pl-5 text-sm space-y-2 mt-3" style={{ color: `${COLORS.navy}77` }}>
                  <li>With empanelled legal and financial verification firms to perform due diligence on your prospective transactions.</li>
                  <li>When required by law, court order, or governmental authorities to comply with statutory regulations.</li>
                  <li>With trusted third-party service providers (like web hosting or database platforms) operating under strict non-disclosure terms to maintain our software infrastructure.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-4" style={{ fontFamily: FONT_SERIF, color: COLORS.navy }}>
                  4. Data Security and Retention
                </h2>
                <p className="text-sm leading-relaxed" style={{ color: `${COLORS.navy}88` }}>
                  We implement industry-standard administrative, technical, and physical security measures to safeguard your information from unauthorized access, loss, or alteration. However, please note that no internet transmission is 100% secure. We retain your personal data only as long as necessary to fulfill business advisory operations or meet legal obligations.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-4" style={{ fontFamily: FONT_SERIF, color: COLORS.navy }}>
                  5. Cookies and Analytics
                </h2>
                <p className="text-sm leading-relaxed" style={{ color: `${COLORS.navy}88` }}>
                  Our website uses cookies and similar tracking identifiers to track visitor activity, maintain web configurations, and analyze traffic patterns. We use this anonymous aggregated statistics to optimize performance and core web vitals. You can disable cookies in your browser settings, though doing so might affect some site functionalities.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-4" style={{ fontFamily: FONT_SERIF, color: COLORS.navy }}>
                  6. Your Rights and Choices
                </h2>
                <p className="text-sm leading-relaxed" style={{ color: `${COLORS.navy}88` }}>
                  Depending on your location, you have the right to request access to the personal data we hold about you, request corrections to inaccurate data, or request the deletion of your personal records. If you wish to execute any of these rights, please contact us directly via email.
                </p>
              </div>

              <div className="pt-6 border-t" style={{ borderColor: 'rgba(0,0,0,0.05)' }}>
                <h2 className="text-lg font-bold mb-3" style={{ fontFamily: FONT_SERIF, color: COLORS.navy }}>
                  Contact Information
                </h2>
                <p className="text-sm leading-relaxed" style={{ color: `${COLORS.navy}77` }}>
                  For questions or concerns regarding our privacy policies, please reach out to us at:<br />
                  <strong>Email:</strong> sachin.jaiparas@gmail.com<br />
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
