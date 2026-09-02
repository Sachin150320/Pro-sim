"use client";

import React, { useState } from "react";
import Breadcrumbs from "@/app/Components/Breadcrumbs/Breadcrumbs";
import {
  ArrowUpRight,
  Activity,
  ShieldAlert,
  Layers,
  Cpu,
  Zap,
  Plus,
  Minus,
} from "lucide-react";
import "./FiniteElementAnalysis.css";

const services = [
  {
    id: "linear-nonlinear",
    title: "Linear & Non-Linear Stress Analysis",
    description:
      "We provide rigorous structural evaluations under static and dynamic loading conditions to predict material yielding, deformation, and ultimate failure thresholds.",
    points: [
      "Static & Dynamic Loading: Comprehensive linear elastic assessments alongside complex non-linear material, geometric, and boundary condition evaluations.",
      "Plasticity & Creep Modeling: Advanced material modeling to evaluate permanent deformation, cyclic hardening, and high-temperature material degradation.",
      "Contact & Boundary Nonlinearities: Accurate simulation of surface-to-surface interactions, friction, bolt pre-tensioning, and large displacements.",
      "Failure Prediction: Utilization of advanced yield criteria (Von Mises, Tresca, Mohr-Coulomb) to identify structural safety margins.",
      "Design Optimization: Weight and thickness reduction studies without compromising structural integrity or regulatory compliance.",
    ],
  },
  {
    id: "fatigue-fracture",
    title: "Fatigue & Fracture Mechanics Analysis",
    description:
      "We evaluate structural durability under cyclic loading environments to prevent premature cracking, component degradation, and catastrophic fatigue failure.",
    points: [
      "High-Cycle & Low-Cycle Fatigue (HCF/LCF): S-N and \\varepsilon-N curve implementations to determine operational lifespans under fluctuating thermal and mechanical loads.",
      "Crack Propagation Studies: Linear Elastic Fracture Mechanics (LEFM) and Elastic-Plastic Fracture Mechanics (EPFM) evaluations using Stress Intensity Factors (K) and J-Integrals.",
      "Vibration Fatigue: Dynamic stress cycle assessment resulting from flow-induced turbulence, acoustic resonance, and machinery operational harmonics.",
      "Welded Joint Assessment: Hot spot stress and effective notch stress methods to evaluate fatigue strength in complex welded structures.",
    ],
  },
  {
    id: "thermal-coupled",
    title: "Thermal & Coupled-Field Analysis",
    description:
      "We simulate steady-state and transient heat transfer phenomena to evaluate thermal stresses, expansions, and fluid-structure interactions.",
    points: [
      "Conduction, Convection & Radiation: Detailed thermal distribution mapping across multi-component industrial assemblies.",
      "Thermo-Mechanical Fatigue (TMF): Coupled thermal-stress simulations to analyze cyclic thermal shock and localized temperature gradients.",
      "Phase Change & Solidification: Specialized modeling for casting, welding, and high-temperature processing units.",
      "Fluid-Structure Interaction (FSI): Two-way coupling to analyze thermal-hydraulic forces acting on structural boundaries.",
    ],
  },
  {
    id: "explicit-dynamics",
    title: "Explicit Dynamics & Impact Simulation",
    description:
      "We capture high-strain-rate phenomena, shock physics, and sudden transient events where inertial forces dominate structural response.",
    points: [
      "Drop Test & Impact Simulations: Regulatory compliance testing for shipping casks, electronics, and heavy containment units.",
      "Blast & Explosion Modeling: High-explosive detonation modeling, air-blast propagation, and blast-resistant structural design.",
      "Collision & Crashworthiness: Automotive, aerospace, and heavy machinery collision safety verification.",
      "High-Velocity Penetration: Ballistic impact, fragmentation, and material tearing analyses.",
    ],
  },
  {
    id: "vibration-dynamics",
    title: "Vibration, Modal & Seismic Analysis",
    description:
      "Our dynamic simulation solutions characterize natural frequencies, resonance risks, and seismic vulnerability for mission-critical infrastructure.",
    points: [
      "Modal & Harmonic Analysis: Identification of natural frequencies and mode shapes to avoid destructive resonance conditions.",
      "Response Spectrum & Time-History: Seismic qualification for nuclear, oil & gas, and heavy industrial skids under earthquake loads.",
      "Rotordynamics: Critical speed maps, Campbell diagrams, and unbalance response for rotating machinery.",
      "Random Vibration: Power Spectral Density (PSD) analysis for transport and aerospace component certification.",
    ],
  },
];

const industries = [
  "Oil & Gas (Upstream, Midstream, and Downstream)",
  "Aerospace & Defense Systems",
  "Power Generation & Nuclear Infrastructure",
  "Heavy Machinery & Industrial Equipment",
  "Automotive & Transportation Engineering",
];

const faqs = [
  {
    question:
      "What FEA services does ProSIM offer for industrial product development?",
    answer:
      "ProSIM delivers advanced Finite Element Analysis (FEA) services covering Linear & Non-Linear Stress Analysis, Fatigue & Fracture Mechanics, Thermal & Coupled-Field Simulations, Explicit Dynamics, and Vibration & Seismic Analysis.",
  },
  {
    question:
      "How does FEA consulting help reduce physical prototype testing costs?",
    answer:
      "By simulating real-world operating conditions digitally, FEA identifies structural flaws, stress concentrations, and failure points early in the design phase, drastically reducing the need for costly physical prototypes and iterative testing cycles.",
  },
  {
    question:
      "Which international standards and codes do your FEA reports comply with?",
    answer:
      "Our simulation deliverables and methodologies comply with major global standards including ASME Section VIII (Div 2 & 3), API 579 / ASME FFS-1, EN 13445, DNV-GL, ISO, and aerospace standards like MIL-STD.",
  },
  {
    question:
      "Can you perform non-linear analysis for complex material behaviors?",
    answer:
      "Yes. We specialize in advanced non-linear simulations involving elastoplasticity, hyperelasticity (elastomers), foam crush behavior, temperature-dependent material properties, and large geometric deformations.",
  },
  {
    question:
      "What software tools do your simulation engineers utilize?",
    answer:
      "Our team leverages industry-standard high-end solvers such as ANSYS Mechanical, ABAQUS, LS-DYNA, and Nastran, backed by advanced CAD-cleanup and pre/post-processing pipelines.",
  },
  {
    question:
      "Do you provide fitness-for-service (FFS) and remaining life assessment for existing assets?",
    answer:
      "Yes. We perform ASME API 579 Fitness-For-Service assessments, combining laser scans or inspection data with non-linear FEA to evaluate structural flaws, corrosion, and remaining operational lifespan.",
  },
  {
    question:
      "How do you ensure the accuracy and reliability of your FEA models?",
    answer:
      "We implement rigorous mesh convergence studies, element quality checks, boundary condition validation, and back-calculation against analytical formulas or physical test benchmarks where available.",
  },
  {
    question:
      "What industries benefit most from your structural simulation consultancy?",
    answer:
      "Our simulation consultancy serves high-reliability sectors including oil and gas, aerospace, defense, nuclear power generation, heavy manufacturing, and automotive industries.",
  },
  {
    question:
      "Which sectors and markets do your engineering consultants serve?",
    list: industries,
  },
  {
    question:
      "Why should global engineering firms choose ProSIM for simulation outsourcing?",
    answer:
      "ProSIM functions as an extension of your R&D and engineering teams, offering deep domain expertise, rapid turnaround times, advanced computational capabilities, and compliance with strict international codes.",
  },
];

const disciplineIcons = [Activity, ShieldAlert, Layers, Cpu, Zap];

const disciplineItems = [
  { title: "Stress Analysis", id: "linear-nonlinear" },
  { title: "Fatigue & Fracture", id: "fatigue-fracture" },
  { title: "Thermal & Coupled", id: "thermal-coupled" },
  { title: "Explicit Dynamics", id: "explicit-dynamics" },
  { title: "Vibration & Seismic", id: "vibration-dynamics" },
];



export default function FeaServices() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="fea-page">
      <Breadcrumbs />

      {/* HERO */}
      <section className="fea-hero">
        <div className="fea-container">
          <span className="fea-label">SIMULATION SERVICES</span>

          <h1>Advanced FEA & Simulation Services</h1>

          <p>
            ProSIM delivers high-fidelity Finite Element Analysis (FEA) services
            designed to predict physical behavior, validate structural integrity,
            and optimize product performance across demanding industries.
          </p>

          <p>
            We specialize in translating complex operational loads into accurate
            computational models, helping engineering teams eliminate design flaws
            before physical prototyping.
          </p>
        </div>
      </section>

      {/* NAVIGATION */}
      <section className="fea-capabilities">
        <div className="fea-container">
          <div className="fea-about-card">
            <h2>Simulation Disciplines</h2>

            <div className="fea-capability-grid">
              {disciplineItems.map((item, index) => {
                const Icon = disciplineIcons[index];

                return (
                  <a
                    href={`#${item.id}`}
                    className="fea-capability-link"
                    key={item.id}
                  >
                    <div className="fea-capability-card">
                      <div className="fea-icon-box">
                        <Icon size={25} strokeWidth={1.8} />
                      </div>

                      <h5>{item.title}</h5>

                      <div className="fea-card-arrow">
                        <ArrowUpRight size={20} strokeWidth={1.8} />
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* MAIN IMAGE */}
      <section className="fea-image-section">
        <div className="fea-container">
          <div className="fea-image-card">
            <img
              src="/img/fea-services-service-01.png"
              alt="Advanced FEA Services"
            />
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="fea-intro">
        <div className="fea-container">
          <span className="fea-label">OUR EXPERTISE</span>

          <h2>Our Core Simulation Capabilities</h2>

          <p>
            As a specialized engineering simulation consultancy, our expertise
            covers a comprehensive range of computational mechanics.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="fea-services">
        <div className="fea-container">
          <div className="fea-service-list">
            {services.map((service, index) => {
              const ServiceIcon = disciplineIcons[index];

              return (
                <article
                  className="fea-service-box"
                  id={service.id}
                  key={service.id}
                >
                  <div className="fea-service-top">
                    <div className="fea-service-number-group">
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      <div className="fea-service-inline-icon">
                        <ServiceIcon size={22} strokeWidth={1.8} />
                      </div>
                    </div>

                    <ArrowUpRight
                      className="fea-service-arrow"
                      size={25}
                      strokeWidth={1.8}
                    />
                  </div>

                  <h3>{service.title}</h3>

                  <p>{service.description}</p>

                  <ul>
                    {service.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>

                  {/* GALLERY */}
                  {index === 1 && (
                    <div className="fea-gallery">
                      <div className="fea-gallery-card">
                        <img
                          src="/new-img/offerings/fea-services/1.png"
                          alt="Fatigue Analysis"
                        />
                      </div>

                      <div className="fea-gallery-card">
                        <img
                          src="/new-img/offerings/fea-services/2.png"
                          alt="Fracture Mechanics"
                        />
                      </div>
                    </div>
                  )}

                  {index === 2 && (
                    <div className="fea-gallery">
                      <div className="fea-gallery-card">
                        <img
                          src="/new-img/offerings/fea-services/3.png"
                          alt="Thermal Stress Simulation"
                        />
                      </div>

                      <div className="fea-gallery-card">
                        <img
                          src="/new-img/offerings/fea-services/4.png"
                          alt="Coupled Field Analysis"
                        />
                      </div>
                    </div>
                  )}

                  {index === 4 && (
                    <div className="fea-gallery single">
                      <div className="fea-gallery-card">
                        <img
                          src="/new-img/offerings/fea-services/5.png"
                          alt="Vibration & Seismic"
                        />
                      </div>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="fea-advantage">
        <div className="fea-container">
          <span className="fea-label">INDUSTRIES WE SERVE</span>

          <h2>Industries We Serve</h2>

          <p>
            Our simulation team delivers reliable numerical evaluations across
            highly regulated, mission-critical sectors.
          </p>

          <div className="fea-advantage-list">
            {industries.map((industry, index) => {
              const Icon = disciplineIcons[index % disciplineIcons.length];

              return (
                <div className="fea-advantage-box" key={industry}>
                  <span>{String(index + 1).padStart(2, "0")}</span>

                  <div className="fea-advantage-icon">
                    <Icon size={22} strokeWidth={1.8} />
                  </div>

                  <div className="fea-advantage-content">
                    <h3>{industry}</h3>
                  </div>

                  <ArrowUpRight size={23} strokeWidth={1.8} />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ADVANTAGE */}
      <section className="fea-advantage">
        <div className="fea-container">
          <span className="fea-label">WHY PROSIM</span>

          <h2>The ProSIM Advantage: Why Partner with Us?</h2>

          <p>
            Mitigate technical risk, optimize product performance, and accelerate
            time-to-market through expert computational simulation.
          </p>

          <div className="fea-advantage-list">
            {[
              {
                number: "01",
                title: "Deep Domain Expertise",
                text: "Decades of multi-disciplinary simulation experience solving complex non-linear structural and thermal problems.",
              },
              {
                number: "02",
                title: "Regulatory Compliance",
                text: "Robust analysis documentation verified against strict international codes and standards.",
              },
              {
                number: "03",
                title: "Prototype Reduction",
                text: "Virtual testing accurately predicts performance issues, saving substantial capital on physical testing iterations.",
              },
              {
                number: "04",
                title: "Agile Collaboration",
                text: "Seamless integration with your internal engineering teams for swift design modifications and optimization.",
              },
            ].map((item, index) => {
              const Icon = disciplineIcons[index];

              return (
                <div className="fea-advantage-box" key={item.number}>
                  <span>{item.number}</span>

                  <div className="fea-advantage-icon">
                    <Icon size={22} strokeWidth={1.8} />
                  </div>

                  <div className="fea-advantage-content">
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>

                  <ArrowUpRight size={23} strokeWidth={1.8} />
                </div>
              );
            })}
          </div>

          <p className="fea-final-text">
            Choose ProSIM as your trusted FEA simulation partner for
            world-class engineering insight, reliable structural validation, and
            operational safety.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="fea-faq" id="faq">
        <div className="fea-container">
          <div className="fea-faq-heading">
            <span className="fea-label">FAQ</span>

            <h2>Frequently Asked Questions</h2>
          </div>

          <div className="fea-faq-list">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <div
                  className={`fea-faq-item ${isOpen ? "active" : ""}`}
                  key={faq.question}
                >
                  <button
                    type="button"
                    className="fea-faq-question"
                    onClick={() =>
                      setOpenFaq(isOpen ? null : index)
                    }
                    aria-expanded={isOpen}
                  >
                    <span className="fea-faq-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <strong>{faq.question}</strong>

                    <span className="fea-faq-icon">
                      {isOpen ? (
                        <Minus size={19} strokeWidth={1.8} />
                      ) : (
                        <Plus size={19} strokeWidth={1.8} />
                      )}
                    </span>
                  </button>

                  <div
                    className={`fea-faq-answer ${
                      isOpen ? "show" : ""
                    }`}
                  >
                    {faq.answer && <p>{faq.answer}</p>}

                    {faq.list && (
                      <ul>
                        {faq.list.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}