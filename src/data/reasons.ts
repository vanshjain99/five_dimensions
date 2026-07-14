import { Shield, TrendingUp, Users, Award, Building2, Gem } from 'lucide-react';
import type { Reason } from '../types';

export const REASONS: Reason[] = [
  {
    icon: Shield,
    title: '47-Point Legal Audit',
    desc: 'Every asset clears a rigorous 47-point checklist covering title search, developer liquidity, and RERA compliance before you see it.',
  },
  {
    icon: TrendingUp,
    title: 'Data-Driven Intelligence',
    desc: 'Proprietary market analytics and deep local research give you a distinct edge in identifying high-yield, off-market opportunities.',
  },
  {
    icon: Users,
    title: 'Confidential Advisor Service',
    desc: 'A single dedicated senior advisor manages your real estate portfolio, aligning every asset with your long-term goals.',
  },
  {
    icon: Award,
    title: 'Proven Growth Record',
    desc: 'Over ₹300 Cr in assets advised, a 90% client retention rate, and a track record of consistent above-market appreciation.',
  },
  {
    icon: Building2,
    title: 'Tier-1 Developer Access',
    desc: 'Direct institutional access to premium commercial and residential projects with L&T, Godrej, DLF, and Prestige.',
  },
  {
    icon: Gem,
    title: 'Bespoke Wealth Architecture',
    desc: 'We do not push standard property listings. We build customized, tax-optimized investment roadmaps tailored to your profile.',
  },
];
