"use client";
import Image from "next/image";
import { featuresCards } from "../utils/featuresCards";

export default function Features() {
  return (
    <>
      <section className="relative mt-35 h-200 m-25 bg-white">
        <h1 className="text-7xl font-semibold text-center">Core Features</h1>
        <Image
          className="absolute left-1 top-1"
          src="/shape_19.svg"
          alt="photo2"
          width={350}
          height={350}
        />
        <div className="mt-5 grid grid-cols-5 h-60">
          {/* Cards */}
          {featuresCards.map((card, key) => {
            return (
              <div
                key={key}
                className="border text-center border-gray-300 rounded-[50px] m-8 p-10 justify-center hover:border-none hover:bg-[#fafafa] "
              >
                <Image
                  src={card.img}
                  width={60}
                  className="ml-11"
                  height={60}
                  alt={card.alt}
                />
                <h2 className="text-[20px] font-bold mt-11 pb-1">
                  {card.description}
                </h2>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
