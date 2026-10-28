import Image from "next/image";

export default function AboutSection() {
  const stats = [
    { value: "100%", label: "Focused on Publishing" },
    { value: "On-Time", label: "Delivery Track Record" },
    { value: "Confidential", label: "Client Information" },
    { value: "Global", label: "Project Support" },
  ];

  return (
    <section className="bg-gray-50 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/image/home/homeAbout.png"
                alt="Artibooks Publishing"
                width={600}
                height={450}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-6">
            <p className="text-sm font-semibold tracking-widest text-teal-700 uppercase">
              About Artibooks
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-teal-950 leading-tight">
              Built for Publishing.
              <br />
              Designed for Your Success.
            </h2>
            <p className="text-base text-gray-700 leading-relaxed max-w-lg">
              Artibooks is a vendor-based e-publishing company, providing reliable
              production and creative support to publishing houses, production
              partners and global businesses. We combine skilled teams,
              structured workflows and a quality-focused approach to help you
              meet your project goals efficiently.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-4">
              {stats.map((stat) => (
                <div key={stat.label} className="space-y-1">
                  <p className="text-lg font-bold text-teal-950">
                    {stat.value}
                  </p>
                  <p className="text-xs text-gray-500 leading-snug">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

