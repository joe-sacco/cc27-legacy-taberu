import React from 'react';
import Header from './components/Header';
import  ButtonChild from './components/Button';
import './components/Header.css';
import './App.css';

function OwnerLoginMain() {
  return (
    <div className="ownerLoginMain">
       <Header />
      <main>
        <div>
          <p>Today’s recipe is</p>
          <h1>Curry!!!</h1>
        </div>
      <ButtonChild link={'#'} text={'> Children'} />
       <ButtonChild link={'/OwnerPost'} text={'> Recipes'} />
      </main>

    </div>
  );
}

export default OwnerLoginMain;
