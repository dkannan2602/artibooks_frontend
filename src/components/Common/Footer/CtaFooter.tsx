import Link from "next/link";
import { Button } from "@/components/ui/button";
import { IconArrowRight } from "@tabler/icons-react";

export default function CtaFooter() {
  return (
    <div className="bg-teal-950 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              Let&apos;s work together on your next publishing project.
            </h3>
            <p className="text-sm text-gray-400 mt-2 max-w-lg">
              Share your requirements and our team will get back to you within
              24 hours.
            </p>
          </div>
          <Link href="/contact">
            <Button className="rounded-full bg-teal-50 hover:bg-teal-100 text-teal-950 px-8 py-3 text-sm font-semibold gap-2 h-12 shrink-0 shadow-lg shadow-teal-900/20">
              Contact Us
              <IconArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
