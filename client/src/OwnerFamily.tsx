import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import { useForm } from "react-hook-form";

// const DB_URL = "https://taberu-server.herokuapp.com";
const DB_URL = "http://localhost:8080";

interface addFamily {
  last_name: string;
  first_name: string;
}

type Props = {
  account_id: number | undefined;
};

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
    const obtainedId = account_id
      ? account_id
      : Number(localStorage.getItem("account_id"));

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
  });

  const { register, handleSubmit } = useForm<addFamily>({
    defaultValues: {
      last_name: "",
      first_name: "",
    },
  });

  const newFamilyInfo = {
    account_id: account_id
      ? account_id
      : Number(localStorage.getItem("account_id")),
    first_name: "",
    last_name: "",
  };
  const onSubmit = (data: any) => {
    newFamilyInfo.first_name = data.first_name;
    newFamilyInfo.last_name = data.last_name;
    setNewFamily(newFamilyInfo);
  };
  useEffect(() => {
    if (newFamily)
      axios.post(`${DB_URL}/account/${account_id}/family`, newFamily);
  }, [newFamily]);

  return (
    <div className="OwnerFamily">
      <main>
        <h2>Register</h2>
        <div className="formArea_owFamily">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="inputArea_owFamily">
              <label htmlFor="lastname">
                Last Name <span>*</span>
              </label>
              <input
                type="text"
                id="lastname"
                placeholder="Hasegawa"
                {...register("last_name", { required: "this is required" })}
              />
            </div>
            <div className="inputArea_owFamily">
              <label htmlFor="firstname">
                First Name <span>*</span>
              </label>
              <input
                type="text"
                id="firstname"
                placeholder="Ayumi"
                {...register("first_name", { required: "this is required" })}
              />
            </div>
            <button>Add</button>
          </form>
        </div>
      </main>
      <section>
        <h2>Family's Name</h2>
        <div className="nameArea_owFamily">
          {familyMember.map((family) => {
            return (
              <div className="nameAreaIn_owFamily" key={family.id}>
                <p>{family.first_name + " " + family.last_name}</p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default OwnerFamily;
