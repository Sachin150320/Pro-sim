
"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import CrumbBanner from "@/app/Components/CrumbBanner/CrumbBanner";
import "./Uniquevalue.css";

const values = [
    {
        number: "01",
        title: "Customer Focus",
        text: "Our USP is our customer focus and our solution mindset.",
    },
    {
        number: "02",
        title: "Integrated Engineering Understanding",
        text: "Unique ability to study the interactions of product design, process, material and performance in an integrated manner during the upstream of the design process.",
    },
    {
        number: "03",
        title: "Advanced Simulation Expertise",
        text: "Ability to provide engineering solutions based on engineering expertise and deep knowledge of computer simulation techniques including finite element analysis, CFD and multi-physics simulations, supported by high-quality CAE processes.",
    },
    {
        number: "04",
        title: "In-House Engineering Methods",
        text: "In-house developed methods, best practices, SOPs, macros and subroutines that strengthen our engineering solutions and project execution.",
    },
    {
        number: "05",
        title: "Quality Management",
        text: "Strong quality management processes that ensure consistency, reliability and dependable engineering outcomes.",
    },
    {
        number: "06",
        title: "Project Management & Advisory",
        text: "Robust project management practices and extensive advisory expertise in design evaluation as per industry standards and codes such as ASME, RCC, PNAE, IEEE and EN.",
    },
];

export default function UniqueValueProposition() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const items = sectionRef.current?.querySelectorAll(".uvp-item");

        if (!items) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("uvp-show");
                    }
                });
            },
            {
                threshold: 0.12,
            }
        );

        items.forEach((item) => observer.observe(item));

        return () => observer.disconnect();
    }, []);

    return (
        <main className="uvp-page">

            {/* Breadcrumb */}
            <CrumbBanner
                title="Unique Value Proposition"
                subtitle="Why customers choose ProSIM — the engineering strengths and processes that set our work apart."
                image="/assets/images/about/prosim_enhanced.png"
                imageInset="/assets/images/about/1.webp"
                imageCaption="Our USP"
            />

            {/* Unique Value Proposition */}
            <section className="uvp-section" ref={sectionRef}>

                <div className="uvp-container">

                    {/* Heading */}

                    <div className="uvp-heading">

                        <span className="uvp-label">
                            UNIQUE VALUE
                        </span>

                        <h2>
                            Unique Value{" "}
                            <strong>Proposition</strong>
                        </h2>

                        <p>
                            Our engineering expertise, customer focus and solution mindset
                            enable us to deliver dependable solutions for complex engineering
                            challenges.
                        </p>

                    </div>


                    {/* Image + Content */}

                    <div className="uvp-layout">

                        {/* Image */}

                        <div className="uvp-image">

                            <Image
                                src="/assets/images/about/5.png"
                                alt="Engineering simulation and analysis"
                                fill
                                priority
                                sizes="(max-width: 900px) 100vw, 45vw"
                            />

                            <div className="uvp-image-overlay"></div>

                            <div className="uvp-image-caption">

                                <span>
                                    ENGINEERING
                                </span>

                                <strong>
                                    Expertise that delivers.
                                </strong>

                            </div>

                        </div>


                        {/* Content */}

                        <div className="uvp-content">

                            {values.map((item, index) => (

                                <div
                                    className="uvp-item"
                                    key={item.number}
                                    style={{
                                        transitionDelay: `${index * 100}ms`,
                                    }}
                                >

                                    <div className="uvp-number">
                                        {item.number}
                                    </div>

                                    <div className="uvp-item-content">

                                        <h3>
                                            {item.title}
                                        </h3>

                                        <p>
                                            {item.text}
                                        </p>

                                    </div>

                                    <div className="uvp-arrow">
                                        ↗
                                    </div>

                                </div>

                            ))}

                        </div>

                    </div>

                </div>

            </section>

        </main>
    );
}
