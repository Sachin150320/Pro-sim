"use client";

import React, { useState } from "react";
import Breadcrumbs from "@/app/Components/Breadcrumbs/Breadcrumbs";
import ScrollAnimation from "@/app/Components/ScrollAnimation";
import { Download, X, CheckCircle2, CalendarDays, MapPin, Mail } from "lucide-react";
import "./EventsPage.css";

const IMG = "/assets/images/Events";

const cards = [
  {
    image: `${IMG}/1.jpg`,
    tag: "Announcement",
    title: "ProSIM × IIT Bombay — Nuclear Power Generation Training",
    body: "ProSIM is happy to announce its collaboration with IIT Bombay to conduct a 2-day training programme, “Nuclear Power Generation”, on 12–13 March 2026. ProSIM is committed to the cause of energy transition and the deployment of nuclear energy in India.",
  },
  {
    image: `${IMG}/2.webp`,
    tag: "Programme Overview",
    title: "A Two-Day Continuing Education Training Programme",
    body: "ProSIM has been a pioneer in providing R&D, design, engineering, seismic qualification and safety-related services to the nuclear ecosystem in India and abroad. This two-day Continuing Education Training programme, held on 12–13 March 2026 at IIT Bombay, aims to provide fundamental knowledge of the principles and technology involved in nuclear power plants.",
  },
  {
    image: `${IMG}/3.jpg`,
    tag: "Registration & Contact",
    title: "Dates, Venue & How to Register",
    body: "Held on 12–13 March 2026 at IIT Bombay. For details, email Rupali Nayal (30006517@iitb.ac.in) or Shwetali Kumbhar (30005686@iitb.ac.in).",
    meta: [
      { icon: CalendarDays, text: "12–13 March 2026" },
      { icon: MapPin, text: "IIT Bombay" },
      { icon: Mail, text: "30006517@iitb.ac.in · 30005686@iitb.ac.in" },
    ],
  },
];

const emptyForm = { name: "", phone: "", email: "", company: "" };

export default function EventsPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [form, setForm] = useState(emptyForm);
  const [submitted, setSubmitted] = useState(false);

  const openForm = () => {
    setForm(emptyForm);
    setSubmitted(false);
    setModalOpen(true);
  };
  const closeForm = () => setModalOpen(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
              <span>ProSIM &amp; IIT Bombay</span> — Nuclear Power Generation
              Training.
            </h1>

            <p>
              A 2-day training programme on “Nuclear Power Generation”, 12–13
              March 2026 at IIT Bombay — organised in collaboration with ProSIM,
              a pioneer in R&amp;D, design, engineering and seismic qualification
              for the nuclear sector.
            </p>
          </ScrollAnimation>

          <ScrollAnimation className="sa-hero-media" delay={120}>
            <figure className="sa-hero-media-main">
              <img src={`${IMG}/4.jpeg`} alt="Nuclear power generation training" loading="eager" />
              <figcaption>12–13 March 2026</figcaption>
            </figure>
            <figure className="sa-hero-media-inset">
              <img src={`${IMG}/5.webp`} alt="IIT Bombay" loading="lazy" />
            </figure>
          </ScrollAnimation>
        </div>
      </section>

      {/* EVENT BOXES */}
      <section className="sa-services" id="event">
        <div className="sa-container">
          <ScrollAnimation className="sa-intro">
            <span className="sa-label">Continuing Education</span>
            <h2>Nuclear Power Generation — Training Programme</h2>
            <p>
              ProSIM is committed to the cause of energy transition and the
              deployment of nuclear energy in India.
            </p>
          </ScrollAnimation>

          <div className="ev-grid">
            {cards.map((c, i) => (
              <ScrollAnimation key={c.title} delay={i * 90}>
                <article className="ev-card">
                  <div className="ev-card-img">
                    <span className="ev-card-tag">{c.tag}</span>
                    <img src={c.image} alt={c.title} loading="lazy" />
                  </div>

                  <div className="ev-card-body">
                    <h3>{c.title}</h3>
                    <p>{c.body}</p>

                    {c.meta && (
                      <ul className="ev-meta">
                        {c.meta.map((m) => {
                          const Icon = m.icon;
                          return (
                            <li key={m.text}>
                              <Icon size={15} strokeWidth={1.9} />
                              {m.text}
                            </li>
                          );
                        })}
                      </ul>
                    )}

                    <button type="button" className="ev-dl" onClick={openForm}>
                      <Download size={16} strokeWidth={1.8} />
                      Download
                    </button>
                  </div>
                </article>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* DOWNLOAD REQUEST MODAL */}
      {modalOpen && (
        <div
          className="nk-modal-overlay"
          role="dialog"
          aria-modal="true"
          aria-label="Request download"
          onClick={closeForm}
        >
          <div className="nk-modal" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="nk-modal-close"
              aria-label="Close"
              onClick={closeForm}
            >
              <X size={20} strokeWidth={1.8} />
            </button>

            {submitted ? (
              <div className="nk-modal-done">
                <CheckCircle2 size={44} strokeWidth={1.6} />
                <h3>Thank you</h3>
                <p>
                  Your request has been received. We will share the training
                  programme details with you shortly.
                </p>
                <button type="button" className="nk-modal-submit" onClick={closeForm}>
                  Close
                </button>
              </div>
            ) : (
              <>
                <span className="sa-label">Request Download</span>
                <h3>Nuclear Power Generation — Programme Details</h3>
                <p className="nk-modal-sub">
                  Please share your details and we&rsquo;ll send you the
                  programme brochure.
                </p>

                <form className="nk-form" onSubmit={handleSubmit}>
                  <label>
                    <span>Name</span>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                  </label>

                  <label>
                    <span>Phone Number</span>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    />
                  </label>

                  <label>
                    <span>Email Address</span>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                  </label>

                  <label>
                    <span>Company / Organisation</span>
                    <input
                      type="text"
                      required
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                    />
                  </label>

                  <button type="submit" className="nk-modal-submit">
                    <Download size={16} strokeWidth={1.8} />
                    Get Download
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
