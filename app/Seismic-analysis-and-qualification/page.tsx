import type { Metadata } from "next";
import { seoData } from "@/lib/seoData";
import SeismicAnalysis from "@/app/Components/SeismicAnalysis/SeismicAnalysis";

export const metadata: Metadata = {
  title: seoData.seismic.title,
  description: seoData.seismic.description,
  ...(seoData.seismic.keywords
    ? {
        keywords: seoData.seismic.keywords,
      }
    : {}),
};

export default function Page() {
  return <SeismicAnalysis />;
}