
"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Breadcrumbs from "@/app/Components/Breadcrumbs/Breadcrumbs";
import "./CustomerVisits.css";

const visits = [
  {
    number: "01",
    title: "PowerSYS, France - Visited ProSIM",
    image: "/images/offer1.jpg",
    text: "Dr. S. Shamasundar and Umesh Chadra of ProSIM R&D Pvt Ltd, along with Mr. Olivier Toury and Vincent Capron of PowerSYS, France, are working together to develop the business plan for their joint alliance company, PWSIM. This collaboration aims to provide comprehensive solutions to the electrical and electrification sectors.",
  },
  {
    number: "02",
    title: "IndusTree Nagoya, Japan - Visited ProSIM",
    image: "/images/team1.jpg",
    text: "Dr. K.K. Biswas and Ms. Mrinmoy of ATES, Yokohama, Japan, along with Mr. Hitoshi Oya of IndusTree, Nagoya, Japan, visited ProSIM in Bangalore to discuss collaboration in engineering services. An agreement has been reached to position ProSIM's high-end computer-aided engineering (CAE) and finite element analysis (FEA) services to customers in Japan.",
  },
];

const teamImages = [
  "/images/team.jpg",
  "/images/team1.jpg",
  "/images/team2.jpg",
];

export default function CustomerVisits() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const items =
      sectionRef.current?.querySelectorAll(".visit-card");

    if (!items) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visit-show");
          }
        });
      },
      {
        threshold: 0.12,
      }
    );

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="customer-visits-page">

      {/* Breadcrumb */}

      <Breadcrumbs />



      <section
        className="visits-section"
        ref={sectionRef}
      >




        
        

        <div className="visits-container">



<div className="visits-hero-content">

            <span className="visits-label">
              CUSTOMER VISITS
            </span>
            <h1>
             Customer
        
              <strong> Partner Visits</strong>
            </h1>

            <p>
              Collaboration with global engineering organisations helps us
              build stronger capabilities and deliver advanced engineering
              solutions to customers across industries.
            </p>

          </div>


          


          <div className="visits-list">

            {visits.map((visit, index) => (

              <article
                className={`visit-card ${
                  index % 2 === 1 ? "visit-reverse" : ""
                }`}
                key={visit.number}
              >

                {/* IMAGE */}

                <div className="visit-image">

                  <Image
                    src={visit.image}
                    alt={visit.title}
                    fill
                    sizes="(max-width: 900px) 100vw, 50vw"
                  />

                  <div className="visit-image-overlay"></div>

                  <div className="visit-number">
                    {visit.number}
                  </div>

                </div>


                {/* CONTENT */}

                <div className="visit-content">

                  <span className="visit-small-title">
                    CUSTOMER COLLABORATION
                  </span>

                  <h3>
                    {visit.title}
                  </h3>

                  <div className="visit-line"></div>

                  <p>
                    {visit.text}
                  </p>

                  

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* TEAM GALLERY */}

      <section className="team-section">

        <div className="visits-container">

          <div className="team-heading">

            <span>
              OUR PEOPLE
            </span>

            <h2>
              Collaboration in action
            </h2>

          </div>


          <div className="team-gallery">

            {teamImages.map((image, index) => (

              <div
                className="team-image"
                key={image}
              >

                <Image
                  src={image}
                  alt={`ProSIM team collaboration ${index + 1}`}
                  fill
                  sizes="(max-width: 700px) 100vw, 33vw"
                />

                <div className="team-overlay">
                  <span>
                    0{index + 1}
                  </span>
                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* BOTTOM */}

      <section className="visits-bottom">

        <div className="visits-container">

          <div className="visits-bottom-content">

            <span>
              CONNECT &amp; COLLABORATE
            </span>

            <h2>
              Engineering partnerships
              that create impact.
            </h2>

            <p>
              We continue to build strong relationships with customers,
              partners and engineering organisations to create meaningful
              opportunities for collaboration and innovation.
            </p>

          </div>

        </div>

      </section>

    </main>
  );
}

