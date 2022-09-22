import React, { useEffect, useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { useTitle } from "../custom_hooks/useTitle";
import { text_title } from "../data/dataText";
import Loader from "../misc/Loader";
import ProjectsContainer from "./projects/ProjectsContainer";
import { GrProjects } from "react-icons/gr";

function Projects() {
  const { isLoading, projectsBasic, projectsBasicSorted } =
    useContext(AppContext);
  const { title } = useTitle(text_title[2].name);

  const GetIcon = () => {
    return (
      <span className="icon-large-center icon-margin-bottom">
        <GrProjects className="icon-background" />
      </span>
    );
  };

  const GetData = () => {
    if (isLoading) {
      return <Loader />;
    } else {
      return <ProjectsContainer projectsList={projectsBasic} />;
    }
  };

  return (
    <section className="section background-projects">
      <div className="title">{title}</div>
      <GetData />
      <GetIcon />
    </section>
  );
}

export default Projects;
