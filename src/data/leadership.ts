import type { Leader } from '../types';
import sachinImg from '../assets/sachin_img.jpeg';
import praveenImg from '../assets/praveen_img.jpeg';

export const LEADERS: Leader[] = [
  {
    name: 'Sachin Jain',
    designation: 'Co-Founder & CEO',
    bio: 'Sachin Jain is the Founder & CEO of 5 Dimensions, with over 10 years of experience in the real estate industry. A B.Tech graduate, he combines technical expertise with market knowledge to provide trusted real estate solutions and build lasting client relationships.',
    image: sachinImg,
    alt: 'Sachin Jain — Founder and CEO of 5 Dimensions',
  },
  {
    name: 'Praveen Kushwah',
    designation: 'Co-Founder & CEO',
    bio: 'Praveen Kushwah is the Co-Founder & CEO of 5 Dimensions, bringing over 15 years of experience in the real estate sector. His expertise in property consulting, market insights, and client-focused strategies has been instrumental in driving the company\'s growth and delivering exceptional service.',
    image: praveenImg,
    alt: 'Praveen Kushwah — Co-Founder and CEO of 5 Dimensions',
  },
];