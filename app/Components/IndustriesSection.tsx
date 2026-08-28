"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import ScrollAnimation from "@/app/Components/ScrollAnimation";
import Link from "next/link";
const industries = [
  {
    title: "Nuclear Energy",
    type: "POWER GENERATION",
    href: "/nuclear-energy",
    image: "/assets/images/industries/ind-nuclear.jpg",

  },

  {
    title: "Thermal Energy",
    type: "POWER GENERATION",
    href: "/thermal-energy",
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
    type: "PROCESS INDUSTRIES",
    href: "/petrochemicals",
    image: "/assets/images/industries/ind-petrochemicals.jpg",

  },

  {
    title: "Industrial & Heavy Engineering",
    type: "HEAVY ENGINEERING",
    href: "/heavy-engineering",
    image: "/assets/images/industries/ind-industrial.jpg",

  },

  {
    title: "Power & Utilities",
    type: "POWER & UTILITIES",
    href: "/power-utilities",
    image: "/assets/images/industries/ind-power-utilities.jpg",

  },
];

export default function IndustriesSection() {
  const [showPopup, setShowPopup] = useState(false);

  /* Prevent background scroll when popup is open */
  useEffect(() => {
    if (!showPopup) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    /* Close popup with ESC */
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setShowPopup(false);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleEscape);
    };
  }, [showPopup]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Replace this with your API/PHP form submission.
    alert("Thank you! Your application has been submitted.");

    setShowPopup(false);
  };

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


                <h2 className="engineering-title"> Solving Industry&apos;s Most Pressing Challenges</h2>


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

              <Link href="" className="btn-primary" onClick={() => setShowPopup(true)}>
                Discuss your application
                <span className="arrow">→</span>
              </Link>

            </ScrollAnimation>

          </div>

          {/* =================================================
              INDUSTRY GRID
          ================================================= */}

          <div className="industries-grid">

            {industries.map((item, index) => (
              <ScrollAnimation
                key={item.title}
                delay={index * 100}
              >

                <div className="industry-card">

                  {/* Background Image */}
                  <div className="card-bg-image">

                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 767px) 100vw, (max-width: 1100px) 50vw, 33vw"
                      className="industry-image"
                      priority={index < 3}
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

                      <span className="sub-tag">
                        {item.type}
                      </span>

                      <span className="sub-link">
                        <Link
                          href={item.href}
                          className="sub-link"
                          onClick={(e) => e.stopPropagation()}
                        >
                          View engineering scope
                          <span className="scope-arrow">→</span>
                        </Link>

                      </span>

                    </div>

                  </div>

                </div>

              </ScrollAnimation>
            ))}

          </div>

        </div>
      </section>

      {/* =====================================================
          DISCUSS APPLICATION MODAL
      ===================================================== */}

      {showPopup && (
        <div
          className="application-modal-overlay"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setShowPopup(false);
            }
          }}
          role="presentation"
        >

          <div
            className="application-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="application-modal-title"
          >

            {/* Close Button */}
            <button
              type="button"
              className="modal-close"
              onClick={() => setShowPopup(false)}
              aria-label="Close application form"
            >
              <span>×</span>
            </button>

            {/* =================================================
                MODAL HEADER
            ================================================= */}

            <div className="modal-header">

              <span className="modal-eyebrow">
                GET IN TOUCH
              </span>

              <h2 id="application-modal-title">
                Discuss Your Application
              </h2>

              <p>
                Tell us about your engineering requirement and our
                team will get back to you.
              </p>

            </div>

            {/* =================================================
                APPLICATION FORM
            ================================================= */}

            <form
              className="application-form"
              onSubmit={handleSubmit}
            >

              {/* Name + Company */}
              <div className="form-row">

                <div className="form-group">

                  <label htmlFor="application-name">
                    Name <span>*</span>
                  </label>

                  <input
                    id="application-name"
                    name="name"
                    type="text"
                    placeholder="Your Name"
                    autoComplete="name"
                    required
                  />

                </div>

                <div className="form-group">

                  <label htmlFor="application-company">
                    Company
                  </label>

                  <input
                    id="application-company"
                    name="company"
                    type="text"
                    placeholder="Company Name"
                    autoComplete="organization"
                  />

                </div>

              </div>

              {/* Email + Phone */}
              <div className="form-row">

                <div className="form-group">

                  <label htmlFor="application-email">
                    Email <span>*</span>
                  </label>

                  <input
                    id="application-email"
                    name="email"
                    type="email"
                    placeholder="you@company.com"
                    autoComplete="email"
                    required
                  />

                </div>

                <div className="form-group">

                  <label htmlFor="application-phone">
                    Phone
                  </label>

                  <input
                    id="application-phone"
                    name="phone"
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    autoComplete="tel"
                  />

                </div>

              </div>

              {/* Industry */}
              <div className="form-group">

                <label htmlFor="application-industry">
                  Industry
                </label>

                <select
                  id="application-industry"
                  name="industry"
                  defaultValue=""
                >

                  <option value="" disabled>
                    Select Industry
                  </option>

                  {industries.map((industry) => (
                    <option
                      key={industry.title}
                      value={industry.title}
                    >
                      {industry.title}
                    </option>
                  ))}

                </select>

              </div>

              {/* Message */}
              <div className="form-group">

                <label htmlFor="application-message">
                  Tell us about your application <span>*</span>
                </label>

                <textarea
                  id="application-message"
                  name="message"
                  rows={5}
                  placeholder="Describe your engineering requirement..."
                  required
                />

              </div>

              {/* Submit */}
              <button
                type="submit"
                className="modal-submit-btn"
              >
                <span>Submit Application</span>

                <span className="submit-arrow">
                  →
                </span>
              </button>

            </form>

          </div>

        </div>
      )}
    </>
  );
}