'use client';
import Image from "next/image";

// import { CardsData } from "../utils/cardsData";

export default function Cards() {
  return (
    <>
      <div className="container mx-auto my-1 pl-10 grid grid-cols-3 bg-gray-50 justify-center items-center">
        <div className="flex flex-col gap-4 center">
          <Image
            className="my-5 cursor-pointer hover:bg-[#FAFAFA] rounded-xl"
            src="/web_02.jpg"
            height={600}
            width={450}
            alt="page1"
            />
          <h2 className="font-semibold text-3xl">Insurance</h2>
          <p className="text-gray-500 text-xl">Business, Others</p>
        </div>
        <div className="flex flex-col gap-4 center">
          <Image
            className="my-5 cursor-pointer hover:bg-[#FAFAFA] rounded-xl"
            src="/web_03.jpg"
            height={600}
            width={450}
            alt="page1"
            />
          <h2 className="font-semibold text-3xl">Sass Product</h2>
          <p className="text-gray-500 text-xl">Landing, Creative</p>
        </div>

         <div className="flex flex-col gap-4 center">
          <Image
            className="my-5 cursor-pointer hover:bg-[#FAFAFA] rounded-xl"
            src="/web_04.jpg"
            height={600}
            width={450}
            alt="page1"
            />
          <h2 className="font-semibold text-3xl">Agency Modern</h2>
          <p className="text-gray-500 text-xl">Agency, Creative</p>
        </div>

         <div className="flex flex-col gap-4 center">
          <Image
            className="my-5 cursor-pointer hover:bg-[#FAFAFA] rounded-xl"
            src="/home_05.jpg"
            height={600}
            width={450}
            alt="page1"
            />
          <h2 className="font-semibold text-3xl">Web Hosting</h2>
          <p className="text-gray-500 text-xl">Business</p>
        </div>

         <div className="flex flex-col gap-4 center">
          <Image
            className="my-5 cursor-pointer hover:bg-[#FAFAFA] rounded-xl"
            src="/home_06.jpg"
            height={600}
            width={450}
            alt="page1"
            />
          <h2 className="font-semibold text-3xl">Mobile App Landing</h2>
          <p className="text-gray-500 text-xl">Landing, Creative</p>
        </div>

         <div className="flex flex-col gap-4 center">
          <Image
            className="my-5 cursor-pointer hover:bg-[#FAFAFA] rounded-xl"
            src="/home_07.jpg"
            height={600}
            width={450}
            alt="page1"
            />
          <h2 className="font-semibold text-3xl">Personal Portfolio</h2>
          <p className="text-gray-500 text-xl">Portfolio, Creative</p>
        </div>

         <div className="flex flex-col gap-4 center">
          <Image
            className="my-5 cursor-pointer hover:bg-[#FAFAFA] rounded-xl"
            src="/home_08.jpg"
            height={600}
            width={450}
            alt="page1"
            />
          <h2 className="font-semibold text-3xl">Real Estate</h2>
          <p className="text-gray-500 text-xl">Business</p>
        </div>

         <div className="flex flex-col gap-4 center">
          <Image
            className="my-5 cursor-pointer hover:bg-[#FAFAFA] rounded-xl"
            src="/home_09.jpg"
            height={600}
            width={450}
            alt="page1"
            />
          <h2 className="font-semibold text-3xl">Design Agency</h2>
          <p className="text-gray-500 text-xl">Agency, Creative</p>
        </div>

         <div className="flex flex-col gap-4 center">
          <Image
            className="my-5 cursor-pointer hover:bg-[#FAFAFA] rounded-xl"
            src="/home_10.jpg"
            height={600}
            width={450}
            alt="page1"
            />
          <h2 className="font-semibold text-3xl">Lead Generation</h2>
          <p className="text-gray-500 text-xl">Agency</p>
        </div>

         <div className="flex flex-col gap-4 center">
          <Image
            className="my-5 cursor-pointer hover:bg-[#FAFAFA] rounded-xl"
            src="/home_cs.jpg"
            height={600}
            width={450}
            alt="page1"
            />
        </div>

      {/* {CardsData.map((card, key) => {
        return (
          <div className="flex flex-col gap-4 center">
            <Image
              className="cursor-pointer hover:bg-[#FAFAFA] rounded-xl"
              src={card.src}
              height={600}
              width={400}
              alt="page1"
            />
            <h2 className="font-semibold text-3xl">{card.title}</h2>
            <p className="text-gray-500 text-xl">{card.description}</p>
          </div>
        );
      })} */}
      </div>
    </>
  );
}
