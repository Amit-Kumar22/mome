import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-light-theme">
      {/* Contact Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-momentus-copper">Get in</span>{" "}
            <span className="text-momentus-navy">Touch</span>
          </h1>
          <p className="text-xl md:text-2xl text-momentus-text-light max-w-3xl mx-auto">
            Ready to transform your business? Connect with Momentus Motion Corporation today!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <Card className="bg-white shadow-theme">
            <CardHeader>
              <CardTitle className="text-2xl text-momentus-navy">Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-momentus-copper rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl">📍</span>
                </div>
                <div>
                  <h3 className="font-semibold text-momentus-text mb-2">Our India Location</h3>
                  <p className="text-momentus-text-light">
                    Momentus Motion Corporation<br />
                    RA-23 Inderpuri,<br />
                    New Delhi-110012, India<br />
                  </p>
                  <h3 className="font-semibold text-momentus-text mt-4 mb-2">Our USA Location</h3>
                  <p className="text-momentus-text-light">
                    Momentus Motion Corporation<br />
                    4436 Sunflower Ln, Prosper, Texas<br />
                    75078
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-momentus-copper rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl">📧</span>
                </div>
                <div>
                  <h3 className="font-semibold text-momentus-text mb-2">Email Us</h3>
                  <div className="text-momentus-text-light space-y-1">
                    <p>info@momentusmotion.com</p>
                    <p>business@momentusmotion.com</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-momentus-copper rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl">📞</span>
                </div>
                <div>
                  <h3 className="font-semibold text-momentus-text mb-2">Call Us</h3>
                  <div className="text-momentus-text-light space-y-1">
                    <p>+1 (203) 987-4452</p>
                    <p>+91 8777687605</p>
                    <p className="text-sm mt-2">Mon - Fri: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-theme">
            <CardHeader>
              <CardTitle className="text-2xl text-momentus-navy">Connect With Us</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-momentus-navy mb-4">Social Media</h3>
                <p className="text-momentus-text-light mb-4">
                  Follow us for the latest business insights, success stories, and industry trends.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a 
                    href="https://www.linkedin.com/company/momentusmotion/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-momentus-copper text-white rounded-lg hover:bg-momentus-copper-dark transition-colors"
                  >
                    LinkedIn
                  </a>
                  <button className="px-4 py-2 bg-momentus-slate-dark text-momentus-text rounded-lg hover:bg-momentus-slate transition-colors">
                    Twitter
                  </button>
                  <button className="px-4 py-2 bg-momentus-slate-dark text-momentus-text rounded-lg hover:bg-momentus-slate transition-colors">
                    Instagram
                  </button>
                </div>
              </div>

              <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6">
                <h4 className="font-semibold text-blue-800 mb-3">📬 Business Inquiries</h4>
                <p className="text-blue-700 text-sm mb-4">
                  For consulting services, strategic partnerships, or business opportunities, please reach out via email or phone. 
                  Our team typically responds within 24 hours.
                </p>
                <div className="text-blue-800 text-sm font-medium">
                  Email: info@momentusmotion.com
                </div>
              </div>

              <div className="bg-momentus-slate border-2 border-momentus-copper/30 rounded-lg p-6">
                <h4 className="font-semibold text-momentus-navy mb-3">🚀 Partner With Us</h4>
                <p className="text-momentus-text-light text-sm">
                  Ready to drive innovation in your organization? Contact us to discuss how Momentus Motion Corporation 
                  can help achieve your strategic goals.
                </p>
              </div>
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
