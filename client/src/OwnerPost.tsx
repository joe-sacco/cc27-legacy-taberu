import React from 'react';
import './App.css';

function OwnerPost() {
  return (
    <div className="OwnerPost">
      <h1>taberu</h1>
      <main>
        <h1 className='logo'>Register</h1>
        <form action="/">
          <label htmlFor="recipeName">Recipe Name *</label>
          <input type="text" name="name" id="recipeName" required />
          <input type="file" name="photo" id="" />
        </form>
        <ul>
          <li><a href="/ownerLoginMain">&gt; Top</a></li>
          <li><a href="#">&gt; Register</a></li>
        </ul>
      </main>

    </div>
  );
}

export default OwnerPost;
