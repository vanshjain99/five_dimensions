import { useState } from 'react';
import * as Select from '@radix-ui/react-select';
import { Check, ChevronDown } from 'lucide-react';
import { COLORS, COUNTRY_CODES } from '../../utils/constants';

interface CountryCodeSelectProps {
  value: string;
  onChange: (dialCode: string) => void;
}

/**
 * Compact dial-code dropdown (flag + code) meant to sit to the left of the
 * phone number input. Styled to match StyledInput/StyledSelect from FormField.
 */
export default function CountryCodeSelect({ value, onChange }: CountryCodeSelectProps) {
  const [focused, setFocused] = useState(false);
  const selected =
    COUNTRY_CODES.find((c) => c.dialCode === value) ?? COUNTRY_CODES[0];

  return (
    <Select.Root
      value={selected.name}
      onValueChange={(name) => {
        const country = COUNTRY_CODES.find((c) => c.name === name);
        if (country) onChange(country.dialCode);
      }}
      onOpenChange={(open) => setFocused(open)}
    >
      <Select.Trigger
        aria-label="Country code"
        className="flex-shrink-0 inline-flex items-center gap-1 w-fit min-w-0 px-1.5 py-3 rounded-xl text-sm outline-none cursor-pointer transition-all"
        style={{
          border: `1.5px solid ${focused ? COLORS.gold : '#E8E4DC'}`,
          background: COLORS.ivory,
          color: COLORS.navy,
        }}
      >
        <span className="whitespace-nowrap leading-none">
          {selected.flag} {selected.dialCode}
        </span>
        <Select.Icon asChild>
          <ChevronDown size={14} className="opacity-50 flex-shrink-0 ml-0.5" />
        </Select.Icon>
      </Select.Trigger>

      <Select.Portal>
        <Select.Content
          position="popper"
          sideOffset={4}
          className="z-50 overflow-hidden rounded-xl"
          style={{
            background: COLORS.ivory,
            border: `1.5px solid #E8E4DC`,
            boxShadow: `0 8px 24px ${COLORS.navy}18`,
            minWidth: '14rem',
          }}
        >
          <Select.Viewport className="p-1 max-h-52">
            {COUNTRY_CODES.map(({ name, dialCode, flag }) => (
              <Select.Item
                key={name}
                value={name}
                className="relative flex items-center gap-2 px-2.5 py-2 text-sm rounded-lg cursor-pointer outline-none select-none data-[highlighted]:bg-[#C9A96E22] data-[state=checked]:bg-[#C9A96E15]"
                style={{ color: COLORS.navy }}
              >
                <Select.ItemText asChild>
                  <span className="flex items-center gap-2 flex-1 min-w-0 pr-5">
                    <span className="flex-shrink-0">{flag}</span>
                    <span className="truncate">{name}</span>
                    <span className="flex-shrink-0 opacity-50 text-xs">{dialCode}</span>
                  </span>
                </Select.ItemText>
                <Select.ItemIndicator className="absolute right-2 inline-flex items-center">
                  <Check size={14} style={{ color: COLORS.gold }} />
                </Select.ItemIndicator>
              </Select.Item>
            ))}
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
}
