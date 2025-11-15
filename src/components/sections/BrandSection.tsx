"use client";

import Image from "next/image";

interface BrandItem {
  name: string;
  logo: string;
  category?: string;
}

interface BrandSectionProps {
  title: string;
  subtitle?: string;
  brands: BrandItem[];
}

export default function BrandSection({ title, subtitle, brands }: BrandSectionProps) {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 space-y-3">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-momentus-navy">
            {title}
          </h2>
          {subtitle && (
            <p className="text-sm md:text-base text-momentus-text-light max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="group bg-momentus-section hover:bg-white rounded-xl p-6 flex items-center justify-center border-2 border-transparent hover:border-momentus-copper transition-all duration-300 transform hover:scale-105 shadow-sm hover:shadow-theme"
            >
              <div className="relative w-full h-20 grayscale group-hover:grayscale-0 transition-all duration-300">
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Text */}
        <div className="text-center mt-10">
          <p className="text-sm text-momentus-text-light italic">
            Trusted by leading brands across industries
          </p>
        </div>
      </div>
    </section>
  );
}
