import React from 'react';
import  ButtonChild from './components/button';
import './App.css';
import  bg_top from './images/bg_top.png';

function OwnerLogin() {
  return (
    <div className="OwnerLogin">
      <main>
        <h1 className='logo'>taberu</h1>
        <img src={ bg_top } alt="taberu" />
      </main>
       <ButtonChild link={'/OwnerLogin'} text={'Login'} />
       <ButtonChild link={'/OwnerRegist'} text={'Register'} />
    </div>
  );
}

export default OwnerLogin;
