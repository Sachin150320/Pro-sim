"use client";

import React, { useState } from "react";
import Breadcrumbs from "@/app/Components/Breadcrumbs/Breadcrumbs";
import {
  ArrowUpRight,
  Cog,
  Wrench,
  Boxes,
  Building2,
  Zap,
  Plus,
  Minus,
} from "lucide-react";
import "./DetailedEngineering.css";

const services = [
  {
    id: "process-eng",
    title: "Process Engineering Support & Validation",
    description:
      "We provide specialized process design, drafting, and safety validation services, ensuring that fluid systems are optimized for flow assurance, operational safety, and process integrity.",
    points: [
      "Process & Instrumentation Drafting: Professional drafting and engineering review of Process Flow Diagrams (PFDs) and complex Piping and Instrumentation Diagrams (P&IDs).",
      "Flow Assurance & Hydraulic Calculations: Comprehensive hydraulic analysis and system sizing for critical utility and process lines, including polypropylene (PP) lines, fuel oil systems, and integrated metering skids.",
      "Dynamic Fluid Analysis: Advanced surge analysis and water hammer studies to identify transient pressure spikes and safeguard the physical piping network.",
      "Safety & Thermal Optimization: High-precision sizing of Pressure Safety Valves (PSVs) and calculated insulation thickness optimization for thermal efficiency and personnel protection.",
      "Technical Data Sheet Review: Independent, cross-disciplinary engineering review of mechanical equipment and Electrical, Instrumentation & Control (E&I) data sheets to guarantee vendor compliance.",
    ],
  },
  {
    id: "mechanical-design",
    title: "Mechanical Engineering Design (Static & Rotary)",
    description:
      "We deliver comprehensive design and analytical solutions for static and rotating equipment, ensuring structural integrity and long-term operational efficiency.",
    points: [
      "Equipment Sizing & Design: Thermal and hydraulic optimization tailored to specific process data sheets.",
      "Static Equipment Engineering: Detailed design for pressure vessels, heat exchangers, storage tanks, and distillation columns compliant with ASME, API, and TEMA codes.",
      "Rotary Equipment Specifications: Engineering specifications and procurement-ready data sheets for pumps, compressors, turbines, and fans.",
      "Deliverables: Preparation of General Arrangement Drawings (GADs), manufacturing-ready fabrication drawings, and thorough vendor document reviews.",
    ],
  },
  {
    id: "plant-piping",
    title: "3D Plant Modelling & Piping Engineering",
    description:
      "We design intelligent, clash-free piping networks engineered for optimal routing, stress tolerance, and ease of site construction.",
    points: [
      "Intelligent 3D Plant Modelling: Development of data-driven 3D plant environments encompassing equipment, piping, structures, and electrical raceways.",
      "Piping Layout Optimization: Strategic routing for complex plant layouts to balance space limitations, minimize pressure drops, and ensure clear maintenance access.",
      "Piping Stress Analysis: Comprehensive static and dynamic stress analysis covering thermal expansion, seismic, wind, and structural vibrations.",
      "Construction Deliverables: Automated extraction of high-precision Material Take-Offs (MTO/BoQ), piping isometric drawings, and support detailed drawings.",
      "As-Built Documentation: Conversion of laser scan data or red-marked drawings into intelligent as-built models.",
    ],
  },
  {
    id: "civil-structural",
    title: "Civil and Structural Engineering",
    description:
      "We provide robust structural engineering solutions designed to support heavy process payloads and withstand demanding environmental conditions.",
    points: [
      "Structural Analysis & Design: Multi-floor technological structures, heavy-duty pipe racks, equipment platforms, and modular process skids using advanced FEA modeling.",
      "Foundation Design: Deep, shallow, and dynamic machine foundation designs for heavy rotating equipment and high-load static towers.",
      "Deliverables: Connection detailing, steel fabrication drawings (BOM), and concrete reinforcement construction drawings.",
    ],
  },
  {
    id: "electrical-instrumentation",
    title: "Electrical, Instrumentation & Control (E&I) Engineering",
    description:
      "Our E&I team designs intelligent power distribution and automation architectures to ensure plant safety and asset connectivity.",
    points: [
      "Electrical Systems Design: Single Line Diagrams (SLDs), electrical load pooling, equipment selection, and detailed cable tray/routing layouts.",
      "Instrumentation & Control: Development of comprehensive I/O lists, instrument data sheets, control philosophies, and cause-and-effect safety matrices.",
      "Plant Safety Systems: Interlocking logic, hazardous area classification maps, and grounding/lightning protection system designs.",
    ],
  },
];

const industries = [
  "Oil & Gas (Upstream, Midstream, and Downstream)",
  "Petrochemicals & Chemicals",
  "Power Generation (Thermal, Hydro, and Nuclear)",
  "Renewable Energy (Solar, Wind, and Green Hydrogen)",
  "Heavy Manufacturing & Process Industries",
];

const faqs = [
  {
    question:
      "What detailed engineering services does ProSIM offer for industrial and energy projects?",
    answer:
      "ProSIM delivers comprehensive detailed engineering services covering Process Engineering, Mechanical Design, 3D Plant Modelling & Piping, Civil & Structural Engineering, and Electrical, Instrumentation & Control.",
  },
  {
    question:
      "How can ProSIM’s engineering outsourcing services help reduce our project CAPEX?",
    answer:
      "We reduce project costs through accurate material estimation, intelligent material selection, optimized hydraulic systems, and clash-free 3D design that minimizes expensive site rework.",
  },
  {
    question:
      "Which global engineering codes and international standards do your designs comply with?",
    answer:
      "Our engineering deliverables are developed in accordance with major international standards including Eurocodes, IS, DIN, BS, API, TEMA, ASME, ASME B31.1 and ASME B31.3.",
  },
  {
    question:
      "How do your 3D plant modelling services eliminate field rework and improve constructability?",
    answer:
      "Our intelligent 3D plant models coordinate piping, structures, electrical systems and equipment. This allows clashes to be identified and corrected before construction begins.",
  },
  {
    question:
      "Can you convert our FEED into ready-to-build fabrication packages?",
    answer:
      "Yes. We convert FEED information and process requirements into execution-ready engineering packages including GADs, fabrication drawings, connection details and procurement data sheets.",
  },
  {
    question:
      "Do you provide as-built 3D modelling and engineering for existing brownfield facilities?",
    answer:
      "Yes. We convert laser scan information and red-marked drawings into intelligent as-built 3D models suitable for maintenance, modification and future expansion.",
  },
  {
    question:
      "What mechanical equipment design services do you provide for static and rotating machinery?",
    answer:
      "We provide engineering for pressure vessels, storage tanks, heat exchangers and distillation columns, along with specifications for pumps, compressors, turbines and fans.",
  },
  {
    question:
      "How does ProSIM ensure operational safety and structural integrity in its engineering designs?",
    answer:
      "Safety is integrated throughout our engineering process through design verification, stress analysis, equipment sizing, safety valve sizing, structural analysis and compliance with applicable engineering standards.",
  },
  {
    question:
      "Which industries and sectors do your detailed engineering consultants serve?",
    list: industries,
  },
  {
    question:
      "Why should global EPC contractors choose ProSIM as their detailed engineering partner in India?",
    answer:
      "ProSIM works as an extension of your technical team, providing accurate engineering deliverables, fast design modifications, transparent coordination, global code compliance and reduced construction rework.",
  },
];

const disciplineIcons = [Cog, Wrench, Boxes, Building2, Zap];

const disciplineItems = [
  { title: "Process Engineering", id: "process-eng" },
  { title: "Mechanical Design", id: "mechanical-design" },
  { title: "3D Plant & Piping", id: "plant-piping" },
  { title: "Civil & Structural", id: "civil-structural" },
  {
    title: "Electrical & Instrumentation",
    id: "electrical-instrumentation",
  },
];

export default function DetailedEngineering() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="seismic-page">
      <Breadcrumbs />

      {/* HERO */}
      <section className="sa-hero">
        <div className="sa-container">
          <span className="sa-label">ENGINEERING SERVICES</span>

          <h1>Detailed Engineering Services</h1>

          <p>
            ProSIM offers end-to-end detailed engineering services designed to
            support the complete project lifecycle across major energy and
            industrial sectors.
          </p>

          <p>
            We specialize in converting engineering concepts, front-end
            designs, and process requirements into precise,
            construction-ready deliverables.
          </p>
        </div>
      </section>

      {/* NAVIGATION */}
      <section className="sa-navigation">
        <div className="sa-container">
          <div className="sa-navigation-card">
            <h2>Detailed Engineering Services</h2>

            <div className="sa-navigation-grid">
              {disciplineItems.map((item, index) => {
                const Icon = disciplineIcons[index];

                return (
                  <a
                    href={`#${item.id}`}
                    className="sa-navigation-link"
                    key={item.id}
                  >
                    <div className="sa-navigation-item">
                      <div className="sa-navigation-icon">
                        <Icon size={25} strokeWidth={1.8} />
                      </div>

                      <h3>{item.title}</h3>

                      <span>
                        <ArrowUpRight size={20} strokeWidth={1.8} />
                      </span>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* MAIN IMAGE */}
      <section className="sa-image-section">
        <div className="sa-container">
          <div className="sa-main-image">
            <img
              src="/img/detailed-engineering-service-01.png"
              alt="Detailed Engineering Services"
            />
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="sa-intro">
        <div className="sa-container">
          <span className="sa-label">OUR EXPERTISE</span>

          <h2>Our Core Engineering Disciplines</h2>

          <p>
            As a specialized detailed engineering company, our expertise
            covers a broad spectrum of technical requirements.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="sa-services">
        <div className="sa-container">
          <div className="sa-service-list">
            {services.map((service, index) => (
              <article
                className="sa-service-box"
                id={service.id}
                key={service.id}
              >
                <div className="sa-service-top">
                  <div className="sa-service-number">
                    <span>{String(index + 1).padStart(2, "0")}</span>

                    <div className="sa-service-icon">
                      {React.createElement(disciplineIcons[index], {
                        size: 25,
                        strokeWidth: 1.8,
                      })}
                    </div>
                  </div>

                  <ArrowUpRight
                    className="sa-service-arrow"
                    size={25}
                    strokeWidth={1.8}
                  />
                </div>

                <h2>{service.title}</h2>

                <p>{service.description}</p>

                <ul>
                  {service.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>

                {/* GALLERY */}
                {index === 1 && (
                  <div className="sa-gallery">
                    <div className="sa-gallery-card">
                      <img
                        src="/new-img/offerings/Detailed-engineering/1.png"
                        alt="Mechanical Engineering"
                      />
                    </div>

                    <div className="sa-gallery-card">
                      <img
                        src="/new-img/offerings/Detailed-engineering/2.png"
                        alt="Mechanical Design"
                      />
                    </div>
                  </div>
                )}

                {index === 2 && (
                  <div className="sa-gallery">
                    <div className="sa-gallery-card">
                      <img
                        src="/new-img/offerings/Detailed-engineering/3.png"
                        alt="3D Plant Modelling"
                      />
                    </div>

                    <div className="sa-gallery-card">
                      <img
                        src="/new-img/offerings/Detailed-engineering/4.png"
                        alt="Piping Engineering"
                      />
                    </div>
                  </div>
                )}

                {index === 4 && (
                  <div className="sa-gallery">
                    <div className="sa-gallery-card">
                      <img
                        src="/new-img/offerings/Detailed-engineering/5.png"
                        alt="Electrical Instrumentation"
                      />
                    </div>
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="sa-clients">
        <div className="sa-container">
          <span className="sa-label">INDUSTRIES WE SERVE</span>

          <h2>Industries We Serve</h2>

          <p>
            Our engineering team delivers tailored detailed engineering
            packages across highly regulated and capital-intensive sectors.
          </p>

          <div className="sa-client-list">
            {industries.map((industry, index) => {
              const Icon = disciplineIcons[index];

              return (
                <div className="sa-client-item" key={industry}>
                  <span>{String(index + 1).padStart(2, "0")}</span>

                  <div className="sa-client-icon">
                    <Icon size={21} strokeWidth={1.8} />
                  </div>

                  <strong>{industry}</strong>

                  <ArrowUpRight size={22} strokeWidth={1.8} />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ADVANTAGE */}
      <section className="sa-advantage">
        <div className="sa-container">
          <span className="sa-label">WHY PROSIM</span>

          <h2>The ProSIM Advantage: Why Partner with Us?</h2>

          <p className="sa-section-intro">
            Enhanced constructability, reduced rework, and accelerated
            commissioning through reliable detailed engineering solutions.
          </p>

          <div className="sa-advantage-list">
            {[
              {
                number: "01",
                title: "Clash-Free Designs",
                text: "Advanced multi-disciplinary 3D model coordination identifies spatial conflicts before materials arrive on-site, reducing field rework.",
              },
              {
                number: "02",
                title: "Global Compliance",
                text: "Every deliverable is cross-verified against international engineering codes and standards.",
              },
              {
                number: "03",
                title: "CAPEX Optimization",
                text: "Smart material selection, hydraulic optimization and accurate bulk estimation help reduce procurement costs.",
              },
              {
                number: "04",
                title: "Transparent Collaboration",
                text: "Our engineering team works as an extension of your technical department with transparent milestone updates and fast design changes.",
              },
            ].map((item, index) => {
              const Icon = disciplineIcons[index];

              return (
                <div className="sa-advantage-box" key={item.number}>
                  <span className="sa-advantage-number">
                    {item.number}
                  </span>

                  <div className="sa-advantage-icon">
                    <Icon size={22} strokeWidth={1.8} />
                  </div>

                  <div className="sa-advantage-content">
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>

                  <ArrowUpRight size={23} strokeWidth={1.8} />
                </div>
              );
            })}
          </div>

          <p className="sa-section-intro" style={{ marginTop: "40px" }}>
            Choose ProSIM as your trusted detailed engineering partner for
            world-class engineering design, reliable technical delivery and
            operational excellence.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="sa-faq" id="faq">
        <div className="sa-container">
          <div className="sa-faq-heading">
            <span className="sa-label">FAQ</span>

            <h2>Frequently Asked Questions</h2>
          </div>

          <div className="sa-faq-list">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <div
                  className={`sa-faq-item ${isOpen ? "active" : ""}`}
                  key={faq.question}
                >
                  <button
                    type="button"
                    className="sa-faq-question"
                    onClick={() =>
                      setOpenFaq(isOpen ? null : index)
                    }
                    aria-expanded={isOpen}
                  >
                    <span className="sa-faq-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <strong>{faq.question}</strong>

                    <span className="sa-faq-icon">
                      {isOpen ? (
                        <Minus size={19} strokeWidth={1.8} />
                      ) : (
                        <Plus size={19} strokeWidth={1.8} />
                      )}
                    </span>
                  </button>

                  <div
                    className={`sa-faq-answer ${
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