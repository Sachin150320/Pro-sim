import Breadcrumbs from "@/app/Components/Breadcrumbs/Breadcrumbs";
import ScrollAnimation from "@/app/Components/ScrollAnimation";
import "./ThermalPower.css";

const IMG = "/assets/images/industries/thermal";

const facts = [
  { label: "Event", value: "IPS 2025 — Techno Galaxy" },
  { label: "Dates", value: "13–15 February 2025" },
  { label: "Venue", value: "Raipur" },
  { label: "Organised By", value: "NTPC" },
];

const services = [
  "Detailed Engineering",
  "Finite Element Analysis",
  "Remaining Life Assessment & Extension (RLA / RLE)",
  "Fitness-for-Service (FFS) Evaluation",
  "Pipe Stress Analysis",
  "Structural Integrity Assessment",
];

const visitors = [
  { name: "Mr K S Sundaram", role: "Project Director" },
  { name: "Mr Prasenjit Pal", role: "Executive Director, NTPC Nuclear" },
  { name: "Mr A P Samal", role: "GM, NTPC Nuclear" },
  { name: "Mr Ajay Sharma", role: "Head, Engineering" },
  { name: "Mr A K Das", role: "AGM, R&D, NTPC-NETRA" },
  { name: "Mr Nagesh", role: "CGM, Engineering" },
];

const gallery = [
  {
    src: `${IMG}/1.jpg`,
    caption:
      "From left to right: Mr A P Samal, GM NTPC Nuclear, and Mr Prasenjit Pal, Executive Director, NTPC Nuclear, with Dr Shamasundar of ProSIM at the ProSIM stall in IPS 2025.",
  },
  {
    src: `${IMG}/2.jpg`,
    caption:
      "Dr Shamasundar, MD of ProSIM, explaining the Remaining Life Assessment and Extension strategy for critical pipelines of power plants. The figure shows failure of a pipeline in occasional load cases with stress exceeding 277% of the allowable stress limit — ProSIM has provided engineering solutions to increase life to desired / expected levels.",
  },
  {
    src: `${IMG}/3.jpg`,
    caption:
      "ProSIM presented capabilities for 3D laser scanning to create 3D CAD models of legacy assets, conduct finite element analysis, and carry out a detailed RLA / RLE strategy for turbine components.",
  },
];

function initials(name: string) {
  return name
    .replace(/^(Mr|Ms|Mrs|Dr)\.?\s+/i, "")
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

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
                <span>ProSIM @ IPS 2025</span>, Raipur — organised by NTPC
              </h1>

              <p className="tp-hero-lead">
                ProSIM was invited to exhibit and present its capabilities at the
                Techno Galaxy of the IPS 2025 conference organised by NTPC, held
                as part of the celebrations marking 50 years of NTPC operations.
              </p>
            </ScrollAnimation>

            <ScrollAnimation className="tp-hero-media" delay={120}>
              <figure className="tp-hero-media-main">
                <img src={`${IMG}/4.jpg`} alt="ProSIM stall at IPS 2025, Raipur" />
                <figcaption>IPS 2025 · Raipur</figcaption>
              </figure>
              <figure className="tp-hero-media-inset">
                <img
                  src={`${IMG}/5.jpg`}
                  alt="ProSIM capabilities presentation at IPS 2025"
                  loading="lazy"
                />
              </figure>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* AT A GLANCE */}
      <section className="tp-section">
        <div className="tp-container">
          <ScrollAnimation>
            <span className="tp-eyebrow">At a Glance</span>
            <h2>The Conference</h2>

            <div className="tp-facts">
              {facts.map((f) => (
                <div className="tp-fact" key={f.label}>
                  <span>{f.label}</span>
                  <strong>{f.value}</strong>
                </div>
              ))}
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* ENGAGEMENT */}
      <section className="tp-section alt">
        <div className="tp-narrow">
          <ScrollAnimation>
            <span className="tp-eyebrow">The Engagement</span>
            <h2>ProSIM &amp; NTPC — Asset Integrity &amp; Life Extension</h2>

            <p>
              ProSIM has been engaged with NTPC for structural integrity
              assessment, remaining life assessment and life extension (RLA /
              RLE), and fitness-for-service (FFS) assessment of its assets. ProSIM
              has provided services to several dozen NTPC plants for critical
              piping and turbine parts.
            </p>

            <p>
              ProSIM is a provider of detailed engineering services, finite
              element analysis services, remaining life assessment and extension
              services (RLA / RLE), fitness-for-service (FFS) evaluation, pipe
              stress analysis services, and more.
            </p>

            <div className="tp-chips">
              {services.map((s) => (
                <i key={s}>{s}</i>
              ))}
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* NTPC TRANSFORMATION */}
      <section className="tp-section">
        <div className="tp-narrow">
          <ScrollAnimation>
            <span className="tp-eyebrow">Context</span>
            <h2>NTPC&rsquo;s Transformation to a Total Energy Company</h2>

            <p>
              NTPC is transforming from a coal- and gas-based thermal power
              company into a total energy company encompassing solar, wind,
              hydel, storage, nuclear and more. NTPC will soon become a global
              energy behemoth. In this context, discussions and presentations by
              ProSIM as a high-end engineering and R&amp;D service provider for
              the energy sector were very timely.
            </p>
          </ScrollAnimation>

          {/* <div className="tp-callout">
            <strong>₹1.81 lakh crore</strong>
            <span>
              Current NTPC revenues (~ US $21 billion) — on the path to becoming
              a global energy behemoth encompassing solar, wind, hydel, storage
              and nuclear.
            </span>
          </div> */}
        </div>
      </section>

      {/* VISITORS */}
      <section className="tp-section alt">
        <div className="tp-container">
          <ScrollAnimation>
            <span className="tp-eyebrow">At the Stall</span>
            <h2>Visitors to the ProSIM Stall</h2>
            <p>
              Several senior executives of NTPC and engineers from various
              stations visited the ProSIM stall and discussed ProSIM&rsquo;s
              offerings.
            </p>

            <div className="tp-people tp-stagger">
              {visitors.map((v) => (
                <div className="tp-person" key={v.name}>
                  <span className="tp-person-badge">{initials(v.name)}</span>
                  <div>
                    <b>{v.name}</b>
                    <em>{v.role}</em>
                  </div>
                </div>
              ))}
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* GALLERY */}
      <section className="tp-section">
        <div className="tp-container">
          <ScrollAnimation>
            <span className="tp-eyebrow">Gallery</span>
            <h2>From IPS 2025</h2>

            <div className="tp-gallery tp-stagger">
              {gallery.map((g) => (
                <figure className="tp-shot" key={g.src}>
                  <div className="tp-shot-img">
                    <img src={g.src} alt={g.caption} loading="lazy" />
                  </div>
                  <figcaption>{g.caption}</figcaption>
                </figure>
              ))}
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </main>
  );
}
