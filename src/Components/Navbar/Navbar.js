import React, { useState } from "react";
import logo from "../images/logo.png";
import "./Navbar.css";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [Click, setClick] = useState(false);

  let handle = () => {
    setClick(!Click);
  };

  const closeMenu = () => {
    setClick(false);
  };

  const [navmain, setnavmain] = useState(false);

  let ChangeBg = () => {
    if (window.scrollY >= 100) {
      setnavmain(true);
    } else {
      setnavmain(false);
    }
  };

  window.addEventListener("scroll", ChangeBg);

  return (
    <nav>
      <div className={navmain ? "navmainactive" : "navmain"}>
        <div className={Click ? "div1" : "div"}>
          <img src={logo} alt="logo" className="Navimg" />
          <h1>THE BEAR BUMS</h1>
        </div>
        <ul className={Click ? "ulactive" : "ul"}>
          <li>
            <Link
              onClick={closeMenu}
              to="about"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              to="specs"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Specs
            </Link>
          </li>
          <li>
            <Link
              to="roadmap"
              onClick={closeMenu}
              spy={true}
              smooth={true}
              offset={10}
              duration={500}
            >
              Roadmap
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              to="team"
              spy={true}
              smooth={true}
              offset={10}
              duration={500}
            >
              Team
            </Link>
          </li>
          <li >
            <Link
              onClick={closeMenu}
              to="faq"
              spy={true}
              smooth={true}
              offset={10}
              duration={500}
            >
              FAQ
            </Link>
          </li>
        </ul>
        <div className="menu1" onClick={handle}>
          {Click ? <FaTimes size={40} /> : <FaBars size={30} />}
        </div>

        {/* <img src={menubar} alt="" className="menu1" /> */}

        {/* <img src={closebtn} alt="" className="menu2" /> */}
      </div>
    </nav>
  );
};

export default Navbar;
