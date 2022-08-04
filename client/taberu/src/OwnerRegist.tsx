import React from 'react';
import './App.css';

function OwnerRegist() {
  return (
    <div className="ownerRegist">
      <h1>taberu</h1>
      <main>
        <h1 className='logo'>Register</h1>
        <form action="/OwnerLoginMain">
          <label htmlFor="lastname">Last Name *</label>
          <input type="text" name="name" id="lastname" required />
          <label htmlFor="firstname">First Name *</label>
          <input type="text" name="name" id="firstname" required />
          <label htmlFor="email">E-mail *</label>
          <input type="email" name="email" id="email" required />
          <label htmlFor="password">Password *</label>
          <input type="password" name="password" id="password" required />
          <label htmlFor="password">Password *</label>
          <input type="password" name="password" id="password" required />
          <button type="submit">Submit</button>
        </form>
      </main>

    </div>
  );
}

export default OwnerRegist;
