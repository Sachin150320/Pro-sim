import type { Metadata } from "next";
import { seoData } from "@/lib/seoData";
import ContactUs from "@/app/Components/ContactUs/ContactUs";

export const metadata: Metadata = {
  title: seoData.contact.title,
  description: seoData.contact.description,
  ...(seoData.contact.keywords
    ? {
        keywords: seoData.contact.keywords,
      }
    : {}),
};

export default function Page() {
  return <ContactUs />;
}