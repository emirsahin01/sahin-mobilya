import About from "@/app/components/About";
import AnimatedBackground from "@/app/components/AnimatedBackground";
import Contact from "@/app/components/Contact";
import CursorGlow from "@/app/components/CursorGlow";
import FloatingParticles from "@/app/components/FloatingParticles";
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
    <main className="relative min-h-screen overflow-x-hidden bg-black text-white">
      <LoadingScreen />

      <AnimatedBackground />
      <FloatingParticles />
      <CursorGlow />

      <Navbar />

      <Hero />

      <RevealSection>
        <Stats />
      </RevealSection>

      <RevealSection delay={0.05}>
        <Services />
      </RevealSection>

      <RevealSection delay={0.1}>
        <Projects />
      </RevealSection>

      <RevealSection delay={0.15}>
        <About />
      </RevealSection>

      <RevealSection delay={0.2}>
        <Testimonials />
      </RevealSection>

      <RevealSection delay={0.25}>
        <Contact />
      </RevealSection>

      <RevealSection delay={0.3}>
        <MapSection />
      </RevealSection>

      <RevealSection delay={0.35}>
        <Footer />
      </RevealSection>

      <WhatsappButton />
    </main>
  );
}