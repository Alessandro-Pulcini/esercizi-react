import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ConadForm from "./components/conadComponents/ConadForm";
import "./components/conadComponents/conad.css";
import ConadNavbar from "./components/conadComponents/ConadNavbar";

function App() {
  return (
    <div className="App">
      <ConadNavbar />
      <ConadForm />
    </div>
  );
}

export default App;
