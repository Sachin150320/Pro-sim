import type { Metadata } from "next";
import { seoData } from "@/lib/seoData";
import PipingPipelineEngineering from "@/app/Components/PipingPipelineEngineering/PipingPipelineEngineering";

export const metadata: Metadata = {
  title: seoData.piping.title,
  description: seoData.piping.description,
  ...(seoData.piping.keywords
    ? {
        keywords: seoData.piping.keywords,
      }
    : {}),
};

export default function Page() {
  return (
    <>
      <PipingPipelineEngineering />
    </>
  );
}