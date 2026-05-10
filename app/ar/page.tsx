import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Restoration from "@/components/Restoration";
import BeforeAfter from "@/components/BeforeAfter";
import Gallery from "@/components/Gallery";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function HomeAr() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Restoration />
        <BeforeAfter />
        <Gallery />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
