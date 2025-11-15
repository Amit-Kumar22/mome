"use client";

import { useState } from "react";
import { MapPin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: ""
  });

  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const newErrors = {
      fullName: "",
      email: "",
      phone: "",
      message: ""
    };
    let isValid = true;

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
      isValid = false;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
      isValid = false;
    } else if (!/^[\d+\-() ]+$/.test(formData.phone)) {
      newErrors.phone = "Only numbers and phone characters (#, -, +, etc) are accepted";
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", formData);
      alert("Thank you for contacting us! We will get back to you soon.");
      setFormData({ fullName: "", email: "", phone: "", message: "" });
    }
  };

  return (
    <section className="py-12 md:py-16 bg-momentus-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Left Side - Contact Form */}
          <div className="order-2 lg:order-1">
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Full Name */}
              <div>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleChange}
                  className={`w-full px-5 py-3 bg-white border-2 ${
                    errors.fullName ? "border-red-500" : "border-momentus-slate-dark"
                  } rounded-lg text-momentus-navy placeholder-momentus-text-light focus:outline-none focus:border-momentus-copper transition-colors duration-300`}
                />
                {errors.fullName && (
                  <p className="mt-1.5 text-xs text-red-500">{errors.fullName}</p>
                )}
              </div>

              {/* Email Address */}
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-5 py-3 bg-white border-2 ${
                    errors.email ? "border-red-500" : "border-momentus-slate-dark"
                  } rounded-lg text-momentus-navy placeholder-momentus-text-light focus:outline-none focus:border-momentus-copper transition-colors duration-300`}
                />
                {errors.email && (
                  <p className="mt-1.5 text-xs text-red-500">{errors.email}</p>
                )}
              </div>

              {/* Phone Number */}
              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-5 py-3 bg-white border-2 ${
                    errors.phone ? "border-red-500" : "border-momentus-slate-dark"
                  } rounded-lg text-momentus-navy placeholder-momentus-text-light focus:outline-none focus:border-momentus-copper transition-colors duration-300`}
                />
                {errors.phone && (
                  <p className="mt-1.5 text-xs text-red-500">{errors.phone}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-5 py-3 bg-white border-2 ${
                    errors.message ? "border-red-500" : "border-momentus-slate-dark"
                  } rounded-lg text-momentus-navy placeholder-momentus-text-light focus:outline-none focus:border-momentus-copper transition-colors duration-300 resize-none`}
                />
                {errors.message && (
                  <p className="mt-1.5 text-xs text-red-500">{errors.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                size="lg"
                className="w-full bg-momentus-copper hover:bg-momentus-copper-dark text-white font-bold text-base py-5 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-[1.02] uppercase tracking-wide"
              >
                Submit Now
              </Button>
            </form>
          </div>

          {/* Right Side - Contact Information */}
          <div className="order-1 lg:order-2">
            <div className="space-y-6">
              {/* Header */}
              <div>
                <p className="text-momentus-copper font-semibold text-sm uppercase tracking-wider mb-2">
                  GET IN TOUCH
                </p>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-momentus-navy mb-4">
                  CONTACT US FOR FURTHER INFORMATION
                </h2>
                <p className="text-sm md:text-base text-momentus-text-light leading-relaxed">
                  We&apos;re delighted to hear from you and are ready to answer any questions you may have about our event management services.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6 pt-4">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-white rounded-full flex items-center justify-center border-2 border-momentus-copper shadow-lg">
                    <MapPin className="w-6 h-6 text-momentus-copper" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-momentus-navy mb-1.5 uppercase">
                      Address
                    </h3>
                    <p className="text-sm text-momentus-text-light leading-relaxed">
                      Khasra 401 Second Floor, Right Side Vill,<br />
                      Chitorni, New Delhi, Delhi 110030
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-white rounded-full flex items-center justify-center border-2 border-momentus-copper shadow-lg">
                    <Mail className="w-6 h-6 text-momentus-copper" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-momentus-navy mb-1.5 uppercase">
                      Email Address
                    </h3>
                    <a
                      href="mailto:hello@eventales.com"
                      className="text-sm text-momentus-text-light hover:text-momentus-copper transition-colors duration-300"
                    >
                      hello@eventales.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-white rounded-full flex items-center justify-center border-2 border-momentus-copper shadow-lg">
                    <Phone className="w-6 h-6 text-momentus-copper" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-momentus-navy mb-1.5 uppercase">
                      Phone Number
                    </h3>
                    <div className="space-y-1">
                      <a
                        href="tel:+919910074464"
                        className="block text-sm text-momentus-text-light hover:text-momentus-copper transition-colors duration-300"
                      >
                        +91-9910074464
                      </a>
                      <a
                        href="tel:+919910205750"
                        className="block text-sm text-momentus-text-light hover:text-momentus-copper transition-colors duration-300"
                      >
                        +91-9910205750
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
