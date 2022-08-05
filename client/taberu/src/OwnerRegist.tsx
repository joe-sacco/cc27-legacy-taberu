import React from "react";
import "./App.css";
import { useForm } from "react-hook-form";

interface test {
  lastname: string;
  firstname: string;
  email: string;
  password: string;
  pincode: string;
}
// const {
//   register,
//   handleSubmit,
//   formState: { errors },
// } = useForm<test>({
//   // defaultValues: {
//   //   lastname: "",
//   // },
// });

function OwnerRegist() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<test>({
    defaultValues: {
      lastname: "",
    },
  });
  const onSubmit = (data: any) => {
    console.log(data);
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
            {...register("lastname", { required: "this is required" })}
          />
          <label htmlFor="firstname">First Name *</label>
          <input type="text" name="name" id="firstname" />
          <label htmlFor="email">E-mail *</label>
          <input type="email" name="email" id="email" />
          <label htmlFor="password">Password *</label>
          <input type="password" name="password" id="password" />
          <label htmlFor="pincode">Pincode *</label>
          <input type="number" name="pincode" id="pincode" />
          <button type="submit">Submit</button>
        </form>
      </main>
    </div>
  );
}

export default OwnerRegist;
