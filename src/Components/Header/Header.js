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
    <header>
      <div className="firstb">
        <menu>
          <h1>
            WELCOME TO <br /> <span className="h-p">THE BEAR BUMS</span>
          </h1>
          <article>
            <img src={youtube} alt="icons"></img>
            <img src={instagram} alt="icons"></img>
            <img src={twitter} alt="icons"></img>
            <img src={medium} alt="icons"></img>
            <img src={discord} alt="icons"></img>
          </article>
        </menu>
      </div>
      <section>
        <h1>Join The Bear Bums Family</h1>
        <img src={Hillus} alt="puppy" />
        <div className="h-sc">
          <button>Mint Your Bear Now</button>
        </div>
      </section>
    </header>
  );
};

export default Header;
