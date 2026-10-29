import Navbar from "@/components/Common/Navbar/Navbar";
import Footer from "@/components/Common/Footer/Footer";
import { IconArrowRight } from "@tabler/icons-react";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-linear-to-br from-teal-950 to-teal-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-lg text-teal-100 mt-6 leading-relaxed">
              We are committed to protecting your privacy. This policy explains how we collect, use, and safeguard your information.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-teal max-w-none space-y-8">
            {/* Introduction */}
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-teal-950">
                1. Introduction
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Artibooks Publishing ("we," "us," "our," or "Company") operates the website and services. We are committed to protecting your privacy and ensuring you have a positive experience on our platforms. This Privacy Policy explains our online information practices and the choices you can make about how your information is used.
              </p>
            </div>

            {/* Information We Collect */}
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-teal-950">
                2. Information We Collect
              </h2>
              <div className="space-y-3">
                <div>
                  <h3 className="text-lg font-semibold text-teal-900">
                    Personal Information
                  </h3>
                  <p className="text-gray-700 leading-relaxed mt-2">
                    When you contact us through our enquiry form or services, we collect information such as your name, email address, phone number, and project details. This information helps us understand your needs and provide you with appropriate services.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-teal-900">
                    Automatically Collected Information
                  </h3>
                  <p className="text-gray-700 leading-relaxed mt-2">
                    We automatically collect certain information about your device and how you interact with our website, including IP address, browser type, operating system, pages visited, and time spent on pages.
                  </p>
                </div>
              </div>
            </div>

            {/* How We Use Information */}
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-teal-950">
                3. How We Use Your Information
              </h2>
              <ul className="space-y-2 text-gray-700">
                <li className="flex gap-3">
                  <span className="text-teal-950 font-semibold">•</span>
                  <span>To respond to your inquiries and provide services you request</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-teal-950 font-semibold">•</span>
                  <span>To send you updates about our services and offerings</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-teal-950 font-semibold">•</span>
                  <span>To improve our website and services</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-teal-950 font-semibold">•</span>
                  <span>To comply with legal obligations</span>
                </li>
              </ul>
            </div>

            {/* Data Security */}
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-teal-950">
                4. Data Security
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.
              </p>
            </div>

            {/* Your Rights */}
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-teal-950">
                5. Your Rights
              </h2>
              <p className="text-gray-700 leading-relaxed">
                You have the right to access, modify, or delete your personal information. If you wish to exercise any of these rights, please contact us at info@artibooks.com with your request.
              </p>
            </div>

            {/* Contact Us */}
            <div className="space-y-4 bg-teal-50 p-6 rounded-lg">
              <h2 className="text-2xl sm:text-3xl font-bold text-teal-950">
                6. Contact Us
              </h2>
              <p className="text-gray-700 leading-relaxed">
                If you have any questions about this Privacy Policy or our privacy practices, please contact us at:
              </p>
              <div className="text-gray-700 space-y-1">
                <p><strong>Email:</strong> info@artibooks.com</p>
                <p><strong>Phone:</strong> +91 123 456 7890</p>
                <p><strong>Address:</strong> 5/242 1st Floor, Thasildhar Nagar, Vandiyur Main Rd, Madurai, Tamil Nadu 625020</p>
              </div>
            </div>

            {/* Last Updated */}
            <div className="border-t border-gray-200 pt-8 text-sm text-gray-600">
              <p>Last Updated: October 2026</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
