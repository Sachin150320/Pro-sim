
"use client";

import React, { useState } from "react";
import Breadcrumbs from "@/app/Components/Breadcrumbs/Breadcrumbs";
import ScrollAnimation from "@/app/Components/ScrollAnimation";
import {
  MapPin,
  Phone,
  Mail,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";
import "./ContactUs.css";

const P = "/assets/images/portfolio/modern";

/* =========================================================
   CONTACT CARDS
========================================================= */

const contactCards = [
  {
    icon: MapPin,
    label: "Visit Us",
    lines: [
      "B-378/1, Ring Road, 1st Stage",
      "Peenya (near TVS cross)",
      "Bengaluru – 560058, India",
    ],
    action: {
      text: "Get directions",
      href: "https://www.google.com/maps?cid=163320593820900988&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAMYASAF&hl=en-US&source=embed",
    },
  },

  {
    icon: Phone,
    label: "Call Us",
    lines: [
      "080 68160000",
      "Mon – Sat, 9:30 – 18:30 IST",
    ],
    action: {
      text: "080 68160000",
      href: "tel:08068160000",
    },
  },

  {
    icon: Mail,
    label: "Email Us",
    lines: [
      "enquiry@pro-sim.com",
      "For project enquiries & partnerships",
    ],
    action: {
      text: "enquiry@pro-sim.com",
      href: "mailto:enquiry@pro-sim.com",
    },
  },
];

/* =========================================================
   SOCIAL MEDIA
========================================================= */

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/prosimrnd/",
    path: "M6.94 8.5H3.5V20h3.44V8.5zM5.22 3A2.02 2.02 0 1 0 5.22 7.04 2.02 2.02 0 0 0 5.22 3zM20.5 13.42c0-3.47-1.85-5.08-4.32-5.08-1.99 0-2.88 1.1-3.38 1.87V8.5H9.36V20h3.44v-5.69c0-1.5.28-2.95 2.14-2.95 1.83 0 1.85 1.71 1.85 3.05V20h3.44l.27-6.58z",
  },
];

/* =========================================================
   EMPTY FORM
========================================================= */

const emptyForm = {
  fullName: "",
  workEmail: "",
  company: "",
  mobile: "",
  industryDomain: "Nuclear Power",
  serviceDiscipline: "Detailed Engineering",
  technicalScope: "",
};

/* =========================================================
   COMPONENT
========================================================= */

export default function ContactUs() {
  const [formData, setFormData] = useState(emptyForm);

  const [submitted, setSubmitted] = useState(false);

  const [sending, setSending] = useState(false);

  /* =======================================================
     HANDLE INPUT CHANGE
  ======================================================= */

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  /* =======================================================
     HANDLE FORM SUBMIT
  ======================================================= */

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (sending) {
      return;
    }

    setSending(true);

    try {
      /* ---------------------------------------------------
         CREATE FORM DATA
      --------------------------------------------------- */

      const data = new FormData();

      data.append("fullName", formData.fullName);
      data.append("workEmail", formData.workEmail);
      data.append("company", formData.company);
      data.append("mobile", formData.mobile);
      data.append(
        "industryDomain",
        formData.industryDomain
      );
      data.append(
        "serviceDiscipline",
        formData.serviceDiscipline
      );
      data.append(
        "technicalScope",
        formData.technicalScope
      );

      /* ---------------------------------------------------
         SEND TO PHP
      --------------------------------------------------- */

      const response = await fetch(
    "https://pro-sim.com/send-enquiry.php",
    {
        method: "POST",
        body: data,
    }
);

      /* ---------------------------------------------------
         CHECK RESPONSE
      --------------------------------------------------- */

      let result;

      try {
        result = await response.json();
      } catch {
        throw new Error(
          "The server returned an invalid response."
        );
      }

      /* ---------------------------------------------------
         CHECK PHP RESULT
      --------------------------------------------------- */

      if (!response.ok || !result.success) {
        throw new Error(
          result.message ||
          "Unable to send enquiry."
        );
      }

      /* ---------------------------------------------------
         SUCCESS
      --------------------------------------------------- */

      setSubmitted(true);

      setFormData({
        fullName: "",
        workEmail: "",
        company: "",
        mobile: "",
        industryDomain: "Nuclear Power",
        serviceDiscipline: "Detailed Engineering",
        technicalScope: "",
      });

    } catch (error) {
      console.error(
        "Contact form error:",
        error
      );

      const errorMessage =
        error instanceof Error
          ? error.message
          : "Unable to send enquiry. Please try again.";

      alert(errorMessage);

    } finally {
      setSending(false);
    }
  };

  /* =======================================================
     JSX
  ======================================================= */

  return (
    <main className="seismic-page">

      {/* ===================================================
          HERO
      =================================================== */}

      <section className="sa-hero">

        <div className="sa-hero-crumbs">
          <Breadcrumbs />
        </div>

        <div className="sa-hero-inner">

          {/* HERO TEXT */}

          <ScrollAnimation className="sa-hero-text">

            <h1>
              <span>
                Let&rsquo;s Talk
              </span>{" "}
              About Your Engineering Challenge.
            </h1>

          </ScrollAnimation>


          {/* HERO IMAGES */}

          <ScrollAnimation
            className="sa-hero-media"
            delay={120}
          >

            <figure className="sa-hero-media-main">

              <img
                src={`${P}/2.webp`}
                alt="ProSIM R&D team and facility"
                loading="eager"
              />

              <figcaption>
                Bengaluru
              </figcaption>

            </figure>


            <figure className="sa-hero-media-inset">

              <img
                src={`${P}/6.webp`}
                alt="Engineering collaboration"
                loading="lazy"
              />

            </figure>

          </ScrollAnimation>

        </div>

      </section>


      {/* ===================================================
          CONTACT CARDS
      =================================================== */}

      <section className="ct2-cards-sec">

        <div className="sa-container">

          <div className="ct2-cards">

            {contactCards.map((card, index) => {

              const Icon = card.icon;

              return (

                <ScrollAnimation
                  key={card.label}
                  delay={index * 80}
                >

                  <div className="ct2-card">

                    {/* ICON */}

                    <span className="ct2-card-ic">

                      <Icon
                        size={22}
                        strokeWidth={1.8}
                      />

                    </span>


                    {/* TITLE */}

                    <h3>
                      {card.label}
                    </h3>


                    {/* DETAILS */}

                    <div className="ct2-card-lines">

                      {card.lines.map((line) => (

                        <p key={line}>
                          {line}
                        </p>

                      ))}

                    </div>


                    {/* ACTION */}

                    <a
                      href={card.action.href}
                      className="ct2-card-link"
                      target={
                        card.action.href.startsWith(
                          "http"
                        )
                          ? "_blank"
                          : undefined
                      }
                      rel={
                        card.action.href.startsWith(
                          "http"
                        )
                          ? "noopener noreferrer"
                          : undefined
                      }
                    >

                      {card.action.text}

                      <ArrowUpRight
                        size={16}
                        strokeWidth={2}
                      />

                    </a>

                  </div>

                </ScrollAnimation>

              );

            })}

          </div>

        </div>

      </section>


      {/* ===================================================
          FORM + MAP
      =================================================== */}

      <section className="ct2-main">

        <div className="sa-container">

          <div className="ct2-split">


            {/* =================================================
                FORM
            ================================================= */}

            <ScrollAnimation
              className="ct2-form-wrap"
            >

              <span className="sa-label">
                Send a Message
              </span>


              <h2>
                Looking for a Reliable Design Engineering Partner?
              </h2>


              {/* =================================================
                  SUCCESS MESSAGE
              ================================================= */}

              {submitted ? (

                <div className="ct2-done">

                  <CheckCircle2
                    size={44}
                    strokeWidth={1.6}
                  />

                  <h3>
                    Message sent
                  </h3>

                  <p>
                    Thank you for reaching out.
                    Our team will get back to you
                    shortly — you can also email us
                    at enquiry@pro-sim.com.
                  </p>

                </div>

              ) : (

                /* =================================================
                   FORM
                ================================================= */

                <form
                  onSubmit={handleSubmit}
                  className="rfp-form"
                >


                  {/* =================================================
                      NAME + EMAIL
                  ================================================= */}

                  <div className="rfp-row">

                    {/* NAME */}

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


                    {/* EMAIL */}

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


                  {/* =================================================
                      COMPANY + MOBILE
                  ================================================= */}

                  <div className="rfp-row">

                    {/* COMPANY */}

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


                    {/* MOBILE */}

                    <div className="rfp-field">

                      <label htmlFor="mobile">
                        Mobile Number
                      </label>

                      <input
                        type="tel"
                        id="mobile"
                        name="mobile"
                        placeholder="Enter your mobile number"
                        maxLength={10}
                        pattern="[0-9]{10}"
                        value={formData.mobile}
                        onChange={handleChange}
                      />

                    </div>

                  </div>


                  {/* =================================================
                      SERVICES + INDUSTRY
                  ================================================= */}

                  <div className="rfp-row">

                    {/* SERVICES */}

                    <div className="rfp-field">

                      <label htmlFor="serviceDiscipline">
                        Services
                      </label>

                      <select
                        id="serviceDiscipline"
                        name="serviceDiscipline"
                        value={
                          formData.serviceDiscipline
                        }
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


                    {/* INDUSTRY */}

                    <div className="rfp-field">

                      <label htmlFor="industryDomain">
                        Industry Domain
                      </label>

                      <select
                        id="industryDomain"
                        name="industryDomain"
                        value={
                          formData.industryDomain
                        }
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


                  {/* =================================================
                      TECHNICAL SCOPE
                  ================================================= */}

                  <div className="rfp-field full-width">

                    <label htmlFor="technicalScope">
                      Technical Scope Details / Load Conditions
                    </label>

                    <textarea
                      id="technicalScope"
                      name="technicalScope"
                      rows={4}
                      placeholder="Tell us about your project, technical requirements, load conditions, or enquiry..."
                      value={
                        formData.technicalScope
                      }
                      onChange={handleChange}
                    />

                  </div>


                  {/* =================================================
                      SUBMIT BUTTON
                  ================================================= */}

                  <button
                    type="submit"
                    className="btn-primary"
                    disabled={sending}
                  >

                    {sending
                      ? "Sending..."
                      : "Submit"}

                    {!sending && (
                      <span className="arrow">
                        →
                      </span>
                    )}

                  </button>

                </form>

              )}


              {/* =================================================
                  SOCIAL
              ================================================= */}

              <div className="ct2-social">

                <span>
                  Follow us
                </span>


                <div>

                  {socials.map((social) => (

                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                    >

                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >

                        <path
                          d={social.path}
                        />

                      </svg>

                    </a>

                  ))}

                </div>

              </div>

            </ScrollAnimation>


            {/* =================================================
                MAP
            ================================================= */}

            <ScrollAnimation
              className="ct2-map-wrap"
              delay={120}
            >

              <div className="ct2-map-card">

                <iframe
                  title="ProSIM location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15548.551958342066!2d77.52198926362968!3d13.02688345311245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d1f80470d41%3A0x2443b36fb335e7c!2sProSIM!5e0!3m2!1sen!2sin!4v1535518019186"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />


                <div className="ct2-map-badge">

                  <MapPin
                    size={16}
                    strokeWidth={2}
                  />

                  ProSIM R &amp; D Pvt. Ltd.,
                  Peenya, Bengaluru

                </div>

              </div>

            </ScrollAnimation>

          </div>

        </div>

      </section>

    </main>
  );
}

