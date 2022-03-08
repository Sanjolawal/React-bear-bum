import React from "react";
import "./Main.css";
import Video from "../images/test.gif";
import Dillus from "../images/D-illus.jpg";
import eillus from "../images/e-illus.jpg";
import fillus from "../images/f-illus.jpg";
import willus from "../images/w-illus.jpg";


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
            variations, accessories, and personality traits.
            <br />
            The Bear Bums overall will become a foundational community within
            the blockchain itself. Although, they are an NFT collectible, these
            bears are much more than just a character, they are an entire NFT
            journey and experience within the metaverse they call home.
          </p>
        </div>
      </header>

      <section>
        <h6>PERKS</h6>
        <h1>Welcome To The Crew</h1>
        <div className='firstdiv'>
          <div className="sectiondiv">
            <img src={Dillus} alt="llus" />
            <h3>Exclusivity</h3>
            <p>
              The Bear Bums offers an exclusive 10,000 NFT collection that
              includes extreme rares, animations, and other innovations not yet
              prominent in the NFT space.
            </p>
          </div>
          <div className="sectiondiv">
            <img src={fillus } alt="illus" />
            <h3>Full Transparency</h3>
            <p>
              We believe in complete ownership and fair distribution within our
              community. Which is why we have put a strong emphasis on security
              of our investors/community members.
            </p>
          </div>
          <div className="sectiondiv">
            <img src={eillus} alt="illus" />
            <h3>Tight-knit Community</h3>
            <p>
              Become part of an amazing community that encourages love for one
              another and the planet. As our member base expands our goal is to
              give each and every one of you a more rewarding experience and
              continuous exclusive benefits for being a part of our vision.
            </p>
          </div>
          <div className="sectiondiv">
            <img src={willus} alt="illus" />
            <h3>Rewards</h3>
            <p>
              As the project continues to grow, so do the perks and rewards
              given to our community members. We will be offering consistent
              prizes in multiple forms, such as airdrops, sneak-peaks,
              merchandise, and so much more! Our goal is to constantly give back
              to our communtiy that supports us through this evolution.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
