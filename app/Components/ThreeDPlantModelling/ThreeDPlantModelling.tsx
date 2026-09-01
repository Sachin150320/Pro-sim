"use client";

import React, { useState } from "react";
import Breadcrumbs from "@/app/Components/Breadcrumbs/Breadcrumbs";
import {
  ArrowUpRight,
  Box,
  Route,
  ScanLine,
  Cpu,
  Database,
  Plus,
  Minus,
} from "lucide-react";
import "./ThreeDPlantModelling.css";

const services = [
  {
    id: "structural-modeling",
    title: "Intelligent Equipment & Structural Modelling",
    description:
      "Using sophisticated 3D design techniques, we translate vendor data sheets and initial layout concepts into highly accurate models of process equipment and supporting structures. Our approach combines practical space management with complex structural requirements to create organized and efficient plant layouts.",
    points: [
      "Equipment Modelling: Detailed 3D modelling of rotating and static equipment, power generation components, nuclear containment structures, and oil and gas facilities.",
      "Structural Modelling: Development of secondary steelwork, pipe racks, civil foundations, walkways, access platforms, and supporting structures.",
      "Sector Compliance: Layouts designed around hazardous zone classifications, spatial limitations, and regulatory requirements.",
      "Plant Layout Optimization: Intelligent equipment positioning and structural coordination for efficient plant operation and maintenance.",
    ],
  },
  {
    id: "piping-routing",
    title: "Spec-Driven Piping & Routing",
    description:
      "ProSIM develops intelligent 3D piping and routing models for complex industrial and energy facilities. Our CAD-based workflows ensure that the final model accurately follows engineering specifications, P&IDs, and project requirements.",
    points: [
      "Data-Driven Integration: Intelligent P&IDs directly guide the 3D routing process for accurate and consistent plant modelling.",
      "Piping Routing: Development of efficient piping routes while considering space, accessibility, maintenance, and constructability.",
      "Multi-System Modelling: Integration of piping, HVAC ductwork, electrical cable trays, and other plant systems.",
      "Fabrication Deliverables: Extraction of General Arrangement (GA) drawings, Material Take-Offs (MTO/BOM), and Isogen isometrics.",
    ],
  },
  {
    id: "clash-resolution",
    title: "Multi-Discipline Clash Resolution",
    description:
      "We identify and resolve spatial conflicts before fabrication and construction begin. Our multidisciplinary coordination process helps eliminate costly field modifications and improves overall plant constructability.",
    points: [
      "Clash Audits: Continuous coordination of piping, electrical, structural, and civil systems.",
      "Hard Clash Detection: Identification of direct physical interferences between plant components.",
      "Clearance Checks: Verification of required maintenance, operational, and safety clearances.",
      "Brownfield Modelling: Accurate as-built modelling for modifications and expansions within existing facilities.",
      "Advanced Coordination: Use of Navisworks and Aveva Review for automated clash detection and resolution.",
    ],
  },
  {
    id: "technical-methodologies",
    title: "Technical Expertise & Methodologies",
    description:
      "Our engineering teams are experienced across multiple industry-leading 3D plant design platforms. This allows us to support different client environments, project requirements, and enterprise engineering databases.",
    points: [
      "Intergraph SP3D: Advanced modelling for large-scale, data-centric enterprise projects with multidisciplinary database integration.",
      "Aveva E3D & PDMS: Detailed plant modelling, routing, structural coordination, and collaborative design workflows.",
      "Autodesk Plant 3D: Fast and flexible modelling for modular designs, plant layouts, and specification-driven projects.",
      "CADWorx & OpenPlant: Intelligent modelling for component-dense facilities and open-data engineering environments.",
    ],
  },
];

const disciplines = [
  {
    title: "Equipment & Structural",
    id: "structural-modeling",
    icon: Box,
  },
  {
    title: "Piping & Routing",
    id: "piping-routing",
    icon: Route,
  },
  {
    title: "Clash Resolution",
    id: "clash-resolution",
    icon: ScanLine,
  },
  {
    title: "Technical Expertise",
    id: "technical-methodologies",
    icon: Cpu,
  },
];

const faqs = [
  {
    question:
      "How do your industrial 3D plant modeling services reduce project costs and streamline execution?",
    answer:
      "By creating highly accurate, data-rich digital replicas of physical sites, ProSIM provides a unified source of truth throughout project execution. Our models improve space management, prevent expensive on-site rework, support better coordination, and provide reliable traceability for long-term facility management.",
  },
  {
    question:
      "Can you create accurate as-built 3D models for existing brownfield energy facilities?",
    answer:
      "Yes. ProSIM provides accurate as-built 3D modelling for brownfield facilities and site expansions. Existing site information can be transformed into intelligent models so that new equipment, piping, and structural modifications can be coordinated accurately within the existing physical constraints.",
  },
  {
    question:
      "How does your multi-discipline clash resolution process prevent on-site delays?",
    answer:
      "We conduct detailed interference checks before fabrication and construction. Our teams coordinate electrical, structural, civil, and piping layouts using advanced tools such as Autodesk Navisworks and Aveva Review to identify clearance, soft, and hard clashes before they become costly site issues.",
  },
  {
    question:
      "What specific fabrication-ready deliverables can we extract from your 3D plant design models?",
    answer:
      "Our data-driven models allow us to generate fabrication and procurement deliverables directly from the completed model. These include General Arrangement (GA) drawings, Material Take-Offs (MTO/BOM), and Isogen piping isometrics.",
  },
  {
    question:
      "Which 3D modeling software platforms do your engineering teams use for plant design?",
    answer:
      "Our engineering teams are proficient in multiple industry-standard platforms, including Intergraph SP3D, Aveva E3D, Aveva PDMS, Autodesk Plant 3D, CADWorx, and OpenPlant. This flexibility allows us to integrate with different client engineering environments.",
  },
  {
    question:
      "How do you ensure our P&IDs are accurately translated into the final 3D piping and routing?",
    answer:
      "We use professional CAD-based workflows where intelligent P&IDs guide the 3D routing process. This data-driven approach helps maintain specification compliance across piping, HVAC ductwork, electrical cable trays, and other plant systems while reducing translation errors.",
  },
  {
    question:
      "Do your 3D plant layouts comply with strict hazardous zone classifications and regulatory standards?",
    answer:
      "Yes. Our consultants develop specification-driven layouts that consider hazardous zone classifications, spatial restrictions, safety requirements, and applicable regulatory standards. This is particularly important for highly regulated facilities such as refineries, thermal power plants, and nuclear installations.",
  },
  {
    question:
      "What scope of process assets, equipment, and structural elements do you model?",
    answer:
      "We model a broad range of plant components, including rotating and static equipment, secondary steelwork, pipe racks, civil foundations, walkways, access platforms, power generation components, and critical process infrastructure.",
  },
  {
    question:
      "What industries and energy sectors do you specialize in for digital twin solutions?",
    answer:
      "Our 3D plant modelling services support a wide range of energy and industrial sectors.",
    list: [
      "Process Plants",
      "Nuclear Containment Facilities",
      "Thermal Power Plants",
      "Offshore Platforms",
      "Oil & Gas Facilities",
    ],
  },
  {
    question:
      "How does investing in a 3D digital replica improve the long-term lifecycle management of our assets?",
    answer:
      "A data-rich digital replica provides a reliable source of information throughout the asset lifecycle. It improves traceability and makes future maintenance, safety audits, modifications, and operational upgrades more efficient and cost-effective.",
  },
];

export default function ThreeDPlantModelling() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="plant-3d-page">
      <Breadcrumbs />

      {/* HERO */}
      <section className="plant-hero">
        <div className="plant-container">
          <span className="plant-label">3D PLANT MODELLING</span>

          <h1>3D Plant Modelling Services</h1>

          <p>
            ProSIM partners with energy asset owners, facility operators, and
            EPC contractors to create highly accurate, data-rich digital
            replicas of physical facilities through advanced industrial 3D
            plant modelling.
          </p>

          <p>
            Our intelligent 3D models provide a unified source of truth across
            the entire engineering lifecycle. Combining industry expertise,
            advanced software platforms, and proven engineering workflows, we
            deliver reliable modelling solutions for nuclear, thermal,
            offshore, oil and gas, and process facilities.
          </p>
        </div>
      </section>

      {/* DISCIPLINES */}
      <section className="plant-disciplines">
        <div className="plant-container">
          <div className="about-card">
            <h2>3D Plant Modelling Services</h2>

            <div className="plant-banner">
              <div className="plant-discipline-grid">
                {disciplines.map((item) => {
                  const Icon = item.icon;

                  return (
                    <a
                      href={`#${item.id}`}
                      className="plant-discipline-link"
                      key={item.id}
                    >
                      <div className="plant-discipline-card">
                        <div className="plant-icon-box">
                          <Icon size={25} strokeWidth={1.8} />
                        </div>

                        <h5>{item.title}</h5>

                        <span className="plant-card-arrow">
                          <ArrowUpRight
                            size={20}
                            strokeWidth={1.8}
                          />
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
      <section className="plant-image-section">
        <div className="plant-container">
          <div className="plant-image-card">
            <img
              src="/new-img/offerings/3D-Modelling/1.png"
              alt="3D Plant Modelling Services"
            />
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="plant-intro">
        <div className="plant-container">
          <span className="plant-label">OUR EXPERTISE</span>

          <h2>Our Core 3D Plant Modelling Capabilities</h2>

          <p>
            Our engineering expertise covers intelligent equipment modelling,
            piping routing, multidisciplinary coordination, clash resolution,
            and advanced plant design platforms.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="plant-services">
        <div className="plant-container">
          <div className="plant-service-list">
            {services.map((service, index) => (
              <article
                className="plant-service-box"
                id={service.id}
                key={service.id}
              >
             <div className="plant-service-top">
  <div className="plant-service-number">
    <span>
      {String(index + 1).padStart(2, "0")}
    </span>

    <div className="plant-service-icon">
      {(() => {
        const Icon = disciplines[index]?.icon;
        return Icon ? <Icon size={24} strokeWidth={1.8} /> : null;
      })()}
    </div>
  </div>

  <ArrowUpRight
    className="plant-service-arrow"
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

                {/* SERVICE IMAGES */}

                {index === 0 && (
                  <div className="plant-gallery">
                    <div className="plant-gallery-card">
                      <img
                        src="/new-img/offerings/3D-Modelling/2.png"
                        alt="Equipment and Structural Modelling"
                      />
                    </div>

                    <div className="plant-gallery-card">
                      <img
                        src="/new-img/offerings/3D-Modelling/3.png"
                        alt="3D Structural Modelling"
                      />
                    </div>
                  </div>
                )}

                {index === 1 && (
                  <div className="plant-gallery">
                    <div className="plant-gallery-card">
                      <img
                        src="/new-img/offerings/3D-Modelling/3.png"
                        alt="Piping and Routing"
                      />
                    </div>

                    <div className="plant-gallery-card">
                      <img
                        src="/new-img/offerings/3D-Modelling/4.png"
                        alt="3D Piping Modelling"
                      />
                    </div>
                  </div>
                )}

                {index === 2 && (
                  <div className="plant-gallery single">
                    <div className="plant-gallery-card">
                      <img
                        src="/new-img/offerings/3D-Modelling/5.png"
                        alt="3D Plant Clash Resolution"
                      />
                    </div>
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNICAL ADVANTAGE */}
      <section className="plant-advantage">
        <div className="plant-container">
          <span className="plant-label">WHY PROSIM</span>

          <h2>
            The ProSIM Advantage: Intelligent Digital Plant Modelling
          </h2>

          <h3 className="plant-advantage-title">
            Accurate Models, Better Coordination, Reduced Rework.
          </h3>

          <p>
            ProSIM combines advanced 3D modelling technologies with engineering
            knowledge to create accurate digital plant environments that
            improve constructability, coordination, and long-term asset
            management.
          </p>

          <div className="plant-advantage-list">
            {[
              {
                number: "01",
                title: "Intelligent 3D Models",
                text: "Data-rich models provide a reliable source of information for engineering, construction, maintenance, and future plant modifications.",
                icon: Database,
              },
              {
                number: "02",
                title: "Reduced Field Rework",
                text: "Advanced multidisciplinary clash detection identifies spatial conflicts before fabrication and construction activities begin.",
                icon: ScanLine,
              },
              {
                number: "03",
                title: "Accurate Deliverables",
                text: "GA drawings, MTO/BOM schedules, and piping isometrics can be extracted directly from coordinated 3D plant models.",
                icon: Box,
              },
              {
                number: "04",
                title: "Flexible Technology",
                text: "Our teams work across SP3D, Aveva E3D, PDMS, Plant 3D, CADWorx, and OpenPlant to support different client environments.",
                icon: Cpu,
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  className="plant-advantage-box"
                  key={item.number}
                >
                  <span>{item.number}</span>

                  <div className="plant-advantage-icon">
                    <Icon size={24} strokeWidth={1.8} />
                  </div>

                  <div>
                    <h3>{item.title}</h3>

                    <p>{item.text}</p>
                  </div>

                  <ArrowUpRight
                    size={23}
                    strokeWidth={1.8}
                  />
                </div>
              );
            })}
          </div>

          <p className="plant-final-text">
            Choose ProSIM for accurate, intelligent, and construction-ready 3D
            plant modelling services. Our engineering teams help clients
            improve project coordination, reduce field rework, and maintain a
            reliable digital representation of their facilities throughout
            the asset lifecycle.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="plant-faq" id="faq-3d-modeling">
        <div className="plant-container">
          <div className="plant-faq-heading">
            <span className="plant-label">FAQ</span>

            <h2>Frequently Asked Questions</h2>
          </div>

          <div className="plant-faq-list">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <div
                  className={`plant-faq-item ${
                    isOpen ? "active" : ""
                  }`}
                  key={faq.question}
                >
                  <button
                    type="button"
                    className="plant-faq-question"
                    onClick={() =>
                      setOpenFaq(isOpen ? null : index)
                    }
                    aria-expanded={isOpen}
                  >
                    <span className="plant-faq-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <strong>{faq.question}</strong>

                    <span className="plant-faq-icon">
                      {isOpen ? (
                        <Minus
                          size={19}
                          strokeWidth={1.8}
                        />
                      ) : (
                        <Plus
                          size={19}
                          strokeWidth={1.8}
                        />
                      )}
                    </span>
                  </button>

                  <div
                    className={`plant-faq-answer ${
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