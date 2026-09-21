"use client";

import { useEffect } from "react";

export default function ImagePriority() {
  useEffect(() => {
    const makeImagesHighPriority = () => {
      const images = document.querySelectorAll("img");

      images.forEach((img) => {
        img.loading = "eager";
        img.fetchPriority = "high";
        img.decoding = "sync";
      });
    };

    // Run immediately
    makeImagesHighPriority();

    // Catch images added later by React/Next.js
    const observer = new MutationObserver(() => {
      makeImagesHighPriority();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return null;
}