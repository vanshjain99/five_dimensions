import { GOLD } from "./constants";

const stats = [
  { value: "500+", label: "Verified Projects" },
  { value: "₹2,500 Cr+", label: "Investment Managed" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "12+", label: "Years of Excellence" },
];

export function TrustBar() {
  return (
    <section className="py-10 border-y" style={{ background: "rgba(201,168,76,0.03)", borderColor: "rgba(201,168,76,0.1)" }}>
      <div className="max-w-[1680px] mx-auto px-6 lg:px-12 2xl:px-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {stats.map(({ value, label }) => (
            <div key={label} className="text-center">
              <div className="font-medium mb-1"
                style={{ fontFamily: "'Fraunces', serif", color: GOLD, fontSize: "clamp(1.75rem,1.2rem + 2vw,2.5rem)" }}>{value}</div>
              <div className="text-sm tracking-wide" style={{ color: "rgba(245,240,232,0.38)" }}>{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
