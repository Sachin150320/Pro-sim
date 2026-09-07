"use client";

import React, { useState } from "react";
import Breadcrumbs from "@/app/Components/Breadcrumbs/Breadcrumbs";
import {
  Building2,
  Landmark,
  Wrench,
  FlaskConical,
  Cpu,
  Download,
  X,
  CheckCircle2,
  FileText,
  Box,
  Workflow,
  MonitorCheck,
  Activity,
  Thermometer,
  Wind,
  Cog,
  Waves,
  Gauge,
  Timer,
  ShieldCheck,
} from "lucide-react";
import ScrollAnimation from "@/app/Components/ScrollAnimation";
import "./NuclearPower.css";

const IMG = "/assets/images/industries/nuclear";

const quickLinks = [
  {
    title: "Seismic Analysis & Qualification",
    href: "#packages",
    image: `${IMG}/nuclear-1.jpg`,
  },
  {
    title: "Equipment Engineering",
    href: "#offerings",
    image: `${IMG}/pro-02.jpg`,
  },
  {
    title: "Piping Engineering",
    href: "#packages",
    image: `${IMG}/pro-03.jpg`,
  },
  {
    title: "Structural Integrity Assessment",
    href: "#packages",
    image: `${IMG}/nuclear-2.jpg`,
  },
];

/* Engineering depth across the plant — discipline coverage */
const offerings: {
  icon: React.ComponentType<{ size?: number; strokeWidth?: number }>;
  label: string;
}[] = [
  { icon: Cog, label: "Mechanical Equipment Design" },
  { icon: Workflow, label: "Piping Systems & Supports" },
  { icon: Box, label: "Pressure Vessels & Tanks" },
  { icon: Thermometer, label: "Heat Exchangers" },
  { icon: Gauge, label: "Pumps & Compressors" },
  { icon: Wrench, label: "Valves & Actuators" },
  { icon: Building2, label: "Steel & RCC Structures" },
  { icon: Landmark, label: "Foundations & Anchorages" },
  { icon: Wind, label: "HVAC / Nuclear Ventilation" },
  { icon: Activity, label: "Electrical Packages" },
  { icon: MonitorCheck, label: "C&I Packages" },
  { icon: FlaskConical, label: "Special Purpose Equipment" },
];

/* Core capabilities — multidisciplinary engineering, backed by simulation */
const packageGroups = [
  {
    title: "Detailed Engineering",
    desc: "Engineering development for nuclear systems, equipment and packages.",
    items: [
      "Engineering calculations & sizing",
      "PFD / P&ID / ISO development",
      "Equipment & skid design",
      "2D / 3D CAD modelling",
      "Design documentation",
    ],
  },
  {
    title: "Piping Engineering",
    desc: "Design and analysis of critical piping systems and supports.",
    items: [
      "Pipe routing & modelling",
      "Static & dynamic pipe stress",
      "Pipe supports & restraints",
      "Nozzle load evaluation",
      "Seismic load cases",
    ],
  },
  {
    title: "Seismic Qualification",
    desc: "Analysis-led qualification of safety-critical SSCs.",
    items: [
      "Seismic response analysis",
      "Equipment qualification",
      "Support & anchorage qualification",
      "SMA & HCLPF assessment",
      "Test correlation support",
    ],
  },
  {
    title: "CAE / FEA / CFD",
    desc: "Simulation to validate designs and understand operating behaviour.",
    items: [
      "Stress & deformation",
      "Vibration & dynamics",
      "Thermal analysis",
      "CFD & conjugate heat transfer",
      "Fluid-structure interaction",
    ],
  },
  {
    title: "Structural Integrity",
    desc: "Assessment of component integrity throughout the operating lifecycle.",
    items: [
      "Fatigue & fracture assessment",
      "Creep evaluation",
      "Fitness-for-service studies",
      "Failure / root-cause analysis",
      "Remaining-life assessment",
    ],
  },
  {
    title: "Design Verification",
    desc: "Independent analysis and engineering verification for critical designs.",
    items: [
      "Design review & verification",
      "Code-based assessment",
      "Design optimisation",
      "Qualification documentation",
      "Engineering reports",
    ],
  },
];

/* Nuclear plant coverage — systems, structures and components */
const customers = [
  { icon: Cog, title: "Mechanical Systems" },
  { icon: Workflow, title: "Piping & Supports" },
  { icon: Building2, title: "Structures" },
  { icon: Activity, title: "Electrical & C&I" },
  { icon: Wind, title: "Nuclear Ventilation" },
  { icon: FlaskConical, title: "Special Packages" },
  { icon: Waves, title: "Plant Water Systems" },
  { icon: Timer, title: "Waste Management" },
];

/* Project support — from concept to qualification */
const whyProsim: {
  id: string;
  title: string;
  icon: React.ComponentType<{ size?: number; strokeWidth?: number }>;
  points: string[];
}[] = [
  {
    id: "pre-bid",
    title: "Engineering Support",
    icon: FileText,
    points: [
      "Scope understanding, engineering estimates, feasibility and pre-bid technical support.",
    ],
  },
  {
    id: "design",
    title: "Detailed Engineering",
    icon: Box,
    points: [
      "Calculations, modelling, drawings, equipment design and multidisciplinary engineering.",
    ],
  },
  {
    id: "analysis",
    title: "Verification & Qualification",
    icon: ShieldCheck,
    points: [
      "FEA, CFD, seismic, pipe stress, structural integrity and code-based evaluations.",
    ],
  },
  {
    id: "lifecycle",
    title: "Assessment & Life Extension",
    icon: Timer,
    points: [
      "Failure analysis, fitness-for-service, remaining-life and life-extension studies.",
    ],
  },
  {
    id: "simulation",
    title: "Simulation-Led Engineering",
    icon: Cpu,
    points: [
      "Define — loads, boundary conditions and design basis.",
      "Model — equipment, piping, structures and interfaces.",
      "Analyse — FEA, CFD, seismic, thermal and dynamic response.",
      "Qualify — code checks, margins, integrity and qualification.",
      "Document — traceable engineering calculations and reports.",
    ],
  },
];

const emptyForm = { name: "", phone: "", email: "", company: "" };

export default function NuclearPower() {
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
          <div className="sa-hero-text">
            <h1>
              Engineering for the <span>Nuclear Energy Lifecycle.</span>
            </h1>

            <p>
              ProSIM provides detailed engineering, CAE / FEA, seismic
              qualification, piping engineering, structural integrity and
              multidisciplinary engineering support for nuclear power plant
              systems, structures and components.
            </p>

            {/* <div className="sa-hero-actions">
              <a href="#packages" className="sa-hero-btn sa-hero-btn--solid">
                Explore Capabilities
              </a>
              <button
                type="button"
                className="sa-hero-btn sa-hero-btn--ghost"
                onClick={() => openForm("Contact ProSIM")}
              >
                Discuss a Project
              </button>
            </div> */}
          </div>

          <div className="sa-hero-media">
            <figure className="sa-hero-media-main">
              <img
                src={`${IMG}/nuclear-1.jpg`}
                alt="Nuclear power plant — engineering and seismic qualification"
                loading="eager"
              />
              <figcaption>Nuclear Power</figcaption>
            </figure>
            <figure className="sa-hero-media-inset">
              <img
                src={`${IMG}/nuclear-2.jpg`}
                alt="Nuclear systems, structures and components"
                loading="lazy"
              />
            </figure>
          </div>
        </div>
      </section>

      {/* NUCLEAR ENGINEERING PARTNER */}
      <section className="nk-partner">
        <div className="sa-container">
          <ScrollAnimation className="nk-partner-grid">
            <div className="sa-intro">
              <span className="sa-label">Nuclear Engineering Partner</span>
              <h2>From engineering calculations to qualification.</h2>
            </div>

            <div className="nk-partner-body">
              <p>
                Nuclear projects demand engineering that connects design,
                analysis, qualification, documentation and safety requirements.
                ProSIM combines multidisciplinary engineering with simulation-led
                design verification to support critical nuclear systems,
                structures and components.
              </p>
              <p>
                Our engineering teams support EPC contractors, equipment
                manufacturers, system integrators, operators and nuclear R&amp;D
                organisations across design development, detailed engineering,
                analysis, qualification and life-extension activities.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* ENGINEERING DEPTH ACROSS THE PLANT */}
      <section className="sa-services" id="offerings">
        <div className="sa-container">
          <section className="sa-intro">
            <span className="sa-label">Detailed Engineering Capability</span>

            <h2>Engineering depth across the plant.</h2>

            <p>
              ProSIM supports engineering packages across mechanical, piping,
              structural, electrical and control &amp; instrumentation
              disciplines. This allows individual components to be engineered
              with an understanding of their interfaces, loads, supports and
              qualification requirements.
            </p>
          </section>

          <div className="nk-cap-grid">
            {offerings.map((item) => {
              const Icon = item.icon;

              return (
                <div className="nk-cap-box" key={item.label}>
                  <span className="nk-cap-icon">
                    <Icon size={20} strokeWidth={1.8} />
                  </span>
                  <p>{item.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* QUICK LINK CARDS */}
      <section className="nk-quick">
        <div className="sa-container">
          <div className="nk-ql-grid">
            {quickLinks.map((q, index) => (
              <ScrollAnimation key={q.title} delay={index * 90}>
                <a href={q.href} className="nk-ql-card">
                  <div className="nk-ql-img">
                    <img src={q.image} alt={q.title} loading="lazy" />
                  </div>
                  <div className="nk-ql-cap">
                    <span>{q.title}</span>
                  </div>
                </a>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* CORE CAPABILITIES */}
      <section className="sa-ssc" id="packages">
        <div className="sa-container">
          <span className="sa-label">Core Capabilities</span>

          <h2>Multidisciplinary engineering, backed by simulation.</h2>

          <p className="sa-section-intro">
            Our nuclear engineering capability covers the complete technical
            chain — from system-level engineering and equipment design to
            advanced analysis, qualification and structural integrity assessment.
          </p>

          <ScrollAnimation className="nk-pkg-grid">
            {packageGroups.map((group, index) => (
              <article className="nk-pkg-card" key={group.title}>
                <span className="nk-pkg-num">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3>{group.title}</h3>
                <p className="nk-pkg-desc">{group.desc}</p>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </ScrollAnimation>
        </div>
      </section>

      {/* NUCLEAR PLANT COVERAGE */}
      <section className="sa-clients" id="customers">
        <div className="sa-container">
          <div className="sa-ind-head">
            <span className="sa-label">Nuclear Plant Coverage</span>

            <h2>Systems, structures and components.</h2>

            <p>
              ProSIM engineers and analyses systems, structures and components
              across the full scope of a nuclear power plant.
            </p>
          </div>

          <div className="sa-ind-layout">
            <div className="sa-ind-main">
              <div className="sa-ind-grid">
                {customers.map((c) => {
                  const Icon = c.icon;

                  return (
                    <div className="sa-ind-box" key={c.title}>
                      <span className="sa-ind-icon">
                        <Icon size={20} strokeWidth={1.8} />
                      </span>
                      <strong>{c.title}</strong>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="sa-ind-media">
              <figure className="sa-ind-photo">
                <img
                  src={`${IMG}/1.jpg`}
                  alt="Nuclear power infrastructure"
                  loading="lazy"
                />
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECT SUPPORT */}
      <section className="sa-services" id="why-prosim">
        <div className="sa-container">
          <section className="sa-intro">
            <span className="sa-label">Project Support</span>

            <h2>Support from concept to qualification.</h2>

            <p>
              ProSIM engages at any stage of a nuclear project — from pre-bid
              engineering support through detailed design, verification and
              qualification to life-extension assessment.
            </p>
          </section>

          <div className="sa-service-list">
            {whyProsim.map((block) => {
              const Icon = block.icon;

              return (
                <article className="sa-service-box" id={block.id} key={block.id}>
                  <div className="sa-service-top">
                    <div className="sa-service-icon">
                      <Icon size={25} strokeWidth={1.8} />
                    </div>

                    <h2>{block.title}</h2>
                  </div>

                  <div className="sa-point-grid">
                    {block.points.map((point, i) => (
                      <div className="sa-point-box" key={point}>
                        <span className="sa-point-num">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <div className="sa-point-body">
                          <p>{point}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* WORK WITH PROSIM */}
      {/* <section className="sa-ssc" id="downloads">
        <div className="sa-container">
          <span className="sa-label">Work with ProSIM</span>

          <h2>Need engineering capacity for a nuclear project?</h2>

          <p className="sa-section-intro">
            Engage ProSIM for detailed engineering, analysis, qualification or
            multidisciplinary engineering support for nuclear power plant
            projects.
          </p>

          <div className="nk-downloads">
            <button
              type="button"
              className="nk-download"
              onClick={() => openForm("Contact ProSIM")}
            >
              <Download size={17} strokeWidth={1.8} />
              Contact ProSIM
            </button>
          </div>
        </div>
      </section> */}

      {/* ENQUIRY MODAL */}
      {activeDownload && (
        <div
          className="nk-modal-overlay"
          role="dialog"
          aria-modal="true"
          aria-label="Contact ProSIM"
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
                  Your enquiry has been received. Our nuclear engineering team
                  will get back to you shortly.
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
                  Share your details and our nuclear engineering team will get
                  back to you.
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
