import React from 'react';
import ReactDOM from "react-dom";
import Header from './components/Header';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import ChildMain from './childMain';
import ChildDone from './ChildDone';
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
          <Route path="/" element={ <ChildMain /> } />
          <Route path="/ChildDone" element={ <ChildDone /> } />
       </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default AppChild;
