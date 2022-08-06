import React from "react";
import "./App.css";
import dummy from "./images/dummy.png";

function OwnerRecipe() {
  return (
    <div className="OwnerRecipe">
      <h1>taberu</h1>
      <main>
        <img src={dummy} alt="" />
        <p>Put the menu</p>
      </main>
    </div>
  );
}

export default OwnerRecipe;
