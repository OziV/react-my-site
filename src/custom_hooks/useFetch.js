import { useState, useEffect } from "react";
import axios from "axios";

export const useFetch = (url) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [dataSorted, setDataSorted] = useState([]);

  const getData = async () => {
    setLoading(true);
    try {
      const response = await axios(url, {
        headers: {
          Accept: "application/json",
          "X-ACCESS-KEY": process.env.REACT_APP_PROJECTS_X_ACCESS_KEY,
        },
      });
      const newData = response.data.record;
      setData(newData);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const dataShuffle = () => {
    setLoading(true);
    const randomSort = [...data].sort((a, b) => 0.5 - Math.random());
    setDataSorted(randomSort);
    setLoading(false);
    return;
  };

  // const dataSortByRating = () => {
  //   data.sort((a, b) => {
  //     return b.rating - a.rating;
  //   });
  //   setLoading(false);
  //   return;
  // };

  useEffect(() => {
    dataShuffle();
  }, [data]);

  useEffect(() => {
    getData();
  }, [url]);

  return { loading, data, dataSorted };
};
