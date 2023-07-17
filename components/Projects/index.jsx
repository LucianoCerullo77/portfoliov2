import CabinnInn from "../../public/CabinnInn.png";
import Countdown from "../../public/countdown.png";
import CountryApp from "../../public/Countryapp.png";
import DadJokes from "../../public/dadjokes.png";
import EnglishDictionary from "../../public/englishdictionary.png";
import Fennex from "../../public/Fennex.png";
import GifsApp from "../../public/Gifsapp.png";
import HomeHero from "../../public/HomeHero.png";
import Lolo from "../../public/Lolo.png";
import Olivia from "../../public/Olivia.png";
import Programa from "../../public/Programa.png";
import ProjectItem from "../ProjectItem";
import React from "react";
import ReactToDo from "../../public/reacttodo.png";
import WeatherApp from "../../public/weatherapp.png";
import YoutubeClone from "../../public/Youtube-clone.png";

const index = () => {
  return (
    <div id="projects" className="w-full ">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#ab1c1c]">
          Projects
        </p>
        <h2 className="py-4">What I've Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="New Year Countdown"
            backgroundImg={Countdown}
            technologies="HTML - CSS - JS"
            projectURL="/Countdown"
          />
          <ProjectItem
            title="LoloStore"
            backgroundImg={Lolo}
            technologies="HTML - CSS"
            projectURL="/Lolo"
          />
          <ProjectItem
            title="Dad Jokes"
            backgroundImg={DadJokes}
            technologies="HTML - CSS - JS"
            projectURL="/DadJokes"
          />
          <ProjectItem
            title="English Dictionary"
            backgroundImg={EnglishDictionary}
            technologies="HTML - CSS - JS"
            projectURL="/EnglishDictionary"
          />
          <ProjectItem
            title="Fennex"
            backgroundImg={Fennex}
            technologies="Advanced ReactJs "
            projectURL="/Fennex"
          />
          <ProjectItem
            title="React To Do app"
            backgroundImg={ReactToDo}
            technologies="ReactJs"
            projectURL="/Todo"
          />
          <ProjectItem
            title="Sweet Olivia"
            backgroundImg={Olivia}
            technologies="ReactJs"
            projectURL="/Sweet-Olivia"
          />
          <ProjectItem
            title="CabinnInn"
            backgroundImg={CabinnInn}
            technologies="ReactJs"
            projectURL="/CabinnInn"
          />
          <ProjectItem
            title="Weather App - 2023"
            backgroundImg={WeatherApp}
            technologies="NextJs - TailWindCSS"
            projectURL="/WeatherApp"
          />
          <ProjectItem
            title="Youtube Clone"
            backgroundImg={YoutubeClone}
            technologies="ReactJs - Material UI"
            projectURL="/YoutubeClone"
          />
          <ProjectItem
            title="Pro-Grama"
            backgroundImg={Programa}
            technologies="ReactJs - Vite - TailWindCSS"
            projectURL="/Pro-grama"
          />
          <ProjectItem
            title="Home-Hero"
            backgroundImg={HomeHero}
            technologies="ReactJs - TypeScript - Vite - TailWindCSS - Redux"
            projectURL="/Home-Hero"
          />
          <ProjectItem
            title="Gifs-App"
            backgroundImg={GifsApp}
            technologies="Angular - TypeScript - Bootstrap"
            projectURL="/Gifs-app"
          />
          <ProjectItem
            title="Country-app"
            backgroundImg={CountryApp}
            technologies="Angular - TypeScript - Bootstrap"
            projectURL="/Country-app"
          />
        </div>
      </div>
    </div>
  );
};

export default index;
