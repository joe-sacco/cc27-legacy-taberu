import React from 'react';
import  ButtonChild from './components/button';
import './App.css';
import  bg_top from './images/bg_top.png';

function ownerLogin() {
  return (
    <div className="ownerLogin">
      <main>
        <h1 className='logo'>taberu</h1>
        <img src={ bg_top } alt="taberu" />
      </main>
       <ButtonChild link={'/ownerLogin'} text={'Login'} />
       <ButtonChild link={'/ownerRegist'} text={'Register'} />
    </div>
  );
}

export default ownerLogin;
