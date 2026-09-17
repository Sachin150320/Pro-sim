import type { Metadata } from "next";
import { seoData } from "@/lib/seoData";
import FiniteElementAnalysis from "@/app/Components/FiniteElementAnalysis/FiniteElementAnalysis";

export const metadata: Metadata = {
  title: seoData.fea.title,
  description: seoData.fea.description,
  ...(seoData.fea.keywords
    ? {
        keywords: seoData.fea.keywords,
      }
    : {}),
};

export default function Page() {
  return <FiniteElementAnalysis />;
}