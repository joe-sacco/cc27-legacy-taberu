import React from 'react';
import './components/images.css';
import dummy from './images/dummy.png';
import like from './images/like.png';
import dislike from './images/dislike.png';

function ChildMain() {
  return (
    <div className="TopChild">
      <main>
        <p>How was it?</p>
        <div className='mainVisual'>
          <img src= { dummy } alt="taberu" />
        </div>
        <form method="POST" action="./childDone.tsx">
          <ul>
            <li><a href="/childDone"><img src={ like } alt="like" /></a></li>
            <li><a href="/childDone"><img src={ dislike } alt="dislike" /></a></li>
          </ul>
      </form>

      </main>
    </div>
  );
}

export default ChildMain;
