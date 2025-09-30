"use client";

import Image from "next/image";
import ScrollFloat from "@/components/ScrollFloat";
import Masonry from "@/components/Masonry";

export default function ProductsSection() {
  const products = [
    {
      title: "Nastar Original",
      description: "Rasa klasik dengan selai nanas homemade 🍍",
      image: "/images/products/nastar1.jpg",
      button: {
        text: "Pesan via WA",
        href: "https://wa.me/628123456789?text=Halo%20Bu%20De%2C%20pesan%20Nastar%20Original%20🍪",
      },
    },
    {
      title: "Nastar Keju Premium",
      description: "Lezat dengan taburan keju edam 🧀",
      image: "/images/products/nastar2.jpg",
      button: {
        text: "Pesan via WA",
        href: "https://wa.me/628123456789?text=Halo%20Bu%20De%2C%20pesan%20Nastar%20Keju%20Premium%20🧀",
      },
    },
    {
      title: "Nastar Special Lebaran",
      description: "Kemas cantik, cocok untuk hampers 🎁",
      image: "/images/products/nastar3.jpg",
      button: {
        text: "Pesan via WA",
        href: "https://wa.me/628123456789?text=Halo%20Bu%20De%2C%20pesan%20Nastar%20Special%20Lebaran%20🎉",
      },
    },
  ];

  const items = [
    {
      id: "1",
      img: "https://picsum.photos/id/1015/600/900?grayscale",
      url: "https://example.com/one",
      height: 400,
    },
    {
      id: "2",
      img: "https://picsum.photos/id/1011/600/750?grayscale",
      url: "https://example.com/two",
      height: 250,
    },
    {
      id: "3",
      img: "https://picsum.photos/id/1020/600/800?grayscale",
      url: "https://example.com/three",
      height: 600,
    },
    // ... more items
  ];

  return (
    <section id="produk" className="py-16 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-[#8D6E63] mb-10">
        Produk Unggulan
      </h2>
      <div className="grid md:grid-cols-3 gap-10">
        {products.map((product, idx) => (
          <ScrollFloat
            key={product.title}
            animationDuration={1}
            ease="back.inOut(2)"
            scrollStart="top bottom-=20%"
            scrollEnd="bottom top+=20%"
            stagger={0.04}
          >
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col items-center p-6">
              <div className="relative w-full h-48 mb-4">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover rounded-xl"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <h3 className="text-xl font-bold text-[#8D6E63] mb-2 text-center">
                {product.title}
              </h3>
              <p className="text-gray-700 text-center mb-4">
                {product.description}
              </p>
              <a
                href={product.button.href}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-yellow-400 hover:bg-yellow-500 text-[#4E342E] font-semibold rounded-full shadow transition duration-300"
              >
                {product.button.text}
              </a>
            </div>
          </ScrollFloat>
        ))}
      </div>
      {/* Galeri Masonry */}
      <div
        className="mt-16 rounded-3xl p-8"
        style={{
          background: "#181225",
        }}
      >
        <h3 className="text-2xl font-bold text-white mb-6 text-center">
          Galeri Kue Mak Gw
        </h3>
        <Masonry
          items={items}
          ease="power3.out"
          duration={0.6}
          stagger={0.05}
          animateFrom="bottom"
          scaleOnHover={true}
          hoverScale={0.95}
          blurToFocus={true}
          colorShiftOnHover={false}
        />
      </div>
      <style jsx global>{`
        .masonry-card {
          background: #20163a;
          border-radius: 1.5rem;
          margin: 0 0 24px 0;
          box-shadow: 0 4px 24px rgba(0, 0, 0, 0.12);
          overflow: hidden;
          transition: box-shadow 0.3s;
        }
        .masonry-card img {
          border-radius: 1.5rem;
        }
        .masonry-card:hover {
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.18);
        }
        .columns-1,
        .columns-2,
        .columns-3 {
          column-gap: 24px;
        }
      `}</style>
    </section>
  );
}
