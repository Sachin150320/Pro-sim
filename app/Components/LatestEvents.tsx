
"use client";

import React from "react";
import Image from "next/image";
import ScrollAnimation from "@/app/Components/ScrollAnimation";

const eventsData = [
  {
    id: 1,
    image: "/assets/images/Events/events-1.webp",
    description: "8 October 2026 | IIT Madras, Chennai",
    title:
      "Building India’s Nuclear Ecosystem: Policy, Technology & Industry",
    url: "/prosim-msme-role-india-nuclear-ecosystem-iit-madras",
  },
];

export default function LatestEvents() {
  return (
    <section className=" events-section ">
      <div className="le-container">
        {/* HEADER */}

        <ScrollAnimation>
          <div className="events-header-center">
            <span className="events-subtitle">
              EVENTS
            </span>

            <h2 className="engineering-title">
              Latest Events
            </h2>

            <div className="events-underline" />
          </div>
        </ScrollAnimation>

        {/* SINGLE CENTERED EVENT */}

        <div className="le-carousel-container le-single-event-container">
          {eventsData.map((event) => (
            <article className="le-card" key={event.id}>
              {/* IMAGE */}

              <div className="le-img-wrapper">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="le-event-image"
                  sizes="(max-width: 768px) 100vw, 350px"
                />
              </div>

              {/* CONTENT */}

              <div className="le-content">
                <p className="le-desc">
                  {event.description}
                </p>

                <h3 className="le-card-title">
                  {event.title}
                </h3>

                <a
                  href={event.url}
                  className="le-link"
                >
                  Read More <span>→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* CENTER THE SINGLE EVENT */}

      <style jsx>{`
        .le-single-event-container {
          display: flex;
          justify-content: center;
          align-items: stretch;
          width: 100%;
          margin: 0 auto;
        }

        .le-single-event-container :global(.le-card) {
          flex: 0 1 374px;
          width: 100%;
          max-width: 374px;
          margin: 0 auto;
        }

        @media (max-width: 768px) {
          .le-single-event-container {
            padding: 0 15px;
          }

          .le-single-event-container :global(.le-card) {
            flex-basis: 100%;
            max-width: 374px;
          }
        }
      `}</style>
    </section>
  );
}
