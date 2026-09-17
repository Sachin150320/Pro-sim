import type { Metadata } from "next";
import { seoData } from "@/lib/seoData";
import OilGas from "@/app/Components/OilGas/OilGas";

export const metadata: Metadata = {
  title: seoData.oilAndGas.title,
  description: seoData.oilAndGas.description,
  ...(seoData.oilAndGas.keywords
    ? {
        keywords: seoData.oilAndGas.keywords,
      }
    : {}),
};

export default function Page() {
  return <OilGas />;
}