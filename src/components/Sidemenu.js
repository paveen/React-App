import React from "react";
import { Link } from "react-router-dom";
import '../css/menu.css';
function Sidemenu() {
  return (
      <nav className="navbar navbar-expand-lg navbar-light">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/">Dashboard</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/manage">Manage Accounts</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/reports">Reports</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/ecommerce">E-Commerce</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/settings">Settings</Link>
            </li>
          </ul>
      </nav>
  );
}
export default Sidemenu;