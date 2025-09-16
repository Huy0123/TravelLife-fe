"use client";
import Hero from "@/components/hero";
import Footer from "@/components/footer";
import Carousel from "@/components/carousel";
import { slides } from "@/constants/dropdownOptions";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Carousel
          title="Explore Our Popular Destinations"
          slides={slides}
          slidesPerView={4}
        />
      </main>
      <Footer />
    </>
  );
}
