"use client";

import { useState } from "react";
import Breadcrumbs from "@/app/Components/Breadcrumbs/Breadcrumbs";
import ScrollAnimation from "@/app/Components/ScrollAnimation";
import { ArrowRight, Check } from "lucide-react";
import "./ProjectsPage.css";

const P = "/assets/images/portfolio/modern";
const PROJ = "/assets/images/project";
const LOGO = "/assets/images/project/client%20logo";

/* clean single-brand logos from /assets/images/project/client logo/ */
const SW: Record<string, { name: string; logo?: string }> = {
  hypermesh: { name: "Altair HyperMesh", logo: `${LOGO}/6.png` },
  abaqus: { name: "SIMULIA Abaqus" }, // no standalone logo file yet — shown as text
  caesar: { name: "CAESAR II", logo: `${LOGO}/3.png` },
  autocad: { name: "Autodesk AutoCAD", logo: `${LOGO}/4.png` },
  ansysWb: { name: "ANSYS Workbench", logo: `${LOGO}/5.png` },
  ansys: { name: "Ansys", logo: `${LOGO}/7.png` },
  navisworks: { name: "Autodesk Navisworks", logo: `${LOGO}/8.png` },
};

type Section = { heading: string; body?: string; list?: string[] };

type Project = {
  title: string;
  intro: string;
  image: string;
  client: string;
  sector: string;
  location: string;
  duration: string;
  sections: Section[];
  deliverables: string[];
  software: { name: string; logo?: string }[];
};

const ffsPipeline: Project = {
  title: "Fitness-for-Service Assessment of a Pipeline During Lifting Operations",
  intro:
    "Performed a Fitness-for-Service assessment of a live pipeline affected by CUPS to validate its structural integrity during a 50 mm lifting operation for UT inspection. Developed reusable lifting guidelines defining safe criteria for multiple pipe sizes and configurations, enabling safer and more efficient maintenance decisions.",
  image: `${PROJ}/1.jpg`,
  client: "Energy & Petrochemical Multinational Corporation",
  sector: "ENERGY – Oil, Gas & Consumable Fuels",
  location: "Brunei, Malaysia",
  duration: "6 Months",
  sections: [
    {
      heading: "Customer Problem",
      body: "The live pipeline had developed Corrosion Under Pipe Support (CUPS) and required a 50 mm lift for UT inspection while remaining in service, creating uncertainty about its structural integrity during lifting.",
    },
    {
      heading: "Approach",
      body: "A detailed FE assessment was performed across representative pipeline configurations and pipe sizes to identify the governing lifting conditions.",
    },
    {
      heading: "Key Finding",
      body: "The CUPS region was identified as the critical location during lifting; the remaining wall thickness became a key factor governing structural integrity.",
    },
    {
      heading: "Risk & Recommendations",
      body: "The assessment demonstrated that remaining wall thickness, support configuration and lifting conditions were important factors in controlling the lifting risk and therefore had to be considered before carrying out the maintenance activity.",
    },
    {
      heading: "Business Outcome",
      body: "ProSIM provided the customer with a reusable engineering guideline, reducing their need for repeated detailed assessments and engineering effort for similar lifting activities, while enabling safer and faster maintenance decisions.",
    },
    {
      heading: "Conclusion",
      body: "The assessment reduced uncertainty around live pipeline lifting and enabled the customer to proceed with maintenance planning with greater confidence.",
    },
  ],
  deliverables: [
    "FEA results report",
    "Minimum allowable wall thickness",
    "Safe lifting criteria",
    "Reusable engineering guideline",
  ],
  software: [SW.hypermesh, SW.abaqus],
};

const pipeStressIncinerator: Project = {
  title: "Pipe Stress Analysis of a 44-inch Incinerator Line",
  intro:
    "Validated the proposed incinerator piping design modification under static and dynamic loading, enabling the customer to approve and proceed with the site modifications confidently while improving efficiency of the incinerator and minimizing the risk of future operational failures.",
  image: `${PROJ}/2.jpg`,
  client: "Indian Oil & Gas Refinery",
  sector: "ENERGY – Oil, Gas",
  location: "Kochi, India",
  duration: "6 Weeks",
  sections: [
    {
      heading: "Customer Problem",
      body: "Water carryover in pipeline was reducing incinerator efficiency; customer required a validation for the proposed design modification that could be safe and reliable operation before approval for site implementation.",
    },
    {
      heading: "Approach",
      body: "Performed static & dynamic pipe stress analysis to validate the proposed design modification against stress, nozzle, seismic, and code requirements as per ASME B31.3.",
    },
    {
      heading: "Key Finding",
      body: "Excessive thermal expansion, stress ratio up to 226% against allowable, and incorrect as-built boundary conditions considered which led to failure in the as-built condition.",
    },
    {
      heading: "Risk & Recommendations",
      body: "The assessment demonstrated that the suggested design could not be used for onsite deployment. As a mitigation, ProSIM replaced the existing bellows and optimized targeted pipe sections to improve flexibility without increasing pressure drop in the piping system.",
    },
    {
      heading: "Business Outcome",
      body: "Nearly 20% higher incinerator efficiency was achieved, 100% stress & nozzle qualified as per customer requirement, and reduced site modification cost through an optimized layout with targeted modification.",
    },
    {
      heading: "Conclusion",
      body: "This qualification turned an operational challenge into a safe, optimized engineering solution that improved efficiency and achieved complete design qualification, ultimately giving the customer the confidence to implement on site.",
    },
  ],
  deliverables: [
    "Detailed Pipe Stress analysis Report",
    "C2 Files",
    "Fabrication isometrics",
  ],
  software: [SW.caesar, SW.autocad],
};

const feaWtgTransformer: Project = {
  title: "FEA of a Wind Turbine Generator (WTG) Transformer",
  intro:
    "FEA-based structural validation of a WTG transformer under transportation, lifting, extreme wind with acceleration loads. The analysis identified critical stress regions and supported optimization of the lifting arrangement, tie-down configuration, & weld design, resulting in a validated design ready for manufacturing.",
  image: `${PROJ}/3.jpg`,
  client: "British electrical power and energy infrastructure",
  sector: "ENERGY – Renewable",
  location: "Brazil",
  duration: "5 Weeks",
  sections: [
    {
      heading: "Customer Problem",
      body: "Customer needed to ensure the WTG Transformer could safely withstand transportation, lifting, and extreme wind loading without structural failure before manufacturing.",
    },
    {
      heading: "Approach",
      body: "Developed an FE model, applied transportation, lifting, and wind load cases, evaluated stress, deformation, and Factor of Safety, then optimized the design through iterative FEA.",
    },
    {
      heading: "Key Finding",
      body: "Transportation emerged as the critical governing load case, with bottom support plate weld stresses exceeding the allowable limit by 20%, driving optimization of both the transportation and lifting configurations.",
    },
    {
      heading: "Risk & Recommendations",
      body: "Optimized the lifting configuration by sling angle and sling length for safe handling, and changed the bottom support plate welds from 2-side to 4-side weld, eliminating weld failure during transportation.",
    },
    {
      heading: "Business Outcome",
      body: "Reduced cost & legal implication of failure during operation. The reduced lifting and transportation risks, eliminated structural failure, minimized potential rework and failures, and improved confidence in safe manufacturing and field operation.",
    },
    {
      heading: "Conclusion",
      body: "The WTG Transformer was validated for critical loads. The lifting, tie-down, and weld design were optimized, making the transformer ready for safe manufacturing and operation.",
    },
  ],
  deliverables: [
    "FEA-validated transformer design",
    "Critical stress & FOS assessment",
    "Optimized lifting, tie-down, and weld design",
  ],
  software: [SW.ansysWb],
};

const seismicMotor: Project = {
  title: "Seismic Qualification of a 3.2 MW Induction Motor for a CCW Pump",
  intro:
    "Equipment qualification for Operating Basis Earthquake (OBE) loading — the customer needed confidence to release the motor for manufacturing and deliver it to a nuclear power plant site, a decision that could not be made without seismic qualification proof.",
  image: `${PROJ}/4.jpg`,
  client: "Power Systems Manufacturer",
  sector: "ENERGY – Nuclear",
  location: "Kudankulam, KKNPP 1 & 2, India",
  duration: "5 Weeks",
  sections: [
    {
      heading: "Customer Problem",
      body: "The motor could not be released for manufacturing or supplied to KKNPP Units 1 & 2 without proof of seismic (OBE) qualification, reviewed and approved by NPCIL.",
    },
    {
      heading: "Approach",
      body: "FE model & loading definition → stress evaluation against ASME Sec III, Div 1, NF allowable → functional operability check → pump & motor interface clearance check.",
    },
    {
      heading: "Key Finding",
      body: "All major components (stator, rotor, enclosure, supports, heat exchanger) qualified — only the motor mounting base frame exceeded the 233.4 MPa allowable, by 22%.",
    },
    {
      heading: "Risk & Recommendations",
      body: "Local reinforcement (stiffeners) at the base frame, cutting stress to 28% below allowable without a major redesign — approved by the customer.",
    },
    {
      heading: "Business Outcome",
      list: [
        "Report delivered in 3 weeks (vs. 5-week schedule), directly enabling early engagement for manufacturing release and site supply.",
        "Risk resolved, designed within the 27-tonne weight limit → won a new 2.8 MW motor qualification order.",
      ],
    },
    {
      heading: "Conclusion",
      body: "The motor is qualified for OBE seismic loading as per ASME NF, with one identified risk (base frame) resolved through low-impact reinforcement.",
    },
  ],
  deliverables: [
    "FE-based seismic stress report",
    "Functional operability check",
    "Base frame reinforcement design",
  ],
  software: [SW.hypermesh, SW.ansys],
};

const pipeStressDesalination: Project = {
  title: "Pipe Stress Analysis of a 40 MLD Desalination Plant",
  intro:
    "Evaluated critical piping systems under operating and environmental loads by performing pipe stress analysis for a 40 MLD desalination plant, ensuring piping integrity, safety, and code compliance to support safe and reliable plant execution.",
  image: `${PROJ}/5.jpg`,
  client: "Indian Multinational Engineering & Construction",
  sector: "WATER",
  location: "Saudi Arabia",
  duration: "6 Months",
  sections: [
    {
      heading: "Customer Problem",
      body: "The customer had to validate 500 pipe spools with +1500 supports before construction, including verification of piping loads, nozzle loads and loads at termination / battery limits.",
    },
    {
      heading: "Approach",
      body: "3D plant model review, detailed review of piping isometrics, and pipe stress analysis under operating, seismic and wind loading conditions as per ASME B31.3 & ISO-14692.",
    },
    {
      heading: "Key Finding",
      body: "Identified termination loads above 100 kN near the existing piping system, nozzle loads approaching ~2× vendor limits, and missing support tags affecting load identification.",
    },
    {
      heading: "Risk & Recommendations",
      body: "High restraint loads resulting in pipe overstress, high nozzle loads resulting in equipment damage. To reduce high termination loads, it was recommended to replace anchors with standard supports and to modify routing near equipment to minimize nozzle loads.",
    },
    {
      heading: "Business Outcome",
      body: "By reducing high termination loads and nozzle loads, structural integrity was ensured and the cost of repair and intermediate stoppages of waste-water management was minimized.",
    },
    {
      heading: "Conclusion",
      body: "The pipe stress analysis provided a systematic evaluation of the 40 MLD desalination plant piping systems under applicable loading conditions. The identified critical areas and recommended modifications support safe, reliable, and code-compliant plant execution.",
    },
  ],
  deliverables: [
    "Pipe stress analysis report",
    "Pipe restraint loads",
    "Stress Isometrics with support markups",
  ],
  software: [SW.caesar, SW.navisworks, SW.autocad],
};

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
    projects: [seismicMotor],
  },
  {
    id: "piping",
    label: "Piping & Pipeline Engineering",
    blurb:
      "Layout, routing and pipe stress analysis across plant piping and onshore / offshore pipelines.",
    projects: [pipeStressIncinerator, pipeStressDesalination],
  },
  {
    id: "fea",
    label: "Finite Element Analysis (FEA)",
    blurb:
      "Linear, non-linear, dynamic and multi-physics FEA that drives design decisions.",
    projects: [feaWtgTransformer],
  },
  {
    id: "rla",
    label: "RLA/RLE & Fitness-for-Service (FFS)",
    blurb:
      "Remaining-life assessment, Fitness-for-Service and repair-reuse-retire engineering verdicts.",
    projects: [ffsPipeline],
  },
];

function CaseCard({ project, delay }: { project: Project; delay: number }) {
  return (
    <ScrollAnimation delay={delay}>
      <article className="pr-case">
        <header className="pr-case-head">
          <h3>{project.title}</h3>
          <p>{project.intro}</p>
        </header>

        {/* full-width image */}
        <div className="pr-case-media">
          <img src={project.image} alt={project.title} loading="lazy" />
        </div>

        <div className="pr-case-body">
          {/* meta — horizontal row */}
          <div className="pr-meta">
            {[
              { label: "Client", value: project.client },
              { label: "Sector", value: project.sector },
              { label: "Location", value: project.location },
              { label: "Duration", value: project.duration },
            ].map((m) => (
              <div className="pr-meta-item" key={m.label}>
                <span className="pr-meta-label">{m.label}</span>
                <span className="pr-meta-value">{m.value}</span>
              </div>
            ))}
          </div>

          {/* narrative sections */}
          <div className="pr-sections">
            {project.sections.map((s) => (
              <div className="pr-sec" key={s.heading}>
                <h4>{s.heading}</h4>
                {s.body && <p>{s.body}</p>}
                {s.list && (
                  <ul>
                    {s.list.map((li) => (
                      <li key={li}>{li}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          {/* deliverables */}
          <div className="pr-side-block">
            <h5>Deliverables</h5>
            <ul>
              {project.deliverables.map((d) => (
                <li key={d}>
                  <Check size={15} strokeWidth={2.4} />
                  {d}
                </li>
              ))}
            </ul>
          </div>

          {/* software — horizontal logo strip */}
          <div className="pr-side-block pr-software">
            <h5>Software Used</h5>
            <div className="pr-logos">
              {project.software.map((sw) =>
                sw.logo ? (
                  <img
                    key={sw.name}
                    src={sw.logo}
                    alt={sw.name}
                    title={sw.name}
                    loading="lazy"
                  />
                ) : (
                  <span key={sw.name} className="pr-logo-text">
                    {sw.name}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </article>
    </ScrollAnimation>
  );
}

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
              delivered — from seismic qualification and pipe stress to FEA and
              Fitness-for-Service.
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

            {/* RIGHT — case studies for the active category */}
            <div className="pr-panel">
              <ScrollAnimation key={current.id} className="pr-panel-head">
                <span className="sa-label">{current.label}</span>
                <p>{current.blurb}</p>
              </ScrollAnimation>

              <div className="pr-cases" key={`${current.id}-cases`}>
                {current.projects.map((p, i) => (
                  <CaseCard key={p.title} project={p} delay={i * 90} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
