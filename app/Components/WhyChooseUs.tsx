"use client";

import React from "react";
import Link from "next/link";
import ScrollAnimation from "@/app/Components/ScrollAnimation";
const features = [
  {
    title: "Engineering Judgement",
    text: "We go beyond simulation results to interpret complex engineering behaviour and turn analysis into practical technical decisions.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M4 19h16" />
        <path d="M6 19V9l6-4 6 4v10" />
        <path d="M9 19v-5h6v5" />
      </svg>
    ),
  },
  {
    title: "Design Validation",
    text: "Using CAE, FEA and multi-physics simulation, we help verify designs, understand performance and identify opportunities for improvement.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="8" />
        <path d="M8.5 12l2.2 2.2 4.8-5" />
      </svg>
    ),
  },
  {
    title: "Performance Optimisation",
    text: "Our analysis-driven approach helps improve product and system performance while supporting weight, efficiency and design optimisation.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M4 18l5-5 4 3 7-9" />
        <path d="M16 7h4v4" />
      </svg>
    ),
  },
  {
    title: "Collaborative Engineering",
    text: "We work alongside customer teams through flexible engineering engagement models, from outsourced projects to onsite consulting and R&D collaboration.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M7 12l3 3 7-7" />
        <path d="M4 7h5l2 2h9v10H4V7Z" />
      </svg>
    ),
  },
];

export default function WhyChooseUs() {
  return (
    <section className="prosim-why">

      <div className="prosim-why-inner">

        {/* Background Image */}
        <div className="prosim-why-image" />

        {/* Dark image overlay */}
        <div className="prosim-why-overlay" />

        {/* =========================================
            TOP CONTENT
        ========================================= */}

        <div className="prosim-why-heading">

          <div className="prosim-why-label">
            WHY CHOOSE PROSIM
          </div>

<h2 className="engineering-title">Engineering Insight
        
         Beyond Simulation.</h2>





          
 <div className="title-underline" />
          <p>
            We combine engineering expertise, simulation technology and
            practical judgement to help customers solve complex problems,
            validate designs and make better technical decisions.
          </p>

        </div>


        {/* =========================================
            FEATURE BOXES
        ========================================= */}
<ScrollAnimation delay={150}>
<div className="prosim-why-cards">

          {features.map((item, index) => (

            <div
              className="prosim-why-card"
              key={item.title}
            >

              <div className="prosim-card-number">
                0{index + 1}
              </div>

              <div className="prosim-card-icon">
                {item.icon}
              </div>

              <div className="prosim-card-content">

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.text}
                </p>

              </div>

              <div className="prosim-card-line" />

            </div>

          ))}

        </div>
</ScrollAnimation>
        


        {/* =========================================
            BOTTOM CTA BOX
        ========================================= */}

        

      </div>

    </section>
  );
}