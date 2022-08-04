import React from 'react';
import Header from './Header';
import ReactDOM from "react-dom";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import LoginChild from './LoginChild';
import './Reset.css';
import './App.css';
import './Header.css';
import './Text.css';


function AppChild() {
  return (
    <div className="AppChild">
      <BrowserRouter>
        <Routes>
          <Route path="/MenuChild" element={ <Header /> } />
          <Route path="/" element={ <LoginChild /> } />
       </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default AppChild;
