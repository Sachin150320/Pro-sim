// lib/searchData.ts
export type SearchItem = {
  title: string;
  href: string;
  excerpt: string;
  category: string;
};


export const searchIndex: SearchItem[] = [
  // Home
  {
    title: "Home",
    href: "/",
    excerpt: "ProSIM engineering services for CAE, FEA, piping, seismic analysis and industrial engineering.",
    category: "General",
  },

  // About Us
  {
    title: "About Company",
    href: "/about-us",
    excerpt: "Learn about ProSIM's history, mission and team.",
    category: "About Us",
  },
  {
    title: "Team",
    href: "/team",
    excerpt: "Meet the ProSIM team.",
    category: "About Us",
  },
  {
    title: "Gallery",
    href: "/gallery",
    excerpt: "View ProSIM projects, customer visits and engineering activities.",
    category: "About Us",
  },

  // Offerings
  {
    title: "Detailed Engineering Services",
    href: "/detailed-engineering-services",
    excerpt:
      "Comprehensive detailed engineering solutions for industrial projects.",
    category: "Offerings",
  },
  {
    title: "Seismic Analysis & Qualification",
    href: "/seismic-analysis-and-qualification",
    excerpt:
      "Seismic qualification and analysis services for critical equipment.",
    category: "Offerings",
  },
  {
    title: "Piping & Pipeline Engineering Services",
    href: "/piping-and-pipeline-engineering-services",
    excerpt:
      "Piping and pipeline engineering services for industrial and energy projects.",
    category: "Offerings",
  },
  {
    title: "3D Plant Modelling Services",
    href: "/three-d-plant-modelling-services",
    excerpt:
      "3D plant modelling and digital engineering solutions for industrial facilities.",
    category: "Offerings",
  },
  {
    title: "Finite Element Analysis Services",
    href: "/finite-element-analysis-services",
    excerpt:
      "FEA and structural analysis services for engineering and industrial applications.",
    category: "Offerings",
  },
  {
    title: "CFD & Multiphysics Simulations Services",
    href: "/computational-fluid-dynamics-services",
    excerpt:
      "CFD and multiphysics simulation services for engineering applications.",
    category: "Offerings",
  },
  {
    title: "RLA/RLE & Fitness-for-Service (FFS)",
    href: "/structural-integrity-assessments",
    excerpt:
      "Structural integrity, RLA/RLE and fitness-for-service assessment services.",
    category: "Offerings",
  },
  {
    title: "Engineering Automation & Digital Twin",
    href: "/engineering-automation-and-digital-twin",
    excerpt:
      "Engineering automation and digital twin solutions for modern engineering workflows.",
    category: "Offerings",
  },
  {
    title: "Pre-Bid & Owner's Engineering",
    href: "/pre-bid-and-owners-engineering",
    excerpt:
      "Pre-bid engineering and owner's engineering support for industrial projects.",
    category: "Offerings",
  },

  // Industries
  {
    title: "Nuclear Power",
    href: "/nuclear-power",
    excerpt:
      "Engineering services tailored to the nuclear power industry.",
    category: "Industries",
  },
  {
    title: "Thermal Power",
    href: "/thermal-power",
    excerpt:
      "Engineering solutions and technical support for thermal power projects.",
    category: "Industries",
  },
  {
    title: "Oil & Gas",
    href: "/oil-gas",
    excerpt:
      "Engineering support for the oil and gas sector.",
    category: "Industries",
  },
  {
    title: "Aerospace & Defence",
    href: "/defence-systems",
    excerpt:
      "Engineering and analysis solutions for aerospace and defence systems.",
    category: "Industries",
  },
  {
    title: "Industrial & Heavy Engineering",
    href: "/heavy-engineering",
    excerpt:
      "Engineering services for industrial and heavy engineering applications.",
    category: "Industries",
  },

  // Other Pages
  {
    title: "Onsite Deputation",
    href: "/onsite-deputation",
    excerpt:
      "Engineering professionals and technical support through onsite deputation services.",
    category: "Services",
  },
  {
    title: "Projects",
    href: "/projects",
    excerpt:
      "Explore ProSIM engineering projects and project experience.",
    category: "General",
  },
  {
    title: "Careers",
    href: "/careers",
    excerpt:
      "Explore career opportunities and job openings at ProSIM.",
    category: "General",
  },
  {
    title: "Contact Us",
    href: "/contact-us",
    excerpt:
      "Get in touch with ProSIM for engineering services and project enquiries.",
    category: "General",
  },
];