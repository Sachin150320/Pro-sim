import type { Metadata } from "next";
import { seoData } from "@/lib/seoData";
import OnsiteDeputation from "@/app/Components/OnsiteDeputation/OnsiteDeputation";

export const metadata: Metadata = {
  title: seoData.onsiteDeputation.title,
  description: seoData.onsiteDeputation.description,
  ...(seoData.onsiteDeputation.keywords
    ? {
        keywords: seoData.onsiteDeputation.keywords,
      }
    : {}),
};

export default function Page() {
  return <OnsiteDeputation />;
}