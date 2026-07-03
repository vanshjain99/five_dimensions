import { ArrowRight, Phone } from "lucide-react";
import { GOLD, NAVY, CTA_IMG, goldGradient } from "./constants";

export function FinalCTA() {
  return (
    <section id="contact" className="py-[clamp(4.5rem,6vw+2rem,9rem)] relative overflow-hidden">
      <div className="absolute inset-0" style={{ background: NAVY }}>
        <img src={CTA_IMG} alt="City skyline night"
          className="w-full h-full object-cover" style={{ opacity: 0.18 }} />
        <div className="absolute inset-0"
          style={{ background: "linear-gradient(to right, #050C1A 15%, rgba(5,12,26,0.82) 55%, #050C1A 100%)" }} />
      </div>

      {/* Gold glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "rgba(201,168,76,0.06)", filter: "blur(80px)" }} />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-10 text-center">
        <div className="mx-auto mb-8 w-16 h-px" style={{ background: GOLD }} />
        <h2 className="font-light text-white mb-6 leading-tight"
          style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(2.25rem,1.5rem + 3.5vw,3.75rem)" }}>
          Your Next Investment<br />Starts with<br />
          <em style={{ color: GOLD }}>One Conversation.</em>
        </h2>
        <p className="text-lg mb-10 max-w-sm mx-auto leading-relaxed"
          style={{ color: "rgba(245,240,232,0.42)" }}>
          Join over 1,200 investors who have built lasting wealth through the 5 Dimensions approach.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#consult"
            className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full font-bold text-sm tracking-wide text-[#050C1A] transition-all duration-300 hover:shadow-[0_0_40px_rgba(201,168,76,0.4)] active:scale-[0.98]"
            style={{ background: goldGradient }}>
            Book Free Consultation
            <ArrowRight size={15} />
          </a>
          <a href="tel:+911234567890"
            className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full font-semibold text-white text-sm tracking-wide transition-all duration-300 hover:border-[rgba(201,168,76,0.5)]"
            style={{ border: "1px solid rgba(245,240,232,0.18)" }}>
            <Phone size={14} />
            Call Us Directly
          </a>
        </div>
      </div>
    </section>
  );
}
