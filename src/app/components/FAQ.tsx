import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { GOLD, subtleCard } from "./constants";

const faqs = [
  {
    q: "What is the minimum investment threshold to work with 5 Dimensions?",
    a: "We typically work with investors with a minimum budget of ₹50 Lakhs. However, we evaluate each case individually — if you're at an earlier stage, our advisory team can still guide you on a structured wealth-building path."
  },
  {
    q: "How do you verify the projects you recommend?",
    a: "Every project undergoes a 47-point due diligence framework covering RERA compliance, title verification, developer track record, construction quality audit, demand-supply analysis, and IRR stress testing. We only recommend what we'd invest in ourselves."
  },
  {
    q: "Do you offer services for NRIs?",
    a: "Yes. We have a dedicated NRI Investment Desk specialising in FEMA compliance, repatriation of rental income and capital gains, power of attorney arrangements, and end-to-end remote transaction management."
  },
  {
    q: "What types of properties does 5 Dimensions advise on?",
    a: "We cover residential apartments, luxury villas, commercial office spaces, Grade-A warehousing, retail high streets, and development plots — always calibrated to your return expectations and risk tolerance."
  },
  {
    q: "Is the consultation truly free and without obligation?",
    a: "Completely. Our initial 45-minute session is fully complimentary. There's no pressure to transact, and our advisors are instructed never to hard-sell. Many clients consult us months before they're ready to invest."
  },
  {
    q: "How long does the full investment process take?",
    a: "From consultation to transaction execution, most clients close within 45–90 days. For NRIs or complex portfolio structures, it may take up to 120 days. We provide a clear timeline after the needs assessment."
  },
];

export function FAQ() {
  return (
    <section id="about" className="py-[clamp(4.5rem,6vw+2rem,9rem)]">
      <div className="max-w-3xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-14">
          <p className="text-[10px] tracking-[0.22em] uppercase font-semibold mb-3" style={{ color: GOLD }}>
            Common Questions
          </p>
          <h2 className="font-light text-white leading-tight"
            style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(2rem,1.1rem + 3.2vw,3.25rem)" }}>
            Frequently Asked<br /><em>Questions</em>
          </h2>
        </div>

        <Accordion.Root type="single" collapsible className="space-y-2.5">
          {faqs.map(({ q, a }, i) => (
            <Accordion.Item
              key={i}
              value={`item-${i}`}
              className="rounded-xl overflow-hidden"
              style={subtleCard}
            >
              <Accordion.Trigger
                className="w-full flex items-center justify-between px-6 py-5 text-left group cursor-pointer"
                style={{ background: "transparent" }}>
                <span className="text-sm font-medium pr-4 text-white/75 group-hover:text-white transition-colors">{q}</span>
                <ChevronDown
                  size={15}
                  className="flex-shrink-0 transition-transform duration-300 data-[state=open]:rotate-180"
                  style={{ color: GOLD }}
                />
              </Accordion.Trigger>
              <Accordion.Content
                className="overflow-hidden data-[state=open]:animate-[accordionDown_0.25s_ease] data-[state=closed]:animate-[accordionUp_0.25s_ease]">
                <div className="px-6 pb-5">
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(245,240,232,0.43)" }}>{a}</p>
                </div>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </section>
  );
}
