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
    <div className="min-h-screen bg-gradient-light-theme">
      {/* Header */}
      <Navbar />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gradient-animated">About</span>{" "}
            <span className="text-yen-purple">Momentus Motion</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Driving innovation and excellence in business solutions worldwide
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="bg-white/60 backdrop-blur-sm shadow-theme">
            <CardHeader>
              <CardTitle className="text-2xl text-yen-purple flex items-center gap-3">
                🎯 Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To deliver transformative business solutions that empower organizations 
                to achieve sustainable growth, operational excellence, and market leadership 
                through strategic innovation and partnership excellence.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/60 backdrop-blur-sm shadow-theme">
            <CardHeader>
              <CardTitle className="text-2xl text-yen-purple flex items-center gap-3">
                🔮 Our Vision
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To be the global leader in business transformation and innovation, 
                creating lasting value for our clients through cutting-edge solutions, 
                strategic insights, and unwavering commitment to excellence.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* What We Offer */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-yen-purple">
            What We Offer
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/60 backdrop-blur-sm shadow-theme hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-purple-pink rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-white text-3xl">🚀</span>
                </div>
                <CardTitle className="text-xl text-yen-purple">Strategic Consulting</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Comprehensive business strategy development, market positioning, 
                  and growth planning to help organizations achieve their goals.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/60 backdrop-blur-sm shadow-theme hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-purple-pink rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-white text-3xl">👥</span>
                </div>
                <CardTitle className="text-xl text-yen-purple">Digital Transformation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  End-to-end digital solutions including process automation, 
                  technology integration, and digital strategy implementation.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/60 backdrop-blur-sm shadow-theme hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-purple-pink rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-white text-3xl">💰</span>
                </div>
                <CardTitle className="text-xl text-yen-purple">Financial Planning</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Expert financial analysis, budgeting, investment strategies, 
                  and capital optimization for sustainable business growth.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/60 backdrop-blur-sm shadow-theme hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-purple-pink rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-white text-3xl">🌐</span>
                </div>
                <CardTitle className="text-xl text-yen-purple">Market Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  In-depth market research, competitive analysis, and consumer insights 
                  to drive informed business decisions and strategies.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/60 backdrop-blur-sm shadow-theme hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-purple-pink rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-white text-3xl">📚</span>
                </div>
                <CardTitle className="text-xl text-yen-purple">Brand Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Complete brand strategy, identity design, positioning, and 
                  marketing campaigns to build powerful market presence.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/60 backdrop-blur-sm shadow-theme hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-purple-pink rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-white text-3xl">🏆</span>
                </div>
                <CardTitle className="text-xl text-yen-purple">Partnership Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Strategic alliance formation, joint venture structuring, and 
                  partnership management for mutual business success.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="bg-gradient-purple-pink text-white max-w-2xl mx-auto">
            <CardContent className="pt-8 pb-8">
              <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
              <p className="text-lg mb-6 opacity-90">
                Partner with Momentus Motion Corporation for strategic growth and innovation.
              </p>
              <Link href="/contact">
                <Button 
                  size="lg" 
                  variant="secondary"
                  className="bg-white text-yen-purple hover:bg-gray-100 btn-hover-glow"
                >
                  Get in Touch
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-yen-purple text-white py-8 mt-20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-yen-pink-light">
            © 2025 Momentus Motion Corporation. Driving innovation and excellence in business solutions.
          </p>
        </div>
      </footer>
    </div>
  );
}
