import { Link } from 'react-router';
import { ChevronRight, Award, Shield, Compass, Target, Gem } from 'lucide-react';
import { COLORS, FONT_SERIF } from '../utils/constants';
import { LEADERS } from '../data/leadership';
import SEO from '../components/SEO';
import AnimatedSection from '../components/ui/AnimatedSection';
import SectionHeader from '../components/ui/SectionHeader';

export default function AboutUsPage() {
  const aboutSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'AboutPage',
        '@id': 'https://fivedimensions.in/about-us/#webpage',
        'url': 'https://fivedimensions.in/about-us',
        'name': 'About Us | Five Dimensions',
        'description': 'Learn about Five Dimensions, Noida\'s premier real estate consultancy. Led by Sachin Jain and Praveen Kushwah.',
        'breadcrumb': {
          '@id': 'https://fivedimensions.in/about-us/#breadcrumb'
        }
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://fivedimensions.in/about-us/#breadcrumb',
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
            'name': 'About Us',
            'item': 'https://fivedimensions.in/about-us'
          }
        ]
      }
    ]
  };

  const coreValues = [
    {
      icon: Shield,
      title: 'Legal Integrity',
      desc: 'We perform exhaustive 47-point due diligence on every asset, ensuring 100% RERA compliance and clean titles before recommendations.'
    },
    {
      icon: Target,
      title: 'Precision Sourcing',
      desc: 'We map opportunities strictly against client wealth horizons, rejecting 95% of listed market assets to source only institutional-grade properties.'
    },
    {
      icon: Compass,
      title: 'Unbiased Advisory',
      desc: 'We offer advisory built on data, demographics, and infrastructure timelines—never pushing developers or biased inventory.'
    },
    {
      icon: Gem,
      title: 'Bespoke Portfolio Architecture',
      desc: 'Every portfolio we build is custom-tailored, optimizing tax structures, long-term yield potential, and capital preservation.'
    }
  ];

  return (
    <>
      <SEO
        title="About Us | Premium Real Estate Advisory"
        description="Discover the story behind Five Dimensions, Delhi NCR's premier real estate consultancy. Led by industry experts Sachin Jain and Praveen Kushwah."
        canonicalUrl="https://fivedimensions.in/about-us"
        jsonLd={aboutSchema}
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
            <span className="text-white font-medium">About Us</span>
          </nav>

          <span
            className="inline-block text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ color: COLORS.gold }}
          >
            Our Story
          </span>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            style={{ fontFamily: FONT_SERIF }}
          >
            About Five Dimensions
          </h1>
          <p className="text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: 'rgba(255,255,255,0.7)' }}>
            Delhi NCR's premier real estate consultancy. We combine market intelligence, legal due diligence, and financial analysis to structure premium real estate portfolios.
          </p>
        </div>
      </section>

      {/* Main Philosophy & Narrative */}
      <section className="py-20 bg-[#FAF6F0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2
              className="text-3xl font-bold mb-6"
              style={{ fontFamily: FONT_SERIF, color: COLORS.navy }}
            >
              Architecting Secure Real Estate Wealth
            </h2>
            <p className="text-sm sm:text-base leading-relaxed mb-6" style={{ color: `${COLORS.navy}A8` }}>
              Founded with the vision to bring transparency, integrity, and institutional-grade rigor to real estate investments, Five Dimensions has spent over a decade advising private clients, family offices, and NRIs.
            </p>
            <p className="text-sm sm:text-base leading-relaxed" style={{ color: `${COLORS.navy}A8` }}>
              We believe real estate is not just about brick and mortar—it is a critical pillar of wealth preservation and growth. That is why we treat every search, transaction, and portfolio review with clinical precision, choosing only properties that pass our stringent standards.
            </p>
          </AnimatedSection>

          {/* Core Values Grid */}
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {coreValues.map((value, idx) => (
              <AnimatedSection
                key={value.title}
                delay={idx * 0.1}
                className="bg-white rounded-2xl p-8 border border-black/[0.03]"
                style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.02)' }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                  style={{ background: `${COLORS.gold}14` }}
                >
                  <value.icon size={22} style={{ color: COLORS.gold }} />
                </div>
                <h3
                  className="text-lg font-bold mb-3"
                  style={{ fontFamily: FONT_SERIF, color: COLORS.navy }}
                >
                  {value.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: `${COLORS.navy}77` }}>
                  {value.desc}
                </p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Founders / Leadership Section */}
      <section className="py-20 lg:py-28 bg-white" id="founders">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            overline="Leadership"
            title="The Minds Behind Five Dimensions"
            subtitle="Decades of combined experience in real estate finance, institutional investment, and wealth strategy at the service of every client."
          />

          <div
            className="w-16 h-0.5 mx-auto mb-16 -mt-6 rounded-full"
            style={{ background: `linear-gradient(to right, ${COLORS.gold}, ${COLORS.goldDark})` }}
          />

          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 max-w-4xl mx-auto">
            {LEADERS.map((leader, index) => (
              <AnimatedSection
                key={leader.name}
                delay={index * 0.15}
                className="flex flex-col items-center text-center px-4"
              >
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
                <p className="text-sm leading-relaxed max-w-sm" style={{ color: `${COLORS.navy}77` }}>
                  {leader.bio}
                </p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
