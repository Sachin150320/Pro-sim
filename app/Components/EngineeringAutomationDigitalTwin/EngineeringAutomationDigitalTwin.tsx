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
import "./DigitalTwin.css";

const services = [
  {
    id: "rom-development",
    title: "1. Reduced Order Model (ROM) Development",
    icon: Cog,
    description:
      "While highly detailed simulations such as CFD and FEA offer exceptional accuracy, their immense computational demands make them impractical for continuous monitoring. We overcome this hurdle by developing Reduced Order Models utilizing purpose-built software.",
    points: [
      "Real-Time Simulation: We shrink dense physics calculations into agile, fast-running numerical frameworks that process in mere milliseconds rather than taking hours to compute.",
      "Edge & Cloud Deployment: These streamlined models can be installed right onto edge hardware or hosted in the cloud. This capability forms a crucial part of our services, empowering immediate virtual experimentation and rapid decision-making.",
    ],
  },
  {
    id: "aiml-iiot",
    title: "2. AI/ML & IIoT Model Implementation",
    icon: Wrench,
    description:
      "Turn unprocessed industrial data into clear, actionable insights using our powerful and reliable platform.",
    points: [
      "Industrial IoT Integration: Easily link, gather, and analyze sequential data points pouring in from countless sensors distributed throughout your facility or equipment network.",
      "Predictive AI/ML: We deploy specialized machine learning tools designed for proactive maintenance, calculating remaining useful life, and spotting early warning signs to help prevent unexpected equipment failures. As a top-tier provider, we specifically calibrate these algorithms to match your distinct machinery.",
    ],
  },
  {
    id: "hybrid-modeling",
    title: "3. Hybrid Modeling (Physics-Based + Data-Driven)",
    icon: Boxes,
    description:
      "Experience the ultimate balance of two methodologies. Relying solely on data ignores fundamental physical laws, whereas strict physics models overlook actual daily wear and tear. Our hybrid models successfully merge these two approaches.",
    points: [
      "The Hybrid Advantage: We fuse core physical principles—such as fluid dynamics, structural mechanics, and thermodynamics—with live AI and machine learning insights.",
      "Unmatched Accuracy: Physical rules ensure the artificial intelligence remains realistic and precise, while the data-focused components naturally adjust to actual equipment aging and changing environmental conditions. Providing this exceptional level of exactness is a key reason why so many facilities trust our services.",
    ],
  },
  {
    id: "bim-integration",
    title: "4. Building Information Modeling (BIM) Integration",
    icon: Building2,
    description:
      "Maximize the lifecycle value of your equipment information—from the drafting table through years of active use—using a comprehensive enterprise architecture.",
    points: [
      "As-Built Digital Threads: We transform structural and engineering BIM details into functioning virtual replicas, linking three-dimensional geometries straight to live maintenance records.",
      "Spatial Intelligence: Through our platform, we give on-site crews and remote staff a deeply detailed, contextual picture of machinery health that ties effortlessly into your existing management systems.",
    ],
  },
  {
    id: "advanced-rd",
    title: "5. Advanced Digital Twin R&D",
    icon: Zap,
    description:
      "Keep your business at the forefront of technological advancement by partnering with our expert innovation and consulting teams.",
    points: [
      "Custom Framework Prototyping: We actively study, build, and test highly customized architectures designed specifically for unique equipment or highly specialized manufacturing workflows.",
      "Next-Gen Tech Readiness: Whether generating synthetic data to educate AI models or experimenting with the latest sensor integrations, our deep development knowledge helps secure and safeguard your ongoing digital transformation strategy.",
    ],
  },
];

const advantages = [
  {
    number: "01",
    icon: Cog,
    title: "From Reactive to Predictive",
    text: "Our advanced frameworks allow facility managers to anticipate mechanical, temperature-related, or systemic irregularities several days before they actually occur on the floor.",
  },
  {
    number: "02",
    icon: Wrench,
    title: "Closed-Loop Optimization",
    text: "Rather than passively monitoring equipment, our comprehensive solutions actively improve performance by pushing the best operational parameters directly back into your control networks.",
  },
  {
    number: "03",
    icon: Boxes,
    title: "Root-Cause Acceleration",
    text: "In the event of a breakdown, you can review the virtual timeline of sensor and physical data to pinpoint the precise source of the failure in a matter of minutes rather than days.",
  },
  {
    number: "04",
    icon: Building2,
    title: "Cross-Department Single Source of Truth",
    text: "Unify your maintenance crews, engineering staff, and leadership by giving them access to a shared, real-time data foundation. As your reliable partner, we supply the high-level guidance necessary to keep your business ahead of the competition.",
  },
];

const faqs = [
  {
    question: "1. What are digital twin solutions, and how do they improve industrial equipment performance?",
    answer: "Digital twin solutions go beyond stationary 3D models by creating active, real-time virtual counterparts of your physical machinery. By combining deep engineering principles with advanced data science, our digital twins allow you to run risk-free operational simulations, maximize facility efficiency, and forecast equipment issues before they impact production."
  },
  {
    question: "2. How does predictive maintenance AI prevent unexpected equipment failures and costly downtime?",
    answer: "We integrate Industrial IoT (IIoT) sensors with specialized machine learning algorithms calibrated specifically to your machinery. This enables our platform to calculate the remaining useful life of your equipment and spot early warning signs of failure. Facility managers can anticipate mechanical, temperature, or systemic irregularities several days before they occur on the factory floor."
  },
  {
    question: "3. Why is Hybrid Modeling (Physics-Based + Data-Driven) more accurate than standard AI for manufacturing?",
    answer: "Relying solely on data ignores fundamental physical laws, while strict physics models overlook actual daily wear and tear. Our Hybrid Modeling approach merges the two. We fuse core physical principles—like fluid dynamics and thermodynamics—with live AI insights. This ensures the AI remains realistic while naturally adjusting to equipment aging and changing environmental conditions, delivering unmatched accuracy."
  },
  {
    question: "4. Can your digital twin simulations run in real-time on edge devices and cloud networks?",
    answer: "Yes. Highly detailed simulations (like CFD and FEA) are often too computationally heavy for continuous monitoring. We solve this by developing Reduced Order Models (ROM). We shrink dense physics calculations into agile frameworks that process in milliseconds, allowing them to be deployed directly onto edge hardware or hosted in the cloud for immediate virtual experimentation."
  },
  {
    question: "5. How do industrial digital twins accelerate root-cause analysis when machinery breaks down?",
    answer: "When an unexpected breakdown occurs, time is money. Our digital twin solutions allow your team to review a complete, virtual timeline of sensor and physical data leading up to the event. This enables project managers and engineers to pinpoint the precise source of the failure in a matter of minutes, rather than days."
  },
  {
    question: "6. What is closed-loop optimization, and how does it automate operational efficiency?",
    answer: "Rather than just passively monitoring your equipment, our digital twins actively improve its performance. Through closed-loop optimization, our comprehensive solutions calculate the best operational parameters and push those optimal settings directly back into your physical control networks, maximizing efficiency automatically."
  },
  {
    question: "7. How does integrating Building Information Modeling (BIM) with digital twins improve facility management?",
    answer: "We transform static structural and engineering BIM details into functioning \"As-Built Digital Threads.\" By linking your 3D geometries directly to live maintenance records, we provide spatial intelligence. This gives both on-site crews and remote staff a deeply detailed, contextual picture of machinery health that ties effortlessly into your existing management systems."
  },
  {
    question: "8. Do you provide custom digital twin consulting and R&D for specialized manufacturing workflows?",
    answer: "Absolutely. We partner with businesses to build and test highly customized digital twin architectures tailored to unique equipment or highly specialized manufacturing processes. From generating synthetic data to train AI models to experimenting with the latest sensor integrations, our advanced R&D team safeguards your long-term digital transformation strategy."
  },
  {
    question: "9. How does your IIoT platform unify maintenance and engineering teams into a single source of truth?",
    answer: "Siloed data leads to operational inefficiencies. Our platform links, gathers, and analyzes sequential data points from countless sensors across your facility, creating a shared, real-time data foundation. This unifies your maintenance crews, engineering staff, and executive leadership under a single source of truth, empowering rapid, cross-departmental decision-making."
  },
  {
    question: "10. How quickly can we deploy these models to start generating actionable industrial insights?",
    answer: "Our solutions are designed for agility. By utilizing Reduced Order Models (ROM) and flexible Edge & Cloud deployment, we bypass the hours of computation traditionally required for dense physics calculations. This allows for rapid implementation of both our AI/ML tools and Hybrid Models, turning unprocessed industrial data into clear, actionable insights almost immediately upon integration."
  }
];

const navigationItems = [
  { title: "ROM Development", id: "rom-development", icon: Cog },
  { title: "AI/ML & IIoT", id: "aiml-iiot", icon: Wrench },
  { title: "Hybrid Modeling", id: "hybrid-modeling", icon: Boxes },
  { title: "BIM Integration", id: "bim-integration", icon: Building2 },
  { title: "Advanced R&D", id: "advanced-rd", icon: Zap },
];

export default function DigitalTwinPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq((current) => (current === index ? null : index));
  };

  return (
    <main className="dt-page">
      <Breadcrumbs />

      {/* HERO */}
      <section className="dt-hero">
        <div className="dt-container">
        
          <h1>Digital Twin Solutions</h1>
          <p>
            Modern industrial equipment needs more than just stationary models; it demands active, real-time virtual counterparts. As an industry leader in this space, we deliver solutions that connect real-world operations with virtual insights.
          </p>
          <p>
            We combine deep engineering principles with the latest data science and advanced technology to offer services that allow teams to forecast equipment issues, maximize efficiency, and run risk-free operational simulations.
          </p>
        </div>
      </section>

      {/* NAVIGATION */}
      <section className="dt-navigation">
        <div className="dt-container">
          <div className="dt-navigation-card">
            <h2>Digital Twin Solutions Navigation</h2>
            <div className="dt-navigation-grid">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    href={`#${item.id}`}
                    className="dt-navigation-link"
                    key={item.id}
                  >
                    <div className="dt-navigation-item">
                      <div className="dt-navigation-icon">
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
      <section className="dt-intro">
        <div className="dt-container">
          <span className="dt-label">CORE CAPABILITIES</span>
          <h2>Core Digital Twin Capabilities</h2>
          <p>
            We combine deep engineering principles with the latest data science and advanced technology to offer services that allow teams to forecast equipment issues, maximize efficiency, and run risk-free operational simulations:
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="dt-services">
        <div className="dt-container">
          <div className="dt-service-list">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <article
                  className="dt-service-box"
                  id={service.id}
                  key={service.id}
                >
                  <div className="dt-service-top">
                    <div className="dt-service-number">
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      <div className="dt-service-icon">
                        <Icon size={24} strokeWidth={1.8} />
                      </div>
                    </div>
                    <ArrowUpRight
                      className="dt-service-arrow"
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
      <section className="dt-advantage">
        <div className="dt-container">
          <span className="dt-label">VALUED DELIVERABLES</span>
          <h2>The Value We Deliver</h2>
          <p className="dt-section-intro">
            Deploying an enterprise-grade digital twin architecture creates measurable operational advantages across your organization:
          </p>
          <div className="dt-advantage-list">
            {advantages.map((item) => {
              const Icon = item.icon;
              return (
                <div className="dt-advantage-box" key={item.number}>
                  <span className="dt-advantage-number">{item.number}</span>
                  <div className="dt-advantage-icon">
                    <Icon size={22} strokeWidth={1.8} />
                  </div>
                  <div className="dt-advantage-content">
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
      <section className="dt-faq" id="faq-digital-twins">
        <div className="dt-container">
          <div className="dt-faq-heading">
            <span className="dt-label">FAQ</span>
            <h2>Digital Twins FAQs</h2>
            <p>
              Find answers to common questions about our digital twin solutions.
            </p>
          </div>
          <div className="dt-faq-list">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  className={`dt-faq-item ${isOpen ? "active" : ""}`}
                  key={faq.question}
                >
                  <button
                    type="button"
                    className="dt-faq-question"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                    aria-controls={`dt-faq-answer-${index}`}
                  >
                    <span className="dt-faq-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <strong>{faq.question}</strong>
                    <span className="dt-faq-icon">
                      {isOpen ? (
                        <Minus size={19} strokeWidth={1.8} />
                      ) : (
                        <Plus size={19} strokeWidth={1.8} />
                      )}
                    </span>
                  </button>
                  <div
                    id={`dt-faq-answer-${index}`}
                    className={`dt-faq-answer ${isOpen ? "show" : ""}`}
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