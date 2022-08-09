import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import "./styles/components/form.css";
import dummy from "./images/dummy.png";

// const DB_URL = "https://taberu-server.herokuapp.com";
const DB_URL = "http://localhost:8080";

const OwnerRecipe: React.FC = () => {
  const [allRecipes, setAllRecipes] = useState<
    {
      account_id: number;
      family_id: number;
      recipe_id: number;
      name: string;
      date: Date;
      review: number;
    }[]
  >([]);

  const accountId = {
    params: {
      account_id: Number(localStorage.getItem("account_id")),
    },
  };
  useEffect(() => {
    axios
      .get(`${DB_URL}/recipe/recipeReview`, accountId)
      .then((res) => {
        if (res.data.length > allRecipes.length) {
          let lastIndex = allRecipes.length;
          setAllRecipes((prevRecipe) => [...prevRecipe, res.data[lastIndex]]);
        }
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }, [allRecipes]);

  return (
    <div className="OwnerRecipe">
      <main>
        <img src={dummy} alt="" />
        <div className="formArea_owRecipe"></div>
        <div className="textArea_owRecipe">
          <h2>My Recipes</h2>
        </div>
        <div className="reviewArea_owRecipe">
          {allRecipes.reverse().map((recipe) => {
            if (recipe.review > 0) {
              return (
                <div
                  key={recipe.recipe_id + "_" + recipe.name}
                  className="reviewAreaIn_owRecipe"
                >
                  <p>{recipe.name}</p>
                  <p>{"⭐️".repeat(recipe.review)}</p>{" "}
                </div>
              );
            } else if (recipe.review < 0) {
              return (
                <div
                  key={recipe.recipe_id + "_" + recipe.name}
                  className="reviewAreaIn_owRecipe"
                >
                  <p>{recipe.name}</p>

                  <p>{"👿".repeat(recipe.review * -1)}</p>
                </div>
              );
            } else {
              return (
                <div
                  key={recipe.recipe_id + "_" + recipe.name}
                  className="reviewArea_owRecipe"
                >
                  <p>{recipe.name}</p>
                </div>
              );
            }
          })}
        </div>
      </main>
    </div>
  );
};

export default OwnerRecipe;
