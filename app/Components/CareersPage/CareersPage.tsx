"use client";

import { useState } from "react";
import Link from "next/link";
import Breadcrumbs from "@/app/Components/Breadcrumbs/Breadcrumbs";
import ScrollAnimation from "@/app/Components/ScrollAnimation";
import {
  MapPin,
  Clock,
  Factory,
  Plus,
  Minus,
  GraduationCap,
  Users,
  Sparkles,
  ArrowRight,
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

export const jobs: Job[] = [
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
 

  // NEW JOB OPENING 1: PLANT MODELLER
  {
    title: "Plant Modeller",
    location: "Bengaluru",
    exp: "5–10 Years",
    industry: "Water, Power & Oil & Gas",
    responsibilities: [
      "Prepare as-built drawings and equipment/foundation layouts using AutoCAD.",
      "Develop 3D models of piping, equipment, structures, cable trays, and pipe supports using AutoCAD Plant 3D.",
      "Prepare piping layouts, equipment layouts, and associated engineering drawings based on P&IDs and engineering documents.",
      "Support the preparation and review of piping and equipment layouts, including pipe support arrangements.",
      "Participate in 3D model reviews, identify clashes, and coordinate with multidisciplinary engineering teams.",
      "Assist with material take-offs, engineering documentation, and project deliverables.",
    ],
    requirements: [
      "Diploma or Engineering Degree in Mechanical Engineering.",
      "5–10 years of mechanical design experience in Water, Power, Oil & Gas, or related industries.",
      "Proficiency in AutoCAD and AutoCAD Plant 3D.",
      "Understanding of piping layouts, equipment arrangements, and 3D modelling practices.",
      "Knowledge of P&IDs, piping specifications, and engineering documentation.",
      "Strong communication, coordination, and problem-solving skills.",
    ],
  },

  // NEW JOB OPENING 2: REVIT ENGINEER
  {
    title: "Revit Engineer",
    location: "Bengaluru",
    exp: "5–10 Years",
    industry: "Water, Power & Oil & Gas",
    responsibilities: [
      "Develop 3D models using Revit based on engineering drawings and project specifications.",
      "Prepare and update 3D models of equipment, structures, and associated plant components as required by the project.",
      "Interpret engineering drawings, layouts, and relevant project documentation for accurate model development.",
      "Participate in 3D model reviews and coordinate with multidisciplinary engineering teams.",
      "Identify modelling clashes and support their resolution to ensure model accuracy and consistency.",
      "Maintain engineering documentation and deliverables in accordance with project requirements and quality procedures.",
    ],
    requirements: [
      "Diploma or Engineering Degree in Mechanical Engineering.",
      "5–10 years of mechanical design experience in Water, Power, Oil & Gas, or related industries.",
      "Proficiency in Revit.",
      "Understanding of 3D modelling, engineering drawings, layouts, and project specifications.",
      "Ability to review models, identify clashes, and coordinate with other engineering disciplines.",
      "Strong communication, coordination, and problem-solving skills.",
    ],
  },

  // NEW JOB OPENING 3: SKID DESIGN ENGINEER
  {
    title: "Skid Design Engineer",
    location: "Bengaluru",
    exp: "3–8 Years",
    industry: "Water, Power & Oil & Gas",
    responsibilities: [
      "Develop detailed 3D skid models using SolidWorks, Autodesk Plant 3D, or equivalent software.",
      "Prepare equipment and foundation layouts, piping routes, and associated engineering drawings.",
      "Review PFDs, P&IDs, isometrics, spool drawings, and equipment layouts.",
      "Generate general arrangement drawings, bills of quantity, and pipe support spacing details.",
      "Conduct 3D model reviews, identify and resolve clashes, and verify piping flexibility.",
      "Perform peer reviews and ensure compliance with quality procedures and project requirements.",
    ],
    requirements: [
      "Diploma or Engineering Degree in Mechanical Engineering.",
      "3–8 years of mechanical design experience in Water, Power, Oil & Gas, or related industries.",
      "Proficiency in AutoCAD and 3D design software such as SolidWorks or Autodesk Plant 3D.",
      "Knowledge of ASME B31.3 Process Piping and ASME B31.1 Power Piping codes.",
      "Experience in skid modelling, piping routing, drawing extraction, and model reviews.",
      "Good understanding of pipe supports, material specifications, and engineering documentation.",
    ],
  },

  // NEW JOB OPENING 4: STRUCTURAL ENGINEER (5–10 YEARS)
  {
    title: "Structural Engineer (5–10 Years)",
    location: "Bengaluru",
    exp: "5–10 Years",
    industry: "Offshore, FPSO & Heavy Engineering",
    responsibilities: [
      "Perform and review structural analysis and design for offshore and onshore projects.",
      "Conduct dynamic, fatigue, lifting, transportation, and installation analyses.",
      "Execute structural design and analysis for offshore structures, FPSOs, and large modules.",
      "Review sea fastening concepts, rigging schemes, lifting arrangements, and SPMT configurations.",
      "Review structural models and recommend suitable sectional sizes and configurations.",
      "Lead and mentor engineers while coordinating with multidisciplinary project teams.",
    ],
    requirements: [
      "Strong experience in structural engineering, analysis, and design.",
      "Proficiency in SACS, STAAD.Pro, STAAD Offshore, or equivalent tools.",
      "Experience in offshore structures, FPSO projects, and large-module engineering.",
      "Knowledge of lifting, transportation, installation, sea fastening, and fatigue analysis.",
      "Ability to review engineering deliverables and resolve fabrication and construction issues.",
      "Strong technical coordination, problem-solving, and team leadership skills.",
    ],
  },

  // NEW JOB OPENING 5: STRUCTURAL ENGINEER (10+ YEARS)
  {
    title: "Structural Engineer (10+ Years)",
    location: "Bengaluru",
    exp: "10+ Years",
    industry: "Offshore, FPSO & Heavy Engineering",
    responsibilities: [
      "Provide technical leadership for complex structural engineering, analysis, and design activities.",
      "Guide structural teams on offshore structures, FPSOs, large modules, and lifting and installation engineering.",
      "Review complex structural and FEA analyses, fatigue assessments, and structural integrity evaluations.",
      "Develop technically optimized, cost-effective structural solutions and resolve critical engineering issues.",
      "Review engineering calculations, reports, drawings, models, and technical deliverables.",
      "Mentor engineers, establish engineering best practices, and advise project teams on critical technical decisions.",
    ],
    requirements: [
      "Expert-level experience in structural engineering, structural analysis, and design.",
      "Expert proficiency in SACS, STAAD.Pro, STAAD Offshore, and relevant structural/FEA tools.",
      "Extensive experience in offshore structures, FPSOs, large modules, lifting, transportation, and fatigue analysis.",
      "Advanced understanding of structural design codes, client specifications, and engineering standards.",
      "Proven ability to lead and mentor technical teams and coordinate across engineering disciplines.",
      "Strong technical decision-making and client-facing capabilities.",
    ],
  },
  // NEW JOB OPENING: PIPING STRESS ENGINEER (5–12 YEARS)
{
  title: "Piping Stress Engineer",
  location: "Mumbai",
  exp: "5–12 Years",
  industry: "Nuclear, Power & Process Industries",
  responsibilities: [
    "Perform static, dynamic and thermal piping stress analysis of critical piping systems.",
    "Conduct time history and response spectrum analysis for complex piping systems.",
    "Calculate PSV reaction forces, steam hammer, hydraulic forces and two-phase slug forces.",
    "Perform wear pad, trunnion and saddle support design calculations.",
    "Prepare piping stress design guidelines based on project requirements.",
    "Review stress reports, equipment GA drawings, FRS, seismic anchor movements and critical line lists.",
    "Calculate and select spring hangers, expansion joints, struts and snubbers.",
    "Prepare support loads for structural teams and validate primary pipe supports.",
    "Perform flange leakage checks and assess plant integrity issues.",
    "Prepare technical notes, stress analysis reports and special support datasheets.",
    "Coordinate with multidisciplinary teams and provide technical solutions for engineering challenges.",
    "Deliver quality engineering work within project deadlines, independently and as part of a team.",
  ],
  requirements: [
    "B.E./B.Tech or M.E./M.Tech in Mechanical Engineering or equivalent qualification.",
    "5–12 years of experience in piping stress analysis, piping systems and pressure vessel design.",
    "Experience in nuclear, power, oil and gas, petrochemical or other highly regulated industries.",
    "Proficiency in static, dynamic and thermal stress analysis, piping design, pipe supports and pipe layouts.",
    "Experience with CAESAR II, AutoPIPE, PIPESTRESS (PepS), STAAD, RSTAB or NozzlePRO.",
    "Familiarity with CAEPIPE, AutoCAD and knowledge of E3D, P3D and SP3D is desirable.",
    "Knowledge of international codes and standards, including ASME BPVC Section III NC/ND, RCC-M, ASME B31.1, ASME B31.3 and BS EN 13480-3.",
    "Understanding of ASME, ASTM and API standards, material selection, fabrication, installation, inspection and testing.",
    "Knowledge of quality assurance, quality control and mechanical design assessment.",
    "Proficiency in MS Office, with experience in developing digital engineering tools considered an advantage.",
    "Strong analytical, problem-solving, organizational and interpersonal skills.",
    "Excellent written and verbal communication skills, including preparation of technical reports and design substantiations.",
    "Ability to understand client requirements, plan deliverables and meet project timelines.",
    "Ability to work independently and collaboratively, with flexibility to travel to client and office locations when required.",
  ],
},
{
  title: "Mechanical Design Engineer (AutoCAD Inventor)",
  location: "Bengaluru",
  exp: "2–5 Years",
  industry: "Manufacturing / Industrial Equipment",
  responsibilities: [
    "Create 3D part models, assemblies and detailed engineering drawings using Autodesk Inventor.",
    "Prepare 2D manufacturing drawings with dimensions, tolerances and GD&T.",
    "Develop sheet metal, weldment and fabrication designs as required.",
    "Review design concepts, specifications and engineering requirements.",
    "Perform design modifications and incorporate engineering changes.",
    "Prepare Bills of Materials (BOMs) and maintain accurate drawing and model documentation.",
    "Coordinate with manufacturing, project and engineering teams to ensure design feasibility and timely delivery."
  ],
  requirements: [
    "B.E./B.Tech in Mechanical Engineering or equivalent qualification.",
    "2–5 years of experience in mechanical design and 3D modelling.",
    "Hands-on proficiency in Autodesk Inventor and AutoCAD.",
    "Experience in preparing 2D drawings, 3D models and assemblies.",
    "Understanding of manufacturing processes, GD&T and engineering drawings.",
    "Ability to interpret technical specifications and design requirements.",
    "Strong analytical, problem-solving and communication skills.",
    "Knowledge of sheet metal, weldments, fabrication design or other CAD tools such as SolidWorks/CATIA will be an added advantage."
  ]
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

export default function CareersPage() {
  const [openJob, setOpenJob] = useState<number | null>(0);

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
              At ProSIM, we believe that solving complex engineering
              challenges requires exceptional talent, technical expertise,
              and continuous innovation. For over two decades, we have been
              delivering world-class engineering, design, simulation, and
              digital engineering solutions across Oil & Gas, Water
              Technology, Petrochemical, Power, Infrastructure, and other
              industrial sectors.
            </p>

            <p>
              Whether you're an experienced professional or an engineer
              looking to take the next step in your career, ProSIM offers
              opportunities to work on challenging global projects alongside
              highly skilled engineering professionals. Join us and become
              part of a collaborative, technology-driven organization
              committed to engineering excellence.
            </p>
          </ScrollAnimation>

          <ScrollAnimation
            className="sa-hero-media"
            delay={120}
          >
            <figure className="sa-hero-media-main">
              <img
                src={`${IMG}/2.webp`}
                alt="Engineering careers at ProSIM"
                fetchPriority="high"
              />
              <figcaption>Join ProSIM</figcaption>
            </figure>

            <figure className="sa-hero-media-inset">
              <img
                src={`${IMG}/6.webp`}
                alt="ProSIM engineering team"
                fetchPriority="high"
              />
            </figure>
          </ScrollAnimation>
        </div>
      </section>

      {/* CURRENT OPENINGS */}
      <section
        className="sa-services"
        id="openings"
      >
        <div className="sa-container">
          <ScrollAnimation className="sa-intro">
            <span className="sa-label">Current Openings</span>

            <h2>Open Roles at ProSIM</h2>

            <p>
              {jobs.length} positions across Bengaluru and Mumbai.
              Expand a role to see the details and apply.
            </p>
          </ScrollAnimation>

          <ScrollAnimation className="cr-accordion">
            {jobs.map((job, i) => {
              const isOpen = openJob === i;

              return (
                <div
                  className={`cr-item ${isOpen ? "active" : ""}`}
                  key={job.title}
                >
                  {/* JOB HEADER */}
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
                          <MapPin
                            size={13}
                            strokeWidth={2}
                          />
                          {job.location}
                        </span>

                        <span className="cr-badge cr-badge--exp">
                          <Clock
                            size={13}
                            strokeWidth={2}
                          />
                          {job.exp}
                        </span>

                        <span className="cr-badge cr-badge--ind">
                          <Factory
                            size={13}
                            strokeWidth={2}
                          />
                          {job.industry}
                        </span>
                      </div>
                    </div>

                    <span className="cr-toggle">
                      {isOpen ? (
                        <Minus
                          size={18}
                          strokeWidth={2}
                        />
                      ) : (
                        <Plus
                          size={18}
                          strokeWidth={2}
                        />
                      )}
                    </span>
                  </button>

                  {/* JOB DETAILS */}
                  <div
                    className={`cr-body ${isOpen ? "show" : ""}`}
                  >
                    <div className="cr-body-inner">
                      <div className="cr-cols">
                        {/* RESPONSIBILITIES */}
                        <div>
                          <h4>Key Responsibilities</h4>

                          <ul>
                            {job.responsibilities.map(
                              (responsibility) => (
                                <li key={responsibility}>
                                  {responsibility}
                                </li>
                              )
                            )}
                          </ul>
                        </div>

                        {/* REQUIREMENTS */}
                        <div>
                          <h4>Requirements</h4>

                          <ul>
                            {job.requirements.map((requirement) => (
                              <li key={requirement}>
                                {requirement}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* APPLY BUTTON */}
                      <Link
                        href="/apply"
                        className="cr-apply"
                      >
                        Open Application Form

                        <ArrowRight
                          size={17}
                          strokeWidth={1.9}
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </ScrollAnimation>
        </div>
      </section>

      {/* CULTURE */}
      <section
        className="sa-ssc"
        id="culture"
      >
        <div className="sa-container">
          <ScrollAnimation>
            <span className="sa-label">Life at ProSIM</span>

            <h2>Career Growth &amp; Collaborative Culture</h2>
          </ScrollAnimation>

          <ScrollAnimation className="cr-culture">
            {culture.map((c) => {
              const Icon = c.icon;

              return (
                <div
                  className="cr-culture-card"
                  key={c.title}
                >
                  <span>
                    <Icon
                      size={22}
                      strokeWidth={1.7}
                    />
                  </span>

                  <h3>{c.title}</h3>

                  <p>{c.body}</p>
                </div>
              );
            })}
          </ScrollAnimation>

          {/* BOTTOM APPLY CTA */}
          <ScrollAnimation className="cr-cta">
            <div>
              <h3>Apply Now</h3>

              <p>
                Fill in the application form with your details
                and CV — our HR team will get back to you.
              </p>
            </div>

            <Link
              href="/apply"
              className="cr-cta-btn"
            >
              Open Application Form

              <ArrowRight
                size={17}
                strokeWidth={1.9}
              />
            </Link>
          </ScrollAnimation>
        </div>
      </section>
    </main>
  );
}