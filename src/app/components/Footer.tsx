import { GOLD } from "./constants";

export function Footer() {
  return (
    <footer className="border-t py-14" style={{ borderColor: "rgba(201,168,76,0.1)" }}>
      <div className="max-w-[1680px] mx-auto px-6 lg:px-12 2xl:px-20">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ border: `1.5px solid ${GOLD}` }}>
                <span className="text-xs font-bold" style={{ color: GOLD, fontFamily: "'Fraunces', serif" }}>5D</span>
              </div>
              <span className="text-lg font-medium" style={{ fontFamily: "'Fraunces', serif" }}>5 Dimensions</span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs" style={{ color: "rgba(245,240,232,0.32)" }}>
              India's premier real estate investment consultancy — guiding discerning investors toward lasting wealth since 2012.
            </p>
          </div>
          <div>
            <p className="text-[9px] tracking-[0.25em] uppercase font-semibold mb-4"
              style={{ color: "rgba(245,240,232,0.4)" }}>Services</p>
            <div className="space-y-2.5">
              {["Portfolio Advisory", "Due Diligence", "Yield Optimisation", "NRI Desk"].map(s => (
                <a key={s} href="#services"
                  className="block text-sm transition-colors hover:text-white/65"
                  style={{ color: "rgba(245,240,232,0.3)" }}>{s}</a>
              ))}
            </div>
          </div>
          <div>
            <p className="text-[9px] tracking-[0.25em] uppercase font-semibold mb-4"
              style={{ color: "rgba(245,240,232,0.4)" }}>Contact</p>
            <div className="space-y-2.5">
              {[
                "+91 98765 43210",
                "invest@5dimensions.in",
                "Mumbai · Pune · Bangalore",
              ].map(c => (
                <p key={c} className="text-sm" style={{ color: "rgba(245,240,232,0.3)" }}>{c}</p>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8"
          style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
          <p className="text-xs" style={{ color: "rgba(245,240,232,0.18)" }}>
            © 2025 5 Dimensions Realty Advisors Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Use", "RERA Disclosures"].map(l => (
              <a key={l} href="#"
                className="text-xs transition-colors hover:text-white/40"
                style={{ color: "rgba(245,240,232,0.18)" }}>{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
