"use client";

import { useEffect, useRef } from "react";
import CrumbBanner from "@/app/Components/CrumbBanner/CrumbBanner";
import "./Team.css";

const PHOTO = "/assets/images/team/1.png";

const SOCIALS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/prosimrnd/",
    path: "M6.94 8.5H3.5V20h3.44V8.5zM5.22 3A2.02 2.02 0 1 0 5.22 7.04 2.02 2.02 0 0 0 5.22 3zM20.5 13.42c0-3.47-1.85-5.08-4.32-5.08-1.99 0-2.88 1.1-3.38 1.87V8.5H9.36V20h3.44v-5.69c0-1.5.28-2.95 2.14-2.95 1.83 0 1.85 1.71 1.85 3.05V20h3.44l.27-6.58z",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/prosimindia",
    path: "M13.5 21v-8h2.75l.42-3h-3.17V8.08c0-.87.24-1.46 1.5-1.46h1.8V3.94c-.31-.04-1.38-.14-2.62-.14-2.59 0-4.36 1.58-4.36 4.49V10H7.9v3h2.72v8h2.88z",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/prosimrnd/",
    path: "M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zm0 1.62c-3.15 0-3.5.01-4.74.07-.89.04-1.37.19-1.69.31-.43.17-.73.37-1.05.69-.32.32-.52.62-.69 1.05-.12.32-.27.8-.31 1.69-.06 1.24-.07 1.59-.07 4.74s.01 3.5.07 4.74c.04.89.19 1.37.31 1.69.17.43.37.73.69 1.05.32.32.62.52 1.05.69.32.12.8.27 1.69.31 1.24.06 1.59.07 4.74.07s3.5-.01 4.74-.07c.89-.04 1.37-.19 1.69-.31.43-.17.73-.37 1.05-.69.32-.32.52-.62.69-1.05.12-.32.27-.8.31-1.69.06-1.24.07-1.59.07-4.74s-.01-3.5-.07-4.74c-.04-.89-.19-1.37-.31-1.69a2.8 2.8 0 0 0-.69-1.05 2.8 2.8 0 0 0-1.05-.69c-.32-.12-.8-.27-1.69-.31-1.24-.06-1.59-.07-4.74-.07zm0 2.76a5.46 5.46 0 1 1 0 10.92 5.46 5.46 0 0 1 0-10.92zm0 1.62a3.84 3.84 0 1 0 0 7.68 3.84 3.84 0 0 0 0-7.68zm5.65-.31a1.28 1.28 0 1 1-2.56 0 1.28 1.28 0 0 1 2.56 0z",
  },
];

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

type Member = { name: string; role: string };

function TeamCard({ person, delay }: { person: Member; delay: number }) {
  return (
    <article className="tm-card" style={{ transitionDelay: `${delay}ms` }}>
      <div className="tm-card-photo">
        <img src={PHOTO} alt={person.name} loading="lazy" />
      </div>
      <h4>{person.name}</h4>
      <p>{person.role}</p>

      <div className="tm-card-social">
        {SOCIALS.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${person.name} on ${s.label}`}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d={s.path} />
            </svg>
          </a>
        ))}
      </div>
    </article>
  );
}

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
              <TeamCard key={p.name} person={p} delay={i * 70} />
            ))}
          </div>

          {/* remaining members */}
          <div className="tm-grid">
            {team.map((p, i) => (
              <TeamCard key={p.name} person={p} delay={(i % 5) * 60} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
