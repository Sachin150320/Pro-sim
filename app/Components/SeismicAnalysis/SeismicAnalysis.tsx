"use client";

import React, { useState } from "react";
import Breadcrumbs from "@/app/Components/Breadcrumbs/Breadcrumbs";
import {
  ArrowUpRight,
  Activity,
  Cable,
  FileCheck2,
  Layers3,
  Users,
  ShieldCheck,
  Settings,
  Building2,
  Factory,
  ClipboardCheck,
  Boxes,
  Plus,
  Minus,
} from "lucide-react";
import "./SeismicAnalysis.css";

const services = [
  {
    id: "seismic-analysis",
    number: "01",
    icon: Activity,
    title: "Seismic Analysis, Evaluation & Qualification",
    description:
      "Serving as trusted seismic analysis consultants, ProSIM relies on Finite Element Analysis (FEA), multi-physics simulations, and region-specific global nuclear standards to certify safety-critical elements. We provide in-depth seismic analysis services tailored to comply with the most stringent international nuclear mandates.",
    points: [
      "Nuclear Seismic Qualification & FEA Seismic Analysis: We deliver exhaustive FEA-based documentation for standalone and skid-based systems, as well as pumps, piping networks, tanks, pressure vessels, reactors, and valves.",
      "Floor Response Spectra (FRS) Generation: Our team develops structural and building models that meet regulatory approval to execute precise seismic FEA and produce accurate FRS across multiple elevations.",
      "Shake Table Testing Support: We provide an end-to-end seismic qualification service by outlining boundary conditions, engineering specialized fixtures and jigs, and compiling thorough qualification test reports.",
      "Nuclear Seismic Evaluation & Seismic Re-evaluation: We modernize existing or legacy SSCs through focused FEA seismic assessments to align with updated safety classifications or changing regulatory benchmarks.",
      "Seismic Margin Assessment (SMA): Using highly advanced FEA techniques, we assess the failure probabilities of components and structures during extreme seismic events, strictly adhering to regulatory frameworks like those from the AERB.",
      "Extreme Load Analysis: Our capabilities cover complex simulations, such as calculating Air Shock Waves (ASW) and analyzing Air Crash (AC) scenarios.",
    ],
    images: [
      {
        src: "/new-img/offerings/Seismic-Analysis-and-Qualification/1.png",
        alt: "Seismic Analysis",
      },
      {
        src: "/new-img/offerings/Seismic-Analysis-and-Qualification/2.png",
        alt: "Shake Table Testing",
      },
    ],
  },
  {
    id: "piping-engineering",
    number: "02",
    icon: Cable,
    title: "Piping Engineering Services",
    description:
      "We supply comprehensive piping design, flexibility assessments, and seismic qualifications for diverse nuclear packages, delivering top-tier seismic design services both in India and worldwide.",
    points: [
      "Piping Layout & Routing: Our services include optimizing layouts, creating 2D and 3D piping models, and extracting General Arrangement (GA) and Isometric (ISO) drawings.",
      "Pipe Stress & Flexibility Analysis: We conduct both static and dynamic analyses in accordance with ASME standards to ensure the code qualification of bolts, anchor plates, supports, and welds.",
      "Hydraulic Design: We handle critical fluid dynamics tasks, such as determining temperature drop load distributions, evaluating pressure drops, and performing sizing calculations.",
      "Documentation & Data Management: We manage Material Take-Off (MTO) preparation and Bill of Quantities (BoQ) extraction alongside strict P&ID reviews to verify equipment numbers, check for duplications, and validate service designations and line numbers.",
      "Life Cycle Management: Our asset management solutions feature Life Extension (RLE) services, Remaining Life Assessments (RLA), and Fitness-for-Service (FFS) evaluations.",
    ],
    images: [
      {
        src: "/new-img/offerings/Seismic-Analysis-and-Qualification/3.png",
        alt: "Piping Engineering",
      },
      {
        src: "/new-img/offerings/Seismic-Analysis-and-Qualification/4.png",
        alt: "Piping Analysis",
      },
    ],
  },
  {
    id: "detailed-engineering",
    number: "03",
    icon: FileCheck2,
    title: "Detailed & Pre-Bid Engineering",
    description:
      "We assist component manufacturers and EPC contractors throughout the competitive bidding process by offering strategic pre-bid engineering insights aimed at achieving successful nuclear seismic qualification.",
    points: [
      "We assist component manufacturers and EPC contractors throughout the competitive bidding process by offering strategic pre-bid engineering insights aimed at achieving successful nuclear seismic qualification.",
      "Our detailed engineering deliverables encompass highly optimized structural configurations, precise sizing calculations, and comprehensive process flow diagrams (PFDs).",
      "We formulate custom design methodologies, subroutines, and macros specifically engineered for baseplates, embedded components, and structural anchorages.",
    ],
  },
];

const navigationItems = [
  {
    title: "Seismic Analysis & Qualification",
    id: "seismic-analysis",
    icon: Activity,
  },
  {
    title: "Piping Engineering Services",
    id: "piping-engineering",
    icon: Cable,
  },
  {
    title: "Detailed & Pre-Bid Engineering",
    id: "detailed-engineering",
    icon: FileCheck2,
  },
  {
    title: "Systems, Structures & Components",
    id: "sscs-handled",
    icon: Layers3,
  },
  {
    title: "Target Client Ecosystem",
    id: "client-ecosystem",
    icon: Users,
  },
];

const sscData = [
  {
    category: "Mechanical Systems & Packages",
    equipment:
      "Primary Piping Package (PPP), Hydrogen & Oxygen Separation, Electro-chlorination, Fire Fighting Systems, Material Handling, Waste Management and Upgrading, Plant and Sea Water Systems, Balance of Turbine Island Package (BOTIP), and Nuclear Ventilation (HVAC).",
  },
  {
    category: "Mechanical Equipment & Skids",
    equipment:
      "Rotary equipment including generators, motors, gearboxes, blowers, compressors, and pumps, Skid-based Integrated Systems, Dampers, Valves, Custom Design Equipment, Heat Exchangers, Tanks, and Pressure Vessels.",
  },
  {
    category: "Special Independent Packages",
    equipment:
      "Field Instrumentation, Turbine Packages, Reactor Internals, Coolant Channels, Reactor Headers, Pressurizers, and Steam Generators.",
  },
  {
    category: "Structures (Steel & RCC)",
    equipment:
      "Chimneys, Reinforced Concrete (RCC) and Structural Steel Modules, Plant Foundations, and Heavy Buildings.",
  },
  {
    category: "Electrical, C&I",
    equipment:
      "Switchyard Packages, Control Panels, Instrument Racks, Battery Stands, Cable Trays, Bus Bar Ducts, Distribution Modules, Low/Medium Voltage Switchgear, Motor Control Centers (MCC), Battery Inverters/Chargers, Transformers, and Complete DG Sets featuring Alternators.",
  },
];

const advantages = [
  {
    number: "01",
    title: "Deep Code Competence",
    icon: ShieldCheck,
    text:
      "We offer authoritative proficiency in international nuclear design standards and codes, such as IEEE, PNAE, RCC-M/RCC-E, and ASME B&PV.",
  },
  {
    number: "02",
    title: "Validated Intellectual Property",
    icon: ClipboardCheck,
    text:
      "Our proprietary ecosystem of intellectual property—featuring Standard Operating Procedures (SOPs), validation checklists, and in-house automation macros—drastically minimizes human error while boosting overall productivity.",
  },
  {
    number: "03",
    title: "Proven Quality & Risk Management",
    icon: Settings,
    text:
      "We utilize a highly refined Project Management Practice (PMP) that integrates seamlessly with rigorous nuclear Quality Management Systems (QMS) to identify and address anomalies during the earliest stages of a project's lifecycle.",
  },
  {
    number: "04",
    title: "Global Network Integration",
    icon: Users,
    text:
      "ProSIM maintains strong ties with premier FEA seismic qualification bodies and the global nuclear regulatory community, backed by our historical efforts with the World Nuclear Association (WNA) to help rationalize industry standards and codes.",
  },
];

const clients = [
  "Private and state-owned Nuclear Power Plant Operators in need of rigorously verified seismic qualification protocols.",
  "Regulatory bodies and Nuclear R&D establishments.",
  "System integrators and global EPC contractors searching for premier FEA seismic consultants.",
  "In-Service Inspection (ISI) and maintenance contractors.",
  "Equipment manufacturers alongside Tier-1, Tier-2, and Tier-3 component vendors who require extensive FEA seismic qualification data and robust certification services.",
];

const faqs = [
  {
    question:
      "What specialized nuclear engineering and seismic qualification services does ProSIM offer?",
    answer:
      "ProSIM is a premier global engineering and consultancy partner specializing in end-to-end Nuclear Seismic Qualification. Our core services include Finite Element Analysis (FEA) seismic analysis, structural evaluation, comprehensive piping engineering, Floor Response Spectra (FRS) generation, and life cycle asset management. We provide secure, dependable, and code-compliant design support for nuclear Systems, Structures, and Components (SSCs) worldwide.",
  },
  {
    question:
      "How does ProSIM support EPC contractors and component manufacturers during the pre-bid and detailed engineering phases?",
    answer:
      "We act as a strategic partner during the competitive bidding process by providing specialized pre-bid engineering insights that mitigate risks and ensure successful seismic qualification. Our detailed engineering deliverables for EPC contractors and OEMs include highly optimized structural configurations, precise sizing calculations, process flow diagrams (PFDs), and custom design macros that streamline procurement and fabrication.",
  },
  {
    question:
      "What international nuclear safety codes and regulatory standards do your seismic design services comply with?",
    answer:
      "Regulatory compliance is at the core of our business. Our engineering team possesses deep, authoritative competence in global nuclear design standards, including ASME B&PV, IEEE, PNAE, and RCC-M/RCC-E. We also strictly adhere to regional and international regulatory frameworks mandated by leading entities such as AERB, NPCIL, BARC, and ITER, ensuring your assets clear all safety verifications without costly delays.",
  },
  {
    question:
      "Which safety-classified Systems, Structures, and Components (SSCs) is ProSIM capable of qualifying?",
    answer:
      "We have profound industry expertise in managing and qualifying Class 1, 2, and 3 safety-classified systems. Our capabilities cover a vast range of critical domains.",
  
  },
  {
    question:
      "Do you provide both virtual Finite Element Analysis (FEA) and support for physical shake table testing?",
    answer:
      "Yes. ProSIM delivers exhaustive FEA-based documentation for standalone and skid-based systems. When physical testing is required, we offer end-to-end Shake Table Testing Support. This includes outlining precise boundary conditions, engineering specialized testing fixtures and jigs, and compiling thorough qualification test reports to guarantee rigorous regulatory approval.",
  },
  {
    question:
      "How does ProSIM assist nuclear plant operators with the modernization or life extension of legacy assets?",
    answer:
      "We provide comprehensive Life Cycle Management solutions to future-proof aging nuclear infrastructure. Our specialized services include Remaining Life Assessments (RLA), Fitness-for-Service (FFS) evaluations, and Plant Life Extension (RLE). Through focused FEA seismic re-evaluations, we modernize legacy SSCs to align with updated safety classifications and evolving regulatory benchmarks.",
  },
  {
    question:
      "How does your engineering team evaluate nuclear components for extreme loads and accidental impacts?",
    answer:
      "Safety and risk mitigation during extreme events are paramount in the nuclear sector. ProSIM conducts highly advanced Extreme Load Analysis to simulate complex, high-impact scenarios, such as Air Shock Waves (ASW) and Air Crash (AC) events. We also perform thorough Seismic Margin Assessments (SMA) to accurately determine the failure probabilities of components during extreme seismic activity.",
  },
  {
    question:
      "What comprehensive piping engineering and fluid dynamics services do you provide for nuclear packages?",
    answer:
      "We deliver top-tier piping engineering and seismic design services to global nuclear operators. Our scope includes 2D and 3D piping layout optimization, pipe stress and flexibility analysis (static and dynamic), and critical hydraulic design. Additionally, we handle strict P&ID reviews, Material Take-Off (MTO) preparation, and Bill of Quantities (BoQ) extraction to ensure accurate and cost-effective procurement.",
  },
  {
    question:
      "How does ProSIM ensure quality assurance, mitigate risks, and prevent errors during complex nuclear projects?",
    answer:
      "We safeguard your investments through a highly refined Project Management Practice (PMP) that integrates seamlessly with rigorous nuclear Quality Management Systems (QMS). Furthermore, we utilize our proprietary ecosystem of validated intellectual property—including Standard Operating Procedures (SOPs), validation checklists, and in-house automation macros—to drastically minimize human error, boost productivity, and identify anomalies at the earliest project stages.",
  },
  {
    question:
      "Who are your typical clients, and how can we partner with ProSIM for an upcoming nuclear bid or project?",
    answer:
      "Operating as elite FEA seismic qualification consultants, we actively partner with stakeholders across the entire global nuclear supply chain. Our clients include private and state-owned Nuclear Power Plant Operators, global EPC contractors, Tier-1/2/3 equipment manufacturers, system integrators, and regulatory bodies. If you require rigorous FEA seismic qualification data, strategic pre-bid support, or robust certification services for your next project, our team is ready to collaborate and ensure flawless execution.",
  },
];

export default function SeismicAnalysis() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="seismic-page">
      <Breadcrumbs />

      {/* HERO */}
      <section className="sa-hero">
        <div className="sa-container">
          <span className="sa-label">NUCLEAR ENGINEERING SERVICES</span>

          <h1>
            Engineering & Consultancy Partners for the Global Nuclear Power
            Sector
          </h1>

          <p>
            ProSIM stands out as a premier provider of engineering and
            consultancy solutions tailored for the nuclear power industry.
            Operating as a seasoned seismic design consultant, we team up with
            system integrators, equipment manufacturers, and EPC contractors
            worldwide. Our mission is to provide secure, dependable, and
            code-compliant design and operational support for nuclear Systems,
            Structures, and Components (SSCs).
          </p>

          <p>
            We have established a strong presence throughout the nuclear
            sector by working intimately with leading entities like NPCIL,
            BARC, IGCAR, NRB, AERB, ITER India, and ITER I/O. Furthermore, our
            collaborative network extends to numerous global Tier-1 vendors
            and major EPC contractors. Recognized as a top-tier agency for
            specialized FEA Seismic Qualification, we provide exceptional
            engineering and safety validations to guarantee rigorous Nuclear
            Seismic Qualification.
          </p>
        </div>
      </section>

      {/* NAVIGATION */}
      <section className="sa-navigation">
        <div className="sa-container">
          <div className="sa-navigation-card">
            <h2>Nuclear Engineering Services</h2>

            <div className="sa-navigation-grid">
              {navigationItems.map((item) => {
                const Icon = item.icon;

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
              src="/new-img/offerings/Seismic-Analysis-and-Qualification/pipping.jpg"
              alt="Nuclear Seismic Analysis and Qualification"
            />
          </div>
        </div>
      </section>

      {/* SERVICES INTRO */}
      <section className="sa-intro">
        <div className="sa-container">
          <span className="sa-label">OUR EXPERTISE</span>

          <h2>Seismic Analysis & Qualification Services</h2>

          <p>
            Our multidisciplinary engineering capabilities combine advanced
            FEA, seismic analysis, piping engineering, detailed engineering,
            and nuclear safety expertise to support critical nuclear projects
            across their complete lifecycle.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="sa-services">
        <div className="sa-container">
          <div className="sa-service-list">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  className="sa-service-box"
                  id={service.id}
                  key={service.id}
                >
                  <div className="sa-service-top">
                    <div className="sa-service-number">
                      <span>{service.number}</span>

                      <div className="sa-service-icon">
                        <Icon size={24} strokeWidth={1.8} />
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

                  {service.images && (
                    <div className="sa-gallery">
                      {service.images.map((image) => (
                        <div className="sa-gallery-card" key={image.src}>
                          <img src={image.src} alt={image.alt} />
                        </div>
                      ))}
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* SSC */}
      <section className="sa-ssc" id="sscs-handled">
        <div className="sa-container">
          <span className="sa-label">SYSTEMS & COMPONENTS</span>

          <h2>Systems, Structures & Components (SSCs) Handled</h2>

          <p className="sa-section-intro">
            ProSIM brings profound industry expertise to managing Class 1, 2,
            and 3 safety-classified systems, supplying meticulous nuclear
            seismic analysis across multiple critical domains.
          </p>

          <div className="sa-table-wrapper">
            <table className="sa-ssc-table">
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Nuclear Packages & Equipment Covered</th>
                </tr>
              </thead>

              <tbody>
                {sscData.map((item) => (
                  <tr key={item.category}>
                    <td>
                      <strong>{item.category}</strong>
                    </td>
                    <td>{item.equipment}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* WHY PROSIM */}
      <section className="sa-advantage">
        <div className="sa-container">
          <span className="sa-label">WHY PROSIM</span>

          <h2>Why Choose ProSIM?</h2>

          <p className="sa-section-intro">
            Our nuclear engineering capabilities are supported by deep code
            expertise, validated engineering processes, quality management,
            and a strong global engineering network.
          </p>

          <div className="sa-advantage-list">
            {advantages.map((item) => {
              const Icon = item.icon;

              return (
                <div className="sa-advantage-box" key={item.number}>
                  <span className="sa-advantage-number">{item.number}</span>

                  <div className="sa-advantage-icon">
                    <Icon size={25} strokeWidth={1.8} />
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
        </div>
      </section>

      {/* CLIENT ECOSYSTEM */}
      <section className="sa-clients" id="client-ecosystem">
        <div className="sa-container">
          <span className="sa-label">TARGET CLIENT ECOSYSTEM</span>

          <h2>Target Client Ecosystem</h2>

          <p>
            Operating as elite FEA seismic qualification consultants, we
            actively partner with stakeholders across the entire global
            nuclear supply chain to deliver specialized services that ensure
            flawless nuclear seismic qualification.
          </p>

          <div className="sa-client-list">
            {clients.map((client, index) => (
              <div className="sa-client-item" key={client}>
                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="sa-client-icon">
                  {index === 0 && <Building2 size={23} />}
                  {index === 1 && <ShieldCheck size={23} />}
                  {index === 2 && <Factory size={23} />}
                  {index === 3 && <Settings size={23} />}
                  {index === 4 && <Boxes size={23} />}
                </div>

                <strong>{client}</strong>

                <ArrowUpRight size={21} strokeWidth={1.8} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="sa-faq" id="faq-nuclear">
        <div className="sa-container">
          <div className="sa-faq-heading">
            <span className="sa-label">FAQ</span>

            <h2>Frequently Asked Questions</h2>

            <p>
              Find answers to common questions about ProSIM's nuclear
              engineering, seismic qualification, piping, FEA, and consultancy
              services.
            </p>
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