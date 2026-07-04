/**
 * Global design constants — colors, fonts, and shared static values.
 * Centralised here so any brand update touches one file.
 */

/** Brand colour palette matching theme.css tokens */
export const COLORS = {
  gold: '#C9A96E',
  goldDark: '#A8833F',
  navy: '#1A2744',
  navyLight: '#243659',
  navyDeep: '#0F1A2E',
  ivory: '#FAF8F5',
  ivoryWarm: '#FAF6F0',
  border: 'rgba(26,39,68,0.09)',
} as const;

/** Inline serif font — used where Tailwind font utilities don't apply (e.g. style prop) */
export const FONT_SERIF = "'Playfair Display', serif";

/** Unsplash hero background image — sized down + compressed for faster LCP on mobile */
export const HERO_IMAGE_URL =
  'https://images.unsplash.com/photo-1523374228107-6e44bd2b524e?w=1200&h=675&fit=crop&auto=format&q=60';

/** Investment property types available for multi-select in the consultation form */
export const PROPERTY_TYPES = ['Commercial', 'Residential', 'Plots', 'Luxury'] as const;

/** Budget range options for the consultation form dropdown */
export const BUDGET_OPTIONS = [
  'Under ₹50 Lakhs',
  '₹50L – ₹1 Crore',
  '₹1 Crore – ₹3 Crore',
  '₹3 Crore – ₹10 Crore',
  '₹10 Crore+',
] as const;


export const COUNTRY_CODES = [
  { name: 'India', dialCode: '+91', flag: '🇮🇳' },
  { name: 'United States', dialCode: '+1', flag: '🇺🇸' },
  { name: 'United Kingdom', dialCode: '+44', flag: '🇬🇧' },
  { name: 'UAE', dialCode: '+971', flag: '🇦🇪' },
  { name: 'Singapore', dialCode: '+65', flag: '🇸🇬' },
  { name: 'Canada', dialCode: '+1', flag: '🇨🇦' },
  { name: 'Australia', dialCode: '+61', flag: '🇦🇺' },
  { name: 'Saudi Arabia', dialCode: '+966', flag: '🇸🇦' },
  { name: 'Qatar', dialCode: '+974', flag: '🇶🇦' },
  { name: 'Germany', dialCode: '+49', flag: '🇩🇪' },
  { name: 'France', dialCode: '+33', flag: '🇫🇷' },
  { name: 'Hong Kong', dialCode: '+852', flag: '🇭🇰' },
] as const;