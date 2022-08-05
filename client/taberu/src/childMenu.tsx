import React from 'react';
import  ButtonChild from './components/button';
import './App.css';

function childMenu() {
  return (
    <div className="childMenu">
      <p>What’s your name??</p>
      <main>
        <h1 className='logo'>taberu</h1>

      </main>
       <ButtonChild link={'#'} text={'Mizuk'} />
    </div>
  );
}

export default childMenu;
