"use client";

import React, { useState } from "react";
import Breadcrumbs from "@/app/Components/Breadcrumbs/Breadcrumbs";
import ScrollAnimation from "@/app/Components/ScrollAnimation";
import { MapPin, Phone, Mail, CheckCircle2, Send, ArrowUpRight } from "lucide-react";
import "./ContactUs.css";

const P = "/assets/images/portfolio/modern";

const contactCards = [
  {
    icon: MapPin,
    label: "Visit Us",
    lines: ["B-378/1, Ring Road, 1st Stage", "Peenya (near TVS cross)", "Bengaluru – 560058, India"],
    action: {
      text: "Get directions",
      href: "https://www.google.com/maps?cid=163320593820900988&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAMYASAF&hl=en-US&source=embed",
    },
  },
  {
    icon: Phone,
    label: "Call Us",
    lines: ["080 68160000", "Mon – Sat, 9:30 – 18:30 IST"],
    action: { text: "080 68160000", href: "tel:08068160000" },
  },
  {
    icon: Mail,
    label: "Email Us",
    lines: ["enquiry@pro-sim.com", "For project enquiries & partnerships"],
    action: { text: "enquiry@pro-sim.com", href: "mailto:enquiry@pro-sim.com" },
  },
];

const socials = [
  {
    label: "LinkedIn",
    href: "#",
    path: "M6.94 8.5H3.5V20h3.44V8.5zM5.22 3A2.02 2.02 0 1 0 5.22 7.04 2.02 2.02 0 0 0 5.22 3zM20.5 13.42c0-3.47-1.85-5.08-4.32-5.08-1.99 0-2.88 1.1-3.38 1.87V8.5H9.36V20h3.44v-5.69c0-1.5.28-2.95 2.14-2.95 1.83 0 1.85 1.71 1.85 3.05V20h3.44l.27-6.58z",
  },
  {
    label: "Facebook",
    href: "#",
    path: "M13.5 21v-8h2.75l.42-3h-3.17V8.08c0-.87.24-1.46 1.5-1.46h1.8V3.94c-.31-.04-1.38-.14-2.62-.14-2.59 0-4.36 1.58-4.36 4.49V10H7.9v3h2.72v8h2.88z",
  },
  {
    label: "YouTube",
    href: "#",
    path: "M21.6 7.2a2.5 2.5 0 0 0-1.76-1.77C18.25 5 12 5 12 5s-6.25 0-7.84.43A2.5 2.5 0 0 0 2.4 7.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.76 1.77C5.75 19 12 19 12 19s6.25 0 7.84-.43a2.5 2.5 0 0 0 1.76-1.77A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.8zM10 15V9l5.2 3-5.2 3z",
  },
];

const emptyForm = { name: "", email: "", subject: "", message: "" };

export default function ContactUs() {
  const [form, setForm] = useState(emptyForm);
  const [submitted, setSubmitted] = useState(false);

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
              <span>Let&rsquo;s Talk</span> About Your Engineering Challenge.
            </h1>
            <p>
              Reach the ProSIM R&amp;D team in Bengaluru — for project enquiries,
              partnerships, or simply to say hello.
            </p>
          </ScrollAnimation>

          <ScrollAnimation className="sa-hero-media" delay={120}>
            <figure className="sa-hero-media-main">
              <img src={`${P}/2.webp`} alt="ProSIM R&D team and facility" loading="eager" />
              <figcaption>Bengaluru</figcaption>
            </figure>
            <figure className="sa-hero-media-inset">
              <img src={`${P}/6.webp`} alt="Engineering collaboration" loading="lazy" />
            </figure>
          </ScrollAnimation>
        </div>
      </section>

      {/* CONTACT CARDS */}
      <section className="ct2-cards-sec">
        <div className="sa-container">
          <div className="ct2-cards">
            {contactCards.map((c, i) => {
              const Icon = c.icon;
              return (
                <ScrollAnimation key={c.label} delay={i * 80}>
                  <div className="ct2-card">
                    <span className="ct2-card-ic">
                      <Icon size={22} strokeWidth={1.8} />
                    </span>
                    <h3>{c.label}</h3>
                    <div className="ct2-card-lines">
                      {c.lines.map((l) => (
                        <p key={l}>{l}</p>
                        
                      ))}
                    </div>
                    <a
                      href={c.action.href}
                      className="ct2-card-link"
                      target={c.action.href.startsWith("http") ? "_blank" : undefined}
                      rel={c.action.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    >
                      {c.action.text}
                      <ArrowUpRight size={16} strokeWidth={2} />
                    </a>
                  </div>
                </ScrollAnimation>
              );
            })}
          </div>
        </div>
      </section>

      {/* FORM + MAP */}
      <section className="ct2-main">
        <div className="sa-container">
          <div className="ct2-split">
            {/* FORM */}
            <ScrollAnimation className="ct2-form-wrap">
              <span className="sa-label">Send a Message</span>
              <h2>Say Hello to Us</h2>

              {submitted ? (
                <div className="ct2-done">
                  <CheckCircle2 size={44} strokeWidth={1.6} />
                  <h3>Message sent</h3>
                  <p>
                    Thank you for reaching out. Our team will get back to you
                    shortly — you can also email us at enquiry@pro-sim.com.
                  </p>
                </div>
              ) : (
                <form className="ct2-form" onSubmit={handleSubmit}>
                  <div className="ct2-form-row">
                    <label>
                      <span>Full Name <i>*</i></span>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rajesh Sharma"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                      />
                    </label>
                    <label>
                      <span>Work Email <i>*</i></span>
                      <input
                        type="email"
                        required
                        placeholder="e.g. r.sharma@company.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                      />
                    </label>
                  </div>

                  <label>
                    <span>Subject <i>*</i></span>
                    <input
                      type="text"
                      required
                      placeholder="What is this about?"
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    />
                  </label>

                  <label>
                    <span>Message <i>*</i></span>
                    <textarea
                      rows={5}
                      required
                      placeholder="Tell us a little about your project or enquiry…"
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                    />
                  </label>

                  <button type="submit" className="ct2-submit">
                    <Send size={16} strokeWidth={1.9} />
                    Send Message
                  </button>
                </form>
              )}

              <div className="ct2-social">
                <span>Follow us</span>
                <div>
                  {socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d={s.path} />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </ScrollAnimation>

            {/* MAP */}
            <ScrollAnimation className="ct2-map-wrap" delay={120}>
              <div className="ct2-map-card">
                <iframe
                  title="ProSIM location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15548.551958342066!2d77.52198926362968!3d13.02688345311245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d1f80470d41%3A0x2443b36fb335e7c!2sProSIM!5e0!3m2!1sen!2sin!4v1535518019186"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <div className="ct2-map-badge">
                  <MapPin size={16} strokeWidth={2} />
                  ProSIM R &amp; D Pvt. Ltd., Peenya, Bengaluru
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>
    </main>
  );
}
