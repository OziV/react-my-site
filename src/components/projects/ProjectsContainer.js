import React from "react";
import Project from "./Project";

const ProjectsContainer = ({ projectsList }) => {
  return (
    <div className="cards-container">
      {projectsList.map((project) => {
        const { id } = project;
        return <Project key={id} {...project} />;
      })}
    </div>
  );
};

export default ProjectsContainer;
