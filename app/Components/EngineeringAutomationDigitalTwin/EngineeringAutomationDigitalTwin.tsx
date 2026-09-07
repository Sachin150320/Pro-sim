"use client";

import React, { useState } from "react";
import Breadcrumbs from "@/app/Components/Breadcrumbs/Breadcrumbs";
import { Gauge, Cpu, Blend, Building2, FlaskConical, Plus, Minus } from "lucide-react";
import ProjectsHighlight from "@/app/Components/ProjectsHighlight/ProjectsHighlight";
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

      {/* PROJECTS */}
      <ProjectsHighlight />

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
