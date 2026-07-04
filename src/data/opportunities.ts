import type { Opportunity } from '../types';

export const OPPORTUNITIES: Opportunity[] = [
  {
    type: 'Commercial',
    title: 'Bandra-Kurla Complex Office Tower',
    location: 'Mumbai, Maharashtra',
    price: '₹12.5 Cr',
    returns: '9.2% ROI',
    tag: 'Prime Location',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=500&h=340&fit=crop&auto=format&q=70',
    alt: 'Modern commercial office tower in Bandra-Kurla Complex, Mumbai',
  },
  {
    type: 'Luxury',
    title: 'Sea-View Penthouse Collection',
    location: 'Worli, Mumbai',
    price: '₹8.2 Cr',
    returns: '12.1% Appreciation',
    tag: 'High Demand',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=500&h=340&fit=crop&auto=format&q=70',
    alt: 'Luxury sea-view penthouse with panoramic ocean views in Worli',
  },
  {
    type: 'Plots',
    title: 'Integrated Township Plots',
    location: 'Navi Mumbai',
    price: '₹45 L',
    returns: '18% YoY Growth',
    tag: 'Fast Moving',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=500&h=340&fit=crop&auto=format&q=70',
    alt: 'Open township plots in Navi Mumbai with green surroundings',
  },
  {
    type: 'Residential',
    title: 'Luxury Gated Community',
    location: 'Powai, Mumbai',
    price: '₹3.8 Cr',
    returns: '8.7% Rental Yield',
    tag: 'Ready Possession',
    image: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?w=500&h=340&fit=crop&auto=format&q=70',
    alt: 'Luxury gated residential apartments in Powai with landscaped gardens',
  },
];