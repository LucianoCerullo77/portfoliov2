import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BiDownload } from "react-icons/bi";

function index() {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#111111");
  const [linkColor, setLinkColor] = useState("#f5eded");
  const Router = useRouter();

  useEffect(() => {
    if (
      Router.asPath === "/Lolo" ||
      Router.asPath === "/Fennex" ||
      Router.asPath === "/Sweet-Olivia" ||
      Router.asPath === "/CabinnInn"
    ) {
      setNavBg("transparent");
      setLinkColor("#f5eded");
    } else {
      setNavBg("#111111");
      setLinkColor("#f5eded");
    }
  }, [Router]);

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 60) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? "fixed w-full h-20 shadow-sm z-[100] bg-[#111111]"
          : "fixed w-full h-20 z-[100]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link href="/">
          <p className="text-[#d72323] text-xl ml-4">
            Luciano Cerullo &lt;/&gt;
          </p>
        </Link>
        <div>
          <ul style={{ color: `${linkColor}` }} className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 text-sm uppercase hover:border-b">About</li>
            </Link>
            <Link href="/#skills">
              <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
            </Link>
            <Link href="/#projects">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Projects
              </li>
            </Link>
            <Link href="/#contact">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Contact
              </li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/40" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href="/">
                <p className="text-[#d72323] text-lg ">
                  Luciano Cerullo &lt;/&gt;
                </p>
              </Link>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose color="black" />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4 text-black">
              <p className=" w-[85%] md:w-[90%] py-4"> Hey! How are you? </p>
            </div>
          </div>
          <div>
            <div className="text-black py-4 flex flex-col">
              <ul className="uppercase">
                <Link href="/">
                  <li onClick={() => setNav(false)} className="py-4 text-sm">
                    Home
                  </li>
                </Link>
                <Link href="/#about">
                  <li onClick={() => setNav(false)} className="py-4 text-sm">
                    About
                  </li>
                </Link>
                <Link href="/#skills">
                  <li onClick={() => setNav(false)} className="py-4 text-sm">
                    Skills
                  </li>
                </Link>
                <Link href="/#projects">
                  <li onClick={() => setNav(false)} className="py-4 text-sm">
                    Projects
                  </li>
                </Link>
                <Link href="/#contact">
                  <li onClick={() => setNav(false)} className="py-4 text-sm">
                    Contact
                  </li>
                </Link>
              </ul>
              <div className="pt-10">
                <p className="uppercase tracking-widest text-[#D72323]">
                  Let's connect
                </p>
                <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                  <div className="rounded-full shadow-lg shadow-gray-600 p-3 cursor-pointer hover:scale-105 ease-in duration-200">
                    <a
                      href="https://www.linkedin.com/in/lucianocerullo77/"
                      target="_blank"
                    >
                      <FaLinkedinIn />
                    </a>
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-600 p-3 cursor-pointer hover:scale-105 ease-in duration-200">
                    <a
                      href="https://github.com/LucianoCerullo77"
                      target="_blank"
                    >
                      <FaGithub />
                    </a>
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-600 p-3 cursor-pointer hover:scale-105 ease-in duration-200">
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
        </div>
      </div>
    </div>
  );
}

export default index;
