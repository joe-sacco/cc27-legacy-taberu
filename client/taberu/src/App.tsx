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
  // const headers = {"email": "tomomik@sample.com"};
  // axios.get('http://localhost:8080/account', { headers }).then(res => {
  //   console.log(res.data);
  // })
  useEffect(() => {
    const body = {
      first_name: "juli",
      last_name: "Kugai",
      email: "tomomik@sample.com",
      password: "password",
      pincode: 1234,
      image: null,
    };

    axios
      .post("http://localhost:8080/account", { body })
      .then((res) => {
        console.log("🟩🟩🟩🟩🟩🟩🟩");
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }, []);

  //   const requestOptions = {
  //     method: 'GET',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({ email: 'tomomik@sample.com' })
  // };
  // fetch('http://localhost:8080/account', requestOptions)
  //     .then(response => console.log(response.json()));

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
