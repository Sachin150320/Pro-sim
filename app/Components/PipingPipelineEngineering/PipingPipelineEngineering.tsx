"use client";

import React, { useState } from "react";
import Breadcrumbs from "@/app/Components/Breadcrumbs/Breadcrumbs";
import { Cog, Wrench, Boxes, Building2, Zap, Plus, Minus } from "lucide-react";
import ProjectsHighlight from "@/app/Components/ProjectsHighlight/ProjectsHighlight";
import "./PipingPipelineEngineering.css";

const IMG = "/assets/images/industries/Piping-&-Pipeline-Engineering-Services";

type Point = { head?: string; body: string };

const services: {
  id: string;
  title: string;
  description: string;
  points: Point[];
  images?: { src: string; alt: string }[];
}[] = [
  {
    id: "detailed-design",
    title: "Design & Detailed Engineering",
    description:
      "We provide precise, fully code-compliant detailed and basic piping design services, all executed with rapid turnaround times. As your strategic ally for piping design service outsourcing, we offer:",
    points: [
      {
        head: "Pipe Sizing & Flow Calculations",
        body: "First-principles approaches to calculate pressure drops and determine hydraulic pipe sizing.",
      },
      {
        head: "Layout & Routing",
        body: "The expert creation of piping layouts, smart re-routing solutions, and extensive piping modeling services.",
      },
      {
        head: "Intelligent Documentation",
        body: "The creation and continuous updating of 3D plant models, PFDs, and P&IDs.",
      },
      {
        head: "Production Deliverables",
        body: "The efficient extraction and preparation of Material Take-Offs (MTO), Bills of Quantities (BoQ), Isometrics (ISOs), and Piping General Arrangement (GA) drawings.",
      },
      {
        head: "Modular Designs",
        body: "Targeted optimization, design, and engineering specifically tailored for skid-mounted piping infrastructure.",
      },
    ],
    images: [
      { src: `${IMG}/1.png`, alt: "Piping design and detailed engineering" },
      { src: `${IMG}/2.png`, alt: "Piping layout and 3D plant model" },
    ],
  },
  {
    id: "stress-analysis",
    title: "Advanced Pipe Stress & Flexibility Analysis",
    description:
      "Operating as top-tier pipe stress analysis consultants, our team specializes in verifying complex, high-pressure, and high-temperature piping networks against rigorous dynamic and static operational loads. ProSIM stands out as a leading pipe stress analysis consultant in Bangalore, delivering a dependable pipe stress analysis service that addresses both dynamic and static project demands:",
    points: [
      {
        head: "Comprehensive Loading Analysis",
        body: "Detailed mathematical assessments covering sustained forces like pressure and dead weight, alongside thermal expansion and intermittent stresses such as ocean currents, steam or water hammer, ice, wind, and seismic events. Furthermore, our dynamic pipe stress analysis accurately measures transient load scenarios and intricate vibration patterns.",
      },
      {
        head: "Pipe Support Engineering",
        body: "The structural optimization, code verification, design, and thorough evaluation of dynamic snubbers, hangers, and piping supports.",
      },
      {
        head: "Anchorage Systems",
        body: "The structural enhancement, qualification, and design of baseplates and anchorage mechanisms.",
      },
    ],
    images: [
      { src: `${IMG}/3.png`, alt: "Pipe stress analysis model" },
      { src: `${IMG}/4.png`, alt: "Piping flexibility and support analysis" },
    ],
  },
  {
    id: "pipeline-engineering",
    title: "Pipeline Engineering (Onshore & Offshore)",
    description:
      "Moving well beyond standard plant boundaries, our team provides full-spectrum pipeline engineering services for extensive transportation networks:",
    points: [
      {
        body: "Extensive expertise handling submerged, offshore, and onshore (both buried and above-ground) pipelines designed to transport refined products, natural gas, and crude oil.",
      },
      {
        body: "The professional review, evaluation, and authoring of Design Basis Reports (DBR).",
      },
      {
        body: "Rigorous pipeline checking and code qualification in strict accordance with international frameworks and DNVGL standards.",
      },
    ],
    images: [{ src: `${IMG}/5.png`, alt: "Onshore and offshore pipeline engineering" }],
  },
  {
    id: "brownfield-maintenance",
    title: "Brownfield Maintenance & Fitness-for-Service (FFS)",
    description:
      "We actively assist facility operators throughout maintenance and turnaround phases to guarantee regulatory adherence and maintain structural integrity:",
    points: [
      {
        body: "Engineering support for In-Service Inspections (ISI) combined with thorough structural integrity assessments for plant assets.",
      },
      {
        body: "Comprehensive Fitness-for-Service (FFS) reviews and Remaining Life Assessments (RLA).",
      },
      {
        body: "Detailed Engineering Critical Analysis (ECA) that delivers objective, data-backed recommendations on whether to retire, reuse, or repair aging piping infrastructure.",
      },
    ],
  },
  {
    id: "code-compliance",
    title: "Unrivaled Technical Mastery & Code Compliance",
    description:
      "ProSIM distinguishes itself by seamlessly connecting sophisticated 3D Finite Element Analysis (FEA) with conventional 1D piping software. Should your next initiative require a specialized CAESAR pipe stress analysis service, our dedicated engineers stand ready to execute the task.",
    points: [
      {
        head: "Industry-Standard Software",
        body: "Comprehensive proficiency in utilizing CAEPIPE, PEPS (PIPESTRESS), and CAESAR-II.",
      },
      {
        head: "Advanced Sub-Modeling Linkage",
        body: "Beyond our strong practical and academic foundation in the 1D element topology typical of standard pipe stress applications, we frequently build highly detailed, localized 3D FEA models using ABAQUS and ANSYS to resolve exceptionally complex challenges. We rely on a mathematically precise, proprietary sub-modeling technique to smoothly integrate 3D FEA models with 1D pipe elements. It is exactly this profound level of technical proficiency that leads so many organizations to rely on our dynamic pipe stress analysis service.",
      },
      {
        head: "Global Code Conversion — ASME",
        body: "B&PV Codes, alongside B31.2 (Fuel Gas Piping), B31.3 (Process Piping), and B31.1 (Power Piping).",
      },
      {
        head: "Global Code Conversion — International Codes",
        body: "IS, EN, ISO, RCC, API, and DNVGL standards.",
      },
    ],
  },
];

const serviceIcons = [Cog, Wrench, Boxes, Building2, Zap];

const heroNav = [
  { title: "Design & Detailed Engineering", id: "detailed-design" },
  { title: "Stress & Flexibility Analysis", id: "stress-analysis" },
  { title: "Pipeline Eng. (Onshore/Offshore)", id: "pipeline-engineering" },
  { title: "Brownfield Maintenance & FFS", id: "brownfield-maintenance" },
  { title: "Technical Mastery & Codes", id: "code-compliance" },
];

const advantages = [
  {
    number: "01",
    title: "Engineered for Safety",
    text: "We ensure unwavering reliability during severe transient incidents, including fluid hammer and seismic shifts. To further bolster active initiatives, we offer a pipe stress analysis onsite placement service, effectively reinforcing your local workforce.",
  },
  {
    number: "02",
    title: "Optimized Total Cost of Ownership",
    text: "Our focus extends far beyond simply passing code verifications. We actively refine anchorages, supports, and physical layouts to dramatically lower structural weight and cut down on material expenses.",
  },
  {
    number: "03",
    title: "Flexible Global Delivery Models",
    text: "From establishing a permanent Offshore Engineering Development Center (OEDC) in Bangalore to generating short-term, project-specific engineering reports, we adapt our scale to perfectly match your specific outsourcing methodology. This inherent adaptability firmly cements our status as pioneers in piping engineering service outsourcing.",
  },
];


const blogPosts = [
  {
    title: "CAESAR-II vs. 3D FEA: When to Escalate a Stress Problem",
    excerpt:
      "The signals that tell you a 1D pipe stress model has reached its limit and a localized 3D sub-model is needed.",
    topics: ["1D vs 3D topology", "Peak stress resolution", "Proprietary sub-modeling"],
    image: `${IMG}/2.png`,
  },
  {
    title: "Water Hammer & Steam Hammer: Taming Transient Loads",
    excerpt:
      "How dynamic pipe stress analysis captures fluid transients, vibration and their effect on supports.",
    topics: ["Transient load cases", "Snubber design", "Vibration checks"],
    image: `${IMG}/3.png`,
  },
  {
    title: "Pipe Support Optimization to Cut Structural Weight",
    excerpt:
      "Refining supports, anchorages and layouts beyond code minimums to reduce steel and material cost.",
    topics: ["Support engineering", "Anchorage qualification", "Total cost of ownership"],
    image: `${IMG}/4.png`,
  },
  {
    title: "DNVGL Pipeline Code Qualification, Step by Step",
    excerpt:
      "Design Basis Reports, wall thickness, and code checks for onshore and offshore transportation pipelines.",
    topics: ["Design Basis Report", "Onshore & offshore", "DNVGL checking"],
    image: `${IMG}/5.png`,
  },
  {
    title: "Fitness-for-Service: Repair, Reuse or Retire?",
    excerpt:
      "Using FFS, RLA and ECA to make objective, data-backed calls on ageing piping assets.",
    topics: ["FFS review", "Remaining Life Assessment", "Engineering Critical Analysis"],
    image: `${IMG}/1.png`,
  },
  {
    title: "Sub-Modeling: Linking 1D Pipe Elements to ABAQUS / ANSYS",
    excerpt:
      "A mathematically precise technique to pass boundary conditions between 1D and 3D models cleanly.",
    topics: ["Boundary condition transfer", "ABAQUS & ANSYS", "Localized 3D FEA"],
    image: `${IMG}/2.png`,
  },
];

type Faq = { question: string; answer: string; list?: string[] };

const faqs: Faq[] = [
  {
    question: "What comprehensive piping engineering services does ProSIM offer for global clients?",
    answer:
      "We offer end-to-end piping and pipeline engineering lifecycle services, ranging from first-principle basic designs to intricate lifecycle maintenance. Our core capabilities include detailed layout and routing, pipe sizing, intelligent 3D plant modeling, modular skid designs, and generating production deliverables like Isometrics (ISOs) and Material Take-Offs (MTO). Operating from Bangalore, we serve as a dependable outsourcing partner, owner's engineer, or third-party reviewer for clients across the USA, Europe, the Gulf, Japan, and India.",
  },
  {
    question:
      "How does your pipe stress and flexibility analysis service ensure plant safety and reliability?",
    answer:
      "As leading pipe stress analysis consultants, we mathematically verify complex, high-pressure, and high-temperature piping networks against rigorous operational loads. We assess sustained forces (pressure, dead weight) alongside dynamic and transient loads such as thermal expansion, water/steam hammer, wind, and seismic events. This ensures your piping infrastructure remains safe, fully code-compliant, and highly reliable during severe operational incidents.",
  },
  {
    question: "How can partnering with ProSIM reduce our project's Total Cost of Ownership (TCO)?",
    answer:
      "Our engineering philosophy goes beyond simply passing basic code verifications. By leveraging advanced stress analysis and structural optimization, our engineers actively refine physical layouts, piping supports, and anchorage systems. This strategic optimization dramatically lowers structural weight, cuts down on raw material expenses, and ultimately reduces the overall Total Cost of Ownership for your facility.",
  },
  {
    question: "Which industries do you specialize in for piping and pipeline engineering?",
    answer:
      "Our team delivers tailored consulting and design solutions for high-stakes, demanding sectors. We have deep, proven expertise in industries such as:",
    list: [
      "Onshore and Offshore Oil & Gas",
      "Chemical Processing",
      "Thermal Power",
      "Nuclear Energy",
      "Bioenergy",
    ],
  },
  {
    question:
      "What flexible engagement models do you offer for outsourcing piping design services?",
    answer:
      "We adapt our scale and delivery models to perfectly match your company's unique outsourcing methodology. Whether you need short-term engineering reports for a specific project, an onsite pipe stress analysis placement to reinforce your local team, or a permanent Offshore Engineering Development Center (OEDC) based in Bangalore, we provide the flexibility your business requires.",
  },
  {
    question:
      "Do you provide Fitness-for-Service (FFS) and Remaining Life Assessments (RLA) for aging infrastructure?",
    answer:
      "Yes. We actively support plant operators during brownfield maintenance and turnaround phases. Our team conducts comprehensive Fitness-for-Service (FFS) reviews, Remaining Life Assessments (RLA), and detailed Engineering Critical Analysis (ECA). These services provide objective, data-backed recommendations on whether to repair, reuse, or retire aging piping assets, ensuring structural integrity and regulatory adherence.",
  },
  {
    question:
      "What industry-standard software and international codes do your piping engineers comply with?",
    answer:
      "Our engineers are highly proficient in industry-standard software, including CAESAR-II, CAEPIPE, and PEPS (PIPESTRESS). We guarantee strict global code conversion and compliance, aligning your designs with ASME (B&PV, B31.1, B31.2, B31.3), as well as international standards like IS, EN, ISO, RCC, API, and DNVGL frameworks.",
  },
  {
    question:
      "How do you handle exceptionally complex piping challenges that standard software cannot resolve?",
    answer:
      "When standard 1D pipe stress applications are insufficient for complex challenges, ProSIM utilizes a mathematically precise, proprietary sub-modeling technique. We seamlessly integrate standard 1D piping software with highly detailed, localized 3D Finite Element Analysis (FEA) models built using advanced tools like ABAQUS and ANSYS. This unrivaled technical mastery is why top-tier organizations trust us with their most demanding engineering challenges.",
  },
  {
    question: "Can you assist with modular design and skid-mounted piping infrastructure?",
    answer:
      "Absolutely. We offer targeted optimization, detailed design, and comprehensive engineering services specifically tailored for skid-mounted piping infrastructure. We ensure these modular designs are space-efficient, structurally sound, and ready for rapid production and deployment.",
  },
  {
    question:
      "Do you offer pipeline engineering services for large-scale onshore and offshore transportation networks?",
    answer:
      "Yes, our expertise extends well beyond standard plant boundaries. We provide full-spectrum pipeline engineering for submerged, offshore, and onshore (buried and above-ground) networks transporting crude oil, natural gas, and refined products. This includes rigorous DNVGL code qualification and the professional authoring and evaluation of Design Basis Reports (DBR).",
  },
];

export default function PipingPipelineEngineering() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="seismic-page">

      {/* PROJECTS */}
      <ProjectsHighlight />

      {/* FAQ */}
      <section className="sa-faq" id="faq-piping">
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
          <h2>Insights from Our Piping Engineering Desk</h2>
          <p className="sa-section-intro">
            Technical explainers and case notes on pipe stress analysis, dynamic
            transient loads, 3D FEA sub-modeling, pipeline code qualification and
            Fitness-for-Service.
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
