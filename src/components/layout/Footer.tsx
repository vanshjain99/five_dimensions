import { MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router';
import { COLORS, FONT_SERIF } from '../../utils/constants';
import { FOOTER_SOCIAL_LINKS } from '../../data/navigation';

const CONTACT_ITEMS = [
  {
    icon: MapPin,
    text: 'Bhutani Alphathum, A-707, Sector 90, Noida, Uttar Pradesh 201305',
  },
  { icon: Phone, text: '+91 9711193630' },
  { icon: Mail, text: 'sachin.jaiparas@gmail.com' },
];

/** Map footer link names to semantic paths for proper multi-page internal linking */
const LINK_ROUTING_MAP: Record<string, string> = {
  'Commercial Advisory': '/opportunities?type=Commercial',
  'Residential Investments': '/opportunities?type=Residential',
  'Luxury Portfolio': '/opportunities?type=Luxury',
  'Land & Plots': '/opportunities?type=Plots',
  'NRI Services': '/#consultation',
  'Portfolio Management': '/#services',
  'About Us': '/about-us',
  'Our Team': '/about-us#founders',
  'Market Insights': '/insights',
  'Case Studies': '/insights',
  'Careers': '/#consultation',
  'Press': '/insights',
};

export default function Footer() {
  return (
    <footer style={{ background: COLORS.navyDeep }} className="py-14" aria-label="Site Footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand column */}
          <div>
            <div className="mb-5">
              <img
                src="/vertical-logo-white.svg"
                alt="Five Dimensions"
                className="h-16 w-auto object-contain"
              />
            </div>
            <p className="text-sm leading-relaxed mb-5" style={{ color: 'rgba(255,255,255,0.38)' }}>
              Delhi NCR's premier real estate investment consultancy. Engineered for discerning
              investors since 2009.
            </p>

            {/* Social icon buttons */}
            <div className="flex gap-2.5">
              {FOOTER_SOCIAL_LINKS.map(({ label, title }) => (
                <span
                  key={label}
                  title={title}
                  className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold"
                  style={{
                    background: 'rgba(255,255,255,0.06)',
                    color: 'rgba(255,255,255,0.45)',
                  }}
                >
                  {label}
                </span>
              ))}
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 tracking-wide">Services</h4>
            <ul className="space-y-2.5">
              {['Commercial Advisory', 'Residential Investments', 'Luxury Portfolio', 'Land & Plots', 'NRI Services', 'Portfolio Management'].map((link) => (
                <li key={link}>
                  <Link
                    to={LINK_ROUTING_MAP[link] ?? '/'}
                    className="text-sm transition-colors hover:text-[#C9A96E]"
                    style={{ color: 'rgba(255,255,255,0.38)' }}
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 tracking-wide">Company</h4>
            <ul className="space-y-2.5">
              {['About Us', 'Our Team', 'Market Insights', 'Case Studies', 'Careers', 'Press'].map((link) => (
                <li key={link}>
                  <Link
                    to={LINK_ROUTING_MAP[link] ?? '/'}
                    className="text-sm transition-colors hover:text-[#C9A96E]"
                    style={{ color: 'rgba(255,255,255,0.38)' }}
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 tracking-wide">Contact</h4>
            <div className="space-y-3.5">
              {CONTACT_ITEMS.map(({ icon: Icon, text }) => {
                const isPhone = text.startsWith('+');
                const isMail = text.includes('@');
                return (
                  <div key={text} className="flex items-start gap-2.5">
                    <Icon size={14} className="mt-0.5 flex-shrink-0" style={{ color: COLORS.gold }} />
                    {isPhone ? (
                      <a href={`tel:${text.replace(/\s+/g, '')}`} className="text-sm transition-colors hover:text-[#C9A96E]" style={{ color: 'rgba(255,255,255,0.38)' }}>
                        {text}
                      </a>
                    ) : isMail ? (
                      <a href={`mailto:${text}`} className="text-sm transition-colors hover:text-[#C9A96E]" style={{ color: 'rgba(255,255,255,0.38)' }}>
                        {text}
                      </a>
                    ) : (
                      <span className="text-sm" style={{ color: 'rgba(255,255,255,0.38)' }}>
                        {text}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="border-t pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderColor: 'rgba(255,255,255,0.07)' }}
        >
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.22)' }}>
            © 2026 5 Dimensions Real Estate Advisory Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <Link
              to="/privacy-policy"
              className="text-xs transition-colors hover:text-white/50"
              style={{ color: 'rgba(255,255,255,0.22)' }}
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms-conditions"
              className="text-xs transition-colors hover:text-white/50"
              style={{ color: 'rgba(255,255,255,0.22)' }}
            >
              Terms & Conditions
            </Link>
            <Link
              to="/contact-us"
              className="text-xs transition-colors hover:text-white/50"
              style={{ color: 'rgba(255,255,255,0.22)' }}
            >
              Contact Us
            </Link>
            <a
              href="#"
              className="text-xs transition-colors hover:text-white/50"
              style={{ color: 'rgba(255,255,255,0.22)' }}
            >
              Disclaimer
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
