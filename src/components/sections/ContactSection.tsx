"use client";

export default function ContactSection() {
  return (
    <section id="kontak" className="py-16 text-center px-6 bg-[#FFF8E7]">
      <h2 className="text-3xl font-bold text-[#8D6E63] mb-6">Hubungi Kami</h2>
      <p className="text-gray-600 mb-6">
        Siap pesan atau ingin bertanya? Klik tombol di bawah untuk menghubungi kami via WhatsApp 👇
      </p>
      <a
        href="https://wa.me/628123456789?text=Halo%20Bu%20De%2C%20saya%20ingin%20pesan%20nastar%20🍪"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 shadow-lg"
      >
        Chat WhatsApp
      </a>
    </section>
  );
}
