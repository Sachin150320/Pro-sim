"use client";

import { useState } from "react";
import Breadcrumbs from "@/app/Components/Breadcrumbs/Breadcrumbs";
import ScrollAnimation from "@/app/Components/ScrollAnimation";
import { ArrowRight, Check } from "lucide-react";
import "./ProjectsPage.css";

const P = "/assets/images/portfolio/modern";
const PROJ = "/assets/images/project";
const LOGO = "/assets/images/project/client%20logo";

/* clean single-brand logos from /assets/images/project/client logo/ */
const SW: Record<string, { name: string; logo?: string }> = {
  hypermesh: { name: "Altair HyperMesh", logo: `${LOGO}/6.png` },
  abaqus: { name: "SIMULIA Abaqus" }, // no standalone logo file yet — shown as text
  caesar: { name: "CAESAR II", logo: `${LOGO}/3.png` },
  autocad: { name: "Autodesk AutoCAD", logo: `${LOGO}/4.png` },
  ansysWb: { name: "ANSYS Workbench", logo: `${LOGO}/5.png` },
  ansys: { name: "Ansys", logo: `${LOGO}/7.png` },
  navisworks: { name: "Autodesk Navisworks", logo: `${LOGO}/8.png` },
  plant3d: { name: "Autodesk Plant 3D" }, // no logo file yet — shown as text
  staad: { name: "STAAD.Pro" }, // no logo file yet — shown as text
  office: { name: "Microsoft Office" }, // no logo file yet — shown as text
  aveva: { name: "AVEVA" }, // no logo file yet — shown as text
};

type Section = { heading: string; body?: string; list?: string[] };

type Project = {
  title: string;
  intro: string;
  image: string;
  client: string;
  sector: string;
  location: string;
  duration: string;
  sections: Section[];
  deliverables: string[];
  software: { name: string; logo?: string }[];
};

const ffsPipeline: Project = {
  title: "Fitness-for-Service Assessment of a Pipeline During Lifting Operations",
  intro:
    "Performed a Fitness-for-Service assessment of a live pipeline affected by CUPS to validate its structural integrity during a 50 mm lifting operation for UT inspection. Developed reusable lifting guidelines defining safe criteria for multiple pipe sizes and configurations, enabling safer and more efficient maintenance decisions.",
  image: `${PROJ}/1.jpg`,
  client: "Energy & Petrochemical Multinational Corporation",
  sector: "ENERGY – Oil, Gas & Consumable Fuels",
  location: "Brunei, Malaysia",
  duration: "6 Months",
  sections: [
    {
      heading: "Customer Problem",
      body: "The live pipeline had developed Corrosion Under Pipe Support (CUPS) and required a 50 mm lift for UT inspection while remaining in service, creating uncertainty about its structural integrity during lifting.",
    },
    {
      heading: "Approach",
      body: "A detailed FE assessment was performed across representative pipeline configurations and pipe sizes to identify the governing lifting conditions.",
    },
    {
      heading: "Key Finding",
      body: "The CUPS region was identified as the critical location during lifting; the remaining wall thickness became a key factor governing structural integrity.",
    },
    {
      heading: "Risk & Recommendations",
      body: "The assessment demonstrated that remaining wall thickness, support configuration and lifting conditions were important factors in controlling the lifting risk and therefore had to be considered before carrying out the maintenance activity.",
    },
    {
      heading: "Business Outcome",
      body: "ProSIM provided the customer with a reusable engineering guideline, reducing their need for repeated detailed assessments and engineering effort for similar lifting activities, while enabling safer and faster maintenance decisions.",
    },
    {
      heading: "Conclusion",
      body: "The assessment reduced uncertainty around live pipeline lifting and enabled the customer to proceed with maintenance planning with greater confidence.",
    },
  ],
  deliverables: [
    "FEA results report",
    "Minimum allowable wall thickness",
    "Safe lifting criteria",
    "Reusable engineering guideline",
  ],
  software: [SW.hypermesh, SW.abaqus],
};

const pipeStressIncinerator: Project = {
  title: "Pipe Stress Analysis of a 44-inch Incinerator Line",
  intro:
    "Validated the proposed incinerator piping design modification under static and dynamic loading, enabling the customer to approve and proceed with the site modifications confidently while improving efficiency of the incinerator and minimizing the risk of future operational failures.",
  image: `${PROJ}/2.jpg`,
  client: "Indian Oil & Gas Refinery",
  sector: "ENERGY – Oil, Gas",
  location: "Kochi, India",
  duration: "6 Weeks",
  sections: [
    {
      heading: "Customer Problem",
      body: "Water carryover in pipeline was reducing incinerator efficiency; customer required a validation for the proposed design modification that could be safe and reliable operation before approval for site implementation.",
    },
    {
      heading: "Approach",
      body: "Performed static & dynamic pipe stress analysis to validate the proposed design modification against stress, nozzle, seismic, and code requirements as per ASME B31.3.",
    },
    {
      heading: "Key Finding",
      body: "Excessive thermal expansion, stress ratio up to 226% against allowable, and incorrect as-built boundary conditions considered which led to failure in the as-built condition.",
    },
    {
      heading: "Risk & Recommendations",
      body: "The assessment demonstrated that the suggested design could not be used for onsite deployment. As a mitigation, ProSIM replaced the existing bellows and optimized targeted pipe sections to improve flexibility without increasing pressure drop in the piping system.",
    },
    {
      heading: "Business Outcome",
      body: "Nearly 20% higher incinerator efficiency was achieved, 100% stress & nozzle qualified as per customer requirement, and reduced site modification cost through an optimized layout with targeted modification.",
    },
    {
      heading: "Conclusion",
      body: "This qualification turned an operational challenge into a safe, optimized engineering solution that improved efficiency and achieved complete design qualification, ultimately giving the customer the confidence to implement on site.",
    },
  ],
  deliverables: [
    "Detailed Pipe Stress analysis Report",
    "C2 Files",
    "Fabrication isometrics",
  ],
  software: [SW.caesar, SW.autocad],
};

const feaWtgTransformer: Project = {
  title: "FEA of a Wind Turbine Generator (WTG) Transformer",
  intro:
    "FEA-based structural validation of a WTG transformer under transportation, lifting, extreme wind with acceleration loads. The analysis identified critical stress regions and supported optimization of the lifting arrangement, tie-down configuration, & weld design, resulting in a validated design ready for manufacturing.",
  image: `${PROJ}/3.jpg`,
  client: "British electrical power and energy infrastructure",
  sector: "ENERGY – Renewable",
  location: "Brazil",
  duration: "5 Weeks",
  sections: [
    {
      heading: "Customer Problem",
      body: "Customer needed to ensure the WTG Transformer could safely withstand transportation, lifting, and extreme wind loading without structural failure before manufacturing.",
    },
    {
      heading: "Approach",
      body: "Developed an FE model, applied transportation, lifting, and wind load cases, evaluated stress, deformation, and Factor of Safety, then optimized the design through iterative FEA.",
    },
    {
      heading: "Key Finding",
      body: "Transportation emerged as the critical governing load case, with bottom support plate weld stresses exceeding the allowable limit by 20%, driving optimization of both the transportation and lifting configurations.",
    },
    {
      heading: "Risk & Recommendations",
      body: "Optimized the lifting configuration by sling angle and sling length for safe handling, and changed the bottom support plate welds from 2-side to 4-side weld, eliminating weld failure during transportation.",
    },
    {
      heading: "Business Outcome",
      body: "Reduced cost & legal implication of failure during operation. The reduced lifting and transportation risks, eliminated structural failure, minimized potential rework and failures, and improved confidence in safe manufacturing and field operation.",
    },
    {
      heading: "Conclusion",
      body: "The WTG Transformer was validated for critical loads. The lifting, tie-down, and weld design were optimized, making the transformer ready for safe manufacturing and operation.",
    },
  ],
  deliverables: [
    "FEA-validated transformer design",
    "Critical stress & FOS assessment",
    "Optimized lifting, tie-down, and weld design",
  ],
  software: [SW.ansysWb],
};

const seismicMotor: Project = {
  title: "Seismic Qualification of a 3.2 MW Induction Motor for a CCW Pump",
  intro:
    "Equipment qualification for Operating Basis Earthquake (OBE) loading — the customer needed confidence to release the motor for manufacturing and deliver it to a nuclear power plant site, a decision that could not be made without seismic qualification proof.",
  image: `${PROJ}/4.jpg`,
  client: "Power Systems Manufacturer",
  sector: "ENERGY – Nuclear",
  location: "Kudankulam, KKNPP 1 & 2, India",
  duration: "5 Weeks",
  sections: [
    {
      heading: "Customer Problem",
      body: "The motor could not be released for manufacturing or supplied to KKNPP Units 1 & 2 without proof of seismic (OBE) qualification, reviewed and approved by NPCIL.",
    },
    {
      heading: "Approach",
      body: "FE model & loading definition → stress evaluation against ASME Sec III, Div 1, NF allowable → functional operability check → pump & motor interface clearance check.",
    },
    {
      heading: "Key Finding",
      body: "All major components (stator, rotor, enclosure, supports, heat exchanger) qualified — only the motor mounting base frame exceeded the 233.4 MPa allowable, by 22%.",
    },
    {
      heading: "Risk & Recommendations",
      body: "Local reinforcement (stiffeners) at the base frame, cutting stress to 28% below allowable without a major redesign — approved by the customer.",
    },
    {
      heading: "Business Outcome",
      list: [
        "Report delivered in 3 weeks (vs. 5-week schedule), directly enabling early engagement for manufacturing release and site supply.",
        "Risk resolved, designed within the 27-tonne weight limit → won a new 2.8 MW motor qualification order.",
      ],
    },
    {
      heading: "Conclusion",
      body: "The motor is qualified for OBE seismic loading as per ASME NF, with one identified risk (base frame) resolved through low-impact reinforcement.",
    },
  ],
  deliverables: [
    "FE-based seismic stress report",
    "Functional operability check",
    "Base frame reinforcement design",
  ],
  software: [SW.hypermesh, SW.ansys],
};

/* content updated from the latest project slide */
const pipeStressDesalination: Project = {
  title: "Pipe Stress Analysis of 40MLD Desalination Plant",
  intro:
    "Evaluated critical piping systems under operating and environmental loads by performing pipe stress analysis for a 40 MLD desalination plant, ensuring piping integrity, safety, and code compliance to support safe and reliable plant execution.",
  image: `${PROJ}/5.jpg`,
  client: "Indian Multinational Engineering & Construction",
  sector: "WATER",
  location: "Saudi Arabia",
  duration: "6 Months",
  sections: [
    {
      heading: "Customer Problem",
      body: "The customer had to validate 500 pipe spools with +1500 supports before construction, including verification of piping loads, nozzle loads and loads at termination/battery limits.",
    },
    {
      heading: "Approach",
      body: "3D plant model review, detailed review of piping isometrics and performed pipe stress analysis under operating, seismic and wind loading conditions as per ASME B31.3 & ISO-14692.",
    },
    {
      heading: "Key Finding",
      body: "Identified termination loads above 100 kN near the existing piping system, nozzle loads approaching ~2× vendor limits, and missing support tags affecting load identification.",
    },
    {
      heading: "Risk & Recommendations",
      body: "High restraint loads resulting in pipe overstress, high nozzle loads resulting in equipment damage. To reduce high termination loads, it was recommended to replace anchors with standard supports and it was recommended to modify routing near equipment to minimize nozzle loads.",
    },
    {
      heading: "Business Outcome",
      body: "By reducing high termination loads and nozzle loads, structural integrity was ensured and the cost of repair and intermediate stoppages of waste water management was minimized.",
    },
    {
      heading: "Conclusion",
      body: "The pipe stress analysis provided a systematic evaluation of the 40 MLD desalination plant piping systems under applicable loading conditions. The identified critical areas and recommended modifications support safe, reliable, and code-compliant plant execution.",
    },
  ],
  deliverables: [
    "Pipe stress analysis report",
    "Pipe restraint loads",
    "Stress Isometrics with support markups",
  ],
  software: [SW.caesar, SW.navisworks, SW.autocad],
};

const vhpSteam: Project = {
  title: "VHP Steam System – Pipe Stress Analysis",
  intro:
    "Comprehensive pipe stress analysis of the VHP (Very High Pressure) steam and associated feedwater systems is performed to verify code compliance, stress limits, support loads, and equipment nozzle loads in accordance with NEMA SM-23 enabling safe, reliable turbine operation.",
  image: `${PROJ}/11.png`,
  client: "Indian Thermal Power Plant",
  sector: "ENERGY – Thermal",
  location: "Dahej, India",
  duration: "4 Weeks",
  sections: [
    {
      heading: "Customer Problem",
      body: "Client wanted to understand if the designed VHP steam and feedwater piping system qualifies for operations and is code compliant.",
    },
    {
      heading: "Approach",
      body: "Performed static & dynamic pipe stress analysis to validate the proposed design modification against stress, nozzle, seismic, and code requirements as per ASME B31.3 requirements. Turbine nozzle loads were evaluated as per NEMA SM-23.",
    },
    {
      heading: "Key Finding",
      body: "Design and operating temperatures of 550°C and 510°C, respectively, at 120 bar caused significant thermal expansion. The stress ratio was 160% of the allowable limit, and turbine nozzle loads exceeded by 12 times the allowable loads as per NEMA SM-23.",
    },
    {
      heading: "Risk & Recommendations",
      body: "Recommended spring supports at critical locations and additional flexibility was introduced near the turbine inlet and outlet nozzles including the telescopic silencer.",
    },
    {
      heading: "Business Outcome",
      body: "The recommended changes reduced stress ratios to 85% of the allowable limit across all load cases and below 60% under sustained conditions. Nozzle loads reduced from up to 12 times to below the allowable as per NEMA SM-23, improving turbine life and lowering operational risk. This resulted in quicker acceptance by BECHTEL with no rework or comments. This helped in quicker installation and realization of value.",
    },
    {
      heading: "Conclusion",
      body: "Delivered a validated, code-compliant piping design that supports reliable turbine operation and confident site implementation.",
    },
  ],
  deliverables: [
    "Detailed Pipe Stress Analysis Report",
    "C2 files",
    "Hanger Bill of Quantities (BOQ)",
    "Red-markup drawings",
    "Trunnion qualification sheets",
  ],
  software: [SW.caesar, SW.autocad],
};

const seismicFan: Project = {
  title:
    "Seismic Qualification of Tube Axial Fan for Post Accident Hydrogen Management System – MAPS 1 & 2",
  intro:
    "Equipment qualification for Operating Basis Earthquake (OBE) & Beyond Design Basis Earthquake (BDBE) loading — The customer needed confidence to release the tube axial fan for manufacturing and deliver it to a nuclear power plant site — a decision that could not be made without seismic qualification proof.",
  image: `${PROJ}/10.png`,
  client: "Axial Fan Manufacturer",
  sector: "ENERGY – Nuclear",
  location: "Madras, MAPS 1 & 2, India",
  duration: "4 Weeks",
  sections: [
    {
      heading: "Customer Problem",
      body: "The fan could not be released for manufacturing or supplied to MAPS Units 1 & 2 without proof of seismic (OBE) qualification, reviewed and approved by NPCIL.",
    },
    {
      heading: "Approach",
      body: "FE model & loading definition → stress evaluation against ASME Sec III, Div 1, NCD & NF allowable → functional operability check → impeller-casing & stator-rotor interface clearance check.",
    },
    {
      heading: "Key Finding",
      body: "All major components (impeller, casing, stator, rotor, supports) qualified. No supports for fan assembly fixing.",
    },
    {
      heading: "Risk & Recommendations",
      body: "Suggested the support structure for tube axial fan fixing, ensuring compatibility with the site mounting locations — approved by the customer.",
    },
    {
      heading: "Business Outcome",
      list: [
        "Report delivered in 2 weeks (vs. 4-week schedule): directly enabling early engagement for manufacturing release and site supply.",
        "Designed required support for this fan ensuring there are no failures at site during operations.",
        "Received orders for this fan qualification for 5 other NPP units (KAPS, KGS, NAPS, RAPS & TAPS).",
      ],
    },
    {
      heading: "Conclusion",
      body: "The axial tube fan is qualified for OBE & BDBE seismic loading as per ASME NCD, NF with one identified risk of support resolved through support structure design and qualification.",
    },
  ],
  deliverables: [
    "FE-based seismic stress report",
    "Functional operability check",
    "Support design & qualification",
  ],
  software: [SW.hypermesh, SW.ansys],
};

/* NEW — Part 1, slide 2 */
const nuclearChillerPackage: Project = {
  title: "Detailed Engineering of Nuclear Power Plant Chiller Package",
  intro:
    "Performed multidisciplinary detailed engineering for the Sodium Technology Complex, covering intelligent 3D modelling, piping, structural engineering, seismic qualification and engineering documentation for a nuclear facility.",
  image: `${PROJ}/6.png`,
  client: "National Nuclear R&D Institution",
  sector: "Nuclear",
  location: "India",
  duration: "8 Months",
  sections: [
    {
      heading: "Customer Problem",
      body: "The customer required multidisciplinary detailed engineering for the Sodium Technology Complex, including 3D modelling, piping, structural engineering and seismic qualification.",
    },
    {
      heading: "Approach",
      body: "Developed intelligent 3D models and performed piping and structural engineering, including generation of FRS and SAM data for piping stress and seismic qualification.",
    },
    {
      heading: "Key Finding",
      body: "The integrated engineering approach helped identify design and interface issues early, improving coordination between mechanical, piping, structural and E&I disciplines.",
    },
    {
      heading: "Risk & Recommendations",
      body: "Design and seismic qualification requirements could impact structural integrity and project compliance. Engineering activities were coordinated and developed in accordance with ASME Section III, NPCIL specifications and applicable codes.",
    },
    {
      heading: "Business Outcome",
      body: "Successfully delivered coordinated engineering and qualification outputs, covering 3,000+ pipes, 600+ supports and 250+ piping systems.",
    },
    {
      heading: "Conclusion",
      body: "The detailed engineering support provided a coordinated and efficient engineering solution for the nuclear chiller package, supporting accurate, compliant and reliable project execution.",
    },
  ],
  deliverables: [
    "3D Equipment, Piping, Structural & Platform Models",
    "Equipment Layouts, Piping GA Drawings & Piping Isometrics",
    "Line Lists, Piping MTO & Valve and Instrument Schedules",
    "Engineering Transmittals, QC Reports & User Manuals",
  ],
  software: [SW.aveva, SW.autocad, SW.caesar],
};

const stcDetailedEngineering: Project = {
  title: "Detailed Engineering of Sodium Technology Complex (STC)",
  intro:
    "Performed multidisciplinary engineering for a nuclear power plant chiller package, covering 3D equipment and piping modelling, detailed drafting, material management and project documentation. The integrated engineering approach supported accurate design development, interdisciplinary coordination and delivery of project-specific engineering outputs.",
  image: `${PROJ}/7.png`,
  client: "Indian Nuclear Power Utility",
  sector: "Nuclear",
  location: "India",
  duration: "10 Months",
  sections: [
    {
      heading: "Customer Problem",
      body: "The customer required detailed engineering support for a nuclear chiller package, including equipment and piping modelling, drafting, material management and project documentation.",
    },
    {
      heading: "Approach",
      body: "Performed integrated 3D modelling, equipment and piping layout development, detailed drafting and engineering documentation with multidisciplinary coordination.",
    },
    {
      heading: "Key Finding",
      body: "The integrated engineering approach helped identify design and interface issues early, improving coordination between mechanical, piping, structural and E&I disciplines.",
    },
    {
      heading: "Risk & Recommendations",
      body: "Design inconsistencies and interface issues could affect project execution and compliance. Close multidisciplinary coordination and adherence to applicable project standards were maintained throughout the engineering process.",
    },
    {
      heading: "Business Outcome",
      body: "Delivered coordinated engineering outputs including 3D models, layouts, piping isometrics, GA drawings, material take-offs and project documentation.",
    },
    {
      heading: "Conclusion",
      body: "The detailed engineering support provided an integrated solution for the STC, supporting accurate design development, seismic qualification and reliable execution of the nuclear facility.",
    },
  ],
  deliverables: [
    "Intelligent 3D Models, Equipment & Piping Layouts",
    "Structural & Support Models, FRS and SAM Data",
    "Piping GA & Isometric Drawings, Equipment Location Plans",
    "Piping MTO, Line Lists, Engineering & QC Documentation",
  ],
  software: [SW.plant3d, SW.autocad, SW.staad],
};

const steamTurbineRM: Project = {
  title: "Steam Turbine R&M Engineering",
  intro:
    "Renovation and modernisation engineering for two 210 MW steam turbine units, covering laser-scan-based 3D modelling, piping redesign, retrofit engineering and detailed documentation.",
  image: `${PROJ}/8.png`,
  client: "Indian Power Generation Utility",
  sector: "Thermal Power",
  location: "India",
  duration: "6 Months",
  sections: [
    {
      heading: "Customer Problem",
      body: "The customer required renovation and modernisation engineering for two 210 MW steam turbine units, including accurate documentation of the existing plant and redesign of critical piping systems.",
    },
    {
      heading: "Approach",
      body: "Combined field data capture and laser scanning with 3D plant modelling to develop retrofit-condition models, equipment layouts and optimised piping modifications.",
    },
    {
      heading: "Key Finding",
      body: "Laser-scan integration with the 3D model improved dimensional accuracy and enabled identification of routing constraints and modification requirements within the existing operating facility.",
    },
    {
      heading: "Risk & Recommendations",
      body: "Existing plant constraints and inaccurate legacy information could affect retrofit execution. Laser-scan-based modelling and optimised piping routing were used to minimise site clashes and improve modification accuracy.",
    },
    {
      heading: "Business Outcome",
      body: "Delivered coordinated engineering outputs including 3D models, layouts, piping isometrics, GA drawings, material take-offs and project documentation.",
    },
    {
      heading: "Conclusion",
      body: "The detailed engineering support provided an integrated solution for the steam turbine R&M project, supporting accurate design development and reliable execution of the retrofit within the operating facility.",
    },
  ],
  deliverables: [
    "Intelligent 3D Models, Equipment & Piping Layouts",
    "Structural & Support Models, FRS and SAM Data",
    "Piping GA & Isometric Drawings, Equipment Location Plans",
    "Piping MTO, Line Lists, Engineering & QC Documentation",
  ],
  software: [SW.plant3d, SW.autocad, SW.staad],
};

/* NEW — Part 2, slide 1 */
const greenHydrogen: Project = {
  title: "Green Hydrogen Plant Engineering",
  intro:
    "Multidisciplinary engineering of a 100 Nm³/h green hydrogen generation plant, covering process, mechanical, piping, civil, and electrical, instrumentation & control engineering.",
  image: `${PROJ}/12.png`,
  client: "Global Precision Engineering & Manufacturing Company",
  sector: "Green Hydrogen",
  location: "India",
  duration: "6 Months",
  sections: [
    {
      heading: "Customer Problem",
      body: "The project required multidisciplinary engineering for a 100 Nm³/h green hydrogen generation plant, with coordinated design across process, mechanical, piping, civil and E&I disciplines to meet applicable technical requirements and project specifications.",
    },
    {
      heading: "Approach",
      body: "ProSIM provided multidisciplinary plant engineering, developing and coordinating engineering deliverables across process, mechanical, piping, civil and E&I disciplines. Engineering documentation was developed and checked against applicable international standards.",
    },
    {
      heading: "Key Finding",
      body: "The integrated engineering approach enabled coordination across multiple disciplines and supported verification of design interfaces, technical requirements and consistency across plant engineering deliverables.",
    },
    {
      heading: "Risk & Recommendations",
      body: "Potential design inconsistencies, interface conflicts and deviations from applicable codes or project specifications were addressed through multidisciplinary engineering coordination, design verification and structured document reviews.",
    },
    {
      heading: "Business Outcome",
      body: "Delivered coordinated multidisciplinary engineering support for the 100 Nm³/h green hydrogen plant, supporting design consistency, technical compliance and engineering quality across the plant's major engineering disciplines.",
    },
    {
      heading: "Conclusion",
      body: "The project demonstrated ProSIM's capability to deliver integrated plant engineering for green hydrogen facilities, combining multidisciplinary design coordination, engineering documentation and technical compliance verification.",
    },
  ],
  deliverables: [
    "Process Engineering Deliverables",
    "Mechanical & Piping Engineering Deliverables",
    "Civil & E&I Engineering Deliverables",
    "Engineering Documentation, Design Verification & Technical Compliance",
  ],
  software: [SW.aveva, SW.autocad, SW.office],
};

/* NEW — Part 2, slide 2 */
const fpsoP78: Project = {
  title: "FPSO Engineering – P-78",
  intro:
    "Modular offshore engineering for two Separation & Treatment Modules, covering piping stress analysis, routing, support design, structural detailing and E&I cable tray modelling.",
  image: `${PROJ}/13.png`,
  client: "Offshore",
  sector: "Oil and Gas",
  location: "Brazil",
  duration: "6 Months",
  sections: [
    {
      heading: "Customer Problem",
      body: "The P-78 Separation & Treatment Modules required coordinated piping and structural engineering to address piping system integrity, routing requirements, support arrangements and interfaces across the offshore modules.",
    },
    {
      heading: "Approach",
      body: "Performed pipe stress analysis of piping systems connected to the Separation & Treatment Units, developed piping routes in accordance with P&IDs, and prepared isometric drawings, pipe support drawings and detailed support designs. The scope also included structural design and detailing, E&I cable tray modelling and updates.",
    },
    {
      heading: "Key Finding",
      body: "The engineering scope covered two Separation & Treatment Modules, integrating piping stress analysis, routing, support engineering, structural detailing and E&I coordination.",
    },
    {
      heading: "Risk & Recommendations",
      body: "Piping flexibility, support adequacy and interfaces with equipment and surrounding structures were key considerations. Coordinated stress analysis, routing and support design were undertaken to address these engineering requirements.",
    },
    {
      heading: "Business Outcome",
      body: "Delivered coordinated piping and structural engineering outputs for the two offshore modules, supporting piping system assessment, detailed design development and multidisciplinary coordination.",
    },
    {
      heading: "Conclusion",
      body: "The P-78 project demonstrates ProSIM's offshore engineering capability across piping stress analysis, detailed piping design, support engineering, structural detailing and E&I integration.",
    },
  ],
  deliverables: [
    "Pipe Stress Analysis Reports",
    "Piping Routing & Isometric Drawings",
    "Pipe Support Drawings, Design & Detailing",
    "Structural Design & Detailing and E&I Cable Tray Updates",
  ],
  software: [SW.caesar, SW.autocad, SW.office],
};

/* NEW — Part 2, slide 3 */
const gloveBoxPiping: Project = {
  title: "Nuclear Piping Engineering – Glove Box Ventilation & Purification System",
  intro:
    "Piping engineering for eight interconnected glove-box systems operating under controlled pressure conditions, involving coordinated P&ID development, 3D modelling, piping layout and support design in compliance with nuclear engineering requirements.",
  image: `${PROJ}/14.png`,
  client: "National Nuclear R&D Institution",
  sector: "Nuclear",
  location: "India",
  duration: "3 Months",
  sections: [
    {
      heading: "Customer Problem",
      body: "The project involved eight interconnected glove boxes with dual exhaust headers and limited routing clearances. This required precise coordination between P&IDs, 3D piping models and support arrangements to ensure a feasible and well-coordinated design.",
    },
    {
      heading: "Approach",
      body: "ProSIM developed piping engineering deliverables, including 3D plant modelling, piping layouts, equipment arrangements, support design and detailed drawings. The engineering workflow incorporated applicable nuclear engineering requirements and project specifications.",
    },
    {
      heading: "Key Finding",
      body: "The integration of P&IDs, 3D modelling and support design enabled coordinated piping layouts within the highly constrained spaces surrounding the eight interconnected glove boxes.",
    },
    {
      heading: "Risk & Recommendations",
      body: "Limited routing clearances and multiple interconnected systems required close coordination to avoid spatial conflicts. Integrated 3D modelling, equipment layout reviews and clash reports were used to support design coordination and identify potential clashes.",
    },
    {
      heading: "Business Outcome",
      body: "Delivered 120+ piping isometrics and 40+ GA drawings for the eight interconnected glove boxes, along with coordinated equipment layouts, piping documentation and material schedules.",
    },
    {
      heading: "Conclusion",
      body: "The project demonstrated ProSIM's capability in delivering specialised nuclear piping engineering, integrating 3D modelling, detailed drafting, material management and project documentation for space-constrained nuclear systems.",
    },
  ],
  deliverables: [
    "Piping Layouts and Equipment Arrangement Drawings",
    "Piping Isometric Drawings and Piping GA Drawings",
    "Equipment Location Plans and Structural Frame GA Drawings",
    "Line Lists, Piping MTO, Valve and Instrument Schedules",
    "Engineering Transmittals, QC Reports and User Manuals",
  ],
  software: [SW.caesar, SW.autocad, SW.office],
};

const plantDigitization: Project = {
  title: "Plant Digitization & As-Built Modelling",
  intro:
    "Digital transformation and as-built engineering of offsite facilities using 3D laser scanning and intelligent plant modelling.",
  image: `${PROJ}/9.png`,
  client: "Indian Oil & Gas Refining Company",
  sector: "Oil and Gas",
  location: "India",
  duration: "8 Months",
  sections: [
    {
      heading: "Customer Problem",
      body: "The operating plant required an accurate as-built digital representation, particularly in areas where legacy piping isometrics and engineering records were unavailable, creating challenges for engineering modifications, routing verification and plant coordination.",
    },
    {
      heading: "Approach",
      body: "ProSIM performed 3D laser scanning and integrated the captured site data with intelligent plant modelling to develop a high-fidelity digital representation of the existing equipment and piping configurations.",
    },
    {
      heading: "Key Finding",
      body: "The integrated laser-scan and plant-modelling approach enabled accurate representation and validation of more than 14,000 piping lines, supporting reliable as-built documentation of the operating facility.",
    },
    {
      heading: "Risk & Recommendations",
      body: "Inaccurate or incomplete legacy engineering information could affect modification planning and routing verification. The as-built model was developed and validated against actual site conditions to provide a reliable engineering reference for future modifications and asset lifecycle activities.",
    },
    {
      heading: "Business Outcome",
      body: "Established a reliable digital reference of the operating facility, improving the accuracy of engineering modifications, plant coordination and future asset lifecycle activities.",
    },
    {
      heading: "Conclusion",
      body: "The project demonstrated ProSIM's capability in plant digitization and as-built engineering, combining 3D laser scanning and intelligent plant modelling to establish an accurate digital representation of an operating facility.",
    },
  ],
  deliverables: [
    "3D Laser Scan Data & As-Built 3D Plant Model",
    "Equipment & Piping Models",
    "Piping GA Drawings & Equipment Location Plans",
    "Piping Line Documentation, MTO & Line Lists",
    "Engineering Documentation",
  ],
  software: [SW.plant3d, SW.autocad, SW.office],
};

const categories: {
  id: string;
  label: string;
  blurb: string;
  projects: Project[];
}[] = [
  {
    id: "detailed",
    label: "Detailed Engineering services",
    blurb:
      "Multidisciplinary detailed engineering — models, drawings, MTOs and documentation for new-build and retrofit projects.",
    projects: [
      nuclearChillerPackage,
      stcDetailedEngineering,
      steamTurbineRM,
      greenHydrogen,
    ],
  },
  {
    id: "seismic",
    label: "Seismic Analysis & Qualification",
    blurb:
      "FEA-based seismic qualification of safety-critical equipment and structures.",
    projects: [seismicMotor, seismicFan],
  },
  {
    id: "piping",
    label: "Piping & Pipeline Engineering Services",
    blurb:
      "Layout, routing and pipe stress analysis across plant piping and onshore / offshore pipelines.",
    projects: [
      pipeStressIncinerator,
      pipeStressDesalination,
      vhpSteam,
      fpsoP78,
      gloveBoxPiping,
    ],
  },
  {
    id: "plant3d",
    label: "3D Plant Modelling Services",
    blurb:
      "Laser-scan-based digitization and intelligent 3D plant models of operating facilities.",
    projects: [plantDigitization],
  },
  {
    id: "fea",
    label: "Finite Element Analysis Services",
    blurb:
      "Linear, non-linear, dynamic and multi-physics FEA that drives design decisions.",
    projects: [feaWtgTransformer],
  },
  {
    id: "rla",
    label: "RLA/RLE & Fitness-for-Service (FFS)",
    blurb:
      "Remaining-life assessment, Fitness-for-Service and repair-reuse-retire engineering verdicts.",
    projects: [ffsPipeline],
  },
];

function CaseCard({ project, delay }: { project: Project; delay: number }) {
  return (
    <ScrollAnimation delay={delay}>
      <article className="pr-case">
        <header className="pr-case-head">
          <h3>{project.title}</h3>
          <p>{project.intro}</p>
        </header>

        {/* full-width image */}
        <div className="pr-case-media">
          <img src={project.image} alt={project.title} fetchPriority="high"  />
        </div>

        <div className="pr-case-body">
          {/* meta — horizontal row */}
          <div className="pr-meta">
            {[
              { label: "Client", value: project.client },
              { label: "Sector", value: project.sector },
              { label: "Location", value: project.location },
              { label: "Duration", value: project.duration },
            ].map((m) => (
              <div className="pr-meta-item" key={m.label}>
                <span className="pr-meta-label">{m.label}</span>
                <span className="pr-meta-value">{m.value}</span>
              </div>
            ))}
          </div>

          {/* narrative sections */}
          <div className="pr-sections">
            {project.sections.map((s) => (
              <div className="pr-sec" key={s.heading}>
                <h4>{s.heading}</h4>
                {s.body && <p>{s.body}</p>}
                {s.list && (
                  <ul>
                    {s.list.map((li) => (
                      <li key={li}>{li}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          {/* deliverables */}
          <div className="pr-side-block">
            <h5>Deliverables</h5>
            <ul>
              {project.deliverables.map((d) => (
                <li key={d}>
                  <Check size={15} strokeWidth={2.4} />
                  {d}
                </li>
              ))}
            </ul>
          </div>

          {/* software — horizontal logo strip */}
          <div className="pr-side-block pr-software">
            <h5>Software Used</h5>
            <div className="pr-logos">
              {project.software.map((sw) =>
                sw.logo ? (
                  <img
                    key={sw.name}
                    src={sw.logo}
                    alt={sw.name}
                    title={sw.name}
                    loading="lazy"
                  />
                ) : (
                  <span key={sw.name} className="pr-logo-text">
                    {sw.name}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </article>
    </ScrollAnimation>
  );
}

export default function ProjectsPage() {
  const [active, setActive] = useState(categories[0].id);
  const current = categories.find((c) => c.id === active) ?? categories[0];

  return (
    <main className="seismic-page pr-page">
      {/* HERO */}
      <section className="sa-hero">
        <div className="sa-hero-crumbs">
          <Breadcrumbs />
        </div>

        <div className="sa-hero-inner">
          <div className="sa-hero-text">
            <h1>
              <span>Engineering Projects</span> Across Every Discipline.
            </h1>
            <p>
              Select a service area to explore representative projects ProSIM has
              delivered — from seismic qualification and pipe stress to FEA and
              Fitness-for-Service.
            </p>
          </div>

          <div className="sa-hero-media">
            <figure className="sa-hero-media-main">
              <img src={`${P}/1.webp`} alt="ProSIM engineering project"  fetchPriority="high" />
              <figcaption>Projects</figcaption>
            </figure>
            <figure className="sa-hero-media-inset">
              <img src={`${P}/4.webp`} alt="Simulation and analysis"  fetchPriority="high" />
            </figure>
          </div>
        </div>
      </section>

      {/* PROJECT EXPLORER */}
      <section className="pr-explorer">
        <div className="sa-container">
          <div className="pr-layout">
            {/* LEFT — category buttons */}
            <aside className="pr-nav">
              {categories.map((c) => (
                <button
                  type="button"
                  key={c.id}
                  className={`pr-nav-btn ${c.id === active ? "active" : ""}`}
                  onClick={() => setActive(c.id)}
                >
                  <span>{c.label}</span>
                  <ArrowRight size={16} strokeWidth={2} />
                </button>
              ))}
            </aside>

            {/* RIGHT — case studies for the active category */}
            <div className="pr-panel">
              <ScrollAnimation key={current.id} className="pr-panel-head">
                <span className="sa-label">{current.label}</span>
                <p>{current.blurb}</p>
              </ScrollAnimation>

              <div className="pr-cases" key={`${current.id}-cases`}>
                {current.projects.map((p, i) => (
                  <CaseCard key={p.title} project={p} delay={i * 90} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}