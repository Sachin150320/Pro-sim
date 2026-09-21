"use client";

import React, { useState } from "react";
import Image from "next/image";
import ScrollAnimation from "@/app/Components/ScrollAnimation";

const emptyForm = {
  fullName: "",
  workEmail: "",
  company: "",
  mobile: "",
  industryDomain: "Nuclear Power",
  serviceDiscipline: "Detailed Engineering",
  technicalScope: "",
};

export default function ContactSection() {
  const [formData, setFormData] = useState(emptyForm);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));

    setSubmitError("");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSubmitError("");
    setLoading(true);

    try {
      const data = new FormData();

      data.append("fullName", formData.fullName);
      data.append("workEmail", formData.workEmail);
      data.append("company", formData.company);
      data.append("mobile", formData.mobile);
      data.append("industryDomain", formData.industryDomain);
      data.append("serviceDiscipline", formData.serviceDiscipline);
      data.append("technicalScope", formData.technicalScope);

      const response = await fetch("/send-enquiry.php", {
        method: "POST",
        body: data,
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || `Server returned status ${response.status}`);
      }

      if (result.success) {
        setSubmitted(true);
        setFormData(emptyForm);
      } else {
        setSubmitError(
          result.message || "Unable to send enquiry. Please try again."
        );
      }
    } catch (error: any) {
      console.error("Email error:", error);

      setSubmitError(
        error.message || "Unable to send enquiry. Please check your network and try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact-section">
      <div className="contact-wrapper">

        {/* SECTION HEADER */}
        <ScrollAnimation>
          <div className="contact-section-intro">
            <span className="contact-section-subtitle">
              Talk to Our Engineers
            </span>

            <h2 className="engineering-title">
              Looking for an Engineering Partner?
            </h2>

            <div className="title-underline-center" />

            <p className="contact-section-desc">
              We&apos;re ready to collaborate. Tell us what you&apos;re
              building and we&apos;ll come back with scope, deliverables and
              a realistic timeline.
            </p>
          </div>
        </ScrollAnimation>

        <div className="contact-grid-layout">

          {/* LEFT COLUMN */}
          <ScrollAnimation>
            <div className="hq-info-column">
              <div className="hq-image-section">
                <div className="hq-image-section">
                  <img
                    src="/assets/images/industries/contact.jpg"
                    alt="ProSIM R&D Center"
                    className="hq-image"
                    fetchPriority="high"
                  />
                </div>
              </div>
            </div>
          </ScrollAnimation>

          {/* RIGHT COLUMN */}
          <ScrollAnimation delay={100}>
            <div className="rfp-form-container">

              <div className="rfp-header">
                <h3 className="rfp-title">Get In Touch</h3>

                <p className="rfp-subtitle">
                  Fill in the project scope below to receive a deliverables
                  and cost assessment.
                </p>
              </div>

              {submitted ? (
                <div className="rfp-success-box">
                  <h3>Assessment Request Submitted</h3>

                  <p>
                    Our simulation experts are reviewing your scope
                    specifications. We will contact your work email shortly.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="rfp-form"
                  noValidate
                >

                  {/* ERROR MESSAGE */}
                  {submitError && (
                    <div className="rfp-error" role="alert">
                      <p>{submitError}</p>
                    </div>
                  )}

                  {/* NAME + EMAIL */}
                  <div className="rfp-row">

                    <div className="rfp-field">
                      <label htmlFor="fullName">
                        Full Name *
                      </label>

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
                      <label htmlFor="workEmail">
                        Work Email *
                      </label>

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

                  {/* COMPANY + MOBILE */}
                  <div className="rfp-row">

                    <div className="rfp-field">
                      <label htmlFor="company">
                        Company / Organization *
                      </label>

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
                      <label htmlFor="mobile">
                        Mobile Number
                      </label>

                      <input
                        type="tel"
                        id="mobile"
                        name="mobile"
                        placeholder="e.g. +91 98765 43210"
                        value={formData.mobile}
                        onChange={handleChange}
                      />
                    </div>

                  </div>

                  {/* SERVICES + INDUSTRY */}
                  <div className="rfp-row">

                    <div className="rfp-field">
                      <label htmlFor="serviceDiscipline">
                        Services
                      </label>

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
                          Pre-Bid & Owner&apos;s Engineering
                        </option>
                      </select>
                    </div>

                    <div className="rfp-field">
                      <label htmlFor="industryDomain">
                        Industry Domain
                      </label>

                      <select
                        id="industryDomain"
                        name="industryDomain"
                        value={formData.industryDomain}
                        onChange={handleChange}
                      >
                        <option value="Nuclear Power">
                          Nuclear Power
                        </option>

                        <option value="Thermal Power">
                          Thermal Power
                        </option>

                        <option value="Oil & Gas">
                          Oil & Gas
                        </option>

                        <option value="Aerospace & Defence">
                          Aerospace & Defence
                        </option>

                        <option value="Industrial & Heavy Engineering">
                          Industrial & Heavy Engineering
                        </option>
                      </select>
                    </div>

                  </div>

                  {/* MESSAGE */}
                  <div className="rfp-field full-width">

                    <label htmlFor="technicalScope">
                      Technical Scope Details / Load Conditions
                    </label>

                    <textarea
                      id="technicalScope"
                      name="technicalScope"
                      rows={4}
                      placeholder="Message"
                      value={formData.technicalScope}
                      onChange={handleChange}
                    />

                  </div>

                  {/* SUBMIT */}
                  <div className="rfp-submit">

                    <button
                      type="submit"
                      className="btn-primary"
                      disabled={loading}
                    >
                      {loading ? "Sending..." : "Submit"}

                      <span className="arrow">
                        →
                      </span>
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