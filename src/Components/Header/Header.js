import React from "react";
import "./Header.css";
import Hillus from "../images/h-illus.jpg";
import medium from "../images/medium.png";
import youtube from "../images/youtube.png";
import instagram from "../images/instagram.png";
import twitter from "../images/twitter.png";
import discord from "../images/discord.png";

const Header = () => {
  return (
    <div className="header" id="Header">
      <div className="mainhcon">
        <div className="firstb">
          <div className="cntdiv">
            <h4 className="headh1">
              WELCOME TO <br /> <span className="h-p">THE BEAR BUMS</span>
            </h4>
            <div className="himgcol">
              <img
                src={youtube}
                alt="icons"
                className="smicons"
                id="smicolon2"
              ></img>
              <img
                src={instagram}
                alt="icons"
                className="smicons"
                id="smicolon2"
              ></img>
              <img
                src={twitter}
                alt="icons"
                className="smicons"
                id="smicolon2"
              ></img>
              <img
                src={medium}
                alt="icons"
                className="smicons"
                id="smicolon2"
              ></img>
              <img
                src={discord}
                alt="icons"
                className="smicons"
                id="smicolon2"
              ></img>
            </div>
          </div>
        </div>
        <div className="secondb">
          <div className="secondb2">
            <h1 className="head12">Join The Bear Bums Family</h1>
            <img src={Hillus} alt="puppy" className="puppyimg" />
            <div className="h-sc">
              <button className="headbtn">Mint Your Bear Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
