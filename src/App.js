import React from "react";
import { text_personal } from "./data/dataText";
import Home from "./Home";

function App() {
  const firstName = text_personal[0].info;
  const lastName = text_personal[1].info;

  document.title = `${firstName} ${lastName}`;

  return <Home />;
}

export default App;
