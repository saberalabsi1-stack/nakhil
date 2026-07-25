import { FloatingActions } from "@/components/FloatingActions";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Contact } from "@/components/sections/Contact";
import { Hero } from "@/components/sections/Hero";
import { Process } from "@/components/sections/Process";
import { Projects } from "@/components/sections/Projects";
import { Services } from "@/components/sections/Services";
import { Testimonials } from "@/components/sections/Testimonials";
import { Varieties } from "@/components/sections/Varieties";
import { WhyUs } from "@/components/sections/WhyUs";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Varieties />
        <Projects />
        <Process />
        <WhyUs />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
