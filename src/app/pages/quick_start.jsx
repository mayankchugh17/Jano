"use client";

import { useState } from "react";

export default function QuickStart() {
  const [click, setClick] = useState(false);

  const white = "bg-white-500";
  const black = "bg-black-500";

  // Active function
  function active() {
    setClick((prev) => !prev);
  }

  return (
    <>
      <section className="pt-30 bg-[#FAFAFA] text-center h-140 mb-3">
        <p className="text-pink-500 text-2xl mb-5">QUICK START</p>
        <h1 className="font-semibold text-7xl mb-3">
          13 Pre-Made Creative & <br /> Stunning Demo
        </h1>

        <div className="border-3 border-gray-700 rounded-2xl container mx-auto mt-19 mb-50 pb-7 ">
          <ul className="flex text-center cursor-pointer justify-center gap-50 text-2xl mt-5 p-auto items-center">
            <li
              className={click ? black : white}
              onClick={() => {
                active;
              }}
            >
              All
            </li>
            <li
              className={click ? black : white}
              onClick={() => {
                active;
              }}
            >
              Agency
            </li>
            <li
              className={click ? black : white}
              onClick={() => {
                active;
              }}
            >
              Creative
            </li>
            <li
              className={click ? black : white}
              onClick={() => {
                active;
              }}
            >
              Business
            </li>
            <li
              className={click ? black : white}
              onClick={() => {
                active;
              }}
            >
              Landing
            </li>
            <li
              className={click ? black : white}
              onClick={() => {
                active;
              }}
            >
              Others
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
