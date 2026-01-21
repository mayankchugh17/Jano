import Image from "next/image";

export default function Design() {
  return (
    <>
      <section className="relative flex bg-[#fafafa] h-280">
        <Image
          className="absolute left-10"
          src="/fl1.png"
          alt="photo1"
          width={550}
          height={550}
        />
        <Image
          className="absolute mt-60 ml-200"
          src="/J.svg"
          alt="photo2"
          width={80}
          height={80}
        />
        <Image
          className="absolute right-10"
          src="/fl2.png"
          alt="photo2"
          width={550}
          height={550}
        />
        <Image
          className="absolute mt-110"
          src="/blur.svg"
          alt="photo1"
          width={200}
          height={200}
        />

        <div className="mt-80 mx-auto py-40 text-center">
          <h1 className="text-7xl font-semibold">
            Let's rock with our unique <br /> & creative design.
          </h1>
          <p className="text-gray-500 mt-10 text-2xl">
            We create this design with love and care to assure our <br />{" "}
            customer to get everything for start
          </p>
          <button className="w-50 h-13 rounded-4xl bg-black mt-5 mt-10 text-[20px] text-white py-2 hover:bg-pink-500 transition duration-500 cursor-pointer">
            Purchase Now
          </button>
        </div>

        <Image
          className="absolute top-170"
          src="/fl3.png"
          alt="photo2"
          width={550}
          height={550}
        />

        <Image
          className="absolute top-170 right-10"
          src="/fl4.png"
          alt="photo2"
          width={550}
          height={550}
        />
        <Image
          className="absolute top-250 right-150"
          src="/shape_19.svg"
          alt="photo2"
          width={350}
          height={350}
        />
      </section>
    </>
  );
}
