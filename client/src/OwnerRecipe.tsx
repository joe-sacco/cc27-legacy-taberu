import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import dummy from "./images/dummy.png";

const DB_URL = process.env.ENVIRONMENT ? "https://taberu-server.herokuapp.com" : "http://localhost:8080";

const OwnerRecipe: React.FC = () => {
  const [allRecipes, setAllRecipes] = useState<{id: number, name: string}[]>([],);
  useEffect(() => {
    axios
      .get(`${DB_URL}/recipe`)
      .then((res) => {
        if (res.data.length > allRecipes.length) {
          let lastIndex = allRecipes.length;
          setAllRecipes(prevRecipe => [...prevRecipe, res.data[lastIndex]]);
        }
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }, [allRecipes]);

  return (
    <div className="OwnerRecipe">
      <h1>taberu</h1>
      <main>
        <img src={dummy} alt="" />
        <h2>All Recipes Out There</h2>
        {allRecipes.reverse().map(recipe => {
          return (
            <div key={recipe.id}>
              <p>{recipe.name}</p>
            </div>
          )
        })}
      </main>
    </div>
  );
}

export default OwnerRecipe;
