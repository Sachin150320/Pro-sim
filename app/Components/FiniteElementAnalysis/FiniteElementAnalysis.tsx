"use client";

import React, { useState } from "react";
import Breadcrumbs from "@/app/Components/Breadcrumbs/Breadcrumbs";
import {
  ArrowUpRight,
  Cpu,
  ShieldCheck,
  Settings,
  Building2,
  Database,
  ScanLine,
  Box,
  Plus,
  Minus,
} from "lucide-react";
import "./FiniteElementAnalysis.css";

const services = [
  {
    id: "technical-capabilities",
    title: "Core Technical Capabilities",
    description:
      "ProSIM combines leading commercial platforms and open-source programs to perform advanced finite element analysis, computer-aided engineering, and multi-physics simulations across demanding engineering applications.",
    points: [
      "Linear Static Analysis: Verifying design adequacy and confirming that stress levels remain within allowable limits.",
      "Dynamic Analysis: Investigating transient, harmonic, and modal dynamic behaviors.",
      "Frequency & Time Domain Analysis: Executing response spectra, frequency response, and time-series evaluations.",
      "Non-Linear Analysis: Addressing contact mechanics, significant geometric deformation, and material non-linearities.",
      "Coupled Multi-Physics: Modeling complex phenomena such as fluid-structure interactions and thermo-mechanical effects.",
      "Software Expertise: Code_Aster, Radioss, OptiStruct, Nastran, Abaqus, and ANSYS.",
    ],
  },
  {
    id: "code-compliance",
    title: "Industry Codes & Standards Compliance",
    description:
      "We validate engineering designs against rigorous sector-specific regulations and international engineering standards. Our analysis process helps clients demonstrate structural reliability and regulatory compliance.",
    points: [
      "ASME: Boiler & Pressure Vessel Code (B&PV).",
      "API: American Petroleum Institute standards.",
      "EN / ISO: European and International Standards.",
      "IEEE: Institute of Electrical and Electronics Engineers standards.",
      "DNVGL: Maritime and Offshore engineering standards.",
      "Seismic evaluation and qualification against applicable industry requirements.",
    ],
  },
  {
    id: "offshore-cae",
    title: "Offshore CAE Services",
    description:
      "Our Bangalore-based engineering delivery center provides scalable offshore CAE support for clients around the world. We manage complete simulation workflows from pre-processing and analysis setup through solver execution and post-processing.",
    points: [
      "Pre-Processing: Finite element modelling, meshing, and geometric cleanup using AutoCAD, CATIA, Solidworks, and Hypermesh.",
      "Quality Assurance: Verification of mesh density, element sizing, and quality metrics for each analysis.",
      "Analysis Setup: Definition of boundary conditions, mass balances, and appropriate solver deck settings.",
      "Solver Execution: Running analysis solvers and managing simulation workflows.",
      "Post-Processing: Interpreting simulation results and providing practical engineering recommendations.",
    ],
  },
  {
    id: "onsite-cae",
    title: "Onsite CAE Consulting & Placement",
    description:
      "ProSIM can deploy experienced engineering professionals directly to your facility. Our resident consultants and application engineers integrate with your existing teams and provide targeted CAE and engineering support.",
    points: [
      "FEA/CAE Solvers: Onsite expertise covering ANSYS, Radioss, and OptiStruct.",
      "CAD Tools: AutoCAD, CATIA, and Solidworks support.",
      "Piping Engineering: CAESAR II and PePs capabilities.",
      "Application Support: Engineers trained to work within client-specific engineering environments.",
      "Resident Consulting: Direct collaboration with engineering teams and customers.",
    ],
  },
  {
    id: "sectors-served",
    title: "Industry Sectors Served",
    description:
      "Our simulation services support critical industries where structural integrity, reliability, safety, and performance are essential. We combine simulation expertise with sector-specific engineering knowledge.",
    points: [
      "Energy: Nuclear, wind, offshore, oil and gas, and thermal power.",
      "Aerospace & Defence: Impact testing, dynamic qualification, and structural weight minimization.",
      "Automotive: NVH, crash safety, durability, and component weight optimization.",
      "Electrical & Electronics: Structural reliability, drop simulations, and thermal management.",
    ],
  },
];

const capabilities = [
  {
    title: "Technical Capabilities",
    id: "technical-capabilities",
    icon: Cpu,
  },
  {
    title: "Codes & Standards",
    id: "code-compliance",
    icon: ShieldCheck,
  },
  {
    title: "Offshore CAE",
    id: "offshore-cae",
    icon: Database,
  },
  {
    title: "Onsite Consulting",
    id: "onsite-cae",
    icon: Settings,
  },
  {
    title: "Industry Sectors",
    id: "sectors-served",
    icon: Building2,
  },
];

const faqs = [
  {
    question:
      "What Finite Element Analysis (FEA) and CAE simulation services does ProSIM offer?",
    answer:
      "ProSIM provides a comprehensive suite of computer-aided engineering (CAE) and multi-physics simulation services designed to turn intricate data into practical business insights. Our core offerings include linear and non-linear analysis, dynamic and frequency domain analysis, design optimization, structural integrity assessments, and coupled multi-physics modeling. We act as your dedicated engineering advisors to help you solve complex design challenges, improve product reliability, and accelerate time-to-market.",
  },
  {
    question:
      "What engagement models are available for outsourcing CAE and FEA projects?",
    answer:
      "We offer highly adaptable partnership structures tailored to fit your specific operational and budgetary needs. You can choose from Offshore CAE Services managed through our dedicated Bangalore delivery center, Onsite CAE Consulting where we deploy resident engineers directly to your facility, or Dedicated CAE Outsourcing via Master Service Agreements (MSAs) to guarantee steady, long-term engineering bandwidth for continuous project demands.",
  },
  {
    question:
      "How do you ensure our engineering designs comply with global industry standards?",
    answer:
      "Risk mitigation and regulatory compliance are at the forefront of our engineering process. Our experts meticulously evaluate and validate your designs to guarantee they satisfy rigorous, sector-specific global safety codes. We possess deep expertise in qualifying products against leading international standards, including ASME B&PV, API, EN / ISO, IEEE, and DNVGL.",
  },
  {
    question:
      "How can FEA design optimization help reduce manufacturing costs and improve product performance?",
    answer:
      "By leveraging advanced simulation data, our team streamlines your products through parametric, topology, shape, and sizing refinements. This optimization process eliminates unnecessary weight and material waste while maximizing stiffness, strength, and overall performance, ultimately driving down manufacturing costs and enhancing product margins.",
  },
  {
    question:
      "Can ProSIM assist with failure analysis and root cause identification for broken components?",
    answer:
      "Yes. When a breakdown occurs, our dedicated consulting team conducts comprehensive failure analysis to identify the exact root causes of the structural or mechanical failure. Beyond just identifying the problem, we provide actionable, corrective design modifications to ensure the issue is resolved and long-term durability is restored.",
  },
  {
    question:
      "Do you offer Remaining Life Assessment (RLA) and Fitness-for-Service (FFS) evaluations for aging assets?",
    answer:
      "Absolutely. For capital-intensive industries, we conduct rigorous asset longevity evaluations, including Remaining Life Assessment and Extension (RLA/RLE) and Fitness-for-Service (FFS) analyses. By predicting long-term durability and evaluating potential fatigue life, we help plant managers and operations executives safely extend the lifespan of critical components and systems.",
  },
  {
    question:
      "What are the business advantages of utilizing ProSIM’s offshore CAE delivery center in India?",
    answer:
      "Our Bangalore-based delivery center operates as a highly scalable, dependable, and cost-effective hub for complete simulation lifecycles. By outsourcing your finite element workflows to us, you gain access to top-tier engineering talent managing everything from detailed pre-processing, geometric cleanup, and rigorous quality assurance to solver execution and actionable post-processing insights—all seamlessly integrated into your global supply chain.",
  },
  {
    question:
      "Are you able to provide onsite CAE consulting and deploy resident FEA engineers at our facility?",
    answer:
      "Yes. Through our onsite placement program, we can seamlessly integrate highly trained ProSIM professionals—such as application engineers or resident consultants—directly into your workspace. Our personnel are rigorously cross-trained in specific domains and can manage specialized FEA/CAE solvers like ANSYS, Radioss, and OptiStruct and CAD tools locally, engaging face-to-face with your team and clientele.",
  },
  {
    question:
      "Which industry sectors do you support with structural integrity and multi-physics simulations?",
    answer:
      "Our comprehensive simulation offerings are backed by deep, sector-specific knowledge supporting high-stakes global industries. We routinely partner with executives and engineering teams in the Energy sector, including nuclear, wind, offshore, oil and gas, and thermal power; Aerospace & Defence; Automotive; and Electrical & Electronics.",
  },
  {
    question:
      "Which commercial simulation software platforms and CAD tools does your engineering team utilize?",
    answer:
      "To ensure seamless integration with your existing engineering workflows, our professionals rely on a powerful combination of leading commercial platforms and versatile open-source programs. Our technical proficiency covers ANSYS, Abaqus, Nastran, OptiStruct, Radioss, and Code_Aster for analysis, alongside AutoCAD, CATIA, Solidworks, and Hypermesh for geometric cleanup and precise model configuration.",
  },
];

export default function FiniteElementAnalysis() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="fea-page">
      <Breadcrumbs />

      {/* HERO */}
      <section className="fea-hero">
        <div className="fea-container">
          <span className="fea-label">FINITE ELEMENT ANALYSIS</span>

          <h1>Finite Element Analysis (FEA)</h1>

          <p>
            ProSIM provides sophisticated multi-physics simulations alongside
            expert finite element analysis, turning intricate engineering data
            into practical insights that drive smarter design decisions.
          </p>

          <p>
            Our experienced engineering team evaluates simulation results and
            applies deep technical knowledge to solve complex engineering
            challenges, improve reliability, and support successful project
            execution.
          </p>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="fea-capabilities">
        <div className="fea-container">
          <div className="fea-about-card">
            <h2>FEA & CAE Simulation Services</h2>

            <div className="fea-banner">
              <div className="fea-capability-grid">
                {capabilities.map((item) => {
                  const Icon = item.icon;

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

                        <span className="fea-card-arrow">
                          <ArrowUpRight size={20} strokeWidth={1.8} />
                        </span>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN IMAGE */}
      <section className="fea-image-section">
        <div className="fea-container">
          <div className="fea-image-card">
            <img
              src="/new-img/offerings/FEA/1.png"
              alt="Finite Element Analysis"
            />
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="fea-intro">
        <div className="fea-container">
          <span className="fea-label">OUR EXPERTISE</span>

          <h2>Advanced FEA, Simulation & Engineering Analysis</h2>

          <p>
            Our engineering capabilities cover design optimization, seismic
            qualification, structural integrity, remaining life assessment,
            failure analysis, and multi-physics simulation for demanding
            industrial applications.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="fea-services">
        <div className="fea-container">
          <div className="fea-service-list">
            {services.map((service, index) => (
              <article
                className="fea-service-box"
                id={service.id}
                key={service.id}
              >
                <div className="fea-service-top">
                  <span>{String(index + 1).padStart(2, "0")}</span>

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

                {/* IMAGES */}

                {index === 0 && (
                  <div className="fea-gallery">
                    <div className="fea-gallery-card">
                      <img
                        src="/new-img/offerings/FEA/2.png"
                        alt="FEA Simulation"
                      />
                    </div>

                    <div className="fea-gallery-card">
                      <img
                        src="/new-img/offerings/FEA/3.png"
                        alt="Finite Element Analysis"
                      />
                    </div>
                  </div>
                )}

                {index === 2 && (
                  <div className="fea-gallery">
                    <div className="fea-gallery-card">
                      <img
                        src="/new-img/offerings/FEA/3.png"
                        alt="Offshore CAE Services"
                      />
                    </div>

                    <div className="fea-gallery-card">
                      <img
                        src="/new-img/offerings/FEA/4.png"
                        alt="CAE Simulation"
                      />
                    </div>
                  </div>
                )}

                {index === 3 && (
                  <div className="fea-gallery single">
                    <div className="fea-gallery-card">
                      <img
                        src="/new-img/offerings/FEA/4.png"
                        alt="Onsite CAE Consulting"
                      />
                    </div>
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* DESIGN OPTIMIZATION */}
      <section className="fea-advantage">
        <div className="fea-container">
          <span className="fea-label">WHY PROSIM</span>

          <h2>
            The ProSIM Advantage: Engineering Analysis That Drives Better
            Decisions
          </h2>

          <h3 className="fea-advantage-title">
            Reliable Simulation. Practical Engineering. Better Performance.
          </h3>

          <p>
            ProSIM combines advanced simulation technologies with engineering
            judgment to help clients optimize designs, improve structural
            reliability, reduce failure risks, and make confident engineering
            decisions.
          </p>

          <div className="fea-advantage-list">
            {[
              {
                number: "01",
                title: "Design Optimization",
                text: "Parametric, topology, shape, and sizing refinements help reduce unnecessary weight and material while improving structural performance.",
                icon: Box,
              },
              {
                number: "02",
                title: "Structural Integrity",
                text: "FEA helps evaluate factor of safety, stiffness, strength, fatigue life, and structural response under realistic operating conditions.",
                icon: ShieldCheck,
              },
              {
                number: "03",
                title: "Reduced Engineering Risk",
                text: "Simulation identifies potential structural and mechanical issues before physical testing, fabrication, or field deployment.",
                icon: ScanLine,
              },
              {
                number: "04",
                title: "Flexible CAE Expertise",
                text: "Our teams work across ANSYS, Abaqus, Nastran, OptiStruct, Radioss, Code_Aster, Hypermesh, CATIA, Solidworks, and AutoCAD.",
                icon: Cpu,
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div className="fea-advantage-box" key={item.number}>
                  <span>{item.number}</span>

                  <div className="fea-advantage-icon">
                    <Icon size={24} strokeWidth={1.8} />
                  </div>

                  <div>
                    <h3>{item.title}</h3>

                    <p>{item.text}</p>
                  </div>

                  <ArrowUpRight size={23} strokeWidth={1.8} />
                </div>
              );
            })}
          </div>

          <p className="fea-final-text">
            Choose ProSIM for reliable FEA, CAE, and multi-physics simulation
            services. Our engineering teams help clients validate designs,
            optimize performance, manage structural risks, and develop
            practical engineering solutions for complex applications.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="fea-faq" id="faq-fea-cae">
        <div className="fea-container">
          <div className="fea-faq-heading">
            <span className="fea-label">FAQ</span>

            <h2>FEA & CAE Simulation FAQs</h2>
          </div>

          <div className="fea-faq-list">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <div
                  className={`fea-faq-item ${
                    isOpen ? "active" : ""
                  }`}
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
                    <p>{faq.answer}</p>
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