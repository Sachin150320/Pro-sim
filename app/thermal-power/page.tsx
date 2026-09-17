import type { Metadata } from "next";
import { seoData } from "@/lib/seoData";
import ThermalPower from "@/app/Components/ThermalPower/ThermalPower";

export const metadata: Metadata = {
  title: seoData.thermalPower.title,
  description: seoData.thermalPower.description,
  ...(seoData.thermalPower.keywords
    ? {
        keywords: seoData.thermalPower.keywords,
      }
    : {}),
};

export default function Page() {
  return (
    <>
      <ThermalPower />
    </>
  );
}