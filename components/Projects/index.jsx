import React from "react";
import Lolo from "../../public/Lolo.png";
import Fennex from "../../public/Fennex.png";
import Olivia from "../../public/Olivia.png";
import CabinnInn from "../../public/CabinnInn.png";
import ProjectItem from "../ProjectItem";

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
            title="LoloStore"
            backgroundImg={Lolo}
            technologies="HTML - CSS"
            projectURL="/property"
          />
          <ProjectItem
            title="Fennex"
            backgroundImg={Fennex}
            technologies="Advanced ReactJs "
            projectURL="/property"
          />
          <ProjectItem
            title="Sweet Olivia"
            backgroundImg={Olivia}
            technologies="ReactJs"
            projectURL="/property"
          />
          <ProjectItem
            title="CabinnInn"
            backgroundImg={CabinnInn}
            technologies="ReactJs"
            projectURL="/property"
          />
        </div>
      </div>
    </div>
  );
};

export default index;
