"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";

interface NavbarProps {
  className?: string;
}

export default function Navbar({ className = "" }: NavbarProps) {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  // Helper function to check if current path matches the link
  const isActivePage = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`bg-white shadow-theme sticky top-0 z-50 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-3" onClick={handleNavClick}>
            <Image
              src="/logo/yen.png"
              alt="Momentus Motion Logo"
              width={50}
              height={50}
              className="transition-transform duration-300 hover:scale-105"
              priority
            />
            <span className="text-xl font-bold text-momentus-navy hidden lg:block">
              Momentus Motion
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <Link href="/" className={`nav-hover-momentus ${isActivePage("/") ? "nav-active" : ""}`}>
              Home
            </Link>
            <Link href="/about" className={`nav-hover-momentus ${isActivePage("/about") ? "nav-active" : ""}`}>
              About
            </Link>
            
            {/* What We Offer Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setIsServicesDropdownOpen(true)}
              onMouseLeave={() => setIsServicesDropdownOpen(false)}
            >
              <button 
                className={`nav-hover-momentus flex items-center gap-1 ${
                  isActivePage("/brand-activation") || isActivePage("/conference") ? "nav-active" : ""
                }`}
              >
                What We Offer
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isServicesDropdownOpen ? "rotate-180" : ""}`} />
              </button>
              
              {/* Dropdown Menu */}
              {isServicesDropdownOpen && (
                <div className="absolute top-full left-0 pt-2 w-48">
                  <div className="bg-white rounded-lg shadow-theme-lg border border-momentus-slate-dark overflow-hidden">
                    <Link 
                      href="/brand-activation" 
                      className={`block px-4 py-3 text-momentus-text hover:bg-momentus-section hover:text-momentus-copper transition-all duration-300 ${
                        isActivePage("/brand-activation") ? "bg-momentus-section text-momentus-copper" : ""
                      }`}
                    >
                      Brand Activation
                    </Link>
                    <Link 
                      href="/conference" 
                      className={`block px-4 py-3 text-momentus-text hover:bg-momentus-section hover:text-momentus-copper transition-all duration-300 ${
                        isActivePage("/conference") ? "bg-momentus-section text-momentus-copper" : ""
                      }`}
                    >
                      Conference
                    </Link>
                  </div>
                </div>
              )}
            </div>
            
            <Link href="/projects" className={`nav-hover-momentus ${isActivePage("/projects") ? "nav-active" : ""}`}>
              Projects
            </Link>
            <Link href="/contact" className={`nav-hover-momentus ${isActivePage("/contact") ? "nav-active" : ""}`}>
              Contact
            </Link>
          </nav>
          
          {/* Desktop Call to Action */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/contact">
              <Button className="btn-hover-lift bg-momentus-copper hover:bg-momentus-copper-dark text-white border-0">
                Get in Touch
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-momentus-text hover:text-momentus-copper transition-colors focus:outline-none focus:ring-2 focus:ring-momentus-copper focus:ring-opacity-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-3 pt-4">
              <Link 
                href="/" 
                className={`nav-hover-momentus py-2 px-4 rounded-lg transition-all duration-300 ${isActivePage("/") ? "nav-active" : ""}`}
                onClick={handleNavClick}
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className={`nav-hover-momentus py-2 px-4 rounded-lg transition-all duration-300 ${isActivePage("/about") ? "nav-active" : ""}`}
                onClick={handleNavClick}
              >
                About
              </Link>
              
              {/* Mobile What We Offer Dropdown */}
              <div>
                <button
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                  className={`nav-hover-momentus py-2 px-4 rounded-lg transition-all duration-300 w-full text-left flex items-center justify-between ${
                    isActivePage("/brand-activation") || isActivePage("/conference") ? "nav-active" : ""
                  }`}
                >
                  What We Offer
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isMobileServicesOpen ? "rotate-180" : ""}`} />
                </button>
                {isMobileServicesOpen && (
                  <div className="ml-4 mt-2 space-y-2">
                    <Link 
                      href="/brand-activation" 
                      className={`block py-2 px-4 rounded-lg text-sm transition-all duration-300 ${
                        isActivePage("/brand-activation") ? "bg-momentus-section text-momentus-copper" : "text-momentus-text hover:bg-momentus-section hover:text-momentus-copper"
                      }`}
                      onClick={handleNavClick}
                    >
                      Brand Activation
                    </Link>
                    <Link 
                      href="/conference" 
                      className={`block py-2 px-4 rounded-lg text-sm transition-all duration-300 ${
                        isActivePage("/conference") ? "bg-momentus-section text-momentus-copper" : "text-momentus-text hover:bg-momentus-section hover:text-momentus-copper"
                      }`}
                      onClick={handleNavClick}
                    >
                      Conference
                    </Link>
                  </div>
                )}
              </div>
              
              <Link 
                href="/projects" 
                className={`nav-hover-momentus py-2 px-4 rounded-lg transition-all duration-300 ${isActivePage("/projects") ? "nav-active" : ""}`}
                onClick={handleNavClick}
              >
                Projects
              </Link>
              <Link 
                href="/contact" 
                className={`nav-hover-momentus py-2 px-4 rounded-lg transition-all duration-300 ${isActivePage("/contact") ? "nav-active" : ""}`}
                onClick={handleNavClick}
              >
                Contact
              </Link>
              
              {/* Mobile CTA */}
              <div className="border-t border-gray-200 pt-4 mt-4">
                <Link href="/contact" onClick={handleNavClick}>
                  <Button className="w-full btn-hover-lift bg-momentus-copper hover:bg-momentus-copper-dark text-white border-0">
                    Get in Touch
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
