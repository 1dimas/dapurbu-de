"use client";



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

  return (
    <section id="produk" className="py-16 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-[#8D6E63] mb-10">
        Produk Unggulan
      </h2>
    </section>
  );
}
