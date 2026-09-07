"use client";

import React, { useEffect, useRef, useState } from "react";
import {
    Box,
    Layers,
    ShieldCheck,
    Workflow,
    Cpu,
    Activity,
    Settings2,
    Network,
    ClipboardCheck,
    ArrowUpRight,
} from "lucide-react";
import ScrollAnimation from "@/app/Components/ScrollAnimation";

const IMG = "/assets/images/portfolio/modern";

const engineeringServices = [
    {
        number: "01",
        title: "Detailed Engineering",
        description:
            "Comprehensive engineering solutions developed with accuracy, practicality and project-specific requirements in mind.",
        icon: Box,
        image: `${IMG}/1.webp`,
        href: "/Detailed-Engineering-services",
    },
    {
        number: "02",
        title: "Seismic Analysis & Qualification",
        description:
            "Engineering analysis and qualification solutions for systems and components subjected to seismic loading.",
        icon: Activity,
        image: `${IMG}/2.webp`,
        href: "/Seismic-analysis-and-qualification",
    },
    {
        number: "03",
        title: "Piping & Pipeline Engineering",
        description:
            "Complete piping and pipeline engineering solutions focused on safety, reliability, constructability and performance.",
        icon: Network,
        image: `${IMG}/3.webp`,
        href: "/Piping-&-pipeline-engineering-services",
    },
    {
        number: "04",
        title: "3D Plant Modelling",
        description:
            "Detailed 3D plant modelling for improved visualization, coordination, clash detection and engineering accuracy.",
        icon: Layers,
        image: `${IMG}/4.webp`,
        href: "/Three-D-plant-modelling-services",
    },
    {
        number: "05",
        title: "Finite Element Analysis (FEA)",
        description:
            "Advanced finite element analysis to evaluate structural behaviour, stresses, deformation and component performance.",
        icon: Cpu,
        image: `${IMG}/5.webp`,
        href: "/finite-element-analysis-services",
    },
    {
        number: "06",
        title: "CFD & Multiphysics Simulations",
        description:
            "Simulation-driven engineering using CFD and multiphysics methods to understand complex operating conditions.",
        icon: Workflow,
        image: `${IMG}/6.webp`,
        href: "/Computational-fluid-dynamics-services",
    },
    {
        number: "07",
        title: "RLA/RLE & Fitness-for-Service (FFS)",
        description:
            "Fitness-for-service assessment, residual life evaluation and re-qualification for equipment already in service.",
        icon: ShieldCheck,
        image: `${IMG}/7.webp`,
        href: "/structural-integrity-assessments",
    },
    {
        number: "08",
        title: "Engineering Automation & Digital Twin",
        description:
            "Digital engineering and automation solutions that improve engineering workflows, monitoring and asset performance.",
        icon: Settings2,
        image: `${IMG}/8.webp`,
        href: "/Engineering-Automation-&-Digital-Twin",
    },
    {
        number: "09",
        title: "Pre-Bid & Owner’s Engineering",
        description:
            "Technical support, engineering evaluation and owner’s engineering services for effective project planning and execution.",
        icon: ClipboardCheck,
        image: `${IMG}/9.webp`,
        href: "/Pre-Bid-&-Owners-Engineering",
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
            className={`eng-horizontal-section ${
                visible ? "eng-horizontal-visible" : ""
            }`}
        >
            <div className="eng-horizontal-container">

                <div className="engineering-header">
                    <span className="industries-subtitle">
                        WHAT WE DELIVER
                    </span>

                    <h2 className="engineering-title">
                        Engineering that performs beyond paper.
                    </h2>

                    <div className="title-underline" />

                    <p>
                        We combine engineering expertise, advanced analysis and
                        asset integrity capabilities to deliver solutions that are
                        accurate, buildable and ready for real-world operation.
                    </p>
                </div>

                <ScrollAnimation>
                    <div className="eng-horizontal-grid">
                        {engineeringServices.map((service, index) => {
                            const Icon = service.icon;

                            return (
                                <article
                                    key={service.number}
                                    className={`eng-horizontal-card eng-horizontal-card-${
                                        index + 1
                                    }`}
                                >
                                    <div className="eng-card-top">
                                        <span className="eng-card-number">
                                            {service.number}
                                        </span>

                                        <div className="eng-card-top-right">
                                            <img
                                                className="eng-card-thumb"
                                                src={service.image}
                                                alt={service.title}
                                                loading="lazy"
                                            />

                                            {/* <div className="eng-card-icon">
                                                <Icon
                                                    size={25}
                                                    strokeWidth={1.5}
                                                />
                                            </div> */}
                                        </div>
                                    </div>

                                    <div className="eng-card-body">
                                        <h3>
                                            <a href={service.href}>
                                                {service.title}
                                            </a>
                                        </h3>

                                        <p>{service.description}</p>
                                    </div>

                                    <a
                                        href={service.href}
                                        className="eng-card-action"
                                    >
                                        <span>Explore this service</span>

                                        <span className="eng-card-arrow">
                                            <ArrowUpRight size={17} />
                                        </span>
                                    </a>

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