import Navbar from "@/components/Common/Navbar/Navbar";
import Footer from "@/components/Common/Footer/Footer";
import PublishingProductionPage from "@/components/ServicePage/PublishingProductionPage";

export default function PublishingProduction() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <PublishingProductionPage />
      <Footer />
    </main>
  );
}
