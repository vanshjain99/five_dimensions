import { Check } from 'lucide-react';
import { COLORS } from '../../utils/constants';

interface PropertyTypeSelectorProps {
  /** Full list of available property type options */
  options: readonly string[];
  /** Currently selected types */
  selected: string[];
  /** Called when the user toggles a type on or off */
  onChange: (types: string[]) => void;
}

/**
 * Multi-select grid of property type toggle buttons.
 * Each button acts as a styled checkbox — selected state is tracked by the parent.
 */
export default function PropertyTypeSelector({
  options,
  selected,
  onChange,
}: PropertyTypeSelectorProps) {
  /** Toggle a single type in/out of the selected array */
  const handleToggle = (type: string) => {
    onChange(
      selected.includes(type)
        ? selected.filter((t) => t !== type)
        : [...selected, type]
    );
  };

  return (
    <div className="grid grid-cols-2 gap-2">
      {options.map((type) => {
        const isSelected = selected.includes(type);
        return (
          <button
            key={type}
            type="button"
            onClick={() => handleToggle(type)}
            className="flex items-center gap-2 px-3 py-2.5 rounded-xl text-sm font-medium transition-all"
            style={{
              border: `1.5px solid ${isSelected ? COLORS.gold : '#E8E4DC'}`,
              background: isSelected ? `${COLORS.gold}14` : COLORS.ivory,
              color: isSelected ? COLORS.navy : `${COLORS.navy}77`,
            }}
            aria-pressed={isSelected}
          >
            {/* Custom checkbox indicator */}
            <span
              className="w-4 h-4 rounded flex items-center justify-center flex-shrink-0 transition-all"
              style={{
                border: `1.5px solid ${isSelected ? COLORS.gold : '#C8C3BB'}`,
                background: isSelected ? COLORS.gold : 'transparent',
              }}
            >
              {isSelected && <Check size={9} color="white" strokeWidth={3.5} />}
            </span>
            {type}
          </button>
        );
      })}
    </div>
  );
}
