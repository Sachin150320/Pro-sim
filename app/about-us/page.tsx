import type { Metadata } from "next";
import { seoData } from "@/lib/seoData";
import AboutUs from "@/app/Components/About/AboutUs";

export const metadata: Metadata = {
  title: seoData.aboutUs.title,
  description: seoData.aboutUs.description,
  ...(seoData.aboutUs.keywords
    ? {
        keywords: seoData.aboutUs.keywords,
      }
    : {}),
};

export default function Page() {
  return (
    <>
      <AboutUs />
    </>
  );
}