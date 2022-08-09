import React from "react";
import "./App.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ButtonChild from "./components/Button";
import logo from "./images/logo.png";

// const DB_URL = "https://taberu-server.herokuapp.com";
const DB_URL = "http://localhost:8080";

interface test {
  pincode: number;
}

type Props = {
  accountId: number | undefined;
};

const OwnerMatchFamily: React.FC<Props> = ({ accountId }) => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm<test>({
    defaultValues: {
      pincode: undefined,
    },
  });
  const onSubmit = (data: any) => {
    // For our pincode check we need pincode AND id
    // Here we somehow need to get hold of id we got logging in and add it to this object
    //    that we will be sending to server
    data.id = accountId
      ? accountId
      : Number(localStorage.getItem("account_id")); // PLACEHOLDER ID
    data.pincode = Number(data.pincode);
    // console.log(data);
    // return data;
    const accountInfo = {
      params: data,
    };
    axios
      .get(`${DB_URL}/account/pincode`, accountInfo)
      .then((res) => {
        if (res.status === 200) {
          alert("You are successfully logged in!");
          navigate("/OwnerLoginMain");
        }
      })
      .catch((error) => {
        // If we enter this block - there was no match in the database
        // So the user should try again
        alert("Pincode is wrong, please try again");
        console.log("🏮🏮🏮🏮🏮🏮");
        console.log(error.response.data);
      });
  };

  return (
    <div className="OwnerMatchFamily">
      <h1 className="logo">
        <img src={logo} alt="taberu" />
      </h1>
      <main>
        {/* <h1 className="logo">Login</h1> */}
        <ButtonChild link={"/ChildMenu"} text={"Start as Family"} />
        <div className="formArea_owMatchFamily">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="inputArea_owMatchFamily">
              <label htmlFor="pincode">Pincode</label>
              <input
                type="number"
                id="pincode"
                placeholder="12345"
                {...register("pincode", { required: "this is required" })}
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
        <ul>
          <li>{/* <a href="#">Mizuki</a> */}</li>
          <li>{/* <a href="#">Makoto</a> */}</li>
        </ul>
      </main>
    </div>
  );
};

export default OwnerMatchFamily;
