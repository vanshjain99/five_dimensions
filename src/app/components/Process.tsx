import { CheckCircle } from "lucide-react";
import { GOLD, subtleCard } from "./constants";

const steps = [
  {
    step: "01", title: "Free Consultation",
    desc: "A 45-minute call with a senior advisor to understand your investment goals, financial capacity, and timeline."
  },
  {
    step: "02", title: "Needs Assessment",
    desc: "Deep-dive portfolio review and a personalised investment thesis aligned with your objectives and tax profile."
  },
  {
    step: "03", title: "Curated Recommendations",
    desc: "A handpicked shortlist of 3–5 verified opportunities with full due diligence reports and IRR projections."
  },
  {
    step: "04", title: "Transaction Execution",
    desc: "End-to-end coordination of legal, financial, and registration formalities — completely managed by our team."
  },
  {
    step: "05", title: "Ongoing Portfolio Review",
    desc: "Quarterly performance reviews, market updates, and active management to protect and grow your wealth."
  },
];

export function Process() {
  return (
    <section id="process" className="py-[clamp(4.5rem,6vw+2rem,9rem)]">
      <div className="max-w-5xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <p className="text-[10px] tracking-[0.22em] uppercase font-semibold mb-3" style={{ color: GOLD }}>
            How It Works
          </p>
          <h2 className="font-light text-white leading-tight"
            style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(2rem,1.1rem + 3.2vw,3.25rem)" }}>
            Your Investment<br /><em>Journey</em>
          </h2>
        </div>

        <div className="space-y-4">
          {steps.map(({ step, title, desc }, i) => (
            <div key={step}
              className="flex gap-3.5 sm:gap-5 lg:gap-8 items-start p-4 sm:p-6 rounded-2xl transition-all duration-300 hover:border-[rgba(201,168,76,0.25)]"
              style={subtleCard}>
              <div className="flex-shrink-0 w-8 sm:w-12 text-right">
                <span className="text-xl sm:text-3xl font-light" style={{ fontFamily: "'Fraunces', serif", color: `rgba(201,168,76,${0.18 + i * 0.08})` }}>
                  {step}
                </span>
              </div>
              <div className="w-px self-stretch mt-1 flex-shrink-0"
                style={{ background: "rgba(201,168,76,0.12)" }} />
              <div className="flex-1 min-w-0">
                <h3 className="text-base sm:text-lg font-light text-white mb-1.5"
                  style={{ fontFamily: "'Fraunces', serif" }}>{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(245,240,232,0.43)" }}>{desc}</p>
              </div>
              <div className="hidden lg:flex w-8 h-8 rounded-full items-center justify-center flex-shrink-0 mt-0.5"
                style={{ border: "1px solid rgba(201,168,76,0.18)" }}>
                <CheckCircle size={14} style={{ color: GOLD }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
