import React from 'react';
import ReactDOM from "react-dom";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import ChildMain from './childMain';
import ChildDone from './ChildDone';
import OwnerTop from './OwnerTop';
import OwnerRegist from './OwnerRegist';
import OwnerLogin from './OwnerLogin';
import OwnerLoginMain from './OwnerLoginMain';
import OwnerPost from './OwnerPost';
import Header from './components/Header';
import './components/Reset.css';
import './App.css';
import './components/Text.css';
import './components/Header.css';


function App() {
  return (
    <div className="AppChild">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <OwnerTop /> } />
          <Route path="/OwnerRegist" element={ <OwnerRegist /> } />
          <Route path="/OwnerLogin" element={ <OwnerLogin /> } />
          <Route path="/OwnerLoginMain" element={
            <>
              <Header />
              <OwnerLoginMain />
            </>
          }/>
          <Route path="/OwnerPost" element={
            <>
              <Header />
              <OwnerPost />
            </>
          }/>
          <Route path="/childMain" element={ <ChildMain /> } />
          <Route path="/ChildDone" element={ <ChildDone /> } />
       </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;