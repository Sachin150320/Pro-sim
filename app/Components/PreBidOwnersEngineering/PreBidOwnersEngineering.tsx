"use client";

import React, { useState } from "react";
import Breadcrumbs from "@/app/Components/Breadcrumbs/Breadcrumbs";
import { ShieldCheck, FileText, SearchCheck, Cpu, Users, Plus, Minus } from "lucide-react";
import "./OwnersEngineering.css";

const IMG = "/assets/images/industries/digi-solution";

type Point = { head?: string; body: string };

const services: {
  id: string;
  title: string;
  description: string;
  points: Point[];
}[] = [
  {
    id: "technology-selection",
    title: "1. Technology Selection",
    description:
      "Selecting the ideal technical infrastructure is essential for the long-term success of any project. Operating as a seasoned advisory partner, we supply unbiased, data-driven guidance during the critical early phases of your decision-making process.",
    points: [
      {
        head: "Technology Comparison",
        body: "We rigorously assess and benchmark competing technologies, equipment setups, and proprietary platforms.",
      },
      {
        head: "Risk Mitigation",
        body: "Our team evaluates operational risks, system efficiency, and lifetime reliability to guarantee everything aligns with your overarching project objectives.",
      },
    ],
  },
  {
    id: "design-basis",
    title: "2. Design Basis Reports (DBR)",
    description:
      "Create an unshakable groundwork for your initiative well before the detailed engineering phase kicks off.",
    points: [
      {
        head: "Boundary Definition",
        body: "We develop and thoroughly vet detailed Design Basis Reports that outline precise technical limits, relevant engineering codes, and necessary operational metrics.",
      },
      {
        head: "Stakeholder Alignment",
        body: "A key advantage of our owner's engineering services is ensuring that everyone involved — from in-house personnel to third-party contractors — is operating from the exact same standardized blueprint.",
      },
    ],
  },
  {
    id: "design-review",
    title: "3. Review of Engineering Design & Documentation",
    description:
      "Protect your capital from design flaws, regulatory non-compliance, or excessive engineering through strict, independent audits. By stepping in as your chosen owner's engineering partner, we safeguard your assets right from the start.",
    points: [
      {
        head: "Third-Party Verification",
        body: "We perform exhaustive third-party evaluations covering multi-disciplinary engineering designs, 3D modeling, technical calculations, and supporting documentation.",
      },
      {
        head: "Code Compliance",
        body: "Our experts confirm strict compliance with global safety standards, international codes, and your unique project stipulations, highlighting the true value of specialized owner's engineering oversight.",
      },
    ],
  },
  {
    id: "balance-engineering",
    title: "4. Balance Engineering Support",
    description:
      "We help eliminate the crucial technical blind spots that often emerge between large proprietary equipment packages.",
    points: [
      {
        head: "Utility Integration",
        body: "Our consultancy steps in with targeted engineering assistance to design and seamlessly connect peripheral utilities, auxiliary infrastructure, and interconnecting systems.",
      },
      {
        head: "Analytical Expertise",
        body: "We bolster your internal teams by providing advanced analytical skills to solve intricate thermal, fluid, or structural engineering problems.",
      },
    ],
  },
  {
    id: "epc-coordination",
    title: "5. Coordination with EPCs & Vendors",
    description:
      "Navigate complicated, multi-stakeholder technical boundaries with complete assurance through our strategic advisory management.",
    points: [
      {
        head: "Technical Advocacy",
        body: "We step in as your technical representative to iron out interface disputes and information shortfalls between equipment suppliers and EPC contractors.",
      },
      {
        head: "Bid & Change Review",
        body: "Leveraging our comprehensive advisory capabilities, we scrutinize vendor bids, proposed deviations, and change-order submissions to secure both the financial and technical health of your project.",
      },
    ],
  },
];

const serviceIcons = [ShieldCheck, FileText, SearchCheck, Cpu, Users];

const heroNav = [
  { title: "Tech Selection", id: "technology-selection" },
  { title: "Design Basis", id: "design-basis" },
  { title: "Design Review", id: "design-review" },
  { title: "Balance Eng.", id: "balance-engineering" },
  { title: "EPC Coordination", id: "epc-coordination" },
];

const advantages = [
  {
    number: "01",
    title: "Independent Oversight",
    text: "As a highly specialized consultancy, ProSIM functions with total independence. Because we aren't involved in equipment manufacturing or physical construction, our industrial advisory guidance stays entirely objective and focused purely on what benefits your project most. This steadfast dedication to impartiality is exactly what makes us such a trusted consulting partner.",
  },
  {
    number: "02",
    title: "Deep Engineering Roots",
    text: "Our industrial consulting practice is anchored by formidable expertise in engineering physics and advanced simulation. This allows us to identify nuanced design vulnerabilities that typical checklists overlook. Having this profound technical foundation strengthens our overall owner's engineering strategy, guaranteeing you receive maximum value and protection from our firm.",
  },
  {
    number: "03",
    title: "Ecosystem Integration",
    text: "We fluently understand the distinct perspectives of asset operators, massive EPCs, and innovative technology firms. Whether we are functioning as your strategic advisory consultant or actively managing technical processes as your owner's engineer, we provide dependable project oversight from initial concept all the way through commissioning. This comprehensive, full-lifecycle approach ensures our consulting expertise becomes an invaluable asset to your broader project.",
  },
];

type Faq = { question: string; answer: string; list?: { head: string; body: string }[] };

const faqs: Faq[] = [
  {
    question:
      "What is Owner's Engineering, and why does my capital project need an independent advisory partner?",
    answer:
      "Owner's Engineering provides dedicated, third-party technical oversight to safeguard an asset owner's capital investment. Because EPC contractors and equipment vendors focus primarily on their individual scopes, gaps and conflicts can easily emerge. ProSIM acts as your dedicated technical representative — ensuring design accuracy, maintaining global compliance, bridging stakeholder communication gaps, and aligning execution strictly with your strategic and financial goals.",
  },
  {
    question:
      "How does ProSIM maintain total objectivity during technology selection and vendor evaluations?",
    answer:
      "ProSIM operates with 100% independence: we do not manufacture equipment, sell proprietary hardware, or perform physical construction. This structural separation ensures our advisory guidance remains completely unbiased. We evaluate competing platforms, equipment setups, and vendor bids purely using data-driven benchmarks — focusing exclusively on lifetime reliability, operational efficiency, and total cost of ownership for your asset.",
  },
  {
    question: "At what stage of our project should we engage ProSIM as our Owner's Engineer?",
    answer:
      "While ProSIM delivers value at any phase, engaging us during the early feasibility and concept development stages yields the highest return on investment. Early involvement allows us to guide technology selection, establish a standardized Design Basis Report (DBR), and eliminate costly design flaws before detailed engineering and procurement lock in your capital layout.",
  },
  {
    question: "What is a Design Basis Report (DBR), and how does it prevent project scope creep?",
    answer:
      "A Design Basis Report (DBR) establishes an unshakable technical blueprint before detailed engineering begins. ProSIM develops and audits comprehensive DBRs that define exact operational metrics, design limits, and international engineering codes. This ensures that internal teams, technology licensors, and third-party contractors operate from a single, standardized framework — preventing miscommunication, expensive scope creep, and engineering re-work.",
  },
  {
    question:
      "How can an independent review of engineering design prevent budget overruns and operational delays?",
    answer:
      "Over-engineering, subtle design flaws, and regulatory non-compliance frequently cause massive budget overruns during construction and commissioning. ProSIM performs rigorous multi-disciplinary engineering audits — covering technical calculations, 3D models, and global safety standards — to identify vulnerabilities that standard checklists miss. Catching these discrepancies during the design phase is a fraction of the cost of fixing them in the field.",
  },
  {
    question:
      "How does ProSIM resolve technical interface disputes between EPC contractors and equipment suppliers?",
    answer:
      "Complex capital projects often suffer from \"gray areas\" where vendor boundaries overlap or disconnect. ProSIM serves as your technical representative, facilitating seamless alignment between equipment manufacturers, EPC contractors, and internal project teams. We evaluate change-order requests, scrutinize proposed technical deviations, and resolve interface disputes to keep your schedule and budget intact.",
  },
  {
    question: "What is Balance Engineering, and why is it critical for integrated plant reliability?",
    answer:
      "Proprietary equipment packages rarely work in isolation; they depend on robust peripheral utilities, auxiliary infrastructure, and interconnecting systems. ProSIM's Balance Engineering support bridges these gaps. Combining practical advisory experience with advanced thermal, fluid, and structural engineering physics, we ensure all peripheral utilities are designed and integrated seamlessly for long-term system reliability.",
  },
  {
    question: "What sets ProSIM apart from traditional engineering consulting firms?",
    answer:
      "Unlike traditional consultancies that rely solely on surface-level review checklists, ProSIM's practice is grounded in engineering physics and advanced computer simulation. This deep analytical foundation enables us to pinpoint subtle structural, thermal, and fluid dynamics vulnerabilities that standard audits overlook, protecting your capital asset against unexpected operational failures.",
  },
  {
    question: "Which industries and client types does ProSIM serve?",
    answer:
      "ProSIM delivers specialized engineering advisory services across three main stakeholder groups:",
    list: [
      {
        head: "Asset & Plant Operators",
        body: "Protecting capital investments and verifying long-term operational viability.",
      },
      {
        head: "EPC Contractors",
        body: "Mitigating engineering risks and solving complex multi-disciplinary challenges.",
      },
      {
        head: "Technology Developers",
        body: "Benchmarking proprietary platforms and supporting commercial scale-up.",
      },
    ],
  },
  {
    question: "How does partnering with ProSIM deliver measurable Return on Investment (ROI)?",
    answer:
      "Partnering with ProSIM generates clear financial and operational ROI by eliminating non-essential engineering expenses, preventing costly change orders during construction, short-circuiting stakeholder disputes, and ensuring optimal energy and operational efficiency. By protecting your asset against design failures and delays before capital is committed, our services typically pay for themselves many times over throughout the project lifecycle.",
  },
];

export default function PreBidOwnersEngineering() {
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
              <span>Owner&rsquo;s Engineering</span>, Consultancy &amp; Advisory.
            </h1>

            <p>
              ProSIM delivers a robust portfolio of independent consulting and
              expert advisory solutions built specifically for operators, EPC
              contractors, and technology developers. Serving as your dedicated
              owner&rsquo;s engineer, we provide high-level oversight, confirm
              engineering accuracy, and close communication gaps between various
              stakeholders to drive project success.
            </p>

            {/* <p>
              Our specialized consulting services are designed to ensure your
              technical execution perfectly matches your broader strategic goals.
            </p> */}
          </div>

          <div className="sa-hero-media">
            <figure className="sa-hero-media-main">
              <img
                src={`${IMG}/1.jpg`}
                alt="Owner's engineering — independent technical oversight"
                loading="eager"
              />
              <figcaption>Owner&rsquo;s Engineering</figcaption>
            </figure>
            <figure className="sa-hero-media-inset">
              <img
                src={`${IMG}/2.jpg`}
                alt="Advisory and design review detail"
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

            <h2>Core Owner&rsquo;s Engineering &amp; Advisory Capabilities</h2>

            <p>
              Our specialized consulting services are designed to ensure your
              technical execution perfectly matches your broader strategic goals.
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
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHY PROSIM */}
      <section className="sa-advantage" id="why-prosim">
        <div className="sa-container">
          <span className="sa-label">WHY PARTNER WITH PROSIM</span>

          <h2>Why Partner with ProSIM?</h2>

          <p className="sa-section-intro">
            We combine an independent mindset with exceptional technical strength
            to deliver strategic project oversight.
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

      {/* FAQ */}
      <section className="sa-faq" id="faq-owners-engineering">
        <div className="sa-container">
          <div className="sa-faq-heading">
            <span className="sa-label">FAQ&apos;s</span>

            <h2>Owner&rsquo;s Engineering FAQs</h2>
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
                      {faq.list && (
                        <ul>
                          {faq.list.map((li) => (
                            <li key={li.head}>
                              <strong>{li.head}:</strong> {li.body}
                            </li>
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
    </main>
  );
}
