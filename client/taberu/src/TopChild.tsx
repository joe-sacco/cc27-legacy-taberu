import React from 'react';
import  ButtonChild from './ButtonChild';
import './images.css';
import topImage from './images/bg_top.png';

function TopChild() {
  return (
    <div className="TopChild">
      <main>
        <h1 className='logo'>taberu</h1>
        <div>
          <img src= {topImage} alt="taberu" />
        </div>
      </main>
       <ButtonChild link={'#'} text={'Let’s Tap!'} />
    </div>
  );
}

export default TopChild;
