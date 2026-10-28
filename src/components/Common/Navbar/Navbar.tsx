"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  IconMenu2,
  IconX,
  IconChevronDown,
  IconArrowRight,
  IconBook2,
  IconLayoutGridAdd,
  IconPalette,
} from "@tabler/icons-react";

const services = [
  {
    label: "Typesetting & Pagination",
    href: "/services/typesetting",
    icon: IconBook2,
    description: "Professional book layout and page composition",
  },
  {
    label: "Digital Artwork",
    href: "/services/digital-artwork",
    icon: IconPalette,
    description: "Custom illustrations and visual design",
  },
  {
    label: "Publishing Production Support",
    href: "/services/publishing-production",
    icon: IconBook2,
    description: "Flexible capacity for ongoing projects",
  },
  {
    label: "Digital Marketing Creative Services",
    href: "/services/book-layout",
    icon: IconLayoutGridAdd,
    description: "Campaign creatives and promotional content",
  },
];

const scrollingText =
  "🚀 Exciting Opportunity: We're Hiring! Join our dynamic team and grow your career. Apply now and become part of our success story.";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      {/* Top Bar - Scrolling Text */}
      <div className="bg-teal-950 text-white overflow-hidden">
        <div className="relative h-10 flex items-center">
          <style>{`
            @keyframes scroll {
              0% { transform: translateX(100%); }
              100% { transform: translateX(-100%); }
            }
            .scrolling-text {
              animation: scroll 20s linear infinite;
              white-space: nowrap;
            }
          `}</style>
          <div className="scrolling-text text-sm font-medium px-4">
            {scrollingText}
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">

            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/Logo/logo01-removebg.png"
                alt="Artibooks"
                width={112}
                height={80}
                className="h-20 w-28 object-contain"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              <Link href="/" className="text-sm font-medium text-gray-700 hover:text-teal-600 transition-colors">
                Home
              </Link>

              {/* Publishing Services Dropdown — click controlled */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setDropdownOpen((v) => !v)}
                  className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-teal-600 transition-colors py-2"
                >
                  Publishing Services
                  <IconChevronDown
                    className={`h-4 w-4 text-gray-400 transition-transform duration-200 ${
                      dropdownOpen ? "rotate-180 text-teal-600" : ""
                    }`}
                  />
                </button>

                {dropdownOpen && (
                  <div className="absolute left-0 top-full mt-2 w-80 bg-white rounded-xl shadow-xl border border-gray-100 z-50">
                    <div className="py-2">
                      {services.map((service) => {
                        const Icon = service.icon;
                        return (
                          <Link
                            key={service.label}
                            href={service.href}
                            onClick={() => setDropdownOpen(false)}
                            className="flex items-start gap-3 px-4 py-3 hover:bg-teal-50 transition-colors group"
                          >
                            <Icon className="h-5 w-5 text-teal-600 shrink-0 mt-0.5" />
                            <div>
                              <p className="text-sm font-medium text-gray-900 group-hover:text-teal-700">
                                {service.label}
                              </p>
                              <p className="text-xs text-gray-500 mt-0.5">
                                {service.description}
                              </p>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>

              <Link href="/about" className="text-sm font-medium text-gray-700 hover:text-teal-600 transition-colors">
                About Us
              </Link>
              <Link href="/career" className="text-sm font-medium text-gray-700 hover:text-teal-600 transition-colors">
                Career
              </Link>
              <Link href="/contact" className="text-sm font-medium text-gray-700 hover:text-teal-600 transition-colors">
                Contact Us
              </Link>
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Button className="rounded-full bg-teal-950 hover:bg-teal-900 text-white px-6 py-2.5 text-sm font-medium gap-2 shadow-lg shadow-teal-900/30">
                Let&apos;s Talk
                <IconArrowRight className="h-4 w-4" />
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
              onClick={() => setMobileMenuOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <IconX className="h-6 w-6" /> : <IconMenu2 className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="lg:hidden border-t border-gray-100 py-4 space-y-1">
              <Link
                href="/"
                className="block px-3 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>

              {/* Mobile Services Accordion */}
              <div>
                <button
                  onClick={() => setMobileServicesOpen((v) => !v)}
                  className="w-full flex items-center justify-between px-3 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-lg"
                >
                  Publishing Services
                  <IconChevronDown
                    className={`h-4 w-4 text-gray-400 transition-transform duration-200 ${
                      mobileServicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {mobileServicesOpen && (
                  <div className="ml-4 mt-1 space-y-1 border-l-2 border-teal-100 pl-3">
                    {services.map((service) => (
                      <Link
                        key={service.label}
                        href={service.href}
                        className="block py-2 text-sm text-gray-600 hover:text-teal-600 transition-colors"
                        onClick={() => {
                          setMobileMenuOpen(false);
                          setMobileServicesOpen(false);
                        }}
                      >
                        {service.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/about"
                className="block px-3 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                href="/career"
                className="block px-3 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                Career
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Us
              </Link>

              <div className="pt-2 px-3">
                <Button className="w-full rounded-full bg-teal-950 hover:bg-teal-900 text-white text-sm font-medium gap-2">
                  Let&apos;s Talk
                  <IconArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
}
