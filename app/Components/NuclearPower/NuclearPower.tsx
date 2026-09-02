import Link from "next/link";
import {
  ArrowUpRight,
  Atom,
  Waves,
  ShieldCheck,
  Wrench,
  Users,
} from "lucide-react";
import Breadcrumbs from "@/app/Components/Breadcrumbs/Breadcrumbs";
import "./NuclearPower.css";

const offerings = [
  "Design calculations and documentation to relevant nuclear codes and standards",
  "2D / 3D CAD modelling of systems, structures and components (SSCs)",
  "Methodology development and design verification by simulation",
  "FEM analysis – stress, vibration and thermal",
  "CFD analysis – conjugate heat transfer and fluid–structure interaction",
  "Seismic evaluation and re-evaluation (ASME B&PV, RCC, PNAE, API, IEEE)",
  "Seismic Margin Assessment (SMA) and HCLPF calculation",
  "Remaining Life Assessment / Extension (RLA / RLE) and Fitness-for-Service (FFS)",
  "Structural integrity assessment and failure / root-cause analysis",
];

const packages = [
  "Primary Piping Package (PPP)",
  "Nuclear Ventilation",
  "Balance of Turbine Island Package (BOTIP)",
  "Plant Water System and Common Services",
  "Pumps and rotating equipment",
  "Waste management and upgradation",
];

const customers = [
  "Nuclear power plant operators",
  "EPC contractors and system integrators",
  "Tier-1 / Tier-2 vendors and component suppliers",
  "Nuclear R&D establishments",
  "Nuclear regulatory bodies",
];

const strengths = [
  {
    icon: Atom,
    title: "Knowledge & competence",
    text: "Deep expertise in engineering design, analysis and structural integrity assessment critical to the safe and reliable operation of nuclear systems.",
  },
  {
    icon: Users,
    title: "Exposure with nuclear entities",
    text: "Work delivered for NPCIL, BARC, IGCAR, BHAVINI and ITER-India, their EPC contractors, system integrators and dozens of tier-2 / tier-3 vendors.",
  },
  {
    icon: Wrench,
    title: "Design & analysis tools",
    text: "Proficiency across CATIA, SolidWorks, ANSYS, ABAQUS, Caesar, CAEPIPE, NASTRAN, CFX, Fluent and HyperWorks, plus scripting and customisation.",
  },
  {
    icon: ShieldCheck,
    title: "Collaborative delivery",
    text: "A track record of delivering projects on time and to quality while balancing the concerns of vendors, EPC contractors, operators and regulators.",
  },
];

const navItems = [
  { title: "Our Offerings", id: "offerings", icon: Atom },
  { title: "NPP Packages", id: "packages", icon: Waves },
  { title: "Potential Customers", id: "customers", icon: Users },
  { title: "Why ProSIM", id: "why-prosim", icon: ShieldCheck },
];

export default function NuclearPowerPage() {
  return (
    <main className="np-page">
      <Breadcrumbs />

      {/* HERO */}
      <section className="np-hero">
        <div className="np-container">
          <span className="np-label">INDUSTRIES / NUCLEAR POWER</span>
          <h1>Nuclear Power</h1>
          <p>
            ProSIM is a collaborative engineering and R&amp;D services company that has
            worked with nuclear entities in India and abroad, supporting the safe and
            reliable operation of nuclear power plant (NPP) systems, structures and
            components.
          </p>
          <p>
            We are specialists in seismic evaluation by analysis and qualify nuclear
            systems to the relevant, geography-specific codes and standards.
          </p>
        </div>
      </section>

      {/* NAVIGATION */}
      <section className="np-navigation">
        <div className="np-container">
          <div className="np-navigation-grid">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <a href={`#${item.id}`} className="np-navigation-link" key={item.id}>
                  <div className="np-navigation-item">
                    <div className="np-navigation-icon">
                      <Icon size={24} strokeWidth={1.8} />
                    </div>
                    <h3>{item.title}</h3>
                    <span>
                      <ArrowUpRight size={18} strokeWidth={1.8} />
                    </span>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* OFFERINGS */}
      <section id="offerings" className="np-section np-section--light">
        <div className="np-container">
          <span className="np-label">WHAT WE OFFER</span>
          <h2>ProSIM offerings to the nuclear power sector</h2>
          <p className="np-section-intro">
            Collaborative engineering, design, R&amp;D and seismic evaluation across the
            full life cycle of nuclear systems:
          </p>
          <ul className="np-list">
            {offerings.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* NPP PACKAGES */}
      <section id="packages" className="np-section">
        <div className="np-container">
          <span className="np-label">EXPERIENCE</span>
          <h2>NPP packages we have worked on</h2>
          <p className="np-section-intro">
            ProSIM has contributed to multiple packages of a nuclear power plant, spanning
            mechanical systems, piping, electrical, control &amp; instrumentation and
            structures (RCC and steel).
          </p>
          <ul className="np-list np-list--two-col">
            {packages.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* CUSTOMERS */}
      <section id="customers" className="np-section np-section--light">
        <div className="np-container">
          <span className="np-label">WHO WE WORK WITH</span>
          <h2>Potential customers</h2>
          <p className="np-section-intro">
            Practically every stakeholder connected with nuclear energy works with ProSIM,
            including:
          </p>
          <ul className="np-list np-list--two-col">
            {customers.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* WHY PROSIM */}
      <section id="why-prosim" className="np-section">
        <div className="np-container">
          <span className="np-label">WHY PROSIM</span>
          <h2>Why customers choose to work with ProSIM</h2>
          <div className="np-strength-grid">
            {strengths.map((item) => {
              const Icon = item.icon;
              return (
                <div className="np-strength-box" key={item.title}>
                  <div className="np-strength-icon">
                    <Icon size={22} strokeWidth={1.8} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="np-cta">
        <div className="np-container">
          <h2>Discuss a nuclear power requirement</h2>
          <p>
            Tell us about your systems, structures or components and our team will get back
            to you.
          </p>
          <Link href="/contact-us" className="np-cta-btn">
            Contact ProSIM
            <ArrowUpRight size={18} strokeWidth={1.8} />
          </Link>
        </div>
      </section>
    </main>
  );
}
