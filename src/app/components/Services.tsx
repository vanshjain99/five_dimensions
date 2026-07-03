import { BarChart3, Shield, TrendingUp, Users } from "lucide-react";
import { GOLD, subtleCard } from "./constants";
import { HoverCard } from "./HoverCard";

const services = [
  {
    icon: BarChart3, title: "Portfolio Advisory",
    desc: "Custom real estate portfolios built around your financial goals, risk profile, and investment horizon."
  },
  {
    icon: Shield, title: "Due Diligence",
    desc: "Rigorous 47-point legal, financial, and structural review of every property before a single rupee is committed."
  },
  {
    icon: TrendingUp, title: "Yield Optimisation",
    desc: "Maximise rental returns through strategic tenant acquisition, lease structuring, and market timing."
  },
  {
    icon: Users, title: "NRI Investment Desk",
    desc: "End-to-end support for non-resident Indians — FEMA compliance, repatriation, and remote transaction management."
  },
];

export function Services() {
  return (
    <section id="services" className="py-[clamp(4.5rem,6vw+2rem,9rem)]"
      style={{ background: "rgba(255,255,255,0.018)" }}>
      <div className="max-w-[1680px] mx-auto px-6 lg:px-12 2xl:px-20">
        <div className="text-center mb-16">
          <p className="text-[10px] tracking-[0.22em] uppercase font-semibold mb-3" style={{ color: GOLD }}>
            What We Offer
          </p>
          <h2 className="font-light text-white leading-tight"
            style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(2rem,1.1rem + 3.2vw,3.25rem)" }}>
            Institutional-Grade<br /><em>Advisory Services</em>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
          {services.map(({ icon: Icon, title, desc }) => (
            <HoverCard key={title}
              className="p-7 rounded-2xl transition-all duration-300"
              style={subtleCard}
              hoverBg="rgba(201,168,76,0.045)"
              hoverBorder="rgba(201,168,76,0.22)">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-6"
                style={{ border: "1px solid rgba(201,168,76,0.22)" }}>
                <Icon size={20} style={{ color: GOLD }} />
              </div>
              <h3 className="text-xl font-light text-white mb-3"
                style={{ fontFamily: "'Fraunces', serif" }}>{title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(245,240,232,0.43)" }}>{desc}</p>
            </HoverCard>
          ))}
        </div>
      </div>
    </section>
  );
}
