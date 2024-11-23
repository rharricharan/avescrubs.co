// src/components/HeroSection.js

import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './gsap-home.css';

gsap.registerPlugin(ScrollTrigger);

const GsapHome = () => {
  const [scrollSpeed, setScrollSpeed] = useState(1);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const scrollStrength = Math.min(scrollPosition / 1000, 1); // Adjusts scroll strength limit
    setScrollSpeed(1 + scrollStrength);
  };

  useEffect(() => {
    gsap.fromTo(
      ".hero-text", 
      { x: -1000 },
        {
            x: 0,
            duration: 4,
            ease: "power2.out",
            scrollTrigger: {
            trigger: ".hero-text",
            start: "top bottom",
            end: "bottom top",
            scrub: true,
            pin: true
            }});

    gsap.to(".icon", {
      rotation: 360,
      repeat: -1,
      duration: 3,
      ease: "linear",
      scrollTrigger: {
        trigger: ".hero-text",
        scrub: true,
      }
    });

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="hero">
      <div className="icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="2" x2="12" y2="12" />
          <line x1="12" y1="12" x2="22" y2="12" />
        </svg>
      </div>
      <h1 className="hero-text">ENRICHING THE LIVES OF HEALTHCARE WORKERS</h1>
    </section>
  );
};

export default GsapHome;
