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
  Fuel,
  FlaskConical,
  Leaf,
  Factory,
} from "lucide-react";
import "./DetailedEngineering.css";

const services = [
  {
    id: "process-eng",
    title: "Process Engineering Support & Validation",
    description:
      "We provide specialized process design, drafting and safety validation services, ensuring that fluid systems are optimized for flow assurance, operational safety and process integrity. This level of precision demonstrates the caliber of our engineering consultancy services.",
    points: [
      {
        head: "Process & Instrumentation Drafting",
        body: "Professional drafting and engineering review of Process Flow Diagrams (PFDs) and complex Piping and Instrumentation Diagrams (P&IDs).",
      },
      {
        head: "Flow Assurance & Hydraulic Calculations",
        body: "Comprehensive hydraulic analysis and system sizing for critical utility and process lines, including polypropylene (PP) lines, fuel oil systems and integrated metering skids.",
      },
      {
        head: "Dynamic Fluid Analysis",
        body: "Advanced surge analysis and water hammer studies to identify transient pressure spikes and safeguard the physical piping network.",
      },
      {
        head: "Safety & Thermal Optimization",
        body: "High-precision sizing of Pressure Safety Valves (PSVs) and calculated insulation thickness optimization for thermal efficiency and personnel protection.",
      },
      {
        head: "Technical Data Sheet Review",
        body: "Independent, cross-disciplinary engineering review of mechanical equipment and Electrical, Instrumentation & Control (E&I) data sheets to guarantee vendor compliance.",
      },
    ],
  },
  {
    id: "mechanical-design",
    title: "Mechanical Engineering Design (Static & Rotary)",
    description:
      "We deliver comprehensive design and analytical solutions for static and rotating equipment, ensuring structural integrity and long-term operational efficiency, which is a hallmark of our engineering design services. As experienced detailed engineering consultants, we ensure the highest standards of mechanical reliability.",
    points: [
      {
        head: "Equipment Sizing & Design",
        body: "Thermal and hydraulic optimization tailored to specific process data sheets.",
      },
      {
        head: "Static Equipment Engineering",
        body: "Detailed design for pressure vessels, heat exchangers, storage tanks and distillation columns compliant with ASME, API and TEMA codes.",
      },
      {
        head: "Rotary Equipment Specifications",
        body: "Engineering specifications and procurement-ready data sheets for pumps, compressors, turbines and fans.",
      },
      {
        head: "Deliverables",
        body: "Preparation of General Arrangement Drawings (GADs), manufacturing-ready fabrication drawings and thorough vendor document reviews.",
      },
    ],
  },
  {
    id: "plant-piping",
    title: "3D Plant Modelling & Piping Engineering",
    description:
      "We design highly intelligent, clash-free piping networks engineered for optimal routing, stress tolerance and ease of site construction. Our world-class plant engineering services guarantee accurate spatial planning, while the expert engineering design consultants on our team utilize industry-leading tools.",
    points: [
      {
        head: "Intelligent 3D Plant Modelling",
        body: "Development of data-driven 3D plant environments encompassing equipment, piping, structures and electrical raceways using leading industry software platforms.",
      },
      {
        head: "Piping Layout Optimization",
        body: "Strategic routing for complex plant layouts to balance space limitations, minimize pressure drops and ensure clear maintenance access.",
      },
      {
        head: "Piping Stress Analysis",
        body: "Comprehensive static and dynamic stress analysis (thermal expansion, seismic, wind and structural vibrations) to ensure full compliance with ASME B31.1 and B31.3 codes.",
      },
      {
        head: "Construction Deliverables",
        body: "Automated extraction of high-precision Material Take-Offs (MTO/BoQ), piping isometric drawings and support detailed drawings.",
      },
      {
        head: "As-Built Documentation",
        body: "Seamless conversion of greenfield/brownfield laser scan data or red-marked drawings into intelligent as-built models.",
      },
    ],
  },
  {
    id: "civil-structural",
    title: "Civil and Structural Engineering",
    description:
      "We provide robust structural engineering solutions designed to support heavy process payloads and withstand extreme environmental conditions. Clients leveraging our engineering outsourcing services gain access to a dedicated detailed engineering consultancy framework.",
    points: [
      {
        head: "Structural Analysis & Design",
        body: "Multi-floor technological structures, heavy-duty pipe racks, equipment platforms and modular process skids using advanced FEA modeling.",
      },
      {
        head: "Foundation Design",
        body: "Deep, shallow and dynamic machine foundation designs for heavy rotating equipment and high-load static towers.",
      },
      {
        head: "Deliverables",
        body: "Connection detailing, steel fabrication drawings (BOM) and concrete reinforcement construction drawings.",
      },
    ],
  },
  {
    id: "electrical-instrumentation",
    title: "Electrical, Instrumentation & Control (E&I) Engineering",
    description:
      "Our E&I team designs intelligent power distribution and automation architectures to ensure uncompromised plant safety and asset connectivity. This multidisciplinary integration highlights the full depth of our detailed engineering services and broader engineering consultancy services.",
    points: [
      {
        head: "Electrical Systems Design",
        body: "Single Line Diagrams (SLDs), electrical load pooling, equipment selection (transformers, switchgear, MCCs) and detailed cable tray/routing layouts.",
      },
      {
        head: "Instrumentation & Control",
        body: "Development of comprehensive I/O lists, instrument data sheets, control philosophies and cause-and-effect safety matrices.",
      },
      {
        head: "Plant Safety Systems",
        body: "Interlocking logic, hazardous area classification maps and grounding/lightning protection system designs.",
      },
    ],
  },
];

const industries = [
  "Oil & Gas (Upstream, Midstream and Downstream)",
  "Petrochemicals & Chemicals",
  "Power Generation (Thermal, Hydro and Nuclear)",
  "Renewable Energy (Solar, Wind and Green Hydrogen)",
  "Heavy Manufacturing & Process Industries",
];

const advantages = [
  {
    number: "01",
    title: "Clash-Free Designs",
    text: "Advanced multi-disciplinary 3D model coordination completely eliminates spatial conflicts before materials arrive on-site, cutting down field rework exponentially.",
  },
  {
    number: "02",
    title: "Global Compliance",
    text: "Every deliverable within our engineering design services is cross-verified against international codes (ASME, API, BS, DIN, IS, Eurocodes) and localized environmental frameworks.",
  },
  {
    number: "03",
    title: "CAPEX Optimization",
    text: "Through smart material selection, hydraulic line optimization and precision bulk estimation, we effectively lower your procurement costs, a key benefit of our engineering consultancy services.",
  },
  {
    number: "04",
    title: "Transparent Collaboration",
    text: "Our engineering team acts as an agile extension of your technical department, offering transparent milestone updates and fast design changes. As specialists in EPC detailed engineering services, we keep projects moving seamlessly.",
  },
];

const faqs = [
  {
    question:
      "What detailed engineering services does ProSIM offer for industrial and energy projects?",
    answer:
      "ProSIM delivers comprehensive detailed engineering services covering Process Engineering, Mechanical Design, 3D Plant Modelling & Piping, Civil & Structural Engineering and Electrical, Instrumentation & Control.",
  },
  {
    question:
      "How can ProSIM’s engineering outsourcing services help reduce our project CAPEX?",
    answer:
      "We reduce project costs through accurate material estimation, intelligent material selection, optimized hydraulic systems and clash-free 3D design that minimizes expensive site rework.",
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

const industryIcons = [Fuel, FlaskConical, Zap, Leaf, Factory];

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

// Add this array alongside your other data arrays
const latestUpdates = [
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

    title: "Advanced Piping Stress Analysis Techniques",
    excerpt:
      "How thermal, seismic and dynamic loads shape a safe, code-compliant piping network.",
    topics: [
      "Thermal expansion & flexibility",
      "Seismic & wind loading",
      "Dynamic vibration checks",
    ],
    image: "/assets/images/portfolio/modern/4.webp",
  },
  {

    title: "Building Clash-Free Multi-Discipline Models",
    excerpt:
      "Coordinating piping, structures and equipment in one intelligent model to cut field rework.",
    topics: [
      "Multi-discipline coordination",
      "Automated MTO / BoQ",
      "Isometric & GAD extraction",
    ],
    image: "/assets/images/portfolio/modern/5.webp",
  },
  {

    title: "Pressure Vessel Design to ASME & API",
    excerpt:
      "Meeting structural integrity requirements for static equipment across process plants.",
    topics: [
      "ASME Sec. VIII design",
      "API 650 & 660 compliance",
      "TEMA heat-exchanger checks",
    ],
    image: "/assets/images/portfolio/modern/6.webp",
  },
  {

    title: "Hydraulic & Flow Assurance Studies",
    excerpt:
      "Sizing critical process and utility lines for steady flow, surge control and safety.",
    topics: [
      "Line sizing & hydraulics",
      "Surge & water-hammer analysis",
      "PSV & relief sizing",
    ],
    image: "/assets/images/portfolio/modern/7.webp",
  },
  {

    title: "As-Built Engineering from Laser Scans",
    excerpt:
      "Turning point clouds and red-marked drawings into intelligent as-built 3D models.",
    topics: [
      "Point-cloud processing",
      "Intelligent as-built modelling",
      "Revamp & tie-in studies",
    ],
    image: "/assets/images/portfolio/modern/8.webp",
  },
  {

    title: "Electrical Load Pooling & Safety Systems",
    excerpt:
      "Designing robust power distribution and protection architectures for process facilities.",
    topics: [
      "SLD & load list development",
      "Hazardous area classification",
      "Earthing & lightning protection",
    ],
    image: "/assets/images/portfolio/modern/9.webp",
  },
];

export default function DetailedEngineering() {
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
              <span>Detailed Engineering</span> Services.
            </h1>

            <p>
              ProSIM offers end-to-end detailed engineering services designed to
              support the complete project lifecycle across major energy and
              industrial sectors. As leading detailed engineering consultants, our
              multidisciplinary approach integrates advanced simulation technologies
              with a strict focus on safety, reliability, cost optimization and
              compliance with global standards &mdash; ensuring seamless execution
              from blueprint to commissioning.
            </p>

          
          
          </div>

          <div className="sa-hero-media">
            <figure className="sa-hero-media-main">
              <img
                src="/assets/images/industries/detail-engineering.png"
                alt="Detailed engineering — 3D plant model and process plant"
                loading="eager"
              />
              <figcaption>Detailed Engineering</figcaption>
            </figure>
            <figure className="sa-hero-media-inset">
              <img
                src="/assets/images/portfolio/modern/6.webp"
                alt="3D plant and piping model detail"
                loading="lazy"
              />
            </figure>
          </div>
        </div>

        <div className="sa-hero-inner">
          <div className="sa-hero-nav">
            {disciplineItems.map((item) => (
              <a href={`#${item.id}`} className="sa-hero-nav-button" key={item.id}>
                {item.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* NAVIGATION */}
      {/* <section className="sa-navigation">
        <div className="sa-container">
          <div className="sa-navigation-card">
       

            <div className="sa-navigation-grid">
              {disciplineItems.map((item, index) => {
                const Icon = disciplineIcons[index];

                return (
                  <a
                    href={`#${item.id}`}
                    className="sa-navigation-button"
                    key={item.id}
                  >
                    <div className="sa-navigation-button-content">
                      <h3>{item.title}</h3>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </section> */}

      {/* MAIN IMAGE */}
      {/* <section className="sa-image-section">
  <div className="sa-container">
    <div className="sa-main-image">
      <img
        src="https://www.pro-sim.com/img/detailed-engineering-service-01.png"
        alt="Detailed Engineering Services"
      />
    </div>
  </div>
</section> */}

      {/* INTRO */}
     

      {/* SERVICES */}
      <section className="sa-services">
        <div className="sa-container">
           <section className="sa-intro">
         <span className="sa-label">OUR EXPERTISE</span>

          <h2>Our Core Engineering Disciplines</h2>

          <p>
            As a specialized detailed engineering company, our expertise
            covers a broad spectrum of technical requirements.
          </p>
      </section>
         
          <div className="sa-service-list">
            {services.map((service, index) => (
              <article
                className="sa-service-box"
                id={service.id}
                key={service.id}
              >
                <div className="sa-service-top">
                  <div className="sa-service-icon">
                    {React.createElement(disciplineIcons[index], {
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

                {/* GALLERY */}
                {index === 1 && (
                  <div className="sa-gallery">
                    <div className="sa-gallery-card">
                      <img
                        src="assets/images/industries/detail-engg-1.png"
                        alt="Mechanical Engineering"
                      />
                    </div>

                    <div className="sa-gallery-card">
                      <img
                        src="assets/images/industries/detail-engg-2.png"
                        alt="Mechanical Design"
                      />
                    </div>
                  </div>
                )}

                {index === 2 && (
                  <div className="sa-gallery">
                    <div className="sa-gallery-card">
                      <img
                        src="assets/images/industries/detail-engg-3.png"
                        alt="3D Plant Modelling"
                      />
                    </div>

                    <div className="sa-gallery-card">
                      <img
                        src="assets/images/industries/detail-engg-4.png"
                        alt="Piping Engineering"
                      />
                    </div>
                  </div>
                )}

                {index === 4 && (
                  <div className="sa-gallery single">
                    <div className="sa-gallery-card">
                      <img
                        src="assets/images/industries/detail-engg-5.png"
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
          <div className="sa-ind-head">
            <span className="sa-label">INDUSTRIES WE SERVE</span>

            <h2>Industries We Serve</h2>

            <p>
              Our engineering team delivers tailored detailed engineering packages
              across highly regulated, capital-intensive sectors. As top-tier
              detailed engineering consultants, we proudly cater to:
            </p>
          </div>

          <div className="sa-ind-layout">
            <div className="sa-ind-main">
              <div className="sa-ind-grid">
                {industries.map((industry, index) => {
                  const Icon = industryIcons[index];

                  return (
                    <div className="sa-ind-box" key={industry}>
                      <span className="sa-ind-icon">
                        <Icon size={20} strokeWidth={1.8} />
                      </span>

                      <strong>{industry}</strong>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="sa-ind-media">
              <figure className="sa-ind-photo">
                <img
                  src="/assets/images/industries/detail-indutsries.jpg"
                  alt="Oil &amp; gas processing facility at dusk"
                  loading="lazy"
                />
              </figure>
              
            </div>
          </div>

          <p className="sa-section-intro" style={{ marginTop: "40px" }}>
            In every sector we serve, our engineering design consultants provide
            unmatched technical oversight and innovation.
          </p>
        </div>
      </section>

      {/* ADVANTAGE */}
      <section className="sa-advantage">
        <div className="sa-container">
          <span className="sa-label">WHY PROSIM</span>

          <h2>The ProSIM Advantage : Why Partner with Us ?</h2>

          <p className="sa-section-intro">
            Enhanced constructability, reduced rework and accelerated commissioning.
            Partnering with a premier detailed engineering consultancy ensures project
            success from the ground up. For businesses seeking reliable engineering
            services in India, ProSIM delivers unparalleled value.
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

          <p className="sa-section-intro" style={{ marginTop: "40px" }}>
            Choose ProSIM as your trusted detailed engineering consultants to access
            world-class detailed engineering services, highly advanced engineering
            design services and the most competitive engineering services India has
            to offer. Working with our detailed engineering consultancy guarantees
            operational excellence and peace of mind on every project.
          </p>
        </div>
      </section>

      {/* LATEST UPDATES SECTION (2 Rows, 3 Columns, Horizontal Card Layout) */}
      <section className="sa-updates">
        <div className="sa-container">
          <span className="sa-label">Projects</span>
          <h2>Our Successful Projects</h2>


          <div className="sa-updates-grid">
            {latestUpdates.map((item) => (
              <div className="sa-update-card" key={item.title}>
                <div className="sa-update-image">
                  <span className="sa-update-tag">{item.tag}</span>
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="sa-update-content">
                  <span className="sa-update-date">{item.date}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <a href="#faq" className="sa-update-link">
                    Read More &rarr;
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* FAQ */}
      <section className="sa-faq" id="faq">
        <div className="sa-container">
          <div className="sa-faq-heading">
            <span className="sa-label">FAQ's</span>

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
                    className={`sa-faq-answer ${isOpen ? "show" : ""
                      }`}
                  >
                    <div>
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
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* BLOGS */}
      <section className="sa-blogs">
        <div className="sa-container">
          <span className="sa-label">Blog</span>
          <h2>Insights from Our Engineering Desk</h2>
          <p className="sa-section-intro">
            Notes, case studies and technical explainers from ProSIM&rsquo;s detailed
            engineering team.
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