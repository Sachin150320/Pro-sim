
"use client";

import {
    Award,
    BookOpen,
    CheckCircle2,
    GraduationCap,
    Globe2,
    Lightbulb,
    Users,
} from "lucide-react";

import CrumbBanner from "@/app/Components/CrumbBanner/CrumbBanner";
import "./Promoter.css";

export default function Promoter() {
    const experience = [
        "A National Science Foundation (NSF-USA) sponsored research scholar at Drexel University.",
        "A British Council sponsored Academic Visitor at Imperial College London, and later a Research Fellow sponsored by the Department of Trade and Industry, UK.",
        "The prestigious National Research Council (NRC-USA) post-doctoral fellowship.",
        "A Visiting Scientist at the Materials Research Lab of Wright-Patterson Air Force Base, Ohio (US Air Force).",
        "An Adjunct Faculty at Wright State University, Dayton, USA.",
    ];

    return (
        <main>
            {/* Breadcrumb */}
            <CrumbBanner
                title="Promoter"
                subtitle="Dr. S. Shamasundar — Promoter and Managing Director of ProSIM R&D, and the research vision behind the company."
                image="/assets/images/about/prosim_enhanced.png"
                imageInset="/assets/images/about/1.webp"
                imageCaption="Leadership"
            />


            {/* Profile */}
            <section className="promoter-profile">
                <div className="promoter-container">

                    <div className="promoter-profile-grid">

                      

                        {/* Introduction */}
                        <div className="promoter-intro">
                            <span className="promoter-section-label">
                                PROMOTER
                            </span>

                            <h2>
                                Dr. S. Shamasundar
                                <span> Promoter and Managing Director  </span>
                            </h2>

                            <div className="promoter-line"></div>

                            <p>
                                Dr. S. Shamasundar is the Promoter and Managing
                                Director of ProSIM R&D Pvt. Ltd. He holds a PhD
                                in Mechanical Engineering from the Indian
                                Institute of Science.
                            </p>

                            <p>
                                Over the past three decades, he has evangelized
                                the use of computer simulation technologies to
                                design, validate and optimize products and
                                processes.
                            </p>

                            <p>
                                He has been involved in the development of
                                non-linear finite element analysis methods for
                                large deformation processes including forging,
                                extrusion and rolling.
                            </p>
                        </div>
                          {/* Image */}
                        <div className="promoter-image-wrap">
                            <div className="promoter-image">
                                <img
                                    src="/assets/images/about/4.jpg"
                                    alt="Dr. S. Shamasundar"
                                />
                            </div>

                            <div className="promoter-image-caption">
                                <span> Dr. S. Shamasundar</span>
                                <strong>Promoter & Managing Director</strong>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Career & Research */}
            <section className="promoter-experience">
                <div className="promoter-container">



                    <div className="promoter-experience-grid">

                        <div className="promoter-experience-card">

                            <div className="promoter-card-icon">
                                <GraduationCap
                                    size={28}
                                    strokeWidth={1.5}
                                />

                            </div>
                            <h3>
                                He has worked as
                            </h3>


                            <div className="promoter-list">
                                {experience.map((item, index) => (
                                    <div
                                        className="promoter-list-item"
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


            {/* Academic Leadership */}
            <section className="promoter-academic">
                <div className="promoter-container">

                    <div className="promoter-academic-grid">

                       

                        <div>
                          


                           <p> Shamasundar has been invited to deliver lectures at various professional forums including ASME, SAE, ASM, SME, EuroForge, IMTMA (Indian Machine tool manufacturers’ association), IIF (Institute of Indian Foundrymen), CII (Confederation of Indian Industry), FICCI (Federation of Indian Chamber of Commerce And Industry) . </p>
                           <p> He has published more than 45 papers in computational modelling. He is a recipient of the KSCST award, and the Japan Society for Technology of Plasticity (JSTP) award for young scientists. </p>
                           <p> At ProSIM, Shamasundar has created a centre for excellence in multi-disciplinary and multi-physics simulation environments to study the interaction of Design-Materials,Manufacturing, And Performance in an integrated manner. A dedicated leadership team has also been developed within ProSIM. </p>
                           <p> Shamasundar has delivered complex engineering projects for customers in India, Japan,the USA, Europe, And Gulf. </p>
                           <p> Dr Shamasundar has created expert interdisciplinary teams for structural integrity assessment of energy assets; for seismic qualification (using finite element analysis -FEA), for remaining life assessment and extension (RLA/RLE), fitness for service (FFS) and engineering critical analysis (ECA). He has led several indigenization / localization projects for Indian defense sectors. </p>
                           <p> Shamasundar is the president of board of the governors of RGIPT, an institution of national importance under the Ministry of Petroleum & Natural Gas (MoPNG), Government of India. on the board of IIT Dharwad. He is associated with several universities and academic institutions. </p>
                           <p> His current interests are in energy transition, application of digitalization in energy sector, sustainability, and green energy. </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* Current Interests */}
            <section className="promoter-interests">
                <div className="promoter-container">

                    <div className="promoter-interests-box">

                        <div className="promoter-interest-icon">
                            <Lightbulb
                                size={32}
                                strokeWidth={1.4}
                            />
                        </div>

                        <div>
                            <span className="promoter-section-label">
                                CURRENT INTERESTS
                            </span>

                            <h2>
                                Energy transition, digitalization
                                & sustainable engineering
                            </h2>

                            <p>
                                His current interests include energy
                                transition, application of digitalization
                                in the energy sector, sustainability and
                                green energy.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

        </main>
    );
}
