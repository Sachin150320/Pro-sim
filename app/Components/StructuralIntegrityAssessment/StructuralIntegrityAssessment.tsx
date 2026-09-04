"use client";

import React, { useState } from "react";
import Breadcrumbs from "@/app/Components/Breadcrumbs/Breadcrumbs";
import { ShieldCheck, ClipboardCheck, Recycle, Cpu, Plus, Minus } from "lucide-react";
import "./StructuralIntegrityAssessment.css";

const IMG = "/assets/images/industries/structural-integrity-assessments";

type Point = { head?: string; body: string };

const services: {
  id: string;
  title: string;
  description: string;
  points: Point[];
  images?: { src: string; alt: string }[];
}[] = [
  {
    id: "ffs-studies",
    title: "Fitness for Service (FFS) Studies",
    description:
      "We deliver sophisticated Level-3 FFS assessments to thoroughly analyze the structural soundness of aging or degraded machinery. A well-executed fitness for service analysis identifies permissible stress thresholds and confirms overall structural stability under a variety of load conditions mandated by industry standards. Our experts perform in-depth FFS evaluations — particularly Level-3 API 579 analyses for essential infrastructure — that empower facility operators to make confident, data-backed decisions for power plants, oil and gas assets, and complex piping.",
    points: [
      {
        head: "Specializations",
        body: "Power generation components, oil and gas infrastructure, and Level-3 FFS for complex piping networks, stationary machinery, and static equipment.",
      },
      {
        head: "Standards Followed",
        body: "ASME Boiler and Pressure Vessel Code (B&PV), API 579, alongside other relevant international frameworks.",
      },
    ],
    images: [
      { src: `${IMG}/1.png`, alt: "Level-3 Fitness for Service assessment model" },
      { src: `${IMG}/2.png`, alt: "Structural soundness evaluation" },
    ],
  },
  {
    id: "rla-rle",
    title: "Remaining Life Assessment (RLA) & Extension (RLE)",
    description:
      "ProSIM stands at the forefront of the industry when it comes to precise Remaining Life Assessment (RLA) solutions, with a strong focus on high-temperature, high-pressure piping systems used in oil, gas, and power generation. We provide customized consulting services featuring targeted RLA programs for power plant piping and broader piping system evaluations, plus life extension advisory that yields practical recommendations fully compliant with regulatory codes for both onshore and offshore facilities.",
    points: [
      {
        head: "Data-Driven Insights",
        body: "Our approach to assessing structural integrity seamlessly integrates physical inspection findings with stringent code evaluations (such as DNVGL, IS, and ASME B31.2/B31.3) and robust Finite Element Analysis (FEA).",
      },
      {
        head: "Section Strength Evaluation",
        body: "By carefully accounting for the deteriorating impacts of pitting, erosion, and corrosion, we definitively determine the remaining stiffness and strength of specific asset sections.",
      },
    ],
    images: [
      { src: `${IMG}/3.png`, alt: "Remaining life assessment of high-temperature piping" },
      { src: `${IMG}/4.png`, alt: "Section strength evaluation model" },
    ],
  },
  {
    id: "engineering-judgments",
    title: "Engineering Judgments: Repair, Reuse, Retire",
    description:
      "We offer conclusive engineering verdicts and detailed Engineering Critical Analyses (ECA) to steer vital facility management choices. When equipment exhibits signs of wear or structural damage, our rigorous FFS assessments provide clear, practical guidance on the best path forward.",
    points: [
      {
        head: "Repair",
        body: "Safely repair or alter the affected equipment.",
      },
      {
        head: "Reuse",
        body: "Reuse the component and safely prolong its working life through ongoing FFS monitoring.",
      },
      {
        head: "Retire",
        body: "Retire or completely replace the asset to avoid catastrophic failures, guided by the precise conclusions of our assessments.",
      },
    ],
  },
  {
    id: "technical-expertise",
    title: "Technical Expertise & Methodologies",
    description:
      "Our seasoned team leads and project managers apply the latest engineering techniques to resolve intricate structural issues.",
    points: [
      {
        head: "Advanced Simulations",
        body: "Extensive proficiency in multi-physics modeling, Computational Fluid Dynamics (CFD), and non-linear Finite Element Analysis (FEA) to bolster any fitness for service investigation.",
      },
      {
        head: "Advanced FEA Modeling",
        body: "FEA sub-modeling techniques that flawlessly integrate 1D pipe elements alongside intricate 3D models to achieve exceptionally precise stress evaluations during structural assessments.",
      },
      {
        head: "Materials & Damage Modeling",
        body: "A profound grasp of material degradation processes, including crack propagation, creep, fatigue, and the complex interaction between creep and fatigue.",
      },
      {
        head: "Digital Transformation",
        body: "Guiding clients in upgrading their asset management strategies by integrating AI/ML Digital Twins, Cloud computing, and the Industrial Internet of Things (IIoT).",
      },
    ],
  },
];

const serviceIcons = [ShieldCheck, ClipboardCheck, Recycle, Cpu];

const heroNav = [
  { title: "Fitness for Service", id: "ffs-studies" },
  { title: "Life Assessment (RLA)", id: "rla-rle" },
  { title: "Engineering Judgments", id: "engineering-judgments" },
  { title: "Expertise & Tech", id: "technical-expertise" },
  { title: "Projects", id: "projects" },
];

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
    title: "What a Level-3 API 579 FFS Assessment Actually Involves",
    excerpt:
      "When standard inspections aren't enough and a full non-linear, data-driven analysis is required.",
    topics: ["Permissible stress thresholds", "Load-case coverage", "API 579 Level-3"],
    image: `${IMG}/1.png`,
  },
  {
    title: "Remaining Life Assessment for High-Energy Piping",
    excerpt:
      "Combining inspection findings, code checks and FEA to safely extend the life of ageing systems.",
    topics: ["Creep-fatigue", "ASME B31 checks", "Life extension advisory"],
    image: `${IMG}/2.png`,
  },
  {
    title: "Pitting, Erosion & Corrosion: Sizing Residual Strength",
    excerpt:
      "How localized metal loss is translated into remaining stiffness and strength for a section.",
    topics: ["Metal-loss assessment", "Residual strength", "Section evaluation"],
    image: `${IMG}/3.png`,
  },
  {
    title: "Repair, Reuse or Retire? Making the ECA Call",
    excerpt:
      "Turning assessment conclusions into a defensible facility-management decision.",
    topics: ["Engineering Critical Analysis", "FFS monitoring", "Risk-based retirement"],
    image: `${IMG}/4.png`,
  },
  {
    title: "FEA Sub-Modeling: 1D Pipe Elements Meet 3D Detail",
    excerpt:
      "A precise way to resolve peak stresses at junctions without meshing the whole system in 3D.",
    topics: ["Sub-model boundary conditions", "Peak-stress resolution", "Piping integrity"],
    image: `${IMG}/1.png`,
  },
  {
    title: "Digital Twins & IIoT for Structural Integrity",
    excerpt:
      "Upgrading asset management with AI/ML, cloud and connected sensors for real-time health tracking.",
    topics: ["AI/ML digital twins", "IIoT sensors", "Predictive integrity"],
    image: `${IMG}/2.png`,
  },
];

type Faq = { question: string; answer: string };

const faqs: Faq[] = [
  {
    question:
      "How can ProSIM's structural integrity assessments help prevent unplanned outages and reduce operating costs?",
    answer:
      "By proactively evaluating the health of your heavy machinery and processing facilities, we identify potential failures before they happen. Our structural integrity assessments help you maintain secure, dependable operations, lower operational risks, and significantly boost equipment uptime, ultimately saving your facility from the massive costs associated with unplanned downtime and catastrophic failures.",
  },
  {
    question: "What is a Level-3 Fitness for Service (FFS) assessment, and when does my facility need one?",
    answer:
      "A Level-3 Fitness for Service (FFS) assessment is a highly sophisticated, data-driven analysis used to evaluate the structural soundness of aging or degraded machinery. You need this assessment when standard inspections reveal wear, and you require precise, data-backed engineering intelligence to determine permissible stress thresholds and confirm overall structural stability under various load conditions.",
  },
  {
    question:
      "How do your Remaining Life Assessment (RLA) services extend the lifespan of our aging oil, gas, and power generation assets?",
    answer:
      "As industrial infrastructure matures, replacing equipment prematurely can be a massive capital expense. Our RLA services evaluate high-temperature, high-pressure piping systems and other critical assets to accurately determine their remnant life. We provide actionable, customized life extension advisory services that allow operators to safely maximize their equipment's lifespan while fully complying with regulatory codes.",
  },
  {
    question:
      "After an equipment evaluation, how do you help us decide whether to repair, reuse, or retire our assets?",
    answer:
      "We don't just provide data; we provide conclusive engineering verdicts through detailed Engineering Critical Analyses (ECA). When your equipment shows signs of structural damage, we give clear, practical guidance so you can confidently choose to safely repair the equipment, prolong its working life through ongoing FFS monitoring, or safely retire it to avoid failure.",
  },
  {
    question:
      "Which international safety standards and industry regulations do your structural health evaluations comply with?",
    answer:
      "Strict adherence to industry regulations is foundational to our services. Our structural integrity and remnant life studies seamlessly integrate physical inspection findings with stringent code evaluations, including the ASME Boiler and Pressure Vessel Code (B&PV), API 579, DNVGL, IS, and ASME B31.2/B31.3 frameworks.",
  },
  {
    question: "What types of industries and heavy infrastructure do you specialize in assessing?",
    answer:
      "We tailor our structural health evaluations specifically for heavy machinery, processing facilities, and the broader energy industry. Our core specializations include offshore facilities, oil and gas infrastructure, thermal and nuclear power generation components, complex piping networks, stationary machinery, and static equipment.",
  },
  {
    question: "How does ProSIM incorporate Digital Twins and AI into modern asset management strategies?",
    answer:
      "To help our clients future-proof their operations, we are leading the digital transformation in asset management. We integrate Artificial Intelligence and Machine Learning (AI/ML) Digital Twins, Cloud computing, and the Industrial Internet of Things (IIoT) to upgrade your monitoring capabilities, allowing for smarter, real-time tracking of structural integrity.",
  },
  {
    question:
      "What advanced engineering techniques do you use to evaluate complex structural damage like corrosion, creep, and fatigue?",
    answer:
      "Our seasoned project managers and engineers utilize cutting-edge computational methods to understand material degradation. This includes advanced multi-physics modeling, Computational Fluid Dynamics (CFD), and non-linear Finite Element Analysis (FEA). By accounting for the impacts of pitting, erosion, crack propagation, and creep-fatigue interaction, we can definitively determine the remaining strength of your assets.",
  },
  {
    question: "Can you evaluate complex, high-pressure piping networks for both onshore and offshore facilities?",
    answer:
      "Yes. We are highly skilled in conducting targeted RLA programs and Level-3 FFS for complex piping networks across both onshore and offshore environments. Our engineers utilize advanced FEA sub-modeling techniques — flawlessly integrating 1D pipe elements with intricate 3D models — to achieve exceptionally precise stress evaluations for piping systems.",
  },
  {
    question:
      "Why should facility operators and project managers choose ProSIM as their Remaining Life Assessment (RLA) specialists?",
    answer:
      "ProSIM stands at the forefront of the industry by combining cutting-edge computational methods with profound materials science knowledge. We partner with energy sector owners not just to run tests, but to streamline asset management, boost productivity, and maximize ROI. We deliver top-tier engineering judgments that empower executives and procurement teams to make confident, safe, and highly cost-effective lifecycle decisions.",
  },
];

export default function StructuralIntegrityAssessment() {
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
              <span>RLA / RLE</span> &amp; Fitness-for-Service (FFS).
            </h1>

            <p>
              ProSIM partners with energy sector owners and operators to
              streamline asset management, boost productivity, and get the most
              out of their infrastructure. We help clients maintain secure,
              dependable operations while actively lowering risks, boosting
              equipment uptime, and preventing expensive unplanned outages.
            </p>

            {/* <p>
              By combining cutting-edge computational methods, profound materials
              science knowledge, and strict adherence to industry regulations, we
              provide thorough structural health evaluations for heavy machinery,
              processing facilities and the broader energy industry &mdash;
              offshore, oil and gas, thermal and nuclear.
            </p> */}
          </div>

          <div className="sa-hero-media">
            <figure className="sa-hero-media-main">
              <img
                src={`${IMG}/1.png`}
                alt="Structural integrity assessment — Fitness for Service model"
                loading="eager"
              />
              <figcaption>Structural Integrity</figcaption>
            </figure>
            <figure className="sa-hero-media-inset">
              <img
                src={`${IMG}/3.png`}
                alt="Remaining life assessment detail"
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

            <h2>Safety Across the Entire Asset Lifecycle</h2>

            <p>
              As top-tier Remaining Life Assessment (RLA) specialists, we deliver
              targeted structural integrity analytics and comprehensive
              evaluations &mdash; from Level-3 FFS studies and remnant life
              assessment to conclusive repair-reuse-retire engineering judgments.
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
                    <div className="sa-point-box" key={point.head ?? point.body}>
                      <span className="sa-point-num">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div className="sa-point-body">
                        {point.head && <h4>{point.head}</h4>}
                        <p>{point.body}</p>
                      </div>
                    </div>
                  ))}
                </div>

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
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="sa-updates" id="projects">
        <div className="sa-container">
          <span className="sa-label">Projects</span>
          <h2>Structural Integrity &amp; RLA Projects</h2>

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
                  <a href="#faq-structural-rla" className="sa-update-link">
                    Read More &rarr;
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="sa-faq" id="faq-structural-rla">
        <div className="sa-container">
          <div className="sa-faq-heading">
            <span className="sa-label">FAQ&apos;s</span>

            <h2>Structural Integrity &amp; RLA FAQs</h2>
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
          <h2>Insights from Our Asset Integrity Desk</h2>
          <p className="sa-section-intro">
            Technical explainers and case notes on Level-3 FFS, remaining life
            assessment, metal-loss evaluation, ECA decisions, FEA sub-modelling
            and digital twins.
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
