import { useState } from 'react';
import { COLORS } from '../../utils/constants';

interface FormFieldProps {
  label: string;
  /** Marks the field as required — renders a gold asterisk next to the label */
  required?: boolean;
  /** Shows "(optional)" hint when the field is not required */
  showOptional?: boolean;
  children: React.ReactNode;
}

/**
 * Labelled form field wrapper. Handles the consistent label style and
 * optional/required hints used across all consultation form inputs.
 */
export function FormField({ label, required, showOptional, children }: FormFieldProps) {
  return (
    <div>
      <label
        className="block text-xs font-semibold uppercase tracking-widest mb-1.5"
        style={{ color: COLORS.navy }}
      >
        {label}
        {required && (
          <span className="ml-0.5" style={{ color: COLORS.gold }}>
            {' '}*
          </span>
        )}
        {showOptional && !required && (
          <span
            className="text-xs normal-case tracking-normal font-normal ml-1"
            style={{ color: `${COLORS.navy}55` }}
          >
            (optional)
          </span>
        )}
      </label>
      {children}
    </div>
  );
}

interface StyledInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Forwarded to the underlying <input> */
}

/** Styled text/tel/email input that highlights gold on focus */
export function StyledInput({ className = '', ...props }: StyledInputProps) {
  const [focused, setFocused] = useState(false);

  return (
    <input
      {...props}
      className={`w-full px-4 py-3 rounded-xl text-sm outline-none transition-all ${className}`}
      style={{
        border: `1.5px solid ${focused ? COLORS.gold : '#E8E4DC'}`,
        background: COLORS.ivory,
        color: COLORS.navy,
      }}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
    />
  );
}

interface StyledSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  hasValue?: boolean;
}

/** Styled select dropdown that highlights gold on focus */
export function StyledSelect({ hasValue, children, className = '', ...props }: StyledSelectProps) {
  const [focused, setFocused] = useState(false);

  return (
    <select
      {...props}
      className={`w-full px-4 py-3 rounded-xl text-sm outline-none appearance-none cursor-pointer transition-all ${className}`}
      style={{
        border: `1.5px solid ${focused ? COLORS.gold : '#E8E4DC'}`,
        background: COLORS.ivory,
        color: hasValue ? COLORS.navy : `${COLORS.navy}66`,
      }}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
    >
      {children}
    </select>
  );
}
