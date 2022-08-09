import React, { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ChildMain from "./ChildMain";
import ChildMenu from "./ChildMenu";
import ChildDone from "./ChildDone";
import OwnerTop from "./OwnerTop";
import OwnerRegist from "./OwnerRegist";
import OwnerLogin from "./OwnerLogin";
import OwnerMatchFamily from "./OwnerMatchFamily";
import OwnerLoginMain from "./OwnerLoginMain";
import OwnerPost from "./OwnerPost";
import OwnerFamily from "./OwnerFamily";
import OwnerRecipe from "./OwnerRecipe";
import AllRecipe from "./AllRecipe";
import Header from "./components/Header";
import "./styles/Reset.css";
import "./App.css";
import "./styles/components/Text.css";
import "./styles/components/Header.css";

function App() {
  const [accountId, setAccountId] = useState<number | undefined>();
  return (
    <div className="AppChild">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<OwnerTop />} />
          <Route path="/OwnerRegist" element={<OwnerRegist />} />
          <Route
            path="/OwnerLogin"
            element={<OwnerLogin setAccountId={setAccountId} />}
          />
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
            path="/OwnerFamily"
            element={
              <>
                <Header />
                <OwnerFamily account_id={accountId} />
              </>
            }
          />
          <Route
            path="/OwnerRecipe"
            element={
              <>
                <Header />
                <OwnerRecipe />
              </>
            }
          />
           <Route
            path="/AllRecipe"
            element={
              <>
                <Header />
                <AllRecipe />
              </>
            }
          />
          <Route
            path="/OwnerMatchFamily"
            element={
              <>
                <OwnerMatchFamily accountId={accountId} />
              </>
            }
          />
          <Route path="/ChildMenu" 
          element={
            <>
            <ChildMenu account_id={accountId} />
            </>
            } />
          <Route path="/ChildMain" element={<ChildMain />} />
          <Route path="/ChildDone" element={<ChildDone />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
