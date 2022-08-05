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
            <li className="nav_item"><Link to="/ownerFamily">Family</Link></li>
            <li className="nav_item"><Link to="/OwnerPost">Recipes</Link></li>
            <li className="nav_item"><Link to="#">Planned Menus</Link></li>
          </ul>
      </nav>
     <h1 className="logo">taberu</h1>
      </header>
    </div>
  );
}

export default  Header;
