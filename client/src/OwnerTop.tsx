import React from "react";
import ButtonChild from "./components/Button";
import "./App.css";
import bg_top from "./images/bg_top.png";
import logo from "./images/logo.png";

function OwnerLogin() {
  return (
    <div className="OwnerLogin">
      <main>
        <h1 className="logo">
          <img src={logo} alt="taberu" />
        </h1>
        <p className="image_top">
          <img src={bg_top} alt="taberu" />
        </p>
      </main>
      <div className="btuArea_top">
        <ButtonChild link={"/OwnerLogin"} text={"Login"} />
        <ButtonChild link={"/OwnerRegist"} text={"Register"} />
      </div>
    </div>
  );
}

export default OwnerLogin;
