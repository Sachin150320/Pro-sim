"use client";

import Link from "next/link";
import { useEffect, useState } from "react";




export default function Footer() {
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 300);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);



    return (
        <footer className="prosim-footer">

            {/* =========================================
          FOOTER MAIN
      ========================================= */}
            <div className="footer-main">

                <div className="footer-container">

                    {/* =====================================
              COMPANY
          ===================================== */}
                    <div className="footer-company">

                        <Link href="/" className="footer-logo">
                            <img
                                src={"/assets/images/logo/logo-dark.webp"}
                                alt="ProSIM Logo"
                                className="logo-image"
                            />
                        </Link>

                        <p className="footer-description">
                            ProSIM is a multidisciplinary engineering and design company
                            delivering reliable solutions across the Energy, Process,
                            Utilities, and Infrastructure sectors, working with EPCs, OEMs,
                            and engineering service companies from engineering design
                            through detailed engineering and analysis.
                        </p>




                        {/* Social Media */}
                        <div className="footer-social">

                            <strong>Follow Us</strong>

                            <div className="social-icons">

                                {/* LinkedIn */}
                                <a
                                    href="https://www.linkedin.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="LinkedIn"
                                    className="social-icon"
                                >
                                    <svg
                                        width="18"
                                        height="18"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                    >
                                        <path d="M6.94 8.5H3.5V20h3.44V8.5zM5.22 3A2.02 2.02 0 1 0 5.22 7.04 2.02 2.02 0 0 0 5.22 3zM20.5 13.42c0-3.47-1.85-5.08-4.32-5.08-1.99 0-2.88 1.1-3.38 1.87V8.5H9.36V20h3.44v-5.69c0-1.5.28-2.95 2.14-2.95 1.83 0 1.85 1.71 1.85 3.05V20h3.44l.27-6.58z" />
                                    </svg>
                                </a>

                                {/* Facebook */}
                                <a
                                    href="https://www.facebook.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Facebook"
                                    className="social-icon"
                                >
                                    <svg
                                        width="18"
                                        height="18"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                    >
                                        <path d="M13.5 21v-8h2.75l.42-3h-3.17V8.08c0-.87.24-1.46 1.5-1.46h1.8V3.94c-.31-.04-1.38-.14-2.62-.14-2.59 0-4.36 1.58-4.36 4.49V10H7.9v3h2.72v8h2.88z" />
                                    </svg>
                                </a>

                                {/* Instagram */}
                                <a
                                    href="https://www.instagram.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Instagram"
                                    className="social-icon"
                                >
                                    <svg
                                        width="18"
                                        height="18"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.8"
                                    >
                                        <rect x="3" y="3" width="18" height="18" rx="5" />
                                        <circle cx="12" cy="12" r="4" />
                                        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                                    </svg>
                                </a>

                                {/* YouTube */}
                                <a
                                    href="https://www.youtube.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="YouTube"
                                    className="social-icon"
                                >
                                    <svg
                                        width="18"
                                        height="18"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                    >
                                        <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.55 3.5 12 3.5 12 3.5s-7.55 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.85.6 9.4.6 9.4.6s7.55 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.6 15.9V8.1l6.5 3.9-6.5 3.9z" />
                                    </svg>
                                </a>

                            </div>

                        </div>

                    </div>

                    {/* =====================================
              INDUSTRIES
          ===================================== */}
                    <div className="footer-column">

                        <h3>Industries We Serve</h3>

                        <ul>

                            <li>
                                <Link href="/industries/nuclear-power-island">
                                    <span className="footer-arrow">→</span>
                                    Nuclear Power Island
                                </Link>
                            </li>

                            <li>
                                <Link href="/industries/thermal-supercritical-energy">
                                    <span className="footer-arrow">→</span>
                                    Thermal &amp; Supercritical Energy
                                </Link>
                            </li>

                            <li>
                                <Link href="/industries/oil-gas-production">
                                    <span className="footer-arrow">→</span>
                                    Oil &amp; Gas Production
                                </Link>
                            </li>

                            <li>
                                <Link href="/industries/petrochemical-plants">
                                    <span className="footer-arrow">→</span>
                                    Petrochemical Plants
                                </Link>
                            </li>

                            <li>
                                <Link href="/industries/industrial-heavy-engineering">
                                    <span className="footer-arrow">→</span>
                                    Industrial &amp; Heavy Engineering
                                </Link>
                            </li>

                            <li>
                                <Link href="/industries/power-grid-utilities">
                                    <span className="footer-arrow">→</span>
                                    Power &amp; Grid Utilities
                                </Link>
                            </li>

                        </ul>

                    </div>

                    {/* =====================================
              ENGINEERING
          ===================================== */}
                    <div className="footer-column">

                        <h3>Engineering Disciplines</h3>

                        <ul>

                            <li>
                                <Link href="/engineering/fea">
                                    <span className="footer-arrow">→</span>
                                    Finite Element Analysis (FEA)
                                </Link>
                            </li>

                            <li>
                                <Link href="/engineering/cfd">
                                    <span className="footer-arrow">→</span>
                                    Computational Fluid Dynamics (CFD)
                                </Link>
                            </li>

                            <li>
                                <Link href="/engineering/piping-stress">
                                    <span className="footer-arrow">→</span>
                                    Piping Stress &amp; Surge Simulation
                                </Link>
                            </li>

                            <li>
                                <Link href="/engineering/plant-engineering">
                                    <span className="footer-arrow">→</span>
                                    Plant Engineering &amp; 3D Modeling
                                </Link>
                            </li>

                            <li>
                                <Link href="/engineering/fitness-for-service">
                                    <span className="footer-arrow">→</span>
                                    Fitness-For-Service (API 579)
                                </Link>
                            </li>

                            <li>
                                <Link href="/engineering/digital-twin">
                                    <span className="footer-arrow">→</span>
                                    Digital Twin &amp; RLA Studies
                                </Link>
                            </li>

                        </ul>

                    </div>

                    {/* =====================================
              QUICK CONNECT
          ===================================== */}
                    <div className="footer-column footer-contact">

                        <h3>Quick Connect</h3>

                        {/* Phone */}
                        <a
                            href="tel:+918023477000"
                            className="contact-item"
                        >

                            <div className="contact-icon">

                                <svg
                                    width="19"
                                    height="19"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.6"
                                >
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3.08 5.18 2 2 0 0 1 5.06 3h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L9 10.73a16 16 0 0 0 4.27 4.27l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 21 15.9l1 .02z" />
                                </svg>

                            </div>

                            <div>
                                <small>Desk Phone</small>
                                <strong>+91 (080) 2347-7000</strong>
                            </div>

                        </a>

                        {/* Email */}
                        <a
                            href="mailto:info@prosim.co.in"
                            className="contact-item"
                        >

                            <div className="contact-icon">

                                <svg
                                    width="19"
                                    height="19"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.6"
                                >
                                    <rect
                                        x="3"
                                        y="5"
                                        width="18"
                                        height="14"
                                        rx="2"
                                    />

                                    <path d="M3 7l9 6 9-6" />

                                </svg>

                            </div>

                            <div>
                                <small>Technical Email</small>
                                <strong>info@prosim.co.in</strong>
                            </div>

                        </a>

                        <a
                            href="https://www.google.com/maps/search/?api=1&query=ProSIM+R%26D+Center%2C+%2339%2C+1st+Main%2C+Industrial+Suburb%2C+Yeshwanthpur%2C+Bengaluru+560022%2C+Karnataka%2C+India"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-item"
                        >
                            <div className="contact-icon">

                                <svg
                                    width="19"
                                    height="19"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.6"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0z" />
                                    <circle cx="12" cy="10" r="2.5" />
                                </svg>

                            </div>

                            <div>
                                <small>Address</small>

                                <strong>
                                    ProSIM R&amp;B-378/1, Ring Rd, near TVS Cross, Peenya 1st Stage, Netaji Nagar, Peenya, Bengaluru, Karnataka 560058
                                </strong>
                            </div>
                        </a>



                    </div>

                </div>

            </div>

            {/* =========================================
          FOOTER BOTTOM
      ========================================= */}
            <div className="footer-bottom">

                <div className="footer-bottom-container">

                    <p>
                        © 2026 <strong>ProSIM R&amp;D Center</strong>.
                        All Rights Reserved.
                    </p>

                    <p className="footer-tagline">
                        Engineering through Delivery Excellence
                    </p>

                    <button
                        type="button"
                        className="back-to-top"
                        onClick={() => {
                            window.scrollTo({
                                top: 0,
                                behavior: "smooth",
                            });
                        }}
                        aria-label="Back to top"
                    >
                        <span>Back to Top</span>

                        <span className="top-arrow">
                            ↑
                        </span>
                    </button>

                </div>

            </div>



            {showScrollTop && (
                <button
                    type="button"
                    className="scroll-to-top"
                    onClick={() => {
                        window.scrollTo({
                            top: 0,
                            behavior: "smooth",
                        });
                    }}
                    aria-label="Scroll to top"
                >
                    ↑
                </button>
            )}


            {/* Floating Contact Buttons */}
            <div className="floating-contact">

                {/* WhatsApp */}
                <a
                    href="https://wa.me/919900067485"
                    className="float-whatsapp"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Chat with us on WhatsApp"
                >
                    <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-hidden="true"
                    >
                        <path
                            d="M20 11.5A8.5 8.5 0 0 1 7.3 19L4 20L5 16.8A8.5 8.5 0 1 1 20 11.5Z"
                            stroke="currentColor"
                            strokeWidth="1.6"
                        />

                        <path
                            d="M8.5 9.2C8.8 8.5 9.1 8.5 9.4 8.5H10L10.8 10.4C10.9 10.7 10.8 10.9 10.6 11.1L10 11.7C10.7 13 11.7 14 13 14.7L13.6 14.1C13.8 13.9 14 13.8 14.3 13.9L16.2 14.7V15.3C16.2 15.6 16.2 15.9 15.5 16.2C14.8 16.5 13.7 16.2 12.5 15.7C10.8 15 9 13.2 8.3 11.5C7.8 10.3 7.5 9.5 8.5 9.2Z"
                            fill="currentColor"
                        />
                    </svg>

                    <span className="floating-text">WhatsApp</span>
                </a>


                {/* Call */}
                <a
                    href="tel:+918068160000"
                    className="float-call"
                    aria-label="Call Simplixity Technologies"
                >
                    <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-hidden="true"
                    >
                        <path
                            d="M6.6 3.5L9.2 3C9.7 2.9 10.2 3.2 10.4 3.7L11.6 6.6C11.8 7 11.7 7.5 11.3 7.8L9.7 9.1C10.5 10.9 12 12.5 13.9 13.5L15.2 11.9C15.5 11.5 16 11.4 16.4 11.6L19.3 12.8C19.8 13 20.1 13.5 20 14L19.5 16.6C19.4 17.2 18.9 17.6 18.3 17.6C10.6 17.3 6.7 13.4 6.4 5.7C6.4 4.7 6.4 4 6.6 3.5Z"
                            stroke="currentColor"
                            strokeWidth="1.7"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>

                    <span className="floating-text">Call Us</span>
                </a>

            </div>

        </footer>
    );
}