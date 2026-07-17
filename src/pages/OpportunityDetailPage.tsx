import { useEffect, useState } from 'react';
import { useParams, Link, Navigate } from 'react-router';
import { motion } from 'motion/react';
import {
  ChevronRight, MapPin, Shield, Clock, ArrowLeft, CheckCircle2, Building2, Phone, Loader2,
} from 'lucide-react';
import { COLORS, FONT_SERIF } from '../utils/constants';
import { fetchOpportunityById, fetchOpportunities } from '../lib/opportunitiesApi';
import type { Opportunity } from '../types';
import ConsultationForm from '../components/forms/ConsultationForm';
import OptimizedImage from '../components/ui/OptimizedImage';

import OpportunityCard from '../components/opportunities/OpportunityCard';
import SEO from '../components/SEO';

/** Badge colour map mirroring OpportunityCard — kept local to avoid coupling */
const TYPE_COLORS: Record<string, string> = {
  Commercial: '#2563EB',
  Luxury: COLORS.gold,
  Plots: '#059669',
  Residential: '#7C3AED',
  Farmland: '#B45309',
};

const STATUS_STYLES: Record<string, { bg: string; color: string }> = {
  'Ready Possession': { bg: '#D1FAE5', color: '#065F46' },
  'Under Construction': { bg: '#FEF3C7', color: '#92400E' },
  'New Launch': { bg: '#EDE9FE', color: '#5B21B6' },
};

/** Property highlights shown in the detail grid */
function buildHighlights(opportunity: Opportunity) {
  return [
    { icon: Shield,      label: 'Status',            value: opportunity.status },
    { icon: MapPin,      label: 'Location',          value: opportunity.location },
    { icon: Building2,   label: 'Asset Type',        value: opportunity.type },
    { icon: Clock,       label: 'Highlight',         value: opportunity.tag },
    { icon: CheckCircle2,label: 'Due Diligence',     value: '47-point verified' },
  ];
}

/** Feature bullets generated for the detail page body */
function buildFeatures(opportunity: Opportunity): string[] {
  const featuresByType: Record<string, string[]> = {
    Commercial: [
      'Triple-net lease structure with blue-chip anchor tenant',
      'RERA-registered with clear title and encumbrance-free deed',
      'Professional property management team on-site',
      'Dedicated parking allocation with 24/7 security',
    ],
    Luxury: [
      'Imported Italian marble and German modular kitchen',
      'Private lift lobby and smart home automation',
      'Concierge, valet, and 5-star lifestyle amenities',
      'Sea / golf course view from all primary rooms',
    ],
    Residential: [
      'Spacious 2 & 3 BHK configurations with vastu-compliant layouts',
      'Olympic-size swimming pool and landscaped podium garden',
      'School, hospital, and metro station within 2 km',
      'RERA-registered with construction-linked payment plan',
    ],
    Plots: [
      'Freehold land with clear title and registered deeds',
      'Master-planned township with paved internal roads',
      'Adjacent to announced infrastructure corridor',
      'Flexible construction timeline — no time-bound obligation',
    ],
  };
  return featuresByType[opportunity.type] ?? featuresByType.Residential;
}

/**
 * Individual opportunity detail page (/opportunities/:id).
 *
 * Layout:
 * - Breadcrumb + back button
 * - Full-width hero image with navy overlay and key info
 * - Two-column desktop: details + features (left), consultation form (right)
 * - Similar opportunities strip at the bottom
 */
export default function OpportunityDetailPage() {
  const { id } = useParams<{ id: string }>();

  const [opportunity, setOpportunity] = useState<Opportunity | null>(null);
  const [similar, setSimilar] = useState<Opportunity[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (!id) return;

    setIsLoading(true);

    fetchOpportunityById(id)
      .then(async (data) => {
        if (!data) {
          setNotFound(true);
          return;
        }

        setOpportunity(data);

        const all = await fetchOpportunities();

        setSimilar(
          all
            .filter((o) => o.type === data.type && o.id !== data.id)
            .slice(0, 3)
        );
      })
      .catch(() => setNotFound(true))
      .finally(() => setIsLoading(false));
  }, [id]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2
          size={24}
          className="animate-spin"
          style={{ color: COLORS.gold }}
        />
      </div>
    );
  }

  if (notFound || !opportunity) {
    return <Navigate to="/opportunities" replace />;
  }

const highlights = buildHighlights(opportunity);
const features = buildFeatures(opportunity);

const statusStyle =
  STATUS_STYLES[opportunity.status] ?? {
    bg: '#E5E7EB',
    color: '#374151',
  };

const typeColor =
  TYPE_COLORS[opportunity.type] ?? COLORS.navy;

const whatsappMessage = `Hello Five Dimensions, I would like to know more about the property: ${opportunity.title} (${opportunity.location}).`;
const whatsappUrl = `https://wa.me/919711193630?text=${encodeURIComponent(whatsappMessage)}`;

  const detailSchema = opportunity ? {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'RealEstateListing',
        '@id': `https://fivedimensions.in/opportunities/${opportunity.id}/#listing`,
        'name': opportunity.title,
        'description': opportunity.description,
        'url': `https://fivedimensions.in/opportunities/${opportunity.id}`,
        'image': opportunity.image,
        'address': {
          '@type': 'PostalAddress',
          'addressLocality': opportunity.location,
          'addressRegion': opportunity.city,
          'addressCountry': 'IN'
        },
        'offers': {
          '@type': 'Offer',
          'price': opportunity.priceValue ? opportunity.priceValue * 100000 : undefined,
          'priceCurrency': 'INR',
          'priceSpecification': {
            '@type': 'PriceSpecification',
            'price': opportunity.price,
            'priceCurrency': 'INR'
          }
        }
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `https://fivedimensions.in/opportunities/${opportunity.id}/#breadcrumb`,
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
            'name': 'Opportunities',
            'item': 'https://fivedimensions.in/opportunities'
          },
          {
            '@type': 'ListItem',
            'position': 3,
            'name': opportunity.title,
            'item': `https://fivedimensions.in/opportunities/${opportunity.id}`
          }
        ]
      }
    ]
  } : undefined;

  return (
    <>
      {opportunity && (
        <SEO
          title={`${opportunity.title} | Noida Property`}
          description={opportunity.description}
          canonicalUrl={`https://fivedimensions.in/opportunities/${opportunity.id}`}
          ogType="article"
          ogImage={opportunity.image}
          ogImageAlt={opportunity.alt}
          jsonLd={detailSchema}
        />
      )}
      {/* ── Hero ── */}
      <div className="relative h-72 sm:h-96 lg:h-[480px] overflow-hidden" style={{ background: COLORS.navy }}>
        <OptimizedImage
          src={opportunity.image}
          alt={opportunity.alt}
          className="w-full h-full object-cover"
          style={{ opacity: 0.55 }}
          width={1200}
          height={480}
          fetchPriority="high"
          loading="eager"
        />
        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to top, rgba(26,39,68,0.95) 0%, rgba(26,39,68,0.5) 50%, rgba(26,39,68,0.2) 100%)',
          }}
        />

        {/* Breadcrumb */}
        <div className="absolute top-24 left-0 right-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav
              className="flex items-center gap-1.5 text-xs"
              aria-label="Breadcrumb"
              style={{ color: 'rgba(255,255,255,0.55)' }}
            >
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight size={12} />
              <Link to="/opportunities" className="hover:text-white transition-colors">
                Investment Opportunities
              </Link>
              <ChevronRight size={12} />
              <span className="text-white font-medium truncate max-w-[200px]">{opportunity.title}</span>
            </nav>
          </div>
        </div>

        {/* Hero content — bottom of image */}
        <div className="absolute bottom-0 left-0 right-0 pb-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span
                  className="text-white text-xs font-semibold px-2.5 py-1 rounded-full"
                  style={{ background: typeColor }}
                >
                  {opportunity.type}
                </span>
                <span
                  className="text-xs font-semibold px-2.5 py-1 rounded-full"
                  style={{ background: statusStyle.bg, color: statusStyle.color }}
                >
                  {opportunity.status}
                </span>
                <span
                  className="text-xs font-semibold px-2.5 py-1 rounded-full"
                  style={{
                    background: 'rgba(255,255,255,0.15)',
                    backdropFilter: 'blur(8px)',
                    color: 'white',
                  }}
                >
                  {opportunity.tag}
                </span>
              </div>
              <h1
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2 leading-tight"
                style={{ fontFamily: FONT_SERIF }}
              >
                {opportunity.title}
              </h1>
              <div className="flex items-center gap-1.5 text-sm" style={{ color: 'rgba(255,255,255,0.65)' }}>
                <MapPin size={14} />
                {opportunity.location}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── Body ── */}
      <section className="py-10 lg:py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back link */}
          <Link
            to="/opportunities"
            className="inline-flex items-center gap-1.5 text-sm font-medium mb-8 transition-colors hover:opacity-80"
            style={{ color: COLORS.gold }}
          >
            <ArrowLeft size={15} />
            Back to All Opportunities
          </Link>

          <div className="grid lg:grid-cols-[1fr_360px] gap-10 xl:gap-14 items-start">
            {/* ── Left: details ── */}
            <div>
              {/* Price + returns banner */}
              <div
                className="flex flex-wrap items-center justify-between gap-4 p-5 rounded-2xl mb-8"
                style={{ background: `linear-gradient(135deg, ${COLORS.navy}, ${COLORS.navyLight})` }}
              >
                <div>
                  <div className="text-xs mb-1" style={{ color: 'rgba(255,255,255,0.5)' }}>
                    Starting From
                  </div>
                  <div
                    className="text-3xl font-bold"
                    style={{ fontFamily: FONT_SERIF, color: COLORS.gold }}
                  >
                    {opportunity.price}
                  </div>
                </div>
              </div>

              {/* Highlights grid */}
              <h2
                className="text-lg font-bold mb-4"
                style={{ fontFamily: FONT_SERIF, color: COLORS.navy }}
              >
                Property Highlights
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
                {highlights.map(({ icon: Icon, label, value }) => (
                  <div
                    key={label}
                    className="flex items-start gap-3 p-4 rounded-xl border"
                    style={{ background: 'white', borderColor: COLORS.border }}
                  >
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: `${COLORS.gold}15` }}
                    >
                      <Icon size={16} style={{ color: COLORS.gold }} />
                    </div>
                    <div>
                      <div className="text-xs mb-0.5" style={{ color: `${COLORS.navy}66` }}>
                        {label}
                      </div>
                      <div className="text-sm font-semibold" style={{ color: COLORS.navy }}>
                        {value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Description */}
              <h2
                className="text-lg font-bold mb-3"
                style={{ fontFamily: FONT_SERIF, color: COLORS.navy }}
              >
                About This Investment
              </h2>
              <p className="text-sm leading-relaxed mb-4" style={{ color: `${COLORS.navy}88` }}>
                {opportunity.description}. This is a thoroughly vetted opportunity that has passed
                5 Dimensions' 47-point due diligence framework covering legal title, encumbrance
                search, RERA registration, and financial structure verification.
              </p>
              <p className="text-sm leading-relaxed mb-8" style={{ color: `${COLORS.navy}88` }}>
                Located in {opportunity.location}, this {opportunity.type.toLowerCase()} asset
                offers strong fundamentals supported by infrastructure growth in the micro-market.
                Our advisory team has negotiated preferred pricing and investor-friendly payment
                structures exclusively for 5 Dimensions clients.
              </p>

              {/* Feature bullets */}
              <h2
                className="text-lg font-bold mb-4"
                style={{ fontFamily: FONT_SERIF, color: COLORS.navy }}
              >
                Key Features
              </h2>
              <ul className="space-y-3 mb-8">
                {features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckCircle2
                      size={17}
                      className="flex-shrink-0 mt-0.5"
                      style={{ color: COLORS.gold }}
                    />
                    <span className="text-sm" style={{ color: `${COLORS.navy}88` }}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Due diligence assurance strip */}
              <div
                className="flex items-start gap-4 p-4 rounded-xl border"
                style={{
                  background: `${COLORS.gold}08`,
                  borderColor: `${COLORS.gold}33`,
                }}
              >
                <Shield size={20} className="flex-shrink-0 mt-0.5" style={{ color: COLORS.gold }} />
                <div>
                  <p className="text-sm font-semibold mb-1" style={{ color: COLORS.navy }}>
                    47-Point Due Diligence Verified
                  </p>
                  <p className="text-xs leading-relaxed" style={{ color: `${COLORS.navy}77` }}>
                    Title cleared, RERA registered, encumbrance-free, and financially structured
                    for optimal investor returns. Legal opinion available on request.
                  </p>
                </div>
              </div>
            </div>

            {/* ── Right: consultation form ── */}
            <div className="lg:sticky lg:top-24">
              <div className="flex flex-col gap-2 mb-4">
                {/* Phone CTA */}
                <a
                  href="tel:+919711193630"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border text-sm font-medium transition-all hover:bg-white"
                  style={{
                    borderColor: COLORS.border,
                    color: `${COLORS.navy}88`,
                    background: 'transparent',
                  }}
                >
                  <Phone size={14} style={{ color: COLORS.gold }} />
                  Call +91 9711193630
                </a>

                {/* WhatsApp CTA */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border text-sm font-semibold transition-all"
                  style={{
                    borderColor: 'rgba(37, 211, 102, 0.25)',
                    color: '#1E7C41',
                    background: 'rgba(37, 211, 102, 0.04)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(37, 211, 102, 0.08)';
                    e.currentTarget.style.borderColor = 'rgba(37, 211, 102, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(37, 211, 102, 0.04)';
                    e.currentTarget.style.borderColor = 'rgba(37, 211, 102, 0.25)';
                  }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ color: '#1E7C41' }}
                  >
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.963C16.63 2.052 14.155.855 11.57.855 6.133.855 1.708 5.224 1.704 10.652c-.001 1.728.455 3.417 1.32 4.908l-.993 3.629 3.73-.977c1.472.8 3.047 1.22 4.673 1.22l.004-.002zm11.758-6.848c-.347-.174-2.054-1.014-2.369-1.129-.317-.115-.548-.174-.779.174-.23.347-.89 1.129-1.092 1.36-.202.23-.404.26-.75.085-.347-.174-1.464-.539-2.787-1.72-1.028-.918-1.722-2.052-1.923-2.4-.202-.347-.021-.534.153-.708.156-.156.347-.405.52-.608.174-.203.23-.347.347-.579.115-.23.058-.435-.029-.608-.086-.174-.779-1.88-1.067-2.574-.28-.675-.565-.584-.779-.595-.2-.01-.43-.01-.66-.01-.23 0-.605.087-.922.434-.317.347-1.21 1.184-1.21 2.887 0 1.702 1.239 3.345 1.412 3.577.174.23 2.438 3.725 5.906 5.22.825.356 1.47.568 1.97.727.828.263 1.58.226 2.176.137.663-.099 2.055-.84 2.343-1.652.29-.812.29-1.506.202-1.652-.088-.146-.318-.233-.665-.407z" />
                  </svg>
                  Chat on WhatsApp
                </a>
              </div>

              <div
                className="rounded-2xl overflow-hidden border"
                style={{
                  background: 'white',
                  borderColor: COLORS.border,
                  boxShadow: `0 8px 32px ${COLORS.navy}10`,
                }}
              >
                <div
                  className="px-6 py-5"
                  style={{
                    background: `linear-gradient(135deg, ${COLORS.navy}, ${COLORS.navyLight})`,
                  }}
                >
                  <h3
                    className="text-lg font-bold text-white"
                    style={{ fontFamily: FONT_SERIF }}
                  >
                    Enquire About This Property
                  </h3>
                  <p className="text-white/65 text-sm mt-0.5">
                    An advisor will call within 24 hours
                  </p>
                </div>
                <ConsultationForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Similar opportunities ── */}
      {similar.length > 0 && (
        <section className="py-14 lg:py-20" style={{ background: '#FAF6F0' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between mb-8">
              <div>
                <span
                  className="text-xs font-semibold tracking-widest uppercase"
                  style={{ color: COLORS.gold }}
                >
                  Similar Projects
                </span>
                <h2
                  className="text-2xl lg:text-3xl font-bold mt-2"
                  style={{ fontFamily: FONT_SERIF, color: COLORS.navy }}
                >
                  You May Also Like
                </h2>
              </div>
              <Link
                to="/opportunities"
                className="hidden sm:flex items-center gap-1 text-sm font-semibold transition-colors hover:opacity-80"
                style={{ color: COLORS.gold }}
              >
                View All
                <ChevronRight size={14} />
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {similar.map((item, index) => (
                <OpportunityCard
                  key={item.id}
                  opportunity={item}
                  animationDelay={index * 0.1}
                />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
