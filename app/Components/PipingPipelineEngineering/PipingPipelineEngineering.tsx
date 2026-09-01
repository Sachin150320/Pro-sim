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
import "./PipingPipelineEngineering.css";

const services = [
  {
    id: "detailed-design",
    title: "Design & Detailed Engineering",
    icon: Cog,
    description:
      "We provide precise, fully code-compliant basic and detailed piping design services with rapid turnaround times. Our team supports clients with complete piping design outsourcing, from first-principles calculations to construction-ready documentation.",
    points: [
      "Pipe Sizing & Flow Calculations: First-principles calculations to determine hydraulic pipe sizing and pressure drops.",
      "Layout & Routing: Expert piping layouts, smart re-routing solutions, and detailed piping modelling services.",
      "Intelligent Documentation: Development and continuous updating of 3D plant models, PFDs, and P&IDs.",
      "Production Deliverables: Preparation of Material Take-Offs (MTO), Bills of Quantities (BoQ), Isometrics (ISOs), and Piping General Arrangement drawings.",
      "Modular Designs: Optimized design and engineering for skid-mounted piping infrastructure.",
    ],
    images: [
      {
        src: "/new-img/offerings/Piping-and-Pipeline-Engineering/1.png",
        alt: "Piping Engineering Design",
      },
      {
        src: "/new-img/offerings/Piping-and-Pipeline-Engineering/2.png",
        alt: "Piping Engineering Analysis",
      },
    ],
  },
  {
    id: "stress-analysis",
    title: "Advanced Pipe Stress & Flexibility Analysis",
    icon: Wrench,
    description:
      "As experienced pipe stress analysis consultants, ProSIM verifies complex high-pressure and high-temperature piping systems against static, dynamic, and transient operational loads. Our analysis helps ensure safety, reliability, and code compliance.",
    points: [
      "Comprehensive Loading Analysis: Assessment of pressure, dead weight, thermal expansion, water hammer, steam hammer, wind, seismic loads, ocean currents, ice, and other operational conditions.",
      "Dynamic Pipe Stress Analysis: Evaluation of transient loads, vibration patterns, and dynamic response of piping systems.",
      "Pipe Support Engineering: Design, optimization, code verification, and evaluation of hangers, supports, and dynamic snubbers.",
      "Anchorage Systems: Structural design, qualification, and optimization of baseplates and anchorage systems.",
    ],
    images: [
      {
        src: "/new-img/offerings/Piping-and-Pipeline-Engineering/3.png",
        alt: "Pipe Stress Analysis",
      },
      {
        src: "/new-img/offerings/Piping-and-Pipeline-Engineering/4.png",
        alt: "Piping Flexibility Analysis",
      },
    ],
  },
  {
    id: "pipeline-engineering",
    title: "Pipeline Engineering (Onshore & Offshore)",
    icon: Boxes,
    description:
      "Our pipeline engineering team delivers complete engineering solutions for large-scale transportation networks extending across onshore and offshore environments.",
    points: [
      "Extensive experience with submerged, offshore, and onshore pipelines including buried and above-ground systems.",
      "Engineering of pipelines transporting crude oil, natural gas, and refined products.",
      "Preparation, review, and evaluation of Design Basis Reports (DBR).",
      "Pipeline checking and code qualification in accordance with international standards and DNVGL requirements.",
    ],
    images: [
      {
        src: "/new-img/offerings/Piping-and-Pipeline-Engineering/5.png",
        alt: "Pipeline Engineering",
      },
    ],
  },
  {
    id: "brownfield-maintenance",
    title: "Brownfield Maintenance & Fitness-for-Service",
    icon: Building2,
    description:
      "We support facility operators during maintenance and turnaround activities to maintain asset integrity, regulatory compliance, and safe operation of aging piping infrastructure.",
    points: [
      "Engineering support for In-Service Inspection (ISI) and structural integrity assessments.",
      "Fitness-for-Service (FFS) reviews and Remaining Life Assessments (RLA).",
      "Engineering Critical Analysis (ECA) for aging piping systems.",
      "Data-backed recommendations to repair, reuse, replace, or retire existing piping assets.",
    ],
  },
  {
    id: "code-compliance",
    title: "Technical Mastery & Code Compliance",
    icon: Zap,
    description:
      "ProSIM combines advanced 3D Finite Element Analysis with conventional 1D piping software to solve complex engineering challenges. Our engineers use industry-standard tools and international codes to deliver technically reliable piping solutions.",
    points: [
      "Industry-Standard Software: CAESAR-II, CAEPIPE, and PEPS (PIPESTRESS).",
      "Advanced Sub-Modeling: Integration of detailed 3D FEA models created using ABAQUS and ANSYS with standard 1D piping models.",
      "ASME Codes: ASME B&PV Codes, B31.1 Power Piping, B31.2 Fuel Gas Piping, and B31.3 Process Piping.",
      "International Codes: IS, EN, ISO, RCC, API, and DNVGL standards.",
    ],
  },
];

const advantages = [
  {
    number: "01",
    icon: Cog,
    title: "Engineered for Safety",
    text: "We ensure reliable piping performance during severe transient events such as fluid hammer and seismic conditions. We also provide onsite pipe stress analysis support to strengthen local engineering teams.",
  },
  {
    number: "02",
    icon: Wrench,
    title: "Optimized Total Cost of Ownership",
    text: "Our engineers optimize physical layouts, supports, and anchorage systems beyond basic code compliance to reduce structural weight, material consumption, and long-term project costs.",
  },
  {
    number: "03",
    icon: Boxes,
    title: "Flexible Global Delivery Models",
    text: "From short-term project-specific engineering reports to permanent Offshore Engineering Development Centers in Bangalore, we adapt our delivery model to your project requirements.",
  },
];

const faqs = [
  {
    question:
      "What comprehensive piping engineering services does ProSIM offer for global clients?",
    answer:
      "We offer end-to-end piping and pipeline engineering lifecycle services, ranging from first-principle basic designs to intricate lifecycle maintenance. Our core capabilities include detailed layout and routing, pipe sizing, intelligent 3D plant modeling, modular skid designs, and production deliverables such as Isometrics (ISOs) and Material Take-Offs (MTO). Operating from Bangalore, we serve as a dependable outsourcing partner, owner's engineer, or third-party reviewer for clients across the USA, Europe, the Gulf, Japan, and India.",
  },
  {
    question:
      "How does your pipe stress and flexibility analysis service ensure plant safety and reliability?",
    answer:
      "As experienced pipe stress analysis consultants, we mathematically verify complex, high-pressure, and high-temperature piping networks against rigorous operational loads. We assess sustained forces such as pressure and dead weight alongside dynamic and transient loads including thermal expansion, water or steam hammer, wind, and seismic events. This helps ensure that piping infrastructure remains safe, code-compliant, and reliable during demanding operating conditions.",
  },
  {
    question:
      "How can partnering with ProSIM reduce our project's Total Cost of Ownership (TCO)?",
    answer:
      "Our engineering philosophy goes beyond basic code verification. Through advanced stress analysis and structural optimization, our engineers refine physical layouts, piping supports, and anchorage systems. This can reduce structural weight, raw material consumption, procurement costs, and the overall Total Cost of Ownership of the facility.",
  },
  {
    question:
      "Which industries do you specialize in for piping and pipeline engineering?",
    answer:
      "Our team delivers tailored consulting and design solutions for demanding industries, including Onshore and Offshore Oil & Gas, Chemical Processing, Thermal Power, Nuclear Energy, and Bioenergy.",
  },
  {
    question:
      "What flexible engagement models do you offer for outsourcing piping design services?",
    answer:
      "We adapt our scale and delivery models to match your outsourcing methodology. Whether you need short-term engineering reports, onsite pipe stress analysis support, or a permanent Offshore Engineering Development Center (OEDC) based in Bangalore, we provide flexible delivery models according to your business requirements.",
  },
  {
    question:
      "Do you provide Fitness-for-Service (FFS) and Remaining Life Assessments (RLA) for aging infrastructure?",
    answer:
      "Yes. We support plant operators during brownfield maintenance and turnaround phases. Our team conducts Fitness-for-Service (FFS) reviews, Remaining Life Assessments (RLA), and Engineering Critical Analysis (ECA). These assessments provide data-backed recommendations on whether aging piping assets should be repaired, reused, replaced, or retired.",
  },
  {
    question:
      "What industry-standard software and international codes do your piping engineers comply with?",
    answer:
      "Our engineers are proficient in CAESAR-II, CAEPIPE, and PEPS (PIPESTRESS). We align piping designs with ASME B&PV, B31.1, B31.2, B31.3, IS, EN, ISO, RCC, API, and DNVGL standards.",
  },
  {
    question:
      "How do you handle exceptionally complex piping challenges that standard software cannot resolve?",
    answer:
      "When standard 1D pipe stress applications are insufficient, ProSIM uses advanced sub-modeling techniques to integrate standard 1D piping software with detailed 3D Finite Element Analysis models created using ABAQUS and ANSYS. This allows our engineers to address highly localized and complex engineering challenges.",
  },
  {
    question:
      "Can you assist with modular design and skid-mounted piping infrastructure?",
    answer:
      "Absolutely. We provide targeted optimization, detailed design, and engineering services for skid-mounted piping infrastructure. Our modular designs focus on efficient space utilization, structural integrity, maintainability, and rapid fabrication and deployment.",
  },
  {
    question:
      "Do you offer pipeline engineering services for large-scale onshore and offshore transportation networks?",
    answer:
      "Yes. We provide full-spectrum pipeline engineering services for submerged, offshore, and onshore pipelines, including buried and above-ground systems transporting crude oil, natural gas, and refined products. Our services also include Design Basis Reports (DBR), pipeline checking, and DNVGL code qualification.",
  },
];

const navigationItems = [
  {
    title: "Design & Detailed Engineering",
    id: "detailed-design",
    icon: Cog,
  },
  {
    title: "Stress & Flexibility Analysis",
    id: "stress-analysis",
    icon: Wrench,
  },
  {
    title: "Pipeline Engineering",
    id: "pipeline-engineering",
    icon: Boxes,
  },
  {
    title: "Brownfield Maintenance & FFS",
    id: "brownfield-maintenance",
    icon: Building2,
  },
  {
    title: "Technical Mastery & Codes",
    id: "code-compliance",
    icon: Zap,
  },
];

export default function PipingPipelineEngineering() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq((current) => (current === index ? null : index));
  };

  return (
    <main className="seismic-page">
      <Breadcrumbs />

      {/* HERO */}
      <section className="sa-hero">
        <div className="sa-container">
          <span className="sa-label">PIPING & PIPELINE ENGINEERING</span>

          <h1>Piping & Pipeline Engineering Services</h1>

          <p>
            Recognized worldwide as a leading piping engineering consultant and
            dependable outsourcing ally, ProSIM operates from our headquarters
            in Bangalore. We provide top-tier asset integrity, layout design,
            pipe stress analysis, and comprehensive piping engineering services
            to international organizations throughout the USA, Europe, the
            Gulf region, Japan, and India.
          </p>

          <p>
            Our professionals function as a natural extension of your own
            staff, stepping in as your chosen third-party reviewer, owner's
            engineering consultant, or piping design expert. If your
            organization is searching for a dependable piping design consultant
            in Bangalore, our blend of regional insight and international
            capability positions us as a reliable partner.
          </p>

          <p>
            Whether you need assistance with fundamental first-principle
            designs or require support for intricate lifecycle maintenance,
            ProSIM delivers complete consulting solutions tailored for
            high-stakes sectors including Bioenergy, Chemical Processing,
            Thermal Power, Nuclear, and Onshore and Offshore Oil & Gas.
          </p>
        </div>
      </section>

      {/* NAVIGATION */}
      <section className="sa-navigation">
        <div className="sa-container">
          <div className="sa-navigation-card">
            <h2>Piping & Pipeline Engineering Services</h2>

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
              src="/img/piping-and-pipeline-engineering.png"
              alt="Piping and Pipeline Engineering Services"
            />
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="sa-intro">
        <div className="sa-container">
          <span className="sa-label">OUR EXPERTISE</span>

          <h2>Complete Piping & Pipeline Engineering Solutions</h2>

          <p>
            From detailed piping layouts and stress analysis to pipeline
            engineering, brownfield maintenance, and advanced code compliance,
            ProSIM provides engineering solutions across the complete asset
            lifecycle.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="sa-services">
        <div className="sa-container">
          <div className="sa-service-list">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <article
                  className="sa-service-box"
                  id={service.id}
                  key={service.id}
                >
                  <div className="sa-service-top">
                    <div className="sa-service-number">
                      <span>{String(index + 1).padStart(2, "0")}</span>

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
                    <div
                      className={`sa-gallery ${
                        service.images.length === 1 ? "single" : ""
                      }`}
                    >
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

      {/* TECHNICAL MASTERY */}
      <section className="sa-ssc" id="technical-mastery">
        <div className="sa-container">
          <span className="sa-label">TECHNICAL MASTERY</span>

          <h2>Advanced Analysis, Software & Global Codes</h2>

          <p className="sa-section-intro">
            ProSIM connects advanced 3D Finite Element Analysis with
            conventional 1D piping software to solve exceptionally complex
            engineering challenges.
          </p>

          <div className="sa-table-wrapper">
            <table className="sa-ssc-table">
              <thead>
                <tr>
                  <th>Technical Area</th>
                  <th>Capabilities</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>
                    <strong>Industry-Standard Software</strong>
                  </td>
                  <td>CAESAR-II, CAEPIPE, and PEPS (PIPESTRESS).</td>
                </tr>

                <tr>
                  <td>
                    <strong>Advanced Sub-Modeling</strong>
                  </td>
                  <td>
                    Integration of 1D piping models with localized 3D FEA
                    models using ABAQUS and ANSYS.
                  </td>
                </tr>

                <tr>
                  <td>
                    <strong>ASME Codes</strong>
                  </td>
                  <td>
                    ASME B&PV Codes, B31.1 Power Piping, B31.2 Fuel Gas
                    Piping, and B31.3 Process Piping.
                  </td>
                </tr>

                <tr>
                  <td>
                    <strong>International Codes</strong>
                  </td>
                  <td>IS, EN, ISO, RCC, API, and DNVGL standards.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ADVANTAGE */}
      <section className="sa-advantage">
        <div className="sa-container">
          <span className="sa-label">WHY PROSIM</span>

          <h2>The ProSIM Advantage</h2>

          <p className="sa-section-intro">
            Our piping engineering approach combines technical accuracy,
            safety, cost optimization, and flexible global delivery models.
          </p>

          <div className="sa-advantage-list">
            {advantages.map((item) => {
              const Icon = item.icon;

              return (
                <div className="sa-advantage-box" key={item.number}>
                  <span className="sa-advantage-number">{item.number}</span>

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
        </div>
      </section>

      {/* FAQ */}
      <section className="sa-faq" id="faq-piping">
        <div className="sa-container">
          <div className="sa-faq-heading">
            <span className="sa-label">FAQ</span>

            <h2>Frequently Asked Questions</h2>

            <p>
              Find answers to common questions about our piping and pipeline
              engineering services.
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
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                    aria-controls={`piping-faq-answer-${index}`}
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
                    id={`piping-faq-answer-${index}`}
                    className={`sa-faq-answer ${isOpen ? "show" : ""}`}
                    aria-hidden={!isOpen}
                  >
                    <div>
                      <p>{faq.answer}</p>
                    </div>
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