import React, { useState, useRef } from "react";
import logo from "../images/logo.png";
import "./Navbar.css";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  let Hh1 = useRef();
  let log1 = useRef();

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
      Hh1.current.style.color = "rgb(119, 119, 119)";
      log1.current.style.color = "rgb(119, 119, 119)";
    } else {
      setnavmain(false);
      Hh1.current.style.color = "white";
      log1.current.style.color = "white";
    }
  };

  window.addEventListener("scroll", ChangeBg);

  return (
    <nav>
      <div className={navmain ? "navmainactive" : "navmain"}>
        <div className={Click ? "div1" : "div"}>
          <img src={logo} alt="logo" className="Navimg" />
          <h1 className="Nh1" ref={Hh1}>
            THE BEAR BUMS
          </h1>
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
          <li>
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
          {Click ? (
            <FaTimes size={40} ref={log1} />
          ) : (
            <FaBars size={30} ref={log1} />
          )}
        </div>

        {/* <img src={menubar} alt="" className="menu1" /> */}

        {/* <img src={closebtn} alt="" className="menu2" /> */}
      </div>
    </nav>
  );
};

export default Navbar;
