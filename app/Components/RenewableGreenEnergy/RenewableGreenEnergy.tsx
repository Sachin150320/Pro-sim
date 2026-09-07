"use client";

import React, { useState } from "react";
import Breadcrumbs from "@/app/Components/Breadcrumbs/Breadcrumbs";
import ScrollAnimation from "@/app/Components/ScrollAnimation";
import {
  Activity,
  Wind,
  Waves,
  Workflow,
  Ruler,
  Thermometer,
  Layers,
  Timer,
  Building2,
  Truck,
  Cpu,
  TrendingDown,
  Sun,
  Zap,
  BatteryCharging,
  Gauge,
  Recycle,
  ShieldCheck,
  Landmark,
  Users,
  CheckCircle2,
  X,
  ArrowUpRight,
} from "lucide-react";
import "./RenewableGreenEnergy.css";

const IMG = "/assets/images/portfolio/modern";

const heroNav = [
  { title: "Our Offerings", id: "offerings" },
  { title: "Sectors", id: "sectors" },
  { title: "Applications", id: "applications" },
  { title: "Why ProSIM", id: "why-prosim" },
];

const offerings: {
  icon: React.ComponentType<{ size?: number; strokeWidth?: number }>;
  label: string;
}[] = [
  { icon: Activity, label: "Structural & Mechanical FEA" },
  { icon: Wind, label: "Wind & Seismic Load Qualification" },
  { icon: Waves, label: "Computational Fluid Dynamics (CFD)" },
  { icon: Workflow, label: "Pipe Stress & Pipeline Engineering" },
  { icon: Ruler, label: "Detailed Engineering & 3D Modelling" },
  { icon: Thermometer, label: "Thermal & Battery Cooling Analysis" },
  { icon: Layers, label: "Fatigue, Fracture & Durability" },
  { icon: Timer, label: "Remaining Life Assessment (RLA / RLE) & FFS" },
  { icon: Building2, label: "Foundation & Support Structure Engineering" },
  { icon: Truck, label: "Transport, Lifting & Handling Analysis" },
  { icon: Cpu, label: "Digital Twin & Engineering Automation" },
  { icon: TrendingDown, label: "Design Optimisation — weight, cost, performance" },
];

const quickLinks = [
  {
    title: "Sectors we support across renewable & green energy",
    href: "#sectors",
    image: `${IMG}/2.webp`,
  },
  {
    title: "Where our engineering adds value",
    href: "#applications",
    image: `${IMG}/5.webp`,
  },
  {
    title: "Why developers and OEMs work with ProSIM",
    href: "#why-prosim",
    image: `${IMG}/8.webp`,
  },
  {
    title: "Start an engineering discussion",
    href: "#cta",
    image: `${IMG}/9.webp`,
  },
];

const sectors = [
  {
    title: "Wind Energy",
    desc: "Onshore and offshore wind — turbine components, towers and nacelle structures, transformer skids, and their transport and lifting arrangements.",
    tags: ["Towers", "Nacelle", "Transformer", "Lifting"],
  },
  {
    title: "Solar PV",
    desc: "Module mounting structures, fixed-tilt and single-axis trackers, and the wind and load qualification of large ground-mount arrays.",
    tags: ["Trackers", "Module mounting", "Wind load", "Foundations"],
  },
  {
    title: "Green Hydrogen",
    desc: "Electrolyser stacks, balance-of-plant skids, high-pressure storage, and hydrogen piping and pipeline stress analysis.",
    tags: ["Electrolysers", "H2 piping", "Storage", "Skids"],
  },
  {
    title: "Energy Storage / BESS",
    desc: "Battery pack structures, container and enclosure design, and coupled electro-thermal-flow analysis of cell cooling circuits.",
    tags: ["Pack structure", "Enclosures", "Thermal", "CHT"],
  },
  {
    title: "Bioenergy & Waste-to-Energy",
    desc: "Boilers, ducting, material handling systems and structural steel for biomass and waste-to-energy plants.",
    tags: ["Boilers", "Ducting", "Steel", "Handling"],
  },
  {
    title: "Hydro & Pumped Storage",
    desc: "Penstocks, gates, powerhouse structures, and the pipe stress and transient analysis of water conductor systems.",
    tags: ["Penstocks", "Gates", "Transients", "Structures"],
  },
];

const applications: {
  icon: React.ComponentType<{ size?: number; strokeWidth?: number }>;
  title: string;
  desc: string;
}[] = [
  {
    icon: Wind,
    title: "Turbine & Tower Structures",
    desc: "Strength, stiffness and fatigue of towers, frames and rotating-equipment support structures.",
  },
  {
    icon: Sun,
    title: "Module Mounting & Trackers",
    desc: "Wind, snow and seismic qualification of tracker torque tubes, purlins and pile foundations.",
  },
  {
    icon: Zap,
    title: "Electrolyser & Balance-of-Plant",
    desc: "Stack framing, skid structures and piping for green-hydrogen production units.",
  },
  {
    icon: BatteryCharging,
    title: "Battery Pack & BESS Thermal",
    desc: "Pack and enclosure structures with electro-thermal-flow cooling simulation.",
  },
  {
    icon: Gauge,
    title: "Transformer & Switchgear Skids",
    desc: "Transport, lifting, tie-down and seismic evaluation of electrical equipment packages.",
  },
  {
    icon: Building2,
    title: "Foundations & Support Steel",
    desc: "Design and check of foundations, pedestals and fabricated support steelwork.",
  },
  {
    icon: Workflow,
    title: "Pipelines & Pipe Stress",
    desc: "Flexibility, stress and code qualification for hydrogen, water and process piping.",
  },
  {
    icon: Recycle,
    title: "Operating Asset Life Extension",
    desc: "RLA / RLE and Fitness-for-Service assessments to keep ageing assets running safely.",
  },
];

const whyProsim: {
  id: string;
  title: string;
  icon: React.ComponentType<{ size?: number; strokeWidth?: number }>;
  points: string[];
}[] = [
  {
    id: "expertise",
    title: "Cross-Domain Simulation Expertise",
    icon: ShieldCheck,
    points: [
      "FEA, CFD, pipe stress and coupled multi-physics under one roof, so a design question is answered end to end rather than handed between vendors.",
      "In-house methods, macros and SOPs built from years of energy-sector projects keep quality consistent and turnaround short.",
    ],
  },
  {
    id: "codes",
    title: "Codes & Qualification Know-How",
    icon: Landmark,
    points: [
      "Working knowledge of IEC, ASME, Eurocode, IS, API and DNV requirements relevant to wind, solar, hydrogen and storage assets.",
      "Wind and seismic load qualification with documentation that regulators, certifiers and lenders' engineers accept.",
    ],
  },
  {
    id: "lifecycle",
    title: "From Design Support to Life Extension",
    icon: Recycle,
    points: [
      "Engage at concept, detailed design, or on operating assets — the same team follows the equipment through its life.",
      "Remaining Life Assessment (RLA / RLE) and Fitness-for-Service to justify safe continued operation, plus independent third-party design review.",
    ],
  },
  {
    id: "engagement",
    title: "Flexible Engagement Models",
    icon: Users,
    points: [
      "Defined analysis packages, design verification studies, optimisation exercises, or extended offshore engineering teams.",
      "Scales up and down with the project so engineering capacity matches the workload.",
    ],
  },
];

const emptyForm = { name: "", phone: "", email: "", company: "" };

export default function RenewableGreenEnergy() {
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
              <span>Engineering for renewable</span> and green energy assets.
            </h1>
            <p>
              ProSIM supports developers, OEMs and EPC contractors across wind,
              solar, green hydrogen and energy storage — using detailed
              engineering, CAE / FEA and CFD to qualify structures, optimise
              equipment and extend the life of operating assets.
            </p>

          
          </ScrollAnimation>

          <ScrollAnimation className="sa-hero-media" delay={120}>
            <figure className="sa-hero-media-main">
              <img
                src={`${IMG}/2.webp`}
                alt="Renewable and green energy engineering"
                loading="eager"
              />
              <figcaption>Renewable Energy</figcaption>
            </figure>
            <figure className="sa-hero-media-inset">
              <img
                src={`${IMG}/7.webp`}
                alt="Simulation-driven engineering for green energy assets"
                loading="lazy"
              />
            </figure>
          </ScrollAnimation>

          
        </div>
      </section>

      {/* OFFERINGS */}
      <section className="sa-services" id="offerings">
        <div className="sa-container">
          <ScrollAnimation className="sa-intro">
            <span className="sa-label">Our Offerings</span>
            <h2>Engineering services for green energy</h2>
            <p>
              Simulation-led design, verification and assessment across the
              structures, equipment and piping that make up renewable and green
              energy plants.
            </p>
          </ScrollAnimation>

          <div className="nk-cap-grid">
            {offerings.map((item) => {
              const Icon = item.icon;
              return (
                <ScrollAnimation key={item.label}>
                  <div className="nk-cap-box">
                    <span className="nk-cap-icon">
                      <Icon size={20} strokeWidth={1.8} />
                    </span>
                    <p>{item.label}</p>
                  </div>
                </ScrollAnimation>
              );
            })}
          </div>
        </div>
      </section>

      {/* QUICK LINK CARDS */}
      <section className="nk-quick">
        <div className="sa-container">
          <div className="nk-ql-grid">
            {quickLinks.map((q, i) => (
              <ScrollAnimation key={q.title} delay={i * 90}>
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

      {/* SECTORS */}
      <section className="sa-ssc" id="sectors">
        <div className="sa-container">
          <ScrollAnimation className="sa-intro">
            <span className="sa-label">Sectors</span>
            <h2>Sectors we support</h2>
            <p className="sa-section-intro">
              The same engineering toolkit applied to the specific structures,
              equipment and loads of each renewable and green energy sector.
            </p>
          </ScrollAnimation>

          <div className="he-grid">
            {sectors.map((s, i) => (
              <ScrollAnimation key={s.title} delay={(i % 2) * 90}>
                <article className="he-card">
                  <span className="he-card-num">
                    {String(i + 1).padStart(2, "0")} / {sectors.length}
                  </span>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  <div className="he-tags">
                    {s.tags.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                </article>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* APPLICATIONS */}
      <section className="sa-ssc" id="applications">
        <div className="sa-container">
          <ScrollAnimation className="sa-intro">
            <span className="sa-label">Applications</span>
            <h2>Where our engineering adds value</h2>
            <p>
              Support across engineered products, equipment and structures where
              strength, stiffness, thermal performance or qualification matters.
            </p>
          </ScrollAnimation>

          <div className="nk-cap-grid">
            {applications.map((a) => {
              const Icon = a.icon;
              return (
                <ScrollAnimation key={a.title}>
                  <div className="nk-cap-box">
                    <span className="nk-cap-icon">
                      <Icon size={20} strokeWidth={1.8} />
                    </span>
                    <p>
                      <strong>{a.title}</strong>
                      <br />
                      {a.desc}
                    </p>
                  </div>
                </ScrollAnimation>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY PROSIM */}
      <section className="sa-services" id="why-prosim">
        <div className="sa-container">
          <ScrollAnimation className="sa-intro">
            <span className="sa-label">Why ProSIM</span>
            <h2>Why work with ProSIM?</h2>
            <p>
              A cross-domain engineering team that combines simulation depth with
              code and qualification know-how across the renewable energy
              lifecycle.
            </p>
          </ScrollAnimation>

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

      {/* ENQUIRY MODAL */}
      {modalOpen && (
        <div
          className="nk-modal-overlay"
          role="dialog"
          aria-modal="true"
          aria-label="Talk to our engineering team"
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
                  Your enquiry has been received. Our renewable energy team will
                  get back to you shortly.
                </p>
                <button type="button" className="nk-modal-submit" onClick={closeForm}>
                  Close
                </button>
              </div>
            ) : (
              <>
                <span className="sa-label">Engineering Enquiry</span>
                <h3>Talk to our engineering team</h3>
                <p className="nk-modal-sub">
                  Share your details and a short note on the project or asset —
                  we&rsquo;ll take it from there.
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
                    Submit Enquiry
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
