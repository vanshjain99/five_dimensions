import { Star } from "lucide-react";
import { GOLD, subtleCard } from "./constants";

const testimonials = [
  {
    name: "Rahul Mehta", role: "Founder, Mehta Industries",
    text: "5 Dimensions helped me diversify from equities into commercial real estate with a 12% annual yield. Their due diligence process is exceptional — I felt completely protected at every step.",
    portfolio: "₹8.5 Cr invested"
  },
  {
    name: "Priya Krishnamurthy", role: "Senior Partner, Global Law Associates",
    text: "As an NRI based in Singapore, I was hesitant about investing in Indian property. The 5D team managed everything remotely — legal, registration, tenant sourcing. Truly seamless.",
    portfolio: "3 properties acquired"
  },
  {
    name: "Aditya Singhania", role: "CFO, Horizon Pharma",
    text: "The Elysian Towers recommendation has already appreciated 23% in 18 months. They never pushed a project that didn't fit my profile — that integrity is genuinely rare.",
    portfolio: "23% gain in 18 months"
  },
];

export function Testimonials() {
  return (
    <section className="py-[clamp(4.5rem,6vw+2rem,9rem)]" style={{ background: "rgba(255,255,255,0.018)" }}>
      <div className="max-w-[1680px] mx-auto px-6 lg:px-12 2xl:px-20">
        <div className="text-center mb-16">
          <p className="text-[10px] tracking-[0.22em] uppercase font-semibold mb-3" style={{ color: GOLD }}>
            Client Stories
          </p>
          <h2 className="font-light text-white leading-tight"
            style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(2rem,1.1rem + 3.2vw,3.25rem)" }}>
            Trusted by<br /><em>Discerning Investors</em>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map(({ name, role, text, portfolio }) => (
            <div key={name} className="p-7 rounded-2xl" style={{
              ...subtleCard,
              backdropFilter: "blur(8px)",
            }}>
              <div className="flex mb-5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={13} style={{ color: GOLD }} fill={GOLD} />
                ))}
              </div>
              <p className="text-sm leading-relaxed mb-6 italic"
                style={{ color: "rgba(245,240,232,0.6)" }}>"{text}"</p>
              <div className="flex items-center gap-3 pt-5"
                style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                <div className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0"
                  style={{
                    background: "rgba(201,168,76,0.18)",
                    border: "1px solid rgba(201,168,76,0.3)",
                    color: GOLD,
                    fontFamily: "'Fraunces', serif",
                  }}>
                  {name.charAt(0)}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-white truncate">{name}</p>
                  <p className="text-xs truncate" style={{ color: "rgba(245,240,232,0.35)" }}>{role}</p>
                </div>
                <p className="text-xs font-semibold flex-shrink-0 text-right"
                  style={{ color: GOLD }}>{portfolio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
