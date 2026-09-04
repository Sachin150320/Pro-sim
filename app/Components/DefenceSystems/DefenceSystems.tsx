"use client";

import React, { useState } from "react";
import Breadcrumbs from "@/app/Components/Breadcrumbs/Breadcrumbs";
import ScrollAnimation from "@/app/Components/ScrollAnimation";
import {
  Award,
  BadgeCheck,
  FlaskConical,
  Building2,
  Ruler,
  Activity,
  Thermometer,
  Wind,
  GitBranch,
  Boxes,
  Magnet,
  RadioTower,
  SearchCheck,
  Timer,
  Download,
  X,
  CheckCircle2,
} from "lucide-react";
import "./DefenceSystems.css";

const IMG = "/assets/images/industries/defence";

const certifications = [
  { icon: Award, text: "An ISO 9001:2008 company" },
  { icon: BadgeCheck, text: "CEMILAC certified design house" },
  { icon: FlaskConical, text: "DSIR Recognised R&D Company" },
  {
    icon: Building2,
    text: "Registered vendor in several DRDO and Defence manufacturing units",
  },
];

const process = [
  "We work in a collaborative engineering mode to assist defence R&D from conceptual design to delivery of design / manufacturing drawings, and interface to obtain certification from the appropriate agencies.",
  "We use a variety of computer simulation technologies to develop computer models of products / systems / processes — adopting virtual product development, virtual prototyping and virtual testing methodologies.",
  "Our models are correlated by physical prototypes and tests to check compliance with MIL specs / customer design specs.",
  "We deliver proven, optimised designs using this robust R&D process — developing defence systems / products / processes faster, better and in a more cost-effective manner.",
];

const capabilities: {
  icon: React.ComponentType<{ size?: number; strokeWidth?: number }>;
  title: string;
  desc: string;
}[] = [
  {
    icon: Ruler,
    title: "Design & Optimisation",
    desc: "Reduce weight and increase performance — life, reliability, stress, thermal, vibration, etc.",
  },
  {
    icon: Activity,
    title: "Finite Element Analysis",
    desc: "Structural and dynamic analysis (prediction of stress hot spots), impact, crash, shock and non-linear analysis.",
  },
  {
    icon: Thermometer,
    title: "Thermal Analysis",
    desc: "Prediction of thermal hot spots.",
  },
  {
    icon: Wind,
    title: "Computational Fluid Dynamics (CFD)",
    desc: "Prediction of temperature profiles, dead flow zones, pressure / velocity gradients and fluid-solid interaction.",
  },
  {
    icon: Timer,
    title: "Fatigue, Fracture & Creep Analysis",
    desc: "Prediction of fatigue hot spots, number of cycles to failure, and probability of failure due to variations in loading / material properties / operational conditions.",
  },
  {
    icon: GitBranch,
    title: "Multi-Body Dynamics",
    desc: "Flexible bodies included, with linking to control systems.",
  },
  {
    icon: Magnet,
    title: "Coupled Electro-Magnetic-Thermal-Structural Analysis",
    desc: "Generators, motors, transformers, switchgears, sensors, etc.",
  },
  {
    icon: RadioTower,
    title: "EMI / EMC Analysis",
    desc: "High-frequency analysis.",
  },
  {
    icon: SearchCheck,
    title: "Failure Analysis",
    desc: "Root-cause identification and corrective engineering.",
  },
  {
    icon: Boxes,
    title: "Remaining Life Assessment & Extension",
    desc: "RLA / RLE for ageing defence assets.",
  },
];

const projects = [
  "Landing Gear of MIG",
  "Enhanced Fatigue Meter for Mirage",
  "Permanent Magnet Generator for Submarine",
  "Turbine Blade Forging and investment casting for Sukhoi",
  "Structural optimisation of missile launchers",
  "Dynamics of air conditioning units for submarines",
  "Growth of turbine rotor discs",
  "Fatigue and fracture analysis of turbine rotor shaft",
  "Optimisation of air intake for UAV",
  "Structural optimisation of UAV",
  "Landing flap dynamic studies and optimisation",
  "EMI / EMC analysis of Antenna, Sensors, PCBs, etc.",
  "Mechanical and thermal design of aviation electronics systems",
];

const heroNav = [
  { title: "R&D Process", id: "process" },
  { title: "Domains", id: "domains" },
  { title: "Certifications", id: "certifications" },
  { title: "Capabilities", id: "capabilities" },
  { title: "Projects Delivered", id: "projects" },
];

const domainIntro = [
  "We work in a collaborative engineering mode to assist defence R&D from conceptual design to the delivery of design / manufacturing drawings. We interface to get certification from the appropriate agencies.",
  "We use a variety of computer simulation technologies; we develop computer models of products / systems / processes, adopting virtual product development, virtual prototyping and virtual testing methodologies.",
  "Fatigue, fracture and creep analysis (prediction of fatigue hot spots — the regions where fatigue damage initiates), number of cycles for failure, and probability of failure due to variations in loading / material properties / operational conditions.",
];

const domains = [
  { title: "Missile Systems", image: `${IMG}/3.jpg` },
  { title: "Defence Electronics", image: `${IMG}/4.jpg` },
  { title: "Naval Systems", image: `${IMG}/5.jpg` },
  { title: "Aerospace and Aero Engines", image: `${IMG}/6.jpg` },
  { title: "Land Based Systems", image: `${IMG}/7.jpg` },
  { title: "Defence Indigenisation & R&D", image: `${IMG}/8.jpg` },
];

const domainGallery = [`${IMG}/9.jpg`, `${IMG}/10.jpg`, `${IMG}/11.jpg`];

const emptyForm = { name: "", phone: "", email: "", company: "" };

export default function DefenceSystems() {
  const [modalOpen, setModalOpen] = useState(false);
  const [form, setForm] = useState(emptyForm);
  const [submitted, setSubmitted] = useState(false);
  const [activeDomain, setActiveDomain] = useState<number | null>(null);

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
              <span>Defence Systems</span> — Indigenous Development &amp; R&amp;D.
            </h1>

            <p>
              ProSIM works in a collaborative engineering mode to assist defence
              R&amp;D from conceptual design to the delivery of design and
              manufacturing drawings, interfacing with the appropriate agencies
              for certification.
            </p>

            <button type="button" className="dfn-hero-btn" onClick={openForm}>
              <Download size={16} strokeWidth={1.8} />
              Download PDF
            </button>
          </ScrollAnimation>

          <ScrollAnimation className="sa-hero-media" delay={120}>
            <figure className="sa-hero-media-main">
              <img src={`${IMG}/1.jpg`} alt="Defence systems R&D" loading="eager" />
              <figcaption>Defence R&amp;D</figcaption>
            </figure>
            <figure className="sa-hero-media-inset">
              <img src={`${IMG}/2.jpg`} alt="Simulation-driven design" loading="lazy" />
            </figure>
          </ScrollAnimation>
        </div>

        {/* <div className="sa-hero-inner">
          <div className="sa-hero-nav">
            {heroNav.map((item) => (
              <a href={`#${item.id}`} className="sa-hero-nav-button" key={item.id}>
                {item.title}
              </a>
            ))}
          </div>
        </div> */}
      </section>

      {/* R&D PROCESS */}
      <section className="sa-services" id="process">
        <div className="sa-container">
          <ScrollAnimation className="sa-intro">
            <span className="sa-label">The R&amp;D Process</span>
            <h2>Virtual Product Development, Correlated by Test</h2>
          </ScrollAnimation>

          <ScrollAnimation className="dfn-steps">
            {process.map((p, i) => (
              <div className="dfn-step" key={p}>
                <span>{String(i + 1).padStart(2, "0")}</span>
                <p>{p}</p>
              </div>
            ))}
          </ScrollAnimation>
        </div>
      </section>

      {/* DOMAINS */}
      <section className="sa-ssc" id="domains">
        <div className="sa-container">
          <ScrollAnimation>
            <span className="sa-label">Defence Domains</span>
            <h2>Domains We Support</h2>
            <p className="sa-section-intro">
              Select a domain to see how ProSIM applies its collaborative
              engineering and simulation-driven R&amp;D process.
            </p>
          </ScrollAnimation>

          <ScrollAnimation className="dfn-domain-grid">
            {domains.map((d, i) => (
              <button
                type="button"
                className="dfn-domain"
                key={d.title}
                onClick={() => setActiveDomain(i)}
              >
                <span className="dfn-domain-img">
                  <img src={d.image} alt={d.title} loading="lazy" />
                </span>
                <span className="dfn-domain-cap">{d.title}</span>
              </button>
            ))}
          </ScrollAnimation>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="sa-ssc" id="certifications">
        <div className="sa-container">
          <ScrollAnimation>
            <span className="sa-label">Certifications</span>
            <h2>Accredited for Defence R&amp;D</h2>
            <p className="sa-section-intro">
              ProSIM holds the certifications and recognitions required to work
              with defence organisations and their vendors.
            </p>

            <div className="dfn-certs">
              {certifications.map((c) => {
                const Icon = c.icon;

                return (
                  <div className="dfn-cert" key={c.text}>
                    <span>
                      <Icon size={22} strokeWidth={1.7} />
                    </span>
                    <strong>{c.text}</strong>
                  </div>
                );
              })}
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="sa-services" id="capabilities">
        <div className="sa-container">
          <ScrollAnimation className="sa-intro">
            <span className="sa-label">Capabilities</span>
            <h2>Defence Systems — Indigenous Development / R&amp;D</h2>
            <p>
              A full simulation toolkit — structural, thermal, fluid,
              electromagnetic and dynamics — applied end-to-end across defence
              products, systems and processes.
            </p>
          </ScrollAnimation>

          <ScrollAnimation className="dfn-cap-grid">
            {capabilities.map((c, i) => {
              const Icon = c.icon;

              return (
                <article className="dfn-cap" key={c.title}>
                  <div className="dfn-cap-top">
                    <span className="dfn-cap-icon">
                      <Icon size={22} strokeWidth={1.7} />
                    </span>
                    <em>{String(i + 1).padStart(2, "0")}</em>
                  </div>
                  <h3>{c.title}</h3>
                  <p>{c.desc}</p>
                </article>
              );
            })}
          </ScrollAnimation>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="sa-ssc" id="projects">
        <div className="sa-container">
          <ScrollAnimation>
            <span className="sa-label">Track Record</span>
            <h2>Projects Delivered to Defence Organisations &amp; Vendors</h2>
            <p className="sa-section-intro">
              A selection of projects ProSIM has delivered to defence
              organisations and their vendors.
            </p>
          </ScrollAnimation>

          <ScrollAnimation className="dfn-proj-grid">
            {projects.map((p, i) => (
              <article className="dfn-proj" key={p}>
                <div className="dfn-proj-img">
                  <img
                    src={`${IMG}/${i + 1}.jpg`}
                    alt={p}
                    loading="lazy"
                  />
                </div>
                <div className="dfn-proj-body">
                  <span>{String(i + 1).padStart(2, "0")}</span>
                  <h3>{p}</h3>
                </div>
              </article>
            ))}
          </ScrollAnimation>

          <p className="dfn-more">… and many more</p>
        </div>
      </section>

      {/* CTA */}
      <section className="dfn-cta">
        <div className="sa-container">
          <ScrollAnimation className="dfn-cta-inner">
            <div>
              <h2>Partner with ProSIM for Defence R&amp;D</h2>
              <p>
                Get the ProSIM Defence capabilities document, or talk to our team
                about your indigenous development programme.
              </p>
            </div>
            <button type="button" className="dfn-cta-btn" onClick={openForm}>
              <Download size={17} strokeWidth={1.8} />
              Request Capabilities PDF
            </button>
          </ScrollAnimation>
        </div>
      </section>

      {/* DOMAIN DETAIL MODAL */}
      {activeDomain !== null && (
        <div
          className="nk-modal-overlay"
          role="dialog"
          aria-modal="true"
          aria-label={domains[activeDomain].title}
          onClick={() => setActiveDomain(null)}
        >
          <div
            className="nk-modal dfn-domain-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="nk-modal-close"
              aria-label="Close"
              onClick={() => setActiveDomain(null)}
            >
              <X size={20} strokeWidth={1.8} />
            </button>

            <span className="sa-label">Defence Domain</span>
            <h3>{domains[activeDomain].title}</h3>

            <div className="dfn-domain-shots">
              {domainGallery.map((src) => (
                <img key={src} src={src} alt={domains[activeDomain].title} loading="lazy" />
              ))}
            </div>

            {domainIntro.map((p) => (
              <p className="dfn-domain-p" key={p}>
                {p}
              </p>
            ))}

            <button
              type="button"
              className="nk-modal-submit"
              onClick={() => {
                setActiveDomain(null);
                openForm();
              }}
            >
              <Download size={16} strokeWidth={1.8} />
              Request Full PDF
            </button>
          </div>
        </div>
      )}

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
                  Your request has been received. Our team will share the ProSIM
                  Defence capabilities document with you shortly.
                </p>
                <button type="button" className="nk-modal-submit" onClick={closeForm}>
                  Close
                </button>
              </div>
            ) : (
              <>
                <span className="sa-label">Request Download</span>
                <h3>ProSIM Defence — Capabilities PDF</h3>
                <p className="nk-modal-sub">
                  Please share your details and we&rsquo;ll send you the document.
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
