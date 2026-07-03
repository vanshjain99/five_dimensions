import { useState } from "react";
import type { ReactNode } from "react";

interface FormSelectProps {
  label: string;
  value: string;
  onChange: (v: string) => void;
  children: ReactNode;
  required?: boolean;
}

export function FormSelect({
  label, value, onChange, children, required = false
}: FormSelectProps) {
  const [focused, setFocused] = useState(false);
  return (
    <div>
      <label className="block text-xs tracking-[0.18em] uppercase font-semibold mb-2"
        style={{ color: "rgba(245,240,232,0.45)" }}>{label}</label>
      <select
        value={value}
        onChange={e => onChange(e.target.value)}
        required={required}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="w-full px-5 py-4 rounded-xl text-base outline-none appearance-none transition-all duration-200"
        style={{
          background: "rgba(255,255,255,0.045)",
          border: `1px solid ${focused ? "rgba(201,168,76,0.55)" : "rgba(255,255,255,0.08)"}`,
          color: value ? "#F5F0E8" : "rgba(255,255,255,0.25)",
          boxShadow: focused ? "0 0 0 3px rgba(201,168,76,0.08)" : "none",
        }}
      >
        {children}
      </select>
    </div>
  );
}
