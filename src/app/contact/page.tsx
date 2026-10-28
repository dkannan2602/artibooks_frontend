import Navbar from "@/components/Common/Navbar/Navbar";
import Footer from "@/components/Common/Footer/Footer";
import ContactPage from "@/components/ContactPage/ContactPage";

export default function Contact() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <ContactPage />
      <Footer />
    </main>
  );
}
