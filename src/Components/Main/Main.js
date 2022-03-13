import React, { useRef, useState } from "react";
import "./Main.css";
import Video from "../images/test.gif";
import Dillus from "../images/D-illus.jpg";
import eillus from "../images/e-illus.jpg";
import fillus from "../images/f-illus.jpg";
import willus from "../images/w-illus.jpg";
import trillus from "../images/tr-illus.jpg";
import stillus from "../images/st-illus.jpg";
import ftillus from "../images/ft-ilus.jpg";
import lillus from "../images/1.webp";
import ylot from "../images/y-lot.jpg";
import pinklot from "../images/pink-lot.png";
import lglot from "../images/lg-lot.jpg";
import glot from "../images/g-lot.jpg";
import blot from "../images/b-lot.png";
import dbimg from "../images/db-img.png";
// import top from "../images/top.png";
import first from "../images/first.webp";
import second from "../images/second.webp";
import third from "../images/third.webp";
import fourth from "../images/fourth.webp";
import five from "../images/5.webp";
import six from "../images/6.webp";
import seven from "../images/7.webp";


import { FaAngleUp } from "react-icons/fa";
import AOS from "aos";

// import useWindowScroll from "react-use"

const Main = () => {

  AOS.init({
    once: true
});

  let Scrolltop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  let totop = useRef();

  const [fixedbtn, setfixedbtn] = useState(false);

  let Showit = () => {
    if (window.scrollY >= 280) {
      setfixedbtn(true);
      totop.current.style.display = "block";
    } else {
      setfixedbtn(false);
      totop.current.style.display = "none";
    }
  };

  window.addEventListener("scroll", Showit);

  return (
    <main id="about">
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
      <section id="specs">
        <h6>PERKS</h6>
        <h1>Welcome To The Crew</h1>
        <div className="firstdiv">
          <div className="sectiondiv">
            <img
              src={Dillus}
              alt="llus"
              className="imgillus"
              data-aos="fade-up"
            />
            <h3>Exclusivity</h3>
            <p className="pillus">
              The Bear Bums offers an exclusive 10,000 NFT collection that
              includes extreme rares, animations, and other innovations not yet
              prominent in the NFT space.
            </p>
          </div>
          <div className="sectiondiv">
            <img
              src={fillus}
              alt="illus"
              className="imgillus"
              data-aos="fade-up"
            />

            <h3>Full Transparency</h3>
            <p className="pillus">
              We believe in complete ownership and fair distribution within our
              community. Which is why we have put a strong emphasis on security
              of our investors/community members.
            </p>
          </div>
          <div className="sectiondiv">
            <img
              src={eillus}
              alt="illus"
              className="imgillus"
              data-aos="fade-up"
            />
            <h3>Tight-knit Community</h3>
            <p className="pillus">
              Become part of an amazing community that encourages love for one
              another and the planet. As our member base expands our goal is to
              give each and every one of you a more rewarding experience and
              continuous exclusive benefits for being a part of our vision.
            </p>
          </div>
          <div className="sectiondiv">
            <img
              src={willus}
              alt="illus"
              className="imgillus"
              data-aos="fade-up"
            />
            <h3>Rewards</h3>
            <p className="pillus">
              As the project continues to grow, so do the perks and rewards
              given to our community members. We will be offering consistent
              prizes in multiple forms, such as airdrops, sneak-peaks,
              merchandise, and so much more! Our goal is to constantly give back
              to our communtiy that supports us through this evolution.
            </p>
          </div>
        </div>
      </section>
      <article id="roadmap">
        <div className="articlediv1">
          <h1>Plant a Tree With Every NFT Sale or Resell</h1>
          <p>
            Beyond creating an amazing community within the Metaverse,our goal
            is to cultivate envionrmental impact and awareness. We want to make
            it a goal to plant 10s if not 100s of thousands of trees around the
            world and give our bears their home back!
          </p>
        </div>
        <div className="articleimg">
          <img
            src={lillus}
            alt="trees"
            className="imgtree"
            data-aos="fade-up"
          />
          <img
            src={ftillus}
            alt="trees"
            className="imgtree"
            data-aos="fade-up"
          />
          <img
            src={stillus}
            alt="trees"
            className="imgtree"
            data-aos="fade-up"
          />
          <img
            src={trillus}
            alt="trees"
            className="imgtree"
            data-aos="fade-up"
          />
        </div>
      </article>
      <menu>
        <div>
          <h6>OUR JOURNEY</h6>
          <h1>Road Map</h1>
        </div>
        <div className="phasecon">
          <div className="eachcon">
            <h5>Phase1</h5>
            {/* <img src="" alt="al"/>
            <hr className="rope2" /> */}
            <p>
              We give our Bear Bums a home in the form of our Website and social
              channel launches. The bears are then revealed, and two are even
              given new homes, as we begin to build awareness of this bear army.
            </p>
          </div>

          <div className="eachcon">
            <h5>Phase2</h5>
            {/* <img src="" alt="al" />
            <hr className="rope2" /> */}
            <p>
              Five more bears are adopted while the rest get ready to party on
              Opensea. To celebrate, we begin rebuilding the bear’s natural
              habitat by planting a tree for every bear sold or resold for the
              entirety of their existence! Our goal is to plant 1,000,000+
              trees! The first press release on the Bear Bums hits the NFT
              media, and the community goes wild when we do a surprise air drop
              of a rare bear…
            </p>
          </div>

          <div className="eachcon">
            <h5>Phase3</h5>
            {/* <img src="" alt="al" />
            <hr className="rope2" /> */}
            <p>
              It’s time for the rare bears to stop being so shy and reveal
              themselves! The community gets to meet these creatures that have
              been hiding, and find them now on Opensea. We introdce our Honey
              Points and its incentives to the community. Sold over 2,000 Bears
              and we begin planting trees right away!
            </p>
          </div>

          <div className="eachcon">
            <h5>Phase4</h5>
            {/* <img src="" alt="al" />
            <hr className="rope2" /> */}
            <p>
              The Bear Bums wake their community out of hibernation by dropping
              some major bombs. Details of their animated series come to light,
              and a major announcement is made. From this point on there will be
              heavy rewards and community incentives. You may actually get tired
              of how much we give to you guys.
            </p>
          </div>

          <div className="eachcon">
            <h5>Phase5</h5>
            {/* <img src="" alt="al" />
            <hr className="rope2" /> */}
            <p>
              Huge giveaways, announcements, partnerships, and more are all in
              the works as the Bear Bums begin teasing the release of their
              short mini bear comics
            </p>
          </div>

          <div className="eachcon">
            <h5>Phase6</h5>
            {/* <img src="" alt="al" />
            <hr className="rope2" /> */}
            <p>
              The next generation of bear bums begin...just wait and see what we
              have in store with our very own companion collection.... The Retro
              Pawz!!!
            </p>
          </div>
        </div>

        <div className="imggallery">
          <img src={ylot} alt="" />
          <img src={pinklot} alt="" />
          <img src={glot} alt="" />
          <img src={lglot} alt="" />
          <img src={blot} alt="" />
          <img src={dbimg} alt="" />
        </div>
      </menu>
      <div className="workerinfo" id="team">
        <h6>OUR BRAIN</h6>
        <h1 className="infoh1">THE REAL BEAR BUMS</h1>
        <div className="moreinfo">
          <div className="more2" data-aos="fade-right">
            <img src={first} alt="" className="imginfo" />
            <div className="glitch">
              <h2 className="marg">@maximustudios</h2>
              <p className="parg">Artist & Founder</p>
              <div className="scon22">
                <img src={five} alt="" className="sico1" />
                <img src={six} alt=""  className="sico2"/>
              </div>
            </div>
          </div>
          <div className="more2" data-aos="fade-right">
            <img src={second} alt="" className="imginfo" />
            <div>
              <h2 className="marg1">@mamabear</h2>
              <p className="parg1">NFT Marketer</p>
              <div  className="scon22">
                <img src={six} alt="" className="sico2" id="sico1"/>
                <img src="" alt=""   />
              </div>
            </div>
          </div>
          <div className="more2" data-aos="fade-right">
            <img src={third} alt="" className="imginfo" />
            <div>
              <h2 className="marg1">@dizzybiz</h2>
              <p className="parg1">Crypto Guru</p>
              <div className="scon22">
                <img src={seven} alt="" className="sico1" id="sico1" />
                <img src={six} alt="" className="sico2"   id="sico2" />
              </div>
            </div>
          </div>
          <div className="more2" data-aos="fade-right">
            <img src={fourth} alt="" className="imginfo" />
            <div>
              <h2 className="marg">@thebearedbear</h2>
              <p className="parg">Community Manager</p>
              <div className="scon22">
                <img src={six} alt="" className="sico2" />
                <img src="" alt=""  className="sico1"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FaAngleUp
        className={fixedbtn ? "fixedbtn1" : "fixedbtn"}
        onClick={Scrolltop}
        color="white"
        size="20"
        ref={totop}
      />
    </main>
  );
};

export default Main;
