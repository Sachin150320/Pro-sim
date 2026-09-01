
"use client";

import React from "react";
import {
  Zap,
  Factory,
  Settings,
  Cpu,
  Shield,
  Car,
  HardHat,
  Wrench,
  BarChart3,
  Lightbulb,
  Layers,
  ClipboardCheck,
  FlaskConical,
} from "lucide-react";

import ScrollAnimation from "@/app/Components/ScrollAnimation";
import Breadcrumbs from "@/app/Components/Breadcrumbs/Breadcrumbs";
import "./CustomerBenefits.css";

const customerTypes = [
  {
    icon: Zap,
    title: "Energy Utilities / Operators",
    text: "Nuclear power plants, thermal power plants, oil and gas, solar power plants, wind turbines, etc.",
  },
  {
    icon: Factory,
    title: "EPC Contractors",
    text: "EPC contractors supporting energy companies and major infrastructure projects.",
  },
  {
    icon: Settings,
    title: "System Integrators",
    text: "Organizations delivering integrated engineering systems and solutions.",
  },
  {
    icon: Cpu,
    title: "Equipment / Component Suppliers",
    text: "Suppliers and manufacturers of critical equipment, components and engineered systems.",
  },
  {
    icon: Shield,
    title: "Defence Entities",
    text: "Armed forces, research laboratories and defence organizations.",
  },
  {
    icon: HardHat,
    title: "Defence Contractors / Suppliers",
    text: "Defence contractors and suppliers requiring advanced engineering support.",
  },
  {
    icon: Car,
    title: "Auto OEMs / Tier-1 Suppliers",
    text: "Automotive OEMs and Tier-1 suppliers.",
  },
  {
    icon: Wrench,
    title: "Heavy & General Engineering",
    text: "Heavy engineering and general engineering companies.",
  },
];

const benefits = [
  {
    icon: BarChart3,
    title: "Capability",
    text: "Technical competence, simulation and analysis expertise in CAE, FEA, structural integrity assessment, remaining life assessment and extension (RLA/RLE), and fitness for service (FFS). ProSIM also has deep knowledge of industry standards and codes such as ASME B&PV, RCC, IEEE, PNAE, EN and DIN.",
  },
  {
    icon: Lightbulb,
    title: "Engineering Judgement",
    text: "Engineering judgement for product design validation through finite element analysis, simulation-based design optimization and failure analysis using advanced analysis tools.",
  },
  {
    icon: Layers,
    title: "Capacity",
    text: "ProSIM augments customer engineering capacity through outsourced and offshored consultancy services for CAE, FEA, pipe modelling and pipe stress analysis, along with onsite consultancy, placement services and offshore development centers.",
  },
  {
    icon: ClipboardCheck,
    title: "Project & Quality Management",
    text: "Decades of experience in robust project management practices and quality management systems. ProSIM proactively alerts customers about risks, delays and technical issues and often acts as a key connector between project stakeholders.",
  },
  {
    icon: FlaskConical,
    title: "Joint Design, Research & Development",
    text: "ProSIM often works as an extended engineering and R&D team and contributes to mission-critical design, research and development projects.",
  },
];

export default function CustomerBenefits() {
  return (
    <section className="cb-section">

      <Breadcrumbs />

      <div className="cb-container">

        {/* =========================
            CUSTOMERS
        ========================= */}

        <ScrollAnimation>
          


<div className="cb-heading">

            <span className="cb-subtitle">
             OUR CUSTOMER
            </span>
            <h1>
         Customers 
        
              <strong> Benefits</strong>
            </h1>

            <p>
              Collaboration with global engineering organisations helps us
              build stronger capabilities and deliver advanced engineering
              solutions to customers across industries.
            </p>

          </div>



        </ScrollAnimation>

        <div className="cb-customer-grid">

          {customerTypes.map((customer, index) => {
            const Icon = customer.icon;

            return (
              <ScrollAnimation key={customer.title}>
                <div
                  className="cb-customer-card"
                  style={{
                    animationDelay: `${index * 80}ms`,
                  }}
                >

                  <div className="cb-icon">
                    <Icon size={24} strokeWidth={1.8} />
                  </div>

                  <h3>
                    {customer.title}
                  </h3>

                  <p>
                    {customer.text}
                  </p>

                </div>
              </ScrollAnimation>
            );
          })}

        </div>

        {/* =========================
            BENEFITS
        ========================= */}

        <ScrollAnimation>
          <div className="cb-heading cb-benefit-heading">

            <span className="cb-subtitle">
              CUSTOMER BENEFITS
            </span>

            <h2>
              ProSIM Customers Get Benefitted
            </h2>

            <div className="cb-line"></div>

            <p>
              ProSIM customers benefit in multiple ways through
              engagement with our engineering and simulation expertise.
            </p>

          </div>
        </ScrollAnimation>

        <div className="cb-benefit-grid">

          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <ScrollAnimation key={benefit.title}>
                <div
                  className="cb-benefit-card"
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >

                  <div className="cb-benefit-top">

                    <div className="cb-benefit-icon">
                      <Icon size={25} strokeWidth={1.8} />
                    </div>

                    <span>
                      0{index + 1}
                    </span>

                  </div>

                  <h3>
                    {benefit.title}
                  </h3>

                  <p>
                    {benefit.text}
                  </p>

                </div>
              </ScrollAnimation>
            );
          })}

        </div>

      </div>
    </section>
  );
}

