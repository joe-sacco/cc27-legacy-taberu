import React from 'react';
import './App.css';

function OwnerRegist() {
  return (
    <div className="ownerLogin">
      <h1>taberu</h1>
      <main>
        <h1 className='logo'>Register</h1>
        <form action="/">
          <label htmlFor="name">Name *</label>
          <input type="text" name="name" id="name" required />
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
