import type { BuilderPartner } from '../types';

function LtLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 40" fill="currentColor" className={className} aria-hidden="true">
      <text x="0" y="28" fontSize="26" fontWeight="700" fontFamily="'Inter', sans-serif">
        {'L&T'}
      </text>
      <text x="0" y="38" fontSize="8" fontWeight="500" letterSpacing="0.2em" opacity="0.75">
        REALTY
      </text>
    </svg>
  );
}

function GodrejLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 140 40" fill="currentColor" className={className} aria-hidden="true">
      <text x="0" y="28" fontSize="22" fontWeight="600" fontFamily="'Inter', sans-serif" letterSpacing="0.04em">
        GODREJ
      </text>
      <text x="0" y="38" fontSize="7.5" fontWeight="500" letterSpacing="0.18em" opacity="0.75">
        PROPERTIES
      </text>
    </svg>
  );
}

function BhutaniLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 130 40" fill="currentColor" className={className} aria-hidden="true">
      <text x="0" y="28" fontSize="22" fontWeight="700" fontFamily="'Inter', sans-serif" letterSpacing="0.06em">
        BHUTANI
      </text>
      <text x="0" y="38" fontSize="7.5" fontWeight="500" letterSpacing="0.16em" opacity="0.75">
        INFRA
      </text>
    </svg>
  );
}

function DlfLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 40" fill="currentColor" className={className} aria-hidden="true">
      <text x="0" y="30" fontSize="30" fontWeight="800" fontFamily="'Inter', sans-serif" letterSpacing="0.08em">
        DLF
      </text>
    </svg>
  );
}

function PrestigeLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 150 40" fill="currentColor" className={className} aria-hidden="true">
      <text x="0" y="26" fontSize="20" fontWeight="600" fontFamily="'Playfair Display', serif">
        Prestige
      </text>
      <text x="0" y="38" fontSize="7.5" fontWeight="500" letterSpacing="0.2em" opacity="0.75">
        GROUP
      </text>
    </svg>
  );
}

function SobhaLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 110 40" fill="currentColor" className={className} aria-hidden="true">
      <text x="0" y="30" fontSize="26" fontWeight="600" fontFamily="'Playfair Display', serif" letterSpacing="0.04em">
        SOBHA
      </text>
    </svg>
  );
}

export const BUILDER_PARTNERS: BuilderPartner[] = [
  { name: 'L&T Realty', Logo: LtLogo },
  { name: 'Godrej Properties', Logo: GodrejLogo },
  { name: 'Bhutani Infra', Logo: BhutaniLogo },
  { name: 'DLF Limited', Logo: DlfLogo },
  { name: 'Prestige Group', Logo: PrestigeLogo },
  { name: 'Sobha Limited', Logo: SobhaLogo },
];
