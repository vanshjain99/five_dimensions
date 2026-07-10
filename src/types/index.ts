import type { LucideIcon } from 'lucide-react';

/** A single key metric displayed in the stats bar */
export interface Stat {
  value: string;
  label: string;
}

/** A featured investment property card */
export interface Opportunity {
  type: 'Commercial' | 'Luxury' | 'Plots' | 'Residential';
  title: string;
  location: string;
  price: string;
  returns: string;
  tag: string;
  image: string;
  alt: string;
}

/** A "Why Choose Us" feature card */
export interface Reason {
  icon: LucideIcon;
  title: string;
  desc: string;
}

/** A step in the investment process timeline */
export interface ProcessStep {
  step: string;
  title: string;
  desc: string;
}

/** A client testimonial */
export interface Testimonial {
  name: string;
  role: string;
  text: string;
  rating: number;
  /** Two-letter initials rendered inside the avatar circle */
  initials: string;
}



/** A FAQ accordion item */
export interface FAQ {
  q: string;
  a: string;
}

/** A leadership team member */
export interface Leader {
  name: string;
  designation: string;
  bio: string;
  image: string;
  alt: string;
}

/** A real estate developer partner shown in the logo strip */
export interface BuilderPartner {
  name: string;
  Logo: React.ComponentType<{ className?: string }>;
}

/** Navigation link entry */
export interface NavLink {
  label: string;
  href: string;
}

/** Controlled state for the consultation form */
export interface ConsultationFormData {
  name: string;
  phone: string;
  email: string;
  budget: string;
  propertyTypes: string[];
}


export interface ConsultationFormData {
  name: string;
  phone: string;
  countryCode: string; // e.g. "+91"
  email: string;
  budget: string;
  propertyTypes: string[];
}

/** Active filter state for the opportunities page */
export interface OpportunityFilters {
  type: string;
  city: string;
  budget: string;
  status: string;
  sortBy: string;
}

/** A single block of rich content inside an insight article */
export interface InsightContentBlock {
  type: 'heading' | 'paragraph' | 'bullets' | 'quote' | 'image';
  text?: string;
  items?: string[];
  src?: string;
  alt?: string;
}

/** A market insight article card */
export interface Insight {
  id: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  /** ISO date string used for sorting — the human-readable `date` above is derived from this */
  publishedAt: string;
  readTime: string;
  image: string;
  alt: string;
  content: InsightContentBlock[];
  author: string;
  sourceUrl?: string;
  views?: number;
}