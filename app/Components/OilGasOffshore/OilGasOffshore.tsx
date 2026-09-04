"use client";

import React, { useState } from "react";
import Breadcrumbs from "@/app/Components/Breadcrumbs/Breadcrumbs";
import ScrollAnimation from "@/app/Components/ScrollAnimation";
import {
  Compass,
  PencilRuler,
  GitBranch,
  Cpu,
  BookCheck,
  Layers,
  ShieldCheck,
  Building2,
  Scale,
  Factory,
  Wrench,
  Users,
  SearchCheck,
  Package,
  Gauge,
  Download,
  X,
  CheckCircle2,
} from "lucide-react";
import "./OilGasOffshore.css";

const IMG = "/assets/images/industries/oil-gas";

const offerCategories: {
  icon: React.ComponentType<{ size?: number; strokeWidth?: number }>;
  title: string;
  desc: string;
  items: string[];
}[] = [
  {
    icon: Compass,
    title: "Engineering Consultancy",
    desc: "Independent engineering advice across the oil & gas and offshore lifecycle.",
    items: ["Engineering consultancy and technical direction"],
  },
  {
    icon: PencilRuler,
    title: "Design Engineering",
    desc: "First-principles design backed by intelligent CAD.",
    items: [
      "Design calculations (hand calculations, first principles)",
      "2D / 3D CAD modelling",
    ],
  },
  {
    icon: GitBranch,
    title: "Piping Engineering",
    desc: "Detailed piping design, supports and flexibility.",
    items: [
      "Detailed engineering",
      "Valves and specialities",
      "Hanger / support engineering",
      "Pipe stress (flexibility) analysis",
    ],
  },
  {
    icon: Cpu,
    title: "Computer-Aided Engineering & Simulation-Based Design",
    desc: "FEA and CFD to validate and optimize designs.",
    items: [
      "Finite Element Analysis (FEA / FEM)",
      "Stress analysis, non-linear FEA, dynamic analysis, modal analysis",
      "Computational Fluid Dynamics (CFD)",
      "Conjugate heat transfer",
      "Fluid-Structure Interaction (FSI)",
    ],
  },
  {
    icon: BookCheck,
    title: "Codes & Standards",
    desc: "Qualification, assessment and documentation to global codes.",
    items: [
      "ASME B&PV, API, BS, EN, DNV, PD5500, etc.",
      "Qualification / assessment and documentation",
    ],
  },
  {
    icon: Layers,
    title: "Materials & Damage",
    desc: "Degradation mechanisms and root-cause diagnostics.",
    items: [
      "Fatigue, creep, fracture (crack growth)",
      "Failure analysis",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Structural Integrity Assessment",
    desc: "Fitness-for-service and life-extension for ageing assets.",
    items: [
      "Fitness-for-Service (FFS calculations, including Level 3 and Level 4)",
      "Remaining Life Assessment and Extension (RLA / RLE)",
      "Seismic analysis and evaluation",
    ],
  },
  {
    icon: Building2,
    title: "Structural Design & Structural Analysis",
    desc: "Steel and RCC structures designed and analysed.",
    items: ["Steel structures", "RCC structures", "Seismic analysis and evaluation"],
  },
  {
    icon: Scale,
    title: "Expert Advisory Services",
    desc: "Forensic and independent engineering for disputes.",
    items: [
      "Forensic engineering",
      "Engineering support for legal arbitrations",
      "Third-party engineering advisory",
    ],
  },
];

const benefits = [
  "Derive high value and pass it on to their customers.",
  "Access an off-shored / outsourced engineering service from a pool of engineers with deep expertise and competence.",
  "High-level skills in design and analysis tools and software.",
  "In-house developed IP — SOPs, macros and subroutines.",
  "Well-oiled project management and QMS procedures.",
  "Proven track record of timely project delivery to customers across the world, with a strong record of customer satisfaction over quality.",
];

const customers = [
  {
    icon: Factory,
    title:
      "Owners & Operators — Shell, Hindustan Petroleum, Bharat Petroleum, Essar, Reliance, Cairn, Dragon Oil, etc.",
  },
  {
    icon: Wrench,
    title: "EPC Contractors — Wood (formerly AMEC), L&T, PetroGas, Punj Lloyd, etc.",
  },
  { icon: Users, title: "Engineering Consultants" },
  { icon: ShieldCheck, title: "Asset Integrity Management Companies" },
  { icon: SearchCheck, title: "Inspection Companies" },
  {
    icon: Package,
    title: "System & Equipment Providers to the Oil & Gas and Offshore sector",
  },
];

const experience = [
  {
    icon: Gauge,
    title: "Project Types",
    desc: "ProSIM has worked on projects related to:",
    items: ["Upstream", "Downstream", "Offshore structures", "Offshore pipelines"],
  },
  {
    icon: Package,
    title: "Equipment & Systems",
    desc: "ProSIM experience includes the following equipment and systems:",
    items: [
      "Piping",
      "Vessels and tanks",
      "Heat exchangers and reactors",
      "Rotating equipment (motors, pumps, compressors, blowers, etc.)",
      "Valves",
      "Welded structures",
      "Joints and seals",
    ],
  },
];

const heroNav = [
  { title: "Our Offerings", id: "offerings" },
  { title: "Downloads", id: "downloads" },
  { title: "Why ProSIM", id: "benefits" },
  { title: "Customers", id: "customers" },
  { title: "Experience", id: "experience" },
];

const downloads = [
  "ProSIM O&G Brochure",
  "Oil & Gas — Capabilities PDF",
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
              <span>ProSIM Offerings</span> to the Oil &amp; Gas and Offshore
              Sector.
            </h1>

            <p>
              ProSIM is a collaborative engineering and R&amp;D company. Using our
              expertise in simulation and design tools, ProSIM has been
              delivering high value to stakeholders in the oil and gas sector for
              decades.
            </p>
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

      {/* OFFERINGS */}
      <section className="sa-services" id="offerings">
        <div className="sa-container">
          <ScrollAnimation className="sa-intro">
            <span className="sa-label">Our Offerings</span>
            <h2>Engineering, Analysis &amp; Advisory for Oil &amp; Gas</h2>
            <p>
              From design engineering and piping to simulation-based design,
              structural integrity and expert advisory — a full-spectrum
              engineering and R&amp;D partner for the sector.
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
                  <ul>
                    {c.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </ScrollAnimation>
        </div>
      </section>

      {/* DOWNLOADS */}
      <section className="sa-ssc" id="downloads">
        <div className="sa-container">
          <ScrollAnimation>
            <span className="sa-label">Resources</span>
            <h2>Downloads</h2>
            <p className="sa-section-intro">
              Reference material on ProSIM&rsquo;s oil &amp; gas and offshore
              engineering capabilities.
            </p>

            <div className="nk-downloads">
              {downloads.map((d) => (
                <button
                  type="button"
                  className="nk-download"
                  key={d}
                  onClick={() => openForm(d)}
                >
                  <Download size={17} strokeWidth={1.8} />
                  {d}
                </button>
              ))}
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="sa-services" id="benefits">
        <div className="sa-container">
          <ScrollAnimation className="sa-intro">
            <span className="sa-label">Why ProSIM</span>
            <h2>Benefits of Working with ProSIM</h2>
            <p>Why customers choose to work with ProSIM.</p>
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

      {/* CUSTOMERS */}
      <section className="sa-clients" id="customers">
        <div className="sa-container">
          <ScrollAnimation className="sa-ind-head">
            <span className="sa-label">Potential Customers</span>
            <h2>Who Are Potential Customers of ProSIM?</h2>
            <p>
              Practically all companies associated with the Oil &amp; Gas and
              Offshore sector are potential customers of ProSIM. Wherever there is
              engineering, ProSIM has contributed.
            </p>
          </ScrollAnimation>

          <div className="sa-ind-layout">
            <div className="sa-ind-main">
              <ScrollAnimation className="sa-ind-grid">
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
              </ScrollAnimation>
            </div>

            <div className="sa-ind-media">
              <ScrollAnimation className="sa-ind-photo" delay={100}>
                <img src={`${IMG}/1.jpg`} alt="Oil & gas infrastructure" loading="lazy" />
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="sa-ssc" id="experience">
        <div className="sa-container">
          <ScrollAnimation>
            <span className="sa-label">Experience</span>
            <h2>ProSIM Experience in the Oil &amp; Gas Sector</h2>
            <p className="sa-section-intro">
              Projects, equipment and systems ProSIM has delivered across
              upstream, downstream and offshore.
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
                  <ul>
                    {e.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </ScrollAnimation>
        </div>
      </section>

      {/* DOWNLOAD REQUEST MODAL */}
      {activeDownload && (
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
                  Your request for <strong>{activeDownload}</strong> has been
                  received. Our team will share the document with you shortly.
                </p>
                <button type="button" className="nk-modal-submit" onClick={closeForm}>
                  Close
                </button>
              </div>
            ) : (
              <>
                <span className="sa-label">Request Download</span>
                <h3>{activeDownload}</h3>
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
