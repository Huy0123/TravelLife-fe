"use client";
import Hero from "@/components/hero";
import Carousel from "@/components/carousel";
import { slides } from "@/constants/dropdownOptions";
import Image from "next/image";

export default function Home() {
  // Statistics data
  const stats = [
    {
      number: "20+",
      label: "Years Experience",
      color: "text-orange-500"
    },
    {
      number: "100+",
      label: "Happy Customer",
      color: "text-orange-500"
    },
    {
      number: "15+",
      label: "Choice of Services",
      color: "text-orange-500"
    },
    {
      number: "10+",
      label: "Professional Guides",
      color: "text-orange-500"
    }
  ];

  return (
    <>
      <main>
        <Hero />
        <Carousel
          title="Explore Our Popular Destinations"
          slides={slides}
          slidesPerView={4}
        />
        <section className="relative mt-16">
          <div className="max-w-screen-xl mx-auto px-4 flex flex-col-2 justify-between items-center">
            <Image className="mx-14" src="/about picture.png" alt="About us" width={450} height={650} />
            <article className="mt-4 max-w-2xl">
              <span className="font-semibold text-[#333333] opacity-60" > WELCOME TO OUR SITE!</span>
              <h3 className="font-extrabold text-3xl">We are the best company for your visit</h3>
              <p className=" text-gray-600 leading-8">After decades of experience, and a whole life in Lucca, we offer you the most complete tourism service in the city. In addition to having bikes and rickshaws to have as much fun as you want, you have the choice of tour guides with whom to tour and drivers for your every need! We offer packages in the way that you get the most at the lowest price. Book with us and we will always be available for you!</p>
              <div className="grid grid-cols-4 gap-6 mt-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className={`text-3xl font-bold ${stat.color} mb-2`}>
                      {stat.number}
                    </div>
                    <div className="text-gray-600 text-sm font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </article>

          </div>
        </section>

        <section className="relative mt-16 mb-16">
            <div className="w-full h-[450px] bg-orange-300 flex justify-between">
                <div>

                </div>
                <div>
                </div>
            </div>
        </section>
      </main>

    </>
  );
}
