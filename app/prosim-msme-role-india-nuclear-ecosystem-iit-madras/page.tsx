
"use client";

import Link from "next/link";
import Image from "next/image";

const IMG = "/assets/images/Events";

export default function NuclearEcosystemEventPage() {
    return (
        <main className="nuclear-event-page">
            <style jsx>{`
        .nuclear-event-page {
          --event-blue: #0071bc;
          --event-dark: #18232d;
          --event-text: #4e5963;
          --event-light: #f6f7f8;
          --event-border: #e2e5e8;
          --event-teal: #3cc9dc;

          color: var(--event-dark);
          background: #ffffff;
          overflow: hidden;
        }

        .event-container {
          width: min(1180px, calc(100% - 40px));
          margin: 0 auto;
        }

        /* Breadcrumb hero */
        .event-hero {
          position: relative;
          display: flex;
          align-items: center;
          min-height: 360px;
          padding: 100px 0 65px;
          overflow: hidden;
          color: #ffffff;
          
          background-image: url("/assets/images/breadcrum/3.png");
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }

        .event-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            110deg,
            rgba(7, 23, 42, 0.94) 0%,
            rgba(12, 33, 55, 0.82) 55%,
            rgba(18, 48, 73, 0.65) 100%
          );
        }

        .event-hero-content {
          position: relative;
          z-index: 1;
        }

        .event-breadcrumb {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 11px;
          margin-bottom: 40px;
          color: #ffffff !important;
          font-size: 13px;
          line-height: 1.7;
        }

        .event-breadcrumb a,
        .event-breadcrumb a.text-white {
          color: #ffffff !important;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .event-breadcrumb a:hover {
          color: var(--event-teal) !important;
        }

        .event-breadcrumb > span:nth-child(even) {
          color: var(--event-teal) !important;
        }

        .event-breadcrumb .event-breadcrumb-current {
          color: #ffffff !important;
        }

        .event-hero-title {
          max-width: 850px;
        }

        .event-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 18px;
          color: var(--event-teal);
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 2.4px;
        }

        .event-eyebrow::before {
          content: "";
          width: 24px;
          height: 2px;
          background: currentColor;
        }

        .event-hero-title h1 {
          max-width: 850px;
          margin: 0;
          color: #ffffff;
          font-size: clamp(32px, 4.4vw, 52px);
          font-weight: 600;
          line-height: 1.16;
          letter-spacing: -1.2px;
        }

        /* Alternating image and content rows */
        .event-content {
          padding: 30px 0 70px;
        }

        .event-story {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, 0.92fr);
          align-items: center;
          gap: 55px;
          padding: 48px 0;
          border-bottom: 1px solid var(--event-border);
        }

        .event-story:last-child {
          border-bottom: 0;
        }

        .event-story-image-left {
          grid-template-columns: minmax(0, 0.92fr) minmax(0, 1fr);
        }

        .event-story-image-left .event-story-image {
          order: 0;
        }

        .event-story-image-left .event-story-text {
          order: 1;
        }

        .event-story-text {
          min-width: 0;
        }

        .event-story-text p {
          margin: 0 0 18px;
          color: var(--event-text);
          font-size: 16px;
          line-height: 1.9;
          overflow-wrap: anywhere;
        }

        .event-story-text p:last-child {
          margin-bottom: 0;
        }

        .event-story-image {
          position: relative;
          width: 100%;
          min-width: 0;
          margin: 0;
          overflow: hidden;
          border: 1px solid var(--event-border);
          border-radius: 14px;
          background: var(--event-light);
          box-shadow: 0 18px 40px -22px rgba(16, 27, 40, 0.28);
        }

        .event-story-image::after {
          position: absolute;
          right: 0;
          bottom: 0;
          left: 0;
          height: 5px;
          content: "";
          background: var(--event-blue);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.35s ease;
        }

        .event-story-image:hover::after {
          transform: scaleX(1);
        }

        .event-story-image :global(img) {
          display: block;
          width: 100%;
          height: 286px;
          object-fit: cover;
          object-position: center;
          transition: transform 0.5s ease;
        }

        .event-story-image:hover :global(img) {
          transform: scale(1.04);
        }

        @media (max-width: 900px) {
          .event-hero {
            min-height: 330px;
            padding: 90px 0 55px;
          }

          .event-story,
          .event-story-image-left {
            grid-template-columns: minmax(0, 1fr) minmax(0, 0.9fr);
            gap: 30px;
          }

          .event-story-image :global(img) {
            height: 300px;
          }

          .event-story-text p {
            font-size: 15px;
            line-height: 1.8;
          }
        }

        @media (max-width: 680px) {
          .event-container {
            width: calc(100% - 30px);
          }

          .event-hero {
            min-height: 300px;
            padding: 80px 0 45px;
            background-position: center;
          }

          .event-breadcrumb {
            gap: 8px;
            margin-bottom: 28px;
            font-size: 12px;
          }

          .event-hero-title h1 {
            font-size: clamp(29px, 8vw, 39px);
            letter-spacing: -0.7px;
          }

          .event-content {
            padding: 10px 0 40px;
          }

          .event-story,
          .event-story-image-left {
            grid-template-columns: minmax(0, 1fr);
            gap: 22px;
            padding: 30px 0;
          }

          .event-story-image-left .event-story-image,
          .event-story-image-left .event-story-text {
            order: initial;
          }

          .event-story-image :global(img) {
            height: auto;
            aspect-ratio: 4 / 2;
          }

          .event-story-text p {
            font-size: 15px;
            line-height: 1.8;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .event-story-image :global(img),
          .event-story-image::after,
          .event-breadcrumb a {
            transition: none;
          }
        }
        
      `}</style>

            {/* Breadcrumb Banner */}
            <section className="event-hero">
                <div className="event-hero-overlay" />

                <div className="event-container event-hero-content">


                    <div className="event-hero-title">
                        <span className="event-eyebrow">PROSIM EVENT</span>

                        <h1>
                            Building India’s Nuclear Ecosystem: Policy, Technology &amp;
                            Industry
                        </h1>
                    </div>
                </div>
            </section>

            {/* Event Content */}
            <section className="event-content">
                <div className="event-container">
                    {/* Row 1 */}
                    <article className="event-story event-story-image-right">
                        <div className="event-story-text">
                            <p>
                                Dr S Shamasundar, MD of ProSIM and Hon. Director of India
                                Nuclear Forum, speaking at the International Conference on
                                “Building India’s Nuclear Ecosystem: Policy, Technology &amp;
                                Industry” organized by Deccan Center for International Relations
                                and IIT Madras on 8th October 2026.
                            </p>
                        </div>

                        <figure className="event-story-image">
                            <Image
                                src={`${IMG}/events-1.png`}
                                alt="Dr S Shamasundar speaking at the international nuclear ecosystem conference"
                                width={1200}
                                height={800}
                                priority
                                sizes="(max-width: 680px) 100vw, (max-width: 1180px) 50vw, 560px"
                            />
                        </figure>
                    </article>

                    {/* Row 2 */}
                    <article className="event-story event-story-image-left">
                        <figure className="event-story-image">
                            <Image
                                src={`${IMG}/events-2.png`}
                                alt="Conference session on strengthening domestic value chains and capacity building"
                                width={1200}
                                height={800}
                                loading="eager"
                                sizes="(max-width: 680px) 100vw, (max-width: 1180px) 50vw, 560px"
                            />
                        </figure>

                        <div className="event-story-text">
                            <p>
                                Dr Shamasundar spoke in the session on “Strengthening Domestic
                                Value Chains and Capacity Building” and narrated the role of
                                MSMEs in adding value to the nuclear ecosystem.
                            </p>

                            <p>
                                He narrated the initiatives of India Nuclear Forum to create a
                                robust nuclear energy ecosystem in India, to accelerate India’s
                                nuclear mission. He explained the role of ProSIM in bridging
                                the gaps and providing a seamless interface between R&amp;D –
                                Operators – EPCs – System Integrators – Vendors and Regulators.
                            </p>
                        </div>
                    </article>

                    {/* Row 3 */}
                    <article className="event-story event-story-image-right">
                        <div className="event-story-text">
                            <p>
                                The event was addressed by several senior professionals of the
                                nuclear energy sector, including Dr Anil Kakodkar and Dr K N
                                Vyas, former Chairmen of the Atomic Energy Commission; Dr SS
                                Bajaj, former chairman of AERB; Mr Anil Parab of L&amp;T; Mr S K
                                Datir, Executive Director of NPCIL; Mr S C Chetal and Dr
                                Venkatraman, former directors of IGCAR; and Dr Kallol Roy and
                                Smt Rajani Sankaran, former CMDs of BHAVINI, along with several
                                other dignitaries.
                            </p>
                        </div>

                        <figure className="event-story-image">
                            <Image
                                src={`${IMG}/events-3.png`}
                                alt="Senior professionals and participants at the nuclear ecosystem conference"
                                width={1200}
                                height={800}
                                loading="lazy"
                                sizes="(max-width: 680px) 100vw, (max-width: 1180px) 50vw, 560px"
                            />
                        </figure>
                    </article>

                    {/* Row 4 */}
                    <article className="event-storys event-story-image-left pt-32">
                        <div className="event-story-text">
                            <p>
                                Panelists and organisers, from left to right: Dr Kallol Roy,
                                former CMD of BHAVINI and visiting Professor at IIT Madras;
                                Ambassador Tirumurthy, Chair of Deccan Center for International
                                Relations; Dr B Venkat Raman, former Director of IGCAR; Ms
                                Monisha Kumar, COO of MARG Consultants; Dr S Shamasundar, MD of
                                ProSIM R&amp;D Pvt Ltd and Hon. Director of India Nuclear Forum;
                                and Smt Rajani Sankaran, former CMD of BHAVINI and Accountant
                                General, Tamilnadu.
                            </p>

                            <p>
                                Dr Shamasundar is being felicitated by Ambassador Tirumurthy,
                                former Permanent Representative of India to the United Nations,
                                and Smt Rajani Sankaran, former CMD of BHAVINI and Accountant
                                General of the Tamilnadu government.
                            </p>
                        </div>
                    </article>
                </div>
            </section>
        </main>
    );
}
