import type { Metadata } from "next";
import { seoData } from "@/lib/seoData";
import CareersPage from "@/app/Components/CareersPage/CareersPage";

export const metadata: Metadata = {
  title: seoData.careers.title,
  description: seoData.careers.description,
  ...(seoData.careers.keywords
    ? {
        keywords: seoData.careers.keywords,
      }
    : {}),
};

export default function Page() {
  return <CareersPage />;
}