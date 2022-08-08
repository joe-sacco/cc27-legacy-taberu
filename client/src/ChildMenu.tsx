import React, { useEffect, useState } from "react";
import ButtonChild from "./components/Button";
import axios from "axios";
import "./App.css";
import { useNavigate } from "react-router-dom";
import logo from "./images/logo.png";

// const DB_URL = "https://taberu-server.herokuapp.com";
const DB_URL = "http://localhost:8080";

type Props = {
  account_id: number | undefined;
};

const ChildMenu: React.FC<Props> = ({ account_id }) => {
  const navigate = useNavigate();
  const [familyMember, setFamilyMember] = useState<
    {
      id: number;
      account_id: number | undefined;
      first_name: string;
      last_name: string;
    }[]
  >([]);

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
  }, [familyMember]);

  return (
    <div className="ChildMenu">
      <main>
        <h1 className="logo">
          <img src={logo} alt="taberu" />
        </h1>
        <p className="text_chMenu">What’s your name??</p>
        <div className="nameArea_chMenu">
          {familyMember.map((family) => {
            return (
              <div className="button_chMenu" key={family.id}>
                {/* <ButtonChild link={'/ChildMain'} text={family.first_name}/> */}
                <label>
                  {" "}
                  {family.first_name}
                  <button
                    type="submit"
                    onClick={(e) => {
                      e.preventDefault();
                      const id = String(family.id);
                      localStorage.setItem("family_id", id);
                      navigate("/ChildMain");
                    }}
                  />
                </label>
              </div>
            );
          })}
        </div>
      </main>
      <p className="gobackBtn_chMenu">
        <a href="./OwnerMatchFamily">Go back to Owner page</a>
      </p>
    </div>
  );
};

export default ChildMenu;
