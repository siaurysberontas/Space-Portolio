import React from "react";

const ProjectCard = ({ videoSrc, title, description }) => {
  return (
    <div className="flex flex-col items-center p-4 relative" style={{ zIndex: 10 }}>
      <iframe
        width="560"
        height="315"
        src={videoSrc}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{ pointerEvents: "auto", zIndex: 20 }}
      ></iframe>
      <h2 className="text-xl font-bold mt-4">{title}</h2>
      <p className="text-gray-700 mt-2">{description}</p>
    </div>
  );
};

export default ProjectCard;
