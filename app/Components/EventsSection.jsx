// components/EventsSection.jsx
"use client";

import React from "react";
import ScrollAnimation from "@/app/Components/ScrollAnimation";

export default function EventsSection() {
  const secondaryEvents = [
    {
      id: 1,
      category: "OIL & GAS",
      title: "Pipe Stress Analysis of a 44-inch Incinerator Line",
      date: "Duration · 6 Weeks",
      description:
        "Static and dynamic pipe stress analysis validating a proposed incinerator piping design modification, enabling the customer to approve and proceed with site modifications while improving efficiency.",
      image: "/assets/images/project/2.jpg",
      linkText: "Read More →",
    },
    {
      id: 2,
      category: "RENEWABLE ENERGY",
      title: "FEA of a Wind Turbine Generator (WTG) Transformer",
      date: "Duration · 5 Weeks",
      description:
        "FEA-based structural validation under transportation, lifting and extreme-wind loads, with optimised lifting arrangement, tie-down configuration and weld design.",
      image: "/assets/images/project/3.jpg",
      linkText: "Read More →",
    },
    {
      id: 3,
      category: "NUCLEAR",
      title: "Seismic Qualification of a 3.2 MW Induction Motor for a CCW Pump",
      date: "Duration · 5 Weeks",
      description:
        "Equipment qualification for Operating Basis Earthquake (OBE) loading, enabling the customer to release the motor for manufacturing and supply it to a nuclear power plant site.",
      image: "/assets/images/project/4.jpg",
      linkText: "Read More →",
    },
    
  ];

  return (
    <section className="events-section">
      <div className="events-wrapper">

        {/* =========================================
            SECTION HEADER
        ========================================= */}
        <ScrollAnimation>
          <div className="events-header-center">
            <span className="events-subtitle">Resource Library</span>

            
<h2 className="engineering-title">Projects</h2>

            <div className="events-underline" />
          </div>
        </ScrollAnimation>

        {/* =========================================
            ASYMMETRICAL EVENTS GRID LAYOUT
        ========================================= */}
        <div className="events-grid-layout">
          
          {/* Left Column: Featured Main Event Card */}
          <ScrollAnimation>
            <div className="event-featured-card">
              <div className="event-image-box">
                <img
                  src="/assets/images/project/1.jpg"
                  alt="Fitness-for-Service Assessment of a Pipeline During Lifting Operations"
                />
                <div className="event-badge">FEATURED</div>
              </div>
              <div className="event-content-box">
                <span className="event-date">Duration · 6 Months</span>
                <h3 className="event-heading">
                  Fitness-for-Service Assessment of a Pipeline During Lifting Operations
                </h3>
                <p className="event-text">
                  Fitness-for-Service assessment of a live pipeline affected by Corrosion Under Pipe
                  Support (CUPS), validating structural integrity during a 50 mm lift for UT
                  inspection — with reusable lifting guidelines for multiple pipe sizes and
                  configurations.
                </p>
                <a href="#read-more" className="event-read-more">
                  Read More <span>→</span>
                </a>
              </div>
            </div>
          </ScrollAnimation>

          {/* Right Column: Stacked Secondary Events */}
          <div className="events-stack-column">
            {secondaryEvents.map((ev, idx) => (
              <ScrollAnimation key={ev.id} delay={idx * 100}>
                <div className="event-row-card">
                  <div className="event-row-image">
                    <img src={ev.image} alt={ev.title} />
                    <span className="event-tag">{ev.category}</span>
                  </div>
                  <div className="event-row-content">
                    <span className="event-date">{ev.date}</span>
                    <h4 className="event-row-title">{ev.title}</h4>
                    {ev.location && <p className="event-location">{ev.location}</p>}
                    <p className="event-text-short">{ev.description}</p>
                    <a href="#read-more" className="event-read-more">
                      {ev.linkText}
                    </a>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}