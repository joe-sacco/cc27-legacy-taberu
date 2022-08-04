import React from 'react';
import  ButtonChild from './components/ButtonChild';

function MenuChild() {
  return (
    <div className="menuChild">
      <p>What’s your name??</p>
      <main>
        <h1 className='logo'>taberu</h1>

      </main>
       <ButtonChild link={'#'} text={'Mizuk'} />
    </div>
  );
}

export default MenuChild;
