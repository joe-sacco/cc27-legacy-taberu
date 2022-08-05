import React from "react";
import axios from "axios";
import ReactDOM from "react-dom";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import childMain from "./childMain";
import childDone from "./childDone";
import OwnerTop from "./OwnerTop";
import OwnerRegist from "./OwnerRegist";
import ownerLogin from "./ownerLogin";
import OwnerLoginMain from "./OwnerLoginMain";
import OwnerPost from "./OwnerPost";
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
          <Route path="/" element={<OwnerTop />} />
          <Route path="/OwnerRegist" element={<OwnerRegist />} />
          <Route path="/ownerLogin" element={<ownerLogin />} />
          <Route
            path="/OwnerLoginMain"
            element={
              <>
                <Header />
                <OwnerLoginMain />
              </>
            }
          />
          <Route
            path="/OwnerPost"
            element={
              <>
                <Header />
                <OwnerPost />
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
