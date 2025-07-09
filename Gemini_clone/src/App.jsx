import React from "react";
import Main from "./components/Main/Main";
import Sidebar from "./components/Sidebar/Sidebar";
import { ContextProvider } from "./context/Context";

const App = () => {
  console.log("ssss");
  return (
    <div className="app">
      <Sidebar />
      <Main />
    </div>
  );
};

export default App;
