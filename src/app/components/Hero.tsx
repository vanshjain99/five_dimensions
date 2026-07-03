import { useState } from "react";
import {
  Shield, TrendingUp, Users, Headphones, ArrowRight, CheckCircle
} from "lucide-react";
import { GOLD, NAVY, HERO_IMG, glassCard, goldGradient } from "./constants";
import { FormInput } from "./FormInput";
import { PhoneInput } from "./PhoneInput";
import { FormSelect } from "./FormSelect";

export function Hero() {
  const [form, setForm] = useState({
    name: "", phone: "", countryCode: "+91", email: "", budget: "", interested: [] as string[],
  });
  const [submitted, setSubmitted] = useState(false);

  const set = (k: keyof typeof form) => (v: string) => setForm(p => ({ ...p, [k]: v }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 10000);
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0" style={{ background: NAVY }}>
        <img
          src={HERO_IMG}
          alt="Premium city skyline at night"
          className="w-full h-full object-cover"
          style={{ opacity: 0.32 }}
        />
        <div className="absolute inset-0"
          style={{ background: "linear-gradient(100deg, #050C1A 38%, rgba(5,12,26,0.65) 65%, rgba(5,12,26,0.35) 100%)" }} />
        <div className="absolute inset-0"
          style={{ background: "linear-gradient(to top, #050C1A 0%, transparent 40%, rgba(5,12,26,0.25) 100%)" }} />
      </div>

      {/* Decorative gold particles */}
      {[
        { top: "28%", left: "22%", size: 2, opacity: 0.35 },
        { top: "18%", right: "30%", size: 3, opacity: 0.18 },
        { bottom: "32%", left: "38%", size: 1.5, opacity: 0.28 },
        { top: "45%", right: "18%", size: 2, opacity: 0.22 },
      ].map((p, i) => (
        <div key={i} className="absolute rounded-full pointer-events-none"
          style={{ ...p, width: p.size, height: p.size, background: GOLD, opacity: p.opacity }} />
      ))}

      <div className="relative z-10 max-w-[1680px] mx-auto px-6 lg:px-12 2xl:px-20 w-full pt-28 pb-20">
        <div className="grid lg:grid-cols-[1fr_580px] gap-14 xl:gap-20 items-center">

          {/* Left */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-10" style={{ background: GOLD }} />
              <span className="text-[10px] tracking-[0.22em] uppercase font-semibold"
                style={{ color: GOLD }}>
                India's Premier Property Advisory
              </span>
            </div>

            <h1 className="font-light leading-[1.08] text-white mb-7"
              style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(2.6rem, 5vw, 4.25rem)" }}>
              Invest in the<br />
              <em style={{ color: GOLD, fontStyle: "italic" }}>Right Property.</em><br />
              Build Lasting Wealth.
            </h1>

            <p className="text-lg leading-relaxed mb-10 font-light max-w-[420px]"
              style={{ color: "rgba(245,240,232,0.5)" }}>
              5 Dimensions guides high-net-worth investors to exceptional real estate opportunities across India's most strategic markets — with precision, integrity, and institutional-grade research.
            </p>

            {/* Trust points */}
            <div className="grid grid-cols-2 gap-3 mb-11 max-w-[400px]">
              {[
                { icon: Shield, label: "Verified Projects" },
                { icon: TrendingUp, label: "High ROI Portfolios" },
                { icon: Users, label: "Expert Guidance" },
                { icon: Headphones, label: "End-to-End Support" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ border: `1px solid rgba(201,168,76,0.5)` }}>
                    <Icon size={10} style={{ color: GOLD }} />
                  </div>
                  <span className="text-sm" style={{ color: "rgba(245,240,232,0.65)" }}>{label}</span>
                </div>
              ))}
            </div>

            <a href="#consult"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-semibold text-sm tracking-wide text-[#050C1A] transition-all duration-300 hover:shadow-[0_0_35px_rgba(201,168,76,0.38)] active:scale-[0.98]"
              style={{ background: goldGradient }}>
              Explore Opportunities
              <ArrowRight size={15} />
            </a>
          </div>

          {/* Right: Consultation Form */}
          <div id="consult" className="relative">
            <div className="absolute -inset-6 rounded-3xl"
              style={{ background: "rgba(201,168,76,0.04)", filter: "blur(32px)" }} />

            <div className="relative rounded-2xl p-10 lg:p-12" style={glassCard}>
              <div className="mb-8">
                <p className="text-xs tracking-[0.2em] uppercase font-semibold mb-2.5"
                  style={{ color: GOLD }}>Complimentary Session</p>
                <h2 className="text-3xl lg:text-[2.25rem] font-light text-white mb-2 leading-tight"
                  style={{ fontFamily: "'Fraunces', serif" }}>
                  Book Your Free Consultation
                </h2>
                <p className="text-base" style={{ color: "rgba(245,240,232,0.35)" }}>
                  Speak with a senior advisor within 24 hours.
                </p>
              </div>

              {submitted ? (
                <div className="py-10 flex flex-col items-center text-center gap-4">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center"
                    style={{ border: `1px solid rgba(201,168,76,0.4)` }}>
                    <CheckCircle size={28} style={{ color: GOLD }} />
                  </div>
                  <p className="text-white font-medium text-lg" style={{ fontFamily: "'Fraunces', serif" }}>
                    Consultation Booked!
                  </p>
                  <p className="text-sm" style={{ color: "rgba(245,240,232,0.45)" }}>
                    Our team will contact you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <FormInput label="Full Name" placeholder="Arjun Sharma" value={form.name} onChange={set("name")} required />
                  <PhoneInput label="Phone Number" countryCode={form.countryCode} onCountryChange={set("countryCode")} value={form.phone} onChange={set("phone")} required />
                  <FormInput label="Email Address" type="email" placeholder="arjun@example.com" value={form.email} onChange={set("email")} required />

                  <FormSelect label="Investment Budget" value={form.budget} onChange={set("budget")} required>
                    <option value="" disabled style={{ background: NAVY }}>Select Budget Range</option>
                    <option value="50L-1Cr" style={{ background: NAVY }}>₹50 Lakhs – ₹1 Crore</option>
                    <option value="1Cr-3Cr" style={{ background: NAVY }}>₹1 Crore – ₹3 Crores</option>
                    <option value="3Cr-10Cr" style={{ background: NAVY }}>₹3 Crores – ₹10 Crores</option>
                    <option value="10Cr+" style={{ background: NAVY }}>₹10 Crores+</option>
                  </FormSelect>

                  <div>
                    <label className="block text-xs tracking-[0.18em] uppercase font-semibold mb-2"
                      style={{ color: "rgba(245,240,232,0.45)" }}>Interested In <span style={{ color: "rgba(245,240,232,0.3)", textTransform: "none", letterSpacing: "normal" }}>(select all that apply)</span></label>
                    <div className="grid grid-cols-2 gap-2.5">
                      {["Residential", "Commercial", "Plots", "Luxury"].map(opt => {
                        const active = form.interested.includes(opt);
                        return (
                          <button key={opt} type="button"
                            onClick={() => setForm(p => ({
                              ...p,
                              interested: active
                                ? p.interested.filter(o => o !== opt)
                                : [...p.interested, opt],
                            }))}
                            className="flex items-center justify-center gap-1.5 px-4 py-3.5 rounded-xl text-sm font-semibold tracking-wide transition-all duration-200"
                            style={{
                              background: active ? "rgba(201,168,76,0.13)" : "rgba(255,255,255,0.04)",
                              border: `1px solid ${active ? "rgba(201,168,76,0.6)" : "rgba(255,255,255,0.08)"}`,
                              color: active ? GOLD : "rgba(245,240,232,0.45)",
                            }}>
                            {active && <CheckCircle size={14} />}
                            {opt}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <button type="submit"
                    className="w-full mt-3 py-[1.125rem] rounded-xl font-bold text-base tracking-wide text-[#050C1A] transition-all duration-300 hover:shadow-[0_0_32px_rgba(201,168,76,0.38)] active:scale-[0.98]"
                    style={{ background: goldGradient }}>
                    Book Free Consultation
                  </button>
                  <p className="text-center text-xs" style={{ color: "rgba(245,240,232,0.22)" }}>
                    No commitment required &middot; 100% confidential
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
        style={{ color: "rgba(245,240,232,0.25)" }}>
        <span className="text-[9px] tracking-[0.25em] uppercase">Scroll</span>
        <div className="w-px h-8" style={{ background: "linear-gradient(to bottom, rgba(245,240,232,0.3), transparent)" }} />
      </div>
    </section>
  );
}
