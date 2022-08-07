import React, { useEffect, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import "./App.css";
import "./components/form.css";
import dummy from "./images/dummy.png";

// const DB_URL = "https://taberu-server.herokuapp.com" || "http://localhost:8080";
const DB_URL = "http://localhost:8080";

interface addRecipe {
  name: string;
}

const OwnerRecipe: React.FC = () => {
  const [allRecipes, setAllRecipes] = useState<{ id: number; name: string }[]>(
    []
  );
  const [newRecipe, setNewRecipe] = useState<{ name: string }>();
  useEffect(() => {
    axios
      .get(`${DB_URL}/recipe`)
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

  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm<addRecipe>({
    defaultValues: {
      name: "",
    },
  });

  const newRecipeInfo = {
    name: "",
  };
  const onSubmit = (data: any) => {
    newRecipeInfo.name = data.name;
    setNewRecipe(newRecipeInfo);
  };

  useEffect(() => {
    if (newRecipe) axios.post(`${DB_URL}/recipe`, newRecipe);
  }, [newRecipe]);

  return (
    <div className="OwnerRecipe">
      <main>
        <img src={dummy} alt="" />
        <div className="formArea_owRecipe">
          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="recipename">
              Recipe Name <span>*</span>
            </label>
            <input
              type="text"
              id="recipename"
              placeholder="Please put the recipe name"
              {...register("name", { required: "this is required" })}
            />
            <button>Add</button>
          </form>
        </div>
        <div className="textArea_owRecipe">
          <p>All Recipes Out There</p>
        </div>
        {allRecipes.reverse().map((recipe) => {
          return (
            <div key={recipe.id}>
              <p>{recipe.name}</p>
            </div>
          );
        })}
      </main>
    </div>
  );
};

export default OwnerRecipe;
