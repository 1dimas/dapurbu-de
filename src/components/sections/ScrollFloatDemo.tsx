"use client";

import ScrollFloat from "@/components/ScrollFloat";

export default function ScrollFloatDemo() {
  return (
    <div className="bg-[#ffbf00] min-h-screen flex flex-col items-center justify-center py-32">
      <ScrollFloat
        animationDuration={2}
        ease="back.inOut(2)"
        scrollStart="center bottom+=50%"
        scrollEnd="bottom bottom-=40%"
        stagger={0.03}
      >
        React Bits
      </ScrollFloat>
    </div>
  );
}
