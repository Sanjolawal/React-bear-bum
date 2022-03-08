import React from "react";
import "./Main.css";
import Video from "../images/test.gif";

const Main = () => {
  return (
    <main>
      <hr className="line" />
      <header>
        <img src={Video} alt="video" />
        <div>
          <h1>WHAT ARE THE BEAR BUMS?</h1>
          <p>
            The Bear Bums are an NFT Collectible series. There are 5,000 of them
            that were uniquely and programmatically generated with over 350+
            variations, accessories, and personality traits.<br/>
            The Bear Bums
            overall will become a foundational community within the blockchain
            itself. Although, they are an NFT collectible, these bears are much
            more than just a character, they are an entire NFT journey and
            experience within the metaverse they call home.
          </p>
        </div>
      </header>
    </main>
  );
};

export default Main;
