import React from 'react';
import  ButtonChild from './components/button';
import './components/images.css';


function childDone() {
  return (
    <div className="TopChild">
      <main>
        <p>Happy enjoy<br />yummy yummy time!</p>
        <ButtonChild link="/" text={'Go to top! '} />
      </main>
    </div>
  );
}

export default childDone;
