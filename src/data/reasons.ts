import { Shield, TrendingUp, Users, Award, Building2, Gem } from 'lucide-react';
import type { Reason } from '../types';

export const REASONS: Reason[] = [
  {
    icon: Shield,
    title: 'Vetted Investment-Grade Assets',
    desc: 'Every asset clears a 47-point due diligence checklist before we recommend it — legal, financial, and market integrity verified.',
  },
  {
    icon: TrendingUp,
    title: 'Data-Driven Market Intelligence',
    desc: 'Proprietary analytics and on-the-ground research give our clients an edge in identifying high-yield opportunities early.',
  },
  {
    icon: Users,
    title: 'Dedicated Relationship Managers',
    desc: 'A single senior advisor who knows your portfolio, goals, and risk appetite — available around the clock.',
  },
  {
    icon: Award,
    title: '15-Year Track Record',
    desc: 'A 98% client retention rate and consistent above-market returns speak louder than any promise we could make.',
  },
  {
    icon: Building2,
    title: 'Pan-India Portfolio Reach',
    desc: 'Commercial, residential, luxury, and land across Mumbai, Pune, Bengaluru, Hyderabad, and Delhi NCR.',
  },
  {
    icon: Gem,
    title: 'Bespoke Wealth Architecture',
    desc: "We don't sell properties. We engineer wealth strategies aligned to your life milestones and financial goals.",
  },
];
