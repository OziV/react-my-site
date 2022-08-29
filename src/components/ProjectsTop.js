import React from "react";
import { useTitle } from "../custom_hooks/useTitle";
import { useFetch } from "../custom_hooks/useFetch";
import { text_title } from "../data/dataText";
import CardItem from "../card/CardItem";
import Loader from "../misc/Loader";
import { CgSandClock } from "react-icons/cg";

function ProjectsTop() {
  const { dataSorted, loading } = useFetch(
    process.env.REACT_APP_TOP_PROJECTS_URL
  );
  const { title } = useTitle(text_title[1].name);

  const GetIcon = () => {
    return (
      <span className="icon-large-center">
        <CgSandClock />
      </span>
    );
  };

  const GetData = () => {
    if (loading) {
      return <Loader />;
    } else {
      return <CardItem dataSorted={dataSorted} />;
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
