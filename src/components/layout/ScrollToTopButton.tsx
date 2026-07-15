import { useEffect, useState } from 'react';
import { ChevronUp } from 'lucide-react';
import { COLORS } from '../../utils/constants';

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when page is scrolled down more than 400px
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-50 flex h-9 w-9 items-center justify-center rounded-full text-white shadow-lg transition-all duration-300 ease-in-out hover:scale-110 active:scale-95 md:bottom-8 md:right-8 md:h-10 md:w-10 ${
        isVisible
          ? 'translate-y-0 opacity-100 pointer-events-auto'
          : 'translate-y-4 opacity-0 pointer-events-none'
      }`}
      style={{
        backgroundColor: COLORS.navy,
        boxShadow: '0 4px 14px rgba(26, 39, 104, 0.25)',
      }}
      aria-label="Scroll to top"
      title="Scroll to top"
    >
      <ChevronUp className="h-4 w-4 stroke-[2.5] md:h-5 md:w-5" />
    </button>
  );
}
