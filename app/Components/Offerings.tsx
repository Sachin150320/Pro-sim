// components/Offerings.jsx
"use client";

import React from "react";
import Link from "next/link";
import ScrollAnimation from "@/app/Components/ScrollAnimation";

const offerings = [
  {
    title: "Detailed Engineering",
    description:
      "Comprehensive engineering solutions developed with accuracy, practicality and project-specific requirements in mind.",
    image: "/assets/images/portfolio/modern/1.webp",
  },
  {
    title: "Seismic Analysis & Qualification",
    description:
      "Engineering analysis and qualification solutions for systems and components subjected to seismic loading.",
    image: "/assets/images/portfolio/modern/2.webp",
  },
  {
    title: "Piping & Pipeline Engineering",
    description:
      "Engineering analysis and assessment for piping and pipeline systems across demanding industrial applications.",
    image: "/assets/images/portfolio/modern/3.webp",
  },
  {
    title: "3D Plant Modelling",
    description:
      "Detailed three-dimensional plant modelling that supports engineering, design coordination and project execution.",
    image: "/assets/images/portfolio/modern/4.webp",
  },
  {
    title: "Finite Element Analysis",
    description:
      "Advanced FEA solutions for understanding structural behaviour, evaluating performance and supporting design decisions.",
    image: "/assets/images/portfolio/modern/5.webp",
  },
  {
    title: "CFD & Multi-Physics Simulation",
    description:
      "Simulation of fluid flow, thermal behaviour and coupled physical phenomena for complex engineering systems.",
    image: "/assets/images/portfolio/modern/6.webp",
  },
  {
    title: "Structural Integrity Assessment",
    description:
      "Engineering assessments that help evaluate structural performance, integrity and continued operational reliability.",
    image: "/assets/images/portfolio/modern/7.webp",
  },
  {
    title: "Engineering Process Automation",
    description:
      "Automation solutions that streamline engineering workflows, reduce repetitive effort and improve process efficiency.",
    image: "/assets/images/portfolio/modern/8.webp",
  },
];

export default function Offerings() {
  return (
    <section className="offerings-section">
      <div className="offerings-wrapper">
        
        {/* =========================================
            SECTION HEADER
        ========================================= */}


        <div className="industries-header-wrapper">
          <ScrollAnimation>
            <div className="industries-header-text">
              <span className="industries-subtitle">
                From Engineering Challenge
              </span>

<h2 className="engineering-title">Offerings</h2>


            
              <div className="title-underline" />
              <p className="industries-description">
                We combine engineering expertise, computational simulation and industry knowledge to solve complex design, performance and asset-integrity challenges.
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={100}>

 <Link href="/industries" className="btn-primary">
             Enquire Now
              <span className="arrow">→</span>
            </Link>

          
          </ScrollAnimation>
        </div>

        {/* =========================================
            OFFERINGS GRID (Hover Text Reveal Design)
        ========================================= */}

<ScrollAnimation delay={150}>
<div className="engineering-services-grid">
          {offerings.map((service, index) => (
            <Link
              href="/case-studies-single.html"
              className="engineering-service-box"
              key={service.title}
            >
              {/* Background Image with Zoom Effect */}
              <div className="engineering-service-image">
                <img
                  src={service.image}
                  alt={service.title}
                  loading={index < 4 ? "eager" : "lazy"}
                />
              </div>

              {/* Dynamic Gradient Overlay */}
              <div className="engineering-service-overlay" />

              {/* Card Content */}
              <div className="engineering-service-content">
                <div className="engineering-service-top">
                  <span className="engineering-service-category">
                    ENGINEERING
                  </span>
                </div>

                <div className="engineering-service-info">
                  <h3 className="engineering-service-title">
                    {service.title}
                  </h3>
                  {/* Description hidden by default, slides up on hover */}
                  <p className="engineering-service-desc">{service.description}</p>
                  
                  <div className="engineering-service-action">
                    <span className="engineering-service-arrow-icon">
                      <svg viewBox="0 0 24 24" fill="none">
                        <path d="M5 12h13" stroke="currentColor" strokeWidth="1.5" />
                        <path d="M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" />
                      </svg>
                    </span>
                    <span className="engineering-service-link">
                      EXPLORE CAPABILITIES
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
</ScrollAnimation>

        

        
      </div>
    </section>
  );
}