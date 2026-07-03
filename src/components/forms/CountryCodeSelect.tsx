import { useState } from 'react';
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

  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      aria-label="Country code"
      className="w-[104px] flex-shrink-0 px-2.5 py-3 rounded-xl text-sm outline-none appearance-none cursor-pointer transition-all"
      style={{
        border: `1.5px solid ${focused ? COLORS.gold : '#E8E4DC'}`,
        background: COLORS.ivory,
        color: COLORS.navy,
      }}
    >
      {COUNTRY_CODES.map(({ name, dialCode, flag }) => (
        <option key={`${name}-${dialCode}`} value={dialCode} style={{ color: COLORS.navy }}>
          {flag} {dialCode}
        </option>
      ))}
    </select>
  );
}