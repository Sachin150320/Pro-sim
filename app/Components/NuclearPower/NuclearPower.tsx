"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, X, CheckCircle2, Download } from "lucide-react";
import "./NuclearPower.css";

const capabilities = [
  {
    num: "01",
    title: "Detailed Engineering",
    desc: "Engineering development for nuclear systems, equipment and packages.",
    points: [
      "Engineering calculations & sizing",
      "PFD / P&ID / ISO development",
      "Equipment & skid design",
      "2D / 3D CAD modelling",
      "Design documentation",
    ],
  },
  {
    num: "02",
    title: "Piping Engineering",
    desc: "Design and analysis of critical piping systems and supports.",
    points: [
      "Pipe routing & modelling",
      "Static & dynamic pipe stress",
      "Pipe supports & restraints",
      "Nozzle load evaluation",
      "Seismic load cases",
    ],
  },
  {
    num: "03",
    title: "Seismic Qualification",
    desc: "Analysis-led qualification of safety-critical SSCs.",
    points: [
      "Seismic response analysis",
      "Equipment qualification",
      "Support & anchorage qualification",
      "SMA & HCLPF assessment",
      "Test correlation support",
    ],
  },
  {
    num: "04",
    title: "CAE / FEA / CFD",
    desc: "Simulation to validate designs and understand operating behaviour.",
    points: [
      "Stress & deformation",
      "Vibration & dynamics",
      "Thermal analysis",
      "CFD & conjugate heat transfer",
      "Fluid–structure interaction",
    ],
  },
  {
    num: "05",
    title: "Structural Integrity",
    desc: "Assessment of component integrity throughout the operating lifecycle.",
    points: [
      "Fatigue & fracture assessment",
      "Creep evaluation",
      "Fitness-for-service studies",
      "Failure / root-cause analysis",
      "Remaining-life assessment",
    ],
  },
  {
    num: "06",
    title: "Design Verification",
    desc: "Independent analysis and engineering verification for critical designs.",
    points: [
      "Design review & verification",
      "Code-based assessment",
      "Qualification documentation",
      "Design optimisation",
      "Engineering reports",
    ],
  },
];

const disciplineChips = [
  "Mechanical Equipment Design",
  "Piping Systems & Supports",
  "Pressure Vessels & Tanks",
  "Heat Exchangers",
  "Pumps & Compressors",
  "Valves & Actuators",
  "Steel & RCC Structures",
  "Foundations & Anchorages",
  "HVAC / Nuclear Ventilation",
  "Electrical Packages",
  "C&I Packages",
  "Special Purpose Equipment",
];

const processSteps = [
  { num: "01", title: "Define", text: "Loads, boundary conditions & design basis" },
  { num: "02", title: "Model", text: "Equipment, piping, structures & interfaces" },
  { num: "03", title: "Analyse", text: "FEA, CFD, seismic, thermal & dynamic response" },
  { num: "04", title: "Qualify", text: "Code checks, margins, integrity & qualification" },
  { num: "05", title: "Document", text: "Traceable engineering calculations & reports" },
];

const showcase = [
  {
    image: "/assets/images/portfolio/modern/4.webp",
    title: "Seismic Analysis & Qualification",
    text: "Analysis of equipment and components subjected to nuclear seismic requirements.",
  },
  {
    image: "/assets/images/portfolio/modern/6.webp",
    title: "Equipment Engineering",
    text: "Design, modelling and verification of nuclear mechanical equipment.",
  },
];

const coverage = [
  {
    title: "Mechanical Systems",
    desc: "Pumps, valves, pressure vessels, tanks, heat exchangers, compressors, filters, strainers and custom equipment.",
  },
  {
    title: "Piping & Supports",
    desc: "Primary piping, utility systems, piping supports, hangers, restraints, instruments and associated piping.",
  },
  {
    title: "Structures",
    desc: "Steel structures, RCC structures, foundations, equipment supports, anchorages and embedded components.",
  },
  {
    title: "Electrical & C&I",
    desc: "DG systems, transformers, panels, switchgear, cable trays, instrumentation, control panels and support structures.",
  },
  {
    title: "Nuclear Ventilation",
    desc: "Ventilation and HVAC-related equipment, supports, ducting and qualification-oriented engineering.",
  },
  {
    title: "Special Packages",
    desc: "Steam generators, pressurizers, reactor headers, coolant channels, turbine packages and special equipment.",
  },
  {
    title: "Plant Water Systems",
    desc: "Plant water, cooling-related systems, common services and associated mechanical and piping components.",
  },
  {
    title: "Waste Management",
    desc: "Engineering and analysis support for nuclear waste management, recycling and disposal-related systems.",
  },
];

const phases = [
  {
    step: "01 — Pre-Bid",
    title: "Engineering Support",
    text: "Scope understanding, engineering estimates, feasibility and pre-bid technical support.",
  },
  {
    step: "02 — Design",
    title: "Detailed Engineering",
    text: "Calculations, modelling, drawings, equipment design and multidisciplinary engineering.",
  },
  {
    step: "03 — Analysis",
    title: "Verification & Qualification",
    text: "FEA, CFD, seismic, pipe stress, structural integrity and code-based evaluations.",
  },
  {
    step: "04 — Lifecycle",
    title: "Assessment & Life Extension",
    text: "Failure analysis, fitness-for-service, remaining-life and life-extension studies.",
  },
];

const brochures = [
  "Nuclear Brochure",
  "Abstract – Engineered Buffer Clay Modeling – Nuclear Waste Disposal",
  "ProSIM Nuclear Offerings: Engineering Design & Seismic Qualification",
];

const emptyForm = { name: "", email: "", company: "", address: "", phone: "" };

export default function NuclearPowerPage() {
  const [activeBrochure, setActiveBrochure] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState(emptyForm);

  useEffect(() => {
    document.body.style.overflow = activeBrochure ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeBrochure]);

  const openModal = (title: string) => {
    setActiveBrochure(title);
    setSubmitted(false);
    setForm(emptyForm);
  };
  const closeModal = () => setActiveBrochure(null);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };
  const updateField =
    (field: keyof typeof emptyForm) =>
    (event: React.ChangeEvent<HTMLInputElement>) =>
      setForm((current) => ({ ...current, [field]: event.target.value }));

  return (
    <main className="nk-page">
      {/* HERO */}
      <section className="nk-hero">
        <div className="nk-hero-inner">
          <div className="nk-hero-text">
            <span className="nk-eyebrow nk-eyebrow--light">Nuclear Power Engineering</span>
            <h1>
              Engineering for the <span>Nuclear Energy</span> Lifecycle.
            </h1>
            <p>
              ProSIM provides detailed engineering, CAE / FEA, seismic qualification, piping
              engineering, structural integrity and multidisciplinary engineering support for
              nuclear power plant systems, structures and components.
            </p>
            <div className="nk-hero-actions">
              <a href="#capabilities" className="nk-btn nk-btn--solid">
                Explore Capabilities
              </a>
              <Link href="/contact-us" className="nk-btn nk-btn--ghost">
                Discuss a Project
              </Link>
            </div>
          </div>

          <div className="nk-hero-media">
            <figure className="nk-hero-media-main">
              <img
                src="/assets/images/portfolio/modern/4.webp"
                alt="Finite element seismic analysis of a nuclear structure"
                loading="eager"
              />
              <figcaption>Seismic Qualification</figcaption>
            </figure>
            <figure className="nk-hero-media-inset">
              <img
                src="/assets/images/portfolio/modern/6.webp"
                alt="CFD analysis of a nuclear heat exchanger"
                loading="lazy"
              />
            </figure>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="nk-intro">
        <div className="nk-container nk-intro-grid">
          <div className="nk-intro-head">
            <span className="nk-eyebrow">Nuclear Engineering Partner</span>
            <h2>From engineering calculations to qualification.</h2>
          </div>
          <div className="nk-intro-body">
            <p>
              Nuclear projects demand engineering that connects design, analysis,
              qualification, documentation and safety requirements. ProSIM combines
              multidisciplinary engineering with simulation-led design verification to support
              critical nuclear systems, structures and components.
            </p>
            <p>
              Our engineering teams support EPC contractors, equipment manufacturers, system
              integrators, operators and nuclear R&amp;D organisations across design
              development, detailed engineering, analysis, qualification and life-extension
              activities.
            </p>
          </div>
        </div>
      </section>

      {/* CORE CAPABILITIES */}
      <section id="capabilities" className="nk-section nk-section--tint">
        <div className="nk-container">
          <span className="nk-eyebrow">Core Capabilities</span>
          <h2 className="nk-section-title">
            Multidisciplinary engineering, backed by simulation.
          </h2>
          <p className="nk-lead">
            Our nuclear engineering capability covers the complete technical chain — from
            system-level engineering and equipment design to advanced analysis, qualification
            and structural integrity assessment.
          </p>

          <div className="nk-capgrid">
            {capabilities.map((c) => (
              <article className="nk-cap-card" key={c.num}>
                <span className="nk-cap-num">{c.num}</span>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
                <ul>
                  {c.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ENGINEERING DEPTH */}
      <section className="nk-section">
        <div className="nk-container nk-depth-grid">
          <div className="nk-depth-left">
            <span className="nk-eyebrow">Detailed Engineering Capability</span>
            <h2 className="nk-section-title">Engineering depth across the plant.</h2>
            <p className="nk-lead">
              ProSIM supports engineering packages across mechanical, piping, structural,
              electrical and control &amp; instrumentation disciplines. This allows individual
              components to be engineered with an understanding of their interfaces, loads,
              supports and qualification requirements.
            </p>
            <div className="nk-chip-grid">
              {disciplineChips.map((chip) => (
                <span className="nk-chip" key={chip}>
                  {chip}
                </span>
              ))}
            </div>
          </div>

          <aside className="nk-process-card">
            <h3>Simulation-led engineering</h3>
            <p>
              Engineering decisions are supported through numerical analysis, code-based
              assessment and multidisciplinary simulation.
            </p>
            <ol>
              {processSteps.map((s) => (
                <li key={s.num}>
                  <span className="nk-process-num">{s.num}</span>
                  <span className="nk-process-text">
                    <strong>{s.title}</strong>
                    <span>{s.text}</span>
                  </span>
                </li>
              ))}
            </ol>
          </aside>
        </div>

        <div className="nk-container nk-showcase">
          {showcase.map((item) => (
            <figure className="nk-showcase-card" key={item.title}>
              <img src={item.image} alt={item.title} loading="lazy" />
              <figcaption>
                <strong>{item.title}</strong>
                <span>{item.text}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* PLANT COVERAGE */}
      <section className="nk-section nk-section--tint">
        <div className="nk-container">
          <span className="nk-eyebrow">Nuclear Plant Coverage</span>
          <h2 className="nk-section-title">Systems, structures and components.</h2>
          <div className="nk-coverage-grid">
            {coverage.map((c) => (
              <article className="nk-coverage-card" key={c.title}>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECT SUPPORT */}
      <section className="nk-section">
        <div className="nk-container">
          <span className="nk-eyebrow">Project Support</span>
          <h2 className="nk-section-title">Support from concept to qualification.</h2>
          <div className="nk-phase-grid">
            {phases.map((p) => (
              <article className="nk-phase-card" key={p.step}>
                <span className="nk-phase-step">{p.step}</span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* RESOURCES */}
      <section id="downloads" className="nk-section nk-section--tint">
        <div className="nk-container">
          <span className="nk-eyebrow">Resources</span>
          <h2 className="nk-section-title">Download nuclear resources.</h2>
          <p className="nk-lead">
            Request any of the following documents and our team will email them to you.
          </p>
          <div className="nk-download-list">
            {brochures.map((title) => (
              <button
                type="button"
                className="nk-download-btn"
                key={title}
                onClick={() => openModal(title)}
              >
                <span className="nk-download-btn-icon">
                  <Download size={18} strokeWidth={2} />
                </span>
                <span className="nk-download-btn-label">{title}</span>
                <ArrowUpRight size={18} strokeWidth={1.8} />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="nk-cta">
        <div className="nk-container">
          <span className="nk-eyebrow nk-eyebrow--light">Work With ProSIM</span>
          <h2>Need engineering capacity for a nuclear project?</h2>
          <p>
            Engage ProSIM for detailed engineering, analysis, qualification or
            multidisciplinary engineering support for nuclear power plant projects.
          </p>
          <Link href="/contact-us" className="nk-btn nk-btn--solid">
            Contact ProSIM
            <ArrowRight size={17} strokeWidth={2} />
          </Link>
        </div>
      </section>

      {/* DOWNLOAD REQUEST MODAL */}
      {activeBrochure && (
        <div
          className="nk-modal-overlay"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closeModal();
          }}
        >
          <div
            className="nk-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="nk-modal-title"
          >
            <button
              type="button"
              className="nk-modal-close"
              onClick={closeModal}
              aria-label="Close"
            >
              <X size={18} strokeWidth={2} />
            </button>

            {submitted ? (
              <div className="nk-modal-done">
                <span className="nk-modal-done-icon">
                  <CheckCircle2 size={28} strokeWidth={1.8} />
                </span>
                <h3 id="nk-modal-title">Request received</h3>
                <p>
                  Thank you. We&apos;ll email &ldquo;{activeBrochure}&rdquo; to{" "}
                  <strong>{form.email}</strong> shortly.
                </p>
                <button type="button" className="nk-btn nk-btn--solid" onClick={closeModal}>
                  Close
                </button>
              </div>
            ) : (
              <>
                <span className="nk-eyebrow">Download Request</span>
                <h3 id="nk-modal-title" className="nk-modal-heading">
                  {activeBrochure}
                </h3>
                <form className="nk-form" onSubmit={handleSubmit}>
                  <div className="nk-field">
                    <label htmlFor="nk-name">
                      Name <span>*</span>
                    </label>
                    <input
                      id="nk-name"
                      type="text"
                      autoComplete="name"
                      required
                      value={form.name}
                      onChange={updateField("name")}
                    />
                  </div>
                  <div className="nk-field">
                    <label htmlFor="nk-email">
                      Email <span>*</span>
                    </label>
                    <input
                      id="nk-email"
                      type="email"
                      autoComplete="email"
                      required
                      value={form.email}
                      onChange={updateField("email")}
                    />
                  </div>
                  <div className="nk-field">
                    <label htmlFor="nk-company">Company name</label>
                    <input
                      id="nk-company"
                      type="text"
                      autoComplete="organization"
                      value={form.company}
                      onChange={updateField("company")}
                    />
                  </div>
                  <div className="nk-field">
                    <label htmlFor="nk-phone">
                      Phone number <span>*</span>
                    </label>
                    <input
                      id="nk-phone"
                      type="tel"
                      inputMode="tel"
                      autoComplete="tel"
                      required
                      value={form.phone}
                      onChange={updateField("phone")}
                    />
                  </div>
                  <div className="nk-field nk-field--full">
                    <label htmlFor="nk-address">Address</label>
                    <input
                      id="nk-address"
                      type="text"
                      autoComplete="street-address"
                      value={form.address}
                      onChange={updateField("address")}
                    />
                  </div>
                  <button type="submit" className="nk-form-submit">
                    Submit request
                    <ArrowUpRight size={17} strokeWidth={2} />
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
