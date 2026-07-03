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

/** A market insight article card */
export interface Insight {
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  alt: string;
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