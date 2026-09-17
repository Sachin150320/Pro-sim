import type { Metadata } from "next";
import { seoData } from "@/lib/seoData";
import EngineeringAutomationDigitalTwin from "@/app/Components/EngineeringAutomationDigitalTwin/EngineeringAutomationDigitalTwin";

export const metadata: Metadata = {
  title: seoData.engineeringAutomationDigitalTwin.title,
  description: seoData.engineeringAutomationDigitalTwin.description,
  ...(seoData.engineeringAutomationDigitalTwin.keywords
    ? {
        keywords: seoData.engineeringAutomationDigitalTwin.keywords,
      }
    : {}),
};

export default function Page() {
  return (
    <>
      <EngineeringAutomationDigitalTwin />
    </>
  );
}