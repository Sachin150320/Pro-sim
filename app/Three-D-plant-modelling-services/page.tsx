import type { Metadata } from "next";
import { seoData } from "@/lib/seoData";
import ThreeDPlantModelling from "@/app/Components/ThreeDPlantModelling/ThreeDPlantModelling";

export const metadata: Metadata = {
  title: seoData.plantModelling.title,
  description: seoData.plantModelling.description,
  ...(seoData.plantModelling.keywords
    ? {
        keywords: seoData.plantModelling.keywords,
      }
    : {}),
};

export default function Page() {
  return (
    <>
      <ThreeDPlantModelling />
    </>
  );
}