import Navbar from "@/components/Common/Navbar/Navbar";
import Footer from "@/components/Common/Footer/Footer";
import DigitalArtworkPage from "@/components/ServicePage/DigitalArtworkPage";

export default function DigitalArtwork() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <DigitalArtworkPage />
      <Footer />
    </main>
  );
}
