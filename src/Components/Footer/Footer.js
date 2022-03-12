import React from "react";
import "./Footer.css";
import logo from "../images/logo.png";
import lillus from "../images/1.webp";
import { AiOutlineYoutube } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillMediumSquare } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";



const Footer = () => {
  return (
    <footer>
      <div className="maincon">
        <div>
          <img src={logo} alt="" className="fimg" />
          <h5 className="h5">© 2021, Bum Tech LLC</h5>
        </div>
        <div>
          <div className="iconcon">
            <AiFillMediumSquare alt="" className="smicons" color={'white'} size={30} />
            <AiOutlineYoutube alt="" className="smicons" color="white"     size={30} />
            <AiOutlineInstagram alt="" className="smicons"   color="white" size={30}  />
            <AiOutlineTwitter alt="" className="smicons"     color="white" size={30} />
            <FaDiscord alt="" className="smicons"            color="white" size={30} />
          </div>
        </div>
        <div>
          <h6>CONTACT US</h6>
          <p>Stay connected:</p>
          <p>admin@thebearbums.com</p>
        </div>
      <img src={lillus} alt="logs"className="imgid" />
      </div>
    </footer>
  );
};

export default Footer;
