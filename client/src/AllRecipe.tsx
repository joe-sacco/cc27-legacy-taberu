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
  const [allRecipes, setAllRecipes] = useState<{ id: number; name: string; review: number | undefined }[]>(
    []
  );
  const [newRecipe, setNewRecipe] = useState<{ name: string }>();
  const [reviewRecipeId, setReviewRecipeId] = useState<number | undefined>();
  // const [recipeWithReview, setRecipeWithReview] = useState<{recipe_id: number, review: number}[]>([]);

  // This is to render all recipes on the page
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

  // This is to add recipe to the database
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm<addRecipe>({
    defaultValues: {
      name: "",
    },
  });

  const newRecipeInfo = { name: "" };
  const onSubmit = (data: any) => {
    newRecipeInfo.name = data.name;
    setNewRecipe(newRecipeInfo);
  };

  useEffect(() => {
    if (newRecipe) axios.post(`${DB_URL}/recipe`, newRecipe);
  }, [newRecipe]);

  // This is to add recipe to plan_menu (review request)
  const recipeRequestReview = {
    account_id: Number(localStorage.getItem("account_id")),
    recipe_id: reviewRecipeId,
    review_request: true,
  };
  useEffect(() => {
    if (reviewRecipeId) {
      axios.post(`${DB_URL}/recipe/requestReview`, recipeRequestReview);
      console.log("🥣🥣🥣🥣🥣", recipeRequestReview);
    }
  }, [reviewRecipeId]);

  // // This is to get all recipe associate to account with reviews
  // const accountId = {
  //   params: {
  //     account_id: Number(localStorage.getItem("account_id")),
  //   },
  // };
  // useEffect(() => {
  //   axios
  //   .get(`${DB_URL}/recipe/recipeReview`, accountId)
  //   .then((res) => {
  //     if (res.data.length > recipeWithReview.length) {
  //       let lastIndex = recipeWithReview.length;
  //       setRecipeWithReview((prevRecipe) => [...prevRecipe, res.data[lastIndex]]);
  //       for (let i = 0; i < allRecipes.length; i++) {
  //         if (allRecipes[i].id == recipeWithReview[lastIndex].recipe_id) {
  //           allRecipes[i].review = recipeWithReview[lastIndex].review;
  //         }
  //       }
  //     }
  //     console.log("🔥🔥🔥🔥🔥🔥", allRecipes);
  //     console.log("🥣🥣🥣🥣🥣🥣", recipeWithReview);

  //     })
  //     .catch((error) => {
  //       console.log(error.response.data);
  //     });
  // }, [recipeWithReview]);


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
          <div key={recipe.id} className="reviewArea_owRecipe">
            <p>{recipe.name}</p>
            <label>
              {" "}
              🍴 Review Request
              <button
                type="submit"
                value={recipe.id}
                onClick={(e) => {
                  e.preventDefault();
                  setReviewRecipeId(recipe.id);
                }}
              >
                submit
              </button>
            </label>
          </div>
        );
        })}
      </main>
    </div>
  );
};

export default OwnerRecipe;
