import React from 'react';
import  ButtonChild from './components/Button';
import './App.css';

function OwnerLoginMain() {
  return (
    <div className="OwnerLoginMain">
      <main>
        <div>
          <p>Today’s recipe is</p>
          <h1>Curry!!!</h1>
        </div>
      <ButtonChild link={'/OwnerFamily'} text={'> Family'} />
       <ButtonChild link={'/OwnerRecipe'} text={'> Recipes'} />
      </main>

    </div>
  );
}

export default OwnerLoginMain;
