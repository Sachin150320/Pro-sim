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
                            <div className="hq-image-section">
                                <img
                                    src="/assets/images/industries/contact.jpg"
                                    alt="ProSIM R&D Center"
                                    className="hq-image"
                                />
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
                                            placeholder="Message"
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