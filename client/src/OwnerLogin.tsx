import React from "react";
import "./App.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

// const DB_URL = "https://taberu-server.herokuapp.com" || "http://localhost:8080";
const DB_URL = "http://localhost:8080";

interface test {
  email: string;
  password: string;
}

type Props = {
  setAccountId:(id: number | undefined) => void;
}

const OwnerLogin:React.FC<Props> = ({setAccountId}) => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm<test>({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit = (data: any) => {

    const accountInfo = {
      params: data,
    };

    axios
      .get(`${DB_URL}/account`, accountInfo)
      .then((res) => {
        // If we enter this block - these WAS a match in the database
        // So the response we're getting has user's id in it
        // And this is how we access it
        const id = res.data.id;
        setAccountId(id);
        alert("You are successfully logged in!")
        navigate("/OwnerMatchFamily");
      })
      .catch((error) => {
        // If we enter this block - there was no match in the database
        // So the user should try again or make a new account if they don't have one yet
        console.log(error.response.status);
      });
  };

  return (
    <div className="OwnerRegist">
      <h1>taberu</h1>
      <main>
        <h1 className="logo">Login</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="email">E-mail *</label>
          <input
            type="email"
            id="email"
            {...register("email", { required: "this is required" })}
          />
          <label htmlFor="password">Password *</label>
          <input
            type="password"
            id="password"
            {...register("password", { required: "this is required" })}
          />
          <button type="submit">Submit</button>
        </form>
      </main>
    </div>
  );
}

export default OwnerLogin;
