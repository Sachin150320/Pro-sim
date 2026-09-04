"use client";

import React, { useState } from "react";
import Breadcrumbs from "@/app/Components/Breadcrumbs/Breadcrumbs";
import {
  Boxes,
  Users,
  ShieldCheck,
  Building2,
  Landmark,
  Factory,
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
  Magnet,
  Layers,
  Waves,
  Gauge,
  Timer,
  SearchCheck,
  Recycle,
} from "lucide-react";
import ScrollAnimation from "@/app/Components/ScrollAnimation";
import "./NuclearPower.css";

const IMG = "/assets/images/industries/nuclear";

const quickLinks = [
  {
    title: "ProSIM Offerings to the Nuclear Power Sector",
    href: "#offerings",
    image: `${IMG}/nuclear-1.jpg`,
  },
  {
    title: "Who Are Potential Customers?",
    href: "#customers",
    image: `${IMG}/pro-02.jpg`,
  },
  {
    title: "Why Customers Choose to Work with ProSIM?",
    href: "#why-prosim",
    image: `${IMG}/pro-03.jpg`,
  },
  {
    title: "ProSIM Experience — Nuclear Power Plant (NPP) Packages",
    href: "#packages",
    image: `${IMG}/nuclear-2.jpg`,
  },
];

const offerings: {
  icon: React.ComponentType<{ size?: number; strokeWidth?: number }>;
  label: string;
}[] = [
  { icon: FileText, label: "Design Calculations and documentation" },
  { icon: Box, label: "2D / 3D CAD modeling" },
  { icon: Workflow, label: "Methodology Development" },
  { icon: MonitorCheck, label: "Design Verification By Simulation" },
  { icon: Activity, label: "FEM Analysis (stress, vibration)" },
  { icon: Thermometer, label: "Thermal Analysis" },
  {
    icon: Wind,
    label: "CFD Analysis (Conjugate Heat Transfer, Fluid Structure Interaction)",
  },
  { icon: Cog, label: "Kinematics And Dynamics" },
  { icon: Magnet, label: "Electro Magnetic Analysis" },
  { icon: Layers, label: "Materials And Damage (fatigue, fracture, Creep Studies)" },
  {
    icon: Waves,
    label:
      "Seismic Evaluation and Re-Evaluation (ASME B&PV code, RCC, PNAE, API, NEMA, IEEE, etc)",
  },
  { icon: Gauge, label: "Seismic Margin Assessment (SMA) and HCLPF calculation" },
  { icon: Timer, label: "Remaining Life Assessment and Extension (RLA / RLE)" },
  { icon: ShieldCheck, label: "Fitness for Service (FFS)" },
  { icon: Building2, label: "Structural Integrity Assessment" },
  { icon: SearchCheck, label: "Failure Analysis / Root Cause Analysis" },
  { icon: FlaskConical, label: "Design of Special Purpose experimental test apparatus" },
  { icon: Recycle, label: "Nuclear Waste Re-cycling and Disposal" },
];

const packageGroups = [
  {
    title: "Disciplines Covered",
    desc: "The multi-discipline scope ProSIM covers across a nuclear power plant.",
    items: [
      "Mechanical systems and equipment",
      "Piping",
      "Electrical",
      "Control and instrumentation",
      "Structures (RCC and steel)",
    ],
  },
  {
    title: "Packages ProSIM Has Worked On",
    desc: "Full NPP packages delivered across primary systems and balance of plant.",
    items: [
      "Primary Piping Package (PPP)",
      "Nuclear Ventilation",
      "Balance of Turbine Island Package (BOTIP)",
      "Plant Water System",
      "Common Services",
      "Pumps",
      "Upgrading Waste Management",
      "HVAC Package",
      "Electrical Package",
      "C&I Package",
      "… and many more",
    ],
  },
  {
    title: "Piping & Structures",
    desc: "Piping systems, supports, foundations and civil / steel structures.",
    items: [
      "Piping Systems",
      "Instruments — Thermowells, Gauges, Valves, Pressure Switches",
      "Piping Supports (Hangers, tie rods, Fabricated supports, etc.)",
      "Structures (Steel & RCC)",
      "Foundation",
      "Pumps",
      "Chimneys",
      "Buildings",
    ],
  },
  {
    title: "Mechanical Equipment",
    desc: "Static and rotating equipment across the plant.",
    items: [
      "Pressure Vessels / Tanks",
      "Heat Exchangers",
      "Custom Design Equipment",
      "Pumps / Blowers / Compressors",
      "Valves",
      "Fire Fighting Systems",
      "Filters & Strainers",
      "Dampers",
      "Support Systems for all Equipment",
    ],
  },
  {
    title: "Special Independent Packages",
    desc: "Reactor island and turbine island independent packages.",
    items: [
      "Steam Generator",
      "Pressurizers",
      "Reactor Headers",
      "Heat Exchangers",
      "Coolant Channels",
      "Reactor Equipment",
      "Instrumentation",
      "Turbine Package",
      "Field Instrumentation",
    ],
  },
  {
    title: "Electrical, C&I",
    desc: "Power distribution, instrumentation and control scope.",
    items: [
      "Complete DG set with alternator, Transformers, Battery Chargers and Inverters, Motor Control Centres, Low & Medium Voltage Switchgear, Distribution Modules, Motors, Generators",
      "Instrumentation and Control Panels, Instruments on racks, bus bar ducts, Cable trays, Battery Stands, Relay Panel Structures, etc.",
    ],
  },
];

const customers = [
  { icon: Building2, title: "Nuclear Power Plant Operators" },
  { icon: Factory, title: "EPC Contractors" },
  { icon: Wrench, title: "System Integrators" },
  { icon: Boxes, title: "Tier-1 / Tier-2 Vendors; Component Suppliers" },
  { icon: FlaskConical, title: "Nuclear R&D Establishments" },
  { icon: Landmark, title: "Nuclear Regulatory Bodies" },
];

const whyProsim: {
  id: string;
  title: string;
  icon: React.ComponentType<{ size?: number; strokeWidth?: number }>;
  points: string[];
}[] = [
  {
    id: "knowledge",
    title: "Knowledge, Competence & Insights",
    icon: ShieldCheck,
    points: [
      "The ProSIM team has knowledge and competence in engineering design, analysis and structural integrity assessment that are very critical to safe and reliable design of nuclear systems.",
      "We bring special insights to customise / localise products to specific nuclear applications.",
    ],
  },
  {
    id: "exposure",
    title: "Deep Exposure With Nuclear Entities",
    icon: Landmark,
    points: [
      "ProSIM has worked with Department of Atomic Energy entities such as NPCIL, BARC, IGCAR, BHAVINI, ITER India, etc., and their EPC contractors such as BGR, Dodsal, GE, L&T, Punj Lloyd, etc.; system integrators such as Kirloskar, Core Energy and dozens of tier-2 / tier-3 vendors.",
      "ProSIM has worked on projects for ITER I/O and international companies such as AMEC FW, Assystem, PowerSys, JSOL, Zentech, etc.",
      "ProSIM has interfaced with the regulatory bodies (such as AERB).",
      "ProSIM has been a part of the World Nuclear Association (WNA) for rationalisation of codes and standards, and is connected with the international nuclear community.",
    ],
  },
  {
    id: "tools",
    title: "Expertise in Design and Analysis Tools",
    icon: Cpu,
    points: [
      "The ProSIM team has expertise in using software such as CATIA, Solidworks, ANSYS, ABAQUS, Caesar, CAEPipe, Pipestress, NASTRAN, CFX, Fluent, HYPERWORKS, JMAG, STAAD, SAP2000, etc.",
      "Expertise in customisation, development of macros and scripting.",
    ],
  },
  {
    id: "collaboration",
    title: "Collaborative Spirit",
    icon: Users,
    points: [
      "Seamless and smooth collaboration with vendors, EPC contractors, operator (NPCIL) and regulatory bodies (AERB).",
      "Track record of delivering projects on time, with high quality, keeping the concerns of all stakeholders.",
      "Interactions with international code committees (ASME, AFCEN-RCC, PNAE, WNA, etc.).",
      "ProSIM has delivered projects with quality and on time, keeping the concerns of all parties involved.",
    ],
  },
];

const heroNav = [
  { title: "Our Offerings", id: "offerings" },
  { title: "SSCs & Packages", id: "packages" },
  { title: "Potential Customers", id: "customers" },
  { title: "Why Work with ProSIM", id: "why-prosim" },
  { title: "Downloads", id: "downloads" },
];

const downloads = [
  "Nuclear Brochure",
  "Abstract — Engineered Buffer Clay Modeling — Nuclear Waste Disposal",
  "ProSIM Nuclear Offerings — Engineering Design & Seismic Qualification",
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
              <span>ProSIM Offerings</span> to the Nuclear Power Sector.
            </h1>

            <p>
              Providing collaborative engineering, design, R&amp;D and seismic
              evaluation. ProSIM is a collaborative engineering and R&amp;D
              services company that has been working with all the nuclear
              entities in India and abroad, providing services for safe and
              reliable operation of nuclear power plant (NPP) related systems,
              structures and components (SSCs).
            </p>

            {/* <p>
              We are specialists in seismic evaluation by analysis and qualify
              nuclear systems as per relevant geography-specific codes and
              standards.
            </p> */}
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

      {/* OFFERINGS */}
      <section className="sa-services" id="offerings">
        <div className="sa-container">
          <section className="sa-intro">
            <span className="sa-label">OUR OFFERINGS</span>

            <h2>Our Offerings to Nuclear</h2>

            <p>
              Collaborative engineering, design, R&amp;D and seismic evaluation
              across the full range of nuclear systems, structures and
              components.
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

      {/* SSCs & PACKAGES */}
      <section className="sa-ssc" id="packages">
        <div className="sa-container">
          <span className="sa-label">SSCs &amp; PACKAGES</span>

          <h2>Experience Across NPP Packages &amp; SSCs</h2>

          <p className="sa-section-intro">
            ProSIM experience in various packages of nuclear power plants (NPP) —
            covering several systems, structures and components (SSCs). ProSIM has
            worked on multiple packages of a nuclear power plant covering a
            variety of disciplines, packages, piping and structures, mechanical
            equipment, special independent packages and electrical, C&amp;I.
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

      {/* CUSTOMERS */}
      <section className="sa-clients" id="customers">
        <div className="sa-container">
          <div className="sa-ind-head">
            <span className="sa-label">POTENTIAL CUSTOMERS</span>

            <h2>Who Are Potential Customers?</h2>

            <p>
              Practically all the stakeholders connected with nuclear energy are
              connected with ProSIM.
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

      {/* WHY WORK WITH PROSIM */}
      <section className="sa-services" id="why-prosim">
        <div className="sa-container">
          <section className="sa-intro">
            <span className="sa-label">WHY PROSIM</span>

            <h2>Why Work with ProSIM?</h2>

            <p>
              ProSIM has been working with operators, nuclear engineering / R&amp;D
              companies, regulatory bodies, EPC contractors and system integrators,
              combining an independent mindset with deep technical strength.
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

      {/* DOWNLOADS */}
      <section className="sa-ssc" id="downloads">
        <div className="sa-container">
          <span className="sa-label">RESOURCES</span>

          <h2>Downloads</h2>

          <p className="sa-section-intro">
            Reference material on ProSIM&rsquo;s nuclear offerings, engineering
            design and seismic qualification.
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
