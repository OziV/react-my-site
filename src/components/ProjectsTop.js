import React, { useEffect } from "react";
import { useTitle } from "../custom_hooks/useTitle";
import { useFetch } from "../custom_hooks/useFetch";
import { text_title } from "../data/dataText";
import CardItem from "../card/CardItem";
import Loader from "../misc/Loader";
import { CgSandClock } from "react-icons/cg";
import ProjectsContainer from "./projects/ProjectsContainer";

function ProjectsTop() {
  // const { data, isLoading } = useFetch(process.env.REACT_APP_GITHUB_API_TEST);
  const { data, isLoading } = useFetch("/db/repos.json");

  const { title } = useTitle(text_title[1].name);

  const GetIcon = () => {
    return (
      <span className="icon-large-center">
        <CgSandClock />
      </span>
    );
  };

  const GetData = () => {
    if (isLoading) {
      return <Loader />;
    } else {
      // return <CardItem dataSorted={data} />;
      return <ProjectsContainer projectsList={data} />;
    }
  };

  return (
    <section className="section">
      {title}
      <GetData />
      {/* <GetIcon /> */}
    </section>
  );
}

export default ProjectsTop;
