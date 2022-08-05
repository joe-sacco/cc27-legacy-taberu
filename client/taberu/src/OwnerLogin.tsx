import React from 'react';
import './App.css';

function OwnerLogin() {
  return (
    <div className="OwnerRegist">
      <h1>taberu</h1>
      <main>
        <h1 className='logo'>Login</h1>
        <form action="/OwnerLoginMain">
          <label htmlFor="email">E-mail *</label>
          <input type="email" name="email" id="email" required />
          <label htmlFor="password">Password *</label>
          <input type="password" name="password" id="password" required />
          <button type="submit">Submit</button>
        </form>
      </main>

    </div>
  );
}

export default OwnerLogin;
