import type { Metadata } from "next";
import { seoData } from "@/lib/seoData";
import StructuralIntegrityAssessment from "@/app/Components/StructuralIntegrityAssessment/StructuralIntegrityAssessment";

export const metadata: Metadata = {
  title: seoData.structuralIntegrity.title,
  description: seoData.structuralIntegrity.description,
  ...(seoData.structuralIntegrity.keywords
    ? {
        keywords: seoData.structuralIntegrity.keywords,
      }
    : {}),
};

export default function Page() {
  return <StructuralIntegrityAssessment />;
}