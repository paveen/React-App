import React from "react";
import { Link } from "react-router-dom";
import '../css/menu.css';
import icongrid from '../images/icon-grid.png';
import iconmanage from '../images/icon-manage.png';
import iconbar from '../images/icon-bar.png';
import iconcart from '../images/icon-cart.png';
import iconsettings from '../images/icon-settings.png';

import data from '../json/navigation.json'

function Sidemenu() {
  return (
      <nav className="navbar navbar-expand-lg navbar-light">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                <img src={icongrid} alt="icon"/>
                Dashboard</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/manage"> 
              <img src={iconmanage} alt="icon"/>Manage Accounts</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/reports"> 
              <img src={iconbar} alt="icon"/>Reports</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/ecommerce"> 
              <img src={iconcart} alt="icon"/>E-Commerce</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/settings"> 
              <img src={iconsettings} alt="icon"/>Settings</Link>
            </li>
          </ul>
      </nav>
  );
}
export default Sidemenu;