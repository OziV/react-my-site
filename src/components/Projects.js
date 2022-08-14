import React, { useState, useEffect } from "react";
import uuid from "react-uuid";
import { text_title } from "../data/dataText";
import CardItem from "../card/CardItem";
import Loader from "../misc/Loader";
import { GrProjects } from "react-icons/gr";

function Projects() {
  const [data, setData] = useState([]);
  const [dataSorted, setDataSorted] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await fetch(process.env.REACT_APP_PROJECTS_URL);
      const newData = await response.json();
      setData(newData);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      throw new Error(e);
    }
  };

  // const dataSortByRating = () => {
  //   data.sort((a, b) => {
  //     return b.rating - a.rating;
  //   });
  //   setLoading(false);
  //   return;
  // };

  const dataShuffle = () => {
    const randomSort = data.sort((a, b) => 0.5 - Math.random());
    setDataSorted(randomSort);
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
      return <CardItem dataSorted={dataSorted} key={uuid()} />;
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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
