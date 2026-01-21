import Image from "next/image";

export default function Design() {
  return (
    <>
      <section className="relative flex bg-[#fafafa] h-350">
        <Image
          className="absolute left-10"
          src="/fl1.png"
          alt="photo1"
          width={550}
          height={550}
        />
        <Image
          className="absolute mt-80 ml-200"
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

        <div className="mt-130 mx-auto py-40 text-center">
          <h1 className="text-7xl font-semibold">
            Let's rock with our unique <br /> & creative design.
          </h1>
          <p className="text-gray-500 mt-10 text-2xl">
            We create this design with love and care to assure our <br /> customer to
            get everything for start
          </p>
          <button className="w-50 h-13 rounded-4xl bg-black mt-5 mt-10 text-[20px] text-white py-2">Purchase Now</button>
        </div>

        <Image
          className="absolute top-250 mt-1"
          src="/fl3.png"
          alt="photo2"
          width={550}
          height={550}
        />

        <Image
          className="absolute top-250 right-10 mt-1"
          src="/fl4.png"
          alt="photo2"
          width={550}
          height={550}
        />
      </section>
    </>
  );
}
