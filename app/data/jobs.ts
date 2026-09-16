export type Job = {
  title: string;
  location: string;
  exp: string;
  industry: string;
  responsibilities: string[];
  requirements: string[];
};

export const jobs: Job[] = [
  {
    title: "Pipe Stress Engineer (CAESAR II)",
    location: "Bengaluru",
    exp: "1–3 Years",
    industry: "Water Technology & Process Plants",
    responsibilities: [
      "Perform piping stress and flexibility analysis using CAESAR II.",
      "Design and select piping support systems.",
      "Review P&IDs, layouts and isometric drawings.",
      "Evaluate equipment nozzle loads.",
      "Coordinate with multidisciplinary engineering teams.",
      "Prepare engineering reports and project deliverables.",
    ],
    requirements: [
      "B.E. / B.Tech in Mechanical Engineering.",
      "1–3 years of CAESAR II experience.",
      "Knowledge of ASME B31.3.",
      "Strong analytical and communication skills.",
    ],
  },
  {
    title: "Structural Engineer (STAAD.Pro & Tekla)",
    location: "Bengaluru",
    exp: "5+ Years",
    industry: "Oil & Gas / Industrial",
    responsibilities: [
      "Structural analysis and design using STAAD.Pro.",
      "3D modelling and detailing using Tekla Structures.",
      "Prepare structural calculations, BOQs and MTOs.",
      "Coordinate with multidisciplinary teams.",
      "Ensure compliance with IS Codes and Eurocodes.",
    ],
    requirements: [
      "B.E. / B.Tech in Civil Engineering.",
      "5+ years of structural engineering experience.",
      "Proficiency in STAAD.Pro and Tekla Structures.",
      "Knowledge of RC and structural steel design.",
    ],
  },
  {
    title: "Structural Engineer (SACS)",
    location: "Bengaluru",
    exp: "5+ Years",
    industry: "Offshore Oil & Gas",
    responsibilities: [
      "Offshore structural analysis using Bentley SACS.",
      "Jacket, topside, module and platform design.",
      "Transportation, lifting, seismic and load-out analysis.",
      "Prepare structural engineering reports.",
      "Coordinate with multidisciplinary teams.",
    ],
    requirements: [
      "Civil / Structural / Ocean Engineering degree.",
      "Minimum 5 years of offshore experience.",
      "Strong knowledge of API, ISO and offshore design standards.",
      "Proficiency in Bentley SACS.",
    ],
  },
  {
    title: "Revit Structural Engineer",
    location: "Bengaluru",
    exp: "5+ Years",
    industry: "Oil & Gas / EPC",
    responsibilities: [
      "Develop structural BIM models using Autodesk Revit.",
      "Produce GA drawings and structural documentation.",
      "Perform multidisciplinary coordination.",
      "Participate in model reviews.",
      "Maintain BIM standards.",
    ],
    requirements: [
      "Civil Engineering degree.",
      "Advanced Autodesk Revit proficiency.",
      "Experience in industrial / Oil & Gas projects.",
      "Knowledge of IS Codes.",
    ],
  },
  {
    title: "Plant Piping Engineer (AVEVA E3D)",
    location: "Bengaluru",
    exp: "3–7 Years",
    industry: "Oil & Gas / Process Plants",
    responsibilities: [
      "Develop 3D plant models using AVEVA E3D.",
      "Perform piping routing and equipment modelling.",
      "Generate isometrics, GA drawings and MTOs.",
      "Conduct clash detection and model coordination.",
      "Review engineering inputs and vendor drawings.",
    ],
    requirements: [
      "Mechanical Engineering degree or Diploma.",
      "3–7 years of piping design experience.",
      "Strong AVEVA E3D knowledge.",
      "Familiarity with ASME piping codes.",
    ],
  },
  {
    title: "Sr. Electrical Engineer",
    location: "Mumbai",
    exp: "8+ Years",
    industry: "Onshore Projects",
    responsibilities: [
      "Prepare SLDs and electrical calculations.",
      "Equipment sizing and specification development.",
      "Vendor document review.",
      "Procurement engineering support.",
      "Layout coordination and technical reviews.",
    ],
    requirements: [
      "Minimum 8 years of relevant experience.",
      "Strong knowledge of MV / LV systems.",
      "Experience in engineering consultancy.",
      "Mumbai-based candidates preferred.",
    ],
  },
  {
    title: "S3D Electrical Designer / Engineer",
    location: "Mumbai",
    exp: "8+ Years",
    industry: "Onshore Projects",
    responsibilities: [
      "Develop 3D electrical models using SmartPlant 3D.",
      "Prepare power, lighting and earthing layouts.",
      "Generate engineering drawings.",
      "Coordinate with multidisciplinary teams.",
      "Support project model reviews.",
    ],
    requirements: [
      "8+ years of electrical design experience.",
      "Proficiency in SmartPlant 3D and SmartSketch.",
      "Knowledge of AutoCAD and MicroStation.",
      "Mumbai-based candidates preferred.",
    ],
  },
];