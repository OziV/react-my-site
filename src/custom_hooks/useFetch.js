import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [dataSorted, setDataSorted] = useState([]);

  const getData = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const newData = await response.json();
      setData(newData);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      throw new Error(e);
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
