import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Breadcrumbs from "@/app/Components/Breadcrumbs/Breadcrumbs";
import "./ThermalPower.css";

const offerings = [
  "Structural integrity assessment of critical plant assets",
  "Remaining Life Assessment and Life Extension (RLA / RLE)",
  "Fitness-for-Service (FFS) evaluation",
  "Detailed engineering services",
  "Finite element analysis (FEA)",
  "Pipe stress analysis",
  "3D laser scanning and 3D CAD modelling of legacy assets",
  "Life assessment strategy for turbine components",
];

const leadParagraphs = [
  "ProSIM was invited to exhibit and present its capabilities at Techno Galaxy of the IPS 2025 conference organised by NTPC. This conference was part of the celebrations marking 50 years of NTPC operations.",
  "ProSIM has been engaged with NTPC for structural integrity assessment, remaining life assessment and life extension (RLA / RLE), and fitness-for-service (FFS) assessment of its assets. ProSIM has provided services to several dozen NTPC plants for critical piping and turbine parts, and is a provider of detailed engineering, finite element analysis, RLA / RLE, FFS evaluation, pipe stress analysis and more.",
];

const mediaRows = [
  {
    image: "/assets/images/thermal/thermal-1.jpg",
    alt: "NTPC executives at the ProSIM stall during IPS 2025",
    body: "Several senior executives of NTPC and engineers from several stations visited the ProSIM stall and discussed ProSIM's offerings. Visitors included Mr K S Sundaram, Project Director; Mr Prasenjit Pal, Executive Director, NTPC Nuclear; Mr A P Samal, GM, NTPC Nuclear; Mr Ajay Sharma, Head, Engineering; Mr A K Das, AGM, R&D, NTPC-NETRA; Mr Nagesh, CGM Engineering, and others.",
    reverse: false,
  },
  {
    image: "/assets/images/thermal/thermal-2.jpg",
    alt: "Mr A P Samal and Mr Prasenjit Pal with Dr Shamasundar at the ProSIM stall",
    body: "From left to right: Mr A P Samal, GM NTPC Nuclear, and Mr Prasenjit Pal, Executive Director, NTPC Nuclear, with Dr Shamasundar of ProSIM at the ProSIM stall in IPS 2025.",
    reverse: true,
  },
  {
    image: "/assets/images/thermal/thermal-3.jpg",
    alt: "Dr Shamasundar explaining the RLA / RLE strategy for critical power-plant pipelines",
    body: "Dr Shamasundar, MD of ProSIM, explaining the Remaining Life Assessment and Extension strategy for critical pipelines of power plants. The figure shows the failure of a pipeline in occasional load cases, with stress exceeding 277% of the allowable stress limit. ProSIM has provided engineering solutions to increase life to the desired / expected levels.",
    reverse: false,
  },
];

const galleryImages = [
  {
    image: "/assets/images/thermal/thermal-4.jpg",
    alt: "ProSIM capability presentation at IPS 2025",
  },
  {
    image: "/assets/images/thermal/thermal-5.jpg",
    alt: "3D laser scanning demonstration at the ProSIM stall",
  },
];

export default function ThermalPowerPage() {
  return (
    <main className="tp-page">
      <Breadcrumbs />

      {/* HERO */}
      <section className="tp-hero">
        <div className="tp-container">
          <span className="tp-label">INDUSTRIES / THERMAL POWER</span>
          <h1>Thermal Power</h1>
          <p className="tp-hero-lead">
            ProSIM supports thermal power operators with structural integrity, remaining-life
            and fitness-for-service engineering for critical piping and turbine assets.
          </p>
          <p>
            ProSIM has worked with operators such as NTPC on structural integrity assessment,
            remaining life assessment and life extension (RLA / RLE), and fitness-for-service
            (FFS) assessment across several dozen plants, delivering detailed engineering,
            finite element analysis and pipe stress analysis for critical components.
          </p>
        </div>
      </section>

      {/* OFFERINGS */}
      <section className="tp-section tp-section--light">
        <div className="tp-container">
          <span className="tp-label">WHAT WE OFFER</span>
          <h2>ProSIM services for the thermal power sector</h2>
          <ul className="tp-list tp-list--two-col">
            {offerings.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* EVENT FEATURE */}
      <section className="tp-section">
        <div className="tp-container">
          <span className="tp-label">EVENTS</span>
          <h2>ProSIM @ IPS 2025, Raipur &middot; 13&ndash;15 Feb 2025</h2>
          <p className="tp-eventmeta">Organised by NTPC &mdash; Techno Galaxy, IPS 2025</p>

          {leadParagraphs.map((para) => (
            <p className="tp-body" key={para.slice(0, 40)}>
              {para}
            </p>
          ))}

          <blockquote className="tp-callout">
            NTPC is transforming from a coal- and gas-based thermal power company into a total
            energy company encompassing solar, wind, hydel, storage and nuclear, with current
            revenues of about &#8377;1.81 lakh crore (~US$21 billion). In this context, the
            discussions and presentations of ProSIM as a high-end engineering and R&amp;D
            service provider for the energy sector were very timely.
          </blockquote>

          <div className="tp-media-list">
            {mediaRows.map((row) => (
              <div
                className={`tp-media-row${row.reverse ? " tp-media-row--reverse" : ""}`}
                key={row.image}
              >
                <figure className="tp-figure">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={row.image} alt={row.alt} loading="lazy" />
                </figure>
                <p>{row.body}</p>
              </div>
            ))}
          </div>

          <div className="tp-gallery">
            {galleryImages.map((img) => (
              <figure className="tp-figure" key={img.image}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={img.image} alt={img.alt} loading="lazy" />
              </figure>
            ))}
          </div>

          <p className="tp-body">
            ProSIM presented capabilities for 3D laser scanning to create 3D CAD models of
            legacy assets, conduct finite element analysis, and carry out a detailed RLA / RLE
            strategy for turbine components.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="tp-cta">
        <div className="tp-container">
          <h2>Discuss a thermal power requirement</h2>
          <p>
            Tell us about your piping, turbine or structural assets and our team will get back
            to you.
          </p>
          <Link href="/contact-us" className="tp-cta-btn">
            Contact ProSIM
            <ArrowUpRight size={18} strokeWidth={1.8} />
          </Link>
        </div>
      </section>
    </main>
  );
}
