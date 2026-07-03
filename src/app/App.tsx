import { NAVY } from "./components/constants";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { TrustBar } from "./components/TrustBar";
import { Portfolio } from "./components/Portfolio";
import { Services } from "./components/Services";
import { Process } from "./components/Process";
import { Testimonials } from "./components/Testimonials";
import { FAQ } from "./components/FAQ";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div
      className="min-h-screen scroll-smooth overflow-x-hidden"
      style={{ background: NAVY, color: "#F5F0E8", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      <Navbar />
      <Hero />
      <TrustBar />
      <Portfolio />
      <Services />
      <Process />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}
