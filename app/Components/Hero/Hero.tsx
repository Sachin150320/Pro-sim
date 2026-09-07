"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import ScrollAnimation from "@/app/Components/ScrollAnimation"; // Adjust path to your component file

const stats = [
  { number: 800, suffix: "+", step: 100, text: "Trusted Customers" },
  { number: 4, suffix: "M+", step: 1, text: "Hours of Experience" },
  { number: 3600, suffix: "+", step: 100, text: "Projects Delivered" },
  { number: 25, suffix: "+", step: 5, text: "Years of Excellence" },
];

function Counter({
  number,
  suffix,
  step,
}: {
  number: number;
  suffix: string;
  step: number;
}) {
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

    const totalSteps = Math.max(1, Math.ceil(number / step));
    // whole run ~2.4s, clamped so each visible tick sits between 90ms and 260ms
    const delay = Math.min(260, Math.max(90, Math.round(2400 / totalSteps)));

    let current = 0;
    const timer = setInterval(() => {
      current += step;
      if (current >= number) {
        setCount(number);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, delay);

    return () => clearInterval(timer);
  }, [started, number, step]);

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
        <source src="assets/images/sliders/banner-02.mp4" type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>

    
    
        <div className="hero-overlay" />
<div className="hero-container">
   <ScrollAnimation>
        <div className="hero-content">
          {/* <span className="hero-subtitle">
            PROSIM / DETAILED ENGINEERING & ANALYSIS
          </span> */}

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
              <Counter number={stat.number} suffix={stat.suffix} step={stat.step} />
              <p>{stat.text}</p>
            </div>
          ))}
        </div>
      </div>
    
      
    </section>
  );
}