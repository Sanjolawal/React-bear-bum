import React, {  useState } from "react";
import logo from "../images/logo.png";
import "./Navbar.css";
import menubar from "../images/menu-bar.svg";
import closebtn from "../images/close-btn.svg";
// import { Link } from "react-router-dom";
// import About from "../Main/Main";
// import {FaBars, FaTimes} from "react-icons/fa"
// import BodyClassName from "react-body-classname";

const Navbar = () => {
  let Scroll1 = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  let Scroll2 = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  let Scroll3 = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  let Scroll4 = () => {
    window.scrollTo({ top: 1200, behavior: "smooth" });
  };

  // let hamburger = useRef(null);
  // let menu2 = useRef();
  // let navmain1 = useRef();
  // let ul = useRef();

  // let Display = () => {
  //   navmain1.current.style.background = "black";
  //   navmain1.current.style.height = "100vh";
  //   ul.current.style.display = "block";
  //   window.body.current.style.overflowY = "hidden";
  // };

  const [navmain, setnavmain] = useState(false);

  let ChangeBg = () => {
    if (window.scrollY >= 300) {
      setnavmain(true);
    } else {
      setnavmain(false);
    }
  };

  window.addEventListener("scroll", ChangeBg);

  return (
    <nav>
      <div className={navmain ? "navmainactive" : "navmain"}>
        <div className="div">
          <img src={logo} alt="logo" className="Navimg" />
          <h1>THE BEAR BUMS</h1>
        </div>
        <ul className="ul">
          <li onClick={Scroll1}>About</li>
          <li onClick={Scroll2}>Specs</li>
          <li onClick={Scroll2}>Roadmap</li>
          <li onClick={Scroll3}>Team</li>
          <li onClick={Scroll4}>FAQ</li>
        </ul>
        <img src={menubar} alt="" className="menu1" />

        <img src={closebtn} alt="" className="menu2" />
      </div>
    </nav>
  );
};

export default Navbar;
