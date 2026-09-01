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
const engineeringServices = [
    {
        number: "01",
        title: "Detailed Engineering",
        description:
            "Comprehensive engineering solutions developed with accuracy, practicality and project-specific requirements in mind.",
        icon: Box,
    },
    {
        number: "02",
        title: "Seismic Analysis & Qualification",
        description:
            "Engineering analysis and qualification solutions for systems and components subjected to seismic loading.",
        icon: Activity,
    },
    {
        number: "03",
        title: "Piping & Pipeline Engineering",
        description:
            "Complete piping and pipeline engineering solutions focused on safety, reliability, constructability and performance.",
        icon: Network,
    },
    {
        number: "04",
        title: "3D Plant Modelling",
        description:
            "Detailed 3D plant modelling for improved visualization, coordination, clash detection and engineering accuracy.",
        icon: Layers,
    },
    {
        number: "05",
        title: "Finite Element Analysis (FEA)",
        description:
            "Advanced finite element analysis to evaluate structural behaviour, stresses, deformation and component performance.",
        icon: Cpu,
    },
    {
        number: "06",
        title: "CFD & Multiphysics Simulations",
        description:
            "Simulation-driven engineering using CFD and multiphysics methods to understand complex operating conditions.",
        icon: Workflow,
    },
    {
        number: "07",
        title: "RLA/RLE & Fitness-for-Service (FFS)",
        description:
            "Fitness-for-service assessment, residual life evaluation and re-qualification for equipment already in service.",
        icon: ShieldCheck,
    },
    {
        number: "08",
        title: "Engineering Automation & Digital Twin",
        description:
            "Digital engineering and automation solutions that improve engineering workflows, monitoring and asset performance.",
        icon: Settings2,
    },
    {
        number: "09",
        title: "Pre-Bid & Owner’s Engineering",
        description:
            "Technical support, engineering evaluation and owner’s engineering services for effective project planning and execution.",
        icon: ClipboardCheck,
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

                                        <div className="eng-card-icon">
                                            <Icon
                                                size={25}
                                                strokeWidth={1.5}
                                            />
                                        </div>
                                    </div>

                                    <div className="eng-card-body">
                                        <h3>{service.title}</h3>

                                        <p>{service.description}</p>
                                    </div>

                                    <a
                                        href="#contact"
                                        className="eng-card-action"
                                    >
                                        <span>Discuss your scope</span>

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