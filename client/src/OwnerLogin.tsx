import React from "react";
import "./App.css";
import { useForm } from "react-hook-form";

interface test {
  email: string;
  password: string;
}

function OwnerLogin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<test>({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit = (data: any) => {
    console.log(data);
    return data;
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
