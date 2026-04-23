import Hero from "../components/Hero";
import Section from "../components/Section";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />

      <Section title="Tiket Pesawat" type="flight" />
      <Section title="Hotel" type="hotel" />
      <Section title="Konser" type="konser" />
      <Section title="Bus & Travel" type="bus" />
      <Section title="Villa & Staycation" type="villa" />
      <Section title="Event & Hiburan" type="event" />

      <Footer />
    </>
  );
}