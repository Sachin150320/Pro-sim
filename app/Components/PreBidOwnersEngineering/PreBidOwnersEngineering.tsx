"use client";

import React, { useState } from "react";
import Breadcrumbs from "@/app/Components/Breadcrumbs/Breadcrumbs";
import {
  ArrowUpRight,
  ShieldCheck,
  FileText,
  SearchCheck,
  Cpu,
  Users,
  Plus,
  Minus,
} from "lucide-react";
import "./OwnersEngineering.css";

const services = [
  {
    id: "tech-selection",
    title: "1. Technology Selection",
    icon: ShieldCheck,
    description:
      "Selecting the ideal technical infrastructure is essential for the long-term success of any project. Operating as a seasoned advisory partner, we supply unbiased, data-driven guidance during the critical early phases of your decision-making process.",
    points: [
      "Technology Comparison: We rigorously assess and benchmark competing technologies, equipment setups, and proprietary platforms.",
      "Risk Mitigation: Our team evaluates operational risks, system efficiency, and lifetime reliability to guarantee everything aligns with your overarching project objectives.",
    ],
  },
  {
    id: "design-basis",
    title: "2. Design Basis Reports (DBR)",
    icon: FileText,
    description:
      "Create an unshakable groundwork for your initiative well before the detailed engineering phase kicks off.",
    points: [
      "Boundary Definition: We develop and thoroughly vet detailed Design Basis Reports that outline precise technical limits, relevant engineering codes, and necessary operational metrics.",
      "Stakeholder Alignment: A key advantage of our owner's engineering services is ensuring that everyone involved—from in-house personnel to third-party contractors—is operating from the exact same standardized blueprint.",
    ],
  },
  {
    id: "design-review",
    title: "3. Review of Engineering Design & Documentation",
    icon: SearchCheck,
    description:
      "Protect your capital from design flaws, regulatory non-compliance, or excessive engineering through strict, independent audits. By stepping in as your chosen owner's engineering partner, we safeguard your assets right from the start.",
    points: [
      "Third-Party Verification: We perform exhaustive third-party evaluations covering multi-disciplinary engineering designs, 3D modeling, technical calculations, and supporting documentation.",
      "Code Compliance: Our experts confirm strict compliance with global safety standards, international codes, and your unique project stipulations, highlighting the true value of specialized owner's engineering oversight.",
    ],
  },
  {
    id: "balance-eng",
    title: "4. Balance Engineering Support",
    icon: Cpu,
    description:
      "We help eliminate the crucial technical blind spots that often emerge between large proprietary equipment packages.",
    points: [
      "Utility Integration: Our consultancy steps in with targeted engineering assistance to design and seamlessly connect peripheral utilities, auxiliary infrastructure, and interconnecting systems.",
      "Analytical Expertise: We bolster your internal teams by providing advanced analytical skills to solve intricate thermal, fluid, or structural engineering problems.",
    ],
  },
  {
    id: "epc-coordination",
    title: "5. Coordination with EPCs & Vendors",
    icon: Users,
    description:
      "Navigate complicated, multi-stakeholder technical boundaries with complete assurance through our strategic advisory management.",
    points: [
      "Technical Advocacy: We step in as your technical representative to iron out interface disputes and information shortfalls between equipment suppliers and EPC contractors.",
      "Bid & Change Review: Leveraging our comprehensive advisory capabilities, we scrutinize vendor bids, proposed deviations, and change-order submissions to secure both the financial and technical health of your project.",
    ],
  },
];

const advantages = [
  {
    number: "01",
    icon: ShieldCheck,
    title: "Independent Oversight",
    text: "As a highly specialized consultancy, ProSIM functions with total independence. Because we aren't involved in equipment manufacturing or physical construction, our industrial advisory guidance stays entirely objective and focused purely on what benefits your project most. This steadfast dedication to impartiality is exactly what makes us such a trusted consulting partner.",
  },
  {
    number: "02",
    icon: FileText,
    title: "Deep Engineering Roots",
    text: "Our industrial consulting practice is anchored by formidable expertise in engineering physics and advanced simulation. This allows us to identify nuanced design vulnerabilities that typical checklists overlook. Having this profound technical foundation strengthens our overall owner's engineering strategy, guaranteeing you receive maximum value and protection from our firm.",
  },
  {
    number: "03",
    icon: Cpu,
    title: "Ecosystem Integration",
    text: "We fluently understand the distinct perspectives of asset operators, massive EPCs, and innovative technology firms. Whether we are functioning as your strategic advisory consultant or actively managing technical processes as your owner's engineer, we provide dependable project oversight from initial concept all the way through commissioning. This comprehensive, full-lifecycle approach ensures our consulting expertise becomes an invaluable asset to your broader project.",
  },
];

const faqs = [
  {
    question: "1. What is Owner’s Engineering, and why does my capital project need an independent advisory partner?",
    answer: "Owner’s Engineering provides dedicated, third-party technical oversight to safeguard an asset owner’s capital investment. Because EPC contractors and equipment vendors focus primarily on their individual scopes, gaps and conflicts can easily emerge. ProSIM acts as your dedicated technical representative—ensuring design accuracy, maintaining global compliance, bridging stakeholder communication gaps, and aligning execution strictly with your strategic and financial goals."
  },
  {
    question: "2. How does ProSIM maintain total objectivity during technology selection and vendor evaluations?",
    answer: "ProSIM operates with 100% independence: we do not manufacture equipment, sell proprietary hardware, or perform physical construction. This structural separation ensures our advisory guidance remains completely unbiased. We evaluate competing platforms, equipment setups, and vendor bids purely using data-driven benchmarks—focusing exclusively on lifetime reliability, operational efficiency, and total cost of ownership for your asset."
  },
  {
    question: "3. At what stage of our project should we engage ProSIM as our Owner’s Engineer?",
    answer: "While ProSIM delivers value at any phase, engaging us during the early feasibility and concept development stages yields the highest return on investment. Early involvement allows us to guide technology selection, establish a standardized Design Basis Report (DBR), and eliminate costly design flaws before detailed engineering and procurement lock in your capital layout."
  },
  {
    question: "4. What is a Design Basis Report (DBR), and how does it prevent project scope creep?",
    answer: "A Design Basis Report (DBR) establishes an unshakable technical blueprint before detailed engineering begins. ProSIM develops and audits comprehensive DBRs that define exact operational metrics, design limits, and international engineering codes. This ensures that internal teams, technology licensors, and third-party contractors operate from a single, standardized framework—preventing miscommunication, expensive scope creep, and engineering re-work."
  },
  {
    question: "5. How can an independent review of engineering design prevent budget overruns and operational delays?",
    answer: "Over-engineering, subtle design flaws, and regulatory non-compliance frequently cause massive budget overruns during construction and commissioning. ProSIM performs rigorous multi-disciplinary engineering audits—covering technical calculations, 3D models, and global safety standards—to identify vulnerabilities that standard checklists miss. Catching these discrepancies during the design phase is a fraction of the cost of fixing them in the field."
  },
  {
    question: "6. How does ProSIM resolve technical interface disputes between EPC contractors and equipment suppliers?",
    answer: "Complex capital projects often suffer from \"gray areas\" where vendor boundaries overlap or disconnect. ProSIM serves as your technical representative, facilitating seamless alignment between equipment manufacturers, EPC contractors, and internal project teams. We evaluate change-order requests, scrutinize proposed technical deviations, and resolve interface disputes to keep your schedule and budget intact."
  },
  {
    question: "7. What is Balance Engineering, and why is it critical for integrated plant reliability?",
    answer: "Proprietary equipment packages rarely work in isolation; they depend on robust peripheral utilities, auxiliary infrastructure, and interconnecting systems. ProSIM’s Balance Engineering support bridges these gaps. Combining practical advisory experience with advanced thermal, fluid, and structural engineering physics, we ensure all peripheral utilities are designed and integrated seamlessly for long-term system reliability."
  },
  {
    question: "8. What sets ProSIM apart from traditional engineering consulting firms?",
    answer: "Unlike traditional consultancies that rely solely on surface-level review checklists, ProSIM’s practice is grounded in engineering physics and advanced computer simulation. This deep analytical foundation enables us to pinpoint subtle structural, thermal, and fluid dynamics vulnerabilities that standard audits overlook, protecting your capital asset against unexpected operational failures."
  },
  {
    question: "9. Which industries and client types does ProSIM serve?",
    answer: "ProSIM delivers specialized engineering advisory services across three main stakeholder groups:\n• Asset & Plant Operators: Protecting capital investments and verifying long-term operational viability.\n• EPC Contractors: Mitigating engineering risks and solving complex multi-disciplinary challenges.\n• Technology Developers: Benchmarking proprietary platforms and supporting commercial scale-up."
  },
  {
    question: "10. How does partnering with ProSIM deliver measurable Return on Investment (ROI)?",
    answer: "Partnering with ProSIM generates clear financial and operational ROI by eliminating non-essential engineering expenses, preventing costly change orders during construction, short-circuiting stakeholder disputes, and ensuring optimal energy and operational efficiency. By protecting your asset against design failures and delays before capital is committed, our services typically pay for themselves many times over throughout the project lifecycle."
  }
];

const navigationItems = [
  { title: "Tech Selection", id: "tech-selection", icon: ShieldCheck },
  { title: "Design Basis", id: "design-basis", icon: FileText },
  { title: "Design Review", id: "design-review", icon: SearchCheck },
  { title: "Balance Eng.", id: "balance-eng", icon: Cpu },
  { title: "EPC Coordination", id: "epc-coordination", icon: Users },
];

export default function OwnersEngineeringPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq((current) => (current === index ? null : index));
  };

  return (
    <main className="oe-page">
      <Breadcrumbs />

      {/* HERO */}
      <section className="oe-hero">
        <div className="oe-container">
          <span className="oe-label">OWNER’S ENGINEERING, CONSULTANCY & ADVISORY</span>
          <h1>Owner’s Engineering, Consultancy & Advisory</h1>
          <p>
            ProSIM delivers a robust portfolio of independent consulting and expert advisory solutions built specifically for operators, EPC contractors, and technology developers. Serving as your dedicated owner's engineer, we provide high-level oversight, confirm engineering accuracy, and close communication gaps between various stakeholders to drive project success.
          </p>
          <p>
            Our specialized consulting services are designed to ensure your technical execution perfectly matches your broader strategic goals.
          </p>
        </div>
      </section>

      {/* NAVIGATION */}
      <section className="oe-navigation">
        <div className="oe-container">
          <div className="oe-navigation-card">
            <h2>Capabilities Navigation</h2>
            <div className="oe-navigation-grid">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    href={`#${item.id}`}
                    className="oe-navigation-link"
                    key={item.id}
                  >
                    <div className="oe-navigation-item">
                      <div className="oe-navigation-icon">
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

      {/* INTRO */}
      <section className="oe-intro">
        <div className="oe-container">
          <span className="oe-label">CORE CAPABILITIES</span>
          <h2>Core Owner’s Engineering & Advisory Capabilities</h2>
          <p>
            Our specialized consulting services are designed to ensure your technical execution perfectly matches your broader strategic goals:
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="oe-services">
        <div className="oe-container">
          <div className="oe-service-list">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <article
                  className="oe-service-box"
                  id={service.id}
                  key={service.id}
                >
                  <div className="oe-service-top">
                    <div className="oe-service-number">
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      <div className="oe-service-icon">
                        <Icon size={24} strokeWidth={1.8} />
                      </div>
                    </div>
                    <ArrowUpRight
                      className="oe-service-arrow"
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
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ADVANTAGE */}
      <section className="oe-advantage">
        <div className="oe-container">
          <span className="oe-label">WHY PARTNER WITH PROSIM?</span>
          <h2>Why Partner with ProSIM?</h2>
          <p className="oe-section-intro">
            We combine an independent mindset with exceptional technical strength to deliver strategic project oversight:
          </p>
          <div className="oe-advantage-list">
            {advantages.map((item) => {
              const Icon = item.icon;
              return (
                <div className="oe-advantage-box" key={item.number}>
                  <span className="oe-advantage-number">{item.number}</span>
                  <div className="oe-advantage-icon">
                    <Icon size={22} strokeWidth={1.8} />
                  </div>
                  <div className="oe-advantage-content">
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
      <section className="oe-faq" id="faq-owners-engineering">
        <div className="oe-container">
          <div className="oe-faq-heading">
            <span className="oe-label">FAQ</span>
            <h2>Owner’s Engineering FAQs</h2>
          </div>
          <div className="oe-faq-list">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  className={`oe-faq-item ${isOpen ? "active" : ""}`}
                  key={faq.question}
                >
                  <button
                    type="button"
                    className="oe-faq-question"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                    aria-controls={`oe-faq-answer-${index}`}
                  >
                    <span className="oe-faq-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <strong>{faq.question}</strong>
                    <span className="oe-faq-icon">
                      {isOpen ? (
                        <Minus size={19} strokeWidth={1.8} />
                      ) : (
                        <Plus size={19} strokeWidth={1.8} />
                      )}
                    </span>
                  </button>
                  <div
                    id={`oe-faq-answer-${index}`}
                    className={`oe-faq-answer ${isOpen ? "show" : ""}`}
                    aria-hidden={!isOpen}
                  >
                    <div>
                      {faq.question.startsWith("9.") ? (
                        <div>
                          <p>ProSIM delivers specialized engineering advisory services across three main stakeholder groups:</p>
                          <ul style={{ paddingLeft: "20px", margin: "0 0 15px 0" }}>
                            <li><strong>Asset &amp; Plant Operators:</strong> Protecting capital investments and verifying long-term operational viability.</li>
                            <li><strong>EPC Contractors:</strong> Mitigating engineering risks and solving complex multi-disciplinary challenges.</li>
                            <li><strong>Technology Developers:</strong> Benchmarking proprietary platforms and supporting commercial scale-up.</li>
                          </ul>
                        </div>
                      ) : (
                        <p>{faq.answer}</p>
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