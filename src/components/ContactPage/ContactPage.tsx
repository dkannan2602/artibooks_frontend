"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  IconArrowRight,
  IconMapPin,
  IconMail,
  IconPhone,
  IconClock,
} from "@tabler/icons-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/dropdown";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubjectChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      subject: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", phone: "", email: "", subject: "", message: "" });
    setTimeout(() => setSubmitted(false), 5000);
  };

  const contactInfo = [
    {
      icon: IconMapPin,
      label: "Address",
      value: "5/242 1st Floor, Thasildhar Nagar, Vandiyur Main Rd, behind Sri Kamatchi Traders, Madurai, Tamil Nadu 625020",
    },
    {
      icon: IconMail,
      label: "Email",
      value: "info@artibooks.com",
      link: "mailto:info@artibooks.com",
    },
    {
      icon: IconPhone,
      label: "Phone",
      value: "+91 44 1234 5678",
      link: "tel:+914412345678",
    },
    {
      icon: IconClock,
      label: "Business Hours",
      value: "Mon - Fri, 9:00 AM - 6:00 PM IST",
    },
  ];

  return (
    <section className="bg-white">
      {/* Hero Section */}
      <div className="bg-linear-to-b from-teal-50 to-white py-10 md:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            <p className="text-sm font-semibold tracking-widest text-teal-700 uppercase">
              Get In Touch
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-teal-950">
              Contact Us
            </h1>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Have questions? We&apos;d love to hear from you. Get in touch with our team.
            </p>
          </div>
        </div>
      </div>

      {/* Main Layout - 30% Left | 70% Right */}
      <div className="pb-16 sm:pb-20 lg:pb-24 pt-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_2fr] gap-12 lg:gap-16">
            {/* Left - Contact Info Cards (30%) - Stacked */}
            <div className="space-y-6">
              {contactInfo.map((info) => {
                const Icon = info.icon;
                return (
                  <div
                    key={info.label}
                    className="bg-teal-950 rounded-lg p-6 text-white shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <div className="flex items-start gap-4">
                      <div className="shrink-0 w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                        <Icon size={24} className="text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-white mb-1">
                          {info.label}
                        </h3>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-gray-200 hover:text-white transition-colors text-sm"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-gray-200 text-sm">{info.value}</p>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right - Contact Form (70%) */}
            <div className="bg-teal-950 rounded-lg p-8 md:p-10 shadow-lg">
              <h2 className="text-2xl font-bold text-white mb-6">
                Send us a Message
              </h2>

              {submitted && (
                <div className="mb-6 p-4 bg-green-500/20 border border-green-400 text-green-100 rounded-lg text-center text-sm">
                  ✓ Thank you! We'll get back to you soon.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Row 1: Name | Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-white mb-2"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all text-teal-950 placeholder-gray-500"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-semibold text-white mb-2"
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all text-teal-950 placeholder-gray-500"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                {/* Row 2: Email | Subject Dropdown */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-white mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all text-teal-950 placeholder-gray-500"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-semibold text-white mb-2"
                    >
                      Subject
                    </label>
                    <Select value={formData.subject} onValueChange={handleSubjectChange}>
                      <SelectTrigger className="bg-white border-gray-300 text-teal-950">
                        <SelectValue placeholder="Select a subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="typesetting">
                          Typesetting & Pagination
                        </SelectItem>
                        <SelectItem value="design">
                          Book Design & Layout
                        </SelectItem>
                        <SelectItem value="artwork">
                          Digital Artwork
                        </SelectItem>
                        <SelectItem value="marketing">
                          Digital Marketing
                        </SelectItem>
                        <SelectItem value="other">
                          Other Inquiry
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Message Field */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-white mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={3}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all text-teal-950 placeholder-gray-500 resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-white hover:bg-gray-100 text-teal-950 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  Send Message
                  <IconArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Google Map */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20 lg:pb-24">
        <div className="rounded-xl overflow-hidden shadow-lg border border-gray-100">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3556.609653382172!2d78.1467418758819!3d9.918828549138786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c57de9111233%3A0xed8b30264906e5e6!2sARTIBOOKS!5e1!3m2!1sen!2sin!4v1793191410748!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            title="Artibooks Office Location"
          />
        </div>
      </div>
    </section>
  );
}
