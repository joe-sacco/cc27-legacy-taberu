import React, { useState, useEffect } from 'react';
import './components/images.css';
import dummy from './images/dummy.png';
import like from './images/like.png';
import dislike from './images/dislike.png';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

// const DB_URL = "https://taberu-server.herokuapp.com" || "http://localhost:8080";
const DB_URL = "http://localhost:8080";

// GET recipe_review (all the review requested recipe to display on childMain page)
// after child review "like"/"dislike" => PATCH review_recipe for review

const ChildMain: React.FC = () => {
  const navigate = useNavigate();
  const [review, setReview] = useState<{recipe_id: number, review: number}>(); // review: -1 = dislike, 1 = like
  const [recipeToReview, setRecipeToReview] = useState<{name: string, recipe_id: number}[]>([]);

  // GET all the recipe that needs to be reviewed
  useEffect(() => {
    const obtainedId = Number(localStorage.getItem("account_id"));

    const accountId = {
      params: {
        account_id: obtainedId,
      },
    };
    if (recipeToReview) axios
    .get(`${DB_URL}/recipe/requestReview`, accountId)
    .then((res) => {
      if (res.data.length > recipeToReview.length) {
        let lastIndex = recipeToReview.length;
        setRecipeToReview((prevRecipe) => [...prevRecipe, res.data[lastIndex]])
      }
    }).catch((error) => {
      console.log(error.response.data);
    });
  }, [recipeToReview])

  //POST the review to the recipe_review
  const reviewObj = {
    account_id: Number(localStorage.getItem("account_id")),
    family_id: 3,
    recipe_id: review?.recipe_id,
    review: review?.review
  }
  const requestReview = {
    account_id: Number(localStorage.getItem("account_id")),
    recipe_id: review?.recipe_id,
    request_review: false
  }
  useEffect(() => {
    if (review) axios
    .post(`${DB_URL}/recipe/recipeReview`, reviewObj)
    // (2) need to navigate to ChildDone page
    axios.put(`${DB_URL}/recipe/requestReview`, requestReview)
    
    if (review) navigate("/ChildDone", {state:{review}});
    console.log("🟡🟡🟡🟡", recipeToReview)
  },[review])

  return (
    <div className="TopChild">
      <main>
        <h1>Did you enjoy the meal?</h1>
        <div className='mainVisual'>
          <img src= { dummy } alt="taberu" />
        </div>
        <div>
          <p>Please Review Below Recipe</p>
        </div>
        {recipeToReview.map((recipe, i) => {
          return (
            <div key={recipe.recipe_id}>
              <p>{recipe.name}</p>
              <form>
              <label> 
                <img src={ like } alt="like" height={50} />
                <button type="submit" onClick={(e) => {
                  e.preventDefault();
                  setReview({
                    recipe_id: recipe.recipe_id,
                    review: 1
                  });
                  recipeToReview.splice(i, 1);
                  }} />
              </label>
              <label> 
                <img src={ dislike } alt="dislike" height={50} />
                <button type="submit" onClick={(e) => {
                  e.preventDefault();
                  setReview({
                    recipe_id: recipe.recipe_id,
                    review: 1
                  });
                  recipeToReview.splice(i, 1);
                  }}  />
              </label>
              </form>
            </div>
          )
        })}
        
      </main>
    </div>
  );
}

export default ChildMain;
