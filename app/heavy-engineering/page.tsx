import type { Metadata } from "next";
import { seoData } from "@/lib/seoData";
import HeavyEngineering from "@/app/Components/HeavyEngineering/HeavyEngineering";

export const metadata: Metadata = {
  title: seoData.heavyEngineering.title,
  description: seoData.heavyEngineering.description,
  ...(seoData.heavyEngineering.keywords
    ? {
        keywords: seoData.heavyEngineering.keywords,
      }
    : {}),
};

export default function Page() {
  return <HeavyEngineering />;
}