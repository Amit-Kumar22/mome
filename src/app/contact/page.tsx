import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/layout/Navbar";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-light-theme">
      {/* Header */}
      <Navbar />

      {/* Contact Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gradient-animated">Get in</span>{" "}
            <span className="text-yen-purple">Touch</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your business? Connect with Momentus Motion Corporation today!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <Card className="bg-white/60 backdrop-blur-sm shadow-theme">
            <CardHeader>
              <CardTitle className="text-2xl text-yen-purple">Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-purple-pink rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl">📍</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Our India Location</h3>
                  <p className="text-muted-foreground">
                    Momentus Motion Corporation<br />
                    RA-23 Inderpuri,<br />
                    New Delhi-110012, India<br />
                  </p>
                  <h3 className="font-semibold text-foreground mt-4 mb-2">Our USA Location</h3>
                  <p className="text-muted-foreground">
                    Momentus Motion Corporation<br />
                    4436 Sunflower Ln, Prosper, Texas<br />
                    75078
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-purple-pink rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl">📧</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Email Us</h3>
                  <div className="text-muted-foreground space-y-1">
                    <p>info@momentusmotion.com</p>
                    <p>business@momentusmotion.com</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-purple-pink rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl">📞</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Call Us</h3>
                  <div className="text-muted-foreground space-y-1">
                    <p>+1 (203) 987-4452</p>
                    <p>+91 8777687605</p>
                    <p className="text-sm mt-2">Mon - Fri: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/60 backdrop-blur-sm shadow-theme">
            <CardHeader>
              <CardTitle className="text-2xl text-yen-purple">Connect With Us</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-yen-purple mb-4">Social Media</h3>
                <p className="text-muted-foreground mb-4">
                  Follow us for the latest business insights, success stories, and industry trends.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a 
                    href="https://www.linkedin.com/company/momentusmotion/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gradient-purple-pink text-white rounded-lg hover:opacity-90 transition-opacity"
                  >
                    LinkedIn
                  </a>
                  <button className="px-4 py-2 bg-gray-200 text-gray-600 rounded-lg">
                    Twitter
                  </button>
                  <button className="px-4 py-2 bg-gray-200 text-gray-600 rounded-lg">
                    Instagram
                  </button>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h4 className="font-semibold text-blue-800 mb-3">📬 Business Inquiries</h4>
                <p className="text-blue-700 text-sm mb-4">
                  For consulting services, strategic partnerships, or business opportunities, please reach out via email or phone. 
                  Our team typically responds within 24 hours.
                </p>
                <div className="text-blue-800 text-sm font-medium">
                  Email: info@momentusmotion.com
                </div>
              </div>

              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                <h4 className="font-semibold text-purple-800 mb-3">🚀 Partner With Us</h4>
                <p className="text-purple-700 text-sm">
                  Ready to drive innovation in your organization? Contact us to discuss how Momentus Motion Corporation 
                  can help achieve your strategic goals.
                </p>
              </div>
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
