import type { Metadata } from "next";
import { seoData } from "@/lib/seoData";
import Gallery from "@/app/Components/Gallery/Gallery";

export const metadata: Metadata = {
  title: seoData.gallery.title,
  description: seoData.gallery.description,
  ...(seoData.gallery.keywords
    ? {
        keywords: seoData.gallery.keywords,
      }
    : {}),
};

export default function Page() {
  return (
    <>
      <Gallery />
    </>
  );
}