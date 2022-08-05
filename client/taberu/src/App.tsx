import React from "react";
import axios from "axios";
import ReactDOM from "react-dom";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import childMain from "./childMain";
import childDone from "./childDone";
import ownerTop from "./ownerTop";
import ownerRegist from "./ownerRegist";
import ownerLogin from "./ownerLogin";
import ownerLoginMain from "./ownerLoginMain";
import ownerPost from "./ownerPost";
import ownerFamily from "./ownerFamily";
import Header from "./components/Header";
import "./components/Reset.css";
import "./App.css";
import "./components/Text.css";
import "./components/Header.css";

function App() {
  return (
    <div className="AppChild">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ownerTop />} />
          <Route path="/ownerRegist" element={<ownerRegist />} />
          <Route path="/ownerLogin" element={<ownerLogin />} />
          <Route
            path="/ownerLoginMain"
            element={
              <>
                <Header />
                <ownerLoginMain />
              </>
            }
          />
          <Route
            path="/ownerPost"
            element={
              <>
                <Header />
                <ownerPost />
              </>
            }
          />
          <Route
            path="/ownerFamily"
            element={
              <>
                <Header />
                <ownerFamily />
              </>
            }
          />
          <Route path="/childMain" element={<childMain />} />
          <Route path="/childDone" element={<childDone />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
