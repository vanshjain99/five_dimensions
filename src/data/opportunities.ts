import type { Opportunity } from '../types';
import aceParkwayImg from '../assets/opportunities/ace-parkway-2.0.jpeg';
import experionSatoriImg from '../assets/opportunities/Experion-Satori.jpeg';
import farmhousesImg from '../assets/opportunities/Farmhouse-img.jpg';
import omaxeMallKaushambiImg from '../assets/opportunities/Omaxe-mall-kaushambi.jpeg';
import cloveCountyImg from '../assets/opportunities/Clove-county.jpeg';

export const OPPORTUNITIES: Opportunity[] = [
  {
    type: 'Luxury',
    title: 'ACE Parkway 2.0',
    location: 'Sector 150, Noida',
    price: '₹3.5 Cr *',
    returns: '',
    tag: 'Prime Location',
    image: aceParkwayImg,
    alt: 'Modern luxury apartments in Noida with state-of-the-art amenities',
  },
  {
    type: 'Luxury',
    title: 'Experion Satori',
    location: 'Sector 151, Noida',
    price: '₹3.5 Cr *',
    returns: '',
    tag: 'High Demand',
    image: experionSatoriImg,
    alt: 'Contemporary luxury apartments in Noida with modern architecture and amenities',
  },
  {
    type: 'Farmland',
    title: 'Farmhouses',
    location: 'Noida',
    price: '₹1.45 Cr - 5 Cr *',
    returns: '',
    tag: 'Luxurious Cottages',
    image: farmhousesImg,
    alt: 'Spacious farmhouses in Noida with lush greenery and modern amenities',
  },
  {
    type: 'Residential',
    title: 'Omaxe Mall Kaushambi',
    location: 'Kaushambi, UP',
    price: '₹80 Lakh - 5 Cr *',
    returns: '8% Rental Yield',
    tag: 'Connectivity Powerhouse',
    image: omaxeMallKaushambiImg,
    alt: 'Modern residential apartments in Kaushambi with excellent connectivity and amenities',
  },
  // {
  //   type: 'Residential',
  //   title: 'Clove County',
  //   location: 'Sector 151, Noida',
  //   price: '₹8 Cr - 12 Cr *',
  //   returns: '',
  //   tag: 'Ultra Luxury',
  //   image: cloveCountyImg,
  //   alt: 'Luxurious residential apartments in Noida with premium amenities and design',
  // },
];