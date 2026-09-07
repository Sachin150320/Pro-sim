"use client";

import Link from "next/link";
import ScrollAnimation from "@/app/Components/ScrollAnimation";
import "./ProjectsHighlight.css";

const PROJ = "/assets/images/project";

const projects = [
  {
    tag: "Oil & Gas",
    date: "Duration · 6 Months",
    title: "Fitness-for-Service Assessment of a Pipeline During Lifting Operations",
    desc: "Fitness-for-Service assessment of a live pipeline affected by Corrosion Under Pipe Support (CUPS), validating structural integrity during a 50 mm lift for UT inspection. Reusable lifting guidelines were developed defining safe criteria for multiple pipe sizes and configurations.",
    image: `${PROJ}/1.jpg`,
  },
  {
    tag: "Oil & Gas",
    date: "Duration · 6 Weeks",
    title: "Pipe Stress Analysis of a 44-inch Incinerator Line",
    desc: "Static and dynamic pipe stress analysis validating a proposed incinerator piping design modification, enabling the customer to approve and proceed with site modifications while improving incinerator efficiency and minimising the risk of future operational failures.",
    image: `${PROJ}/2.jpg`,
  },
  {
    tag: "Renewable Energy",
    date: "Duration · 5 Weeks",
    title: "FEA of a Wind Turbine Generator (WTG) Transformer",
    desc: "FEA-based structural validation of a WTG transformer under transportation, lifting and extreme-wind acceleration loads. Critical stress regions were identified and the lifting arrangement, tie-down configuration and weld design were optimised for a manufacturing-ready design.",
    image: `${PROJ}/3.jpg`,
  },
  {
    tag: "Nuclear",
    date: "Duration · 5 Weeks",
    title: "Seismic Qualification of a 3.2 MW Induction Motor for a CCW Pump",
    desc: "Equipment qualification for Operating Basis Earthquake (OBE) loading, giving the customer the confidence to release the motor for manufacturing and supply it to a nuclear power plant site — a decision that could not be made without seismic qualification proof.",
    image: `${PROJ}/4.jpg`,
  },
  {
    tag: "Water",
    date: "Duration · 6 Months",
    title: "Pipe Stress Analysis of a 40 MLD Desalination Plant",
    desc: "Pipe stress analysis of critical piping systems under operating and environmental loads for a 40 MLD desalination plant, ensuring piping integrity, safety and code compliance to support safe and reliable plant execution.",
    image: `${PROJ}/5.jpg`,
  },
];

export default function ProjectsHighlight() {
  return (
    <section className="ph-section">
      <div className="ph-container">
        <ScrollAnimation className="ph-head">
          <span className="ph-label">Projects</span>
          <h2>FEA &amp; CAE Projects</h2>
        </ScrollAnimation>

        <div className="ph-grid">
          {projects.map((p, i) => (
            <ScrollAnimation key={p.title} delay={(i % 2) * 80}>
              <article className="ph-card">
                <div className="ph-card-img">
                  <span className="ph-card-tag">{p.tag}</span>
                  <img src={p.image} alt={p.title} loading="lazy" />
                </div>
                <div className="ph-card-body">
                  <span className="ph-card-date">{p.date}</span>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                  <Link href="/projects" className="ph-card-link">
                    Read More &rarr;
                  </Link>
                </div>
              </article>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
