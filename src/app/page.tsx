"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/sections/HeroSection";
import GallerySection from "@/components/sections/GallerySection";
import PlanningSection from "@/components/sections/PlanningSection";
import FAQSection from "@/components/sections/FAQSection";
import ContactSection from "@/components/sections/ContactSection";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Dummy donation data
const dummyDonations = [
  {
    id: "1",
    donorName: "John Smith",
    donorEmail: "john@example.com",
    amount: 5000,
    purpose: "Scholarship Fund",
    profileImage: "/logo/yen.png"
  },
  {
    id: "2",
    donorName: "Sarah Johnson",
    donorEmail: "sarah@example.com",
    amount: 3000,
    purpose: "Project Funding",
    profileImage: "/logo/yen.png"
  },
  {
    id: "3",
    donorName: "Michael Chen",
    donorEmail: "michael@example.com",
    amount: 7500,
    purpose: "General Fund",
    profileImage: "/logo/yen.png"
  },
  {
    id: "4",
    donorName: "Emily Davis",
    donorEmail: "emily@example.com",
    amount: 2500,
    purpose: "Infrastructure Development",
    profileImage: "/logo/yen.png"
  },
  {
    id: "5",
    donorName: "Robert Wilson",
    donorEmail: "robert@example.com",
    amount: 4000,
    purpose: "Scholarship Fund",
    profileImage: "/logo/yen.png"
  }
];

// Dummy mentors data
const dummyMentors = [
  {
    id: "1",
    name: "Dr. James Anderson",
    title: "CEO, Tech Innovations Inc.",
    bio: "20+ years of experience in technology startups and venture capital. Helped launch over 50 successful companies.",
    imageUrl: "/logo/yen.png",
    linkedinUrl: "https://linkedin.com"
  },
  {
    id: "2",
    name: "Maria Garcia",
    title: "Founder, Global Ventures",
    bio: "Serial entrepreneur with expertise in international business development and scaling startups globally.",
    imageUrl: "/logo/yen.png",
    linkedinUrl: "https://linkedin.com"
  },
  {
    id: "3",
    name: "David Thompson",
    title: "VP of Innovation, Future Corp",
    bio: "Innovation strategist specializing in emerging technologies and digital transformation for enterprises.",
    imageUrl: "/logo/yen.png",
    linkedinUrl: "https://linkedin.com"
  },
  {
    id: "4",
    name: "Lisa Park",
    title: "Managing Partner, Growth Capital",
    bio: "Investment expert focused on early-stage startups with a track record of 100+ successful investments.",
    imageUrl: "/logo/yen.png",
    linkedinUrl: "https://linkedin.com"
  },
  {
    id: "5",
    name: "Ahmed Hassan",
    title: "Chief Marketing Officer, BrandWorks",
    bio: "Marketing guru with expertise in brand building and customer acquisition for startups and SMEs.",
    imageUrl: "/logo/yen.png",
    linkedinUrl: "https://linkedin.com"
  },
  {
    id: "6",
    name: "Jennifer Lee",
    title: "Product Director, Innovation Labs",
    bio: "Product development specialist with extensive experience in bringing innovative products to market.",
    imageUrl: "/logo/yen.png",
    linkedinUrl: "https://linkedin.com"
  }
];

export default function HomePage() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 'left' | 'right') => {
    if (scrollRef.current) {
      const amount = 320;
      scrollRef.current.scrollBy({ left: dir === 'left' ? -amount : amount, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-light-theme">
      {/* Hero Section */}
      <HeroSection />

      {/* Gallery Section */}
      <GallerySection />

      {/* Planning Section */}
      <PlanningSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* Contact Section */}
      <ContactSection />

      {/* <section className="container mx-auto px-4 py-20">
        <div className="text-center max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 slide-up">
            <span className="text-momentus-copper">Empowering</span>{" "}
            <span className="text-momentus-navy">Business</span>{" "}
            <span className="text-momentus-navy-light">Innovation</span>
          </h1>
          <p className="text-xl md:text-2xl text-momentus-text-light max-w-3xl mx-auto mb-12 fade-in">
            Momentus Motion Corporation - Driving innovation and excellence in business solutions.
            Join us in creating transformative experiences that propel businesses forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Link href="/about">
              <Button
                size="lg"
                className="btn-hover-lift bg-momentus-copper hover:bg-momentus-copper-dark text-white text-lg px-8 py-4"
              >
                Discover Our Story
              </Button>
            </Link>
            <Link href="/projects">
              <Button
                variant="outline"
                size="lg"
                className="btn-hover-lift text-lg px-8 py-4 border-2 border-momentus-navy text-momentus-navy hover:bg-momentus-navy hover:text-white"
              >
                View Our Work
              </Button>
            </Link>
          </div>
        </div>

        
        <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <Card className="bg-white shadow-theme text-center hover:shadow-theme-lg transition-all">
            <CardContent className="p-6">
              <div className="text-4xl font-bold text-momentus-copper mb-2">250+</div>
              <div className="text-momentus-text-light">Happy Clients</div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-theme text-center hover:shadow-theme-lg transition-all">
            <CardContent className="p-6">
              <div className="text-4xl font-bold text-momentus-copper mb-2">$5M+</div>
              <div className="text-momentus-text-light">Revenue Generated</div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-theme text-center hover:shadow-theme-lg transition-all">
            <CardContent className="p-6">
              <div className="text-4xl font-bold text-momentus-copper mb-2">50+</div>
              <div className="text-momentus-text-light">Projects Completed</div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-theme text-center hover:shadow-theme-lg transition-all">
            <CardContent className="p-6">
              <div className="text-4xl font-bold text-momentus-copper mb-2">98%</div>
              <div className="text-momentus-text-light">Client Satisfaction</div>
            </CardContent>
          </Card>
        </div>
      </section> */}

      {/* Recent Contributions Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          <span className="text-momentus-navy">Recent Contributors</span>
        </h2>
        <div className="relative">
          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow p-2 border-2 border-momentus-copper hover:bg-momentus-copper hover:text-white transition"
            onClick={() => scroll('left')}
            aria-label="Scroll left"
            type="button"
          >
            <ChevronLeft size={28} />
          </button>
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto px-12 py-2"
            style={{ scrollBehavior: 'smooth', scrollbarWidth: 'none' }}
          >
            {dummyDonations.map((donation) => (
              <Card key={donation.id} className="w-56 min-w-[14rem] bg-white shadow-theme border border-momentus-slate-dark flex-shrink-0">
                <CardHeader className="flex flex-col items-center">
                  <Image src={donation.profileImage} alt={donation.donorName} width={48} height={48} className="rounded-full mb-1 border-2 border-momentus-copper" />
                  <CardTitle className="text-base text-momentus-navy text-center w-full truncate">{donation.donorName}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-xs text-momentus-text-light mb-1">${donation.amount.toLocaleString()}</div>
                  <div className="text-xs text-momentus-text-light mb-1">{donation.purpose}</div>
                  <div className="text-xs text-momentus-text-light">{donation.donorEmail}</div>
                </CardContent>
              </Card>
            ))}
          </div>
          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow p-2 border-2 border-momentus-copper hover:bg-momentus-copper hover:text-white transition"
            onClick={() => scroll('right')}
            aria-label="Scroll right"
            type="button"
          >
            <ChevronRight size={28} />
          </button>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="bg-momentus-section py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-momentus-navy">Why Choose</span>{" "}
              <span className="text-momentus-copper">Momentus Motion?</span>
            </h2>
            <p className="text-xl text-momentus-text-light max-w-3xl mx-auto">
              We provide comprehensive business solutions tailored to accelerate your company&apos;s growth and success.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="bg-white shadow-theme hover:shadow-theme-lg transition-all">
              <CardHeader>
                <div className="w-16 h-16 bg-momentus-copper rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl text-white">🚀</span>
                </div>
                <CardTitle className="text-2xl text-momentus-navy">Strategic Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-momentus-text-light">
                  Transform your business with cutting-edge strategies and innovative solutions 
                  that drive measurable results and sustainable growth.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-theme hover:shadow-theme-lg transition-all">
              <CardHeader>
                <div className="w-16 h-16 bg-momentus-copper rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl text-white">🤝</span>
                </div>
                <CardTitle className="text-2xl text-momentus-navy">Partnership Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-momentus-text-light">
                  Build lasting partnerships with industry leaders and leverage our extensive 
                  network to unlock new opportunities and markets.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-theme hover:shadow-theme-lg transition-all">
              <CardHeader>
                <div className="w-16 h-16 bg-momentus-copper rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl text-white">📈</span>
                </div>
                <CardTitle className="text-2xl text-momentus-navy">Accelerated Growth</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-momentus-text-light">
                  Experience rapid business expansion with our proven methodologies, expert 
                  guidance, and comprehensive support systems.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-momentus-copper">Our</span>{" "}
            <span className="text-momentus-navy">Services</span>
          </h2>
          <p className="text-xl text-momentus-text-light max-w-3xl mx-auto">
            Comprehensive business solutions designed to elevate your company at every stage of growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="bg-white shadow-theme hover:shadow-theme-lg transition-all">
            <CardHeader>
              <CardTitle className="text-xl text-momentus-navy">Business Consulting</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-momentus-text-light mb-4">
                Strategic guidance from industry experts to optimize operations and drive growth.
              </p>
              <Button variant="outline" size="sm" className="btn-hover-lift border-momentus-copper text-momentus-copper hover:bg-momentus-copper hover:text-white">
                Learn More
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-theme hover:shadow-theme-lg transition-all">
            <CardHeader>
              <CardTitle className="text-xl text-momentus-navy">Digital Transformation</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-momentus-text-light mb-4">
                Modernize your business with cutting-edge technology solutions and automation.
              </p>
              <Button variant="outline" size="sm" className="btn-hover-lift border-momentus-copper text-momentus-copper hover:bg-momentus-copper hover:text-white">
                Discover More
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-theme hover:shadow-theme-lg transition-all">
            <CardHeader>
              <CardTitle className="text-xl text-momentus-navy">Market Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-momentus-text-light mb-4">
                In-depth market research and competitive analysis to inform strategic decisions.
              </p>
              <Button variant="outline" size="sm" className="btn-hover-lift border-momentus-copper text-momentus-copper hover:bg-momentus-copper hover:text-white">
                Explore
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-theme hover:shadow-theme-lg transition-all">
            <CardHeader>
              <CardTitle className="text-xl text-momentus-navy">Brand Development</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-momentus-text-light mb-4">
                Build a powerful brand identity that resonates with your target audience.
              </p>
              <Button variant="outline" size="sm" className="btn-hover-lift border-momentus-copper text-momentus-copper hover:bg-momentus-copper hover:text-white">
                Get Started
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-theme hover:shadow-theme-lg transition-all">
            <CardHeader>
              <CardTitle className="text-xl text-momentus-navy">Financial Planning</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-momentus-text-light mb-4">
                Comprehensive financial strategies to ensure long-term sustainability and profitability.
              </p>
              <Button variant="outline" size="sm" className="btn-hover-lift border-momentus-copper text-momentus-copper hover:bg-momentus-copper hover:text-white">
                View Details
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-theme hover:shadow-theme-lg transition-all">
            <CardHeader>
              <CardTitle className="text-xl text-momentus-navy">Partnership Solutions</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-momentus-text-light mb-4">
                Strategic alliances and partnerships to expand your business reach and capabilities.
              </p>
              <Button variant="outline" size="sm" className="btn-hover-lift border-momentus-copper text-momentus-copper hover:bg-momentus-copper hover:text-white">
                Partner With Us
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Our Advisors Section */}
      <section className="bg-momentus-section py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-momentus-navy">Meet Our</span>{" "}
              <span className="text-momentus-copper">Expert Advisors</span>
            </h2>
            <p className="text-xl text-momentus-text-light max-w-3xl mx-auto">
              Learn from experienced professionals who are passionate about driving business success and innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {dummyMentors.map((mentor) => (
              <Card key={mentor.id} className="bg-white shadow-theme hover:shadow-theme-lg transition-all group">
                <CardContent className="p-6">
                  <div className="text-center">
                    <Image 
                      src={mentor.imageUrl} 
                      alt={mentor.name}
                      width={96}
                      height={96}
                      className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-momentus-copper/20 group-hover:border-momentus-copper transition-all"
                    />
                    <h3 className="text-xl font-semibold text-momentus-navy mb-1">{mentor.name}</h3>
                    <p className="text-sm font-medium text-momentus-text mb-2">{mentor.title}</p>
                    <p className="text-sm text-momentus-text-light mb-4 line-clamp-3">
                      {mentor.bio}
                    </p>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="btn-hover-lift border-momentus-copper text-momentus-copper hover:bg-momentus-copper hover:text-white"
                      onClick={() => window.open(mentor.linkedinUrl, '_blank')}
                    >
                      <span className="mr-2">🔗</span>
                      Connect on LinkedIn
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-momentus-navy py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-12">
            Join hundreds of successful companies who have partnered with Momentus Motion Corporation.
            Your journey to excellence starts here.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="btn-hover-lift text-lg px-8 py-4 bg-momentus-copper hover:bg-momentus-copper-light text-white border-2 border-momentus-copper"
              >
                Schedule Consultation
              </Button>
            </Link>
            <Link href="/about">
              <Button
                size="lg"
                variant="outline"
                className="btn-hover-lift text-lg px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-momentus-navy"
              >
                Discover Our Story
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-momentus-navy-dark text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Image
                  src="/logo/yen.png"
                  alt="Momentus Motion Corporation Logo"
                  width={32}
                  height={32}
                  className="transition-transform duration-300 hover:scale-105"
                />
                <span className="text-xl font-bold">Momentus Motion</span>
              </div>
              <p className="text-white/70">
                Driving innovation and excellence in business solutions for forward-thinking organizations.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-momentus-copper">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-white/70 hover:text-momentus-copper transition-colors">About Us</Link></li>
                <li><Link href="/projects" className="text-white/70 hover:text-momentus-copper transition-colors">Our Work</Link></li>
                <li><Link href="/contact" className="text-white/70 hover:text-momentus-copper transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-momentus-copper">Services</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-white/70 hover:text-momentus-copper transition-colors">Consulting</a></li>
                <li><a href="#" className="text-white/70 hover:text-momentus-copper transition-colors">Digital Transformation</a></li>
                <li><a href="#" className="text-white/70 hover:text-momentus-copper transition-colors">Market Analysis</a></li>
                <li><a href="#" className="text-white/70 hover:text-momentus-copper transition-colors">Brand Development</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-momentus-copper">Connect</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-white/70 hover:text-momentus-copper transition-colors">Newsletter</a></li>
                <li><a href="#" className="text-white/70 hover:text-momentus-copper transition-colors">Social Media</a></li>
                <li><a href="#" className="text-white/70 hover:text-momentus-copper transition-colors">Partners</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center">
            <p className="text-white/70">
              © 2025 Momentus Motion Corporation. Empowering businesses to achieve extraordinary results.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
