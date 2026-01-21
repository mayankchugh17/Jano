import { Logs, Settings } from "lucide-react";

export default function Demo() {
  return (
    <div id="demo" className="text-center mt-90 py-25 bg-white">
      <h1 className="relative font-semibold text-7xl inline-block md:text-6xl mt-5">
        Find Everything you Need <br /> for your Start.
        
      <span className="absolute top-30 right-40 h-1 w-38 bg-pink-500"></span>
      </h1>

      <div className="grid grid-cols-3 gap-4 space-between mt-18 items-center">
        <div className="">
          <span className="ml-6"><Logs height={100} /></span>
          <h2 className="font-semibold text-2xl">
            Useful Pre-made UI <br/> Elements and Templates.
          </h2>
        </div>
        <div>
          <span className="ml-6"><Settings height={100} /></span>
          <h2 className="font-semibold text-2xl">
            Expert Ready to Provide you <br /> Quick Support
          </h2>
        </div>
        <div>
          <span className="ml-6"><Logs height={100} /></span>
          <h2 className="font-semibold text-2xl">
            Number of Possibilities for <br /> Creating any Website.
          </h2>
        </div>
      </div>
    </div>
  );
}
