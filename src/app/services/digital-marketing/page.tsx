import Navbar from "@/components/Common/Navbar/Navbar";
import Footer from "@/components/Common/Footer/Footer";
import DigitalMarketingPage from "@/components/ServicePage/DigitalMarketingPage";

export default function DigitalMarketing() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <DigitalMarketingPage />
      <Footer />
    </main>
  );
}
