import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { useTitle } from "../custom_hooks/useTitle";
import { text_title } from "../data/dataText";
import Loader from "../misc/Loader";
import ProjectsContainer from "./projects/ProjectsContainer";

const ProjectsTop = () => {
  const { isLoading, projectsTop } = useContext(AppContext);
  const { title } = useTitle(text_title[1].name);

  const GetData = () => {
    if (isLoading) {
      return <Loader />;
    } else {
      return <ProjectsContainer projectsList={projectsTop} />;
    }
  };

  return (
    <section className="section">
      {title}
      <GetData />
    </section>
  );
};

export default ProjectsTop;
