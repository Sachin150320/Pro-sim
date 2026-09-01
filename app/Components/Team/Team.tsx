
"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Breadcrumbs from "@/app/Components/Breadcrumbs/Breadcrumbs";
import "./Team.css";

const management = [
  {
    image: "/images/team/5.png",
    name: "Sandeep PS",
    role: "Senior Manager - BD",
  },
  {
    image: "/images/team/11.png",
    name: "Prathik JP",
    role: "Dy Manager Pre Sales",
  },
  {
    image: "/images/team/6.png",
    name: "Harsharaj S Ankalkoti",
    role: "Delivery Head",
  },
  {
    image: "/images/team/12.png",
    name: "Vishwajeet Raj",
    role: "Team Lead - FEA",
  },
  {
    image: "/images/team/7.png",
    name: "Ganesh Bharadwaj H S",
    role: "Head Of Dept - Piping",
  },
  {
    image: "/images/team/13.png",
    name: "Sagar S",
    role: "Team Lead - Piping",
  },
  {
    image: "/images/team/8.png",
    name: "Srikanth G",
    role: "Project Manager",
  },
  {
    image: "/images/team/14.png",
    name: "Shane Stuart",
    role: "Team Lead - FEA",
  },
  {
    image: "/images/team/9.png",
    name: "Santosh Mankani",
    role: "Project Manager",
  },
  {
    image: "/images/team/15.png",
    name: "Benith Kumar",
    role: "Team Lead - Piping",
  },
  {
    image: "/images/team/10.png",
    name: "Shivakumar Hadagali",
    role: "Project Manager",
  },
  {
    image: "/images/team/16.png",
    name: "Prateek Ranjan",
    role: "Team Lead - Piping",
  },
];

export default function Team() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards =
      sectionRef.current?.querySelectorAll(".team-card");

    if (!cards) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("team-show");
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="team-page">

      <Breadcrumbs />


      


      {/* ORGANISATION */}

      <section
        className="org-section"
        ref={sectionRef}
      >

        <div className="team-container">

          <div className="org-heading">

            <span>
              ORGANISATION
            </span>

            <h2>
              Our Leadership &amp;  <strong>Team</strong> 
            </h2>

            <p>
              A strong leadership structure supported by experienced
              engineering professionals and specialised technical teams.
            </p>

          </div>


          {/* TOP LEADERSHIP */}

          <div className="leadership">

            <div className="leader-card main-leader">

              <div className="leader-image">

                <Image
                  src="/images/team/1.png"
                  alt="Dr Shamasundar"
                  fill
                  sizes="180px"
                />

              </div>

              <div className="leader-info">

               

                <h3>
                  Dr Shamasundar
                </h3>

                <p>
                  Managing Director
                </p>

              </div>

            </div>


            <div className="org-connector"></div>


            <div className="leader-card">

              <div className="leader-image">

                <Image
                  src="/images/team/2.png"
                  alt="Umesh Chandra"
                  fill
                  sizes="180px"
                />

              </div>

              <div className="leader-info">

            

                <h3>
                  Umesh Chandra
                </h3>

                <p>
                  Director
                </p>

              </div>

            </div>


            <div className="org-connector"></div>


            <div className="leader-card">

              <div className="leader-image">

                <Image
                  src="/images/team/4.png"
                  alt="Dr Sridhar Mandyam"
                  fill
                  sizes="180px"
                />

              </div>

              <div className="leader-info">

               

                <h3>
                  Dr Sridhar Mandyam
                </h3>

                <p>
                  Lead - Digital Initiatives
                </p>

              </div>

            </div>

          </div>


          {/* MAIN LINE */}

          <div className="main-connector">
            <span></span>
          </div>


          {/* TEAM GRID */}

          <div className="team-grid">

            {management.map((person, index) => (

              <article
                className="team-card"
                key={person.name}
                style={{
                  transitionDelay: `${index * 80}ms`,
                }}
              >

                <div className="team-card-image">

                  <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    sizes="(max-width: 700px) 100vw, 280px"
                  />

                  <div className="team-card-number">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                </div>


                <div className="team-card-content">

                  <span>
                    TEAM
                  </span>

                  <h3>
                    {person.name}
                  </h3>

                  <p>
                    {person.role}
                  </p>


                 

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* BOTTOM */}

      <section className="team-bottom">

        <div className="team-container">

          <div className="team-bottom-content">

            <span>
              ONE TEAM. ONE PURPOSE.
            </span>

            <h2>
              Engineering expertise,
              working together.
            </h2>

            <p>
              Our collaborative approach allows specialised teams to
              combine their knowledge and experience to deliver
              dependable engineering solutions.
            </p>

          </div>

        </div>

      </section>

    </main>
  );
}

