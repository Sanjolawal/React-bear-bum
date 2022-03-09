import React from "react";
import "./Footer.css";
import logo from "../images/logo.png";
import medium from "../images/medium.png";
import youtube from "../images/youtube.png";
import instagram from "../images/instagram.png";
import twitter from "../images/twitter.png";
import discord from "../images/discord.png";
import lillus from "../images/1.webp";


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
            <img src={medium} alt="" className="smicons" />
            <img src={youtube} alt="" className="smicons" />
            <img src={instagram} alt="" className="smicons" />
            <img src={twitter} alt="" className="smicons" />
            <img src={discord} alt="" className="smicons" />
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
