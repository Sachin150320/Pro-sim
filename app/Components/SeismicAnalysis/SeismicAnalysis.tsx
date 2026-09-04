"use client";

import React, { useState } from "react";
import Breadcrumbs from "@/app/Components/Breadcrumbs/Breadcrumbs";
import {
  Activity,
  Waves,
  FileCheck2,
  Building2,
  Landmark,
  Factory,
  Wrench,
  Boxes,
  Plus,
  Minus,
} from "lucide-react";
import "./SeismicAnalysis.css";

const services = [
  {
    id: "seismic-analysis",
    title: "Seismic Analysis, Evaluation & Qualification",
    description:
      "Serving as trusted seismic analysis consultants, ProSIM relies on Finite Element Analysis (FEA), multi-physics simulations and region-specific global nuclear standards to certify safety-critical elements. We provide in-depth seismic analysis services tailored to comply with the most stringent international nuclear mandates.",
    points: [
      {
        head: "Nuclear Seismic Qualification & FEA Seismic Analysis",
        body: "Exhaustive FEA-based documentation for standalone and skid-based systems, as well as pumps, piping networks, tanks, pressure vessels, reactors and valves.",
      },
      {
        head: "Floor Response Spectra (FRS) Generation",
        body: "Structural and building models that meet regulatory approval to execute precise seismic FEA and produce accurate FRS across multiple elevations.",
      },
      {
        head: "Shake Table Testing Support",
        body: "End-to-end seismic qualification service outlining boundary conditions, engineering specialized fixtures and jigs, and compiling thorough qualification test reports.",
      },
      {
        head: "Seismic Evaluation & Re-evaluation",
        body: "We modernize existing or legacy SSCs through focused FEA seismic assessments to align with updated safety classifications or changing regulatory benchmarks.",
      },
      {
        head: "Seismic Margin Assessment (SMA)",
        body: "Using advanced FEA techniques, we assess failure probabilities of components and structures during extreme seismic events, adhering to frameworks such as those from the AERB.",
      },
      {
        head: "Extreme Load Analysis",
        body: "Complex simulations covering Air Shock Waves (ASW) and Air Crash (AC) impact scenarios on safety-critical structures.",
      },
    ],
  },
  {
    id: "piping-engineering",
    title: "Piping Engineering Services",
    description:
      "We supply comprehensive piping design, flexibility assessments and seismic qualifications for diverse nuclear packages, delivering top-tier seismic design services both in India and worldwide.",
    points: [
      {
        head: "Piping Layout & Routing",
        body: "Optimizing layouts, creating 2D and 3D piping models, and extracting General Arrangement (GA) and Isometric (ISO) drawings.",
      },
      {
        head: "Pipe Stress & Flexibility Analysis",
        body: "Static and dynamic analyses in accordance with ASME standards to ensure code qualification of bolts, anchor plates, supports and welds.",
      },
      {
        head: "Hydraulic Design",
        body: "Critical fluid dynamics tasks such as temperature drop load distributions, pressure drop evaluation and sizing calculations.",
      },
      {
        head: "Documentation & Data Management",
        body: "Material Take-Off (MTO) preparation and Bill of Quantities (BoQ) extraction with strict P&ID reviews for equipment numbers, duplications, service designations and line numbers.",
      },
      {
        head: "Life Cycle Management",
        body: "Asset management solutions featuring Life Extension (RLE) services, Remaining Life Assessments (RLA) and Fitness-for-Service (FFS) evaluations.",
      },
    ],
  },
  {
    id: "detailed-engineering",
    title: "Detailed & Pre-Bid Engineering",
    description:
      "We assist component manufacturers and EPC contractors throughout the competitive bidding process by offering strategic pre-bid engineering insights aimed at achieving successful nuclear seismic qualification.",
    points: [
      {
        head: "Pre-Bid Engineering Support",
        body: "Strategic pre-bid engineering insights for component manufacturers and EPC contractors throughout the competitive bidding process.",
      },
      {
        head: "Detailed Engineering Deliverables",
        body: "Highly optimized structural configurations, precise sizing calculations and comprehensive process flow diagrams (PFDs).",
      },
      {
        head: "Custom Methodologies & Macros",
        body: "Custom design methodologies, subroutines and macros specifically engineered for baseplates, embedded components and structural anchorages.",
      },
    ],
  },
];

const serviceIcons = [Activity, Waves, FileCheck2];

const heroNav = [
  { title: "Seismic Analysis & Qualification", id: "seismic-analysis" },
  { title: "Piping Engineering", id: "piping-engineering" },
  { title: "Detailed & Pre-Bid Engineering", id: "detailed-engineering" },
  { title: "SSCs Handled", id: "sscs-handled" },
  { title: "Client Ecosystem", id: "client-ecosystem" },
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
      "Rotary equipment (generators, motors, gearboxes, blowers, compressors and pumps), Skid-based Integrated Systems, Dampers, Valves, Custom Design Equipment, Heat Exchangers, Tanks, and Pressure Vessels.",
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
      "Switchyard Packages, Control Panels, Instrument Racks, Battery Stands, Cable Trays, Bus Bar Ducts, Distribution Modules, Low/Medium Voltage Switchgear, Motor Control Centers (MCC), Battery Inverters/Chargers, Transformers, and complete DG Sets featuring Alternators.",
  },
];

const advantages = [
  {
    number: "01",
    title: "Deep Code Competence",
    text: "Authoritative proficiency in international nuclear design standards and codes, such as IEEE, PNAE, RCC-M/RCC-E, and ASME B&PV.",
  },
  {
    number: "02",
    title: "Validated Intellectual Property",
    text: "A proprietary ecosystem of Standard Operating Procedures (SOPs), validation checklists and in-house automation macros that drastically minimizes human error while boosting overall productivity.",
  },
  {
    number: "03",
    title: "Proven Quality & Risk Management",
    text: "A highly refined Project Management Practice (PMP) that integrates with rigorous nuclear Quality Management Systems (QMS) to identify and address anomalies during the earliest project stages.",
  },
  {
    number: "04",
    title: "Global Network Integration",
    text: "Strong ties with premier FEA seismic qualification bodies and the global nuclear regulatory community, backed by historical efforts with the World Nuclear Association (WNA) to rationalize industry standards and codes.",
  },
];

const clientEcosystem = [
  "Private and state-owned Nuclear Power Plant Operators in need of rigorously verified seismic qualification protocols.",
  "Regulatory bodies and Nuclear R&D establishments.",
  "System integrators and global EPC contractors searching for premier FEA seismic consultants.",
  "In-Service Inspection (ISI) and maintenance contractors.",
  "Equipment manufacturers alongside Tier-1, Tier-2 and Tier-3 component vendors requiring extensive FEA seismic qualification data and robust certification services.",
];

const clientIcons = [Building2, Landmark, Factory, Wrench, Boxes];

const projects = [
  {
    tag: "OIL & GAS",
    date: "Duration · 6 Months",
    title: "Fitness-for-Service Assessment of a Pipeline During Lifting Operations",
    description:
      "Fitness-for-Service assessment of a live pipeline affected by Corrosion Under Pipe Support (CUPS), validating structural integrity during a 50 mm lift for UT inspection. Reusable lifting guidelines were developed defining safe criteria for multiple pipe sizes and configurations.",
    image: "/assets/images/project/1.jpg",
  },
  {
    tag: "OIL & GAS",
    date: "Duration · 6 Weeks",
    title: "Pipe Stress Analysis of a 44-inch Incinerator Line",
    description:
      "Static and dynamic pipe stress analysis validating a proposed incinerator piping design modification, enabling the customer to approve and proceed with site modifications while improving incinerator efficiency and minimising the risk of future operational failures.",
    image: "/assets/images/project/2.jpg",
  },
  {
    tag: "RENEWABLE ENERGY",
    date: "Duration · 5 Weeks",
    title: "FEA of a Wind Turbine Generator (WTG) Transformer",
    description:
      "FEA-based structural validation of a WTG transformer under transportation, lifting and extreme-wind acceleration loads. Critical stress regions were identified and the lifting arrangement, tie-down configuration and weld design were optimised for a manufacturing-ready design.",
    image: "/assets/images/project/3.jpg",
  },
  {
    tag: "NUCLEAR",
    date: "Duration · 5 Weeks",
    title: "Seismic Qualification of a 3.2 MW Induction Motor for a CCW Pump",
    description:
      "Equipment qualification for Operating Basis Earthquake (OBE) loading, giving the customer the confidence to release the motor for manufacturing and supply it to a nuclear power plant site — a decision that could not be made without seismic qualification proof.",
    image: "/assets/images/project/4.jpg",
  },
  {
    tag: "WATER",
    date: "Duration · 6 Months",
    title: "Pipe Stress Analysis of a 40 MLD Desalination Plant",
    description:
      "Pipe stress analysis of critical piping systems under operating and environmental loads for a 40 MLD desalination plant, ensuring piping integrity, safety and code compliance to support safe and reliable plant execution.",
    image: "/assets/images/project/5.jpg",
  },
];

const blogPosts = [
  {
    title: "Nuclear Seismic Qualification: FEA vs. Shake Table Testing",
    excerpt:
      "When FEA seismic analysis is sufficient, when physical shake table testing is mandatory, and how the two qualification routes support each other.",
    topics: [
      "FEA-based qualification",
      "Shake table testing support",
      "Qualification test reports",
    ],
    image: "/assets/images/industries/seismic-analysis-and-qualification/1.png",
  },
  {
    title: "Generating Floor Response Spectra Regulators Accept",
    excerpt:
      "Building regulatory-grade structural and building models that produce accurate FRS across every floor elevation.",
    topics: [
      "Regulator-approved models",
      "Multi-elevation FRS",
      "Seismic FEA workflow",
    ],
    image: "/assets/images/industries/seismic-analysis-and-qualification/2.png",
  },
  {
    title: "Seismic Margin Assessment under the AERB Framework",
    excerpt:
      "Estimating the failure probability of SSCs during extreme seismic events using advanced FEA techniques.",
    topics: [
      "Failure probability",
      "Beyond-design-basis events",
      "AERB compliance",
    ],
    image: "/assets/images/industries/seismic-analysis-and-qualification/3.png",
  },
  {
    title: "Seismic Pipe Stress & Flexibility Analysis to ASME",
    excerpt:
      "Static and dynamic analysis that seismically qualifies bolts, anchor plates, supports and welds for nuclear piping packages.",
    topics: [
      "Static & dynamic analysis",
      "Support code qualification",
      "ASME B31 / B&PV",
    ],
    image: "/assets/images/industries/seismic-analysis-and-qualification/4.png",
  },
  {
    title: "Seismic Re-evaluation of Legacy Nuclear SSCs",
    excerpt:
      "Using focused FEA seismic re-assessments to re-qualify ageing systems against revised safety classifications.",
    topics: [
      "Legacy SSC re-qualification",
      "Revised safety classes",
      "Focused FEA re-assessment",
    ],
    image: "/assets/images/industries/seismic-analysis-and-qualification/pipping.jpg",
  },
  {
    title: "Extreme Load Analysis: Air Shock Waves & Air Crash",
    excerpt:
      "Modelling high-impact accidental loads alongside the design-basis earthquake for safety-critical nuclear structures.",
    topics: [
      "ASW simulation",
      "Aircraft impact (AC) analysis",
      "Non-linear seismic FEA",
    ],
    image: "/assets/images/industries/seismic-analysis-and-qualification/1.png",
  },
];

const faqs = [
  {
    question:
      "What specialized nuclear engineering and seismic qualification services does ProSIM offer?",
    answer:
      "ProSIM is a premier global engineering and consultancy partner specializing in end-to-end Nuclear Seismic Qualification. Our core services include Finite Element Analysis (FEA) seismic analysis, structural evaluation, comprehensive piping engineering, Floor Response Spectra (FRS) generation, and life cycle asset management. We provide secure, dependable and code-compliant design support for nuclear Systems, Structures and Components (SSCs) worldwide.",
  },
  {
    question:
      "How does ProSIM support EPC contractors and component manufacturers during the pre-bid and detailed engineering phases?",
    answer:
      "We act as a strategic partner during the competitive bidding process by providing specialized pre-bid engineering insights that mitigate risks and ensure successful seismic qualification. Our detailed engineering deliverables include highly optimized structural configurations, precise sizing calculations, process flow diagrams (PFDs), and custom design macros that streamline procurement and fabrication.",
  },
  {
    question:
      "What international nuclear safety codes and regulatory standards do your seismic design services comply with?",
    answer:
      "Our engineering team possesses deep competence in global nuclear design standards, including ASME B&PV, IEEE, PNAE and RCC-M/RCC-E. We also strictly adhere to regional and international regulatory frameworks mandated by leading entities such as AERB, NPCIL, BARC and ITER, ensuring your assets clear all safety verifications without costly delays.",
  },
  {
    question:
      "Which safety-classified Systems, Structures and Components (SSCs) is ProSIM capable of qualifying?",
    answer:
      "We have profound expertise managing and qualifying Class 1, 2 and 3 safety-classified systems across mechanical systems and skids, RCC and structural steel structures, electrical and C&I packages, and special packages such as reactor internals, steam generators and primary piping packages.",
  },
  {
    question:
      "Do you provide both virtual Finite Element Analysis (FEA) and support for physical shake table testing?",
    answer:
      "Yes. ProSIM delivers exhaustive FEA-based documentation for standalone and skid-based systems. When physical testing is required, we offer end-to-end Shake Table Testing Support, including boundary conditions, specialized testing fixtures and jigs, and thorough qualification test reports to guarantee rigorous regulatory approval.",
  },
  {
    question:
      "How does ProSIM assist nuclear plant operators with the modernization or life extension of legacy assets?",
    answer:
      "We provide comprehensive Life Cycle Management solutions including Remaining Life Assessments (RLA), Fitness-for-Service (FFS) evaluations and Plant Life Extension (RLE). Through focused FEA seismic re-evaluations, we modernize legacy SSCs to align with updated safety classifications and evolving regulatory benchmarks.",
  },
  {
    question:
      "How does your engineering team evaluate nuclear components for extreme loads and accidental impacts?",
    answer:
      "ProSIM conducts highly advanced Extreme Load Analysis to simulate high-impact scenarios such as Air Shock Waves (ASW) and Air Crash (AC) events. We also perform thorough Seismic Margin Assessments (SMA) to determine the failure probabilities of components during extreme seismic activity.",
  },
  {
    question:
      "What comprehensive piping engineering and fluid dynamics services do you provide for nuclear packages?",
    answer:
      "Our scope includes 2D and 3D piping layout optimization, pipe stress and flexibility analysis (static and dynamic), and critical hydraulic design. We also handle strict P&ID reviews, Material Take-Off (MTO) preparation and Bill of Quantities (BoQ) extraction to ensure accurate, cost-effective procurement.",
  },
  {
    question:
      "How does ProSIM ensure quality assurance, mitigate risks and prevent errors during complex nuclear projects?",
    answer:
      "We use a highly refined Project Management Practice (PMP) that integrates with rigorous nuclear Quality Management Systems (QMS). We also apply our proprietary ecosystem of validated IP — SOPs, validation checklists and in-house automation macros — to minimize human error, boost productivity and identify anomalies at the earliest project stages.",
  },
  {
    question:
      "Who are your typical clients, and how can we partner with ProSIM for an upcoming nuclear bid or project?",
    answer:
      "Our clients include private and state-owned Nuclear Power Plant Operators, global EPC contractors, Tier-1/2/3 equipment manufacturers, system integrators and regulatory bodies. If you require rigorous FEA seismic qualification data, strategic pre-bid support or robust certification services, our team is ready to collaborate.",
  },
];

export default function SeismicAnalysis() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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
              <span>Seismic Analysis </span>  
            </h1>
            <h1>
                & Qualification 
            </h1>

            <p>
              ProSIM is a premier provider of engineering and consultancy
              solutions for the nuclear power industry. As a seasoned seismic
              design consultant, we team up with system integrators, equipment
              manufacturers and EPC contractors worldwide to deliver secure,
              dependable and code-compliant design and operational support for
              nuclear Systems, Structures and Components (SSCs).
            </p>

            {/* <p>
              We work intimately with leading entities such as NPCIL, BARC,
              IGCAR, NRB, AERB, ITER India and ITER I/O, alongside global Tier-1
              vendors and major EPC contractors &mdash; providing exceptional
              engineering and safety validations that guarantee rigorous Nuclear
              Seismic Qualification.
            </p> */}
          </div>

          <div className="sa-hero-media">
            <figure className="sa-hero-media-main">
              <img
                src="/assets/images/industries/seismic-analysis-and-qualification/pipping.jpg"
                alt="Nuclear piping — seismic analysis and qualification"
                loading="eager"
              />
              <figcaption>Seismic Qualification</figcaption>
            </figure>
            <figure className="sa-hero-media-inset">
              <img
                src="/assets/images/industries/seismic-analysis-and-qualification/1.png"
                alt="FEA seismic model detail"
                loading="lazy"
              />
            </figure>
          </div>
        </div>

        <div className="sa-hero-inner">
          <div className="sa-hero-nav">
            {heroNav.map((item) => (
              <a href={`#${item.id}`} className="sa-hero-nav-button" key={item.id}>
                {item.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="sa-services">
        <div className="sa-container">
          <section className="sa-intro">
            <span className="sa-label">OUR EXPERTISE</span>

            <h2>Seismic Analysis &amp; Qualification Services</h2>

            <p>
              Our multidisciplinary capabilities combine advanced FEA, seismic
              analysis, piping engineering and nuclear safety expertise to
              support critical nuclear projects across their complete lifecycle.
            </p>
          </section>

          <div className="sa-service-list">
            {services.map((service, index) => (
              <article className="sa-service-box" id={service.id} key={service.id}>
                <div className="sa-service-top">
                  <div className="sa-service-icon">
                    {React.createElement(serviceIcons[index], {
                      size: 25,
                      strokeWidth: 1.8,
                    })}
                  </div>

                  <h2>{service.title}</h2>
                </div>

                <p>{service.description}</p>

                <div className="sa-point-grid">
                  {service.points.map((point, i) => (
                    <div className="sa-point-box" key={point.head}>
                      <span className="sa-point-num">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div className="sa-point-body">
                        <h4>{point.head}</h4>
                        <p>{point.body}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {index === 0 && (
                  <div className="sa-gallery">
                    <div className="sa-gallery-card">
                      <img
                        src="/assets/images/industries/seismic-analysis-and-qualification/1.png"
                        alt="Seismic FEA analysis"
                      />
                    </div>
                    <div className="sa-gallery-card">
                      <img
                        src="/assets/images/industries/seismic-analysis-and-qualification/2.png"
                        alt="Shake table testing"
                      />
                    </div>
                  </div>
                )}

                {index === 1 && (
                  <div className="sa-gallery">
                    <div className="sa-gallery-card">
                      <img
                        src="/assets/images/industries/seismic-analysis-and-qualification/3.png"
                        alt="Piping engineering"
                      />
                    </div>
                    <div className="sa-gallery-card">
                      <img
                        src="/assets/images/industries/seismic-analysis-and-qualification/4.png"
                        alt="Pipe stress analysis"
                      />
                    </div>
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SSC TABLE */}
      <section className="sa-ssc" id="sscs-handled">
        <div className="sa-container">
          <span className="sa-label">SYSTEMS &amp; COMPONENTS</span>

          <h2>Systems, Structures &amp; Components (SSCs) Handled</h2>

          <p className="sa-section-intro">
            ProSIM brings profound industry expertise to managing Class 1, 2 and
            3 safety-classified systems, supplying meticulous nuclear seismic
            analysis across multiple critical domains.
          </p>

          <div className="sa-table-wrapper">
            <table className="sa-ssc-table">
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Nuclear Packages &amp; Equipment Covered</th>
                </tr>
              </thead>
              <tbody>
                {sscData.map((item) => (
                  <tr key={item.category}>
                    <td>{item.category}</td>
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
            expertise, validated engineering processes, quality management and a
            strong global engineering network.
          </p>

          <div className="sa-adv-grid">
            {advantages.map((item) => (
              <div className="sa-adv-box" key={item.number}>
                <span className="sa-adv-number">{item.number}</span>
                <div className="sa-adv-body">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENT ECOSYSTEM */}
      <section className="sa-clients" id="client-ecosystem">
        <div className="sa-container">
          <div className="sa-ind-head">
            <span className="sa-label">TARGET CLIENT ECOSYSTEM</span>

            <h2>Target Client Ecosystem</h2>

            <p>
              Operating as elite FEA seismic qualification consultants, we
              partner with stakeholders across the entire global nuclear supply
              chain to ensure flawless nuclear seismic qualification.
            </p>
          </div>

          <div className="sa-ind-layout">
            <div className="sa-ind-main">
              <div className="sa-ind-grid">
                {clientEcosystem.map((client, index) => {
                  const Icon = clientIcons[index];

                  return (
                    <div className="sa-ind-box" key={client}>
                      <span className="sa-ind-icon">
                        <Icon size={20} strokeWidth={1.8} />
                      </span>
                      <strong>{client}</strong>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="sa-ind-media">
              <figure className="sa-ind-photo">
                <img
                  src="/assets\images/industries/seismic-analysis-and-qualification/seismic.png"
                  alt="Nuclear power infrastructure"
                  loading="lazy"
                />
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="sa-updates" id="projects">
        <div className="sa-container">
          <span className="sa-label">Projects</span>
          <h2>Nuclear Seismic Qualification Projects</h2>

          <div className="sa-updates-grid">
            {projects.map((item) => (
              <div className="sa-update-card" key={item.title}>
                <div className="sa-update-image">
                  <span className="sa-update-tag">{item.tag}</span>
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="sa-update-content">
                  <span className="sa-update-date">{item.date}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <a href="#faq-nuclear" className="sa-update-link">
                    Read More &rarr;
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="sa-faq" id="faq-nuclear">
        <div className="sa-container">
          <div className="sa-faq-heading">
            <span className="sa-label">FAQ&apos;s</span>

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
                    onClick={() => setOpenFaq(isOpen ? null : index)}
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

                  <div className={`sa-faq-answer ${isOpen ? "show" : ""}`}>
                    {faq.answer && <p>{faq.answer}</p>}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* BLOGS */}
      <section className="sa-blogs" id="blogs">
        <div className="sa-container">
          <span className="sa-label">Blog</span>
          <h2>Insights from Our Seismic Qualification Desk</h2>
          <p className="sa-section-intro">
            Technical explainers and case notes on nuclear seismic analysis,
            FEA seismic qualification, Floor Response Spectra, shake table
            testing, seismic pipe stress and extreme load evaluation.
          </p>
        </div>

        <div className="sa-blogs-marquee">
          <div className="sa-blogs-track">
            {[...blogPosts, ...blogPosts].map((post, index) => (
              <article
                className="sa-blog-card"
                key={index}
                aria-hidden={index >= blogPosts.length}
              >
                <div className="sa-blog-image">
                  <img src={post.image} alt={post.title} loading="lazy" />
                </div>
                <div className="sa-blog-body">
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <ul>
                    {post.topics.map((topic) => (
                      <li key={topic}>{topic}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
