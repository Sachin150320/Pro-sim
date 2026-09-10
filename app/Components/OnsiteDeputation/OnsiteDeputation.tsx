"use client";

import React from "react";
import Breadcrumbs from "@/app/Components/Breadcrumbs/Breadcrumbs";
import ScrollAnimation from "@/app/Components/ScrollAnimation";
import {
  UserCheck,
  Users,
  CheckCircle2,
  Workflow,
  Boxes,
  Grid3x3,
  Layers,
  Blocks,
  ClipboardCheck,
  Plane,
  Briefcase,
  ArrowRight,
  Award,
  Globe2,
  BarChart3,
  MessageSquareText,
  Rocket,
  LifeBuoy,
  GraduationCap,
  HeartHandshake,
} from "lucide-react";
import "./OnsiteDeputation.css";

const IMG = "/assets/images/onsite";

const whyProsim = [
  {
    icon: UserCheck,
    title: "Specialised Engineering Expertise",
    desc: "Access experienced professionals with domain knowledge across analysis, modelling, simulation and detailed engineering functions.",
    points: [
      "Experienced engineering professionals",
      "Project-specific skill and software requirements",
      "Flexible resource deployment based on workload",
    ],
  },
  {
    icon: Users,
    title: "Customised Engineering Teams",
    desc: "Build a dedicated team for a defined work package or augment your existing engineering organisation with resources deployed at your location.",
    points: [
      "Single-engineer or multi-disciplinary deployment",
      "Onsite deputation or project-based execution",
      "Teams trained for your processes and deliverables",
    ],
  },
];

const capabilities = [
  {
    icon: Workflow,
    title: "Pipe Stress Engineering",
    desc: "Engineering professionals for piping flexibility and stress analysis activities.",
    tags: ["CAESAR II"],
  },
  {
    icon: Boxes,
    title: "3D Plant Modelling",
    desc: "Plant modelling support across common engineering design and modelling platforms.",
    tags: ["AutoCAD Plant 3D", "E3D", "SP3D"],
  },
  {
    icon: Grid3x3,
    title: "Finite Element Analysis",
    desc: "FEA resources for structural, mechanical and engineering analysis requirements.",
    tags: ["ANSYS", "Abaqus", "OptiStruct"],
  },
  {
    icon: Layers,
    title: "Meshing",
    desc: "Dedicated meshing support for simulation and analysis workflows.",
    tags: ["Altair HyperMesh"],
  },
  {
    icon: Blocks,
    title: "Additional Disciplines",
    desc: "Engineering resources can be developed for other disciplines based on your project scope.",
    tags: ["Customised", "Project-specific"],
  },
  {
    icon: ClipboardCheck,
    title: "Dedicated Project Support",
    desc: "Resources aligned to your workflows, project controls, reporting and deliverables.",
    tags: ["Team Augmentation", "Execution Support"],
  },
];

const stats = [
  { icon: Award, value: "15+", label: "Years of Engineering Experience" },
  { icon: Globe2, value: "10+", label: "Countries Served" },
  { icon: BarChart3, value: "500+", label: "Projects Delivered" },
  { icon: Users, value: "100+", label: "Engineers Deployment-Ready" },
];

const processSteps = [
  {
    icon: MessageSquareText,
    title: "Requirement Discussion",
    desc: "Understand your project scope, engineering disciplines, software stack and deployment timeline.",
  },
  {
    icon: UserCheck,
    title: "Engineer / Team Selection",
    desc: "Match experienced engineers or build a dedicated team aligned to your specific requirement.",
  },
  {
    icon: Rocket,
    title: "Onboarding & Deployment",
    desc: "Engineers are onboarded to your processes and tools, then deployed onsite or project-based.",
  },
  {
    icon: LifeBuoy,
    title: "Ongoing Engagement Support",
    desc: "ProSIM tracks performance and deliverables, providing continuity support through the engagement.",
  },
];

const benefits = [
  {
    icon: Globe2,
    title: "Global Exposure",
    desc: "Work on international projects across nuclear, oil & gas, thermal and power sectors.",
  },
  {
    icon: Users,
    title: "Diverse Engineering Teams",
    desc: "Collaborate with cross-functional, multidisciplinary engineering teams at client locations.",
  },
  {
    icon: GraduationCap,
    title: "Skill & Career Growth",
    desc: "Gain hands-on experience with leading design, analysis and simulation tools.",
  },
  {
    icon: HeartHandshake,
    title: "Structured Support",
    desc: "Continuous support from ProSIM throughout onboarding, deployment and the engagement.",
  },
];

const engagementModels = [
  {
    icon: Plane,
    title: "Onsite Deputation",
    desc: "Deploy experienced ProSIM engineers at your location to work with your engineering, project and execution teams.",
    image: `${IMG}/image_06.png`,
  },
  {
    icon: Briefcase,
    title: "Project-Based Engagement",
    desc: "Assign defined engineering work packages to a dedicated ProSIM team for execution from our engineering office.",
    image: `${IMG}/image_08.png`,
  },
];

export default function OnsiteDeputation() {
  return (
    <main className="seismic-page od-page">
      {/* HERO */}
      <section className="sa-hero">
        <div className="sa-hero-crumbs">
          <Breadcrumbs />
        </div>

        <div className="sa-hero-inner">
          <div className="sa-hero-text">
       
            <h1>
              Experienced engineers. <span>Flexible deployment. </span>
            </h1>

            <p>
              ProSIM provides experienced engineering professionals and
              customised engineering teams to support client requirements
              through project-based engagements or deputation at client
              locations.
            </p>

          </div>

          <div className="sa-hero-media">
            <figure className="sa-hero-media-main">
              <img
                src={`${IMG}/image_18.png`}
                alt="Engineer travelling for an onsite deputation assignment"
                loading="eager"
              />
              <figcaption>Onsite Deputation</figcaption>
            </figure>
            <figure className="sa-hero-media-inset">
              <img
                src={`${IMG}/image_02.png`}
                alt="Passport and travel documents for deployment"
                loading="lazy"
              />
            </figure>
          </div>
        </div>

       
      </section>

      
      {/* WHY PROSIM */}
      <section className="od-why" id="why-prosim">
        <div className="sa-container">
          <ScrollAnimation className="sa-intro">
            <span className="sa-label">Why ProSIM</span>
            <h2>Engineering resources built around your requirement.</h2>
            <p>
              From a specialist engineer to a dedicated project team, ProSIM
              can scale the right engineering capability around your project
              needs.
            </p>
          </ScrollAnimation>

          <div className="od-why-grid">
            {whyProsim.map((item, i) => {
              const Icon = item.icon;
              return (
                <ScrollAnimation key={item.title} delay={i * 100}>
                  <article className="od-why-card">
                    <span className="od-why-icon">
                      <Icon size={24} strokeWidth={1.8} />
                    </span>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                    <ul>
                      {item.points.map((pt) => (
                        <li key={pt}>
                          <CheckCircle2 size={16} strokeWidth={2} />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                </ScrollAnimation>
              );
            })}
          </div>
        </div>
      </section>

      {/* CORE CAPABILITIES */}
      <section className="od-cap" id="capabilities">
        <div className="sa-container">
          <ScrollAnimation className="sa-intro">
            <span className="sa-label">Core Capabilities</span>
            <h2>Engineering disciplines and tools.</h2>
            <p>
              Resources can be trained and deployed across the following key
              engineering areas, with additional disciplines available based
              on project requirements.
            </p>
          </ScrollAnimation>

          <div className="od-cap-grid">
            {capabilities.map((c, i) => {
              const Icon = c.icon;
              return (
                <ScrollAnimation key={c.title} delay={(i % 3) * 90}>
                  <article className="od-cap-card">
                    <span className="od-cap-ghost" aria-hidden="true">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="od-cap-head">
                      <span className="od-cap-icon">
                        <Icon size={21} strokeWidth={1.7} />
                      </span>
                      <span className="od-cap-num">
                        {String(i + 1).padStart(2, "0")}
                        <i>/ {String(capabilities.length).padStart(2, "0")}</i>
                      </span>
                    </div>
                    <h3>{c.title}</h3>
                    <p>{c.desc}</p>
                    <div className="od-cap-tags">
                      {c.tags.map((t) => (
                        <span key={t}>{t}</span>
                      ))}
                    </div>
                  </article>
                </ScrollAnimation>
              );
            })}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="od-process" id="how-it-works">
        <div className="sa-container">
          <div className="od-process-top">
            <ScrollAnimation className="sa-intro">
              <span className="sa-label">How It Works</span>
              <h2>From requirement to a deployed engineering team.</h2>
              <p>
                A structured, transparent process to get the right engineers
                or team working on your project — onsite or from our
                engineering office.
              </p>
            </ScrollAnimation>

            <ScrollAnimation className="od-process-media" delay={80}>
              <img
                src={`${IMG}/image_14.png`}
                alt="Structured engineering deployment process"
                loading="lazy"
              />
            </ScrollAnimation>
          </div>

          <div className="od-process-grid">
            {processSteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <ScrollAnimation key={step.title} delay={i * 100}>
                  <article className="od-process-card">
                    <span className="od-process-num">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="od-process-icon">
                      <Icon size={22} strokeWidth={1.7} />
                    </span>
                    <h3>{step.title}</h3>
                    <p>{step.desc}</p>
                  </article>
                </ScrollAnimation>
              );
            })}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="od-benefits" id="benefits">
        <div className="sa-container">
          <div className="od-benefits-grid">
            <ScrollAnimation className="od-benefits-media">
              <figure className="od-benefits-media-main">
                <img
                  src={`${IMG}/image_18.png`}
                  alt="ProSIM engineers working with global teams"
                  loading="lazy"
                />
              </figure>
              <figure className="od-benefits-media-inset">
                <img
                  src={`${IMG}/image_20.png`}
                  alt="Global engineering footprint"
                  loading="lazy"
                />
              </figure>
            </ScrollAnimation>

            <div>
              <ScrollAnimation className="sa-intro">
                <span className="sa-label">Why Engineers Choose ProSIM</span>
                <h2>Built for engineers who want more than a desk job.</h2>
              </ScrollAnimation>

              <div className="od-benefits-list">
                {benefits.map((b, i) => {
                  const Icon = b.icon;
                  return (
                    <ScrollAnimation key={b.title} delay={i * 90}>
                      <div className="od-benefit-item">
                        <span className="od-benefit-icon">
                          <Icon size={19} strokeWidth={1.8} />
                        </span>
                        <div>
                          <h4>{b.title}</h4>
                          <p>{b.desc}</p>
                        </div>
                      </div>
                    </ScrollAnimation>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ENGAGEMENT MODELS */}
      <section className="od-engage" id="engagement-models">
        <div className="sa-container">
          <ScrollAnimation className="sa-intro sa-intro--dark">
            <span className="sa-label">Engagement Models</span>
            <h2>Support that fits the way you work.</h2>
            <p>
              Choose the model that best matches your project timeline,
              resource needs and execution strategy.
            </p>
          </ScrollAnimation>

          <div className="od-engage-grid">
            {engagementModels.map((m, i) => {
              const Icon = m.icon;
              return (
                <ScrollAnimation key={m.title} delay={i * 110}>
                  <article className="od-engage-card">
                    <div className="od-engage-media">
                      <img src={m.image} alt={m.title} loading="lazy" />
                      <span className="od-engage-num">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div className="od-engage-body">
                      <span className="od-engage-icon">
                        <Icon size={20} strokeWidth={1.8} />
                      </span>
                      <h3>{m.title}</h3>
                      <p>{m.desc}</p>
                    </div>
                  </article>
                </ScrollAnimation>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="od-cta">
        <div className="sa-container">
          <ScrollAnimation className="od-cta-card">
            <div className="od-cta-body">
              <span className="sa-label">Work with ProSIM</span>
              <h2>Need the right engineering team for your next project?</h2>
              <p>
                Share your engineering scope, disciplines, software
                requirements and deployment needs. ProSIM can help structure
                the right resource model around your project.
              </p>
              <a href="/contact-us" className="od-cta-btn">
                Talk to ProSIM <ArrowRight size={17} strokeWidth={1.9} />
              </a>
            </div>
            <div className="od-cta-media">
              <img
                src={`${IMG}/image_19.png`}
                alt="Global engineering deployment network"
                loading="lazy"
              />
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </main>
  );
}
