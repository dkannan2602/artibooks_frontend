import Navbar from "@/components/Common/Navbar/Navbar";
import Footer from "@/components/Common/Footer/Footer";
import TypesettingPage from "@/components/ServicePage/TypesettingPage";

export default function Typesetting() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <TypesettingPage />
      <Footer />
    </main>
  );
}
