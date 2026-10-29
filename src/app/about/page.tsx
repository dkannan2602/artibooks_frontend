import Navbar from "@/components/Common/Navbar/Navbar";
import Footer from "@/components/Common/Footer/Footer";
import AboutPage from "@/components/AboutPage/AboutPage";

export default function About() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <AboutPage />
      <Footer />
    </main>
  );
}
