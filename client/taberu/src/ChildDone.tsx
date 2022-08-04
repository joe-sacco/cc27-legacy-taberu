import React from 'react';
import  ButtonChild from './components/Button';
import './components/images.css';


function ChildDone() {
  return (
    <div className="TopChild">
      <main>
        <p>Happy enjoy<br />yummy yummy time!</p>
        <ButtonChild link="/" text={'Go to top! '} />
      </main>
    </div>
  );
}

export default ChildDone;
