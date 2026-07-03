import { useState } from "react";
import { GOLD } from "./constants";

interface FormInputProps {
  label: string;
  type?: string;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
}

// --- Input field with gold focus effect ---
export function FormInput({
  label, type = "text", placeholder, value, onChange, required = false
}: FormInputProps) {
  const [focused, setFocused] = useState(false);
  return (
    <div>
      <label className="block text-xs tracking-[0.18em] uppercase font-semibold mb-2"
        style={{ color: "rgba(245,240,232,0.45)" }}>
        {label}{required && <span style={{ color: GOLD }}> *</span>}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={e => onChange(e.target.value)}
        required={required}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="w-full px-4 py-3.5 sm:px-5 sm:py-4 rounded-xl text-base text-white placeholder-white/20 outline-none transition-all duration-200"
        style={{
          background: "rgba(255,255,255,0.045)",
          border: `1px solid ${focused ? "rgba(201,168,76,0.55)" : "rgba(255,255,255,0.08)"}`,
          boxShadow: focused ? "0 0 0 3px rgba(201,168,76,0.08)" : "none",
        }}
      />
    </div>
  );
}
