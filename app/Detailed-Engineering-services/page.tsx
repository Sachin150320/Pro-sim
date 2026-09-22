


import type { Metadata } from "next";
import { seoData } from "@/lib/seoData";
import DetailedEngineering from "@/app/Components/DetailedEngineering/DetailedEngineering";

export const metadata: Metadata = {
  title: seoData.detailedEngineering.title,
  description: seoData.detailedEngineering.description,
  ...(seoData.detailedEngineering.keywords
    ? {
        keywords: seoData.detailedEngineering.keywords,
      }
    : {}),
};
    



export default function Page() {
  return (
    <>
      <DetailedEngineering />
    </>
  );
}