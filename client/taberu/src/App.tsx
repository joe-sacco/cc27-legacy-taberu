import React, { useEffect } from "react";
import axios from "axios";
import ReactDOM from "react-dom";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ChildMain from "./childMain";
import ChildDone from "./ChildDone";
import OwnerTop from "./OwnerTop";
import OwnerRegist from "./OwnerRegist";
import OwnerLogin from "./OwnerLogin";
import OwnerLoginMain from "./OwnerLoginMain";
import OwnerPost from "./OwnerPost";
import OwnerAdd from "./OwnerAdd";
import Header from "./components/Header";
import "./components/Reset.css";
import "./App.css";
import "./components/Text.css";
import "./components/Header.css";

function App() {
  useEffect(() => {
    // FOR LOGIN
    const accountInfo = {
      params: {
        email: "tomh@sample.com",
        password: "password",
      },
    };
    axios.get("http://localhost:8080/account", accountInfo);
  }, []);

  useEffect(() => {
    // FOR SIGN-UP
    const newAccountInfo = {
      first_name: "juli",
      last_name: "Kugai",
      email: "tomomik@sample.com",
      password: "password",
      pincode: 1234,
      image: null,
    };

    axios.post("http://localhost:8080/account", newAccountInfo);
  }, []);

  useEffect(() => {
    // FOR PINCODE
    const accountInfo = {
      params: {
        id: 6,
        pincode: 1234,
      },
    };
    axios
      .get("http://localhost:8080/account/pincode", accountInfo)
      .then((res) => {
        if (res.status === 200) {
          // LOGGED IN
        }
      })
      .catch((error) => console.log(error.response.data));
  }, []);

  useEffect(() => {
    // FOR CREATE FAMILY
    const familyInfo = {
      account_id: 6,
      first_name: "Pikachu",
      last_name: "Kugai",
    };
    axios.post("http://localhost:8080/account/6/family", familyInfo);
  }, []);

  useEffect(() => {
    // FOR GET FAMILY
    const accountId = {
      params: {
        account_id: 6,
      },
    };
    axios
      .get("http://localhost:8080/account/6/family", accountId)
      .then((res) => {
        // console.log(res.data);
      })
      .catch((error) => {
        // console.log(error.response.data);
      });
  }, []);

  useEffect(() => {
    // FOR CREATE RECIPE
    const familyInfo = {
      name: "Kugai",
    };
    axios.post("http://localhost:8080/recipe", familyInfo);
  }, []);

  useEffect(() => {
    // FOR GET RECIPE

    axios
      .get("http://localhost:8080/recipe")
      .then((res) => {
        // console.log(res.data);
      })
      .catch((error) => {
        // console.log(error.response.data);
      });
  }, []);

  return (
    <div className="AppChild">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<OwnerTop />} />
          <Route path="/OwnerRegist" element={<OwnerRegist />} />
          <Route path="/OwnerLogin" element={<OwnerLogin />} />
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
            path="/OwnerAdd"
            element={
              <>
                <Header />
                <OwnerAdd />
              </>
            }
          />
          <Route path="/childMain" element={<ChildMain />} />
          <Route path="/ChildDone" element={<ChildDone />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
