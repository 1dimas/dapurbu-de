"use client";

import React, { useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import gsap from "gsap";

// SplitText component
type SplitTextProps = {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  ease?: string;
  splitType?: "chars" | "words";
  from?: Record<string, any>;
  to?: Record<string, any>;
  threshold?: number;
  rootMargin?: string;
  textAlign?: string;
  onLetterAnimationComplete?: () => void;
};

const SplitText: React.FC<SplitTextProps> = ({
  text,
  className = "",
  delay = 0,
  duration = 0.6,
  ease = "power3.out",
  splitType = "chars",
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = "-100px",
  textAlign = "center",
  onLetterAnimationComplete,
}) => {
  const containerRef = useRef<HTMLSpanElement>(null);

  // Split text into chars or words
  const split = splitType === "words" ? text.split(" ") : text.split("");

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Intersection Observer for animation trigger
    const observer = new window.IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          gsap.to(
            el.querySelectorAll(".split-char"),
            {
              ...to,
              delay,
              duration,
              ease,
              stagger: 0.04,
              onComplete: onLetterAnimationComplete,
            }
          );
          observer.disconnect();
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(el);

    // Set initial state
    gsap.set(el.querySelectorAll(".split-char"), from);

    return () => observer.disconnect();
  }, [
    delay,
    duration,
    ease,
    from,
    to,
    threshold,
    rootMargin,
    onLetterAnimationComplete,
    splitType,
    text,
  ]);

  return (
    <span
      ref={containerRef}
      className={className}
      style={{ display: "inline-block" }}
    >
      {split.map((char, i) =>
        char === " " ? (
          <span key={i}>&nbsp;</span>
        ) : (
          <span key={i} className="split-char inline-block">
            {char}
          </span>
        )
      )}
    </span>
  );
}

type HeroSectionProps = {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
  image: string;
  className?: string;
};

function HeroSectionContent({
  title,
  subtitle,
  buttonText,
  buttonLink,
  image,
  className = "",
}: HeroSectionProps) {
  // Animation complete handler
  const handleAnimationComplete = useCallback(() => {
    // You can add any logic here after animation completes
    // For demo, just log
    console.log("SplitText animation complete");
  }, []);

  return (
    <section className={`relative bg-[#FFF8E7] ${className}`}>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center px-6">
        {/* Text */}
        <div className="space-y-6 text-center md:text-left">
          <SplitText
            text={title}
            className="text-4xl md:text-5xl font-extrabold text-[#8D6E63] leading-tight"
            delay={0.1}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="left"
            onLetterAnimationComplete={handleAnimationComplete}
          />
          <p className="text-lg md:text-xl text-gray-700">{subtitle}</p>
          <a href={buttonLink} target="_blank" rel="noopener noreferrer">
            <button className="px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-[#4E342E] font-semibold rounded-full shadow-md transition duration-300">
              {buttonText}
            </button>
          </a>
        </div>

        {/* Image */}
        <div className="relative w-full h-72 md:h-96">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover rounded-2xl shadow-lg"
            priority
          />
        </div>
      </div>
    </section>
  );
}

export default function HeroSection() {
  return (
    <HeroSectionContent
      title="Dapur Bu De"
      subtitle="Nastar premium rumahan – manis, lembut, dan penuh cinta."
      buttonText="Pesan Sekarang"
      buttonLink="https://wa.me/628123456789?text=Halo%20Bu%20De%2C%20saya%20ingin%20pesan%20nastar%20🍪"
      image="/images/nastar.jpeg"
      className="py-60"
    />
  );
}
