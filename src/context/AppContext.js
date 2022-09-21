import React, { useState, useContext, useEffect } from "react";
import { useFetch } from "../custom_hooks/useFetch";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const { isLoading, projectsTop, projectsBasic, projectsBasicSorted } =
    useFetch();

  return (
    <AppContext.Provider
      value={{ isLoading, projectsTop, projectsBasic, projectsBasicSorted }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
