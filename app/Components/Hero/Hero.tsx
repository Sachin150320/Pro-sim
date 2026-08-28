"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import ScrollAnimation from "@/app/Components/ScrollAnimation"; // Adjust path to your component file

const stats = [
  { number: 800, suffix: "+", text: "Trusted Customers" },
  { number: 4, suffix: "M+", text: "Hours of Experience" },
  { number: 3600, suffix: "+", text: "Projects Delivered" },
  { number: 25, suffix: "+", text: "Years of Excellence" },
];

function Counter({ number, suffix }: { number: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const counterRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const element = counterRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;

    let start = 0;
    const duration = 2000;
    const increment = number / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= number) {
        setCount(number);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [started, number]);

  return (
    <h2 ref={counterRef}>
      {count.toLocaleString()}
      {suffix}
    </h2>
  );
}

export default function Hero() {
  return (
    <section className="hero-section">
      <video autoPlay muted loop playsInline className="hero-video">
        <source src="assets/images/sliders/banner-01.mp4" type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>

    
    
        <div className="hero-overlay" />
<div className="hero-container">
   <ScrollAnimation>
        <div className="hero-content">
          <span className="hero-subtitle">
            PROSIM / DETAILED ENGINEERING & ANALYSIS
          </span>

          <h1>
            Engineering through
            <br />
            <span className="highlight">Delivery Excellence</span>
          </h1>

          <div className="title-underline" />

          <p className="hero-description">
            Delivering innovative engineering solutions across energy sectors,
            helping customers solve their most pressing challenges through
            delivery excellence.
          </p>

          <div className="hero-buttons">
            {/* <Link href="/industries" className="btn-primary">
              Explore Industries
              <span className="arrow">→</span>
            </Link> */}

            {/* <Link href="#unveiling-prosim" className="btn-secondary">
              <span className="play-icon">▶</span>
              Unveiling ProSIM
            </Link> */}
          </div>

          {/* <div className="badge-pill">
            <span className="shield-icon">✦</span>
            Detailed engineering & analysis specialists
          </div> */}
        </div>
 </ScrollAnimation>
        <div className="stats-section">
          {stats.map((stat) => (
            <div className="stat-card" key={stat.text}>
              <Counter number={stat.number} suffix={stat.suffix} />
              <p>{stat.text}</p>
            </div>
          ))}
        </div>
      </div>
    
      
    </section>
  );
}