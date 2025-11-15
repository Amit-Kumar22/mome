"use client";

import Image from "next/image";

interface IntroWithImageProps {
  title: string;
  description: string | string[];
  imageSrc: string;
  imageAlt: string;
  imagePosition?: "left" | "right";
  badge?: string;
}

export default function IntroWithImage({
  title,
  description,
  imageSrc,
  imageAlt,
  imagePosition = "right",
  badge,
}: IntroWithImageProps) {
  const descriptionArray = Array.isArray(description) ? description : [description];

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${imagePosition === "left" ? "" : ""}`}>
          {/* Image */}
          <div className={`relative flex items-center ${imagePosition === "left" ? "lg:order-1" : "lg:order-2"}`}>
            <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-theme-lg">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-momentus-copper/20 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-momentus-navy/10 rounded-full blur-3xl -z-10"></div>
          </div>

          {/* Content */}
          <div className={`space-y-4 flex flex-col justify-center ${imagePosition === "left" ? "lg:order-2" : "lg:order-1"}`}>
            {badge && (
              <div className="inline-block">
                <span className="text-momentus-copper font-semibold text-sm uppercase tracking-wider px-4 py-2 bg-momentus-copper/10 rounded-full border border-momentus-copper/20">
                  {badge}
                </span>
              </div>
            )}

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-momentus-navy leading-tight">
              {title}
            </h2>

            <div className="space-y-3">
              {descriptionArray.map((para, index) => (
                <p
                  key={index}
                  className="text-sm md:text-base text-momentus-text-light leading-relaxed"
                >
                  {para}
                </p>
              ))}
            </div>

            {/* Decorative Line */}
            <div className="flex items-center gap-2 pt-4">
              <div className="h-1 w-16 bg-momentus-copper rounded-full"></div>
              <div className="h-1 w-8 bg-momentus-copper-light rounded-full"></div>
              <div className="h-1 w-4 bg-momentus-slate rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
