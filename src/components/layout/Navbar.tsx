"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  className?: string;
}

export default function Navbar({ className = "" }: NavbarProps) {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    <header className={`bg-white/80 backdrop-blur-sm shadow-theme sticky top-0 z-50 ${className}`}>
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
            <span className="text-xl font-bold bg-gradient-purple-pink bg-clip-text text-transparent hidden lg:block">
              Momentus Motion
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <Link href="/" className={`nav-hover-purple ${isActivePage("/") ? "nav-active" : ""}`}>
              Home
            </Link>
            <Link href="/about" className={`nav-hover-purple ${isActivePage("/about") ? "nav-active" : ""}`}>
              About
            </Link>
            <Link href="/projects" className={`nav-hover-purple ${isActivePage("/projects") ? "nav-active" : ""}`}>
              Projects
            </Link>
            <Link href="/contact" className={`nav-hover-purple ${isActivePage("/contact") ? "nav-active" : ""}`}>
              Contact
            </Link>
          </nav>
          
          {/* Desktop Call to Action */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/contact">
              <Button className="btn-hover-glow bg-gradient-purple-pink text-white border-0 hover:shadow-xl">
                Get in Touch
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-yen-purple transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
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
                className={`nav-hover-purple py-2 px-4 rounded-lg hover:bg-purple-50 transition-all duration-300 ${isActivePage("/") ? "nav-active" : ""}`}
                onClick={handleNavClick}
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className={`nav-hover-purple py-2 px-4 rounded-lg hover:bg-purple-50 transition-all duration-300 ${isActivePage("/about") ? "nav-active" : ""}`}
                onClick={handleNavClick}
              >
                About
              </Link>
              <Link 
                href="/projects" 
                className={`nav-hover-purple py-2 px-4 rounded-lg hover:bg-purple-50 transition-all duration-300 ${isActivePage("/projects") ? "nav-active" : ""}`}
                onClick={handleNavClick}
              >
                Projects
              </Link>
              <Link 
                href="/contact" 
                className={`nav-hover-purple py-2 px-4 rounded-lg hover:bg-purple-50 transition-all duration-300 ${isActivePage("/contact") ? "nav-active" : ""}`}
                onClick={handleNavClick}
              >
                Contact
              </Link>
              
              {/* Mobile CTA */}
              <div className="border-t border-gray-200 pt-4 mt-4">
                <Link href="/contact" onClick={handleNavClick}>
                  <Button className="w-full btn-hover-glow bg-gradient-purple-pink text-white border-0">
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
