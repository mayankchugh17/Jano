import Image from "next/image";

export default function Demo2() {
  return (
    <>
      <section className="flex flex-row container justify-evenly m-auto p-auto mt-50 h-190">
        <div className="space-evenly">
          <h2 className="text-pink-400 text-xl">CHOOSE YOUR PATH</h2>
          <h1 className="font-semibold text-8xl">
            Fast Loading <br />
            Time & Super <br /> smooth.
          </h1>
          <br />
          <p className="text-2xl text-black-100 p-4 m-3 mx-1 my-9 ">
            Jano is optimized to be fast & highly performant by having a <br />good
            structure and well-written code. Purchase Now
          </p>
          <button className=" px-10 text-xl bg-[#000] text-white rounded-full py-3">Purchase Now</button>
        </div>
        <div><Image src="demo_2.svg" alt="img" height={600} width={700} /></div>
      </section>
    </>
  );
}
