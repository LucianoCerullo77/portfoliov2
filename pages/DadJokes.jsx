import Image from "next/image";
import React from "react";
import DadJokes from "../public/dadJokes.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const index = () => {
  return (
    <div className="w-full">
      <div className="w-full h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-20" />
        <Image
          className="absolute z-10"
          layout="fill"
          objectFit="cover"
          src={DadJokes}
          priority="true"
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-[#f5eded] z-20 p-2">
          <h2 className="py-2">Dad Jokes Generator</h2>
          <h3>HTML / CSS / JavaScript /</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Dad Jokes Generator</h2>
          <p className="py-2">
            This Project was maded because i was bored, the site is quite
            simple, you only click in the button and then a random joke will
            appear. This site works with the API "Dad Jokes" from API-Ninjas.
          </p>
          <button className="px-8 py-2 mt-4 mr-8">
            <a
              href="https://dadjokes-ivory.vercel.app"
              target="_blank"
              rel="noreferrer"
            >
              Demo
            </a>
          </button>
          <button className="px-8 py-2 mt-4 mr-8">
            <a
              href="https://github.com/LucianoCerullo77/dadjokes"
              target="_blank"
              rel="noreferrer"
            >
              Repository
            </a>
          </button>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-600 rounded-xl p-4">
          <div className="p-2">
            <p className="uppercase text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> HTML{" "}
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> CSS{" "}
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> JavaScript{" "}
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Git{" "}
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Github{" "}
              </p>
            </div>
          </div>
        </div>
        <Link href="/">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default index;
