import Image from "next/image";

export default function Hero() {
  return (
    <div className="w-screen h-screen ">
      <h1 className="text-center text-8xl font-semibold">
        <span className="mt-6">Creative Multipurpose</span>
        <br /> <span className="mt-8">Next Js Template.</span>
      </h1>
      <br />
      <br />
      <div className="text-center flex justify-center">
        <div className="mr-25">
          <span className="font-semibold text-8xl">13</span>
          <p className="text-2xl">Demo</p>
        </div>
        <div>
          <span className="font-semibold text-8xl">51+</span>
          <p className="text-2xl ">Inner Pages</p>
        </div>
      </div>
      <Image src="/background.png" height={500} width={400} alt="bg" className="w-screen" />
    </div>
  );
}
