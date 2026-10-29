import Link from "next/link";
import { Button } from "@/components/ui/button";
import { IconArrowRight } from "@tabler/icons-react";

interface CtaContentProps {
  heading: string;
  description: string;
}

export default function CtaContent({ heading, description }: CtaContentProps) {
  return (
    <section className="bg-teal-950 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[0.7fr_0.3fr] gap-12 lg:gap-16 items-center">
          {/* Left - Content (70%) */}
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              {heading}
            </h2>
            <p className="text-gray-300 leading-relaxed">
              {description}
            </p>
          </div>

          {/* Right - Button (30%) */}
          <div className="flex justify-end">
            <Link href="/contact">
              <Button className="rounded-full bg-white hover:bg-gray-100 text-teal-950 px-8 h-12 gap-2 font-semibold whitespace-nowrap">
                Contact Us
                <IconArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
