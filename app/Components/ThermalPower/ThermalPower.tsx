import Breadcrumbs from "@/app/Components/Breadcrumbs/Breadcrumbs";
import ScrollAnimation from "@/app/Components/ScrollAnimation";
import "./ThermalPower.css";

const IMG = "/assets/images/industries/thermal";

const heroStats = [
  { label: "Projects Delivered", value: "3000+" },
  { label: "Years of Engineering", value: "25+" },
  { label: "Customers", value: "800+" },
];

const capabilities = [
  {
    tag: "Detailed Engineering",
    title: "Detailed Engineering",
    desc: "Multidisciplinary engineering for new systems, modifications and plant upgrades — mechanical, civil & structural, electrical & instrumentation and equipment engineering.",
  },
  {
    tag: "Plant Design",
    title: "Piping & 3D Plant Modelling",
    desc: "Accurate routing, modelling and as-built digital representation of complex facilities — 3D plant modelling, piping layouts & isometrics, re-routing & optimisation and laser-scan integration.",
  },
  {
    tag: "Piping Analysis",
    title: "Pipe Stress & Flexibility",
    desc: "Engineering evaluation of piping under thermal, sustained, occasional and dynamic loads — support & hanger design, nozzle loads, dynamic analysis and optimisation.",
  },
  {
    tag: "Advanced CAE",
    title: "FEA & Multiphysics",
    desc: "Simulation-led insight for components and systems exposed to complex mechanical and thermal loading — linear / nonlinear FEA, thermo-mechanical analysis, fatigue & creep and fluid-structure interaction.",
  },
  {
    tag: "Flow & Thermal",
    title: "CFD & Thermal Analysis",
    desc: "Numerical evaluation of flow, heat transfer and coupled physical phenomena — flow analysis, heat transfer, thermal fields and multiphysics studies.",
  },
  {
    tag: "Engineering Advisory",
    title: "Decision Support",
    desc: "Translate analysis results into practical engineering recommendations for repair, reuse, redesign or life extension — failure analysis, design optimisation, engineering judgement and owner's advisory.",
  },
];

const systems = [
  {
    title: "Main Steam & Hot Reheat",
    desc: "Stress, flexibility, support and integrity assessment of critical high-temperature piping.",
  },
  {
    title: "Cold Reheat & Bypass Systems",
    desc: "Engineering evaluation of CRH, HP bypass and LP bypass systems under operating and occasional conditions.",
  },
  {
    title: "Boiler & Pressure Components",
    desc: "Structural and thermo-mechanical assessment of pressure-retaining and high-temperature components.",
  },
  {
    title: "Turbines & Hot Parts",
    desc: "Analysis and remaining-life assessment of critical turbine components and ageing assets.",
  },
  {
    title: "Supports, Hangers & Anchors",
    desc: "Design, evaluation and optimisation to improve load paths and piping-system behaviour.",
  },
  {
    title: "Plant Modifications",
    desc: "Engineering for rerouting, replacement, upgrades and brownfield modifications.",
  },
];

const analysis = [
  "Thermo-mechanical",
  "Fatigue & Creep",
  "Damage Modelling",
  "Code Assessment",
  "Failure Analysis",
  "Design Optimisation",
];

const rlaSteps = [
  {
    title: "Understand the asset",
    desc: "Review design basis, operating history, materials and inspection information.",
  },
  {
    title: "Model the condition",
    desc: "Account for as-is conditions — defects, corrosion and relevant damage mechanisms.",
  },
  {
    title: "Analyse & assess",
    desc: "Apply FEA, damage mechanics and applicable fitness-for-service requirements.",
  },
  {
    title: "Recommend the action",
    desc: "Support repair, reuse, replacement or life-extension decisions with engineering evidence.",
  },
];

const experienceFacts = [
  { label: "NTPC Units", value: "35+ in a documented RLA / RLE work order" },
  { label: "Plant Capacities", value: "120 / 210 / 500 MW" },
  { label: "FFS Framework", value: "API 579" },
  { label: "Codes Referenced", value: "ASME B31.1 / B31.3" },
];

export default function ThermalPower() {
  return (
    <main className="tp">
      {/* HERO */}
      <section className="tp-hero">
        <div className="tp-container">
          <div className="tp-hero-crumbs">
            <Breadcrumbs />
          </div>

          <div className="tp-hero-grid">
            <ScrollAnimation>
         
              <h1>
                Engineering the <span>reliability of critical thermal assets.</span>
              </h1>

              <p className="tp-hero-lead">
                From detailed engineering and plant modelling to pipe stress, FEA
                and remaining-life assessment — ProSIM brings analysis-led
                engineering to the systems that keep thermal power plants
                operating.
              </p>

              
            </ScrollAnimation>
          </div>
        </div>
      </section>

 {/* THERMAL POWER EXPERIENCE */}
      <section className="tp-section alt">
        <div className="tp-container">
          <ScrollAnimation>
            <span className="tp-eyebrow">Thermal Power Experience</span>
            <h2>Engineering experience that connects directly to plant realities.</h2>

            <p>
              ProSIM&rsquo;s thermal-power work includes structural integrity,
              remaining-life assessment and fitness-for-service studies for
              critical piping and turbine components. Its documented work covers
              main steam, hot reheat, cold reheat, HP bypass and LP bypass piping
              systems, combining inspection data, pipe flexibility, FEA and code
              assessment.
            </p>

            <div className="tp-facts">
              {experienceFacts.map((f) => (
                <div className="tp-fact" key={f.label}>
                  <span>{f.label}</span>
                  <strong>{f.value}</strong>
                </div>
              ))}
            </div>
          </ScrollAnimation>
        </div>
      </section>


      {/* ENGINEERING DEPTH */}
      <section className="tp-section">
        <div className="tp-container">
          <div className="tp-depth-grid">
            <ScrollAnimation className="tp-depth-body">
              <span className="tp-eyebrow">Built Around Engineering Depth</span>
              <h2>
                More than design support. Engineering insight for complex energy
                assets.
              </h2>

              <p>
                ProSIM supports thermal power owners, EPCs and equipment
                stakeholders across design, modification, operation and life
                extension.
              </p>

              <p>
                Our multidisciplinary capability connects detailed engineering
                with computational analysis, piping expertise, materials
                knowledge and structural integrity assessment — helping teams
                make better engineering decisions before problems become outages.
              </p>
            </ScrollAnimation>

            <ScrollAnimation className="tp-depth-media" delay={120}>
              <img
                src={`${IMG}/6.jpg`}
                alt="Thermal power plant engineering and analysis"
                loading="lazy"
              />
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* CORE CAPABILITIES */}
      <section className="tp-section alt">
        <div className="tp-container">
          <ScrollAnimation>
            <span className="tp-eyebrow">Core Capabilities</span>
            <h2>One engineering partner. Multiple layers of technical depth.</h2>
            <p>
              A capability stack designed for high-temperature, high-pressure and
              safety-critical thermal assets.
            </p>

            <div className="tp-people tp-stagger">
              {capabilities.map((c, i) => (
                <div className="tp-person" key={c.title}>
                  <span className="tp-person-badge">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <b>{c.title}</b>
                    <em>{c.desc}</em>
                  </div>
                </div>
              ))}
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* THERMAL PLANT SYSTEMS */}
      <section className="tp-section">
        <div className="tp-container">
          <ScrollAnimation>
            <span className="tp-eyebrow">Thermal Plant Systems</span>
            <h2>Focused on the systems where engineering decisions matter most.</h2>

            <div className="tp-people tp-stagger">
              {systems.map((s, i) => (
                <div className="tp-person" key={s.title}>
                  <span className="tp-person-badge">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <b>{s.title}</b>
                    <em>{s.desc}</em>
                  </div>
                </div>
              ))}
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* ADVANCED ANALYSIS */}
      <section className="tp-section alt">
        <div className="tp-narrow">
          <ScrollAnimation>
            <span className="tp-eyebrow">Advanced Analysis</span>
            <h2>
              See the failure mode. Understand the mechanism. Engineer the
              solution.
            </h2>

            <p>
              ProSIM combines FEA, materials and damage modelling with
              engineering codes and judgement to move beyond a pass / fail
              answer — thermo-mechanical stress, fatigue and creep, damage
              modelling, code assessment, failure analysis and design
              optimisation.
            </p>

            <div className="tp-chips">
              {analysis.map((a) => (
                <i key={a}>{a}</i>
              ))}
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* ASSET INTEGRITY — RLA / RLE */}
      <section className="tp-section" id="asset-integrity">
        <div className="tp-container">
          <ScrollAnimation className="tp-rla-head">
            <span className="tp-eyebrow">Asset Integrity · RLA / RLE · FFS</span>
            <h2>From inspection data to an engineering decision.</h2>

            <p>
              For ageing thermal assets, the question is not simply whether a
              component has degraded — it is what that degradation means for safe
              operation and how its useful life can be managed.
            </p>
          </ScrollAnimation>

          <div className="tp-rla-grid">
            <ScrollAnimation className="tp-rla-media">
              <img
                src={`${IMG}/7.jpg`}
                alt="Asset integrity and remaining-life assessment of thermal power components"
                loading="lazy"
              />
            </ScrollAnimation>

            <ScrollAnimation className="tp-rla-steps" delay={120}>
              {rlaSteps.map((s, i) => (
                <div className="tp-person" key={s.title}>
                  <span className="tp-person-badge">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <b>{s.title}</b>
                    <em>{s.desc}</em>
                  </div>
                </div>
              ))}
            </ScrollAnimation>
          </div>
        </div>
      </section>

     

    </main>
  );
}
