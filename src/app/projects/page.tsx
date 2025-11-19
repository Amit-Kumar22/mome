import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Users } from "lucide-react";

// Static project data
const staticProjects = [
  {
    id: "1",
    title: "Global Retail Chain Digital Transformation",
    description: "Complete digital infrastructure overhaul for 500+ retail locations, implementing cloud-based POS systems and customer analytics.",
    location: "New York, NY",
    date: "2024-03-15",
    participants: 50,
    icon: "�"
  },
  {
    id: "2",
    title: "Fortune 500 Strategic Repositioning",
    description: "Comprehensive brand and market strategy redesign resulting in 35% market share increase and $200M revenue growth.",
    location: "San Francisco, CA",
    date: "2024-01-10",
    participants: 75,
    icon: "📊"
  },
  {
    id: "3",
    title: "Healthcare Network Optimization",
    description: "Operational efficiency improvements across 20 healthcare facilities, reducing costs by 40% while improving patient satisfaction.",
    location: "Chicago, IL",
    date: "2024-02-01",
    participants: 60,
    icon: "🏥"
  },
  {
    id: "4",
    title: "FinTech Innovation Partnership",
    description: "Strategic alliance formation between traditional banking and emerging FinTech platforms, creating new revenue streams.",
    location: "Boston, MA",
    date: "2023-11-15",
    participants: 45,
    icon: "�"
  }
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-light-theme">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 slide-up">
            <span className="text-momentus-copper">Our</span> <span className="text-momentus-navy">Success Stories</span>
          </h1>
          <p className="text-xl text-momentus-text-light mb-8 slide-up">
            Transformative projects delivering measurable results and sustainable growth
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {staticProjects.map((project) => (
            <Card key={project.id} className="bg-white shadow-theme hover:shadow-theme-lg transition-all slide-up">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <div className="text-4xl">{project.icon}</div>
                </div>
                <CardTitle className="text-xl mb-2 text-momentus-navy">{project.title}</CardTitle>
                <p className="text-momentus-text-light text-sm">{project.description}</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-sm text-momentus-text-light">
                    <MapPin className="h-4 w-4 text-momentus-copper" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-momentus-text-light">
                    <Calendar className="h-4 w-4 text-momentus-copper" />
                    <span>{new Date(project.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-momentus-text-light">
                    <Users className="h-4 w-4 text-momentus-copper" />
                    <span>{project.participants} participants</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-momentus-navy">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Your Transformation?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Partner with Momentus Motion Corporation to drive innovation and achieve exceptional business results.
          </p>
          <Link href="/contact">
            <Button size="lg" className="btn-hover-lift bg-momentus-copper hover:bg-momentus-copper-light text-white border-0">
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-momentus-navy-dark text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white/70">
            © 2025 Momentus Motion Corporation. Driving innovation and excellence in business solutions.
          </p>
        </div>
      </footer>
    </div>
  );
}
