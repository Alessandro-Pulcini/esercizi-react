import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Conad from "./components/conadComponents/Conad";
import "./components/conadComponents/conad.css";
import ConadNavbar from "./components/conadComponents/ConadNavbar";

function App() {
  return (
    <div className="App">
      <ConadNavbar />
      <Conad />
    </div>
  );
}

export default App;
