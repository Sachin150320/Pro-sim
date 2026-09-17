

import type { Metadata } from "next";
import { seoData } from "@/lib/seoData";
import Team from "@/app/Components/Team/Team";

export const metadata: Metadata = {
  title: seoData.team.title,
  description: seoData.team.description,
  ...(seoData.team.keywords
    ? {
        keywords: seoData.team.keywords,
      }
    : {}),
};

export default function Page() {
  return (
    <>
      <Team />
    </>
  );
}