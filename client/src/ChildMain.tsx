import React from 'react';
import './components/images.css';
import dummy from './images/dummy.png';
import like from './images/like.png';
import dislike from './images/dislike.png';


// GET recipe_review (all the review requested recipe to display on childMain page)
// after child review "like"/"dislike" => PATCH review_recipe for review

function ChildMain() {
  return (
    <div className="TopChild">
      <main>
        <p>How was it?</p>
        <div className='mainVisual'>
          <img src= { dummy } alt="taberu" />
        </div>
        <form method="POST" action="./ChildDone.tsx">
          <ul>
            <li><a href="/ChildDone"><img src={ like } alt="like" /></a></li>
            <li><a href="/ChildDone"><img src={ dislike } alt="dislike" /></a></li>
          </ul>
      </form>

      </main>
    </div>
  );
}

export default ChildMain;
