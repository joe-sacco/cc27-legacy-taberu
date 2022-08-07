import React from 'react';
import  ButtonChild from './components/Button';
import './App.css';

function ChildMenu() {
  return (
    <div className="ChildMenu">
      <p>What’s your name??</p>
      <main>
        <h1 className='logo'>taberu</h1>

      </main>
       <ButtonChild link={'/ChildMain'} text={'Mizuki'} />
    </div>
  );
}

export default ChildMenu;
