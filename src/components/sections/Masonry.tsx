import React, { useEffect, useRef } from "react";
import gsap from "gsap";

type MasonryItem = {
  id: string;
  img: string;
  url: string;
  height?: number;
};

type MasonryProps = {
  items: MasonryItem[];
  ease?: string;
  duration?: number;
  stagger?: number;
  animateFrom?: "bottom" | "top" | "left" | "right";
  scaleOnHover?: boolean;
  hoverScale?: number;
  blurToFocus?: boolean;
  colorShiftOnHover?: boolean;
};

const Masonry: React.FC<MasonryProps> = ({
  items,
  ease = "power3.out",
  duration = 0.6,
  stagger = 0.05,
  animateFrom = "bottom",
  scaleOnHover = true,
  hoverScale = 0.95,
  blurToFocus = true,
  colorShiftOnHover = false,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const cards = el.querySelectorAll(".masonry-card");
    let fromVars: any = { opacity: 0 };
    if (animateFrom === "bottom") fromVars.y = 60;
    if (animateFrom === "top") fromVars.y = -60;
    if (animateFrom === "left") fromVars.x = -60;
    if (animateFrom === "right") fromVars.x = 60;

    gsap.set(cards, fromVars);
    gsap.to(cards, {
      opacity: 1,
      x: 0,
      y: 0,
      duration,
      ease,
      stagger,
    });
  }, [items, ease, duration, stagger, animateFrom]);

  return (
    <div
      ref={containerRef}
      className="columns-1 sm:columns-2 md:columns-3 gap-6 w-full"
    >
      {items.map((item) => (
        <a
          key={item.id}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block mb-6 masonry-card transition-all duration-300"
          style={{
            breakInside: "avoid",
            borderRadius: "1rem",
            overflow: "hidden",
            boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
            transform: scaleOnHover ? undefined : "none",
          }}
        >
          <div
            className={`w-full`}
            style={{
              height: item.height || 300,
              position: "relative",
              overflow: "hidden",
            }}
          >
            <img
              src={item.img}
              alt=""
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                filter: blurToFocus ? "blur(6px)" : undefined,
                transition: "filter 0.4s, transform 0.3s, box-shadow 0.3s",
              }}
              onLoad={e => {
                if (blurToFocus) {
                  (e.currentTarget as HTMLImageElement).style.filter = "blur(0px)";
                }
              }}
              className={colorShiftOnHover ? "hover:saturate-150" : ""}
            />
          </div>
          <style jsx>{`
            .masonry-card:hover img {
              transform: ${scaleOnHover ? `scale(${hoverScale})` : "none"};
              filter: ${blurToFocus ? "blur(0px)" : ""};
            }
          `}</style>
        </a>
      ))}
    </div>
  );
};

export default Masonry;
