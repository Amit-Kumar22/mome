import { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Momentus Motion Corporation's mission to drive innovation and excellence in business solutions worldwide.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-light-theme">
      {/* Header */}
      <Navbar />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-momentus-copper">About</span>{" "}
            <span className="text-momentus-navy">Momentus Motion</span>
          </h1>
          <p className="text-xl md:text-2xl text-momentus-text-light max-w-3xl mx-auto">
            Driving innovation and excellence in business solutions worldwide
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="bg-white shadow-theme">
            <CardHeader>
              <CardTitle className="text-2xl text-momentus-navy flex items-center gap-3">
                🎯 Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-momentus-text-light leading-relaxed">
                To deliver transformative business solutions that empower organizations 
                to achieve sustainable growth, operational excellence, and market leadership 
                through strategic innovation and partnership excellence.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-theme">
            <CardHeader>
              <CardTitle className="text-2xl text-momentus-navy flex items-center gap-3">
                🔮 Our Vision
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-momentus-text-light leading-relaxed">
                To be the global leader in business transformation and innovation, 
                creating lasting value for our clients through cutting-edge solutions, 
                strategic insights, and unwavering commitment to excellence.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* What We Offer */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-momentus-navy">
            What We Offer
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white shadow-theme hover:shadow-theme-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-momentus-copper rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-white text-3xl">🚀</span>
                </div>
                <CardTitle className="text-xl text-momentus-navy">Strategic Consulting</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-momentus-text-light">
                  Comprehensive business strategy development, market positioning, 
                  and growth planning to help organizations achieve their goals.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-theme hover:shadow-theme-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-momentus-copper rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-white text-3xl">👥</span>
                </div>
                <CardTitle className="text-xl text-momentus-navy">Digital Transformation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-momentus-text-light">
                  End-to-end digital solutions including process automation, 
                  technology integration, and digital strategy implementation.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-theme hover:shadow-theme-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-momentus-copper rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-white text-3xl">💰</span>
                </div>
                <CardTitle className="text-xl text-momentus-navy">Financial Planning</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-momentus-text-light">
                  Expert financial analysis, budgeting, investment strategies, 
                  and capital optimization for sustainable business growth.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-theme hover:shadow-theme-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-momentus-copper rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-white text-3xl">🌐</span>
                </div>
                <CardTitle className="text-xl text-momentus-navy">Market Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-momentus-text-light">
                  In-depth market research, competitive analysis, and consumer insights 
                  to drive informed business decisions and strategies.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-theme hover:shadow-theme-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-momentus-copper rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-white text-3xl">📚</span>
                </div>
                <CardTitle className="text-xl text-momentus-navy">Brand Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-momentus-text-light">
                  Complete brand strategy, identity design, positioning, and 
                  marketing campaigns to build powerful market presence.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-theme hover:shadow-theme-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-momentus-copper rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-white text-3xl">🏆</span>
                </div>
                <CardTitle className="text-xl text-momentus-navy">Partnership Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-momentus-text-light">
                  Strategic alliance formation, joint venture structuring, and 
                  partnership management for mutual business success.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="bg-momentus-navy text-white max-w-2xl mx-auto shadow-theme-lg">
            <CardContent className="pt-8 pb-8">
              <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
              <p className="text-lg mb-6 text-white/90">
                Partner with Momentus Motion Corporation for strategic growth and innovation.
              </p>
              <Link href="/contact">
                <Button 
                  size="lg" 
                  className="bg-momentus-copper hover:bg-momentus-copper-light text-white btn-hover-lift"
                >
                  Get in Touch
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-momentus-navy-dark text-white py-8 mt-20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white/70">
            © 2025 Momentus Motion Corporation. Driving innovation and excellence in business solutions.
          </p>
        </div>
      </footer>
    </div>
  );
}
