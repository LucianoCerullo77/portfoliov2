import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BiDownload } from "react-icons/bi";

const index = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-500">
            Let's build something cool
          </p>
          <h1 className="py-4 text-gray-200">
            Hey, I'm <span className="text-[#D72323]">Luciano</span>
          </h1>
          <h1>
            A <span className="text-[#D72323]">Front-end</span> Developer
          </h1>
          <p className="py-4 text-gray-500 max-w-[70%] m-auto">
            I'm a Front-end ReactJs Developer specializing in building digital
            experiences. Currently im focused on building Front-end web
            applications while im learning Back-end technologies.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-200">
              <a
                href="https://www.linkedin.com/in/lucianocerullo77/"
                target="_blank"
              >
                <FaLinkedinIn />
              </a>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-200">
              <a href="https://github.com/LucianoCerullo77" target="_blank">
                <FaGithub />
              </a>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-200">
              <a
                href="/CV-Luciano-Cerullo-2023.pdf"
                alt="resume"
                rel="noopener noreferrer"
                download
              >
                <BiDownload />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
