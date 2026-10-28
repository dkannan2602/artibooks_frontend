import { Button } from "@/components/ui/button";
import { IconArrowRight } from "@tabler/icons-react";

export default function HeroSection() {
  return (
    <section 
      className="relative overflow-hidden bg-cover bg-center bg-scroll"
      style={{
        backgroundImage: 'url(/image/home/heroBanner01.png)',
      }}
    >
      {/* White fade overlay on left side */}
      <div className="absolute inset-0 bg-linear-to-r from-white via-white/80 to-transparent" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-32">
        <div className="max-w-2xl">
          {/* Left Content */}
          <div className="space-y-6">
            <p className="text-sm font-semibold tracking-widest text-teal-700 uppercase">
              Publishing Production Services
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-teal-950 leading-tight tracking-tight">
              Your Reliable Publishing Production Partner
            </h1>
            <p className="text-base sm:text-lg text-gray-700 max-w-lg leading-relaxed">
              We deliver professional typesetting, layout, digital artwork and
              production support for publishing companies, production partners
              and businesses worldwide.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button className="rounded-full bg-teal-950 hover:bg-teal-900 text-white px-7 py-3 text-sm font-medium gap-2 h-12">
                Explore Our Services
                <IconArrowRight className="h-4 w-4" />
              </Button>
              <Button
                className="rounded-full bg-white hover:bg-gray-50 text-teal-950 border border-gray-300 px-7 py-3 text-sm font-medium h-12"
              >
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

