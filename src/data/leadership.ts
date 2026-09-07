import type { Leader } from '../types';
import sachinImg from '../assets/sachin_img.avif';
import vansh_img from '../assets/vansh_avif.avif';

export const LEADERS: Leader[] = [
  {
    name: 'Sachin Jain',
    designation: 'Co-Founder & CEO',
    bio: 'Sachin Jain is the Co-Founder & CEO of 5 Dimensions, with over 10 years of experience in the real estate industry. A B.Tech graduate, he combines technical expertise with market knowledge to provide trusted real estate solutions and build lasting client relationships.',
    image: sachinImg,
    alt: 'Sachin Jain — Co-Founder and CEO of 5 Dimensions',
    imagePosition: 'center center',
  },
  {
    name: 'Vansh Jain',
    designation: 'Co-Founder & CTO',
    bio: 'Vansh Jain is the Co-Founder & CTO of 5 Dimensions. A B.Tech graduate with a strong passion for innovation and analytics, he applies digital knowledge and modern technology solutions to the real estate sector, transforming property discovery, investment analysis, and client engagement.',
    image: vansh_img,
    alt: 'Vansh Jain — Co-Founder and CTO of 5 Dimensions',
    imagePosition: 'center 0%',
  },
];