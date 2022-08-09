import React from "react";
import "../styles/components/Header.css";
import logoHeader from "../images/logo-header.png";
import Menu from "./Menu";

function Header() {
  return (
    <div className="App-header">
      <Menu />
      <header className="header">
        <h1 className="logo">
          <img src={logoHeader} alt="taberu" />
        </h1>
      </header>
    </div>
  );
}

export default Header;
