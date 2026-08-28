// components/ContactSection.jsx
"use client";

import React, { useState } from "react";
import ScrollAnimation from "@/app/Components/ScrollAnimation";

export default function ContactSection() {
    const [formData, setFormData] = useState({
        fullName: "",
        workEmail: "",
        company: "",
        industryDomain: "Nuclear Energy",
        serviceDiscipline: "Finite Element Analysis (FEA)",
        timeline: "Immediate (< 1 Month)",
        technicalScope: "",
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <section className="contact-section">
            <div className="contact-wrapper">

                {/* =========================================
            CENTERED SECTION HEADER INTRO
        ========================================= */}
                <ScrollAnimation>
                    <div className="contact-section-intro">
                        <span className="contact-section-subtitle">Talk to Our Engineers</span>

<h2 className="engineering-title">Looking for a  Engineering Partner?</h2>


                        
                        <div className="title-underline-center" />
                        <p className="contact-section-desc">
                            We're ready to collaborate. Tell us what you're building and we'll come back with scope, deliverables and a realistic timeline.
                        </p>
                    </div>
                </ScrollAnimation>

                <div className="contact-grid-layout">

                    {/* =========================================
              LEFT COLUMN: HEADQUARTERS & INFO CARDS
          ========================================= */}
                    <ScrollAnimation>
                        <div className="hq-info-column">
                            <div className="hq-header">
                                <h3 className="hq-main-title">Global Engineering Headquarters</h3>
                                <p className="hq-sub-title">ProSIM R&D Center & Delivery Campus</p>
                            </div>

                            {/* Card 1: Address */}
                            <div className="hq-card">
                                <div className="hq-icon-box">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <path d="M12 21c4.97-4.97 8-9.03 8-13a8 8 0 10-16 0c0 3.97 3.03 8.03 8 13z" />
                                        <circle cx="12" cy="8" r="3" />
                                    </svg>
                                </div>
                                <div className="hq-card-content">
                                    <h4 className="hq-card-label">Corporate & Technical Center</h4>
                                    <p className="hq-card-text">
                                        B-378/1, Ring Rd, near TVS Cross, Peenya 1st Stage, Netaji Nagar, 
                                    </p>
                                    <p className="hq-card-text">
                                      Peenya, Bengaluru, Karnataka 560058
                                    </p>
                                    <a
                                        href="https://maps.google.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hq-direction-btn"
                                    >
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                            <path d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                        Get Directions
                                    </a>
                                </div>
                            </div>

                            {/* Card 2: Phone */}
                            <div className="hq-card">
                                <div className="hq-icon-box">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                                    </svg>
                                </div>
                                <div className="hq-card-content">
                                    <h4 className="hq-card-label">Direct Engineering Desk</h4>
                                    <p className="hq-card-text highlight-text">+91 (080) 2347-7000 / 7001</p>
                                </div>
                            </div>

                            {/* Card 3: Email */}
                            <div className="hq-card">
                                <div className="hq-icon-box">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                        <path d="M22 6l-10 7L2 6" />
                                    </svg>
                                </div>
                                <div className="hq-card-content">
                                    <h4 className="hq-card-label">Technical Inquiries</h4>
                                    <p className="hq-card-text highlight-text">info@prosim.co.in</p>
                                </div>
                            </div>

                            {/* Card 4: Hours */}
                            <div className="hq-card">
                                <div className="hq-icon-box">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <circle cx="12" cy="12" r="10" />
                                        <path d="M12 6v6l4 2" />
                                    </svg>
                                </div>
                                <div className="hq-card-content">
                                    <h4 className="hq-card-label">Operational Hours</h4>
                                    <p className="hq-card-text">Monday – Friday: 09:00 AM – 06:30 PM (IST)</p>
                                </div>
                            </div>

                            {/* Card 5: NDA Assurance */}
                            <div className="hq-card hq-nda-card">
                                <div className="hq-icon-box nda-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                    </svg>
                                </div>
                                <div className="hq-card-content">
                                    <h4 className="hq-card-label">Strict Confidentiality & NDA Assurance</h4>
                                    <p className="hq-card-text nda-desc">
                                        All proprietary CAD models, stress reports, and client data are protected under bilateral NDAs with ISO-27001 encrypted infrastructure.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </ScrollAnimation>


                    {/* =========================================
              RIGHT COLUMN: REQUEST TECHNICAL CONSULTATION / RFP FORM
          ========================================= */}
                    <ScrollAnimation delay={100}>
                        <div className="rfp-form-container">

                            <div className="rfp-header">
                                <h3 className="rfp-title">Get In Touch</h3>
                                <p className="rfp-subtitle">Fill in the project scope below to receive a deliverables and cost assessment.</p>
                            </div>

                            {submitted ? (
                                <div className="rfp-success-box">
                                    <h3>Assessment Request Submitted</h3>
                                    <p>Our simulation experts are reviewing your scope specifications. We will contact your work email shortly.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="rfp-form">

                                    <div className="rfp-row">
                                        <div className="rfp-field">
                                            <label htmlFor="fullName">Full Name *</label>
                                            <input
                                                type="text"
                                                id="fullName"
                                                name="fullName"
                                                required
                                                placeholder="e.g. Dr. Rajesh Sharma"
                                                value={formData.fullName}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="rfp-field">
                                            <label htmlFor="workEmail">Work Email *</label>
                                            <input
                                                type="email"
                                                id="workEmail"
                                                name="workEmail"
                                                required
                                                placeholder="e.g. r.sharma@energycorp.com"
                                                value={formData.workEmail}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>

                                    <div className="rfp-row">
                                        <div className="rfp-field">
                                            <label htmlFor="company">Company / Organization *</label>
                                            <input
                                                type="text"
                                                id="company"
                                                name="company"
                                                required
                                                placeholder="e.g. Larsen & Toubro / NPCIL"
                                                value={formData.company}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="rfp-field">
                                            <label htmlFor="industryDomain">Industry Domain</label>
                                            <select
                                                id="industryDomain"
                                                name="industryDomain"
                                                value={formData.industryDomain}
                                                onChange={handleChange}
                                            >
                                                <option value="Nuclear Energy">Nuclear Energy</option>
                                                <option value="Oil & Gas">Oil & Gas</option>
                                                <option value="Process Industries">Process Industries & Petrochemicals</option>
                                                <option value="Heavy Engineering">Industrial & Heavy Engineering</option>
                                                <option value="Power & Utilities">Power & Utilities</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="rfp-row">
                                        <div className="rfp-field">
                                            <label htmlFor="serviceDiscipline">Primary Service Discipline</label>
                                            <select
                                                id="serviceDiscipline"
                                                name="serviceDiscipline"
                                                value={formData.serviceDiscipline}
                                                onChange={handleChange}
                                            >
                                                <option value="Finite Element Analysis (FEA)">Finite Element Analysis (FEA)</option>
                                                <option value="Detailed Engineering">Detailed Engineering</option>
                                                <option value="Seismic Analysis & Qualification">Seismic Analysis & Qualification</option>
                                                <option value="Piping & Pipeline Engineering">Piping & Pipeline Engineering</option>
                                                <option value="3D Plant Modelling">3D Plant Modelling</option>
                                                <option value="CFD & Multi-Physics Simulation">CFD & Multi-Physics Simulation</option>
                                                <option value="Structural Integrity Assessment">Structural Integrity Assessment</option>
                                            </select>
                                        </div>
                                        <div className="rfp-field">
                                            <label htmlFor="timeline">Target Project Timeline</label>
                                            <select
                                                id="timeline"
                                                name="timeline"
                                                value={formData.timeline}
                                                onChange={handleChange}
                                            >
                                                <option value="Immediate (< 1 Month)">Immediate (&lt; 1 Month)</option>
                                                <option value="1-3 Months">1 - 3 Months</option>
                                                <option value="3+ Months">3+ Months</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="rfp-field full-width">
                                        <label htmlFor="technicalScope">Technical Scope Details / Load Conditions</label>
                                        <textarea
                                            id="technicalScope"
                                            name="technicalScope"
                                            rows="4"
                                            placeholder="Briefly describe geometry, operating temperature/pressure, applicable codes (ASME, RCC-M, etc.), and simulation goals..."
                                            value={formData.technicalScope}
                                            onChange={handleChange}
                                        ></textarea>
                                    </div>



                                    <button
                                        type="submit"
                                        className="btn-primary"
                                    >
                                        Submit

                                        <span className="arrow">→</span>


                                    </button>




                                </form>
                            )}

                        </div>
                    </ScrollAnimation>

                </div>

            </div>
        </section>
    );
}