"use client";

import React, { useEffect, useRef, useState } from "react";
import {
    Box,
    Layers,
    ShieldAlert,
    ArrowUpRight,
} from "lucide-react";
import ScrollAnimation from "@/app/Components/ScrollAnimation";
const engineeringServices = [
    {
        number: "01",
        title: "Detailed Engineering",
        description:
            "Discipline-wise deliverables that carry an approved design all the way to the fabrication floor: layouts, drawings, datasheets and MTOs.",
        icon: Box,
    },
    {
        number: "02",
        title: "Advanced Engineering Analysis",
        description:
            "Physics-based FEA, CFD, piping stress and seismic qualification that prove the design holds up under real operating conditions.",
        icon: Layers,
    },
    {
        number: "03",
        title: "Asset Integrity & Life Extension",
        description:
            "Fitness-for-service assessment, residual life evaluation and re-qualification for equipment already in service.",
        icon: ShieldAlert,
    },
];

export default function EngineeringSection() {
    const sectionRef = useRef<HTMLElement | null>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.15 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            className={`eng-horizontal-section ${visible ? "eng-horizontal-visible" : ""
                }`}
        >
            <div className="eng-horizontal-container">

                {/* Heading */}


                <div className="engineering-header">
                    <span className="industries-subtitle">
                        WHAT WE DELIVER
                    </span>



                    <h2 className="engineering-title">Engineering thatperforms beyond paper.</h2>
                    <div className="title-underline" />
                    <p>
                        We combine engineering expertise, advanced analysis and
                        asset integrity capabilities to deliver solutions that are
                        accurate, buildable and ready for real-world operation.
                    </p>


                </div>




                {/* Horizontal Cards */}


                <ScrollAnimation>
                    <div className="eng-horizontal-grid">

                        {engineeringServices.map((service, index) => {
                            const Icon = service.icon;

                            return (
                                <article
                                    key={service.number}
                                    className={`eng-horizontal-card eng-horizontal-card-${index + 1}`}
                                >

                                    {/* Top */}
                                    <div className="eng-card-top">

                                        <span className="eng-card-number">
                                            {service.number}
                                        </span>

                                        <div className="eng-card-icon">
                                            <Icon size={25} strokeWidth={1.5} />
                                        </div>

                                    </div>

                                    {/* Content */}
                                    <div className="eng-card-body">

                                        <h3>{service.title}</h3>

                                        <p>{service.description}</p>

                                    </div>

                                    {/* Bottom */}
                                    <a
                                        href="#contact"
                                        className="eng-card-action"
                                    >
                                        <span>Discuss your scope</span>

                                        <span className="eng-card-arrow">
                                            <ArrowUpRight size={17} />
                                        </span>
                                    </a>

                                    {/* Background Number */}
                                    <span className="eng-card-bg-number">
                                        {service.number}
                                    </span>

                                </article>
                            );
                        })}

                    </div>
                </ScrollAnimation>


            </div>
        </section>
    );
}