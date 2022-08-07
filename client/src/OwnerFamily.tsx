import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import { useForm } from "react-hook-form";

// const DB_URL = "https://taberu-server.herokuapp.com" || "http://localhost:8080";
const DB_URL = "http://localhost:8080";

interface addFamily {
  lastname: string;
  firstname: string;
}

type Props = {
  account_id: number | undefined;
};

//TO DO::
//[✅] Implement the DB_URL to switch automatically between localhost and Heroku depending on production/development
//[ ] Implement a way to catcht the accountOwner's ID
//[✅] Implement add family function
//[ ] Make the page show newly added family automatically

const OwnerFamily: React.FC<Props> = ({ account_id }) => {
  const [familyMember, setFamilyMember] = useState<
    {
      id: number;
      account_id: number | undefined;
      first_name: string;
      last_name: string;
    }[]
  >([]);
  const [newFamily, setNewFamily] = useState<{
    account_id: number | undefined;
    first_name: string;
    last_name: string;
  }>();
  useEffect(() => {
    const obtainedId = account_id;
    const accountId = {
      params: {
        account_id: obtainedId,
      },
    };
    axios
      .get(`${DB_URL}/account/${accountId.params.account_id}/family`, accountId)
      .then((res) => {
        if (res.data.length > familyMember.length) {
          let lastIndex = familyMember.length;
          setFamilyMember((prevFamily) => [...prevFamily, res.data[lastIndex]]);
        }
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }, [familyMember]);

  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm<addFamily>({
    defaultValues: {
      lastname: "",
      firstname: "",
    },
  });

  const newFamilyInfo = {
    account_id: account_id,
    first_name: "",
    last_name: "",
  };
  const onSubmit = (data: any) => {
    newFamilyInfo.first_name = data.firstname;
    newFamilyInfo.last_name = data.lastname;
    setNewFamily(newFamilyInfo);
  };
  useEffect(() => {
    if (newFamily)
      axios.post(`${DB_URL}/account/${account_id}/family`, newFamily);
  }, [newFamily]);

  return (
    <div className="OwnerRegist">
      <h1>taberu</h1>
      <main>
        <h1 className="logo">Register</h1>
        {/* <form action="/OwnerLoginMain"> */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="lastname">Last Name *</label>
          <input
            type="text"
            id="lastname"
            {...register("lastname", { required: "this is required" })}
          />
          <label htmlFor="firstname">First Name *</label>
          <input
            type="text"
            id="firstname"
            {...register("firstname", { required: "this is required" })}
          />
          <button>Add</button>
        </form>
      </main>
      <section>
        <h2>Family's Name</h2>
        {familyMember.map((family) => {
          return (
            <div key={family.id}>
              <p>
                {family.last_name} {family.first_name}
              </p>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default OwnerFamily;
