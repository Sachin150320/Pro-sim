// lib/searchData.ts
export type SearchItem = {
  title: string;
  href: string;
  excerpt: string;
  category: string;
};

export const searchIndex: SearchItem[] = [
  {
    title: "About Company",
    href: "/about-us",
    excerpt: "Learn about ProSIM's history, mission and team.",
    category: "About Us",
  },
  {
    title: "Team",
    href: "/Team",
    excerpt: "Meet the ProSIM team.",
    category: "About Us",
  },
  {
    title: "Detailed Engineering Services",
    href: "/Detailed-Engineering-services",
    excerpt: "Comprehensive detailed engineering solutions for industrial projects.",
    category: "Offerings",
  },
  {
    title: "Seismic Analysis & Qualification",
    href: "/Seismic-analysis-and-qualification",
    excerpt: "Seismic qualification and analysis services for critical equipment.",
    category: "Offerings",
  },
  {
    title: "Nuclear Power",
    href: "/nuclear-power",
    excerpt: "Engineering services tailored to the nuclear power industry.",
    category: "Industries",
  },
  {
    title: "Oil & Gas",
    href: "/oil-gas",
    excerpt: "Engineering support for the oil and gas sector.",
    category: "Industries",
  },
  {
    title: "Contact Us",
    href: "/contact-us",
    excerpt: "Get in touch with ProSIM.",
    category: "General",
  },
];