import React from "react";
import ButtonChild from "./components/Button";
import "./styles/components/images.css";
import logo from "./images/logo.png";

const ChildDone: React.FC = () => {
  return (
    <div className="ChildDone">
      <main>
        <h1 className="logo">
          <img src={logo} alt="taberu" />
        </h1>
        <p className="text_chDone">
          Happy enjoy
          <br />
          yummy yummy time!
        </p>
        <div className="btnArea_chDone">
          <ButtonChild link="/ChildMain" text={"Next"} />
          <ButtonChild link="/ChildMenu" text={"Done"} />
        </div>
      </main>
      <p className="gobackBtn_chMenu">
        <a href="./OwnerMatchFamily">Go back to Owner page</a>
      </p>
    </div>
  );
};

export default ChildDone;
