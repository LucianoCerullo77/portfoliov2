import React from "react";

const index = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#ab1c1c]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600"> These are some things about me </p>
          <p className="py-2 text-gray-500">
            I am a FrontEnd ReactJs Developer based in Argentina. I have a
            passion for learning new technologies and I am always looking for
            more. I've started learning about web development 1
            year ago and now im looking for a Job as FrontEnd Developer.
          </p>
          <p className="py-2 text-gray-500">
            Most of the time I'm looking for new experiences, since I've worked
            with teams, it made my way as Developer much easier and after being
            making my own projects, I've preffer joining a team to work hand to
            hand with them.
          </p>
          <p className="py-2 text-gray-500">
            Most of the my hobbies are listening to music (Arctic Monkeys, The
            Neighbourhood and Imagine Dragons are some of my favourite),
            watching movies (I love Interestellar and SuperHero's movies) and
            take pictures (even if I don't know how), also I'm a fan of Coffe (Like every programmer).
          </p>
          <p className="py-2 text-gray-600 underline cursor-pointer">
            Checkout some of my latest projects
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-600 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <img
            className="rounded-xl"
            src="https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
            alt="image"
          />
        </div>
      </div>
    </div>
  );
};

export default index;
