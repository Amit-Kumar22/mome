"use client";

import Image from "next/image";

export default function PlanningSection() {
  // Planning services data
  const planningServices = [
    {
      id: 1,
      title: "Corporate Events",
      description: "At Eventales, we provide an extensive chain of event administration services specially devised to cater to a wide variety of needs. Being one on the best event management companies in Delhi NCR, our proficiency assures that every event is accomplished impeccably, supplying extraordinary services customized to fulfill the specific requirements of clients.",
      image: "/event.jpg",
    },
    {
      id: 2,
      title: "Conferences",
      description: "Professional conference planning and execution with state-of-the-art facilities, expert speakers coordination, and seamless event flow. We ensure your conference delivers maximum value to all attendees with our comprehensive planning services.",
      image: "/event2.jpg",
    },
  ];

  return (
    <section className="w-full py-12 md:py-16 bg-gradient-to-br from-momentus-navy via-momentus-navy-light to-momentus-navy-dark">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
            EVENT PLANNING SERVICES WE OFFER
          </h2>
          <p className="text-white/90 text-base md:text-lg max-w-4xl mx-auto leading-relaxed">
            At Eventales, we provide an extensive chain of event administration services specially devised to cater to a wide variety of needs.
            Being one on the <span className="font-semibold text-momentus-copper">best event management companies in Delhi NCR</span>, our proficiency assures that every event is accomplished
            impeccably, supplying extraordinary services customized to fulfill the specific requirements of clients. Let&apos;s take a glance at what we
            can offer
          </p>
        </div>

        {/* Planning Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {planningServices.map((service) => (
            <div
              key={service.id}
              className="flip-card h-80 lg:h-96"
            >
              <div className="flip-card-inner">
                {/* Front Side - Image */}
                <div className="flip-card-front">
                  <div className="relative w-full h-full rounded-xl overflow-hidden shadow-theme-lg">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-momentus-navy/70 via-momentus-navy/20 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-white text-2xl md:text-3xl font-bold">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Back Side - Content */}
                <div className="flip-card-back">
                  <div className="w-full h-full rounded-xl overflow-hidden shadow-theme-lg bg-white p-6 flex flex-col justify-center">
                    <h3 className="text-2xl md:text-3xl font-bold text-momentus-navy mb-4">
                      {service.title}
                    </h3>
                    <p className="text-momentus-text-light text-sm md:text-base leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <button className="mt-auto px-5 py-2.5 bg-momentus-copper hover:bg-momentus-copper-dark text-white font-semibold rounded-md shadow-copper transition-all duration-300 hover:scale-105 w-fit">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Flip Card CSS Styles */}
      <style jsx>{`
        .flip-card {
          perspective: 1000px;
        }

        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.8s;
          transform-style: preserve-3d;
        }

        .flip-card:hover .flip-card-inner {
          transform: rotateY(180deg);
        }

        .flip-card-front,
        .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }

        .flip-card-back {
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  );
}
