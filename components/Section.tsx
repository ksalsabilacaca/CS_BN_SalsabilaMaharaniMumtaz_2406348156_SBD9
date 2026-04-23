"use client";

import { useRef } from "react";
import Card from "./Card";

type Props = {
  title: string;
  type: string;
};

export default function Section({ title, type }: Props) {

  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -400 : 400,
        behavior: "smooth",
      });
    }
  };

  const data = {
    flight: [
      { image: "/jakarta.jpeg", title: "Jakarta ke Bali", location: "Garuda Indonesia", price: "IDR 1.200.000" },
      { image: "/bali.avif", title: "Bali ke Surabaya", location: "Citilink", price: "IDR 850.000" },
      { image: "/kalimantan.jpg", title: "Jakarta ke Pontianak", location: "Lion Air", price: "IDR 950.000" },
      { image: "/rajaampat.avif", title: "Jakarta ke Papua", location: "Batik Air", price: "IDR 2.300.000" },
      { image: "/jakarta.jpeg", title: "Bandung ke Bali", location: "AirAsia", price: "IDR 900.000" },
      { image: "/bali.avif", title: "Surabaya ke Lombok", location: "Super Air Jet", price: "IDR 780.000" },
      { image: "/kalimantan.jpg", title: "Medan ke Jakarta", location: "Lion Air", price: "IDR 1.100.000" },
      { image: "/rajaampat.avif", title: "Makassar ke Papua", location: "Sriwijaya Air", price: "IDR 1.900.000" },
      { image: "/jakarta.jpeg", title: "Jakarta ke Singapore", location: "Singapore Airlines", price: "IDR 2.800.000" },
      { image: "/bali.avif", title: "Bali ke Kuala Lumpur", location: "AirAsia", price: "IDR 1.500.000" },
      { image: "/kalimantan.jpg", title: "Balikpapan ke Jakarta", location: "Batik Air", price: "IDR 1.300.000" },
      { image: "/rajaampat.avif", title: "Papua ke Makassar", location: "Garuda Indonesia", price: "IDR 2.100.000" },
      { image: "/jakarta.jpeg", title: "Jakarta ke Bangkok", location: "Thai Airways", price: "IDR 3.200.000" },
      { image: "/bali.avif", title: "Denpasar ke Perth", location: "Jetstar", price: "IDR 2.900.000" },
      { image: "/kalimantan.jpg", title: "Pontianak ke Surabaya", location: "Citilink", price: "IDR 850.000" },
      { image: "/rajaampat.avif", title: "Papua ke Bali", location: "Lion Air", price: "IDR 2.000.000" },
      { image: "/jakarta.jpeg", title: "Jakarta ke Tokyo", location: "ANA", price: "IDR 7.500.000" },
      { image: "/bali.avif", title: "Bali ke Seoul", location: "Korean Air", price: "IDR 6.200.000" },
      { image: "/kalimantan.jpg", title: "Samarinda ke Jakarta", location: "Super Air Jet", price: "IDR 1.000.000" },
      { image: "/rajaampat.avif", title: "Papua ke Singapore", location: "Garuda Indonesia", price: "IDR 3.800.000" },
    ],

    hotel: [
      { image: "/jakarta.jpeg", title: "Tamarin Hotel Wahid Hasyim", location: "Jakarta Pusat", price: "IDR 478.090" },
      { image: "/bali.avif", title: "Bali Beach Resort", location: "Bali", price: "IDR 850.000" },
      { image: "/kalimantan.jpg", title: "Kalimantan Lodge", location: "Kalimantan", price: "IDR 500.000" },
      { image: "/rajaampat.avif", title: "Papua Paradise Resort", location: "Papua", price: "IDR 1.500.000" },
      { image: "/bali.avif", title: "Ubud Jungle Stay", location: "Bali", price: "IDR 900.000" },
      { image: "/jakarta.jpeg", title: "Hotel Indonesia Kempinski", location: "Jakarta", price: "IDR 2.200.000" },
      { image: "/bali.avif", title: "Seminyak Luxury Villa", location: "Bali", price: "IDR 3.500.000" },
      { image: "/kalimantan.jpg", title: "Borneo Resort", location: "Kalimantan", price: "IDR 1.200.000" },
      { image: "/rajaampat.avif", title: "Raja Ampat Dive Resort", location: "Papua", price: "IDR 2.800.000" },
      { image: "/bali.avif", title: "Kuta Beach Hotel", location: "Bali", price: "IDR 700.000" },
      { image: "/jakarta.jpeg", title: "Grand Hyatt Jakarta", location: "Jakarta", price: "IDR 2.500.000" },
      { image: "/bali.avif", title: "The Mulia Resort", location: "Bali", price: "IDR 4.200.000" },
      { image: "/kalimantan.jpg", title: "Samarinda Hotel", location: "Kalimantan", price: "IDR 600.000" },
      { image: "/rajaampat.avif", title: "Papua Eco Lodge", location: "Papua", price: "IDR 1.800.000" },
      { image: "/bali.avif", title: "Uluwatu Cliff Resort", location: "Bali", price: "IDR 1.700.000" },
      { image: "/jakarta.jpeg", title: "Pullman Jakarta", location: "Jakarta", price: "IDR 1.900.000" },
      { image: "/bali.avif", title: "Canggu Boutique Hotel", location: "Bali", price: "IDR 950.000" },
      { image: "/kalimantan.jpg", title: "Balikpapan Grand Hotel", location: "Kalimantan", price: "IDR 800.000" },
      { image: "/rajaampat.avif", title: "Papua Island Retreat", location: "Papua", price: "IDR 3.000.000" },
      { image: "/bali.avif", title: "Nusa Dua Resort", location: "Bali", price: "IDR 2.300.000" },
    ],

    konser: [
      { image: "/jakarta.jpeg", title: "Coldplay Live Jakarta", location: "GBK", price: "IDR 2.000.000" },
      { image: "/bali.avif", title: "We The Fest", location: "Jakarta", price: "IDR 1.500.000" },
      { image: "/kalimantan.jpg", title: "Jazz Festival", location: "Bandung", price: "IDR 750.000" },
      { image: "/rajaampat.avif", title: "EDM Party", location: "Bali", price: "IDR 1.200.000" },
    ],

    bus: [
      { image: "/jakarta.jpeg", title: "Jakarta ke Bandung", location: "Primajasa", price: "IDR 120.000" },
      { image: "/bali.avif", title: "Denpasar ke Surabaya", location: "Sinar Jaya", price: "IDR 200.000" },
      { image: "/kalimantan.jpg", title: "Pontianak ke Samarinda", location: "Nusantara", price: "IDR 300.000" },
      { image: "/jakarta.jpeg", title: "Jakarta ke Jogja", location: "Rosalia Indah", price: "IDR 250.000" },
    ],

    villa: [
      { image: "/bali.avif", title: "Private Pool Villa", location: "Bali", price: "IDR 2.500.000" },
      { image: "/rajaampat.avif", title: "Ocean View Villa", location: "Papua", price: "IDR 3.000.000" },
      { image: "/kalimantan.jpg", title: "Forest Cabin", location: "Kalimantan", price: "IDR 1.200.000" },
    ],

    event: [
      { image: "/jakarta.jpeg", title: "Travel Fair", location: "Jakarta", price: "Gratis" },
      { image: "/bali.avif", title: "Food Festival", location: "Bali", price: "IDR 50.000" },
      { image: "/kalimantan.jpg", title: "Cultural Event", location: "Kalimantan", price: "IDR 30.000" },
    ],
  };

  const items = data[type as keyof typeof data];

  return (
    <section className="p-10 bg-gray-100 relative">
      <h2 className="text-2xl font-bold mb-6">{title}</h2>

      <button
        onClick={() => scroll("left")}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white shadow p-3 rounded-full hover:bg-gray-200"
      >
        ◀
      </button>

      <button
        onClick={() => scroll("right")}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white shadow p-3 rounded-full hover:bg-gray-200"
      >
        ▶
      </button>

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scroll-smooth pb-2"
      >
        {items.map((item, i) => (
          <Card key={i} {...item} />
        ))}
      </div>
    </section>
  );
}