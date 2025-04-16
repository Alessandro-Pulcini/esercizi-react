import React from "react";
import "./conad.css";

const Conad = () => {
  return (
    <div className="conad">
      <form>
        <div className="first-row">
          <label htmlFor="name"></label>
          <input className="nome" type="text" placeholder="Nome" />
          <label htmlFor="name"></label>
          <input className="cognome" type="text" placeholder="Cognome" />
        </div>
        <br />
        <div className="second-row">
          <label htmlFor="email"></label>
          <input className="email" type="email" placeholder="Indirizzo Email" />
          <br />
          <label htmlFor="email"></label>
          <input
            className="conferma-email"
            type="email"
            placeholder="Conferma indrizzo Email"
          />
        </div>
        <br />
        <div className="third-row">
          <label htmlFor="pwd"></label>
          <input className="password" type="password" placeholder="Password" />
          <br />
          <label htmlFor="pwd"></label>
          <input
            className="conferma-password"
            type="password"
            placeholder="Conferma password"
          />
          <br />
          <input className="submit" type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
};

export default Conad;
