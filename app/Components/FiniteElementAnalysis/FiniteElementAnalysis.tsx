"use client";

import React, { useState } from "react";
import Breadcrumbs from "@/app/Components/Breadcrumbs/Breadcrumbs";
import {
  Gauge,
  Cpu,
  Server,
  UserCheck,
  Infinity as InfinityIcon,
  Zap,
  Plane,
  Car,
  CircuitBoard,
  Plus,
  Minus,
} from "lucide-react";
import ProjectsHighlight from "@/app/Components/ProjectsHighlight/ProjectsHighlight";
import "./FiniteElementAnalysis.css";

const IMG = "/assets/images/industries/finite-element-analysis";

type Point = { head?: string; body: string };

const services: {
  id: string;
  title: string;
  description: string;
  points: Point[];
  images?: { src: string; alt: string }[];
}[] = [
  {
    id: "simulation-services",
    title: "Simulation-Driven Engineering Services",
    description:
      "ProSIM provides sophisticated multi-physics simulations alongside expert finite element analysis, turning intricate data into practical insights that drive smart design choices. The rigorous evaluation of simulation data through our specialized services allows us to facilitate the following:",
    points: [
      {
        head: "Design Optimization",
        body: "Streamlining products through parametric, topology, shape, and sizing refinements.",
      },
      {
        head: "Seismic Evaluation & Qualification",
        body: "Ensuring designs meet the strict requirements of international industry standards and safety codes.",
      },
      {
        head: "Structural Integrity Assessment",
        body: "Gauging a product's factor of safety, stiffness, and overall strength when subjected to real-world operating environments.",
      },
      {
        head: "Remaining Life Assessment & Extension (RLA/RLE)",
        body: "Conducting comprehensive asset longevity evaluations and Fitness-for-Service (FFS) analyses.",
      },
      {
        head: "Component & System Life Assessment",
        body: "Predicting long-term durability and evaluating potential fatigue life.",
      },
      {
        head: "Failure Analysis",
        body: "Identifying the root causes of breakdowns and offering actionable, corrective design modifications via our dedicated consulting team.",
      },
      {
        head: "Localization & Indigenization",
        body: "Modifying international product blueprints to comply with regional manufacturing rules and regulatory demands.",
      },
    ],
    images: [
      { src: `${IMG}/1.png`, alt: "Finite element analysis stress model" },
      { src: `${IMG}/2.png`, alt: "Multi-physics simulation result" },
    ],
  },
  {
    id: "technical-capabilities",
    title: "Core Technical Capabilities",
    description:
      "Our engineers rely on a powerful combination of leading commercial platforms and versatile open-source programs to execute premium computer-aided engineering across diverse fields. We possess deep technical proficiency in Code_Aster, Radioss, OptiStruct, Nastran, Abaqus, and ANSYS, which allows us to perform:",
    points: [
      {
        head: "Linear Static Analysis",
        body: "Verifying design adequacy and confirming that stress levels remain within allowable limits.",
      },
      {
        head: "Dynamic Analysis",
        body: "Investigating transient, harmonic, and modal dynamic behaviors.",
      },
      {
        head: "Frequency & Time Domain Analysis",
        body: "Executing response spectra, frequency response, and time-series evaluations.",
      },
      {
        head: "Non-Linear Analysis",
        body: "Tackling complicated contact mechanics, significant geometric deformations, and material non-linearities.",
      },
      {
        head: "Coupled Multi-Physics",
        body: "Modeling complex phenomena such as fluid-structure interactions and thermo-mechanical effects.",
      },
    ],
    images: [
      { src: `${IMG}/3.png`, alt: "Non-linear FEA contact analysis" },
      { src: `${IMG}/4.png`, alt: "Modal and dynamic analysis result" },
    ],
  },
  {
    id: "offshore-cae",
    title: "Offshore CAE Services — Bangalore Delivery Center",
    description:
      "Operating out of our specialized engineering hubs as a top-tier provider in India, we manage complete simulation lifecycles for clients around the world. Our Bangalore-based delivery center acts as a scalable, dependable resource for localized or offshore engineering support. When you outsource your finite element workflows to us, the process includes:",
    points: [
      {
        head: "Pre-Processing",
        body: "Detailed finite element modeling, meticulous meshing, and geometric cleanup using industry staples such as AutoCAD, CATIA, Solidworks, and Hypermesh — with dedicated Hypermesh capabilities for an incredibly accurate model configuration.",
      },
      {
        head: "Quality Assurance",
        body: "Rigorous oversight of quality metrics, mesh density, and element sizing to perfectly match the unique demands of each analysis.",
      },
      {
        head: "Analysis Setup",
        body: "Carefully configuring boundary conditions, validating mass balances, and establishing proper deck settings.",
      },
      {
        head: "Solver Execution & Post-Processing",
        body: "Processing the simulation solvers and interpreting the resulting data to yield strategic, actionable advice.",
      },
    ],
  },
  {
    id: "onsite-consulting",
    title: "Onsite CAE Consulting & Placement",
    description:
      "Our onsite placement program brings highly trained ProSIM professionals directly into your workspace. Functioning as resident consultants or application engineers, our staff blends into your existing operations and can even engage face-to-face with your clientele. After rigorous cross-training in the necessary domain applications, we offer highly targeted onsite assistance in:",
    points: [
      {
        head: "FEA/CAE Solvers",
        body: "Onsite specialists equipped to handle specific solver platforms, including comprehensive Radioss, OptiStruct, and ANSYS services right at your facility.",
      },
      {
        head: "CAD Tools",
        body: "AutoCAD, CATIA, and Solidworks.",
      },
      {
        head: "Piping Engineering",
        body: "CAESAR II and PEPS.",
      },
    ],
  },
  {
    id: "dedicated-outsourcing",
    title: "Dedicated CAE Outsourcing",
    description:
      "By establishing Master Service Agreements (MSAs), clients guarantee steady, long-term engineering bandwidth. ProSIM collaborates with major international corporations, supplying focused teams to handle continuous project demands.",
    points: [
      {
        head: "Master Service Agreements",
        body: "Long-term MSAs that lock in predictable engineering capacity for continuous project pipelines.",
      },
      {
        head: "Dedicated Solver Partnerships",
        body: "An exclusive ANSYS partner, or broad-spectrum simulation outsourcing — we adapt our scale to your needs.",
      },
      {
        head: "Continuous Workload Management",
        body: "Ongoing multi-physics evaluations, preprocessing tasks, and meshing requirements handled as a managed service.",
      },
    ],
  },
];

const serviceIcons = [Gauge, Cpu, Server, UserCheck, InfinityIcon];

const heroNav = [
  { title: "Technical Capabilities", id: "technical-capabilities" },
  { title: "Codes & Standards", id: "codes-standards" },
  { title: "Offshore CAE Services", id: "offshore-cae" },
  { title: "Onsite Consulting", id: "onsite-consulting" },
  { title: "Industry Sectors Served", id: "industries" },
];

const codes = [
  { area: "ASME", detail: "B&PV — Boiler and Pressure Vessel Code." },
  { area: "API", detail: "American Petroleum Institute standards." },
  { area: "EN / ISO", detail: "European and International Standards." },
  { area: "IEEE", detail: "Institute of Electrical and Electronics Engineers." },
  { area: "DNVGL", detail: "Maritime and Offshore Standards." },
];

const industries = [
  "Energy — nuclear, wind, offshore, oil & gas, and thermal power initiatives.",
  "Aerospace & Defence — impact tests, dynamic qualifications, and structural weight minimization.",
  "Automotive — component weight reduction with NVH, durability, and crash-safety analysis.",
  "Electrical & Electronics — structural dependability, drop simulations, and thermal management.",
];

const industryIcons = [Zap, Plane, Car, CircuitBoard];


const blogPosts = [
  {
    title: "Linear Static Isn't Enough: When to Go Non-Linear",
    excerpt:
      "The signals — large deflections, contact, plasticity — that mean a linear model is no longer telling the truth.",
    topics: ["Geometric non-linearity", "Contact mechanics", "Material plasticity"],
    image: `${IMG}/3.png`,
  },
  {
    title: "Topology vs. Shape vs. Sizing Optimization",
    excerpt:
      "Which design-optimization method to reach for, and how they combine to cut weight without losing stiffness.",
    topics: ["Parametric studies", "Topology optimization", "Sizing refinement"],
    image: `${IMG}/4.png`,
  },
  {
    title: "Response Spectra & Time-History: Seismic FEA Explained",
    excerpt:
      "Frequency- and time-domain routes to seismic qualification and when each is required by code.",
    topics: ["Modal analysis", "Response spectrum", "Time-history"],
    image: `${IMG}/1.png`,
  },
  {
    title: "Fitness-for-Service & Remaining Life with FEA",
    excerpt:
      "Using creep, fatigue and fracture models to justify safe life extension of ageing assets.",
    topics: ["RLA / RLE", "Creep-fatigue", "Fracture assessment"],
    image: `${IMG}/2.png`,
  },
  {
    title: "Meshing for Accuracy: Density, Element Size & QA",
    excerpt:
      "How mesh quality metrics and convergence studies keep results defensible.",
    topics: ["Mesh convergence", "Element quality", "QA workflow"],
    image: `${IMG}/3.png`,
  },
  {
    title: "Coupled Multi-Physics: Thermo-Mechanical & FSI",
    excerpt:
      "Modelling the interaction between fluids, temperature and structure in a single solution.",
    topics: ["Fluid-structure interaction", "Thermo-mechanical", "Co-simulation"],
    image: `${IMG}/4.png`,
  },
];

type Faq = { question: string; answer: string };

const faqs: Faq[] = [
  {
    question: "What Finite Element Analysis (FEA) and CAE simulation services does ProSIM offer?",
    answer:
      "ProSIM provides a comprehensive suite of computer-aided engineering (CAE) and multi-physics simulation services designed to turn intricate data into practical business insights. Our core offerings include linear and non-linear analysis, dynamic and frequency domain analysis, design optimization, structural integrity assessments, and coupled multi-physics modeling. We act as your dedicated engineering advisors to help you solve complex design challenges, improve product reliability, and accelerate time-to-market.",
  },
  {
    question: "What engagement models are available for outsourcing CAE and FEA projects?",
    answer:
      "We offer highly adaptable partnership structures tailored to fit your specific operational and budgetary needs. You can choose from Offshore CAE Services managed through our dedicated Bangalore delivery center, Onsite CAE Consulting where we deploy resident engineers directly to your facility, or Dedicated CAE Outsourcing via Master Service Agreements (MSAs) to guarantee steady, long-term engineering bandwidth for continuous project demands.",
  },
  {
    question: "How do you ensure our engineering designs comply with global industry standards?",
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
    question: "Can ProSIM assist with failure analysis and root cause identification for broken components?",
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
    question: "What are the business advantages of utilizing ProSIM's offshore CAE delivery center in India?",
    answer:
      "Our Bangalore-based delivery center operates as a highly scalable, dependable, and cost-effective hub for complete simulation lifecycles. By outsourcing your finite element workflows to us, you gain access to top-tier engineering talent managing everything from detailed pre-processing, geometric cleanup, and rigorous quality assurance to solver execution and actionable post-processing insights — all seamlessly integrated into your global supply chain.",
  },
  {
    question: "Are you able to provide onsite CAE consulting and deploy resident FEA engineers at our facility?",
    answer:
      "Yes. Through our onsite placement program, we can seamlessly integrate highly trained ProSIM professionals — such as application engineers or resident consultants — directly into your workspace. Our personnel are rigorously cross-trained in specific domains and can manage specialized FEA/CAE solvers (like ANSYS, Radioss, and OptiStruct) and CAD tools locally, engaging face-to-face with your team and clientele.",
  },
  {
    question: "Which industry sectors do you support with structural integrity and multi-physics simulations?",
    answer:
      "Our comprehensive simulation offerings are backed by deep, sector-specific knowledge supporting high-stakes global industries. We routinely partner with executives and engineering teams in the Energy sector (nuclear, wind, offshore, oil & gas, thermal), Aerospace & Defence (impact tests, weight minimization), Automotive (NVH, crash safety, durability), and Electrical & Electronics (thermal management, drop simulations).",
  },
  {
    question: "Which commercial simulation software platforms and CAD tools does your engineering team utilize?",
    answer:
      "To ensure seamless integration with your existing engineering workflows, our professionals rely on a powerful combination of leading commercial platforms and versatile open-source programs. Our deep technical proficiency covers ANSYS, Abaqus, Nastran, OptiStruct, Radioss, and Code_Aster for analysis, alongside AutoCAD, CATIA, Solidworks, and Hypermesh for geometric cleanup and precise model configuration.",
  },
];

export default function FiniteElementAnalysis() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="seismic-page">

      {/* PROJECTS */}
      <ProjectsHighlight />

      {/* FAQ */}
      <section className="sa-faq" id="faq-fea-cae">
        <div className="sa-container">
          <div className="sa-faq-heading">
            <span className="sa-label">FAQ&apos;s</span>

            <h2>FEA &amp; CAE Simulation FAQs</h2>
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

      {/* BLOGS */}
      <section className="sa-blogs" id="blogs">
        <div className="sa-container">
          <span className="sa-label">Blog</span>
          <h2>Insights from Our Simulation Desk</h2>
          <p className="sa-section-intro">
            Technical explainers and case notes on non-linear FEA, design
            optimization, seismic simulation, remaining-life assessment, meshing
            and coupled multi-physics.
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
