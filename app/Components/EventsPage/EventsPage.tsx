"use client";

import React from "react";
import Breadcrumbs from "@/app/Components/Breadcrumbs/Breadcrumbs";
import ScrollAnimation from "@/app/Components/ScrollAnimation";
import { CalendarDays, MapPin } from "lucide-react";
import "./EventsPage.css";

const IMG = "/assets/images/Events";

const event = {

  tag: "Conference",
  title: "Building India's Nuclear Ecosystem",
  subtitle: "Policy, Technology & Industry",
  date: "8 October 2026",
  location: "IIT Madras, Chennai",
  body: "Dr. S. Shamasundar, Managing Director of ProSIM and Honorary Director of India Nuclear Forum, participated in the International Conference on “Building India's Nuclear Ecosystem: Policy, Technology & Industry”, organised by the Deccan Center for International Relations and IIT Madras.",
  discussion:
    "The conference brought together distinguished professionals from India's nuclear energy sector to discuss strengthening domestic value chains, building industrial capacity, promoting research and development, and accelerating India's nuclear energy mission.",
};

export default function NuclearEcosystemEventPage() {
  return (
    <main className="seismic-page">
      {/* HERO */}
      <section className="sa-hero">
        <div className="sa-hero-crumbs">
          <Breadcrumbs />
          
        </div>

        <div className="sa-hero-inner">
          <ScrollAnimation className="sa-hero-text">
           

            <h1>
             Latest Events
            </h1>

           

           
          </ScrollAnimation>

          <ScrollAnimation className="sa-hero-media" delay={120}>
            <figure className="sa-hero-media-main">
              <img
                src={`${IMG}/nuclear-conference-panel.webp`}
                alt="Nuclear ecosystem conference at IIT Madras"
                fetchPriority="high"
              />

              <figcaption>
                International Conference — 8 October 2026
              </figcaption>
            </figure>

            <figure className="sa-hero-media-inset">
              <img
                src={`${IMG}/nuclear-conference-felicitation.webp`}
                alt="Dr. S. Shamasundar being felicitated at the conference"
                loading="lazy"
              />
            </figure>
          </ScrollAnimation>
        </div>
      </section>

      {/* FEATURED EVENT */}
      <section className="sa-services" id="event">
        <div className="sa-container">
          <ScrollAnimation className="sa-intro">
            <span className="sa-label">
              Featured Event
            </span>

          </ScrollAnimation>

          <div className="ev-grid ev-grid-single">
            <ScrollAnimation>
              <article className="ev-card">
                <div className="ev-card-img">
                  <span className="ev-card-tag">
                    {event.tag}
                  </span>

                  <img
                    src="/assets/images/Events/events-1.png"
                    alt={event.title}
                    loading="lazy"
                  />
                </div>

                <div className="ev-card-body">
                  <h3>{event.title}</h3>

                  <p>{event.body}</p>

                  <div className="ev-meta">
                    <div>
                      <CalendarDays size={17} />
                      <span>{event.date}</span>
                    </div>

                    <div>
                      <MapPin size={17} />
                      <span>{event.location}</span>
                    </div>
                  </div>
                   <a
                   href="/prosim-msme-role-india-nuclear-ecosystem-iit-madras"
                  className="le-link"
                >
                  Read More <span>→</span>
                </a>
                </div>
              </article>
            </ScrollAnimation>
          </div>
        </div>
      </section>
    </main>
  );
}