import Image from "next/image";
import React from "react";
import Lolo from "../public/Lolo.png";

const property = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-20'/>
          <Image className="absolute z-10" layout="fill" objectFit="cover" src={Lolo} priority='true' alt="/" />
          <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-[#f5eded] z-20 p-2'>
          <h2 className='py-2'>Property Finders</h2>
          <h3>React JS / Tailwind / Firebase</h3>
        </div>
      </div>
    </div>
  );
};

export default property;
