"use client";

import React from "react";
import Image from "next/image";

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
  return (
    <section
      className={`relative bg-[#FFF8E7] ${className}`}
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center px-6">
        {/* Text */}
        <div className="space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#8D6E63] leading-tight">
            {title}
          </h1>
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
