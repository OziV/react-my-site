import { useState, useEffect } from "react";

export const useTitle = (text_title) => {
  const [title, setTitle] = useState();

  const getTitle = () => {
    setTitle(
      <div>
        <h1>{text_title}</h1>
        <div className="underline"></div>
      </div>
    );
  };

  useEffect(() => {
    getTitle();
  }, [text_title]);

  return { title };
};
