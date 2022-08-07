import React from 'react';
import  ButtonChild from './components/Button';
import './components/images.css';


function ChildDone() {
  return (
    <div className="TopChild">
      <main>
        <p>Happy enjoy<br />yummy yummy time!</p>
        <ButtonChild link="/ChildMain" text={'Next'} />
        <ButtonChild link="/ChildMenu" text={'Done'} />
      </main>
    </div>
  );
}

export default ChildDone;
