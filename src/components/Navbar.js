import React from 'react';
import { Link } from "react-router-dom";
import { FiUser, FiSettings } from "react-icons/fi";
import "../App.css";

function Navbar() {
  return (
    <nav className="main-navbar">
      <h2><Link to="/" className="dashboard-heading">Dashboard</Link></h2>
      <ul className="nav-links">
        <li>
          <Link to="/settings">
            <FiSettings/>Settings
          </Link>
        </li>
        <li>
          <Link to="/profile">
            <FiUser /> Profile
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
