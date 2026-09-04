"use client";

import React, { useState } from "react";
import Breadcrumbs from "@/app/Components/Breadcrumbs/Breadcrumbs";
import { Gauge, Cpu, Blend, Building2, FlaskConical, Plus, Minus } from "lucide-react";
import "./DigitalTwin.css";

const IMG = "/assets/images/industries/digi-solution";

type Point = { head?: string; body: string };

const services: {
  id: string;
  title: string;
  description: string;
  points: Point[];
}[] = [
  {
    id: "rom-development",
    title: "1. Reduced Order Model (ROM) Development",
    description:
      "While highly detailed simulations such as CFD and FEA offer exceptional accuracy, their immense computational demands make them impractical for continuous monitoring. We overcome this hurdle by developing Reduced Order Models utilizing purpose-built software.",
    points: [
      {
        head: "Real-Time Simulation",
        body: "We shrink dense physics calculations into agile, fast-running numerical frameworks that process in mere milliseconds rather than taking hours to compute.",
      },
      {
        head: "Edge & Cloud Deployment",
        body: "These streamlined models can be installed right onto edge hardware or hosted in the cloud. This capability forms a crucial part of our services, empowering immediate virtual experimentation and rapid decision-making.",
      },
    ],
  },
  {
    id: "ai-ml-iiot",
    title: "2. AI/ML & IIoT Model Implementation",
    description:
      "Turn unprocessed industrial data into clear, actionable insights using our powerful and reliable platform.",
    points: [
      {
        head: "Industrial IoT Integration",
        body: "Easily link, gather, and analyze sequential data points pouring in from countless sensors distributed throughout your facility or equipment network.",
      },
      {
        head: "Predictive AI/ML",
        body: "We deploy specialized machine learning tools designed for proactive maintenance, calculating remaining useful life, and spotting early warning signs to help prevent unexpected equipment failures. As a top-tier provider, we specifically calibrate these algorithms to match your distinct machinery.",
      },
    ],
  },
  {
    id: "hybrid-modeling",
    title: "3. Hybrid Modeling (Physics-Based + Data-Driven)",
    description:
      "Experience the ultimate balance of two methodologies. Relying solely on data ignores fundamental physical laws, whereas strict physics models overlook actual daily wear and tear. Our hybrid models successfully merge these two approaches.",
    points: [
      {
        head: "The Hybrid Advantage",
        body: "We fuse core physical principles — such as fluid dynamics, structural mechanics, and thermodynamics — with live AI and machine learning insights.",
      },
      {
        head: "Unmatched Accuracy",
        body: "Physical rules ensure the artificial intelligence remains realistic and precise, while the data-focused components naturally adjust to actual equipment aging and changing environmental conditions. Providing this exceptional level of exactness is a key reason why so many facilities trust our services.",
      },
    ],
  },
  {
    id: "bim-integration",
    title: "4. Building Information Modeling (BIM) Integration",
    description:
      "Maximize the lifecycle value of your equipment information — from the drafting table through years of active use — using a comprehensive enterprise architecture.",
    points: [
      {
        head: "As-Built Digital Threads",
        body: "We transform structural and engineering BIM details into functioning virtual replicas, linking three-dimensional geometries straight to live maintenance records.",
      },
      {
        head: "Spatial Intelligence",
        body: "Through our platform, we give on-site crews and remote staff a deeply detailed, contextual picture of machinery health that ties effortlessly into your existing management systems.",
      },
    ],
  },
  {
    id: "advanced-rd",
    title: "5. Advanced Digital Twin R&D",
    description:
      "Keep your business at the forefront of technological advancement by partnering with our expert innovation and consulting teams.",
    points: [
      {
        head: "Custom Framework Prototyping",
        body: "We actively study, build, and test highly customized architectures designed specifically for unique equipment or highly specialized manufacturing workflows.",
      },
      {
        head: "Next-Gen Tech Readiness",
        body: "Whether generating synthetic data to educate AI models or experimenting with the latest sensor integrations, our deep development knowledge helps secure and safeguard your ongoing digital transformation strategy.",
      },
    ],
  },
];

const serviceIcons = [Gauge, Cpu, Blend, Building2, FlaskConical];

const heroNav = [
  { title: "ROM Development", id: "rom-development" },
  { title: "AI/ML & IIoT", id: "ai-ml-iiot" },
  { title: "Hybrid Modeling", id: "hybrid-modeling" },
  { title: "BIM Integration", id: "bim-integration" },
  { title: "Advanced R&D", id: "advanced-rd" },
];

const value = [
  {
    number: "01",
    title: "From Reactive to Predictive",
    text: "Our advanced frameworks allow facility managers to anticipate mechanical, temperature-related, or systemic irregularities several days before they actually occur on the floor.",
  },
  {
    number: "02",
    title: "Closed-Loop Optimization",
    text: "Rather than passively monitoring equipment, our comprehensive solutions actively improve performance by pushing the best operational parameters directly back into your control networks.",
  },
  {
    number: "03",
    title: "Root-Cause Acceleration",
    text: "In the event of a breakdown, you can review the virtual timeline of sensor and physical data to pinpoint the precise source of the failure in a matter of minutes rather than days.",
  },
  {
    number: "04",
    title: "Cross-Department Single Source of Truth",
    text: "Unify your maintenance crews, engineering staff, and leadership by giving them access to a shared, real-time data foundation. As your reliable partner, we supply the high-level guidance necessary to keep your business ahead of the competition.",
  },
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
    title: "Reduced Order Models: Physics Accuracy at Real-Time Speed",
    excerpt:
      "How CFD and FEA get compressed into millisecond frameworks fit for continuous monitoring on the edge.",
    topics: ["ROM techniques", "Edge & cloud deployment", "Real-time simulation"],
    image: `${IMG}/2.jpg`,
  },
  {
    title: "Calibrating Predictive Maintenance ML to Your Machinery",
    excerpt:
      "Why generic anomaly detection under-performs and how per-asset calibration finds early warning signs.",
    topics: ["Remaining useful life", "Early warning signs", "Per-asset calibration"],
    image: `${IMG}/1.jpg`,
  },
  {
    title: "Hybrid Modeling: When Data Alone Isn't Enough",
    excerpt:
      "Fusing fluid dynamics, structural mechanics and thermodynamics with live AI for models that stay realistic.",
    topics: ["Physics-informed AI", "Wear & aging adaptation", "Model accuracy"],
    image: `${IMG}/2.jpg`,
  },
  {
    title: "From BIM to Digital Thread: Making Geometry Operational",
    excerpt:
      "Turning as-built structural models into virtual replicas linked to live maintenance data.",
    topics: ["As-built digital threads", "Spatial intelligence", "CMMS integration"],
    image: `${IMG}/1.jpg`,
  },
  {
    title: "Closed-Loop Optimization vs. Passive Monitoring",
    excerpt:
      "Pushing computed optimal parameters back into control networks instead of just watching dashboards.",
    topics: ["Setpoint optimization", "Control network integration", "Autonomous efficiency"],
    image: `${IMG}/2.jpg`,
  },
  {
    title: "Accelerating Root-Cause Analysis with a Virtual Timeline",
    excerpt:
      "Replaying synchronized sensor and physics data after a breakdown to find the source in minutes.",
    topics: ["Failure forensics", "Data replay", "Minutes not days"],
    image: `${IMG}/1.jpg`,
  },
];

type Faq = { question: string; answer: string };

const faqs: Faq[] = [
  {
    question: "What are digital twin solutions, and how do they improve industrial equipment performance?",
    answer:
      "Digital twin solutions go beyond stationary 3D models by creating active, real-time virtual counterparts of your physical machinery. By combining deep engineering principles with advanced data science, our digital twins allow you to run risk-free operational simulations, maximize facility efficiency, and forecast equipment issues before they impact production.",
  },
  {
    question: "How does predictive maintenance AI prevent unexpected equipment failures and costly downtime?",
    answer:
      "We integrate Industrial IoT (IIoT) sensors with specialized machine learning algorithms calibrated specifically to your machinery. This enables our platform to calculate the remaining useful life of your equipment and spot early warning signs of failure. Facility managers can anticipate mechanical, temperature, or systemic irregularities several days before they occur on the factory floor.",
  },
  {
    question: "Why is Hybrid Modeling (Physics-Based + Data-Driven) more accurate than standard AI for manufacturing?",
    answer:
      "Relying solely on data ignores fundamental physical laws, while strict physics models overlook actual daily wear and tear. Our Hybrid Modeling approach merges the two. We fuse core physical principles — like fluid dynamics and thermodynamics — with live AI insights. This ensures the AI remains realistic while naturally adjusting to equipment aging and changing environmental conditions, delivering unmatched accuracy.",
  },
  {
    question: "Can your digital twin simulations run in real-time on edge devices and cloud networks?",
    answer:
      "Yes. Highly detailed simulations (like CFD and FEA) are often too computationally heavy for continuous monitoring. We solve this by developing Reduced Order Models (ROM). We shrink dense physics calculations into agile frameworks that process in milliseconds, allowing them to be deployed directly onto edge hardware or hosted in the cloud for immediate virtual experimentation.",
  },
  {
    question: "How do industrial digital twins accelerate root-cause analysis when machinery breaks down?",
    answer:
      "When an unexpected breakdown occurs, time is money. Our digital twin solutions allow your team to review a complete, virtual timeline of sensor and physical data leading up to the event. This enables project managers and engineers to pinpoint the precise source of the failure in a matter of minutes, rather than days.",
  },
  {
    question: "What is closed-loop optimization, and how does it automate operational efficiency?",
    answer:
      "Rather than just passively monitoring your equipment, our digital twins actively improve its performance. Through closed-loop optimization, our comprehensive solutions calculate the best operational parameters and push those optimal settings directly back into your physical control networks, maximizing efficiency automatically.",
  },
  {
    question: "How does integrating Building Information Modeling (BIM) with digital twins improve facility management?",
    answer:
      "We transform static structural and engineering BIM details into functioning “As-Built Digital Threads.” By linking your 3D geometries directly to live maintenance records, we provide spatial intelligence. This gives both on-site crews and remote staff a deeply detailed, contextual picture of machinery health that ties effortlessly into your existing management systems.",
  },
  {
    question: "Do you provide custom digital twin consulting and R&D for specialized manufacturing workflows?",
    answer:
      "Absolutely. We partner with businesses to build and test highly customized digital twin architectures tailored to unique equipment or highly specialized manufacturing processes. From generating synthetic data to train AI models to experimenting with the latest sensor integrations, our advanced R&D team safeguards your long-term digital transformation strategy.",
  },
  {
    question: "How does your IIoT platform unify maintenance and engineering teams into a single source of truth?",
    answer:
      "Siloed data leads to operational inefficiencies. Our platform links, gathers, and analyzes sequential data points from countless sensors across your facility, creating a shared, real-time data foundation. This unifies your maintenance crews, engineering staff, and executive leadership under a single source of truth, empowering rapid, cross-departmental decision-making.",
  },
  {
    question: "How quickly can we deploy these models to start generating actionable industrial insights?",
    answer:
      "Our solutions are designed for agility. By utilizing Reduced Order Models (ROM) and flexible Edge & Cloud deployment, we bypass the hours of computation traditionally required for dense physics calculations. This allows for rapid implementation of both our AI/ML tools and Hybrid Models, turning unprocessed industrial data into clear, actionable insights almost immediately upon integration.",
  },
];

export default function EngineeringAutomationDigitalTwin() {
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
              <span>Digital Twin</span> Solutions.
            </h1>

            <p>
              Modern industrial equipment needs more than just stationary models;
              it demands active, real-time virtual counterparts. As an industry
              leader in this space, we deliver solutions that connect real-world
              operations with virtual insights.
            </p>

            {/* <p>
              We combine deep engineering principles with the latest data science
              and advanced technology to offer services that allow teams to
              forecast equipment issues, maximize efficiency, and run risk-free
              operational simulations.
            </p> */}
          </div>

          <div className="sa-hero-media">
            <figure className="sa-hero-media-main">
              <img
                src={`${IMG}/1.jpg`}
                alt="Digital twin — real-time virtual counterpart of industrial equipment"
                loading="eager"
              />
              <figcaption>Digital Twin</figcaption>
            </figure>
            <figure className="sa-hero-media-inset">
              <img
                src={`${IMG}/2.jpg`}
                alt="Predictive AI and IIoT dashboard detail"
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

            <h2>Core Digital Twin Capabilities</h2>

            <p>
              We combine deep engineering principles with the latest data science
              and advanced technology to offer services that allow teams to
              forecast equipment issues, maximize efficiency, and run risk-free
              operational simulations.
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

      {/* THE VALUE WE DELIVER */}
      <section className="sa-advantage" id="value">
        <div className="sa-container">
          <span className="sa-label">THE VALUE WE DELIVER</span>

          <h2>Measurable Operational Advantages</h2>

          <p className="sa-section-intro">
            Deploying an enterprise-grade digital twin architecture creates
            measurable operational advantages across your organization.
          </p>

          <div className="sa-adv-grid">
            {value.map((item) => (
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

      {/* PROJECTS */}
      <section className="sa-updates" id="projects">
        <div className="sa-container">
          <span className="sa-label">Projects</span>
          <h2>Digital Twin Projects</h2>

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
                  <a href="#faq-digital-twins" className="sa-update-link">
                    Read More &rarr;
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="sa-faq" id="faq-digital-twins">
        <div className="sa-container">
          <div className="sa-faq-heading">
            <span className="sa-label">FAQ&apos;s</span>

            <h2>Digital Twins FAQs</h2>
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

      {/* BLOG */}
      <section className="sa-blogs" id="blogs">
        <div className="sa-container">
          <span className="sa-label">Blog</span>
          <h2>Insights from Our Digital Twin Desk</h2>
          <p className="sa-section-intro">
            Technical explainers and case notes on reduced order models,
            predictive maintenance ML, hybrid modelling, BIM digital threads and
            closed-loop optimization.
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
