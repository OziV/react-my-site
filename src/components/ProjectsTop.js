import React from "react";
import { useTitle } from "../custom_hooks/useTitle";
import { text_title } from "../data/dataText";
import CardItem from "../card/CardItem";
import Loader from "../misc/Loader";
import { CgSandClock } from "react-icons/cg";

function ProjectsTop() {
  const { title } = useTitle(text_title[1].name);

  const GetIcon = () => {
    return (
      <span className="icon-large-center">
        <CgSandClock />
      </span>
    );
  };

  const GetData = () => {
    // if (loading) {
    //   return <Loader />;
    // } else {
    //   return <CardItem data={data} />;
    // }
  };

  return (
    <section className="section">
      {title}
      <GetData />
      <GetIcon />
    </section>
  );
}

export default ProjectsTop;
