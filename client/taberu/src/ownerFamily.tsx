import React from 'react';
import './App.css';

function ownerFamily() {
  return (
    <div className="ownerRegist">
      <h1>taberu</h1>
      <main>
        <h1 className='logo'>Register</h1>
        <form action="/ownerLoginMain">
          <label htmlFor="lastname">Last Name *</label>
          <input type="text" name="name" id="lastname" required />
          <label htmlFor="firstname">First Name *</label>
          <input type="text" name="name" id="firstname" required />
          <button>Add</button>
        </form>
      </main>
      <section>
        <h2>Family's Name</h2>
        <p>Hasegawa Ayumi</p>
      </section>

    </div>
  );
}

export default ownerFamily;
