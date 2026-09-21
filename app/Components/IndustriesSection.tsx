"use client";

import Image from "next/image";
import ScrollAnimation from "@/app/Components/ScrollAnimation";
import Link from "next/link";

const industries = [
  {
    title: "Nuclear Energy",
    type: " NUCLEAR ENERGY",
    href: "/nuclear-power",
    image: "/assets/images/industries/ind-nuclear.jpg",
  },
  {
    title: "Thermal Energy",
    type: "THERMAL ENERGY",
    href: "/thermal-power",
    image: "/assets/images/industries/ind-thermal.jpg",
  },
  {
    title: "Oil & Gas",
    type: "OIL & GAS",
    href: "/oil-gas",
    image: "/assets/images/industries/ind-oil-gas.jpg",
  },
  {
    title: "Petrochemicals & Process Industries",
    type: "Petrochemicals & PROCESS INDUSTRIES",
    href: "/oil-gas",
    image: "/assets/images/industries/ind-petrochemicals.jpg",
  },
  {
    title: "Industrial & Heavy Engineering",
    type: "Industrial & HEAVY ENGINEERING",
    href: "/heavy-engineering",
    image: "/assets/images/industries/ind-industrial.jpg",
  },
  {
    title: "DEFENCE",
    type: "DEFENCE & AEROSPACE",
    href: "/defence-systems",
    image: "/assets/images/industries/ind-power-utilities.jpg",
  },
];

export default function IndustriesSection() {
  return (
    <>
      {/* =====================================================
          INDUSTRIES SECTION
      ===================================================== */}
      <section className="industries-section">
        <div className="industries-container">

          {/* =================================================
              SECTION HEADER
          ================================================= */}
          <div className="industries-header-wrapper">
            <ScrollAnimation>
              <div className="industries-header-text">
                <span className="industries-subtitle">
                  INDUSTRY WE SERVE
                </span>

                <h2 className="engineering-title">
                  Solving Industry&apos;s Most Pressing Challenges
                </h2>

                <div className="title-underline" />

                <p className="industries-description">
                  A trusted detailed engineering partner in the sectors where
                  getting the analysis right is not negotiable & where the
                  cost of getting it wrong is measured in shutdowns.
                </p>
              </div>
            </ScrollAnimation>

            {/* =================================================
                DISCUSS APPLICATION BUTTON
            ================================================= */}
            <ScrollAnimation delay={100}>
              <Link href="/contact-us" className="btn-primary">
                Discuss application
                <span className="arrow">→</span>
              </Link>
            </ScrollAnimation>
          </div>

          {/* =================================================
              INDUSTRY GRID
          ================================================= */}
          <div className="industries-grid">
            {industries.map((item, index) => (
              <ScrollAnimation key={item.title} delay={index * 100}>
                <Link
                  href={item.href}
                  className="industry-card"
                  style={{ cursor: "pointer" }}
                >
                  <div className="card-bg-image">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 767px) 100vw, (max-width: 1100px) 50vw, 33vw"
                      className="industry-image"
                      priority={index < 3}
                       fetchPriority="high"
                    />
                    <div className="card-gradient-overlay" />
                  </div>

                  {/* Angled Frame */}
                  <div className="card-frame-border" />

                  {/* =================================================
                      CARD CONTENT
                  ================================================= */}
                  <div className="card-content">
                    {/* =================================================
                        HOVER CONTENT
                    ================================================= */}
                    <div className="card-hover-info">
                      <span className="sub-tag">{item.type}</span>
                      <span className="sub-link">
                        View engineering scope
                        <span className="scope-arrow">→</span>
                      </span>
                    </div>
                  </div>
                </Link>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}