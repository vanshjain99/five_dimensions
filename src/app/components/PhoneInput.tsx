import { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import { GOLD } from "./constants";
import { COUNTRY_CODES } from "./countryCodes";

interface PhoneInputProps {
  label: string;
  countryCode: string;
  onCountryChange: (v: string) => void;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
}

export function PhoneInput({
  label, countryCode, onCountryChange, value, onChange, required = false
}: PhoneInputProps) {
  const [focused, setFocused] = useState(false);
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const wrapRef = useRef<HTMLDivElement>(null);

  const selected = COUNTRY_CODES.find(c => c.dial === countryCode) ?? COUNTRY_CODES[0];
  const filtered = COUNTRY_CODES.filter(c =>
    c.name.toLowerCase().includes(query.toLowerCase()) || c.dial.includes(query)
  );

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setOpen(false);
        setQuery("");
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  return (
    <div>
      <label className="block text-xs tracking-[0.18em] uppercase font-semibold mb-2"
        style={{ color: "rgba(245,240,232,0.45)" }}>
        {label}{required && <span style={{ color: GOLD }}> *</span>}
      </label>
      <div className="flex gap-2">
        {/* Country code selector */}
        <div ref={wrapRef} className="relative flex-shrink-0">
          <button
            type="button"
            onClick={() => setOpen(o => !o)}
            className="flex items-center gap-1 sm:gap-1.5 h-full px-2.5 sm:px-3.5 py-3.5 sm:py-4 rounded-xl text-sm sm:text-base text-white outline-none transition-all duration-200"
            style={{
              background: "rgba(255,255,255,0.045)",
              border: `1px solid ${open || focused ? "rgba(201,168,76,0.55)" : "rgba(255,255,255,0.08)"}`,
              boxShadow: open ? "0 0 0 3px rgba(201,168,76,0.08)" : "none",
            }}
          >
            <span>{selected.flag}</span>
            <span style={{ color: "rgba(245,240,232,0.85)" }}>{selected.dial}</span>
            <ChevronDown size={14} style={{ color: GOLD, transform: open ? "rotate(180deg)" : "none", transition: "transform 0.2s" }} />
          </button>

          {open && (
            <div
              className="absolute z-20 mt-2 w-[min(18rem,85vw)] rounded-xl overflow-hidden"
              style={{
                background: "#0D1A2E",
                border: "1px solid rgba(201,168,76,0.25)",
                boxShadow: "0 24px 60px rgba(0,0,0,0.55)",
              }}
            >
              <div className="p-2.5" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                <input
                  autoFocus
                  value={query}
                  onChange={e => setQuery(e.target.value)}
                  placeholder="Search country or code"
                  className="w-full px-3 py-2 rounded-lg text-sm text-white placeholder-white/25 outline-none"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
                />
              </div>
              <div className="max-h-64 overflow-y-auto">
                {filtered.length === 0 && (
                  <p className="px-4 py-3 text-sm" style={{ color: "rgba(245,240,232,0.35)" }}>No matches</p>
                )}
                {filtered.map(c => (
                  <button
                    key={c.iso}
                    type="button"
                    onClick={() => { onCountryChange(c.dial); setOpen(false); setQuery(""); }}
                    className="w-full flex items-center gap-3 px-4 py-2.5 text-left text-sm transition-colors duration-150"
                    style={{
                      background: c.dial === countryCode ? "rgba(201,168,76,0.1)" : "transparent",
                      color: c.dial === countryCode ? GOLD : "rgba(245,240,232,0.75)",
                    }}
                  >
                    <span>{c.flag}</span>
                    <span className="flex-1 truncate">{c.name}</span>
                    <span style={{ color: "rgba(245,240,232,0.4)" }}>{c.dial}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Phone number field */}
        <input
          type="tel"
          placeholder="98765 43210"
          value={value}
          onChange={e => onChange(e.target.value)}
          required={required}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="flex-1 min-w-0 px-4 py-3.5 sm:px-5 sm:py-4 rounded-xl text-base text-white placeholder-white/20 outline-none transition-all duration-200"
          style={{
            background: "rgba(255,255,255,0.045)",
            border: `1px solid ${focused ? "rgba(201,168,76,0.55)" : "rgba(255,255,255,0.08)"}`,
            boxShadow: focused ? "0 0 0 3px rgba(201,168,76,0.08)" : "none",
          }}
        />
      </div>
    </div>
  );
}
