"use client";

import { useState } from "react";
import Breadcrumbs from "@/app/Components/Breadcrumbs/Breadcrumbs";
import ScrollAnimation from "@/app/Components/ScrollAnimation";
import { ArrowRight } from "lucide-react";
import "./ProjectsPage.css";

const P = "/assets/images/portfolio/modern";

const PROJ = "/assets/images/project";

type Project = { title: string; desc: string; image: string };

const categories: {
  id: string;
  label: string;
  blurb: string;
  projects: Project[];
}[] = [
  {
    id: "seismic",
    label: "Seismic Analysis & Qualification",
    blurb:
      "FEA-based seismic qualification of safety-critical equipment and structures.",
    projects: [
      {
        title:
          "Seismic Qualification of a 3.2 MW Induction Motor for a CCW Pump",
        desc: "Equipment qualification for Operating Basis Earthquake (OBE) loading, giving the customer the confidence to release the motor for manufacturing and supply it to a nuclear power plant site — a decision that could not be made without seismic qualification proof.",
        image: `${PROJ}/4.jpg`,
      },
    ],
  },
  {
    id: "piping",
    label: "Piping & Pipeline Engineering",
    blurb:
      "Layout, routing and pipe stress analysis across plant piping and onshore/offshore pipelines.",
    projects: [
      {
        title: "Pipe Stress Analysis of a 44-inch Incinerator Line",
        desc: "Static and dynamic pipe stress analysis validating a proposed incinerator piping design modification, enabling the customer to approve and proceed with site modifications while improving incinerator efficiency and minimising the risk of future operational failures.",
        image: `${PROJ}/2.jpg`,
      },
      {
        title: "Pipe Stress Analysis of a 40 MLD Desalination Plant",
        desc: "Pipe stress analysis of critical piping systems under operating and environmental loads for a 40 MLD desalination plant, ensuring piping integrity, safety and code compliance to support safe and reliable plant execution.",
        image: `${PROJ}/5.jpg`,
      },
    ],
  },
  {
    id: "fea",
    label: "Finite Element Analysis (FEA)",
    blurb:
      "Linear, non-linear, dynamic and multi-physics FEA that drives design decisions.",
    projects: [
      {
        title: "FEA of a Wind Turbine Generator (WTG) Transformer",
        desc: "FEA-based structural validation of a WTG transformer under transportation, lifting and extreme-wind acceleration loads. Critical stress regions were identified and the lifting arrangement, tie-down configuration and weld design were optimised for a manufacturing-ready design.",
        image: `${PROJ}/3.jpg`,
      },
    ],
  },
  {
    id: "rla",
    label: "RLA/RLE & Fitness-for-Service (FFS)",
    blurb:
      "Remaining-life assessment, Fitness-for-Service and repair-reuse-retire engineering verdicts.",
    projects: [
      {
        title:
          "Fitness-for-Service Assessment of a Pipeline During Lifting Operations",
        desc: "Fitness-for-Service assessment of a live pipeline affected by Corrosion Under Pipe Support (CUPS), validating structural integrity during a 50 mm lift for UT inspection. Reusable lifting guidelines were developed defining safe criteria for multiple pipe sizes and configurations.",
        image: `${PROJ}/1.jpg`,
      },
    ],
  },
];

export default function ProjectsPage() {
  const [active, setActive] = useState(categories[0].id);
  const current = categories.find((c) => c.id === active) ?? categories[0];

  return (
    <main className="seismic-page pr-page">
      {/* HERO */}
      <section className="sa-hero">
        <div className="sa-hero-crumbs">
          <Breadcrumbs />
        </div>

        <div className="sa-hero-inner">
          <div className="sa-hero-text">
           <h1>
              <span>Engineering Projects</span> Across Every Discipline.
            </h1>
            <p>
              Select a service area to explore representative projects ProSIM has
              delivered — from detailed engineering and seismic qualification to
              digital twins and owner&rsquo;s engineering.
            </p>
          </div>

          <div className="sa-hero-media">
            <figure className="sa-hero-media-main">
              <img src={`${P}/1.webp`} alt="ProSIM engineering project" loading="eager" />
              <figcaption>Projects</figcaption>
            </figure>
            <figure className="sa-hero-media-inset">
              <img src={`${P}/4.webp`} alt="Simulation and analysis" loading="lazy" />
            </figure>
          </div>
        </div>
      </section>

      {/* PROJECT EXPLORER */}
      <section className="pr-explorer">
        <div className="sa-container">
          <div className="pr-layout">
            {/* LEFT — category buttons */}
            <aside className="pr-nav">
              {categories.map((c) => (
                <button
                  type="button"
                  key={c.id}
                  className={`pr-nav-btn ${c.id === active ? "active" : ""}`}
                  onClick={() => setActive(c.id)}
                >
                  <span>{c.label}</span>
                  <ArrowRight size={16} strokeWidth={2} />
                </button>
              ))}
            </aside>

            {/* RIGHT — projects for the active category */}
            <div className="pr-panel">
              <ScrollAnimation key={current.id} className="pr-panel-head">
                <span className="sa-label">{current.label}</span>
                <p>{current.blurb}</p>
              </ScrollAnimation>

              <div className="pr-grid" key={`${current.id}-grid`}>
                {current.projects.map((p, i) => (
                  <ScrollAnimation key={p.title} delay={i * 70}>
                    <article className="pr-card">
                      <div className="pr-card-img">
                        <img src={p.image} alt={p.title} loading="lazy" />
                      </div>
                      <div className="pr-card-body">
                        <h3>{p.title}</h3>
                        <p>{p.desc}</p>
                      </div>
                    </article>
                  </ScrollAnimation>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
