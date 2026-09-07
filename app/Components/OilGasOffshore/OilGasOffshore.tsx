"use client";

import React, { useState } from "react";
import Breadcrumbs from "@/app/Components/Breadcrumbs/Breadcrumbs";
import ScrollAnimation from "@/app/Components/ScrollAnimation";
import {
  PencilRuler,
  GitBranch,
  BookCheck,
  Layers,
  ShieldCheck,
  Building2,
  Wrench,
  Gauge,
  Download,
  X,
  CheckCircle2,
} from "lucide-react";
import "./OilGasOffshore.css";

const IMG = "/assets/images/industries/oil-gas";

/* Detailed engineering — from deliverables to advanced analysis */
const offerCategories: {
  icon: React.ComponentType<{ size?: number; strokeWidth?: number }>;
  title: string;
  desc: string;
  items: string[];
}[] = [
  {
    icon: Wrench,
    title: "Process & Mechanical Engineering",
    desc: "Engineering calculations, equipment engineering, datasheets, specifications, design reviews and technical documentation for process and mechanical systems.",
    items: [],
  },
  {
    icon: GitBranch,
    title: "Piping & Pipeline Engineering",
    desc: "Piping layouts, line lists, specifications, modelling, isometrics, support engineering, material take-offs and pipeline engineering for onshore and offshore applications.",
    items: [],
  },
  {
    icon: Layers,
    title: "Plant Layout & 3D Modelling",
    desc: "3D plant modelling, equipment arrangement, routing, constructability reviews and coordinated engineering inputs for complex facilities and brownfield modifications.",
    items: [],
  },
  {
    icon: Building2,
    title: "Structural Engineering",
    desc: "Structural design and assessment for equipment supports, pipe racks, platforms, skids, foundations and connected components, including detailed design verification.",
    items: [],
  },
  {
    icon: BookCheck,
    title: "Engineering Calculations & Design Verification",
    desc: "Design calculations, code-based assessments, load evaluations, equipment checks and independent technical verification to support project execution.",
    items: [],
  },
  {
    icon: PencilRuler,
    title: "Engineering Documentation",
    desc: "Preparation and review of engineering deliverables including drawings, specifications, calculation notes, reports, schedules and technical documentation.",
    items: [],
  },
];

/* Engineering + advanced analysis — engineering the system, then proving the design */
const benefits = [
  "Finite Element Analysis — linear and non-linear stress, thermal, buckling, fatigue, vibration and dynamic studies.",
  "CFD & Multi-Physics — flow, pressure, heat transfer and coupled fluid-structural behaviour for complex systems.",
  "Piping & Pipe Stress Analysis — static, dynamic, thermal, seismic and equipment-interface assessment of piping systems.",
  "Structural Integrity & Asset Assessment — Fitness-for-Service, remaining-life evaluation, fatigue, creep and damage assessment.",
];

/* Industry applications — engineering support across the value chain */
const applications = [
  {
    title: "Upstream & Offshore",
    image: `${IMG}/2.jpg`,
    desc: "Engineering analysis for production facilities, offshore systems, skids and critical equipment.",
    items: [
      "Offshore piping & equipment",
      "Structural & dynamic analysis",
      "Skid and package qualification",
    ],
  },
  {
    title: "Midstream & Pipelines",
    image: `${IMG}/3.jpg`,
    desc: "Analysis and engineering for transport, processing and interconnected piping systems.",
    items: [
      "Pipe stress & flexibility",
      "Pipeline and piping assessment",
      "Seismic & dynamic analysis",
    ],
  },
  {
    title: "Downstream & Process Plants",
    image: `${IMG}/4.jpeg`,
    desc: "Simulation-led support for refineries, process units, utility systems and plant modifications.",
    items: [
      "Equipment & thermal analysis",
      "Plant piping engineering",
      "Revamp & modification studies",
    ],
  },
];

/* Engineering challenges — the difficult parts of Oil & Gas engineering */
const experience: {
  icon: React.ComponentType<{ size?: number; strokeWidth?: number }>;
  title: string;
  desc: string;
  items: string[];
}[] = [
  {
    icon: Gauge,
    title: "High Pressure & Temperature",
    desc: "Evaluate stresses, deformation, thermal effects and equipment interaction under demanding conditions.",
    items: [],
  },
  {
    icon: GitBranch,
    title: "Complex Piping Systems",
    desc: "Assess thermal expansion, sustained loads, occasional loads, supports, restraints and dynamic response.",
    items: [],
  },
  {
    icon: Wrench,
    title: "Vibration & Dynamics",
    desc: "Investigate vibration, seismic events, transient loads, shock and other dynamic effects.",
    items: [],
  },
  {
    icon: Layers,
    title: "Ageing & Degradation",
    desc: "Assess fatigue, creep, corrosion, erosion, cracking and remaining structural capability.",
    items: [],
  },
  {
    icon: Building2,
    title: "Brownfield Modifications",
    desc: "Support rerouting, upgrades and operating-condition changes while accounting for existing constraints.",
    items: [],
  },
  {
    icon: ShieldCheck,
    title: "Design Verification",
    desc: "Provide technical evidence for design suitability, qualification and engineering decisions.",
    items: [],
  },
];

const emptyForm = { name: "", phone: "", email: "", company: "" };

export default function OilGasOffshore() {
  const [activeDownload, setActiveDownload] = useState<string | null>(null);
  const [form, setForm] = useState(emptyForm);
  const [submitted, setSubmitted] = useState(false);

  const openForm = (resource: string) => {
    setActiveDownload(resource);
    setForm(emptyForm);
    setSubmitted(false);
  };
  const closeForm = () => setActiveDownload(null);
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
              Engineering performance <span>where it matters most.</span>
            </h1>

            <p>
              ProSIM supports Oil &amp; Gas projects with advanced engineering
              analysis, simulation and technical expertise across piping,
              structures, equipment and asset integrity.
            </p>

           

            {/* <div className="sa-hero-actions">
              <a href="#offerings" className="sa-hero-btn sa-hero-btn--solid">
                Explore Our Capabilities
              </a>
            </div> */}
          </ScrollAnimation>

          <ScrollAnimation className="sa-hero-media" delay={120}>
            <figure className="sa-hero-media-main">
              <img
                src={`${IMG}/4.jpeg`}
                alt="Oil & gas processing facility"
                loading="eager"
              />
              <figcaption>Oil &amp; Gas · Offshore</figcaption>
            </figure>
            <figure className="sa-hero-media-inset">
              <img
                src={`${IMG}/5.webp`}
                alt="Offshore platform engineering"
                loading="lazy"
              />
            </figure>
          </ScrollAnimation>
        </div>
      </section>

      {/* DETAILED ENGINEERING */}
      <section className="sa-services" id="offerings">
        <div className="sa-container">
          <ScrollAnimation className="sa-intro">
            <span className="sa-label">Detailed Engineering</span>
            <h2>
              From engineering deliverables to advanced analysis — one integrated
              capability.
            </h2>
            <p>
              ProSIM provides multidisciplinary detailed engineering support for
              Oil &amp; Gas projects, combining design development, engineering
              calculations, modelling, documentation and specialist analysis
              within a single technical framework. This enables clients to engage
              one engineering partner from basic design development through
              detailed engineering and design verification.
            </p>
          </ScrollAnimation>

          <ScrollAnimation className="nk-pkg-grid">
            {offerCategories.map((c) => {
              const Icon = c.icon;

              return (
                <article className="nk-pkg-card" key={c.title}>
                  <span className="nk-pkg-num">
                    <Icon size={20} strokeWidth={1.8} />
                  </span>
                  <h3>{c.title}</h3>
                  <p className="nk-pkg-desc">{c.desc}</p>
                  {c.items.length > 0 && (
                    <ul>
                      {c.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}
                </article>
              );
            })}
          </ScrollAnimation>
        </div>
      </section>

      {/* CTA */}
      <section className="sa-ssc" id="downloads">
        <div className="sa-container">
          <ScrollAnimation>
            <span className="sa-label">Work with ProSIM</span>
            <h2>Have a complex Oil &amp; Gas engineering problem?</h2>
            <p className="sa-section-intro">
              Share your project scope, engineering deliverables or technical
              challenge. ProSIM can help determine the right analysis and
              simulation approach.
            </p>

            <div className="nk-downloads">
              <button
                type="button"
                className="nk-download"
                onClick={() => openForm("Oil & Gas Engineering Enquiry")}
              >
                <Download size={17} strokeWidth={1.8} />
                Talk to ProSIM
              </button>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* ENGINEERING + ADVANCED ANALYSIS */}
      <section className="sa-services" id="benefits">
        <div className="sa-container">
          <ScrollAnimation className="sa-intro">
            <span className="sa-label">Engineering + Advanced Analysis</span>
            <h2>Engineering the system — then proving the design.</h2>
            <p>
              ProSIM combines system-level engineering with detailed numerical
              analysis when conventional calculations are not enough. The result
              is a clearer understanding of how components and systems behave
              under real operating and design conditions.
            </p>
          </ScrollAnimation>

          <ScrollAnimation className="nk-cap-grid">
            {benefits.map((b, i) => (
              <div className="nk-cap-box" key={b}>
                <span className="nk-cap-icon">
                  <CheckCircle2 size={20} strokeWidth={1.8} />
                </span>
                <p>{b}</p>
                <em className="og-cap-index">{String(i + 1).padStart(2, "0")}</em>
              </div>
            ))}
          </ScrollAnimation>
        </div>
      </section>

      {/* INDUSTRY APPLICATIONS */}
      <section className="sa-clients" id="customers">
        <div className="sa-container">
          <ScrollAnimation className="sa-ind-head">
            <span className="sa-label">Industry Applications</span>
            <h2>Engineering support across the Oil &amp; Gas value chain.</h2>
            <p>
              From upstream facilities and offshore assets to pipelines, process
              plants and refineries, ProSIM supports projects where engineering
              accuracy and system reliability are critical.
            </p>
          </ScrollAnimation>

          <div className="og-app-grid">
            {applications.map((a, i) => (
              <ScrollAnimation key={a.title} delay={i * 90}>
                <article className="og-app-card">
                  <div className="og-app-img">
                    <img src={a.image} alt={a.title} loading="lazy" />
                  </div>
                  <div className="og-app-body">
                    <h3>{a.title}</h3>
                    <p>{a.desc}</p>
                    <ul>
                      {a.items.map((it) => (
                        <li key={it}>{it}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* ENGINEERING CHALLENGES */}
      <section className="sa-ssc" id="experience">
        <div className="sa-container">
          <ScrollAnimation>
            <span className="sa-label">Engineering Challenges</span>
            <h2>Built to solve the difficult parts of Oil &amp; Gas engineering.</h2>
            <p className="sa-section-intro">
              The recurring engineering problems ProSIM is set up to work on
              across Oil &amp; Gas and offshore assets.
            </p>
          </ScrollAnimation>

          <ScrollAnimation className="nk-pkg-grid og-exp-grid">
            {experience.map((e) => {
              const Icon = e.icon;

              return (
                <article className="nk-pkg-card" key={e.title}>
                  <span className="nk-pkg-num">
                    <Icon size={20} strokeWidth={1.8} />
                  </span>
                  <h3>{e.title}</h3>
                  <p className="nk-pkg-desc">{e.desc}</p>
                  {e.items.length > 0 && (
                    <ul>
                      {e.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}
                </article>
              );
            })}
          </ScrollAnimation>
        </div>
      </section>

      {/* ENQUIRY MODAL */}
      {activeDownload && (
        <div
          className="nk-modal-overlay"
          role="dialog"
          aria-modal="true"
          aria-label="Oil & Gas engineering enquiry"
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
                  Your enquiry has been received. Our Oil &amp; Gas engineering
                  team will get back to you shortly.
                </p>
                <button type="button" className="nk-modal-submit" onClick={closeForm}>
                  Close
                </button>
              </div>
            ) : (
              <>
                <span className="sa-label">Engineering Enquiry</span>
                <h3>{activeDownload}</h3>
                <p className="nk-modal-sub">
                  Share your details and a short note on the project or technical
                  challenge — we&rsquo;ll take it from there.
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
                    <span>Company Name</span>
                    <input
                      type="text"
                      required
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                    />
                  </label>

                  <button type="submit" className="nk-modal-submit">
                    <Download size={16} strokeWidth={1.8} />
                    Send Enquiry
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
