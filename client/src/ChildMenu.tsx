import React, { useEffect, useState } from 'react';
import  ButtonChild from './components/Button';
import axios from 'axios';
import './App.css';

// const DB_URL = "https://taberu-server.herokuapp.com" || "http://localhost:8080";
const DB_URL = "http://localhost:8080";

type Props = {
  account_id: number | undefined;
};

const ChildMenu: React.FC<Props> = ({ account_id }) => {
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
      <p>What’s your name??</p>
      <main>
        <h1 className='logo'>taberu</h1>
      </main>
      <div>
        {familyMember.map((family) => {
          return (
            <div key={family.id}>
              <ButtonChild link={'/ChildMain'} text={family.first_name} />
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default ChildMenu;
