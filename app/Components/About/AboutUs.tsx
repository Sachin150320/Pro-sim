

"use client";
import CrumbBanner from "@/app/Components/CrumbBanner/CrumbBanner";
import "./AboutUs.css";
import {
    ArrowRight,
    CheckCircle2,
    Factory,
    FlaskConical,
    Settings2,
    ShieldCheck,
} from "lucide-react";


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
                image="/assets/images/about/prosim_enhanced.png"
               
                imageCaption="ProSIM R&D"
            />

            <section className="about-prosim-section">

                <div className="about-prosim-container">

                    {/* =========================================
                    INTRO
                ========================================= */}

                    <div className="about-prosim-intro">

                        <div className="about-prosim-image">
                            <img
                                src="/assets/images/about/3.jpg"
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


                    {/* =========================================
                    CAPABILITIES
                ========================================= */}

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




                    {/* =========================================
                    ENGAGEMENT MODELS
                ========================================= */}

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


                    {/* =========================================
                    CLOSING STATEMENT
                ========================================= */}

                    

                </div>
            </section>
        </main>


    );
}





