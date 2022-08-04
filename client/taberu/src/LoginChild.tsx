import React from 'react';
import  ButtonChild from './components/ButtonChild';
import './components/images.css';
import topImage from './images/bg_top.png';

function LoginChild() {
  return (
    <div className="TopChild">
      <main>
        <h1 className='logo'>taberu</h1>
        <div className='mainVisual'>
          <img src= {topImage} alt="taberu" />
        </div>
      </main>
       <ButtonChild link={'/MenuChild'} text={'Let’s Tap!'} />
    </div>
  );
}

export default LoginChild;
