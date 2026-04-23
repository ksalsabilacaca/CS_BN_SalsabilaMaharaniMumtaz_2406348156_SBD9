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
      { image: "/hotel1.webp", title: "Tamarin Hotel Wahid Hasyim", location: "Jakarta Pusat", price: "IDR 478.090" },
      { image: "/hotel2.webp", title: "Bali Beach Resort", location: "Bali", price: "IDR 850.000" },
      { image: "/hotel3.webp", title: "Kalimantan Lodge", location: "Kalimantan", price: "IDR 500.000" },
      { image: "/hotel4.webp", title: "Papua Paradise Resort", location: "Papua", price: "IDR 1.500.000" },
      { image: "/hotel5.webp", title: "Ubud Jungle Stay", location: "Bali", price: "IDR 900.000" },
      { image: "/hotel6.webp", title: "Hotel Indonesia Kempinski", location: "Jakarta", price: "IDR 2.200.000" },
      { image: "/hotel7.webp", title: "Seminyak Luxury Villa", location: "Bali", price: "IDR 3.500.000" },
      { image: "/hotel8.webp", title: "Borneo Resort", location: "Kalimantan", price: "IDR 1.200.000" },
      { image: "/hotel9.webp", title: "Raja Ampat Dive Resort", location: "Papua", price: "IDR 2.800.000" },
      { image: "/hotel10.webp", title: "Kuta Beach Hotel", location: "Bali", price: "IDR 700.000" },
      { image: "/hotel11.webp", title: "Grand Hyatt Jakarta", location: "Jakarta", price: "IDR 2.500.000" },
      { image: "/hotel12.webp", title: "The Mulia Resort", location: "Bali", price: "IDR 4.200.000" },
      { image: "/hotel13.webp", title: "Samarinda Hotel", location: "Kalimantan", price: "IDR 600.000" },
      { image: "/hotel14.webp", title: "Papua Eco Lodge", location: "Papua", price: "IDR 1.800.000" },
      { image: "/hotel15.webp", title: "Uluwatu Cliff Resort", location: "Bali", price: "IDR 1.700.000" },
      { image: "/hotel16.webp", title: "Pullman Jakarta", location: "Jakarta", price: "IDR 1.900.000" },
      { image: "/hotel17.webp", title: "Canggu Boutique Hotel", location: "Bali", price: "IDR 950.000" },
      { image: "/hotel18.webp", title: "Balikpapan Grand Hotel", location: "Kalimantan", price: "IDR 800.000" },
      { image: "/hotel19.webp", title: "Papua Island Retreat", location: "Papua", price: "IDR 3.000.000" },
      { image: "/hotel20.webp", title: "Nusa Dua Resort", location: "Bali", price: "IDR 2.300.000" },
    ],

    konser: [
      { image: "/konser1.webp", title: "Coldplay Live Jakarta", location: "GBK", price: "IDR 2.000.000" },
      { image: "/konser2.webp", title: "We The Fest 2026", location: "Jakarta", price: "IDR 1.500.000" },
      { image: "/konser3.webp", title: "Jazz Festival Bandung", location: "Bandung", price: "IDR 750.000" },
      { image: "/konser4.webp", title: "EDM Beach Party", location: "Bali", price: "IDR 1.200.000" },
      { image: "/konser5.webp", title: "Sheila On 7 Reunion", location: "Yogyakarta", price: "IDR 600.000" },
      { image: "/konser1.webp", title: "Sunset Music Festival", location: "Bali", price: "IDR 900.000" },
      { image: "/konser2.webp", title: "Kalimantan Rock Fest", location: "Samarinda", price: "IDR 500.000" },
      { image: "/konser3.webp", title: "Dewa 19 Concert", location: "Jakarta", price: "IDR 850.000" },
      { image: "/konser4.webp", title: "Beach EDM Night", location: "Bali", price: "IDR 1.300.000" },
      { image: "/konser5.webp", title: "NOAH Live Tour", location: "Surabaya", price: "IDR 700.000" },
      { image: "/konser1.webp", title: "Dayak Culture Music Fest", location: "Pontianak", price: "IDR 300.000" },
      { image: "/konser2.webp", title: "DJ International Night", location: "Bali", price: "IDR 1.800.000" },
      { image: "/konser3.webp", title: "Hindia Live Concert", location: "Jakarta", price: "IDR 650.000" },
      { image: "/konser4.webp", title: "Papua Music Fest", location: "Papua", price: "IDR 400.000" },
      { image: "/konser5.webp", title: "Festival Musik Indonesia", location: "Jakarta", price: "IDR 900.000" },
      { image: "/konser1.webp", title: "Island Party Festival", location: "Bali", price: "IDR 1.400.000" },
      { image: "/konser2.webp", title: "Nadin Amizah Live", location: "Bandung", price: "IDR 500.000" },
      { image: "/konser3.webp", title: "Borneo Music Night", location: "Balikpapan", price: "IDR 450.000" },
      { image: "/konser4.webp", title: "Tropical Music Fest", location: "Bali", price: "IDR 1.100.000" },
      { image: "/konser5.webp", title: "Raisa Concert", location: "Jakarta", price: "IDR 950.000" },
    ],

    bus: [
      { image: "/bus1.webp", title: "Jakarta ke Bandung", location: "Primajasa", price: "IDR 120.000" },
      { image: "/bus2.webp", title: "Denpasar ke Surabaya", location: "Sinar Jaya", price: "IDR 200.000" },
      { image: "/bus3.webp", title: "Pontianak ke Samarinda", location: "Nusantara", price: "IDR 300.000" },
      { image: "/bus4.webp", title: "Jakarta ke Jogja", location: "Rosalia Indah", price: "IDR 250.000" },
      { image: "/bus5.webp", title: "Jakarta ke Semarang", location: "PO Haryanto", price: "IDR 220.000" },
      { image: "/bus6.webp", title: "Jakarta ke Surabaya", location: "Harapan Jaya", price: "IDR 350.000" },
      { image: "/bus1.webp", title: "Bali ke Lombok", location: "Gunung Harta", price: "IDR 180.000" },
      { image: "/bus2.webp", title: "Bandung ke Jogja", location: "Efisiensi", price: "IDR 270.000" },
      { image: "/bus3.webp", title: "Jakarta ke Malang", location: "Pandawa 87", price: "IDR 400.000" },
      { image: "/bus4.webp", title: "Balikpapan ke Samarinda", location: "Damri", price: "IDR 150.000" },
      { image: "/bus5.webp", title: "Jakarta ke Solo", location: "Rosalia Indah", price: "IDR 280.000" },
      { image: "/bus6.webp", title: "Jakarta ke Cirebon", location: "Primajasa", price: "IDR 140.000" },
      { image: "/bus1.webp", title: "Denpasar ke Gilimanuk", location: "Damri", price: "IDR 90.000" },
      { image: "/bus2.webp", title: "Bandung ke Jakarta", location: "Daytrans", price: "IDR 110.000" },
      { image: "/bus3.webp", title: "Jakarta ke Palembang", location: "SAN", price: "IDR 500.000" },
      { image: "/bus4.webp", title: "Pontianak ke Kuching", location: "Borneo Bus", price: "IDR 350.000" },
      { image: "/bus5.webp", title: "Jakarta ke Lampung", location: "Sinar Jaya", price: "IDR 200.000" },
      { image: "/bus6.webp", title: "Jakarta ke Tasikmalaya", location: "Budiman", price: "IDR 150.000" },
      { image: "/bus1.webp", title: "Bali ke Ubud", location: "Kura-Kura Bus", price: "IDR 80.000" },
      { image: "/bus2.webp", title: "Jakarta ke Purwokerto", location: "Efisiensi", price: "IDR 260.000" },
    ],
    
    villa: [
      { image: "/villa1.webp", title: "Private Pool Villa", location: "Bali", price: "IDR 2.500.000" },
      { image: "/villa2.webp", title: "Ocean View Villa", location: "Papua", price: "IDR 3.000.000" },
      { image: "/villa3.webp", title: "Forest Cabin", location: "Kalimantan", price: "IDR 1.200.000" },
      { image: "/villa4.webp", title: "Ubud Jungle Villa", location: "Bali", price: "IDR 2.000.000" },
      { image: "/villa5.webp", title: "Seminyak Luxury Villa", location: "Bali", price: "IDR 4.500.000" },
      { image: "/villa6.webp", title: "Canggu Surf Villa", location: "Bali", price: "IDR 2.200.000" },
      { image: "/villa7.webp", title: "Papua Beach Villa", location: "Papua", price: "IDR 3.200.000" },
      { image: "/villa8.webp", title: "Borneo River Villa", location: "Kalimantan", price: "IDR 1.500.000" },
      { image: "/villa9.webp", title: "Uluwatu Cliff Villa", location: "Bali", price: "IDR 3.800.000" },
      { image: "/villa10.webp", title: "Kuta Family Villa", location: "Bali", price: "IDR 1.800.000" },
      { image: "/villa11.webp", title: "Island Escape Villa", location: "Papua", price: "IDR 4.000.000" },
      { image: "/villa12.webp", title: "Luxury Honeymoon Villa", location: "Bali", price: "IDR 5.000.000" },
      { image: "/villa13.webp", title: "Rainforest Villa", location: "Kalimantan", price: "IDR 1.300.000" },
      { image: "/villa14.webp", title: "Nusa Dua Villa", location: "Bali", price: "IDR 2.700.000" },
      { image: "/villa15.webp", title: "Sanur Beach Villa", location: "Bali", price: "IDR 2.100.000" },
      { image: "/villa1.webp", title: "Lagoon Villa", location: "Papua", price: "IDR 3.600.000" },
      { image: "/villa2.webp", title: "Minimalist Villa Bali", location: "Bali", price: "IDR 1.900.000" },
      { image: "/villa3.webp", title: "Private Garden Villa", location: "Bali", price: "IDR 2.300.000" },
      { image: "/villa4.webp", title: "Eco Stay Cabin", location: "Kalimantan", price: "IDR 900.000" },
      { image: "/villa5.webp", title: "Sunset View Villa", location: "Bali", price: "IDR 2.800.000" },
    ],

    event: [
      { image: "/event1.webp", title: "Travel Fair 2026", location: "Jakarta", price: "Gratis" },
      { image: "/event2.webp", title: "Food Festival Bali", location: "Bali", price: "IDR 50.000" },
      { image: "/event3.webp", title: "Cultural Event Kalimantan", location: "Kalimantan", price: "IDR 30.000" },
      { image: "/event4.webp", title: "Jakarta Fashion Week", location: "Jakarta", price: "IDR 150.000" },
      { image: "/event5.webp", title: "Beach Carnival", location: "Bali", price: "IDR 100.000" },
      { image: "/event6.webp", title: "Startup Expo", location: "Jakarta", price: "IDR 75.000" },
      { image: "/event7.webp", title: "Dayak Festival", location: "Pontianak", price: "IDR 40.000" },
      { image: "/event8.webp", title: "Yoga Retreat Event", location: "Bali", price: "IDR 500.000" },
      { image: "/event9.webp", title: "Comic Con Jakarta", location: "Jakarta", price: "IDR 120.000" },
      { image: "/event10.webp", title: "Surf Competition", location: "Bali", price: "IDR 80.000" },
      { image: "/event11.webp", title: "Education Expo", location: "Jakarta", price: "Gratis" },
      { image: "/event12.webp", title: "Forest Adventure Event", location: "Kalimantan", price: "IDR 60.000" },
      { image: "/event13.webp", title: "Art Festival Bali", location: "Bali", price: "IDR 70.000" },
      { image: "/event14.webp", title: "Tech Conference", location: "Jakarta", price: "IDR 200.000" },
      { image: "/event15.webp", title: "Beach Run Event", location: "Bali", price: "IDR 90.000" },
      { image: "/konser1.webp", title: "Food Bazaar", location: "Jakarta", price: "Gratis" },
      { image: "/konser2.webp", title: "Cultural Parade", location: "Kalimantan", price: "IDR 50.000" },
      { image: "/konser3.webp", title: "Island Festival", location: "Bali", price: "IDR 120.000" },
      { image: "/konser4.webp", title: "Business Summit", location: "Jakarta", price: "IDR 300.000" },
      { image: "/konser5.webp", title: "Sunset Gathering", location: "Bali", price: "IDR 60.000" },
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