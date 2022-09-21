import { useState, useEffect } from "react";
import axios from "axios";

export const useFetch = (url = "/db/repos.json") => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [dataSorted, setDataSorted] = useState([]);
  const [projectsTop, setProjectsTop] = useState([]);
  const [projectsBasic, setProjectsBasic] = useState([]);
  const [projectsBasicSorted, setProjectsBasicSorted] = useState();

  const getData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(url);
      const newData = await response.data;
      setData(newData);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const dataSortByRating = () => {
    for (let project of data) {
      if (project.open_issues_count >= 2) {
        setProjectsTop((projectsTop) => [...projectsTop, project]);
      } else {
        setProjectsBasic((projectsBasic) => [...projectsBasic, project]);
      }
    }
    return;
  };

  useEffect(() => {
    let newList = projectsBasic.sort(function (a, b) {
      return new Date(b.created_at) - new Date(a.created_at);
    });
    setProjectsBasicSorted(newList);
  }, [projectsBasic]);

  // const dataShuffle = () => {
  //   setLoading(true);
  //   const randomSort = [...data].sort((a, b) => 0.5 - Math.random());
  //   setDataSorted(randomSort);
  //   setLoading(false);
  //   return;
  // };

  // const dataSortByRating = () => {
  //   data.sort((a, b) => {
  //     return b.rating - a.rating;
  //   });
  //   setLoading(false);
  //   return;
  // };

  useEffect(() => {
    dataSortByRating();
  }, [data]);

  useEffect(() => {
    getData();
  }, [url]);

  return { isLoading, projectsTop, projectsBasic, projectsBasicSorted };
};
