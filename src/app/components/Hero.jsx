import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative w-screen h-screen mt-25 ">
      <h1 className="text-center text-8xl font-semibold">
        <Image src="/shape_01.svg" alt="img" height={10} width={25} className="absolute left-60" />
        <Image src="/shape_02.svg" alt="img" height={10} width={25} className="absolute right-50" />
        <span className="mt-10 ">Creative Multipurpose</span>
        <span className="absolute top-23 right-245 w-95 h-1 bg-pink-500"></span>
        <br /> <span className="mt-9">Next Js Template.</span>
      </h1>
      <br />
      <br />
      
      <Image src="/shape_05.svg" alt="img" height={90} width={150} className="absolute left-35" />
      <Image src="/shape_03.svg" alt="img" height={90} width={100} className="absolute right-5" />
      <Image src="/shape_04.svg" alt="img" height={70} width={25} className="absolute right-90" />
    

      <div className="mt-20 text-center flex justify-center">
        <div className="mr-25">
          <span className="font-semibold text-8xl relative z-20">13</span>
          <p className="text-3xl relative z-20">Demo</p>
        </div>
        <div>
          <span className="font-semibold text-8xl relative z-20">51+</span>
          <p className="text-3xl relative z-20">Inner Pages</p>
        </div>
      </div>
      <Image src="/background.png" height={500} width={400} alt="bg" className="w-screen absolute top-60" />
    </div>
  );
}
