import { ArrowRight, MapPin } from "lucide-react";
import { GOLD, subtleCard } from "./constants";
import { HoverCard } from "./HoverCard";

const properties = [
  {
    tag: "Residential", name: "Elysian Towers", location: "Pune, Maharashtra",
    roi: "14–18% IRR", price: "From ₹1.2 Cr",
    img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&h=400&fit=crop&auto=format",
    badge: "Hot"
  },
  {
    tag: "Commercial", name: "Nexus Business Park", location: "Whitefield, Bangalore",
    roi: "10–13% Yield", price: "From ₹3.5 Cr",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop&auto=format",
    badge: "New"
  },
  {
    tag: "Plots", name: "Horizon Estates", location: "Hyderabad, Telangana",
    roi: "20–25% Appreciation", price: "From ₹45 L",
    img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&h=400&fit=crop&auto=format",
    badge: null
  },
  {
    tag: "Luxury", name: "Riviera Villas", location: "North Goa",
    roi: "18% + Rental Income", price: "From ₹6.5 Cr",
    img: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=600&h=400&fit=crop&auto=format",
    badge: "Limited"
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-[clamp(4.5rem,6vw+2rem,9rem)]">
      <div className="max-w-[1680px] mx-auto px-6 lg:px-12 2xl:px-20">
        <div className="mb-14 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <p className="text-[10px] tracking-[0.22em] uppercase font-semibold mb-3" style={{ color: GOLD }}>
              Curated Portfolio
            </p>
            <h2 className="font-light text-white leading-tight"
            style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(2rem,1.1rem + 3.2vw,3.25rem)" }}>
              Featured Investment<br /><em>Opportunities</em>
            </h2>
          </div>
          <a href="#consult"
            className="inline-flex items-center gap-2 text-sm tracking-wide transition-colors border-b pb-0.5 self-start lg:self-auto"
            style={{ color: GOLD, borderColor: "rgba(201,168,76,0.35)" }}>
            View All Properties <ArrowRight size={14} />
          </a>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
          {properties.map(({ tag, name, location, roi, price, img, badge }) => (
            <HoverCard key={name}
              className="rounded-2xl overflow-hidden cursor-pointer"
              style={subtleCard}
              hoverBg="rgba(255,255,255,0.04)">
              <div className="relative h-44 overflow-hidden" style={{ background: "#0D1A2E" }}>
                <img src={img} alt={name}
                  className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
                  style={{ opacity: 0.72 }} />
                <div className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(5,12,26,0.75) 0%, transparent 55%)" }} />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-bold text-[#050C1A]"
                  style={{ background: GOLD }}>{tag}</span>
                {badge && (
                  <span className="absolute top-3 right-3 px-2 py-1 rounded-full text-[11px] font-medium text-white border"
                    style={{ background: "rgba(255,255,255,0.1)", backdropFilter: "blur(8px)", borderColor: "rgba(255,255,255,0.2)" }}>
                    {badge}
                  </span>
                )}
              </div>
              <div className="p-5">
                <h3 className="text-lg font-light text-white mb-1.5"
                  style={{ fontFamily: "'Fraunces', serif" }}>{name}</h3>
                <div className="flex items-center gap-1.5 text-xs mb-5"
                  style={{ color: "rgba(245,240,232,0.38)" }}>
                  <MapPin size={10} /><span>{location}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold" style={{ color: GOLD }}>{roi}</p>
                    <p className="text-xs mt-0.5" style={{ color: "rgba(245,240,232,0.35)" }}>{price}</p>
                  </div>
                  <div className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300"
                    style={{ border: "1px solid rgba(255,255,255,0.1)" }}>
                    <ArrowRight size={12} style={{ color: "rgba(245,240,232,0.4)" }} />
                  </div>
                </div>
              </div>
            </HoverCard>
          ))}
        </div>
      </div>
    </section>
  );
}
