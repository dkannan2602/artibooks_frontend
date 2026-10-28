import Navbar from "@/components/Common/Navbar/Navbar";
import Footer from "@/components/Common/Footer/Footer";
import { Button } from "@/components/ui/button";
import { IconArrowRight, IconCheck } from "@tabler/icons-react";

const features = [
  "InDesign & QuarkXPress typesetting",
  "Multi-language and script support",
  "Complex table and figure handling",
  "Index and TOC generation",
  "Print-ready PDF output",
  "Consistent house-style application",
];

export default function TypesettingPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section
        className="relative overflow-hidden bg-cover bg-center bg-scroll"
        style={{ backgroundImage: "url(/image/home/heroBanner.png)" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
          <div className="max-w-2xl space-y-6">
            <p className="text-sm font-semibold tracking-widest text-teal-700 uppercase">
              Our Services
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-teal-950 leading-tight tracking-tight">
              Typesetting &amp; Pagination
            </h1>
            <p className="text-base sm:text-lg text-gray-700 max-w-lg leading-relaxed">
              Precision typesetting and pagination for books, journals, and academic publications — delivered print-ready and on time.
            </p>
            <Button className="rounded-full bg-teal-950 hover:bg-teal-900 text-white px-7 h-12 gap-2 text-sm font-medium">
              Get a Quote
              <IconArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-teal-950 leading-tight">
                Expert Typesetting for Every Format
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Our typesetting team handles everything from simple trade paperbacks to complex academic journals with multi-column layouts, chemical formulas, mathematical equations, and multilingual scripts.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We work directly from your manuscript and style guide to produce consistent, publisher-ready files that meet your exact specifications.
              </p>
              <ul className="space-y-3">
                {features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-gray-700 text-sm">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-teal-100 flex items-center justify-center">
                      <IconCheck className="h-3 w-3 text-teal-700" />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-teal-50 flex items-center justify-center shadow-lg">
              <img
                src="/image/home/Typesetting & Pagination.png"
                alt="Typesetting & Pagination"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-teal-950 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Ready to Get Started?</h2>
          <p className="text-gray-300 max-w-xl mx-auto">
            Send us your manuscript and requirements — we&apos;ll turn it around with precision and speed.
          </p>
          <Button className="rounded-full bg-white hover:bg-gray-100 text-teal-950 px-8 h-12 gap-2 font-semibold">
            Contact Us
            <IconArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
