// components/EventsSection.jsx
"use client";

import React from "react";
import ScrollAnimation from "@/app/Components/ScrollAnimation";

export default function EventsSection() {
  const secondaryEvents = [
    {
      id: 1,
      category: "WEBINAR",
      title: "The Role Of ISO 19443 In Supporting India's Expanding Nuclear Energy Program",
      date: "Apr 17, 2026",
      description: "The nuclear energy sector in India is expected to grow multifold...",
      image: "/assets/images/portfolio/modern/1.webp",
      linkText: "Read More →",
    },
    {
      id: 2,
      category: "CONFERENCE",
      title: "India Nuclear Energy Forum 2026",
      date: "Jan 30, 2026",
      location: "29-30 May 2026, IIT-Bombay, Mumbai 2026",
      image: "/assets/images/portfolio/modern/2.webp",
      linkText: "Read More →",
    },
    {
      id: 3,
      category: "CONFERENCE",
      title: "India Nuclear Energy Forum 2026",
      date: "Jan 30, 2026",
      location: "29-30 May 2026, IIT-Bombay, Mumbai 2026",
      image: "/assets/images/portfolio/modern/4.webp",
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
                  src="/assets/images/portfolio/modern/3.webp"
                  alt="Simulators For Nuclear Power Plants"
                />
                <div className="event-badge">FEATURED</div>
              </div>
              <div className="event-content-box">
                <span className="event-date">Apr 17, 2026</span>
                <h3 className="event-heading">Simulators For Nuclear Power Plants</h3>
                <p className="event-text">
                  Get IIT Bombay-training program on simulator for nuclear power plant-15 to 17 april ...
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