import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Projects from "./components/Projects";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import MapSection from "./components/MapSection";
import Footer from "./components/Footer";
import WhatsappButton from "./components/WhatsappButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <About />
      <Testimonials />
      <Contact />
      <MapSection />
      <Footer />
      <WhatsappButton />
    </>
  );
}