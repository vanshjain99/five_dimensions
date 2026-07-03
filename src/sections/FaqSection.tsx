import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { COLORS, FONT_SERIF } from '../utils/constants';
import { FAQS } from '../data/faqs';
import SectionHeader from '../components/ui/SectionHeader';
import { motion } from 'motion/react';
import type { FAQ } from '../types';

interface FaqItemProps {
  faq: FAQ;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}

/** Single accordion item — manages its own open/close visual state */
function FaqItem({ faq, index, isOpen, onToggle }: FaqItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="rounded-2xl border overflow-hidden"
      style={{ background: 'white', borderColor: COLORS.border }}
    >
      {/* Question row — acts as the accordion trigger */}
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left transition-colors"
        style={{ background: isOpen ? COLORS.ivory : 'transparent' }}
        aria-expanded={isOpen}
      >
        <span
          className="text-sm font-bold leading-snug"
          style={{ fontFamily: FONT_SERIF, color: COLORS.navy }}
        >
          {faq.q}
        </span>
        <ChevronDown
          size={18}
          className="flex-shrink-0 transition-transform duration-200"
          style={{
            color: COLORS.gold,
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
          }}
        />
      </button>

      {/* Answer — revealed when open */}
      {isOpen && (
        <div className="px-6 pb-5">
          <div className="pt-3 border-t" style={{ borderColor: 'rgba(26,39,68,0.07)' }}>
            <p className="text-sm leading-relaxed" style={{ color: `${COLORS.navy}88` }}>
              {faq.a}
            </p>
          </div>
        </div>
      )}
    </motion.div>
  );
}

/**
 * FAQ accordion section — only one item can be open at a time.
 * Open index is tracked in local state; toggling the same item closes it.
 */
export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="py-20 lg:py-28" style={{ background: '#FAF6F0' }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader overline="Questions" title="Frequently Asked" />
        <div className="space-y-3">
          {FAQS.map((faq, index) => (
            <FaqItem
              key={index}
              faq={faq}
              index={index}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
