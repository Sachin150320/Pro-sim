import type { Metadata } from "next";
import { seoData } from "@/lib/seoData";
import ProjectsPage from "@/app/Components/ProjectsPage/ProjectsPage";

export const metadata: Metadata = {
  title: seoData.projects.title,
  description: seoData.projects.description,
  ...(seoData.projects.keywords
    ? {
        keywords: seoData.projects.keywords,
      }
    : {}),
};

export default function Page() {
  return <ProjectsPage />;
}