import { Link } from 'react-router';
import { ChevronRight, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { COLORS, FONT_SERIF } from '../utils/constants';
import SEO from '../components/SEO';
import AnimatedSection from '../components/ui/AnimatedSection';
import ConsultationForm from '../components/forms/ConsultationForm';

export default function ContactUsPage() {
  const contactSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ContactPage',
        '@id': 'https://fivedimensions.in/contact-us/#webpage',
        'url': 'https://fivedimensions.in/contact-us',
        'name': 'Contact Us | Five Dimensions',
        'description': 'Contact Five Dimensions, Noida\'s premier real estate consultancy. Book a free consultation.',
        'breadcrumb': {
          '@id': 'https://fivedimensions.in/contact-us/#breadcrumb'
        }
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://fivedimensions.in/contact-us/#breadcrumb',
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
            'name': 'Contact Us',
            'item': 'https://fivedimensions.in/contact-us'
          }
        ]
      }
    ]
  };

  return (
    <>
      <SEO
        title="Contact Us | Real Estate Investment Experts"
        description="Get in touch with Noida's leading real estate investment advisory. Request a callback or visit our Sector 90 Noida office."
        canonicalUrl="https://fivedimensions.in/contact-us"
        jsonLd={contactSchema}
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
            <span className="text-white font-medium">Contact Us</span>
          </nav>

          <span
            className="inline-block text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ color: COLORS.gold }}
          >
            Get In Touch
          </span>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            style={{ fontFamily: FONT_SERIF }}
          >
            Contact Our Experts
          </h1>
          <p className="text-base sm:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed" style={{ color: 'rgba(255,255,255,0.7)' }}>
            Have a question about an investment opportunity or need legal due diligence? Our expert advisors are here to guide you.
          </p>
        </div>
      </section>

      {/* Contact Content Section */}
      <section className="py-16 lg:py-24 bg-[#FAF6F0]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Coordinates */}
            <div className="lg:col-span-5 space-y-8">
              <AnimatedSection>
                <h2
                  className="text-2xl lg:text-3xl font-bold mb-4"
                  style={{ fontFamily: FONT_SERIF, color: COLORS.navy }}
                >
                  Our Headquarters
                </h2>
                <p className="text-sm leading-relaxed mb-6" style={{ color: `${COLORS.navy}A8` }}>
                  We are based in Sector 90, Noida. Drop by for a cup of coffee and a detailed consultation regarding your wealth goals.
                </p>

                <div className="space-y-6">
                  {/* Map Pin / Address */}
                  <div className="flex gap-4 items-start">
                    <div
                      className="w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center"
                      style={{ background: `${COLORS.gold}14` }}
                    >
                      <MapPin size={18} style={{ color: COLORS.gold }} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-wider mb-1" style={{ color: COLORS.navy }}>
                        Office Address
                      </h4>
                      <p className="text-sm leading-relaxed" style={{ color: `${COLORS.navy}77` }}>
                        Bhutani Alphathum, A-707,<br />
                        Sector 90, Noida, Uttar Pradesh 201305
                      </p>
                    </div>
                  </div>

                  {/* Phone Call */}
                  <div className="flex gap-4 items-start">
                    <div
                      className="w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center"
                      style={{ background: `${COLORS.gold}14` }}
                    >
                      <Phone size={18} style={{ color: COLORS.gold }} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-wider mb-1" style={{ color: COLORS.navy }}>
                        Phone Number
                      </h4>
                      <a
                        href="tel:+919711193630"
                        className="text-sm hover:underline transition-all"
                        style={{ color: `${COLORS.navy}77` }}
                      >
                        +91 9711193630
                      </a>
                    </div>
                  </div>

                  {/* Email Us */}
                  <div className="flex gap-4 items-start">
                    <div
                      className="w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center"
                      style={{ background: `${COLORS.gold}14` }}
                    >
                      <Mail size={18} style={{ color: COLORS.gold }} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-wider mb-1" style={{ color: COLORS.navy }}>
                        Email Address
                      </h4>
                      <a
                        href="mailto:contact@fivedimensions.in"
                        className="text-sm hover:underline transition-all"
                        style={{ color: `${COLORS.navy}77` }}
                      >
                        contact@fivedimensions.in
                      </a>
                    </div>
                  </div>

                  {/* Working Hours */}
                  <div className="flex gap-4 items-start">
                    <div
                      className="w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center"
                      style={{ background: `${COLORS.gold}14` }}
                    >
                      <Clock size={18} style={{ color: COLORS.gold }} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-wider mb-1" style={{ color: COLORS.navy }}>
                        Working Hours
                      </h4>
                      <p className="text-sm" style={{ color: `${COLORS.navy}77` }}>
                        Mon – Sat: 9:00 AM – 7:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Right Column: Form */}
            <div className="lg:col-span-7">
              <AnimatedSection delay={0.2}>
                <div
                  className="bg-white rounded-3xl overflow-hidden border border-black/[0.03]"
                  style={{
                    boxShadow: '0 10px 40px rgba(0,0,0,0.03)',
                  }}
                >
                  <div
                    className="p-6 text-center text-white"
                    style={{ background: COLORS.navy }}
                  >
                    <h3 className="text-xl font-bold mb-1" style={{ fontFamily: FONT_SERIF }}>
                      Book Consultation
                    </h3>
                    <p className="text-xs text-white/60">
                      Submit details below, and an expert will call you shortly.
                    </p>
                  </div>
                  
                  {/* Reuses ConsultationForm component */}
                  <ConsultationForm />
                </div>
              </AnimatedSection>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
