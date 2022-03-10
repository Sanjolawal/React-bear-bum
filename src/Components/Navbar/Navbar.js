import React from "react";
import logo from "../images/logo.png";
import "./Navbar.css";
import menubar from "../images/menu-bar.svg";
import closebtn from "../images/close-btn.svg";



const Navbar = () => {
  return (
    <nav>
      <div className="navmain">
        <div className="div">
          <img src={logo} alt="logo" className="Navimg" />
          <h1>THE BEAR BUMS</h1>
        </div>
        <ul className="ul">
          <li>About</li>
          <li>Specs</li>
          <li>Roadmap</li>
          <li>Team</li>
          <li>FAQ</li>
        </ul>
        <img src={menubar} alt=""   className="menu1" />
        <img src={closebtn} alt=""  className="menu2" />
      </div>
    </nav>
  );
};

export default Navbar;
