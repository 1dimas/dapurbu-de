"use client";

import NavbarSection from "@/components/sections/NavbarSection";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import ProductsSection from "@/components/sections/ProductsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ContactSection from "@/components/sections/ContactSection";
import FooterSection from "@/components/sections/FooterSection";
import ScrollFloatDemo from "@/components/sections/ScrollFloatDemo";

export default function HomePage() {
  return (
    <div className="bg-[#FFFDF7]">
      <NavbarSection />
      <HeroSection />
      <ScrollFloatDemo />
      <ProductsSection />
      {/* <AboutSection />
      <FeaturesSection />
      <TestimonialsSection />
      <ContactSection />
      <FooterSection /> */}
    </div>
  );
}
      
