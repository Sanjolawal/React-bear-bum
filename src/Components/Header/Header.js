import React from "react";
import "./Header.css";
import Hillus from "../images/h-illus.jpg";
import { AiOutlineYoutube } from "react-icons/ai"
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillMediumSquare } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";


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
              <AiOutlineYoutube
                // src={AiOutlineYoutube}
                alt="icons"
                className="smicons"
                id="smicolon2"
              />
              <AiOutlineInstagram
                alt="icons"
                className="smicons"
                id="smicolon2"
              />
              <AiOutlineTwitter
                alt="icons"
                className="smicons"
                id="smicolon2"
              />
              <AiFillMediumSquare
                alt="icons"
                className="smicons"
                id="smicolon2"
              />
              <FaDiscord
                alt="icons"
                className="smicons"
                id="smicolon2"
              />
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
