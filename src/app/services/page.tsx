import Navbar from "@/components/Common/Navbar/Navbar";
import Footer from "@/components/Common/Footer/Footer";
import ServicePage from "@/components/ServicePage/ServicePage";

export default function Services() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <ServicePage />
      <Footer />
    </main>
  );
}
