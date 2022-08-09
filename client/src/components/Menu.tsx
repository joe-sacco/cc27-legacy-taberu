import React from 'react';
import { Link } from "react-router-dom";
import { slide as NAV } from "react-burger-menu";
import "../styles/components/Menu.css";


function Menu() {
  return (
    <NAV className="nav_content">
      <ul className="nav_list">
        <li className="nav_item">
          <Link to="/OwnerLoginMain">Top</Link>
        </li>
        <li className="nav_item">
          <Link to="/OwnerFamily">My Family</Link>
        </li>
        <li className="nav_item">
          <Link to="/OwnerRecipe">My Recipes</Link>
        </li>
        <li className="nav_item">
          <Link to="/AllRecipe">All Recipes</Link>
        </li>
        <li className="nav_item">
          <Link to="/ChildMenu">Family Review Page</Link>
        </li>
      </ul>
    </NAV>
  )
}

export default Menu;
