"use client";

import React, { useState } from "react";
import Breadcrumbs from "@/app/Components/Breadcrumbs/Breadcrumbs";
import { ShieldCheck, ClipboardCheck, Recycle, Cpu, Plus, Minus } from "lucide-react";
import ProjectsHighlight from "@/app/Components/ProjectsHighlight/ProjectsHighlight";
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

      {/* PROJECTS */}
      <ProjectsHighlight />

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
