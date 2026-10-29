import Navbar from "@/components/Common/Navbar/Navbar";
import Footer from "@/components/Common/Footer/Footer";

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-linear-to-br from-teal-950 to-teal-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
              Terms of Service
            </h1>
            <p className="text-lg text-teal-100 mt-6 leading-relaxed">
              Please read these terms and conditions carefully before using Artibooks Publishing services.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-teal max-w-none space-y-8">
            {/* Acceptance of Terms */}
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-teal-950">
                1. Acceptance of Terms
              </h2>
              <p className="text-gray-700 leading-relaxed">
                By accessing and using Artibooks Publishing website and services, you accept and agree to be bound by and comply with these Terms of Service. If you do not agree to abide by the above, please do not use this service.
              </p>
            </div>

            {/* Use License */}
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-teal-950">
                2. Use License
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Permission is granted to temporarily download one copy of the materials (information or software) on Artibooks Publishing website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex gap-3">
                  <span className="text-teal-950 font-semibold">•</span>
                  <span>Modifying or copying the materials</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-teal-950 font-semibold">•</span>
                  <span>Using the materials for any commercial purpose or for any public display</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-teal-950 font-semibold">•</span>
                  <span>Attempting to decompile or reverse engineer any software contained on Artibooks Publishing website</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-teal-950 font-semibold">•</span>
                  <span>Removing any copyright or other proprietary notations from the materials</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-teal-950 font-semibold">•</span>
                  <span>Transferring the materials to another person or "mirroring" the materials on any other server</span>
                </li>
              </ul>
            </div>

            {/* Disclaimer */}
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-teal-950">
                3. Disclaimer
              </h2>
              <p className="text-gray-700 leading-relaxed">
                The materials on Artibooks Publishing website are provided on an 'as is' basis. Artibooks Publishing makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </div>

            {/* Limitations */}
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-teal-950">
                4. Limitations
              </h2>
              <p className="text-gray-700 leading-relaxed">
                In no event shall Artibooks Publishing or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Artibooks Publishing website, even if Artibooks Publishing or a Artibooks Publishing authorized representative has been notified orally or in writing of the possibility of such damage.
              </p>
            </div>

            {/* Accuracy of Materials */}
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-teal-950">
                5. Accuracy of Materials
              </h2>
              <p className="text-gray-700 leading-relaxed">
                The materials appearing on Artibooks Publishing website could include technical, typographical, or photographic errors. Artibooks Publishing does not warrant that any of the materials on its website are accurate, complete, or current. Artibooks Publishing may make changes to the materials contained on its website at any time without notice.
              </p>
            </div>

            {/* Links */}
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-teal-950">
                6. Links
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Artibooks Publishing has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Artibooks Publishing of the site. Use of any such linked website is at the user's own risk.
              </p>
            </div>

            {/* Modifications */}
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-teal-950">
                7. Modifications
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Artibooks Publishing may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
              </p>
            </div>

            {/* Governing Law */}
            <div className="space-y-4 bg-teal-50 p-6 rounded-lg">
              <h2 className="text-2xl sm:text-3xl font-bold text-teal-950">
                8. Governing Law
              </h2>
              <p className="text-gray-700 leading-relaxed">
                These terms and conditions are governed by and construed in accordance with the laws of India, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
              </p>
            </div>

            {/* Contact */}
            <div className="space-y-4 bg-teal-50 p-6 rounded-lg">
              <h2 className="text-2xl sm:text-3xl font-bold text-teal-950">
                Contact Us
              </h2>
              <p className="text-gray-700 leading-relaxed">
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <div className="text-gray-700 space-y-1">
                <p><strong>Email:</strong> info@artibooks.com</p>
                <p><strong>Phone:</strong> +91 123 456 7890</p>
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
