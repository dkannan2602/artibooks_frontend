import { Button } from "@/components/ui/button";
import { IconArrowRight, IconMapPin, IconBriefcase } from "@tabler/icons-react";

const openPositions = [
  {
    title: "Senior Typesetter",
    department: "Production",
    location: "Madurai, India",
    type: "Full-time",
    description:
      "We're looking for an experienced typesetter with 5+ years of experience in professional publishing. Should have expertise in InDesign, Adobe Suite, and print production.",
  },
  {
    title: "Graphic Designer",
    department: "Creative",
    location: "Remote",
    type: "Full-time",
    description:
      "Creative professional needed for book cover design and digital artwork. Strong portfolio in book design and digital illustration required.",
  },
  {
    title: "Project Coordinator",
    department: "Operations",
    location: "Madurai, India",
    type: "Full-time",
    description:
      "Coordinate publishing projects, manage timelines, and ensure quality delivery. Experience in project management and client communication essential.",
  },
  {
    title: "QA Specialist",
    department: "Quality Assurance",
    location: "Remote",
    type: "Full-time",
    description:
      "Quality assurance professional to review publishing outputs, identify errors, and ensure standards compliance. Attention to detail crucial.",
  },
];

const benefits = [
  {
    title: "Competitive Salary",
    description: "We offer market-leading compensation packages with performance bonuses.",
  },
  {
    title: "Flexible Work",
    description: "Hybrid and remote options available to help you maintain work-life balance.",
  },
  {
    title: "Growth Opportunities",
    description: "Clear career paths with mentorship programs and skill development support.",
  },
  {
    title: "Health Coverage",
    description: "Comprehensive health insurance for you and your family from day one.",
  },
  {
    title: "Collaborative Culture",
    description: "Work alongside passionate publishing professionals in a supportive environment.",
  },
  {
    title: "Learning & Development",
    description: "Access to workshops, courses, and industry conferences to keep skills sharp.",
  },
];

export default function CareerPage() {
  return (
    <div className="bg-white">
      {/* Hero Section — same pattern as About page */}
      <section
        className="relative overflow-hidden bg-cover bg-center bg-scroll min-h-60"
        style={{ backgroundImage: "url(/image/home/heroBanner.png)" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="max-w-2xl">
            <div className="space-y-6">
              <p className="text-sm font-semibold tracking-widest text-teal-700 uppercase">
                Careers at Artibooks
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-teal-950 leading-tight tracking-tight">
                Join Our Team
              </h1>
              <p className="text-base sm:text-lg text-gray-700 max-w-lg leading-relaxed">
                Build your career with a team passionate about publishing excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="bg-gray-50 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-3">
            <p className="text-sm font-semibold tracking-widest text-teal-700 uppercase">
              Our Culture
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-teal-950">
              Why Join Artibooks?
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              We invest in our people because great work comes from happy, motivated teams.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-teal-200 transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center mb-4">
                  <span className="text-teal-700 font-bold text-lg">✓</span>
                </div>
                <h3 className="text-lg font-semibold text-teal-950 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-3">
            <p className="text-sm font-semibold tracking-widest text-teal-700 uppercase">
              We&apos;re Hiring
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-teal-950">
              Open Positions
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Explore current openings and find a role that matches your skills and passion.
            </p>
          </div>

          <div className="space-y-6">
            {openPositions.map((position) => (
              <div
                key={position.title}
                className="bg-gray-50 rounded-xl p-8 border border-gray-200 hover:border-teal-400 hover:shadow-lg transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-teal-950">
                      {position.title}
                    </h3>
                    <div className="flex items-center gap-2 text-gray-500 mt-2">
                      <IconBriefcase size={16} />
                      <span className="text-sm">{position.department}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-3">
                    <div className="flex items-center gap-1.5 text-gray-500">
                      <IconMapPin size={16} />
                      <span className="text-sm">{position.location}</span>
                    </div>
                    <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm font-semibold">
                      {position.type}
                    </span>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {position.description}
                </p>

                <Button className="rounded-full bg-teal-950 hover:bg-teal-900 text-white gap-2">
                  Apply Now
                  <IconArrowRight className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-teal-950 text-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <p className="text-sm font-semibold tracking-widest text-teal-400 uppercase">
            Stay Connected
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold">
            Don&apos;t See What You&apos;re Looking For?
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            We&apos;re always on the lookout for talented individuals. Send us your resume and we&apos;ll keep your profile on file for future opportunities.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Button className="rounded-full bg-white hover:bg-gray-100 text-teal-950 px-8 h-12 gap-2 font-semibold">
              Send Your Resume
              <IconArrowRight className="h-4 w-4" />
            </Button>
            <Button className="rounded-full bg-transparent hover:bg-white/10 text-white border border-white/40 px-8 h-12 font-semibold">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
