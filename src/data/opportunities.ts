import type { Opportunity } from '../types';
import aceParkwayImg from '../assets/opportunities/ace-parkway-2.0.jpeg';
import experionSatoriImg from '../assets/opportunities/Experion-Satori.jpeg';
import farmhousesImg from '../assets/opportunities/Farmhouse-img.jpg';
import omaxeMallKaushambiImg from '../assets/opportunities/Omaxe-mall-kaushambi.jpeg';
import cloveCountyImg from '../assets/opportunities/Clove-county.jpeg';

/** Full opportunity catalogue — homepage shows first 4, /opportunities shows all */
export const OPPORTUNITIES: Opportunity[] = [
  {
    id: 'ace-parkway-2-0',
    type: 'Luxury',
    title: 'ACE Parkway 2.0',
    location: 'Sector 150, Noida',
    city: 'Noida',
    price: '₹3.5 Cr *',
    priceValue: 350,
    returns: '',
    roiValue: 0,
    tag: 'Prime Location',
    status: 'Ready Possession',
    description:
      'Premium luxury residences in Sector 150 offering world-class amenities, green surroundings, and seamless connectivity.',
    image: aceParkwayImg,
    alt: 'Modern luxury apartments in Noida with state-of-the-art amenities',
  },
  {
    id: 'experion-satori',
    type: 'Luxury',
    title: 'Experion Satori',
    location: 'Sector 151, Noida',
    city: 'Noida',
    price: '₹3.5 Cr *',
    priceValue: 350,
    returns: '',
    roiValue: 0,
    tag: 'High Demand',
    status: 'Under Construction',
    description:
      'Ultra-luxury residences designed with spacious layouts, premium finishes, and lifestyle-focused amenities.',
    image: experionSatoriImg,
    alt: 'Contemporary luxury apartments in Noida with modern architecture and amenities',
  },
  {
    id: 'farmhouses-noida',
    type: 'Farmland',
    title: 'Farmhouses',
    location: 'Noida',
    city: 'Noida',
    price: '₹1.45 Cr - 5 Cr *',
    priceValue: 145,
    returns: '',
    roiValue: 0,
    tag: 'Luxurious Cottages',
    status: 'New Launch',
    description:
      'Exclusive farmhouse plots and luxury cottages offering peaceful living with excellent investment potential.',
    image: farmhousesImg,
    alt: 'Spacious farmhouses in Noida with lush greenery and modern amenities',
  },
  {
    id: 'omaxe-mall-kaushambi',
    type: 'Residential',
    title: 'Omaxe Mall Kaushambi',
    location: 'Kaushambi, UP',
    city: 'Ghaziabad',
    price: '₹80 Lakh - 5 Cr *',
    priceValue: 80,
    returns: '8% Rental Yield',
    roiValue: 8,
    tag: 'Connectivity Powerhouse',
    status: 'Under Construction',
    description:
      'Mixed-use development combining premium residences, retail, and entertainment with exceptional metro connectivity.',
    image: omaxeMallKaushambiImg,
    alt: 'Modern residential apartments in Kaushambi with excellent connectivity and amenities',
  },
  {
    id: 'clove-county',
    type: 'Residential',
    title: 'Clove County',
    location: 'Sector 151, Noida',
    city: 'Noida',
    price: '₹8 Cr - 12 Cr *',
    priceValue: 800,
    returns: '',
    roiValue: 0,
    tag: 'Ultra Luxury',
    status: 'Ready Possession',
    description:
      'Luxury residential community featuring spacious homes, landscaped greens, and premium lifestyle amenities.',
    image: cloveCountyImg,
    alt: 'Luxurious residential apartments in Noida with premium amenities and design',
  },
];

/** Subset used on the homepage featured section */
export const FEATURED_OPPORTUNITIES = OPPORTUNITIES.slice(0, 4);