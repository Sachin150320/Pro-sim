
"use client";

import { useEffect, useRef } from "react";
import CrumbBanner from "@/app/Components/CrumbBanner/CrumbBanner";
import "./VisionMission.css";

const content = [
  {
    title: "Our Vision",
    icon: "◎",
    text: "Our vision is to be a leading global engineering R&D solutions company, serving our customers and their customers, with our expertise in simulation.",
  },
  {
    title: "Our Mission",
    icon: "✦",
    text: "We are driven by a passion to solve large and complex engineering problems. Through continuous learning, collaboration, data integrity, information security and quality, we strive to deliver reliable engineering solutions for our customers.",
  },
];

export default function VisionMission() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const items = sectionRef.current?.querySelectorAll(".vm-box");

    if (!items) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("vm-show");
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="vm-page" ref={sectionRef}>

      <CrumbBanner
        title="Vision & Mission"
        subtitle="What drives ProSIM — our purpose, our promise, and the principles that shape every engagement."
        image="/assets/images/about/prosim_enhanced.png"
        imageInset="/assets/images/about/1.webp"
        imageCaption="What drives us"
      />

     


      {/* TWO BOXES */}

      <section className="vm-section">
        <div className="vm-container">

          <div className="vm-heading">
            <span>WHAT DRIVES US</span>

            <h2>
              Vision &amp; <strong> Mission</strong>
            </h2>
          </div>


          <div className="vm-grid">

            {content.map((item, index) => (

              <div
                className={`vm-box vm-box-${index + 1}`}
                key={item.title}
              >

                <div className="vm-box-top">

                  <div className="vm-icon">
                    {item.icon}
                  </div>

                  <span className="vm-number">
                    0{index + 1}
                  </span>

                </div>


                <div className="vm-box-content">

                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    {item.text}
                  </p>

                </div>


                <div className="vm-box-footer">
                  <span></span>

                  <div className="vm-arrow">
                    ↗
                  </div>
                </div>

              </div>

            ))}

          </div>

        </div>
      </section>


      {/* BOTTOM */}

      <section className="vm-bottom">
        <div className="vm-container">

          <div className="vm-bottom-content">

            <span>OUR COMMITMENT</span>

            <h2>
              Learn. Collaborate. Solve.
            </h2>

            <p>
              Continuously improving our knowledge and capabilities
              to deliver reliable engineering solutions for our customers.
            </p>

          </div>

        </div>
      </section>

    </main>
  );
}

