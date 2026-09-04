"use client";

import React, { useState } from "react";
import Breadcrumbs from "@/app/Components/Breadcrumbs/Breadcrumbs";
import ScrollAnimation from "@/app/Components/ScrollAnimation";
import {
  MapPin,
  Clock,
  Factory,
  Plus,
  Minus,
  X,
  CheckCircle2,
  GraduationCap,
  Users,
  Sparkles,
  Mail,
} from "lucide-react";
import "./CareersPage.css";

const IMG = "/assets/images/portfolio/modern";

type Job = {
  title: string;
  location: string;
  exp: string;
  industry: string;
  responsibilities: string[];
  requirements: string[];
};

const jobs: Job[] = [
  {
    title: "Pipe Stress Engineer (CAESAR II)",
    location: "Bengaluru",
    exp: "1–3 Years",
    industry: "Water Technology & Process Plants",
    responsibilities: [
      "Perform piping stress and flexibility analysis using CAESAR II.",
      "Design and select piping support systems.",
      "Review P&IDs, layouts and isometric drawings.",
      "Evaluate equipment nozzle loads.",
      "Coordinate with multidisciplinary engineering teams.",
      "Prepare engineering reports and project deliverables.",
    ],
    requirements: [
      "B.E. / B.Tech in Mechanical Engineering.",
      "1–3 years of CAESAR II experience.",
      "Knowledge of ASME B31.3.",
      "Strong analytical and communication skills.",
    ],
  },
  {
    title: "Structural Engineer (STAAD.Pro & Tekla)",
    location: "Bengaluru",
    exp: "5+ Years",
    industry: "Oil & Gas / Industrial",
    responsibilities: [
      "Structural analysis and design using STAAD.Pro.",
      "3D modelling and detailing using Tekla Structures.",
      "Prepare structural calculations, BOQs and MTOs.",
      "Coordinate with multidisciplinary teams.",
      "Ensure compliance with IS Codes and Eurocodes.",
    ],
    requirements: [
      "B.E. / B.Tech in Civil Engineering.",
      "5+ years of structural engineering experience.",
      "Proficiency in STAAD.Pro and Tekla Structures.",
      "Knowledge of RC and structural steel design.",
    ],
  },
  {
    title: "Structural Engineer (SACS)",
    location: "Bengaluru",
    exp: "5+ Years",
    industry: "Offshore Oil & Gas",
    responsibilities: [
      "Offshore structural analysis using Bentley SACS.",
      "Jacket, topside, module and platform design.",
      "Transportation, lifting, seismic and load-out analysis.",
      "Prepare structural engineering reports.",
      "Coordinate with multidisciplinary teams.",
    ],
    requirements: [
      "Civil / Structural / Ocean Engineering degree.",
      "Minimum 5 years of offshore experience.",
      "Strong knowledge of API, ISO and offshore design standards.",
      "Proficiency in Bentley SACS.",
    ],
  },
  {
    title: "Revit Structural Engineer",
    location: "Bengaluru",
    exp: "5+ Years",
    industry: "Oil & Gas / EPC",
    responsibilities: [
      "Develop structural BIM models using Autodesk Revit.",
      "Produce GA drawings and structural documentation.",
      "Perform multidisciplinary coordination.",
      "Participate in model reviews.",
      "Maintain BIM standards.",
    ],
    requirements: [
      "Civil Engineering degree.",
      "Advanced Autodesk Revit proficiency.",
      "Experience in industrial / Oil & Gas projects.",
      "Knowledge of IS Codes.",
    ],
  },
  {
    title: "Plant Piping Engineer (AVEVA E3D)",
    location: "Bengaluru",
    exp: "3–7 Years",
    industry: "Oil & Gas / Process Plants",
    responsibilities: [
      "Develop 3D plant models using AVEVA E3D.",
      "Perform piping routing and equipment modelling.",
      "Generate isometrics, GA drawings and MTOs.",
      "Conduct clash detection and model coordination.",
      "Review engineering inputs and vendor drawings.",
    ],
    requirements: [
      "Mechanical Engineering degree or Diploma.",
      "3–7 years of piping design experience.",
      "Strong AVEVA E3D knowledge.",
      "Familiarity with ASME piping codes.",
    ],
  },
  {
    title: "Sr. Electrical Engineer",
    location: "Mumbai",
    exp: "8+ Years",
    industry: "Onshore Projects",
    responsibilities: [
      "Prepare SLDs and electrical calculations.",
      "Equipment sizing and specification development.",
      "Vendor document review.",
      "Procurement engineering support.",
      "Layout coordination and technical reviews.",
    ],
    requirements: [
      "Minimum 8 years of relevant experience.",
      "Strong knowledge of MV / LV systems.",
      "Experience in engineering consultancy.",
      "Mumbai-based candidates preferred.",
    ],
  },
  {
    title: "S3D Electrical Designer / Engineer",
    location: "Mumbai",
    exp: "8+ Years",
    industry: "Onshore Projects",
    responsibilities: [
      "Develop 3D electrical models using SmartPlant 3D.",
      "Prepare power, lighting and earthing layouts.",
      "Generate engineering drawings.",
      "Coordinate with multidisciplinary teams.",
      "Support project model reviews.",
    ],
    requirements: [
      "8+ years of electrical design experience.",
      "Proficiency in SmartPlant 3D and SmartSketch.",
      "Knowledge of AutoCAD and MicroStation.",
      "Mumbai-based candidates preferred.",
    ],
  },
];

const culture = [
  {
    icon: GraduationCap,
    title: "Career Growth",
    body: "We encourage continuous learning, technical development and career progression through challenging assignments and collaborative teamwork.",
  },
  {
    icon: Users,
    title: "Collaborative Work Environment",
    body: "Work in a culture that values innovation, teamwork, integrity and technical excellence.",
  },
  {
    icon: Sparkles,
    title: "Ready to Join Us?",
    body: "We're always looking for talented engineers who are passionate about solving complex engineering challenges.",
  },
];

const emptyForm = { name: "", email: "", phone: "", company: "" };

export default function CareersPage() {
  const [openJob, setOpenJob] = useState<number | null>(0);
  const [applyRole, setApplyRole] = useState<string | null>(null);
  const [form, setForm] = useState(emptyForm);
  const [submitted, setSubmitted] = useState(false);

  const openApply = (role: string) => {
    setApplyRole(role);
    setForm(emptyForm);
    setSubmitted(false);
  };
  const closeApply = () => setApplyRole(null);
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
              <span>Build Your Engineering Career</span> with ProSIM.
            </h1>

            <p>
              At ProSIM, solving complex engineering challenges requires
              exceptional talent, technical expertise and continuous innovation.
              For over two decades we have delivered world-class engineering,
              design, simulation and digital engineering solutions across Oil
              &amp; Gas, Water Technology, Petrochemical, Power, Infrastructure
              and other industrial sectors.
            </p>

           
          </ScrollAnimation>

          <ScrollAnimation className="sa-hero-media" delay={120}>
            <figure className="sa-hero-media-main">
              <img src={`${IMG}/2.webp`} alt="Engineering careers at ProSIM" loading="eager" />
              <figcaption>Join ProSIM</figcaption>
            </figure>
            <figure className="sa-hero-media-inset">
              <img src={`${IMG}/6.webp`} alt="ProSIM engineering team" loading="lazy" />
            </figure>
          </ScrollAnimation>
        </div>
      </section>

      {/* CURRENT OPENINGS */}
      <section className="sa-services" id="openings">
        <div className="sa-container">
          <ScrollAnimation className="sa-intro">
            <span className="sa-label">Current Openings</span>
            <h2>Open Roles at ProSIM</h2>
            <p>
              {jobs.length} positions across Bengaluru and Mumbai. Expand a role
              to see the details and apply.
            </p>
          </ScrollAnimation>

          <ScrollAnimation className="cr-accordion">
            {jobs.map((job, i) => {
              const isOpen = openJob === i;

              return (
                <div className={`cr-item ${isOpen ? "active" : ""}`} key={job.title}>
                  <button
                    type="button"
                    className="cr-head"
                    onClick={() => setOpenJob(isOpen ? null : i)}
                    aria-expanded={isOpen}
                  >
                    <div className="cr-head-main">
                      <h3>{job.title}</h3>
                      <div className="cr-badges">
                        <span className="cr-badge cr-badge--loc">
                          <MapPin size={13} strokeWidth={2} />
                          {job.location}
                        </span>
                        <span className="cr-badge cr-badge--exp">
                          <Clock size={13} strokeWidth={2} />
                          {job.exp}
                        </span>
                        <span className="cr-badge cr-badge--ind">
                          <Factory size={13} strokeWidth={2} />
                          {job.industry}
                        </span>
                      </div>
                    </div>
                    <span className="cr-toggle">
                      {isOpen ? (
                        <Minus size={18} strokeWidth={2} />
                      ) : (
                        <Plus size={18} strokeWidth={2} />
                      )}
                    </span>
                  </button>

                  <div className={`cr-body ${isOpen ? "show" : ""}`}>
                    <div className="cr-body-inner">
                      <div className="cr-cols">
                        <div>
                          <h4>Key Responsibilities</h4>
                          <ul>
                            {job.responsibilities.map((r) => (
                              <li key={r}>{r}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4>Requirements</h4>
                          <ul>
                            {job.requirements.map((r) => (
                              <li key={r}>{r}</li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <button
                        type="button"
                        className="cr-apply"
                        onClick={() => openApply(job.title)}
                      >
                        Apply for this Position
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </ScrollAnimation>
        </div>
      </section>

      {/* CULTURE */}
      <section className="sa-ssc" id="culture">
        <div className="sa-container">
          <ScrollAnimation>
            <span className="sa-label">Life at ProSIM</span>
            <h2>Career Growth &amp; Collaborative Culture</h2>
          </ScrollAnimation>

          <ScrollAnimation className="cr-culture">
            {culture.map((c) => {
              const Icon = c.icon;

              return (
                <div className="cr-culture-card" key={c.title}>
                  <span>
                    <Icon size={22} strokeWidth={1.7} />
                  </span>
                  <h3>{c.title}</h3>
                  <p>{c.body}</p>
                </div>
              );
            })}
          </ScrollAnimation>

          <ScrollAnimation className="cr-cta">
            <div>
              <h3>Apply Now</h3>
              <p>
                Send your CV and a short note about the role you&rsquo;re
                interested in.
              </p>
            </div>
            <a href="mailto:HR@pro-sim.com" className="cr-cta-btn">
              <Mail size={17} strokeWidth={1.9} />
              HR@pro-sim.com
            </a>
          </ScrollAnimation>
        </div>
      </section>

      {/* APPLY MODAL */}
      {applyRole && (
        <div
          className="nk-modal-overlay"
          role="dialog"
          aria-modal="true"
          aria-label="Apply for position"
          onClick={closeApply}
        >
          <div className="nk-modal" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="nk-modal-close"
              aria-label="Close"
              onClick={closeApply}
            >
              <X size={20} strokeWidth={1.8} />
            </button>

            {submitted ? (
              <div className="nk-modal-done">
                <CheckCircle2 size={44} strokeWidth={1.6} />
                <h3>Application received</h3>
                <p>
                  Thank you for applying for <strong>{applyRole}</strong>. Our HR
                  team will review your details and get back to you. You can also
                  email your CV to HR@pro-sim.com.
                </p>
                <button type="button" className="nk-modal-submit" onClick={closeApply}>
                  Close
                </button>
              </div>
            ) : (
              <>
                <span className="sa-label">Apply</span>
                <h3>{applyRole}</h3>
                <p className="nk-modal-sub">
                  Share your details and our HR team will be in touch. Email your
                  CV to HR@pro-sim.com.
                </p>

                <form className="nk-form" onSubmit={handleSubmit}>
                  <label>
                    <span>Full Name</span>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
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
                    <span>Phone Number</span>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    />
                  </label>

                  <label>
                    <span>Current / Most Recent Company</span>
                    <input
                      type="text"
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                    />
                  </label>

                  <button type="submit" className="nk-modal-submit">
                    Submit Application
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
