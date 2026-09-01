
"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import ScrollAnimation from "@/app/Components/ScrollAnimation";

const eventsData = [
  {
    id: 1,
    image: "/assets/images/portfolio/modern/1.webp",
    description:
      "Get-IIT Bombay training program on simulator for nuclear power plant - 15 to 17 April",
    title: "SIMULATORS FOR NUCLEAR POWER PLANTS",
    url: "#",
  },
  {
    id: 2,
    image: "/assets/images/portfolio/modern/2.webp",
    description:
      "The nuclear energy sector in India is expected to grow multifold.",
    title:
      "The Role Of ISO 19443 In Supporting India's Expanding Nuclear Energy Program",
    url: "#",
  },
  {
    id: 3,
    image: "/assets/images/portfolio/modern/3.webp",
    description: "29-30 May 2026, IIT-Bombay, Mumbai",
    title: "India Nuclear Energy Forum 2026",
    url: "#",
  },
];

export default function LatestEvents() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const isPaused = useRef(false);

  /* =========================
     AUTOMATIC SCROLL
  ========================= */

  useEffect(() => {
    const slider = sliderRef.current;

    if (!slider) return;

    const speed = 0.7;

    const autoScroll = () => {
      if (!isPaused.current) {
        slider.scrollLeft += speed;

        /*
         * Width of the first set of cards.
         * When the first set is finished,
         * move back to the beginning.
         */
        const firstSetWidth = slider.scrollWidth / 2;

        if (slider.scrollLeft >= firstSetWidth) {
          slider.scrollLeft = 0;
        }
      }
    };

    const interval = setInterval(autoScroll, 20);

    return () => {
      clearInterval(interval);
    };
  }, []);

  /* =========================
     BUTTON SCROLL
  ========================= */

  const scroll = (direction: "left" | "right") => {
    const slider = sliderRef.current;

    if (!slider) return;

    const cardWidth =
      window.innerWidth <= 768 ? 314 : 374;

    slider.scrollBy({
      left:
        direction === "right"
          ? cardWidth
          : -cardWidth,
      behavior: "smooth",
    });
  };

  /* =========================
     EVENT CARD
  ========================= */

  const renderCard = (
    event: (typeof eventsData)[number],
    duplicate = false
  ) => (
    <div
      className="le-card"
      key={`${duplicate ? "duplicate" : "original"}-${event.id}`}
    >
      {/* IMAGE */}

      <div className="le-img-wrapper">
        <Image
          src={event.image}
          alt={event.title}
          fill
          priority={event.id === 1 && !duplicate}
          className="le-event-image"
          sizes="(max-width: 768px) 290px, 350px"
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
    </div>
  );

  return (
    <section className="le-section">
      <div className="le-container">

        {/* =========================
            HEADER
        ========================= */}

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

        {/* =========================
            CAROUSEL
        ========================= */}

        <div className="le-carousel-container">

          {/* LEFT BUTTON */}

          <button
            type="button"
            className="le-nav-arrow le-prev"
            onClick={() => scroll("left")}
            aria-label="Previous events"
          >
            ‹
          </button>

          {/* SLIDER */}

          <div
            ref={sliderRef}
            className="le-scroll-wrapper"
            onMouseEnter={() => {
              isPaused.current = true;
            }}
            onMouseLeave={() => {
              isPaused.current = false;
            }}
          >

            {/* ORIGINAL CARDS */}

            {eventsData.map((event) =>
              renderCard(event)
            )}

            {/* DUPLICATE CARDS */}

            {eventsData.map((event) =>
              renderCard(event, true)
            )}

          </div>

          {/* RIGHT BUTTON */}

          <button
            type="button"
            className="le-nav-arrow le-next"
            onClick={() => scroll("right")}
            aria-label="Next events"
          >
            ›
          </button>

        </div>
      </div>
    </section>
  );
}
