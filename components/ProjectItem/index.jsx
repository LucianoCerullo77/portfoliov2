import React from "react";
import Image from "next/image";
import Link from "next/link";

const index = ({ title, backgroundImg, technologies, projectURL }) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl rounded-xl group hover:bg-gradient-to-r from-[#d72323] to-[#ab1c1c]">
      <Image
        className="rounded-xl group-hover:opacity-10"
        src={backgroundImg}
        loading="lazy"
        quality={50}
        alt={title}
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl text-white tracking-wider text-center">
          {title}
        </h3>
        <p className="pb-2 pt-2 text-white text-center">{technologies}</p>
        <Link href={projectURL}>
          <p className="text-center py-2 rounded-lg bg-[#f5eded] text-gray-700 font-bold text-lg cursor-pointer">
            More Info
          </p>
        </Link>
      </div>
    </div>
  );
};

export default index;
