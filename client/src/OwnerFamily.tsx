import React, { useEffect, useState } from 'react';
import axios from "axios"
import './App.css';

const DB_URL = "http://localhost:8080"
// Hardcoded ownerAccount ID
const obtainedId = 6;

//TO DO::
//[ ] Implement the DB_URL to switch automatically between localhost and Heroku depending on production/development
//[ ] Implement a way to catcht the accountOwner's ID

const OwnerFamily: React.FC = () => {
  const [familyMember, setFamilyMember] = useState<{id: number, account_id: number, first_name: string, last_name: string}[]>([],);
  useEffect(() => {
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
          setFamilyMember(prevFamily => [...prevFamily, res.data[lastIndex]]);
        }
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }, [familyMember]);

  return (
    <div className="OwnerRegist">
      <h1>taberu</h1>
      <main>
        <h1 className='logo'>Register</h1>
        <form action="/OwnerLoginMain">
          <label htmlFor="lastname">Last Name *</label>
          <input type="text" name="name" id="lastname" required />
          <label htmlFor="firstname">First Name *</label>
          <input type="text" name="name" id="firstname" required />
          <button>Add</button>
        </form>
      </main>
      <section>
        <h2>Family's Name</h2>
        {familyMember.map(family => {
        return (
          <div key={family.id}>
            <p>{family.last_name} {family.first_name}</p>
          </div>
        );
      })}
      </section>

    </div>
  );
}

export default OwnerFamily;
