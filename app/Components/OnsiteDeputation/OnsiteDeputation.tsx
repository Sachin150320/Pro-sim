"use client";

import React from "react";
import Breadcrumbs from "@/app/Components/Breadcrumbs/Breadcrumbs";
import ScrollAnimation from "@/app/Components/ScrollAnimation";
import {
  CheckCircle2,
  ArrowRight,
  Award,
  Globe2,
  BarChart3,
  Users,
  Zap,
  Target,
  Workflow,
  Boxes,
  Grid3x3,
  Layers,
  MessageSquareText,
  UserCheck,
  GraduationCap,
  Plane,
  TrendingUp,
  Puzzle,
  Gauge,
  Clock,
} from "lucide-react";
import "./OnsiteDeputation.css";

const IMG = "/assets/images/onsite";

/* STATS STRIP */
const stats = [
  { icon: Award, value: "15+", label: "Years of Engineering Experience" },
  { icon: Globe2, value: "10+", label: "Countries Served" },
  { icon: BarChart3, value: "500+", label: "Projects Delivered" },
  { icon: Users, value: "100+", label: "Engineers Deployment-Ready" },
];

/* WHY ONSITE DEPUTATION */
const whyDeputation = [
  {
    icon: Zap,
    title: "Immediate Capacity",
    desc: "Add engineers around an active project, work package or workload peak.",
  },
  {
    icon: Users,
    title: "Direct Team Integration",
    desc: "Resources work alongside your engineering and project teams at your location.",
  },
  {
    icon: Target,
    title: "Project-Specific Fit",
    desc: "Resource selection can be aligned to your discipline, tools, standards and scope.",
  },
];

/* DEPLOYMENT CAPABILITIES */
const capabilities = [
  {
    icon: Workflow,
    title: "Pipe Stress Engineers",
    desc: "Engineers supporting piping flexibility and stress analysis activities for project requirements.",
    tag: "CAESAR II",
  },
  {
    icon: Boxes,
    title: "3D Plant Modellers",
    desc: "Plant modelling professionals who can work within your modelling environment and project workflows.",
    tag: "AVEVA E3D · AutoCAD Plant 3D · SP3D",
  },
  {
    icon: Grid3x3,
    title: "FEA Engineers",
    desc: "Finite element analysis resources supporting mechanical and structural engineering requirements.",
    tag: "ANSYS · Abaqus · OptiStruct",
  },
  {
    icon: Layers,
    title: "HyperMesh / CAE Engineers",
    desc: "CAE professionals supporting preprocessing, meshing and simulation preparation activities.",
    tag: "Altair HyperMesh",
  },
];

const preparationPoints = [
  "Engineering standards & procedures",
  "Preferred software practices",
  "Project workflows & controls",
  "Documentation & deliverables",
  "Design codes & project requirements",
  "QA/QC expectations",
];

/* HOW IT WORKS */
const steps = [
  {
    icon: MessageSquareText,
    tag: "01 — Requirement",
    title: "Define the need",
    desc: "Share the project scope, discipline, software environment, experience level and deployment requirement.",
  },
  {
    icon: UserCheck,
    tag: "02 — Selection",
    title: "Identify the engineer",
    desc: "ProSIM proposes suitable engineering resources based on the role and project expectations.",
  },
  {
    icon: GraduationCap,
    tag: "03 — Prepare",
    title: "Align to your team",
    desc: "Where required, engineers are prepared on client-specific tools, standards, workflows and deliverables.",
  },
  {
    icon: Plane,
    tag: "04 — Deploy",
    title: "Join the project",
    desc: "The selected engineer is deployed at your location and works directly with the project team.",
  },
];

/* WHEN IT MAKES SENSE */
const fitCases = [
  {
    icon: TrendingUp,
    title: "Project ramp-up",
    desc: "Increase engineering capacity when a new project or work package moves into execution.",
  },
  {
    icon: Puzzle,
    title: "Specialist skill gap",
    desc: "Add a specific analysis, modelling or simulation capability to an existing team.",
  },
  {
    icon: Gauge,
    title: "Peak workload",
    desc: "Support delivery during periods of high workload without permanently expanding the team.",
  },
  {
    icon: Clock,
    title: "Longer-term support",
    desc: "Maintain dedicated engineering resources at your location for continuing project requirements.",
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
              Experienced engineers. <span>Deployed around your project.</span>
            </h1>

            <p>
              Add proven engineering professionals to your team without
              waiting to build capacity internally. ProSIM deputes skilled
              engineers to work at your location, aligned to your project
              scope, software environment, standards and ways of working.
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

      

      {/* WHY ONSITE DEPUTATION */}
      <section className="od-why" id="why-deputation">
        <div className="sa-container">
          <ScrollAnimation className="sa-intro">
            <span className="sa-label">Why Onsite Deputation</span>
            <h2>Add engineering capacity where the work happens.</h2>
            <p>
              Onsite deputation gives your project team direct access to
              experienced engineering resources when workload, schedules or
              specialist requirements call for additional capacity.
            </p>
          </ScrollAnimation>

          <div className="od-why-grid">
            {whyDeputation.map((item, i) => {
              const Icon = item.icon;
              return (
                <ScrollAnimation key={item.title} delay={i * 100}>
                  <article className="od-why-card">
                    <span className="od-why-icon">
                      <Icon size={24} strokeWidth={1.8} />
                    </span>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </article>
                </ScrollAnimation>
              );
            })}
          </div>
        </div>
      </section>

      {/* DEPLOYMENT CAPABILITIES */}
      <section className="od-cap" id="deployment-capabilities">
        <div className="sa-container">
          <ScrollAnimation className="sa-intro">
            <span className="sa-label">Deployment Capabilities</span>
            <h2>Bring the right engineering specialists into your team.</h2>
            <p>
              ProSIM can deploy experienced professionals across core
              analysis, modelling and simulation functions.
            </p>
          </ScrollAnimation>

          <div className="od-cap-grid">
            {capabilities.map((c, i) => {
              const Icon = c.icon;
              return (
                <ScrollAnimation key={c.title} delay={(i % 2) * 100}>
                  <article className="od-cap-card">
                    <span className="od-cap-icon">
                      <Icon size={23} strokeWidth={1.7} />
                    </span>

                    <h3>{c.title}</h3>
                    <p>{c.desc}</p>

                    <div className="od-cap-tags">
                      <span>{c.tag}</span>
                    </div>

                    <span className="od-cap-watermark" aria-hidden="true">
                      <Icon size={108} strokeWidth={1} />
                    </span>
                  </article>
                </ScrollAnimation>
              );
            })}
          </div>

          <ScrollAnimation delay={120}>
            <div className="od-prep">
              <span className="sa-label">Client-Specific Preparation</span>
              <h3>Train for your engineering environment.</h3>
              <p>
                Where required, selected engineers can be prepared before
                deployment so they are familiar with the way your team works.
              </p>

              <ul className="od-prep-list">
                {preparationPoints.map((pt) => (
                  <li key={pt}>
                    <CheckCircle2 size={16} strokeWidth={2} />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="od-process" id="how-it-works">
        <div className="sa-container">
          <div className="od-process-top">
            <ScrollAnimation className="sa-intro">
              <span className="sa-label">How It Works</span>
              <h2>A straightforward path from requirement to deployment.</h2>
              <p>
                The engagement is structured around your actual project need,
                with the resource profile defined before deployment.
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
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <ScrollAnimation key={step.title} delay={i * 100}>
                  <article className="od-process-card">
                    <span className="od-process-num">{step.tag}</span>
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

      {/* WHEN IT MAKES SENSE */}
      <section className="od-benefits" id="when-it-makes-sense">
        <div className="sa-container">
          <div className="od-benefits-grid">
        

            <div>
              <ScrollAnimation className="sa-intro">
                <span className="sa-label">When It Makes Sense</span>
                <h2>Built for changing project demands.</h2>
                <p>
                  Onsite deputation is suited to situations where the
                  requirement is specific, time-sensitive or difficult to
                  cover with existing resources.
                </p>
              </ScrollAnimation>

              <div className="od-benefits-list">
                {fitCases.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <ScrollAnimation key={item.title} delay={i * 90}>
                      <div className="od-benefit-item">
                        <span className="od-benefit-icon">
                          <Icon size={19} strokeWidth={1.8} />
                        </span>
                        <div>
                          <h4>{item.title}</h4>
                          <p>{item.desc}</p>
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

      {/* CTA */}
      <section className="od-cta">
        <div className="sa-container">
          <ScrollAnimation className="od-cta-card">
            <div className="od-cta-body">
              <span className="sa-label">Let&rsquo;s Discuss Your Requirement</span>
              <h2>Need an experienced engineer at your location?</h2>
              <p>
                Share the discipline, project scope, software environment and
                expected deployment duration. ProSIM can help identify the
                right engineering resource for your team.
              </p>
              <div className="od-cta-actions">
                <a href="/contact-us" className="od-cta-btn">
                  Talk to ProSIM <ArrowRight size={17} strokeWidth={1.9} />
                </a>
                
              </div>
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
