import Image from "next/image";

export default function Marketing() {
  return (
    <>
      <section className="bg-[#1d1d1d] flex pt-15 h-250 items-center gap-4">
        <Image src="/screen_02.png" alt="photo" height={600} width={900} />
        <article className="px-35">
          <h1 className="text-8xl text-pink-500 font-semibold">51+</h1>
          <h1 className="text-[75px] text-white font-semibold">
            Pre-Made inner <br /> Pages ready.
          </h1>
          <p className="mt-8 text-2xl text-white">
            We create beautiful & stunning pre-made Inner pages and <br />{" "}
            <span className="font-bold">UI component</span> for make your rwork
            easy.
          </p>
          <button className="bg-pink-500 mt-10 px-12 text-white font-semibold text-2xl pb-4 py-3 rounded-full hover:bg-black transition duration-300 cursor-pointer">
            Explore
          </button>
        </article>
      </section>
    </>
  );
}
