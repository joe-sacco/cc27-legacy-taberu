import React, { useState, useEffect } from 'react';
import './components/images.css';
import dummy from './images/dummy.png';
import like from './images/like.png';
import dislike from './images/dislike.png';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

// GET recipe_review (all the review requested recipe to display on childMain page)
// after child review "like"/"dislike" => PATCH review_recipe for review

const ChildMain: React.FC = () => {
  const navigate = useNavigate();
  const [review, setReview] = useState<number>();
  // review: 0 = dislike, 1 = like

  useEffect(() => {
    // (1) if review is received, then need to PATCH to server to add review to recipe

    // (2) need to navigate to ChildDone page
    if (review) navigate("/ChildDone", {state:{review}});
    console.log("🟡🟡🟡🟡", review)
  },[review])

  return (
    <div className="TopChild">
      <main>
        <h1>Did you enjoy the meal?</h1>
        <div className='mainVisual'>
          <img src= { dummy } alt="taberu" />
        </div>
        <form>
          <ul>
            <li>
              <label> 
                <img src={ like } alt="like" />
                <button type="submit" onClick={(e) => {
                  e.preventDefault();
                  setReview(1);
                  }} />
              </label>
            </li>
            <li>
              <label> 
                <img src={ dislike } alt="dislike" />
                <button type="submit" onClick={(e) => {
                  e.preventDefault();
                  setReview(0);
                  }}  />
              </label>
            </li>
          </ul>
        </form>
      </main>
    </div>
  );
}

export default ChildMain;
