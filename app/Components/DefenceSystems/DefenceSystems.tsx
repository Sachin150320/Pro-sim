"use client";

import React, { useState } from "react";
import Breadcrumbs from "@/app/Components/Breadcrumbs/Breadcrumbs";
import ScrollAnimation from "@/app/Components/ScrollAnimation";
import {
  Award,
  BadgeCheck,
  Boxes,
  Ruler,
  Activity,
  Thermometer,
  GitBranch,
  Magnet,
  SearchCheck,
  Timer,
  Download,
  X,
  CheckCircle2,
} from "lucide-react";
import "./DefenceSystems.css";

const IMG = "/assets/images/industries/defence";

/* Engineering depth — how simulation supports design */
const certifications = [
  {
    icon: Ruler,
    text: "Design optimisation — reduce weight while improving performance, life and reliability.",
  },
  {
    icon: Boxes,
    text: "Model development — build simulation models around the products' actual operating physics.",
  },
  {
    icon: BadgeCheck,
    text: "Design verification — use simulation to investigate critical load, thermal, vibration and failure cases.",
  },
  {
    icon: Award,
    text: "Certification support — interface with relevant agencies as part of design and qualification activities.",
  },
];

/* Engineering process — a collaborative workflow built around the design problem */
const process = [
  "Define — translate the requirement, load case, operating envelope and design intent into an engineering problem.",
  "Model — create the appropriate geometry, material, boundary condition and system-level representation.",
  "Simulate — apply FEA, CFD, dynamics, thermal, fatigue or multiphysics analysis as appropriate.",
  "Optimise — turn analysis findings into practical design changes for performance, life, reliability or weight.",
  "Correlate — where applicable, compare with prototype or test results and close the engineering loop.",
];

/* Deep analysis capabilities for complex defence engineering */
const capabilities: {
  icon: React.ComponentType<{ size?: number; strokeWidth?: number }>;
  title: string;
  desc: string;
}[] = [
  {
    icon: Activity,
    title: "Structural & FEA",
    desc: "Stress, deformation, nonlinear behaviour, impact, crash and shock studies to identify critical load paths and design hot spots.",
  },
  {
    icon: Thermometer,
    title: "Thermal & CFD",
    desc: "Temperature fields, pressure and velocity gradients, dead zones and fluid-structure interaction for thermal and flow-critical systems.",
  },
  {
    icon: GitBranch,
    title: "Dynamics & Vibration",
    desc: "Modal, transient, multi-body and vibration-related studies, including flexible-body models linked with system behaviour.",
  },
  {
    icon: Timer,
    title: "Fatigue & Fracture",
    desc: "Assessment of fatigue hot spots, crack-sensitive regions, life prediction and the influence of operating and material variability.",
  },
  {
    icon: Magnet,
    title: "EMI / EMC & Multiphysics",
    desc: "Coupled electromagnetic, thermal and structural analysis for generators, motors, sensors, antennas, PCBs and related equipment.",
  },
  {
    icon: SearchCheck,
    title: "Failure & Life Assessment",
    desc: "Failure analysis and remaining-life assessment to support repair, reuse, life-extension and engineering disposition decisions.",
  },
];

/* Selected defence experience — problems engineered across the lifecycle */
const projects = [
  "Aircraft landing gear & flight-control studies",
  "Submarine systems & rotating equipment",
  "Turbine and rotor engineering",
  "Optimisation of critical defence hardware",
  "EMI / EMC and thermal design",
  "Life, reliability and failure-focused engineering",
];

/* Systems we support — across air, land, naval and defence electronics */
const domains: { title: string; image: string; desc: string }[] = [
  {
    title: "Aerospace & Aero Engines",
    image: `${IMG}/6.jpg`,
    desc: "Airframe components, landing systems, aero-engine and flight-control studies.",
  },
  {
    title: "Naval Systems",
    image: `${IMG}/5.jpg`,
    desc: "Submarine equipment, rotating systems, HVAC dynamics and related engineering analysis.",
  },
  {
    title: "Land-Based Systems",
    image: `${IMG}/7.jpg`,
    desc: "Missile launchers, gun systems, battle-tank-related equipment and drives.",
  },
  {
    title: "UAV & Defence Electronics",
    image: `${IMG}/4.jpg`,
    desc: "UAV structure, air-intake optimisation, antennas, sensors, PCBs and electronics thermal design.",
  },
];

const domainIntro = [
  "ProSIM's defence work uses computer models of products, systems and processes for virtual product development, virtual prototyping and virtual testing.",
  "Where required, analytical models can be correlated with physical prototypes and tests against applicable military or customer specifications.",
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

    const body = [
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Email: ${form.email}`,
      `Company: ${form.company}`,
    ].join("\n");

    window.location.href = `mailto:enquiry@pro-sim.com?subject=${encodeURIComponent(
      "Defence Engineering Enquiry"
    )}&body=${encodeURIComponent(body)}`;

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
              Engineering confidence into{" "}
              <span>mission-critical systems.</span>
            </h1>

            <p>
              ProSIM supports defence organisations and their vendors with
              advanced engineering analysis, virtual prototyping, optimisation
              and R&amp;D — connecting physics-based simulation with practical
              design decisions.
            </p>

            <button type="button" className="dfn-hero-btn" onClick={openForm}>
              <Download size={16} strokeWidth={1.8} />
              Discuss a Defence Project
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
      </section>

      {/* WHAT WE DO — DEEP ANALYSIS CAPABILITIES */}
      <section className="sa-services" id="capabilities">
        <div className="sa-container">
          <ScrollAnimation className="sa-intro">
            <span className="sa-label">What We Do</span>
            <h2>Deep analysis capabilities for complex defence engineering.</h2>
            <p>
              Our approach combines design understanding, material behaviour,
              manufacturing considerations and system performance. The objective
              is not simply to run an analysis, but to help engineers make better
              design decisions earlier in the lifecycle.
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

      {/* ENGINEERING DEPTH */}
      <section className="sa-ssc" id="certifications">
        <div className="sa-container">
          <ScrollAnimation>
            <span className="sa-label">Engineering Depth</span>
            <h2>Simulation that supports design — not analysis in isolation.</h2>
            <p className="sa-section-intro">
              ProSIM&rsquo;s defence work uses computer models of products,
              systems and processes for virtual product development, virtual
              prototyping and virtual testing. Where required, analytical models
              can be correlated with physical prototypes and tests against
              applicable military or customer specifications.
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

      {/* SYSTEMS WE SUPPORT */}
      <section className="sa-ssc" id="domains">
        <div className="sa-container">
          <ScrollAnimation>
            <span className="sa-label">Systems We Support</span>
            <h2>Across air, land, naval and defence electronics.</h2>
            <p className="sa-section-intro">
              Our existing defence portfolio spans mechanical systems,
              propulsion-related equipment, naval systems, UAVs and defence
              electronics.
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

      {/* ENGINEERING PROCESS */}
      <section className="sa-services" id="process">
        <div className="sa-container">
          <ScrollAnimation className="sa-intro">
            <span className="sa-label">Engineering Process</span>
            <h2>A collaborative workflow built around the design problem.</h2>
            <p>
              The strongest simulation results come from understanding how the
              component is designed, manufactured, operated and tested. Our
              engagement model can be aligned to a specific engineering mission
              or a broader R&amp;D programme.
            </p>
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

      {/* SELECTED DEFENCE EXPERIENCE */}
      <section className="sa-ssc" id="projects">
        <div className="sa-container">
          <ScrollAnimation>
            <span className="sa-label">Selected Defence Experience</span>
            <h2>Problems we&rsquo;ve engineered across the defence lifecycle.</h2>
            <p className="sa-section-intro">
              Examples from ProSIM&rsquo;s existing defence work demonstrate the
              breadth of its analysis and R&amp;D capability.
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

          <p className="dfn-more">
            CAE-driven R&amp;D · Structural, dynamic &amp; nonlinear FEA · Flow,
            thermal &amp; fluid-interaction CFD · Collaborative engineering from
            concept onward
          </p>
        </div>
      </section>

      {/* CTA */}
      {/* <section className="dfn-cta">
        <div className="sa-container">
          <ScrollAnimation className="dfn-cta-inner">
            <div>
              <h2>Bring us the difficult engineering problem.</h2>
              <p>
                Share the system, component, operating condition or qualification
                challenge. We can discuss the appropriate analysis route,
                modelling approach and engineering deliverables.
              </p>
            </div>
            <button type="button" className="dfn-cta-btn" onClick={openForm}>
              <Download size={17} strokeWidth={1.8} />
              Start a Defence Discussion
            </button>
          </ScrollAnimation>
        </div>
      </section> */}

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

            <span className="sa-label">Systems We Support</span>
            <h3>{domains[activeDomain].title}</h3>

            <div className="dfn-domain-shots">
              {domainGallery.map((src) => (
                <img key={src} src={src} alt={domains[activeDomain].title} loading="lazy" />
              ))}
            </div>

            <p className="dfn-domain-p">{domains[activeDomain].desc}</p>
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
             Send Enquiry
            </button>
          </div>
        </div>
      )}

      {/* ENQUIRY MODAL */}
      {modalOpen && (
        <div
          className="nk-modal-overlay"
          role="dialog"
          aria-modal="true"
          aria-label="Start a defence engineering discussion"
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
                  Your enquiry has been received. Our defence engineering team
                  will get back to you shortly — you can also reach us at
                  enquiry@pro-sim.com.
                </p>
                <button type="button" className="nk-modal-submit" onClick={closeForm}>
                  Close
                </button>
              </div>
            ) : (
              <>
                <span className="sa-label">Defence Engineering Enquiry</span>
                <h3>Bring us the difficult engineering problem</h3>
                <p className="nk-modal-sub">
                  Share your details and a short note on the system, component or
                  qualification challenge — we&rsquo;ll take it from there.
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
