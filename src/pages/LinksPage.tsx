import { useState } from 'react';
import { Phone, Globe, MapPin, Mail, Calendar, Share2, UserPlus, ChevronRight, Check } from 'lucide-react';
import SEO from '../components/SEO';
import { COLORS, FONT_SERIF } from '../utils/constants';

export default function LinksPage() {
  const [copied, setCopied] = useState(false);

  // Phone and WhatsApp configuration
  const rawPhone = '919711193630';
  const displayPhone = '+91 9711193630';
  const emailAddress = 'sachin.jaiparas@gmail.com';
  const whatsappMsg = 'Hello Five Dimensions, I would like to know more about your property advisory services.';
  
  // Links
  const links = [
    {
      title: 'Direct Voice Call',
      subtitle: displayPhone,
      href: `tel:${rawPhone}`,
      icon: <Phone size={18} />,
      isExternal: false,
    },
    {
      title: 'WhatsApp Chat',
      subtitle: 'Message for instant property queries',
      href: `https://wa.me/${rawPhone}?text=${encodeURIComponent(whatsappMsg)}`,
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="h-[18px] w-[18px] fill-current"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.963C16.63 2.052 14.155.855 11.57.855 6.133.855 1.708 5.224 1.704 10.652c-.001 1.728.455 3.417 1.32 4.908l-.993 3.629 3.73-.977c1.472.8 3.047 1.22 4.673 1.22l.004-.002zm11.758-6.848c-.347-.174-2.054-1.014-2.369-1.129-.317-.115-.548-.174-.779.174-.23.347-.89 1.129-1.092 1.36-.202.23-.404.26-.75.085-.347-.174-1.464-.539-2.787-1.72-1.028-.918-1.722-2.052-1.923-2.4-.202-.347-.021-.534.153-.708.156-.156.347-.405.52-.608.174-.203.23-.347.347-.579.115-.23.058-.435-.029-.608-.086-.174-.779-1.88-1.067-2.574-.28-.675-.565-.584-.779-.595-.2-.01-.43-.01-.66-.01-.23 0-.605.087-.922.434-.317.347-1.21 1.184-1.21 2.887 0 1.702 1.239 3.345 1.412 3.577.174.23 2.438 3.725 5.906 5.22.825.356 1.47.568 1.97.727.828.263 1.58.226 2.176.137.663-.099 2.055-.84 2.343-1.652.29-.812.29-1.506.202-1.652-.088-.146-.318-.233-.665-.407z" />
        </svg>
      ),
      isExternal: true,
    },
    {
      title: 'Find Us on Google Maps',
      subtitle: 'Sector 90, Noida (Alphathum A-707)',
      href: 'https://maps.app.goo.gl/pfWzjnM8sPiyMTrp6',
      icon: <MapPin size={18} />,
      isExternal: true,
    },
    {
      title: 'Visit Official Website',
      subtitle: 'fivedimensions.in',
      href: '/',
      icon: <Globe size={18} />,
      isExternal: false,
    },
    {
      title: 'Send an Email',
      subtitle: emailAddress,
      href: `mailto:${emailAddress}`,
      icon: <Mail size={18} />,
      isExternal: false,
    },
    {
      title: 'Book Free Consultation',
      subtitle: 'Schedule a private 1-on-1 review',
      href: '/contact-us',
      icon: <Calendar size={18} />,
      isExternal: false,
    },
  ];

  // Generates and downloads a standard vCard (.vcf) contact file
  const handleSaveContact = () => {
    const vcard = `BEGIN:VCARD
VERSION:3.0
N:Advisory;Five;Dimensions;;
FN:Five Dimensions Real Estate Advisory
ORG:Five Dimensions Real Estate Advisory Pvt. Ltd.
TITLE:Premium Real Estate Advisory
TEL;TYPE=WORK,VOICE:+919711193630
EMAIL;TYPE=PREF,INTERNET:${emailAddress}
URL:https://fivedimensions.in
ADR;TYPE=WORK,PREF:;;Bhutani Alphathum, A-707, Sector 90;Noida;Uttar Pradesh;201305;India
NOTE:Bespoke Wealth Architecture - Delhi NCR's premium investment-grade real estate advisory.
REV:${new Date().toISOString().replace(/[-:]/g, '').split('.')[0]}Z
END:VCARD`;

    const blob = new Blob([vcard], { type: 'text/vcard;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Five_Dimensions_Contact.vcf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  // Triggers native mobile sharing or copies URL to clipboard
  const handleShare = () => {
    const pageUrl = `${window.location.origin}/links`;
    if (navigator.share) {
      navigator.share({
        title: 'Five Dimensions',
        text: 'Five Dimensions - Bespoke Wealth Architecture',
        url: pageUrl,
      }).catch((err) => console.log('Error sharing:', err));
    } else {
      navigator.clipboard.writeText(pageUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <>
      <SEO
        title="Connect with Us"
        description="Quick links to call, chat, find office coordinates, or book a consultation with Five Dimensions Real Estate Advisory."
      />

      <div className="relative min-h-screen w-full flex flex-col items-center justify-between bg-gradient-to-b from-[#0B132B] via-[#0F1C3F] to-[#070D1F] px-4 overflow-hidden font-sans">
        
        {/* Soft Background Accent Glows */}
        <div 
          className="absolute -top-20 -right-20 w-72 h-72 rounded-full blur-[90px] pointer-events-none opacity-20"
          style={{ background: COLORS.gold }}
        />
        <div 
          className="absolute -bottom-10 -left-10 w-80 h-80 rounded-full blur-[100px] pointer-events-none opacity-10"
          style={{ background: '#243659' }}
        />

        {/* Main Body */}
        <main className="w-full max-w-md flex flex-col items-center pt-16 flex-grow z-10">
          
          {/* Circular Logo Container */}
          <div className="relative w-24 h-24 rounded-full p-[2px] bg-gradient-to-tr from-[#C9A96E] to-[#1A2744] shadow-xl overflow-hidden mb-5 hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full rounded-full bg-[#1A2744] flex items-center justify-center p-1.5 overflow-hidden">
              <img 
                src="/vertical-logo-white.svg" 
                alt="Five Dimensions Logo" 
                className="w-[90%] h-[90%] object-contain"
              />
            </div>
          </div>

          {/* Branding Texts */}
          <span 
            className="text-xs font-semibold tracking-widest uppercase mb-1.5 text-center"
            style={{ color: COLORS.gold }}
          >
            Bespoke Wealth Architecture
          </span>
          
          <h1 
            className="text-3xl font-bold text-white mb-2 tracking-wide text-center"
            style={{ fontFamily: FONT_SERIF }}
          >
            Five Dimensions
          </h1>
          
          <p className="text-white/60 text-xs max-w-[280px] text-center leading-relaxed mb-6">
            Delhi NCR's Premium Investment-Grade Real Estate Advisory
          </p>

          {/* Top Quick Actions (Save Contact + Share Page) */}
          <div className="flex gap-3 mb-8 w-full justify-center px-4">
            <button
              onClick={handleSaveContact}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-300 cursor-pointer shadow-lg"
              style={{ 
                background: `linear-gradient(135deg, ${COLORS.gold} 0%, ${COLORS.goldDark} 100%)`,
                color: '#1C1C1E',
                boxShadow: '0 4px 15px rgba(201, 169, 110, 0.25)'
              }}
              aria-label="Save contact to phone"
            >
              <UserPlus size={14} />
              Save Contact
            </button>

            <button
              onClick={handleShare}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold border transition-all duration-300 cursor-pointer shadow-lg"
              style={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                borderColor: 'rgba(255, 255, 255, 0.1)',
                color: 'rgba(255, 255, 255, 0.9)'
              }}
              aria-label="Share this link list"
            >
              {copied ? <Check size={14} className="text-[#C9A96E]" /> : <Share2 size={14} />}
              {copied ? 'Copied Link' : 'Share Profile'}
            </button>
          </div>

          {/* Vertical list of Link Buttons */}
          <div className="w-full space-y-4 px-2">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target={link.isExternal ? '_blank' : undefined}
                rel={link.isExternal ? 'noopener noreferrer' : undefined}
                className="flex items-center justify-between p-4 w-full rounded-2xl bg-white/[0.02] border border-white/[0.06] text-left hover:bg-white/[0.06] hover:border-[#C9A96E]/40 hover:shadow-[0_0_20px_rgba(201,169,110,0.12)] transition-all duration-300 group cursor-pointer"
              >
                {/* Icon Container */}
                <div 
                  className="flex-shrink-0 w-11 h-11 rounded-xl bg-white/[0.03] border border-white/[0.05] flex items-center justify-center transition-colors duration-300 group-hover:bg-[#C9A96E]/15 group-hover:text-white"
                  style={{ color: COLORS.gold }}
                >
                  {link.icon}
                </div>

                {/* Text Labels */}
                <div className="flex-grow pl-4">
                  <h3 className="text-white text-sm font-semibold tracking-wide group-hover:text-[#C9A96E] transition-colors duration-300">
                    {link.title}
                  </h3>
                  <p className="text-white/40 text-xs mt-0.5 font-normal">
                    {link.subtitle}
                  </p>
                </div>

                {/* Arrow Icon */}
                <div className="text-white/20 group-hover:text-[#C9A96E] group-hover:translate-x-1 transition-all duration-300">
                  <ChevronRight size={16} />
                </div>
              </a>
            ))}
          </div>

        </main>

        {/* Footer Area */}
        <footer className="w-full text-white/30 text-[10px] text-center max-w-[320px] leading-relaxed pt-8 pb-10 z-10">
          <p className="font-semibold mb-1" style={{ color: COLORS.gold }}>Five Dimensions Real Estate Advisory</p>
          <p className="opacity-70">
            Bhutani Alphathum, A-707, Sector 90, Noida, UP 201305
          </p>
          <p className="mt-3 opacity-50">© 2026 Five Dimensions. All rights reserved.</p>
        </footer>

      </div>
    </>
  );
}
