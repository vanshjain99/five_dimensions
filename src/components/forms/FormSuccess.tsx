import { Check } from 'lucide-react';
import { COLORS, FONT_SERIF } from '../../utils/constants';

interface FormSuccessProps {
  /** First name of the submitted user — used in the personalised thank-you message */
  firstName: string;
}

const NEXT_STEPS = [
  '30-minute strategy call',
  'No-pressure conversation',
  'Tailored opportunity briefing',
];

/**
 * Success state rendered inside the consultation form card after submission.
 * Shows a gold checkmark, a personalised message, and a "what to expect" list.
 */
export default function FormSuccess({ firstName }: FormSuccessProps) {
  return (
    <div className="px-6 py-12 text-center">
      {/* Gold checkmark circle */}
      <div
        className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
        style={{ background: `${COLORS.gold}1E` }}
      >
        <Check size={26} style={{ color: COLORS.gold }} />
      </div>

      <h3
        className="text-xl font-bold mb-2"
        style={{ fontFamily: FONT_SERIF, color: COLORS.navy }}
      >
        Thank You, {firstName}!
      </h3>
      <p className="text-sm leading-relaxed" style={{ color: `${COLORS.navy}77` }}>
        A senior 5 Dimensions advisor will call you within 24 business hours to discuss your
        investment goals.
      </p>

      {/* What to expect checklist */}
      <div className="mt-6 p-4 rounded-xl text-left" style={{ background: '#FAF6F0' }}>
        <p
          className="text-xs font-semibold uppercase tracking-widest mb-3"
          style={{ color: COLORS.gold }}
        >
          What to expect
        </p>
        {NEXT_STEPS.map((step) => (
          <div
            key={step}
            className="flex items-center gap-2 text-sm mb-2"
            style={{ color: `${COLORS.navy}88` }}
          >
            <Check size={13} style={{ color: COLORS.gold }} />
            {step}
          </div>
        ))}
      </div>
    </div>
  );
}
