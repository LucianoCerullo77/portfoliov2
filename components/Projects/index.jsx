import React from "react";
import Lolo from "../../public/Lolo.png";
import Fennex from "../../public/Fennex.png";
import Olivia from "../../public/Olivia.png";
import CabinnInn from "../../public/CabinnInn.png";
import ProjectItem from "../ProjectItem";

const index = () => {
  return (
    <div className="w-full ">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#ab1c1c]">
          Projects
        </p>
        <h2 className="py-4">What I've Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="LoloStore"
            backgroundImg={Lolo}
            technologies="HTML - CSS"
            projectURL="/Lolo"
          />
          <ProjectItem
            title="Fennex"
            backgroundImg={Fennex}
            technologies="Advanced ReactJs "
            projectURL="/Fennex"
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
        </div>
      </div>
    </div>
  );
};

export default index;
