// components/ContactSection.jsx
"use client";

import React, { useState } from "react";
import ScrollAnimation from "@/app/Components/ScrollAnimation";

export default function ContactSection() {
    const [formData, setFormData] = useState({
        fullName: "",
        workEmail: "",
        company: "",
        mobile: "",
        industryDomain: "Nuclear Power",
        serviceDiscipline: "Detailed Engineering",
        technicalScope: "",
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const body = [
            `Full Name: ${formData.fullName}`,
            `Work Email: ${formData.workEmail}`,
            `Company / Organization: ${formData.company}`,
            `Mobile Number: ${formData.mobile || "-"}`,
            `Industry Domain: ${formData.industryDomain}`,
            `Primary Service Discipline: ${formData.serviceDiscipline}`,
            "",
            "Technical Scope Details / Load Conditions:",
            formData.technicalScope || "-",
        ].join("\n");

        window.location.href = `mailto:enquiry@pro-sim.com,emswebdesign22@gmail.com?subject=${encodeURIComponent(
            "Engineering Partner Enquiry"
        )}&body=${encodeURIComponent(body)}`;

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
                                            <label htmlFor="mobile">Mobile Number</label>
                                            <input
                                                type="tel"
                                                id="mobile"
                                                name="mobile"
                                                value={formData.mobile}
                                                onChange={handleChange}
                                                placeholder="Enter your mobile number"
                                                maxLength="10"
                                                pattern="[0-9]{10}"
                                            />
                                        </div>

                                    </div>

                                    <div className="rfp-row">
                                        <div className="rfp-field">
                                            <label htmlFor="serviceDiscipline">Services</label>
                                            <select
                                                id="serviceDiscipline"
                                                name="serviceDiscipline"
                                                value={formData.serviceDiscipline}
                                                onChange={handleChange}
                                            >
                                                <option value="Detailed Engineering">
                                                    Detailed Engineering
                                                </option>

                                                <option value="Seismic Analysis & Qualification">
                                                    Seismic Analysis & Qualification
                                                </option>

                                                <option value="Piping & Pipeline Engineering">
                                                    Piping & Pipeline Engineering
                                                </option>

                                                <option value="3D Plant Modelling">
                                                    3D Plant Modelling
                                                </option>

                                                <option value="Finite Element Analysis (FEA)">
                                                    Finite Element Analysis (FEA)
                                                </option>

                                                <option value="CFD & Multiphysics Simulations">
                                                    CFD & Multiphysics Simulations
                                                </option>

                                                <option value="RLA/RLE & Fitness-for-Service (FFS)">
                                                    RLA/RLE & Fitness-for-Service (FFS)
                                                </option>

                                                <option value="Engineering Automation & Digital Twin">
                                                    Engineering Automation & Digital Twin
                                                </option>

                                                <option value="Pre-Bid & Owner's Engineering">
                                                    Pre-Bid & Owner's Engineering
                                                </option>
                                            </select>
                                        </div>
                                        <div className="rfp-field">
                                            <label htmlFor="industryDomain">Industry Domain</label>
                                            <select
                                                id="industryDomain"
                                                name="industryDomain"
                                                value={formData.industryDomain}
                                                onChange={handleChange}
                                            >
                                                <option value="Nuclear Power">Nuclear Power</option>
                                                <option value="Thermal Power">Thermal Power</option>
                                                <option value="Oil & Gas">Oil & Gas</option>
                                                <option value="Aerospace & Defence">Aerospace & Defence</option>
                                                <option value="Industrial & Heavy Engineering">
                                                    Industrial & Heavy Engineering
                                                </option>
                                            </select>
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

                                    </div>


                                </form>
                            )}

                        </div>
                    </ScrollAnimation>

                </div>

            </div>
        </section>
    );
}