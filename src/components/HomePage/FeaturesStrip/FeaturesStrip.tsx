import {
  IconBook,
  IconLayout,
  IconPalette,
  IconShieldCheck,
  IconClock,
  IconPhoto,
} from "@tabler/icons-react";

const features = [
  {
    icon: IconBook,
    title: "Typesetting & Pagination",
    description: "Accurate, consistent and publication-ready files.",
  },
  {
    icon: IconPhoto,
    title: "Book Layout & Production",
    description: "Professional design and print-ready output.",
  },
  {
    icon: IconPalette,
    title: "Digital Artwork",
    description: "Covers, illustrations and visual assets.",
  },
  {
    icon: IconShieldCheck,
    title: "Quality & Confidentiality",
    description: "Your content, our responsibility.",
  },
  {
    icon: IconClock,
    title: "On-Time Delivery",
    description: "Because your deadlines matter.",
  },
];

export default function FeaturesStrip() {
  return (
    <section className="bg-white py-12 sm:py-16 border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col items-center text-center space-y-3"
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gray-50 border border-gray-100">
                <feature.icon className="h-10 w-10 text-teal-950 stroke-[1.5]" />
              </div>
              <h3 className="text-sm font-semibold text-teal-950">
                {feature.title}
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

