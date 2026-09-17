import type { Metadata } from "next";
import { seoData } from "@/lib/seoData";
import PreBidOwnersEngineering from "@/app/Components/PreBidOwnersEngineering/PreBidOwnersEngineering";

export const metadata: Metadata = {
  title: seoData.ownersEngineeringAdvisory.title,
  description: seoData.ownersEngineeringAdvisory.description,
  ...(seoData.ownersEngineeringAdvisory.keywords
    ? {
        keywords: seoData.ownersEngineeringAdvisory.keywords,
      }
    : {}),
};

export default function Page() {
  return (
    <>
      <PreBidOwnersEngineering />
    </>
  );
}