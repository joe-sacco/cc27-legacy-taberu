import React from 'react';
import  ButtonChild from './components/button';
import './App.css';

function ownerLoginMain() {
  return (
    <div className="ownerLoginMain">
      <main>
        <div>
          <p>Today’s recipe is</p>
          <h1>Curry!!!</h1>
        </div>
      <ButtonChild link={'/ownerFamily'} text={'> Family'} />
       <ButtonChild link={'/OwnerPost'} text={'> Recipes'} />
      </main>

    </div>
  );
}

export default ownerLoginMain;
