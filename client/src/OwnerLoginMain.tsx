import React from "react";
import ButtonChild from "./components/Button";
import "./App.css";

function OwnerLoginMain() {
  return (
    <div className="OwnerLoginMain">
      <main>
        <div className="text_owLoginMain">
          <h2>Welcome to Taberu!!</h2>
        </div>
        <nav className="navi_owLoginMain">
          <ButtonChild link={"/OwnerFamily"} text={"Family"} />
          <ButtonChild link={"/OwnerRecipe"} text={"Recipes"} />
          <ButtonChild link={"/ChildMain"} text={"Menu To Review"} />
        </nav>
      </main>
    </div>
  );
}

export default OwnerLoginMain;
