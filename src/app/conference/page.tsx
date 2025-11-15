import ServiceHero from "@/components/sections/ServiceHero";
import IntroWithImage from "@/components/sections/IntroWithImage";
import ComprehensiveSection from "@/components/sections/ComprehensiveSection";
import PlanningSection from "@/components/sections/PlanningSection";
import BrandSection from "@/components/sections/BrandSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FAQSection from "@/components/sections/FAQSection";
import ContactSection from "@/components/sections/ContactSection";

export default function ConferencePage() {
  // Comprehensive services data
  const comprehensiveServices = [
    {
      title: "Conference Planning",
      description: "End-to-end conference planning services from concept to execution with meticulous attention to detail.",
    },
    {
      title: "Venue Selection",
      description: "Strategic venue sourcing and negotiation to find the perfect location for your conference.",
    },
    {
      title: "Speaker Management",
      description: "Comprehensive speaker coordination including invitation, travel, and on-site support.",
    },
    {
      title: "Registration Services",
      description: "Seamless attendee registration with customized platforms and on-site check-in solutions.",
    },
    {
      title: "AV & Production",
      description: "State-of-the-art audio-visual equipment and production services for flawless presentations.",
    },
    {
      title: "Catering Management",
      description: "Curated catering solutions with diverse menu options to suit all dietary preferences.",
    },
    {
      title: "Exhibition Management",
      description: "Complete exhibition coordination including booth design, vendor management, and logistics.",
    },
    {
      title: "Virtual & Hybrid Events",
      description: "Cutting-edge virtual and hybrid conference solutions with interactive engagement features.",
    },
    {
      title: "Post-Event Analytics",
      description: "Detailed post-event reporting and analytics to measure success and ROI.",
    },
  ];

  // Brand logos data
  const brands = [
    { name: "Brand 1", logo: "/logo.png" },
    { name: "Brand 2", logo: "/logo.png" },
    { name: "Brand 3", logo: "/logo.png" },
    { name: "Brand 4", logo: "/logo.png" },
    { name: "Brand 5", logo: "/logo.png" },
    { name: "Brand 6", logo: "/logo.png" },
    { name: "Brand 7", logo: "/logo.png" },
    { name: "Brand 8", logo: "/logo.png" },
    { name: "Brand 9", logo: "/logo.png" },
    { name: "Brand 10", logo: "/logo.png" },
  ];

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Dr. Vikram Singh",
      role: "Conference Chair",
      company: "Medical Association of India",
      content: "The conference was executed flawlessly. From managing 500+ attendees to coordinating with international speakers, every detail was handled professionally. The feedback from participants was overwhelmingly positive.",
      rating: 5,
    },
    {
      id: 2,
      name: "Kavita Desai",
      role: "Head of Events",
      company: "Tech Summit Global",
      content: "Outstanding conference management! The hybrid event setup was seamless, allowing both in-person and virtual attendees to engage equally. The technical execution was perfect, with zero downtime.",
      rating: 5,
    },
    {
      id: 3,
      name: "Suresh Malhotra",
      role: "Director",
      company: "Industry Forum India",
      content: "We've organized multiple conferences with this team, and they never disappoint. Their expertise in managing large-scale events, attention to detail, and problem-solving skills are exceptional.",
      rating: 5,
    },
    {
      id: 4,
      name: "Ananya Krishnan",
      role: "Event Manager",
      company: "Academic Conferences Ltd",
      content: "From venue selection to post-event analytics, the entire process was smooth and professional. They transformed our vision into reality and exceeded all our expectations. Highly recommended!",
      rating: 5,
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <ServiceHero
        title="Conference Management"
        subtitle="Delivering world-class conferences that inspire, engage, and create lasting impact"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "What We Offer", href: "#" },
        ]}
      />

      {/* Intro with Image - First Section */}
      <IntroWithImage
        badge="CONFERENCE EXPERTS"
        title="Professional Conference Management Services"
        description={[
          "We specialize in organizing conferences of all sizes, from intimate gatherings to large-scale international events. Our team brings years of experience in conference planning, ensuring every aspect is executed flawlessly.",
          "From venue selection and speaker management to attendee engagement and post-event analysis, we handle every detail. Our goal is to create conferences that deliver value to attendees, speakers, and sponsors alike.",
        ]}
        imageSrc="/1.png"
        imageAlt="Conference Management"
        imagePosition="right"
      />

      {/* Intro with Image - Second Section */}
      <IntroWithImage
        badge="OUR EXPERTISE"
        title="Creating Memorable Conference Experiences"
        description={[
          "A successful conference requires meticulous planning, flawless execution, and the ability to adapt to changing circumstances. Our team excels in all these areas, bringing creativity and professionalism to every project.",
          "We leverage the latest technology and industry best practices to deliver conferences that engage attendees, facilitate meaningful connections, and achieve your event objectives. Whether in-person, virtual, or hybrid, we've got you covered.",
        ]}
        imageSrc="/1.png"
        imageAlt="Conference Planning"
        imagePosition="left"
      />

      {/* Comprehensive Services Section */}
      <ComprehensiveSection
        title="Comprehensive Conference Solutions"
        subtitle="Everything you need for a successful conference, all in one place"
        items={comprehensiveServices}
      />

      {/* Planning Section */}
      <PlanningSection />

      {/* Brand Section */}
      <BrandSection
        title="Organizations We've Served"
        subtitle="Trusted by leading organizations to deliver exceptional conference experiences"
        brands={brands}
      />

      {/* Testimonials Section */}
      <TestimonialsSection testimonials={testimonials} />

      {/* FAQ Section */}
      <FAQSection />

      {/* Contact Section */}
      <ContactSection />
    </main>
  );
}
