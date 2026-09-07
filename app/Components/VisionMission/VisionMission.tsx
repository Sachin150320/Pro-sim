"use client";

import CrumbBanner from "@/app/Components/CrumbBanner/CrumbBanner";
import "./VisionMission.css";

export default function VisionMission() {
  return (
    <main className="vm-page">
      <CrumbBanner
        title="Vision & Mission"
        subtitle="What drives ProSIM — our purpose, our promise, and the principles that shape every engagement."
        image="/assets/images/about/prosim_enhanced.png"
        imageInset="/assets/images/about/1.webp"
        imageCaption="What drives us"
      />

      {/* BOTTOM */}
      <section className="vm-bottom">
        <div className="vm-container">
          <div className="vm-bottom-content">
            <span>OUR COMMITMENT</span>

            <h2>Learn. Collaborate. Solve.</h2>

            <p>
              Continuously improving our knowledge and capabilities to deliver
              reliable engineering solutions for our customers.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
