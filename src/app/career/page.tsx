import Navbar from "@/components/Common/Navbar/Navbar";
import Footer from "@/components/Common/Footer/Footer";
import CareerPage from "@/components/CareerPage/CareerPage";

export default function Career() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <CareerPage />
      <Footer />
    </main>
  );
}
