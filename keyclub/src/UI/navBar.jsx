import React from 'react';
import './navBar.css';
import KeyclubLogo from "../Assets/KeyclubLogo.png";

const NavBar = () => {
  return (
    <nav className="navbar">
    <div className="left-section">
        <div className="logo-container">
            <img src={KeyclubLogo} alt="Logo"/>
        </div>
        <h1 className="Key-Club">FHS Key Club</h1>
    </div>
        <ul className="nav-links">
            <li>Home</li>
            <li>About</li>
            <li>Highlights</li>
            <li>Join Us</li>
            <li>Roles & Fees</li>
            <li>FAQs</li>
            <li>Contact Us</li>
        </ul>
    </nav>
  );
}

export default NavBar;