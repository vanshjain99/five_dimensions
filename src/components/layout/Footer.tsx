import { MapPin, Phone, Mail } from 'lucide-react';
import { COLORS, FONT_SERIF } from '../../utils/constants';
import {
  FOOTER_SERVICE_LINKS,
  FOOTER_COMPANY_LINKS,
  FOOTER_SOCIAL_LINKS,
} from '../../data/navigation';

const CONTACT_ITEMS = [
  {
    icon: MapPin,
    text: 'Bhutani Alphathum, A-707, Sector 90, Noida, Uttar Pradesh 201305',
  },
  { icon: Phone, text: '+91 9711193630' },
  { icon: Mail, text: 'sachin.jaiparas@gmail.com' },
];

/** Column of footer links with a shared label style */
function FooterLinkColumn({ heading, links }: { heading: string; links: string[] }) {
  return (
    <div>
      <h4 className="text-white font-semibold text-sm mb-4 tracking-wide">{heading}</h4>
      {links.map((link) => (
        <a
          key={link}
          href="#"
          className="block text-sm mb-2.5 transition-colors hover:text-[#C9A96E]"
          style={{ color: 'rgba(255,255,255,0.38)' }}
        >
          {link}
        </a>
      ))}
    </div>
  );
}

/**
 * Four-column site footer on a deep navy background.
 * Columns: brand + social, services, company, contact.
 */
export default function Footer() {
  return (
    <footer style={{ background: COLORS.navyDeep }} className="py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand column */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                style={{
                  background: `linear-gradient(135deg, ${COLORS.gold}, ${COLORS.goldDark})`,
                }}
              >
                <span className="text-white font-bold text-xs">5D</span>
              </div>
              <span
                className="text-white text-lg font-semibold"
                style={{ fontFamily: FONT_SERIF }}
              >
                5 Dimensions
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-5" style={{ color: 'rgba(255,255,255,0.38)' }}>
              Delhi NCR's premier real estate investment consultancy. Engineered for discerning
              investors since 2009.
            </p>

            {/* Social icon buttons */}
            <div className="flex gap-2.5">
              {FOOTER_SOCIAL_LINKS.map(({ label, title }) => (
                <button
                  key={label}
                  title={title}
                  aria-label={title}
                  className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold transition-colors"
                  style={{
                    background: 'rgba(255,255,255,0.06)',
                    color: 'rgba(255,255,255,0.45)',
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background = `${COLORS.gold}2A`)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background = 'rgba(255,255,255,0.06)')
                  }
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          <FooterLinkColumn heading="Services" links={FOOTER_SERVICE_LINKS} />
          <FooterLinkColumn heading="Company" links={FOOTER_COMPANY_LINKS} />

          {/* Contact column */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 tracking-wide">Contact</h4>
            <div className="space-y-3.5">
              {CONTACT_ITEMS.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-start gap-2.5">
                  <Icon size={14} className="mt-0.5 flex-shrink-0" style={{ color: COLORS.gold }} />
                  <span className="text-sm" style={{ color: 'rgba(255,255,255,0.38)' }}>
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="border-t pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderColor: 'rgba(255,255,255,0.07)' }}
        >
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.22)' }}>
            © 2025 5 Dimensions Real Estate Advisory Pvt. Ltd. All rights reserved. RERA Reg:
            P51700012345
          </p>
          <div className="flex gap-5">
            {['Privacy Policy', 'Terms of Use', 'Disclaimer'].map((label) => (
              <a
                key={label}
                href="#"
                className="text-xs transition-colors hover:text-white/50"
                style={{ color: 'rgba(255,255,255,0.22)' }}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
