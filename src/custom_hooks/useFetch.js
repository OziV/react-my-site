import { useState, useEffect } from "react";
import axios from "axios";

export const useFetch = (url) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [dataSorted, setDataSorted] = useState([]);

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

  // useEffect(() => {
  //   dataShuffle();
  // }, [data]);

  useEffect(() => {
    getData();
  }, [url]);

  return { isLoading, data, dataSorted };
};
