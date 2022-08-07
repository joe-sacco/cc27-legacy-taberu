import React from 'react';
import { Link } from "react-router-dom";
import './Header.css';

function Header() {
  return (
    <div className="App-header">
      <header className="header">
      <input id="drawer_input" className="drawer_hidden" type="checkbox" />
      <label htmlFor="drawer_input" className="drawer_open"><span></span></label>
      <nav className="nav_content">
        <ul className="nav_list">
            <li className="nav_item"><Link to="/OwnerLoginMain">Top</Link></li>
            <li className="nav_item"><Link to="/OwnerFamily">My Family</Link></li>
            <li className="nav_item"><Link to="/OwnerRecipe">My Recipes</Link></li>
            <li className="nav_item"><Link to="/AllRecipe">All Recipes</Link></li>
            <li className="nav_item"><Link to="/ChildMenu">Family Review Page</Link></li>
          </ul>
      </nav>
     <h1 className="logo">taberu</h1>
      </header>
    </div>
  );
}

export default  Header;
