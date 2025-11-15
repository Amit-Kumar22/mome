"use client";

import Image from "next/image";

const galleryImages = [
  { src: "/event.jpg", alt: "Event 1", title: "Corporate Launch" },
  { src: "/event2.jpg", alt: "Event 2", title: "Government Event" },
  { src: "/event3.jpg", alt: "Event 3", title: "Conference Setup" },
  { src: "/event.jpg", alt: "Event 4", title: "Stage Performance" },
  { src: "/event2.jpg", alt: "Event 5", title: "Car Exhibition" },
  { src: "/event3.jpg", alt: "Event 6", title: "Product Launch" },
  { src: "/event.jpg", alt: "Event 7", title: "Brand Event" },
  { src: "/event2.jpg", alt: "Event 8", title: "Exhibition Display" },
];

export default function GallerySection() {
  return (
    <section className="py-12 md:py-16 bg-momentus-slate">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-10 space-y-2">
          <span className="text-momentus-copper font-semibold text-sm uppercase tracking-wider">
            EVENT GALLERY
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-momentus-navy">
            OUR WORK
          </h2>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-theme hover:shadow-theme-lg transition-all duration-300 hover:scale-105"
            >
              <div className="aspect-[4/3] relative">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-momentus-navy/80 via-momentus-navy/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-semibold text-lg">
                      {image.title}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
