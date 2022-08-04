import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className="App-header">
      <header className="header">
      <input id="drawer_input" className="drawer_hidden" type="checkbox" />
      <label htmlFor="drawer_input" className="drawer_open"><span></span></label>
      <nav className="nav_content">
        <ul className="nav_list">
            <li className="nav_item"><a href="/OwnerLoginMain">Top</a></li>
            <li className="nav_item"><a href="/OwnerPost">Recipes</a></li>
            <li className="nav_item"><a href="">Planned Menus</a></li>
          </ul>
      </nav>
     <h1 className="logo">taberu</h1>
      </header>
    </div>
  );
}

export default  Header;
