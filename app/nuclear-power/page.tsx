import type { Metadata } from "next";
import { seoData } from "@/lib/seoData";
import NuclearPower from "@/app/Components/NuclearPower/NuclearPower";

export const metadata: Metadata = {
  title: seoData.nuclearPower.title,
  description: seoData.nuclearPower.description,
  ...(seoData.nuclearPower.keywords
    ? {
        keywords: seoData.nuclearPower.keywords,
      }
    : {}),
};

export default function Page() {
  return (
    <>
      <NuclearPower />
    </>
  );
}