"use client"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { IconArrowRight } from "@tabler/icons-react";
import Image from "next/image";
import EnquiryForm from "@/components/Common/EnquiryForm/EnquiryForm";

const values = [
  {
    title: "Quality",
    description: "Excellence in every project, maintaining highest standards.",
    icon: "✓",
  },
  {
    title: "Integrity",
    description: "Transparent dealings and honest communication always.",
    icon: "✓",
  },
  {
    title: "Collaboration",
    description: "Working together with clients as true partners.",
    icon: "✓",
  },
  {
    title: "Innovation",
    description: "Continuously improving our processes and services.",
    icon: "✓",
  },
];

const team = [
  {
    name: "Rajesh Kumar",
    role: "Founder & CEO",
    bio: "20+ years in publishing industry",
  },
  {
    name: "Priya Sharma",
    role: "Head of Production",
    bio: "Expert in typesetting and design",
  },
  {
    name: "Amit Patel",
    role: "Creative Director",
    bio: "Specialist in digital artwork",
  },
  {
    name: "Neha Singh",
    role: "Operations Manager",
    bio: "Ensures quality and timely delivery",
  },
];

export default function AboutPage() {
  const [enquiryFormOpen, setEnquiryFormOpen] = useState(false);
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative overflow-hidden bg-cover bg-center bg-scroll"
        style={{
          backgroundImage: 'url(/image/home/heroBanner.png)',
        }}
      >
        <div className="absolute inset-0 bg-linear-to-r from-white via-white/80 to-transparent" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-32">
          <div className="max-w-2xl">
            <div className="space-y-6">
              <p className="text-sm font-semibold tracking-widest text-teal-700 uppercase">
                About Artibooks
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-teal-950 leading-tight tracking-tight">
                Our Story & Mission
              </h1>
              <p className="text-base sm:text-lg text-gray-700 max-w-lg leading-relaxed">
                Dedicated to delivering excellence in publishing production for over a decade.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
            {/* Image */}
            <div className="relative">
              <div className="aspect-4/3 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/image/home/homeAbout.png"
                  alt="Artibooks Team"
                  width={600}
                  height={450}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-teal-950 leading-tight">
                Building Success Through Publishing Excellence
              </h2>
              <p className="text-base text-gray-700 leading-relaxed">
                Artibooks is a vendor-based e-publishing company providing reliable production and creative support to publishing houses, production partners and global businesses. Since our inception, we've been committed to combining skilled teams, structured workflows and a quality-focused approach.
              </p>
              <p className="text-base text-gray-700 leading-relaxed">
                Our mission is to empower publishers with world-class production support and digital solutions that help them meet their project goals efficiently and effectively.
              </p>
              <Button 
                onClick={() => setEnquiryFormOpen(true)}
                className="rounded-full bg-teal-950 hover:bg-teal-900 text-white gap-2">
                Get in Touch
                <IconArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-teal-950 text-center mb-12">
              Our Core Values
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="bg-gray-50 rounded-xl p-8 text-center border border-teal-200 hover:border-teal-400 hover:shadow-lg transition-all"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-teal-600 text-white rounded-full mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-lg font-bold text-teal-950 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Team Section */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-teal-950 text-center mb-12">
              Meet Our Team
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member) => (
                <div
                  key={member.name}
                  className="bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
                >
                  <div className="h-40 bg-linear-to-br from-teal-400 to-teal-600 flex items-center justify-center">
                    <span className="text-4xl font-bold text-white opacity-50">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-lg font-semibold text-teal-950">
                      {member.name}
                    </h3>
                    <p className="text-sm text-teal-600 font-medium mb-2">
                      {member.role}
                    </p>
                    <p className="text-sm text-gray-600">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry Form Modal */}
      <EnquiryForm 
        isOpen={enquiryFormOpen} 
        onClose={() => setEnquiryFormOpen(false)}
        backdropColor="teal"
      />
    </>
  );
}
