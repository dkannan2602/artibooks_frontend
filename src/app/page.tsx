import HeroSection from "@/components/HomePage/HeroSection/HeroSection";
import FeaturesStrip from "@/components/HomePage/FeaturesStrip/FeaturesStrip";
import AboutSection from "@/components/HomePage/AboutSection/AboutSection";
import ServicesSection from "@/components/HomePage/ServicesSection/ServicesSection";
import Navbar from "@/components/Common/Navbar/Navbar";
import Footer from "@/components/Common/Footer/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <FeaturesStrip />
      <AboutSection />
      <ServicesSection />
      <Footer />
    </main>
  );
}
