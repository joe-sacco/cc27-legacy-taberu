import React from 'react';
import ReactDOM from "react-dom";
import Header from './components/Header';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import LoginChild from './childeMain';
import './components/Reset.css';
import './App.css';
import './components/Header.css';
import './components/Text.css';


function AppChild() {
  return (
    <div className="AppChild">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <LoginChild /> } />
       </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default AppChild;
