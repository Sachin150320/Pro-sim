import type { Metadata } from "next";
import { seoData } from "@/lib/seoData";
import ComputationalFluidDynamics from "@/app/Components/ComputationalFluidDynamics/ComputationalFluidDynamics";

export const metadata: Metadata = {
  title: seoData.cfd.title,
  description: seoData.cfd.description,
  ...(seoData.cfd.keywords
    ? {
        keywords: seoData.cfd.keywords,
      }
    : {}),
};

export default function Page() {
  return (
    <>
      <ComputationalFluidDynamics />
    </>
  );
}