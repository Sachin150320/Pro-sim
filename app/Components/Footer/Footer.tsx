
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

    const mapUrl =
        "https://www.google.com/maps/search/?api=1&query=ProSIM+R%26D+Center%2C+%2339%2C+1st+Main%2C+Industrial+Suburb%2C+Yeshwanthpur%2C+Bengaluru+560022%2C+Karnataka%2C+India";

    return (
        <footer className="prosim-footer">

            {/* FOOTER MAIN */}
            <div className="footer-main">
                <div className="footer-container">

                    {/* COMPANY */}
                    <div className="footer-company">

                        <Link href="/" className="footer-logo">
                            <img
                                src="/assets/images/logo/logo-dark.webp"
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

                        {/* SOCIAL MEDIA */}
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
                                        <rect
                                            x="3"
                                            y="3"
                                            width="18"
                                            height="18"
                                            rx="5"
                                        />
                                        <circle cx="12" cy="12" r="4" />
                                        <circle
                                            cx="17.5"
                                            cy="6.5"
                                            r="1"
                                            fill="currentColor"
                                            stroke="none"
                                        />
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

                    {/* OFFERINGS */}
                    <div className="footer-column">
                        <h3>Offerings</h3>

                        <ul>
                            <li>
                                <Link href="/engineering/detailed-engineering">
                                    <span className="footer-arrow">→</span>
                                    Detailed Engineering
                                </Link>
                            </li>

                            <li>
                                <Link href="/engineering/seismic-analysis">
                                    <span className="footer-arrow">→</span>
                                    Seismic Analysis & Qualification
                                </Link>
                            </li>

                            <li>
                                <Link href="/engineering/piping-pipeline">
                                    <span className="footer-arrow">→</span>
                                    Piping & Pipeline Engineering
                                </Link>
                            </li>

                            <li>
                                <Link href="/engineering/3d-plant-modelling">
                                    <span className="footer-arrow">→</span>
                                    3D Plant Modelling
                                </Link>
                            </li>

                            <li>
                                <Link href="/engineering/fea">
                                    <span className="footer-arrow">→</span>
                                    Finite Element Analysis (FEA)
                                </Link>
                            </li>

                            <li>
                                <Link href="/engineering/cfd-multiphysics">
                                    <span className="footer-arrow">→</span>
                                    CFD & Multiphysics Simulations
                                </Link>
                            </li>

                            <li>
                                <Link href="/engineering/rla-rle-ffs">
                                    <span className="footer-arrow">→</span>
                                    RLA/RLE & Fitness-for-Service (FFS)
                                </Link>
                            </li>

                            <li>
                                <Link href="/engineering/automation-digital-twin">
                                    <span className="footer-arrow">→</span>
                                    Engineering Automation & Digital Twin
                                </Link>
                            </li>

                            <li>
                                <Link href="/engineering/pre-bid-owner-engineering">
                                    <span className="footer-arrow">→</span>
                                    Pre-Bid & Owner&apos;s Engineering
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* INDUSTRIES */}
                    <div className="footer-column">
                        <h3>Industries</h3>

                        <ul>
                            <li>
                                <Link href="/nuclear-power">
                                    <span className="footer-arrow">→</span>
                                    Nuclear Power
                                </Link>
                            </li>

                            <li>
                                <Link href="/thermal-power">
                                    <span className="footer-arrow">→</span>
                                    Thermal Power
                                </Link>
                            </li>

                            <li>
                                <Link href="/industries/power-grid-utilities">
                                    <span className="footer-arrow">→</span>
                                    Oil & Gas, Off Shore
                                </Link>
                            </li>

                            <li>
                                <Link href="/industries/power-grid-utilities">
                                    <span className="footer-arrow">→</span>
                                    Defence
                                </Link>
                            </li>

                            <li>
                                <Link href="/industries/power-grid-utilities">
                                    <span className="footer-arrow">→</span>
                                    Heavy Engineering Equipment / General Engineering
                                </Link>
                            </li>

                            <li>
                                <Link href="/industries/power-grid-utilities">
                                    <span className="footer-arrow">→</span>
                                    Renewable & Green Energy
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* QUICK CONNECT */}
                    <div className="footer-column footer-contact">
                        <h3>Quick Connect</h3>

                        {/* PHONE */}
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
                                <small>Call Us</small>
                                <strong>080 68160000</strong>
                            </div>
                        </a>

                        {/* EMAIL */}
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
                                <small> Email Us</small>
                                <strong>enquiry@pro-sim.com</strong>
                            </div>
                        </a>

                        {/* ADDRESS */}
                        <div className="contact-item">
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

                                <strong>  ProSIM R & D Pvt Ltd.
                                </strong>
<strong>   B-378/1, Ring Road,</strong><strong>  1st Stage, Peenya, Bangalore 560058.
                                </strong>
                                <a
                                    href={mapUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hq-direction-btn"
                                >
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                    >
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>

                                    Get Directions
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* FOOTER BOTTOM */}
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

            {/* SCROLL TO TOP */}
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

            {/* FLOATING CONTACT */}
            <div className="floating-contact">

                {/* WHATSAPP */}
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

                    <span className="floating-text">
                        WhatsApp
                    </span>
                </a>

            </div>

        </footer>
    );
}
