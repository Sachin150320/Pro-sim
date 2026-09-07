

"use client";
import CrumbBanner from "@/app/Components/CrumbBanner/CrumbBanner";
import ScrollAnimation from "@/app/Components/ScrollAnimation";
import "./AboutUs.css";
import { ArrowUpRight, CheckCircle2, Eye, Target } from "lucide-react";

const visionMission = [
    {
        icon: Eye,
        title: "Our Vision",
        text: "Our vision is to be a leading global engineering R&D solutions company, serving our customers and their customers, with our expertise in simulation.",
    },
    {
        icon: Target,
        title: "Our Mission",
        text: "We are driven by a passion to solve large and complex engineering problems. Through continuous learning, collaboration, data integrity, information security and quality, we strive to deliver reliable engineering solutions for our customers.",
    },
];


const services = [
   
 "Computer Aided Engineering (CAE) outsourcing /offshoring Services for Finite element analysis (FEA) outsourcing / offshoring services",
 "Pipeline modeling and pipe stress Analysis outsourcing / offshoring services (including support and embedded parts design and analysis)",
 "Structural Integrity Analysis and assessment including",
 "Seismic evaluation services using FEA",
 "We do this for nuclear and non-nuclear applications for variety of structures, systems, and components (SSCs)",
 "Remaining Life Assessment / Extension (RLA/RLE) services",
 "Fitness for Service (FFS) services as per API-579",
 "Provide re-use/ repair/ reuse / retire judgements for asset usage",
];

const engagementModels = [


"   Outsourced / off-shored projects",
"Provide onsite consulting.",
"Creating cross-functional and collaborative R&D teams between customer and ProSIM teams to accomplish specific design / development objective",
"Create off-shore engineering development centers",
];

export default function AboutSection() {
    return (

        <main className="about-page">

            {/* Breadcrumb */}
            <CrumbBanner
                title="About ProSIM"
                subtitle="ProSIM R&D delivers simulation-driven engineering — FEA, CFD, pipe stress and structural integrity assessment — for nuclear and non-nuclear industries worldwide."
                image="/assets/images/about/1.jpeg"
               
                imageCaption="ProSIM R&D"
            />

            {/* =========================================
                INTRO
            ========================================= */}
            <section className="about-block">
                <div className="about-prosim-container">

                    <div className="about-prosim-intro">

                        <div className="about-prosim-image">
                            <img
                                src="/assets/images/about/1.jpeg"
                                alt="ProSIM Engineering"
                            />

                            {/* <div className="about-image-badge">
                                <span>Engineering</span>
                                <strong>Your Designs</strong>
                            </div> */}
                        </div>

                        <div className="about-prosim-content">

                            <span className="about-eyebrow">
                                ABOUT PROSIM
                            </span>

                            <h2>
                                Engineering expertise built around
                                <span> real-world impact.</span>
                            </h2>

                            <div className="about-line" />

                            <p className="about-lead">
                                We at ProSIM study, in an integrated manner, the
                                interactions between design, materials, manufacturing
                                processes and performance.
                            </p>

                            <p>
                                We work on customer-specific engineering and R&D
                                missions, combining engineering knowledge,
                                simulation capabilities and asset integrity
                                expertise to solve complex technical challenges.
                            </p>

                        </div>
                    </div>

                </div>
            </section>

            {/* =========================================
                CAPABILITIES
            ========================================= */}
            <section className="about-block about-block--alt">
                <div className="about-prosim-container">

                    <div className="about-capabilities">

                        <div className="about-section-heading">
                            <span className="about-eyebrow">
                                WHAT WE DO
                            </span>

                            <h3>
                                We work on customer specific engineering/ R&D missions of our customers,
                            </h3>

                        
                        </div>

                        <div className="about-services-grid">

                            {services.map((service, index) => (
                                <div
                                    className="about-service-card"
                                    key={index}
                                >
                                    <div className="about-service-number">
                                        {String(index + 1).padStart(2, "0")}
                                    </div>

                                    <CheckCircle2
                                        size={20}
                                        strokeWidth={1.7}
                                    />

                                    <p>{service}</p>
                                </div>
                            ))}

                        </div>

                    </div>

                </div>
            </section>

            {/* =========================================
                ENGAGEMENT MODELS
            ========================================= */}
            <section className="about-block">
                <div className="about-prosim-container">

                    <div className="about-engagement">

                        <div className="about-engagement-content">

                            <span className="about-eyebrow">
                                FLEXIBLE ENGAGEMENT
                            </span>

                            <h3>
                               We work out flexible business engagement models to suit our customer needs.
                            </h3>

                          

                            <div className="about-engagement-list">

                                {engagementModels.map((item, index) => (
                                    <div
                                        className="about-engagement-item"
                                        key={index}
                                    >
                                        <CheckCircle2
                                            size={18}
                                            strokeWidth={1.8}
                                        />

                                        <span>{item}</span>
                                    </div>
                                ))}

                            </div>

                        </div>

                    </div>

                </div>
            </section>

            {/* =========================================
                VISION & MISSION
            ========================================= */}
            <section className="about-block about-block--alt">
                <div className="about-prosim-container">

                    <div className="about-vm">

                        <ScrollAnimation className="about-vm-head">
                            <span className="about-eyebrow">WHAT DRIVES US</span>
                            <h2>
                                Vision &amp; <span>Mission</span>
                            </h2>
                        </ScrollAnimation>

                        <div className="about-vm-grid">
                            {visionMission.map((item, index) => {
                                const Icon = item.icon;

                                return (
                                    <ScrollAnimation key={item.title} delay={index * 120}>
                                        <article className="about-vm-card">
                                            <div className="about-vm-top">
                                                <span className="about-vm-icon">
                                                    <Icon size={24} strokeWidth={1.8} />
                                                </span>
                                                <span className="about-vm-num">
                                                    {String(index + 1).padStart(2, "0")}
                                                </span>
                                            </div>

                                            <h3>{item.title}</h3>
                                            <p>{item.text}</p>

                                           
                                        </article>
                                    </ScrollAnimation>
                                );
                            })}
                        </div>
                    </div>


                    

                </div>
            </section>
        </main>


    );
}





