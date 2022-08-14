import React, { useState } from "react";
import { text_title } from "../data/dataText";
import CardItem from "../card/CardItem";
import Loader from "../misc/Loader";
import { CgSandClock } from "react-icons/cg";

function ProjectsTop() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const GetTitle = () => {
    const title = text_title[1].name;
    return (
      <div>
        <h1>{title}</h1>
        <div className="underline"></div>
      </div>
    );
  };

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
      <GetTitle />
      <GetData />
      <GetIcon />
    </section>
  );
}

export default ProjectsTop;
