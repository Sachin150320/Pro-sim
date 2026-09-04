"use client";

import React, { useState } from "react";
import Breadcrumbs from "@/app/Components/Breadcrumbs/Breadcrumbs";
import { Box, Route, Combine, Layers, Plus, Minus } from "lucide-react";
import "./ThreeDPlantModelling.css";

const IMG = "/assets/images/industries/3D-plant-modelling-services";

type Point = { head?: string; body: string };

const services: {
  id: string;
  title: string;
  description: string;
  points: Point[];
  images?: { src: string; alt: string }[];
}[] = [
  {
    id: "equipment-structural",
    title: "Intelligent Equipment & Structural Modelling",
    description:
      "Using sophisticated 3D design techniques, we translate vendor data sheets and initial layout concepts into highly exact models of process assets and their supporting framework. Our approach seamlessly merges practical space management with complex structural demands to deliver logical, well-organized plant layouts.",
    points: [
      {
        head: "Specializations",
        body: "We focus on critical elements such as nuclear containment structures, power generation components, and oil and gas facilities, alongside rotating and static equipment, secondary steelwork, pipe racks, civil foundations, walkways, and access platforms.",
      },
      {
        head: "Sector Compliance",
        body: "Our expert consultants design tailored layouts that adhere strictly to the hazardous zone classifications, spatial limitations, and specific regulatory standards required by refineries, thermal power plants, and nuclear installations.",
      },
    ],
    images: [
      { src: `${IMG}/1.png`, alt: "3D equipment and structural model" },
      { src: `${IMG}/2.png`, alt: "Plant structural framework model" },
    ],
  },
  {
    id: "piping-routing",
    title: "Spec-Driven Piping & Routing",
    description:
      "ProSIM specializes in developing comprehensive 3D routing for intricate energy systems. We leverage professional CAD-based workflows to ensure your final 3D models align perfectly with the original engineering schematics, effectively eliminating translation errors.",
    points: [
      {
        head: "Data-Driven Integration",
        body: "By letting intelligent P&IDs directly govern the routing process, we automate specification compliance across HVAC ductwork, electrical cable trays, and complex, multi-sector piping runs.",
      },
      {
        head: "Deliverable Extraction",
        body: "We pull fabrication-ready outputs straight from the finished model. This includes precise General Arrangement (GA) drawings, Material Take-Offs (MTO/BOM), and Isogen isometrics. This flawless extraction process solidifies our reputation as a dependable outsourcing provider for plant design deliverables.",
      },
    ],
    images: [
      { src: `${IMG}/3.png`, alt: "Spec-driven 3D piping routing" },
      { src: `${IMG}/4.png`, alt: "Piping isometric extraction" },
    ],
  },
  {
    id: "clash-resolution",
    title: "Multi-Discipline Clash Resolution",
    description:
      "To prevent costly rework and on-site modifications during plant assembly, we run exhaustive interference checks that pinpoint spatial conflicts long before fabrication begins. For brownfield projects, our highly accurate as-built modeling ensures that new modifications fit flawlessly within the existing physical constraints of the site.",
    points: [
      {
        head: "Clash Audits",
        body: "We conduct ongoing, multi-disciplinary coordination reviews covering electrical, structural, civil, and piping layouts to systematically eliminate clearance, soft, and hard clashes.",
      },
      {
        head: "Tools Utilized",
        body: "Our teams rely on Autodesk Navisworks and Aveva Review to perform automated clash detection, advanced interference mapping, and final conflict resolution.",
      },
    ],
    images: [{ src: `${IMG}/5.png`, alt: "Multi-discipline clash detection model" }],
  },
  {
    id: "technical-expertise",
    title: "Technical Expertise & Methodologies",
    description:
      "To smoothly accommodate a wide variety of project demands, our project managers and engineering teams are highly proficient across multiple software platforms:",
    points: [
      {
        head: "Advanced Intergraph SP3D",
        body: "We bring deep knowledge of SP3D environments tailored for massive, data-centric enterprise megaprojects, ensuring full schema synchronization and multidisciplinary database integration.",
      },
      {
        head: "Aveva E3D Mastery",
        body: "Our team excels in Everything3D and traditional PDMS environments, enabling collaborative global design efforts that yield incredibly accurate, clash-free structural layouts and routing configurations.",
      },
      {
        head: "Autodesk Plant 3D Capability",
        body: "We utilize versatile modeling techniques for modular designs and fast-turnaround projects, prioritizing intelligent workflows, rapid asset setup, and efficient spec creation.",
      },
      {
        head: "CADWorx & OpenPlant Flexibility",
        body: "We are highly skilled at handling component-dense processing facilities using open-data architectures, ensuring intelligent routing, customized modeling, and full BIM readiness for your project.",
      },
    ],
  },
];

const serviceIcons = [Box, Route, Combine, Layers];

const heroNav = [
  { title: "Equipment & Structural Modelling", id: "equipment-structural" },
  { title: "Spec-Driven Piping & Routing", id: "piping-routing" },
  { title: "Multi-Discipline Clash Resolution", id: "clash-resolution" },
  { title: "Technical Expertise & Methodologies", id: "technical-expertise" },
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
    title: "Digital Twins: From Vendor Data Sheets to a Live Plant Model",
    excerpt:
      "How initial layout concepts and vendor data become a data-rich replica that lasts the full asset lifecycle.",
    topics: ["Vendor data integration", "Digital twin fidelity", "Lifecycle traceability"],
    image: `${IMG}/2.png`,
  },
  {
    title: "Letting Intelligent P&IDs Drive Your 3D Routing",
    excerpt:
      "Data-driven integration that automates spec compliance across piping, HVAC and cable trays.",
    topics: ["P&ID-governed routing", "Spec compliance", "Translation-error removal"],
    image: `${IMG}/3.png`,
  },
  {
    title: "Clash Detection Before the First Weld",
    excerpt:
      "Running clearance, soft and hard clash audits in Navisworks and Aveva Review to kill on-site rework.",
    topics: ["Clearance / soft / hard clashes", "Navisworks & Aveva Review", "Coordination reviews"],
    image: `${IMG}/4.png`,
  },
  {
    title: "As-Built Modelling for Brownfield Energy Sites",
    excerpt:
      "Capturing existing constraints so modifications fit flawlessly the first time.",
    topics: ["Brownfield constraints", "As-built accuracy", "Tie-in planning"],
    image: `${IMG}/5.png`,
  },
  {
    title: "SP3D vs. Aveva E3D vs. Plant 3D: Choosing a Platform",
    excerpt:
      "Matching the modelling toolset to project size, data model and enterprise database needs.",
    topics: ["Enterprise megaprojects", "Modular fast-track", "Schema synchronization"],
    image: `${IMG}/1.png`,
  },
  {
    title: "Extracting Fabrication-Ready Deliverables from a 3D Model",
    excerpt:
      "GA drawings, MTO/BOM and Isogen isometrics pulled straight from a spec-driven model.",
    topics: ["General Arrangement drawings", "MTO / BOM", "Isogen isometrics"],
    image: `${IMG}/2.png`,
  },
];

type Faq = { question: string; answer: string; list?: string[] };

const faqs: Faq[] = [
  {
    question:
      "How do your industrial 3D plant modeling services reduce project costs and streamline execution?",
    answer:
      "By partnering with us to construct highly accurate, data-rich digital twins of your physical sites, you eliminate the guesswork from the project execution phase. Our 3D models provide a unified, unambiguous source of truth that optimizes space management, prevents expensive on-site rework, and guarantees reliable traceability for long-term facility management.",
  },
  {
    question: "Can you create accurate as-built 3D models for existing brownfield energy facilities?",
    answer:
      "Yes. For brownfield projects and site expansions, we provide highly accurate as-built modeling. This ensures that any new modifications, equipment, or piping fit flawlessly within the existing physical constraints of your site, eliminating spatial conflicts before field assembly begins.",
  },
  {
    question: "How does your multi-discipline clash resolution process prevent on-site delays?",
    answer:
      "We run exhaustive interference checks long before fabrication to pinpoint spatial conflicts. Using advanced industry tools like Autodesk Navisworks and Aveva Review, our teams conduct ongoing clash audits across electrical, structural, civil, and piping layouts to systematically eliminate clearance, soft, and hard clashes.",
  },
  {
    question:
      "What specific fabrication-ready deliverables can we extract from your 3D plant design models?",
    answer:
      "Our flawless data extraction process ensures you get exactly what you need for fabrication and procurement. We pull precise outputs straight from the finished, spec-driven model, including General Arrangement (GA) drawings, Material Take-Offs (MTO/BOM), and Isogen isometrics, solidifying our reputation as a dependable plant design outsourcing partner.",
  },
  {
    question: "Which 3D modeling software platforms do your engineering teams use for plant design?",
    answer:
      "To ensure seamless integration with your existing enterprise databases and global design efforts, our engineering teams are highly proficient across multiple industry-leading platforms. Our capabilities include Intergraph SP3D for massive megaprojects, Aveva E3D and PDMS, Autodesk Plant 3D, as well as CADWorx and OpenPlant for BIM-ready, open-data architectures.",
  },
  {
    question:
      "How do you ensure our P&IDs are accurately translated into the final 3D piping and routing?",
    answer:
      "We leverage professional CAD-based workflows where intelligent P&IDs directly govern the 3D routing process. This data-driven integration automates specification compliance across complex, multi-sector piping runs, HVAC ductwork, and electrical cable trays — effectively eliminating translation errors between original schematics and the final model.",
  },
  {
    question:
      "Do your 3D plant layouts comply with strict hazardous zone classifications and regulatory standards?",
    answer:
      "Absolutely. Our expert consultants design tailored, spec-driven layouts that adhere strictly to specific regulatory standards, spatial limitations, and hazardous zone classifications. This rigorous data compliance makes us a preferred partner for highly regulated sectors like refineries, thermal power plants, and nuclear installations.",
  },
  {
    question: "What scope of process assets, equipment, and structural elements do you model?",
    answer:
      "We translate your initial layout concepts and vendor data sheets into exact 3D models covering both primary and secondary infrastructure. Our structural modeling specializations include rotating and static equipment, secondary steelwork, pipe racks, civil foundations, walkways, access platforms, and critical power generation components.",
  },
  {
    question: "What industries and energy sectors do you specialize in for digital twin solutions?",
    answer:
      "We partner directly with energy asset owners, facility operators, and EPC contractors across the broader energy sector. Our core industry specializations include:",
    list: [
      "Process plants",
      "Nuclear containment facilities",
      "Thermal power plants",
      "Offshore platforms",
      "Complex oil and gas facilities",
    ],
  },
  {
    question:
      "How does investing in a 3D digital replica improve the long-term lifecycle management of our assets?",
    answer:
      "Beyond the initial construction phase, a data-rich digital replica serves as an enduring source of truth that spans the entire lifespan of your engineering assets. This guarantees reliable, long-term traceability of the facility, making future maintenance, safety audits, and operational upgrades significantly more efficient and cost-effective.",
  },
];

export default function ThreeDPlantModelling() {
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
              <span>3D Plant Modelling</span> &amp; Digital Twin Services.
            </h1>

            <p>
              ProSIM partners with energy asset owners, facility operators and
              EPC contractors to construct highly accurate, data-rich digital
              replicas of their physical sites through industrial 3D plant
              modeling. These digital twins streamline the entire project
              execution phase while guaranteeing reliable traceability of the
              facility over the long term.
            </p>

            {/* <p>
              We provide a unified, unambiguous source of truth that spans the
              full lifespan of your engineering assets. Combining specialized
              industry knowledge, multi-platform software capabilities and proven
              execution frameworks, we deliver robust 3D modeling for process
              plants and the broader energy sector &mdash; nuclear, thermal,
              offshore and oil and gas.
            </p> */}
          </div>

          <div className="sa-hero-media">
            <figure className="sa-hero-media-main">
              <img
                src={`${IMG}/1.png`}
                alt="3D plant model — equipment and structural framework"
                loading="eager"
              />
              <figcaption>3D Plant Modelling</figcaption>
            </figure>
            <figure className="sa-hero-media-inset">
              <img
                src={`${IMG}/3.png`}
                alt="Spec-driven piping routing detail"
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

            <h2>Data-Rich 3D Plant Modelling Across Every Discipline</h2>

            <p>
              From intelligent equipment and structural modelling to spec-driven
              piping, multi-discipline clash resolution and multi-platform
              toolsets, ProSIM builds digital replicas that carry a facility
              through its complete lifecycle.
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
          <h2>3D Plant Modelling Projects</h2>

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
                  <a href="#faq-3d-modeling" className="sa-update-link">
                    Read More &rarr;
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="sa-faq" id="faq-3d-modeling">
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
                    <div>
                      {faq.answer && <p>{faq.answer}</p>}
                      {faq.list && (
                        <ul>
                          {faq.list.map((li) => (
                            <li key={li}>{li}</li>
                          ))}
                        </ul>
                      )}
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
          <h2>Insights from Our 3D Plant Modelling Desk</h2>
          <p className="sa-section-intro">
            Technical explainers and case notes on digital twins, spec-driven
            routing, multi-discipline clash detection, as-built modelling and
            platform selection.
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
