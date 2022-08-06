import React, { useState } from "react";
import "./App.css";
import { useForm } from "react-hook-form";
import axios from "axios";

interface test {
  last_name: string;
  first_name: string;
  email: string;
  password: string;
  pincode: number;
}

function OwnerRegist() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<test>({
    defaultValues: {
      last_name: "",
      first_name: "",
      email: "",
      password: "",
      pincode: undefined,
    },
  });
  const onSubmit = (data: any) => {
    // console.log("👏👏👏👏👏👏");
    // console.log(data);
    // return data;
    const DB_URL = process.env.ENVIRONMENT ? "https://taberu-server.herokuapp.com" : "http://localhost:8080";
    // const newAccountInfo = {
    //   first_name: "",
    //   last_name: "",
    //   email: "",
    //   password: "",
    //   pincode: "",
    //   image: null,
    // };
    const newAccountInfo = data;

    axios.post(`${DB_URL}/account`, newAccountInfo).then((res) => {
      console.log(res);
      const responseCode = res.status;
      // So here we can redirect to LOGIN PAGE if response code is 201;
    });
  };

  return (
    <div className="OwnerRegist">
      <h1>taberu</h1>
      <main>
        <h1 className="logo">Register</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="lastname">Last Name *</label>
          <input
            type="text"
            id="lastname"
            {...register("last_name", { required: "this is required" })}
          />
          <label htmlFor="firstname">First Name *</label>
          <input
            type="text"
            id="firstname"
            {...register("first_name", { required: "this is required" })}
          />
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
          <label htmlFor="pincode">Pincode *</label>
          <input
            type="number"
            id="pincode"
            {...register("pincode", { required: "this is required" })}
          />
          <button type="submit">Submit</button>
        </form>
      </main>
    </div>
  );
}

export default OwnerRegist;
