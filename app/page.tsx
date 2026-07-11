import About from "@/app/components/About";
import Contact from "@/app/components/Contact";
import Footer from "@/app/components/Footer";
import Hero from "@/app/components/Hero";
import LoadingScreen from "@/app/components/LoadingScreen";
import MapSection from "@/app/components/MapSection";
import Navbar from "@/app/components/Navbar";
import Projects from "@/app/components/Projects";
import RevealSection from "@/app/components/RevealSection";
import Services from "@/app/components/Services";
import Stats from "@/app/components/Stats";
import Testimonials from "@/app/components/Testimonials";
import WhatsappButton from "@/app/components/WhatsappButton";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-black">
      <LoadingScreen />

      <Navbar />

      <Hero />

      <Stats />

      <RevealSection>
        <Services />
      </RevealSection>

      <RevealSection delay={0.05}>
        <Projects />
      </RevealSection>

      <RevealSection delay={0.05}>
        <About />
      </RevealSection>

      <RevealSection delay={0.05}>
        <Testimonials />
      </RevealSection>

      <RevealSection delay={0.05}>
        <Contact />
      </RevealSection>

      <RevealSection delay={0.05}>
        <MapSection />
      </RevealSection>

      <RevealSection>
        <Footer />
      </RevealSection>

      <WhatsappButton />
    </main>
  );
}