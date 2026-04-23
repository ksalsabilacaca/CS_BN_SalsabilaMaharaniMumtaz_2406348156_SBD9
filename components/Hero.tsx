"use client";
import { useState } from "react";

export default function Hero() {
  const images = [
    "/bali.avif",
    "/rajaampat.avif",
    "/kalimantan.jpg",
    "/prambanan.jpg",
  ];

  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section
      className="relative h-[500px] flex flex-col items-center justify-center text-white text-center bg-cover bg-center transition-all duration-500"
      style={{ backgroundImage: `url(${images[index]})` }}
    >
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10">
        <h1 className="text-4xl font-bold mb-2">
          Hai kamu, mau ke mana?
        </h1>
        <p className="mb-6 italic">Satu aplikasi untuk kebutuhan liburanmu</p>

        <div className="bg-white text-black p-6 rounded-xl shadow-lg w-[90%] max-w-4xl mx-auto">
          <div className="grid md:grid-cols-5 gap-4">
            <input className="border p-2 rounded" placeholder="Dari" />
            <input className="border p-2 rounded" placeholder="Ke mana?" />
            <input className="border p-2 rounded" placeholder="Tanggal" />
            <input className="border p-2 rounded" placeholder="Penumpang" />
            <button className="bg-blue-600 text-white rounded">
              Cari
            </button>
          </div>
        </div>
      </div>

      <button
        onClick={prev}
        className="absolute left-5 top-1/2 -translate-y-1/2 bg-white/70 text-black px-3 py-2 rounded-full"
      >
        ◀
      </button>

      <button
        onClick={next}
        className="absolute right-5 top-1/2 -translate-y-1/2 bg-white/70 text-black px-3 py-2 rounded-full"
      >
        ▶
      </button>
    </section>
  );
}