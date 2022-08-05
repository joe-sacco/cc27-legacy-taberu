import React from 'react';
import  ButtonChild from './components/Button';
import './App.css';

function OwnerLoginMain() {
  return (
    <div className="ownerLoginMain">
      <main>
        <div>
          <p>Today’s recipe is</p>
          <h1>Curry!!!</h1>
        </div>
      <ButtonChild link={'/OwnerAdd'} text={'> Family'} />
       <ButtonChild link={'/OwnerPost'} text={'> Recipes'} />
      </main>

    </div>
  );
}

export default OwnerLoginMain;
