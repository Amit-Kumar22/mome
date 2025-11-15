"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

interface ServiceHeroProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: { label: string; href: string }[];
}

export default function ServiceHero({ title, subtitle, breadcrumbs }: ServiceHeroProps) {
  return (
    <section className="relative py-16 md:py-20 overflow-hidden">
      {/* Full Width Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/event.jpg"
          alt="Service Hero Background"
          fill
          className="object-cover"
          priority
          quality={100}
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-4">
          {/* Breadcrumbs */}
          {breadcrumbs && breadcrumbs.length > 0 && (
            <nav className="flex items-center justify-center gap-2 text-sm mb-4">
              {breadcrumbs.map((crumb, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Link
                    href={crumb.href}
                    className="text-white/70 hover:text-momentus-copper transition-colors duration-300"
                  >
                    {crumb.label}
                  </Link>
                  {index < breadcrumbs.length - 1 && (
                    <ChevronRight className="w-4 h-4 text-white/50" />
                  )}
                </div>
              ))}
              <ChevronRight className="w-4 h-4 text-white/50" />
              <span className="text-momentus-copper font-semibold">{title}</span>
            </nav>
          )}

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            {title}
          </h1>

          {/* Subtitle */}
          {subtitle && (
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          )}

          {/* Decorative Line */}
          <div className="flex items-center justify-center gap-3 pt-4">
            <div className="h-1 w-20 bg-momentus-copper rounded-full"></div>
            <div className="h-1 w-10 bg-momentus-copper-light rounded-full"></div>
            <div className="h-1 w-5 bg-white/50 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
