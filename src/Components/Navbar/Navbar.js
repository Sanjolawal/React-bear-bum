import React from "react";
import logo from "../images/logo.png";
import "./Navbar.css";


const Navbar = () => {
  return (
    <nav>
      <div className="div">
        <img src={logo} alt="logo" className="img" />
        <h1>THE BEAR BUMS</h1>
      </div>
      <ul className="ul">
        <li>About</li>
        <li>Specs</li>
        <li>Roadmap</li>
        <li>Team</li>
        <li>FAQ</li>
      </ul>
    </nav>
  );
};

export default Navbar;
