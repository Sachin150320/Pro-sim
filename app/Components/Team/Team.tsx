"use client";

import { useEffect, useRef } from "react";
import CrumbBanner from "@/app/Components/CrumbBanner/CrumbBanner";
import "./Team.css";

const PHOTO = "/assets/images/team/1.png";

const leadership = [
  { name: "Dr Shamasundar", role: "Managing Director" },
  { name: "Umesh Chandra", role: "Director" },
  { name: "Dr Sridhar Mandyam", role: "Lead - Digital Initiatives" },
];

const team = [
  { name: "Sandeep PS", role: "Senior Manager - BD" },
  { name: "Prathik JP", role: "Dy Manager Pre Sales" },
  { name: "Harsharaj S Ankalkoti", role: "Delivery Head" },
  { name: "Vishwajeet Raj", role: "Team Lead - FEA" },
  { name: "Ganesh Bharadwaj H S", role: "Head Of Dept - Piping" },
  { name: "Sagar S", role: "Team Lead - Piping" },
  { name: "Srikanth G", role: "Project Manager" },
  { name: "Shane Stuart", role: "Team Lead - FEA" },
  { name: "Santosh Mankani", role: "Project Manager" },
  { name: "Benith Kumar", role: "Team Lead - Piping" },
  // { name: "Shivakumar Hadagali", role: "Project Manager" },
  // { name: "Prateek Ranjan", role: "Team Lead - Piping" },
];

export default function Team() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const cards = sectionRef.current?.querySelectorAll(".tm-card");
    if (!cards) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("tm-show");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="team-page">
      <CrumbBanner
        title="Our Team"
        subtitle="The people behind ProSIM's engineering, delivery and project management."
        image="/assets/images/about/prosim_enhanced.png"
        imageInset="/assets/images/about/1.webp"
        imageCaption="Our people"
      />

      <section className="tm-section" ref={sectionRef}>
        <div className="tm-container">
          <div className="tm-heading">
            <span className="tm-label">Organisation</span>
            <h2>
              Our Leadership &amp; <strong>Team</strong>
            </h2>
            <p>
              A strong leadership structure supported by experienced engineering
              professionals and specialised technical teams.
            </p>
          </div>

          {/* first row — leadership */}
          <div className="tm-grid tm-grid-lead">
            {leadership.map((p, i) => (
              <article
                className="tm-card"
                key={p.name}
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <div className="tm-card-photo">
                  <img src={PHOTO} alt={p.name} loading="lazy" />
                </div>
                <h4>{p.name}</h4>
                <p>{p.role}</p>
              </article>
            ))}
          </div>

          {/* remaining members */}
          <div className="tm-grid">
            {team.map((p, i) => (
              <article
                className="tm-card"
                key={p.name}
                style={{ transitionDelay: `${(i % 5) * 60}ms` }}
              >
                <div className="tm-card-photo">
                  <img src={PHOTO} alt={p.name} loading="lazy" />
                </div>
                <h4>{p.name}</h4>
                <p>{p.role}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* <section className="tm-bottom">
        <div className="tm-container">
          <span className="tm-label">One team. One purpose.</span>
          <h2>Engineering expertise, working together.</h2>
          <p>
            Our collaborative approach allows specialised teams to combine their
            knowledge and experience to deliver dependable engineering solutions.
          </p>
        </div>
      </section> */}
    </main>
  );
}
