"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FAQ {
  id: number;
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    id: 1,
    question: "What services do corporate event management companies in Delhi offer?",
    answer: "Corporate event management companies in Delhi offer a comprehensive range of services including venue selection and booking, event planning and coordination, audio-visual equipment setup, catering arrangements, decoration and theme design, entertainment management, guest registration, and post-event analysis. We handle everything from small corporate meetings to large-scale conferences and product launches."
  },
  {
    id: 2,
    question: "Why should I hire a corporate event planner in Delhi?",
    answer: "Hiring a professional corporate event planner saves you time, reduces stress, and ensures a flawless execution. We bring expertise in vendor management, budget optimization, creative design solutions, and problem-solving. Our experience helps avoid common pitfalls and creates memorable experiences that align with your brand objectives and corporate culture."
  },
  {
    id: 3,
    question: "How do corporate event organizers in Delhi ensure event success?",
    answer: "We ensure event success through meticulous planning, comprehensive risk assessment, experienced team coordination, quality vendor partnerships, and real-time problem solving. Our proven processes include detailed timelines, contingency planning, regular client communication, on-site supervision, and thorough post-event evaluation to guarantee seamless execution."
  },
  {
    id: 4,
    question: "What types of corporate events can Eventales organize in Delhi NCR?",
    answer: "Eventales specializes in organizing various corporate events including conferences and seminars, product launches, team building activities, annual general meetings, award ceremonies, corporate parties, trade shows and exhibitions, networking events, training workshops, and brand activation campaigns across Delhi NCR."
  },
  {
    id: 5,
    question: "How much does it cost to hire a corporate event management company in Delhi?",
    answer: "The cost varies based on event type, scale, venue, guest count, and service requirements. We offer customized packages ranging from budget-friendly options to premium luxury events. Contact us for a detailed quote tailored to your specific needs. We ensure transparent pricing with no hidden costs and maximum value for your investment."
  },
  {
    id: 6,
    question: "How early should I book a corporate event organizer in Delhi NCR?",
    answer: "We recommend booking at least 3-6 months in advance for large corporate events to ensure venue availability and adequate planning time. However, we can also accommodate urgent requirements with 2-4 weeks notice for smaller events. Early booking provides more vendor options, better pricing, and time for creative customization."
  },
  {
    id: 7,
    question: "What makes Eventales one of the best corporate event management companies in Delhi NCR?",
    answer: "Eventales stands out with 10+ years of experience, 500+ successful events, dedicated project managers, in-house creative team, extensive vendor network, innovative technology integration, 24/7 support, and commitment to excellence. Our personalized approach ensures every event reflects your unique vision and exceeds expectations."
  },
  {
    id: 8,
    question: "Can Eventales organize large-scale corporate events in Delhi?",
    answer: "Yes, absolutely! We have extensive experience managing large-scale corporate events with 1000+ attendees. Our capabilities include managing multiple venues simultaneously, coordinating complex logistics, handling VIP guests, ensuring security protocols, and delivering flawless execution regardless of event size or complexity."
  }
];

export default function FAQSection() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-10">
          <p className="text-momentus-copper font-semibold text-sm uppercase tracking-wider mb-2">
            GET ANSWERS
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-momentus-navy mb-2">
            FAQS ABOUT CORPORATE EVENT MANAGEMENT COMPANIES IN DELHI NCR
          </h2>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-5xl mx-auto space-y-3">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="border-2 border-momentus-slate-dark rounded-lg overflow-hidden transition-all duration-300 hover:border-momentus-copper"
            >
              {/* Question Button */}
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full flex items-center justify-between p-4 md:p-5 text-left bg-white hover:bg-momentus-section transition-colors duration-300"
                aria-expanded={openId === faq.id}
                aria-controls={`faq-answer-${faq.id}`}
              >
                <span className="text-sm md:text-base font-semibold text-momentus-navy pr-4">
                  {faq.question}
                </span>
                <div className="flex-shrink-0">
                  {openId === faq.id ? (
                    <Minus className="w-5 h-5 text-momentus-copper transition-transform duration-300" />
                  ) : (
                    <Plus className="w-5 h-5 text-momentus-navy transition-transform duration-300" />
                  )}
                </div>
              </button>

              {/* Answer */}
              <div
                id={`faq-answer-${faq.id}`}
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openId === faq.id ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="p-4 md:p-5 pt-0 bg-momentus-section/30">
                  <p className="text-sm md:text-base text-momentus-text-light leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
