import React from "react";
import "./conad.css";
import conadLogo from "../../assets/conad.png";

const ConadNavbar = () => {
  return (
    <div className="navbar">
      <img className="logo" src={conadLogo} alt="conad logo" />
      <hr className="linea" />
    </div>
  );
};

export default ConadNavbar;
