"use client"

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { IconX } from "@tabler/icons-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/dropdown";

interface EnquiryFormProps {
  isOpen: boolean;
  onClose: () => void;
  backdropColor?: "black" | "teal";
}

const subjects = [
  "Typesetting & Pagination",
  "Book Design & Layout",
  "Digital Artwork",
  "Digital Marketing",
  "Other Inquiry",
];

export default function EnquiryForm({ isOpen, onClose, backdropColor = "black" }: EnquiryFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    subject: "",
    description: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Map backdrop color options to Tailwind classes
  const backdropClasses = {
    black: "bg-black",
    teal: "bg-teal-950",
  };

  // Disable body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubjectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, subject: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate that subject is selected
    if (!formData.subject) {
      alert("Please select a subject");
      return;
    }
    
    setIsSubmitting(true);

    try {
      // TODO: Replace with actual API endpoint
      console.log("Form submitted:", formData);
      
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Reset form and close modal
      setFormData({
        name: "",
        phone: "",
        subject: "",
        description: "",
      });
      onClose();

      // Optional: Show success message
      alert("Thank you for your inquiry! We'll be in touch soon.");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Full Screen Modal Backdrop */}
      <div
        className={`fixed inset-0 z-9999 ${backdropClasses[backdropColor]}`}
        onClick={onClose}
      />

      {/* Modal Dialog - Centered on screen */}
      <div className="fixed inset-0 z-10000 flex items-center justify-center p-4">
        <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Close form"
          >
            <IconX className="h-5 w-5 text-gray-600" />
          </button>

          {/* Header */}
          <div className="px-6 pt-6 pb-4">
            <h2 className="text-2xl font-bold text-teal-950">Get Started</h2>
            <p className="text-sm text-gray-600 mt-1">
              Tell us about your project and we'll be in touch soon.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="px-6 pb-6 space-y-6">
            {/* Name Field */}
            <div className="space-y-3">
              <label htmlFor="name" className="text-sm font-medium text-gray-700">
                Full Name *
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
              />
            </div>

            {/* Phone Field */}
            <div className="space-y-3">
              <label htmlFor="phone" className="text-sm font-medium text-gray-700">
                Phone Number *
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+91 98765 43210"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
              />
            </div>

            {/* Subject Select */}
            <div className="space-y-3">
              <label className="text-sm font-medium text-gray-700">
                Subject *
              </label>
              <Select
                value={formData.subject}
                onValueChange={handleSubjectChange}
              >
                <SelectTrigger className="w-full border-gray-300 bg-white text-gray-700">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent className="z-10001">
                  {subjects.map((subject) => (
                    <SelectItem key={subject} value={subject}>
                      {subject}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Description Field */}
            <div className="space-y-3">
              <label
                htmlFor="description"
                className="text-sm font-medium text-gray-700"
              >
                Project Description *
              </label>
              <textarea
                id="description"
                name="description"
                placeholder="Tell us about your project, requirements, timeline, etc."
                value={formData.description}
                onChange={handleInputChange}
                required
                rows={4}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all resize-none"
              />
            </div>

            {/* Submit Buttons */}
            <div className="flex gap-3 pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 px-4 py-2.5 rounded-full bg-teal-950 hover:bg-teal-900 text-white font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Submit"}
              </button>
              <button
                type="button"
                onClick={onClose}
                className="flex-1 px-4 py-2.5 rounded-full border border-gray-300 text-gray-700 hover:bg-gray-50 font-medium transition-colors"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
