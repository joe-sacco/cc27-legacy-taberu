import React from 'react';
import Header from './Header';
import TopChild from './LoginChild';
import './Reset.css';
import './App.css';
import './Header.css';
import './Text.css';


function AppChild() {
  return (
    <div className="AppChild">
      <Header />
      <TopChild />
    </div>
  );
}

export default AppChild;
