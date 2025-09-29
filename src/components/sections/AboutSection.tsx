"use client";


import FooterSection from "@/components/sections/FooterSection";

export default function TentangPage() {
  return (
    <div className="bg-[#FFFDF7] min-h-screen flex flex-col">
      {/* Navbar selalu ikut */}

      {/* Konten Tentang Kami */}
      <main className="flex-1 max-w-5xl mx-auto px-6 py-20 space-y-10">
        <h1 className="text-4xl font-extrabold text-[#8D6E63] text-center">
          Tentang Kami
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed text-center">
          <span className="font-semibold">Dapur Bu De</span> lahir dari kecintaan
          akan cita rasa nastar premium buatan rumahan. Dengan resep turun-temurun,
          kami menghadirkan kue yang manis, lembut, dan penuh cinta.  
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Gambar */}
          <div className="w-full h-72 bg-yellow-200 rounded-xl flex items-center justify-center">
            <span className="text-[#8D6E63] font-bold">📸 Foto Bu De / Nastar</span>
          </div>

          {/* Visi & Misi */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-[#8D6E63]">Visi</h2>
            <p className="text-gray-700">
              Menjadi pilihan utama kue nastar premium di setiap momen berharga
              keluarga Indonesia.
            </p>

            <h2 className="text-2xl font-bold text-[#8D6E63]">Misi</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Menghadirkan nastar dengan kualitas terbaik.</li>
              <li>Mengutamakan bahan alami tanpa pengawet.</li>
              <li>Menyajikan layanan ramah dan cepat.</li>
            </ul>
          </div>
        </div>
      </main>

      {/* Footer */}
      <FooterSection />
    </div>
  );
}
