import React, { useState, useEffect } from "react";
import uuid from "react-uuid";
import { text_title } from "../data/dataText";
import { GrProjects } from "react-icons/gr";
import CardItem from "../card/CardItem";
import DataList from "../data/DataList";
import Loader from "../misc/Loader";

function Projects() {
  const [data, setData] = useState(DataList);
  const [loading, setLoading] = useState(true);

  // const dataSortByRating = () => {
  //   data.sort((a, b) => {
  //     return b.rating - a.rating;
  //   });
  //   setLoading(false);
  //   return;
  // };

  const dataShuffle = () => {
    data.sort((a, b) => 0.5 - Math.random());
    setLoading(false);
    return;
  };

  const GetTitle = () => {
    const title = text_title[2].name;
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
        <GrProjects className="icon-background" />
      </span>
    );
  };

  const GetData = () => {
    if (loading) {
      return <Loader />;
    } else {
      return <CardItem data={data} key={uuid()} />;
    }
  };

  useEffect(() => {
    dataShuffle();
  }, [data]);

  return (
    <section className="section">
      <GetTitle />
      <GetData />
      <GetIcon />
    </section>
  );
}

export default Projects;
