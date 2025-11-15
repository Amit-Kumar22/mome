"use client";

import { useState } from "react";

interface ComprehensiveItem {
  title: string;
  description: string;
}

interface ComprehensiveSectionProps {
  title: string;
  subtitle?: string;
  items: ComprehensiveItem[];
}

export default function ComprehensiveSection({
  title,
  subtitle,
  items,
}: ComprehensiveSectionProps) {
  const [selectedItem, setSelectedItem] = useState<number>(0);
  
  // Use only first 5 items
  const displayItems = items.slice(0, 5);

  return (
    <section className="py-12 md:py-16 bg-momentus-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 space-y-3">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-momentus-navy">
            {title}
          </h2>
          {subtitle && (
            <p className="text-sm md:text-base text-momentus-text-light max-w-4xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>

        {/* Desktop: Circular Flow Diagram */}
        <div className="hidden lg:block max-w-5xl mx-auto relative" style={{ height: '600px' }}>
          {/* Circular Dotted Line */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
            <circle 
              cx="50%" 
              cy="50%" 
              r="38%" 
              fill="none" 
              stroke="#FF6B35" 
              strokeWidth="2" 
              strokeDasharray="8,8" 
              opacity="0.3" 
            />
          </svg>

          {/* Center Description Box */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ zIndex: 10, width: '320px' }}>
            <div className="bg-white rounded-xl p-6 shadow-theme-lg border-2 border-momentus-copper/30 text-center">
              <h3 className="text-xl md:text-2xl font-bold text-momentus-navy mb-3">
                {displayItems[selectedItem].title}
              </h3>
              <p className="text-sm text-momentus-text-light leading-relaxed">
                {displayItems[selectedItem].description}
              </p>
            </div>
          </div>

          {/* Circular Items on the Circle */}
          {displayItems.map((item, index) => {
            // Calculate position on circle (5 items evenly distributed)
            const angle = (index * 72 - 90) * (Math.PI / 180); // Start from top
            const radius = 38; // Percentage
            const x = 50 + radius * Math.cos(angle);
            const y = 50 + radius * Math.sin(angle);

            return (
              <div
                key={index}
                className="absolute cursor-pointer group"
                style={{
                  left: `${x}%`,
                  top: `${y}%`,
                  transform: 'translate(-50%, -50%)',
                  zIndex: 20,
                }}
                onClick={() => setSelectedItem(index)}
              >
                <div 
                  className={`w-36 h-36 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 transform hover:scale-110 ${
                    selectedItem === index 
                      ? 'bg-momentus-copper-dark scale-110' 
                      : 'bg-momentus-copper hover:bg-momentus-copper-dark'
                  }`}
                >
                  <h4 className="text-white text-base font-bold text-center px-4">
                    {item.title}
                  </h4>
                </div>
                
                {/* Connection Line to Center */}
                <svg 
                  className="absolute inset-0 pointer-events-none" 
                  style={{ width: '200%', height: '200%', left: '-50%', top: '-50%', zIndex: -1 }}
                >
                  <line 
                    x1="50%" 
                    y1="50%" 
                    x2="50%" 
                    y2="50%" 
                    stroke={selectedItem === index ? "#FF6B35" : "#FF6B35"} 
                    strokeWidth={selectedItem === index ? "2" : "1"} 
                    opacity={selectedItem === index ? "0.6" : "0.2"} 
                  />
                </svg>
              </div>
            );
          })}
        </div>

        {/* Mobile & Tablet: List View */}
        <div className="lg:hidden space-y-4 max-w-2xl mx-auto">
          {displayItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-5 border-l-4 border-momentus-copper shadow-theme hover:shadow-theme-lg transition-all duration-300"
            >
              <h3 className="text-lg font-bold text-momentus-navy mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-momentus-text-light leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
