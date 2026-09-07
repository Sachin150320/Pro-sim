"use client";

import React, { useState } from "react";
import Breadcrumbs from "@/app/Components/Breadcrumbs/Breadcrumbs";
import ScrollAnimation from "@/app/Components/ScrollAnimation";
import {
  Boxes,
  Cog,
  Factory,
  Wrench,
  Building2,
  RefreshCw,
  Blocks,
  LifeBuoy,
  CheckCircle2,
  X,
  ArrowUpRight,
} from "lucide-react";
import ProjectsHighlight from "@/app/Components/ProjectsHighlight/ProjectsHighlight";
import "./HeavyEngineering.css";

const IMG = "/assets/images/industries";

const heroNav = [
  { title: "CAE / FEA", id: "capabilities" },
  { title: "Detailed Engineering", id: "capabilities" },
  { title: "Material Handling", id: "material-handling" },
  { title: "Integrity & Optimisation", id: "experience" },
];

const capabilities = [
  {
    title: "Detailed Engineering",
    desc: "Engineering development for heavy equipment, structures, assemblies and industrial systems, including design detailing and model-based engineering support.",
    tags: ["3D modelling", "Design development", "Engineering documentation"],
  },
  {
    title: "Finite Element Analysis",
    desc: "Static, modal, dynamic and non-linear analyses selected to suit the design question, loading environment and required level of fidelity.",
    tags: ["Linear static", "Modal", "Dynamic", "Non-linear"],
  },
  {
    title: "Design Verification",
    desc: "Verification of strength and stiffness under relevant operating and qualification load cases, with engineering interpretation of stress, displacement and structural response.",
    tags: ["Allowable stress", "Deflection", "Load cases", "Qualification"],
  },
  {
    title: "Design Optimisation",
    desc: "Use simulation feedback to refine section sizes, geometry, material distribution and other design parameters for better structural efficiency.",
    tags: ["Sizing", "Shape", "Topology", "Parametric"],
  },
  {
    title: "Structural Integrity",
    desc: "Assessment of existing equipment and components where operating history, defects, damage or ageing create an engineering decision point.",
    tags: ["RLA / RLE", "FFS", "Fatigue", "Failure analysis"],
  },
  {
    title: "Multi-Physics Engineering",
    desc: "Coupled engineering problems where structural behaviour interacts with thermal, fluid or other physical effects.",
    tags: ["Thermal-mechanical", "CFD", "FSI", "Heat transfer"],
  },
];

const quickLinks = [
  {
    title: "Design verification & optimisation for material handling equipment",
    href: "#material-handling",
    image: "/assets/images/industries/detail-indutsries.jpg",
  },
  {
    title: "From design question to engineering answer",
    href: "#approach",
    image: "assets/images/industries/3D-plant-modelling-services/3.png",
  },
  {
    title: "FEA-driven evaluation of cranes, hoists & supporting structures",
    href: "#experience",
    image: "/assets/images/industries/thermal/4.jpg",
  },
  {
    title: "Where heavy engineering meets performance",
    href: "#applications",
    image: "/assets/images/industries/oil-gas/4.jpeg",
  },
];

const materialHandling = [
  {
    title: "Structural verification",
    desc: "Evaluate stress, deformation and structural response under relevant load cases.",
  },
  {
    title: "Design optimisation",
    desc: "Identify practical modifications to improve structural efficiency and performance.",
  },
  {
    title: "Seismic qualification",
    desc: "Assess crane systems and components for seismic load combinations where required.",
  },
  {
    title: "Component checks",
    desc: "Extend analysis to items such as girders, end carriages, trolleys, welds and bolted connections.",
  },
];

const approachSteps = [
  {
    title: "Define the engineering problem",
    desc: "Understand geometry, materials, operating conditions, loading, constraints and the design objective.",
  },
  {
    title: "Build and verify the analysis model",
    desc: "Prepare the FE model, mesh, boundary conditions and load cases appropriate to the problem.",
  },
  {
    title: "Interpret the response",
    desc: "Examine critical stress, deformation, modes, non-linear response or other governing results.",
  },
  {
    title: "Modify, optimise and re-verify",
    desc: "Translate results into design changes and close the loop through comparative re-analysis.",
  },
];

const experiencePoints = [
  "Evaluation of EOT and gantry crane structures and components.",
  "Assessment of safe working, dead-weight, handling and other relevant load conditions.",
  "Design changes such as stiffening, cross-supports or section / material revisions where required.",
  "Re-analysis to demonstrate the effect of design modifications and establish the improved configuration.",
];

const applications: {
  icon: React.ComponentType<{ size?: number; strokeWidth?: number }>;
  title: string;
  desc: string;
}[] = [
  {
    icon: Boxes,
    title: "Material Handling",
    desc: "Cranes, hoists, trestles, girders, trolleys and associated structures.",
  },
  {
    icon: Cog,
    title: "Heavy Machinery",
    desc: "Frames, bases, platforms, machine structures and fabricated assemblies.",
  },
  {
    icon: Factory,
    title: "Industrial Equipment",
    desc: "Equipment packages, skids, supports and engineered mechanical systems.",
  },
  {
    icon: Wrench,
    title: "Special Purpose Equipment",
    desc: "Custom machinery where development depends on engineering analysis.",
  },
  {
    icon: Building2,
    title: "Steel Structures",
    desc: "Structural members, support structures and fabricated systems.",
  },
  {
    icon: RefreshCw,
    title: "Existing Assets",
    desc: "Integrity, remaining-life and fitness-for-service evaluations.",
  },
  {
    icon: Blocks,
    title: "Product Development",
    desc: "Design iterations supported by CAE and simulation-driven engineering.",
  },
  {
    icon: LifeBuoy,
    title: "Engineering Support",
    desc: "Extended teams for defined work packages, outsourcing and engineering capacity.",
  },
];

const emptyForm = { name: "", phone: "", email: "", company: "" };

export default function HeavyEngineering() {
  const [modalOpen, setModalOpen] = useState(false);
  const [form, setForm] = useState(emptyForm);
  const [submitted, setSubmitted] = useState(false);

  const openForm = () => {
    setForm(emptyForm);
    setSubmitted(false);
    setModalOpen(true);
  };
  const closeForm = () => setModalOpen(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="seismic-page">
      {/* HERO */}
      <section className="sa-hero">
        <div className="sa-hero-crumbs">
          <Breadcrumbs />
        </div>

        <div className="sa-hero-inner">
          <ScrollAnimation className="sa-hero-text">
            <h1>
              <span>Engineering the structure</span> behind heavy industry.
            </h1>
            <p>
              ProSIM combines detailed engineering, CAE / FEA and engineering
              judgement to help heavy engineering organisations verify designs,
              solve structural problems and optimise equipment before costly
              design changes reach fabrication or site.
            </p>

           
          </ScrollAnimation>

          <ScrollAnimation className="sa-hero-media" delay={120}>
            <figure className="sa-hero-media-main">
              <img
                src={`${IMG}/ind-industrial.jpg`}
                alt="Heavy engineering equipment and structures"
                loading="eager"
              />
              <figcaption>Heavy Engineering</figcaption>
            </figure>
            <figure className="sa-hero-media-inset">
              <img
                src={`${IMG}/detail-indutsries.jpg`}
                alt="Industrial equipment and fabrication"
                loading="lazy"
              />
            </figure>
          </ScrollAnimation>

         
        </div>
      </section>

      {/* TECHNICAL CAPABILITY */}
      <section className="sa-services" id="capabilities">
        <div className="sa-container">
          <ScrollAnimation className="sa-intro">
            <span className="sa-label">Technical Capability</span>
            <h2>More than analysis. Engineering decisions.</h2>
            <p>
              ProSIM&rsquo;s heavy engineering offering brings design, simulation
              and assessment together so that analysis results can be used to
              improve the equipment itself — not simply to generate a report.
            </p>
          </ScrollAnimation>

          <div className="he-grid">
            {capabilities.map((c, i) => (
              <ScrollAnimation key={c.title} delay={(i % 2) * 90}>
                <article className="he-card">
                  <span className="he-card-num">
                    {String(i + 1).padStart(2, "0")} / {capabilities.length}
                  </span>
                  <h3>{c.title}</h3>
                  <p>{c.desc}</p>
                  <div className="he-tags">
                    {c.tags.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                </article>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* QUICK LINK CARDS */}
      <section className="nk-quick">
        <div className="sa-container">
          <div className="nk-ql-grid">
            {quickLinks.map((q, i) => (
              <ScrollAnimation key={q.title} delay={i * 90}>
                <a href={q.href} className="nk-ql-card">
                  <div className="nk-ql-img">
                    <img src={q.image} alt={q.title} loading="lazy" />
                  </div>
                  <div className="nk-ql-cap">
                    <span>{q.title}</span>
                  </div>
                </a>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* MATERIAL HANDLING */}
      <section className="sa-clients" id="material-handling">
        <div className="sa-container">
          <div className="sa-ind-head">
            <span className="sa-label">Material Handling</span>
            <h2>
              Design verification and optimisation for equipment that has to
              carry the load.
            </h2>
            <p>
              ProSIM has executed engineering design and structural evaluation
              work for material handling equipment. Our experience includes EOT
              cranes, gantry cranes, manual cranes, electric hoists and trestle
              structures.
            </p>
          </div>

          <div className="sa-ind-layout">
            <div className="sa-ind-main">
              <ScrollAnimation className="sa-point-grid">
                {materialHandling.map((m, i) => (
                  <div className="sa-point-box" key={m.title}>
                    <span className="sa-point-num">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="sa-point-body">
                      <h4>{m.title}</h4>
                      <p>{m.desc}</p>
                    </div>
                  </div>
                ))}
              </ScrollAnimation>
            </div>

            <div className="sa-ind-media">
              <figure className="sa-ind-photo">
                <img
                  src="/assets/images/industries/heavy/1.jpg"
                  alt="Material handling equipment — cranes and hoists"
                  loading="lazy"
                />
                <figcaption className="sa-ind-badge">EOT &amp; Gantry Cranes</figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* ENGINEERING APPROACH */}
      <section className="sa-services" id="approach">
        <div className="sa-container">
          <ScrollAnimation className="sa-intro">
            <span className="sa-label">Engineering Approach</span>
            <h2>From design question to engineering answer.</h2>
            <p>
              A good simulation is only useful when it closes the loop with the
              designer. Our workflow is built around that loop.
            </p>
          </ScrollAnimation>

          <ScrollAnimation className="sa-point-grid">
            {approachSteps.map((s, i) => (
              <div className="sa-point-box" key={s.title}>
                <span className="sa-point-num">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="sa-point-body">
                  <h4>{s.title}</h4>
                  <p>{s.desc}</p>
                </div>
              </div>
            ))}
          </ScrollAnimation>

          <ScrollAnimation className="he-loop">
            <strong>Simulation-led design loop</strong>
            <span className="he-loop-steps">
              Model <i>&rarr;</i> Load <i>&rarr;</i> Solve <i>&rarr;</i> Interpret{" "}
              <i>&rarr;</i> Modify <i>&rarr;</i> Verify
            </span>
          </ScrollAnimation>
        </div>
      </section>

      {/* RELEVANT EXPERIENCE */}
      <section className="sa-clients" id="experience">
        <div className="sa-container">
          <div className="sa-ind-head">
            <span className="sa-label">Relevant Experience</span>
            <h2>
              Material handling is not just an application. It is a design
              problem.
            </h2>
            <p>
              Our work with material handling companies has included design
              verification and optimisation where structural behaviour, operating
              loads and qualification requirements influence the final
              configuration.
            </p>
          </div>

          <div className="sa-ind-layout">
            <div className="sa-ind-main">
              <ScrollAnimation className="he-exp-block">
                <span className="sa-label">Material Handling Equipment</span>
                <h3>
                  FEA-driven evaluation of cranes, hoists and supporting
                  structures.
                </h3>
                <p>
                  The analysis objective can range from checking the adequacy of
                  an existing design to identifying why a design is not meeting
                  stress or deflection criteria — and then determining what
                  should change.
                </p>
                <ul className="he-check">
                  {experiencePoints.map((p) => (
                    <li key={p}>
                      <CheckCircle2 size={18} strokeWidth={1.9} />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </ScrollAnimation>
            </div>

            <div className="sa-ind-media">
              <figure className="sa-ind-photo">
                <img
                  src={`${IMG}/detail-engg-3.png`}
                  alt="FEA evaluation of crane and hoist structures"
                  loading="lazy"
                />
                <figcaption className="sa-ind-badge">FEA Evaluation</figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* APPLICATIONS */}
      <section className="sa-ssc" id="applications">
        <div className="sa-container">
          <ScrollAnimation className="sa-intro">
            <span className="sa-label">Applications</span>
            <h2>Where heavy engineering meets performance.</h2>
            <p>
              Support across engineered products, equipment and industrial assets
              where strength, stiffness, durability or qualification matters.
            </p>
          </ScrollAnimation>

          <div className="nk-cap-grid">
            {applications.map((a) => {
              const Icon = a.icon;
              return (
                <ScrollAnimation key={a.title}>
                  <div className="nk-cap-box">
                    <span className="nk-cap-icon">
                      <Icon size={20} strokeWidth={1.8} />
                    </span>
                    <p>
                      <strong>{a.title}</strong>
                      <br />
                      {a.desc}
                    </p>
                  </div>
                </ScrollAnimation>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <ProjectsHighlight />

      {/* ENQUIRY MODAL */}
      {modalOpen && (
        <div
          className="nk-modal-overlay"
          role="dialog"
          aria-modal="true"
          aria-label="Start an engineering discussion"
          onClick={closeForm}
        >
          <div className="nk-modal" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="nk-modal-close"
              aria-label="Close"
              onClick={closeForm}
            >
              <X size={20} strokeWidth={1.8} />
            </button>

            {submitted ? (
              <div className="nk-modal-done">
                <CheckCircle2 size={44} strokeWidth={1.6} />
                <h3>Thank you</h3>
                <p>
                  Your enquiry has been received. Our heavy engineering team will
                  get back to you shortly.
                </p>
                <button type="button" className="nk-modal-submit" onClick={closeForm}>
                  Close
                </button>
              </div>
            ) : (
              <>
                <span className="sa-label">Engineering Enquiry</span>
                <h3>Start an engineering discussion</h3>
                <p className="nk-modal-sub">
                  Share your details and a short note on the equipment or design
                  question — we&rsquo;ll take it from there.
                </p>

                <form className="nk-form" onSubmit={handleSubmit}>
                  <label>
                    <span>Name</span>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                  </label>
                  <label>
                    <span>Phone Number</span>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    />
                  </label>
                  <label>
                    <span>Email Address</span>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                  </label>
                  <label>
                    <span>Company Name</span>
                    <input
                      type="text"
                      required
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                    />
                  </label>

                  <button type="submit" className="nk-modal-submit">
                    Submit Enquiry
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
