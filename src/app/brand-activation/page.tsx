import ServiceHero from "@/components/sections/ServiceHero";
import IntroWithImage from "@/components/sections/IntroWithImage";
import ComprehensiveSection from "@/components/sections/ComprehensiveSection";
import PlanningSection from "@/components/sections/PlanningSection";
import BrandSection from "@/components/sections/BrandSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FAQSection from "@/components/sections/FAQSection";
import ContactSection from "@/components/sections/ContactSection";

export default function BrandActivationPage() {
  // Comprehensive services data
  const comprehensiveServices = [
    {
      title: "Brand Strategy Development",
      description: "Create powerful brand strategies that resonate with your target audience and drive engagement.",
    },
    {
      title: "Experiential Marketing",
      description: "Deliver immersive brand experiences that create lasting emotional connections with consumers.",
    },
    {
      title: "Product Launches",
      description: "Execute memorable product launches that generate buzz and drive market adoption.",
    },
    {
      title: "Event Activation",
      description: "Transform events into powerful brand activation platforms with strategic execution.",
    },
    {
      title: "Digital Integration",
      description: "Seamlessly integrate digital touchpoints to amplify your brand activation campaigns.",
    },
    {
      title: "Sampling Campaigns",
      description: "Design and execute product sampling programs that convert prospects into loyal customers.",
    },
    {
      title: "Brand Ambassador Programs",
      description: "Build and manage brand ambassador networks to authentically promote your brand.",
    },
    {
      title: "Retail Activations",
      description: "Create engaging in-store experiences that drive foot traffic and boost sales.",
    },
    {
      title: "Sponsorship Activation",
      description: "Maximize ROI from sponsorships through strategic activation planning and execution.",
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
      name: "Rajesh Kumar",
      role: "Marketing Director",
      company: "Tech Innovations Ltd",
      content: "The brand activation campaign exceeded our expectations. The team's creativity and attention to detail resulted in a 40% increase in brand awareness. Their experiential marketing approach truly connected with our target audience.",
      rating: 5,
    },
    {
      id: 2,
      name: "Priya Sharma",
      role: "Brand Manager",
      company: "Consumer Goods Corp",
      content: "Outstanding service! The product launch event was flawlessly executed. They managed every aspect professionally, from conceptualization to execution. Our sales increased by 35% in the first quarter post-launch.",
      rating: 5,
    },
    {
      id: 3,
      name: "Amit Patel",
      role: "CEO",
      company: "Startup Ventures",
      content: "Working with this team was transformative for our brand. Their strategic approach to brand activation helped us establish a strong market presence. The ROI on our investment was exceptional.",
      rating: 5,
    },
    {
      id: 4,
      name: "Sneha Reddy",
      role: "Events Head",
      company: "Fashion Retail Group",
      content: "The retail activation campaign they designed was innovative and highly effective. Customer engagement increased significantly, and we saw a direct impact on our sales numbers. Highly recommend their services!",
      rating: 5,
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <ServiceHero
        title="Brand Activation"
        subtitle="Create powerful brand experiences that drive engagement and build lasting customer relationships"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "What We Offer", href: "#" },
        ]}
      />

      {/* Intro with Image - First Section */}
      <IntroWithImage
        badge="WHO WE ARE"
        title="Transform Your Brand with Strategic Activation"
        description={[
          "Brand activation is more than just marketing—it's about creating meaningful connections between your brand and your audience. We specialize in designing and executing innovative brand activation campaigns that bring your brand to life and drive measurable results.",
          "Our team combines strategic thinking with creative execution to deliver experiences that resonate with your target market. From experiential marketing to digital activations, we ensure your brand stands out in today's competitive landscape.",
        ]}
        imageSrc="/event2.jpg"
        imageAlt="Brand Activation"
        imagePosition="right"
      />

      {/* Intro with Image - Second Section */}
      <IntroWithImage
        badge="OUR APPROACH"
        title="Strategic Brand Activation Solutions"
        description={[
          "We believe in data-driven strategies combined with creative excellence. Our approach begins with understanding your brand, audience, and objectives. We then craft customized activation plans that align with your business goals.",
          "Every campaign is designed to create buzz, generate leads, and build brand loyalty. Our team manages everything from concept development to post-event analysis, ensuring maximum impact and ROI for your investment.",
        ]}
        imageSrc="/event.jpg"
        imageAlt="Brand Strategy"
        imagePosition="left"
      />

      {/* Comprehensive Services Section */}
      <ComprehensiveSection
        title="Comprehensive Brand Activation Services"
        subtitle="We offer end-to-end brand activation solutions tailored to your specific needs"
        items={comprehensiveServices}
      />

      {/* Planning Section */}
      <PlanningSection />

      {/* Brand Section */}
      <BrandSection
        title="Brands We've Worked With"
        subtitle="Trusted by leading brands to deliver exceptional activation campaigns"
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
