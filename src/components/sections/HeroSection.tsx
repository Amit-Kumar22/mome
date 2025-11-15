"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface HeroSlide {
  id: number;
  image: string;
  tagline: string;
  title: string;
  highlight: string;
  description: string;
}

const heroSlides: HeroSlide[] = [
  {
    id: 1,
    image: "/event2.jpg",
    tagline: '"IT ALWAYS SEEMS IMPOSSIBLE, UNTIL IT\'S DONE."',
    title: "Top-Rated Luxury Event Management Company in",
    highlight: "Delhi NCR",
    description: "We are specializing in personalized event management services in Delhi NCR. Eventales offers unforgettable event experiences that reflect your unique vision and style.",
  },
  {
    id: 2,
    image: "/event.jpg",
    tagline: "CREATING UNFORGETTABLE MOMENTS",
    title: "Transform Your Vision Into",
    highlight: "Reality",
    description: "From corporate events to luxury weddings, we bring creativity and precision to every detail, ensuring your event leaves a lasting impression.",
  },
  {
    id: 3,
    image: "/event3.jpg",
    tagline: "EXCELLENCE IN EVERY DETAIL",
    title: "Professional Event Planning &",
    highlight: "Execution",
    description: "Our expert team handles everything from concept to completion, delivering seamless event experiences that exceed expectations.",
  },
  {
    id: 4,
    image: "/event.jpg",
    tagline: "YOUR DREAMS, OUR EXPERTISE",
    title: "Crafting Extraordinary",
    highlight: "Celebrations",
    description: "With years of experience and a passion for perfection, we create memorable events that reflect your unique style and vision.",
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    setTimeout(() => setIsAnimating(false), 800);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
    setTimeout(() => setIsAnimating(false), 800);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        setIsAnimating(true);
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
        setTimeout(() => setIsAnimating(false), 800);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide, isAnimating]);

  const slide = heroSlides[currentSlide];

  return (
    <section className="relative min-h-screen text-white overflow-hidden">
      {/* Full Width Background Images with Transition */}
      {heroSlides.map((slideItem, index) => (
        <div
          key={slideItem.id}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slideItem.image}
            alt={`Hero ${slideItem.id}`}
            fill
            className="object-cover"
            priority={index === 0}
            quality={100}
          />
          {/* Dark overlay for better text contrast */}
          <div className="absolute inset-0 bg-black/50" />
        </div>
      ))}

      {/* Content Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32 relative z-10 min-h-screen flex items-center">
        <div className="w-full max-w-4xl mx-auto">
          {/* Animated Content from Bottom */}
          <div
            key={currentSlide}
            className="space-y-6 animate-slide-up-fade"
            style={{
              animation: "slideUpFade 0.8s ease-out forwards",
            }}
          >
            {/* Tagline */}
            <div className="inline-block">
              <span className="text-momentus-copper font-semibold text-xs md:text-sm uppercase tracking-wider px-4 py-2 bg-momentus-copper/20 rounded-full border border-momentus-copper shadow-lg backdrop-blur-sm">
                {slide.tagline}
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
              {slide.title}{" "}
              <span className="text-momentus-copper">{slide.highlight}</span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl">
              {slide.description}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-momentus-copper hover:bg-momentus-copper-dark text-white font-semibold text-base md:text-lg px-6 md:px-8 py-5 md:py-6 rounded-lg shadow-2xl border-0 transition-all duration-300 transform hover:scale-105"
                >
                  Contact Us
                </Button>
              </Link>
              <Link href="/projects">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-2 border-white bg-white/10 backdrop-blur-sm text-white font-semibold hover:bg-white hover:text-momentus-navy text-base md:text-lg px-6 md:px-8 py-5 md:py-6 rounded-lg transition-all duration-300 shadow-xl transform hover:scale-105"
                >
                  View Our Work
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 z-20 flex justify-between px-4 md:px-8 pointer-events-none">
        <button
          onClick={prevSlide}
          disabled={isAnimating}
          className="pointer-events-auto bg-momentus-navy/80 hover:bg-momentus-copper backdrop-blur-sm text-white p-3 md:p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed border border-white/20"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
        </button>
        <button
          onClick={nextSlide}
          disabled={isAnimating}
          className="pointer-events-auto bg-momentus-navy/80 hover:bg-momentus-copper backdrop-blur-sm text-white p-3 md:p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed border border-white/20"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (!isAnimating) {
                setIsAnimating(true);
                setCurrentSlide(index);
                setTimeout(() => setIsAnimating(false), 800);
              }
            }}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "w-12 bg-momentus-copper"
                : "w-2 bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes slideUpFade {
          0% {
            opacity: 0;
            transform: translateY(60px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
