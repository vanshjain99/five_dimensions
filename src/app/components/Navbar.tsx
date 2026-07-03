import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { GOLD, goldGradient } from "./constants";

const navItems = ["About", "Portfolio", "Services", "Process", "Contact"];

export function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? "rgba(5,12,26,0.94)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(201,168,76,0.1)" : "none",
      }}
    >
      <div className="max-w-[1680px] mx-auto px-6 lg:px-12 2xl:px-20 flex items-center justify-between" style={{ height: "clamp(5.25rem,7.5vw,7.5rem)" }}>
        <a href="#hero" className="flex items-center gap-3.5 group">
          <div className="w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:bg-[#C9A84C]/10"
            style={{ border: `1.5px solid ${GOLD}` }}>
            <span className="text-[#C9A84C] text-base font-bold" style={{ fontFamily: "'Fraunces', serif" }}>5D</span>
          </div>
          <span className="text-2xl font-medium tracking-wide" style={{ fontFamily: "'Fraunces', serif" }}>
            5 Dimensions
          </span>
        </a>

        <div className="hidden md:flex items-center gap-9">
          {navItems.map(item => (
            <a key={item} href={`#${item.toLowerCase()}`}
              className="text-base tracking-wide transition-colors duration-200 hover:text-[#C9A84C]"
              style={{ color: "rgba(245,240,232,0.55)" }}>
              {item}
            </a>
          ))}
          <a href="#consult"
            className="px-7 py-3.5 rounded-full text-base font-medium tracking-wide transition-all duration-300 hover:bg-[#C9A84C] hover:text-[#050C1A]"
            style={{ border: `1px solid ${GOLD}`, color: GOLD }}>
            Free Consultation
          </a>
        </div>

        <button className="md:hidden" onClick={() => setNavOpen(!navOpen)}
          style={{ color: "rgba(245,240,232,0.7)" }}>
          {navOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {navOpen && (
        <div className="md:hidden px-6 py-6 flex flex-col gap-5 border-t"
          style={{ background: "rgba(5,12,26,0.97)", borderColor: "rgba(201,168,76,0.1)" }}>
          {navItems.map(item => (
            <a key={item} href={`#${item.toLowerCase()}`}
              className="text-lg tracking-wide"
              style={{ color: "rgba(245,240,232,0.65)" }}
              onClick={() => setNavOpen(false)}>
              {item}
            </a>
          ))}
          <a href="#consult"
            className="inline-flex items-center justify-center py-3.5 rounded-full text-sm font-semibold text-[#050C1A] mt-2"
            style={{ background: goldGradient }}>
            Book Free Consultation
          </a>
        </div>
      )}
    </nav>
  );
}
