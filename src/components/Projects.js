import React from "react";
import { useTitle } from "../custom_hooks/useTitle";
import { useFetch } from "../custom_hooks/useFetch";
import { text_title } from "../data/dataText";
import CardItem from "../card/CardItem";
import Loader from "../misc/Loader";
import { GrProjects } from "react-icons/gr";

function Projects() {
  const { data, loading } = useFetch(process.env.REACT_APP_PROJECTS_URL);
  const { title } = useTitle(text_title[2].name);

  const GetIcon = () => {
    return (
      <span className="icon-large-center">
        <GrProjects className="icon-background" />
      </span>
    );
  };

  const GetData = () => {
    if (loading) {
      return <Loader />;
    } else {
      return <CardItem dataSorted={data} />;
    }
  };

  return (
    <section className="section">
      {title}
      <GetData />
      <GetIcon />
    </section>
  );
}

export default Projects;
