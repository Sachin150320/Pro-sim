import type { Metadata } from "next";
import { seoData } from "@/lib/seoData";
import DefenceSystems from "@/app/Components/DefenceSystems/DefenceSystems";

export const metadata: Metadata = {
  title: seoData.defence.title,
  description: seoData.defence.description,
  ...(seoData.defence.keywords
    ? {
        keywords: seoData.defence.keywords,
      }
    : {}),
};

export default function Page() {
  return <DefenceSystems />;
}