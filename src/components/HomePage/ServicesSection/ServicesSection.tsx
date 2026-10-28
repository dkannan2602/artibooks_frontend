import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { IconArrowRight } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Typesetting & Pagination",
    description:
      "Professional book layout, page composition and print-ready files.",
    image: "Typesetting & Pagination.png",
    href: "/services/typesetting",
  },
  {
    title: "Digital Artwork",
    description:
      "Book covers, illustrations, graphical elements and visual design.",
    image: "Digital Artwork.png",
    href: "/services/digital-artwork",
  },
  {
    title: "Publishing Production Support",
    description:
      "Flexible capacity for ongoing projects and peak workloads.",
    image: "Publishing Production Support.png",
    href: "/services/publishing-production",
  },
  {
    title: "Digital Marketing Creative Services",
    description:
      "Campaign creatives, social media design and promotional content.",
    image: "Digital Marketing Creative Services.png",
    href: "/services/book-layout",
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-gray-50 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_2fr] gap-12 lg:gap-16 items-start">
          {/* Left - Header Content (30%) */}
          <div className="space-y-6">
            <p className="text-sm font-semibold tracking-widest text-teal-700 uppercase">
              Our Services
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-teal-950 leading-tight">
              Comprehensive Publishing Support
            </h2>
            <p className="text-base text-gray-700 leading-relaxed">
              From typesetting to digital artwork, we provide end-to-end support
              for your publishing projects, with a focus on quality, accuracy and
              on-time delivery.
            </p>
            <Link href="/services">
              <Button className="rounded-full bg-teal-950 hover:bg-teal-900 text-white gap-2">
                View All Services
                <IconArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>

          {/* Right - Service Cards (70%) - 4 columns in 1 row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <Card
                key={service.title}
                className="border-0 shadow-sm hover:shadow-lg transition-shadow overflow-hidden group bg-white"
              >
                {/* Image */}
                <div className="relative h-40 overflow-hidden bg-gray-100">
                  <Image
                    src={`/image/home/${service.image}`}
                    alt={service.title}
                    width={300}
                    height={200}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-5 space-y-3">
                  <h3 className="text-sm font-bold text-teal-950">
                    {service.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-teal-700 hover:text-teal-950 hover:underline underline-offset-2 transition-colors group/link p-2"
                  >
                    Learn More
                    <IconArrowRight className="h-3.5 w-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
