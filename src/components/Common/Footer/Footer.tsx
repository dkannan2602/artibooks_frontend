"use client"

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  IconArrowRight,
  IconMapPin,
  IconMail,
  IconPhone,
  IconBrandLinkedin,
  IconBrandX,
  IconBrandFacebook,
  IconBrandInstagram,
} from "@tabler/icons-react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Career", href: "/career" },
  { label: "Contact Us", href: "/contact" },
];

const services = [
  { label: "Typesetting & Pagination", href: "/services/typesetting" },
  { label: "Digital Artwork", href: "/services/digital-artwork" },
  { label: "Publishing Production Support", href: "/services/publishing-production" },
  { label: "Digital Marketing Creative Services", href: "/services/book-layout" },
];

const socialLinks = [
  { icon: IconBrandLinkedin, href: "#", label: "LinkedIn" },
  { icon: IconBrandX, href: "#", label: "X (Twitter)" },
  { icon: IconBrandFacebook, href: "#", label: "Facebook" },
  { icon: IconBrandInstagram, href: "#", label: "Instagram" },
];

export default function Footer() {
  return (
    <footer className="bg-teal-950 text-white">
      {/* CTA Banner */}
      <div className="border-b border-white/10">
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
            <Button className="rounded-full bg-teal-50 hover:bg-teal-100 text-teal-950 px-8 py-3 text-sm font-semibold gap-2 h-12 shrink-0 shadow-lg shadow-teal-900/20">
              Contact Us
              <IconArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Column 1 - Logo & About */}
          <div className="sm:col-span-2 lg:col-span-1 space-y-5">
            <Link href="/" className="inline-block bg-white rounded p-3">
              <Image
                src="/Logo/logo03.png"
                alt="Artibooks Publishing"
                width={180}
                height={60}
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              A vendor-based e-publishing company providing reliable production
              and creative support to publishing houses, production partners and
              global businesses.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3 pt-1">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex items-center justify-center w-9 h-9 rounded-full bg-white/10 hover:bg-teal-400 transition-colors duration-200"
                >
                  <social.icon className="h-4 w-4 text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div className="space-y-5">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-teal-300 transition-colors duration-200 inline-flex items-center gap-1.5 group"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-teal-400 transition-all duration-200" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Services */}
          <div className="space-y-5">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.label}>
                  <Link
                    href={service.href}
                    className="text-sm text-gray-400 hover:text-teal-300 transition-colors duration-200 inline-flex items-center gap-1.5 group"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-teal-400 transition-all duration-200" />
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Contact Info */}
          <div className="space-y-5">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
              Get in Touch
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <IconMapPin className="h-5 w-5 text-teal-400 shrink-0 mt-0.5" />
                <span className="text-sm text-gray-400 leading-relaxed">
                  5/242 1st Floor, Thasildhar Nagar, Vandiyur Main Rd, Madurai, Tamil Nadu 625020
                </span>
              </li>
              <li className="flex items-center gap-3">
                <IconMail className="h-5 w-5 text-teal-400 shrink-0" />
                <a
                  href="mailto:info@artibooks.com"
                  className="text-sm text-gray-400 hover:text-teal-300 transition-colors"
                >
                  info@artibooks.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <IconPhone className="h-5 w-5 text-teal-400 shrink-0" />
                <a
                  href="tel:+911234567890"
                  className="text-sm text-gray-400 hover:text-teal-300 transition-colors"
                >
                  +91 123 456 7890
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-gray-500">
              &copy; 2026 Artibooks Publishing. All rights
              reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/privacy"
                className="text-xs text-gray-500 hover:text-gray-300 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-xs text-gray-500 hover:text-gray-300 transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/sitemap"
                className="text-xs text-gray-500 hover:text-gray-300 transition-colors"
              >
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
