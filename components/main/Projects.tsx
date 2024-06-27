import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20 relative"
      id="projects"
      style={{ pointerEvents: "auto" }}
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500 py-20">
        Projects I took part in
      </h1>
      <div className="text-[20px] font-medium text-center text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500 py-10 mx-10 md:mx-20 lg:mx-40">
        Here are some of the Projects I've been a part of. We call it Project-based testing, or, dogfooding. Using all the newly created and available tools at Unity we try and create unpolished Projects that aim to test out the newly added features and ensure that the golden path for these features is bug free and user friendly.
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-10">
        <ProjectCard
          videoSrc="https://www.youtube.com/embed/4kTxiRssuGE"
          title="Project Magic Potion"
          description="A 2D Universal Render Pipeline project optimised for Mobile"
        />
        <ProjectCard
          videoSrc="https://www.youtube.com/embed/uuRdDZzeo5Y"
          title="Project Wired"
          description="A 3D HDRP Project - visual experience"
        />
        <ProjectCard
          videoSrc="https://www.youtube.com/embed/cZDgbdzubJ8"
          title="Project Nightwalker"
          description="A 3D HDRP Project focusing on testing most of Unity's Visual tools"
        />
      </div>
    </div>
  );
};

export default Projects;
