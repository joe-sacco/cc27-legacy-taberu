import React, { useState, useEffect } from "react";
import "./styles/components/images.css";
import dummy from "./images/dummy.png";
import like from "./images/like.png";
import dislike from "./images/dislike.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// const DB_URL = "https://taberu-server.herokuapp.com";
const DB_URL = "http://localhost:8080";

const ChildMain: React.FC = () => {
  const navigate = useNavigate();
  const [review, setReview] = useState<{ recipe_id: number; review: number }>(); // review: -1 = dislike, 1 = like
  const [recipeToReview, setRecipeToReview] = useState<
    { name: string; recipe_id: number }[]
  >([]);

  useEffect(() => {
    const obtainedAccountId = Number(localStorage.getItem("account_id"));

    const accountId = {
      params: {
        account_id: obtainedAccountId,
      },
    };
    if (recipeToReview)
      axios
        .get(`${DB_URL}/recipe/requestReview`, accountId)
        .then((res) => {
          if (res.data.length > recipeToReview.length) {
            let lastIndex = recipeToReview.length;
            setRecipeToReview((prevRecipe) => [
              ...prevRecipe,
              res.data[lastIndex],
            ]);
          }
        })
        .catch((error) => {
          console.log(error.response.data);
        });
  }, [recipeToReview]);

  const reviewObj = {
    account_id: Number(localStorage.getItem("account_id")),
    family_id: Number(localStorage.getItem("family_id")),
    recipe_id: review?.recipe_id,
    review: review?.review,
  };
  const requestReview = {
    account_id: Number(localStorage.getItem("account_id")),
    recipe_id: review?.recipe_id,
    request_review: false,
  };
  useEffect(() => {
    if (review) axios
    .post(`${DB_URL}/recipe/recipeReview`, reviewObj)
    axios.put(`${DB_URL}/recipe/requestReview`, requestReview)

    if (review) {
      navigate("/ChildDone", { state: { review } });
    }
  }, [review]);

  return (
    <div className="TopChild">
      <main>
        <h2>Did you enjoy the meal?</h2>
        <div className="mainVisual">
          <img src={dummy} alt="taberu" />
        </div>
        <div className="reviewArea_chMain">
          {recipeToReview.map((recipe, i) => {
            return (
              <div
                className="reviewAreaIn_chMain"
                key={recipe.recipe_id + "_" + i}
              >
                <p>{recipe.name}</p>
                <form>
                  <label>
                    <img src={like} alt="like" height={100} />
                    <button
                      type="submit"
                      onClick={(e) => {
                        e.preventDefault();
                        setReview({
                          recipe_id: recipe.recipe_id,
                          review: 1,
                        });
                        recipeToReview.splice(i, 1);
                      }}
                    />
                  </label>
                  <label>
                    <img src={dislike} alt="dislike" height={100} />
                    <button
                      type="submit"
                      onClick={(e) => {
                        e.preventDefault();
                        setReview({
                          recipe_id: recipe.recipe_id,
                          review: -1,
                        });
                        recipeToReview.splice(i, 1);
                      }}
                    />
                  </label>
                </form>
              </div>
            );
          })}
        </div>
      </main>
      <p className="gobackBtn_chMenu">
        <a href="./OwnerMatchFamily">Go back to Owner page</a>
      </p>
    </div>
  );
};

export default ChildMain;
