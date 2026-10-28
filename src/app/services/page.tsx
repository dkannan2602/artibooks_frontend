import Navbar from "@/components/Common/Navbar/Navbar";
import Footer from "@/components/Common/Footer/Footer";
import { Button } from "@/components/ui/button";
import { IconArrowRight, IconCheck } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Typesetting & Pagination",
    description:
      "Professional book layout, page composition and print-ready files for every publishing format. We handle complex academic layouts, multi-language scripts, equations, tables, and consistent house-style application.",
    image: "Typesetting & Pagination.png",
    href: "/services/typesetting",
    features: ["InDesign & QuarkXPress", "Multi-language support", "Print-ready PDF output", "TOC & index generation"],
  },
  {
    title: "Book Layout & Production",
    description:
      "Beautiful, functional book interiors crafted for both print and digital formats. From single titles to large series, we deliver consistent layouts aligned with your brand and printer specs.",
    image: "Publishing Production Support.png",
    href: "/services/book-layout",
    features: ["Cover & interior design", "eBook & print dual-format", "Series consistency", "Fast revision cycles"],
  },
  {
    title: "Digital Artwork",
    description:
      "Custom illustrations, cover designs, infographics and visual assets that make your publications stand out. Delivered in both print-resolution and web-optimised formats.",
    image: "Digital Artwork.png",
    href: "/services/digital-artwork",
    features: ["Book cover design", "Infographics & diagrams", "Vector & raster artwork", "Brand-consistent assets"],
  },
  {
    title: "Publishing Production Support",
    description:
      "Scalable, end-to-end production support that integrates with your existing workflow. Overflow capacity during peak seasons or a dedicated partner for your entire catalogue.",
    image: "Publishing Production Support.png",
    href: "/services/publishing-production",
    features: ["End-to-end management", "XML & EPUB conversion", "Quality proofreading", "Scalable capacity"],
  },
];

export default function ServicesPage() {
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
              What We Do
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-teal-950 leading-tight tracking-tight">
              Our Services
            </h1>
            <p className="text-base sm:text-lg text-gray-700 max-w-lg leading-relaxed">
              End-to-end publishing production support — from typesetting to digital artwork — delivered with precision and on time.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-20">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                index % 2 !== 0 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image — alternates sides */}
              <div className={`${index % 2 !== 0 ? "lg:order-2" : ""}`}>
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg bg-teal-50">
                  <Image
                    src={`/image/home/${service.image}`}
                    alt={service.title}
                    width={600}
                    height={450}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className={`space-y-6 ${index % 2 !== 0 ? "lg:order-1" : ""}`}>
                <p className="text-sm font-semibold tracking-widest text-teal-700 uppercase">
                  Service {String(index + 1).padStart(2, "0")}
                </p>
                <h2 className="text-3xl sm:text-4xl font-bold text-teal-950 leading-tight">
                  {service.title}
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2.5">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-gray-700 text-sm">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-teal-100 flex items-center justify-center">
                        <IconCheck className="h-3 w-3 text-teal-700" />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href={service.href}>
                  <Button className="rounded-full bg-teal-950 hover:bg-teal-900 text-white gap-2 mt-2">
                    Learn More
                    <IconArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-teal-950 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Ready to Start a Project?
          </h2>
          <p className="text-gray-300 max-w-xl mx-auto">
            Tell us what you need and we&apos;ll put together the right team and workflow for your project.
          </p>
          <Link href="/contact">
            <Button className="rounded-full bg-white hover:bg-gray-100 text-teal-950 px-8 h-12 gap-2 font-semibold">
              Get in Touch
              <IconArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
