import React from "react";
import "./Faq.css";
import downicon from "../images/down-icon.jpg";

const Faq = () => {
  return (
    <div className="faq">
      <h6>FAQ</h6>
      <h2>Frequency Asked Questions</h2>
      <div className="faq1">
        <div className="faq2">
          <p className="p">What are the bear bums?</p>
          <img src={downicon} alt="" className="turn" />
          <span className="logo2">
            The Bear Bums, are a collection of 10,000 characters algorithmically
            generated. They are a collection of bear characters with 300+
            different personality traits, accessories, and even animations. We
            will have a collection of extremely rare animated & voiced
            characters within our exclusive collection. Members will have
            exclusive access to our club which will include benefits and offers
            that will continue to grow and expand over time
          </span>
        </div>
        <div className="faq2">
          <p className="p">What's their story?</p>
          <img src={downicon} alt="" className="turn" />
          <span className="logo2">
            The Bear Bums overall will become a foundational community within
            the blockchain itself. Although they are an NFT collectible, these
            bears have a story behind them unlike any other. These bears and
            their world differ from the rest. First of all, their world isn’t
            exactly “real”. In the year 2075, a world-renowned hacker and gamer
            named Max is now known highly amongst the metaverse itself as a
            creator of worlds. Max wanted a unique approach to his creation.
            Mainly, he creates worlds in which humans can roam freely, interact
            and have fun, but he wanted to create a world where humans aren’t
            allowed in. A world that builds itself and starts from scratch, a
            world run by bears. Thus began the creation of The Bear Bum world.
            The Bear Bum world is protected by code encryption and no one has
            access to it other than Max himself. This world was created in a way
            that allows freedom and variety amongst the bears themselves.
            Meaning their lives and what they do with them is randomly and
            programmatically created for them and for each bear only. They do
            not know their world isn’t “real”. One thing Max didn’t want in this
            world that happened far too much on his own was war, violence, and
            constant destruction. The bears are each uniquely different and are
            free to create their own lives, but they are all programmed to not
            do anything that might bring harm to another form of life,
            especially to their own world. Within the bear bum world, we will
            meet our protagonist, Frank. Frank, along with a few friends, are
            the central scheme behind the bear bum world and now hold the future
            of this world in their hands. A virus has overrun the program
            itself. Glitches are appearing throughout their world, bears are
            disappearing, portals are opening. While Frank and his crew tap into
            what they know as “the code” and try to figure out what’s going on
            in their world, Max frantically tries to figure out where the virus
            could have come from. Until he finally realizes, he’s been hacked by
            a bear himself within the metaverse. Frank, who is in charge of “the
            code” and lives on his computer, comes across these glitches and is
            inching closer to the fact that his world might not be what he
            thought it was… It might not even be real… In order to learn more
            about the bear bums and their story, join our discord and become a
            part of the community once we officially launch. There is much more
            to come in the bear bum world. 🙂
          </span>
        </div>
        <div className="faq2">
          <p className="p">How much are they?</p>
          <img src={downicon} alt="" className="turn" />
          <span className="logo2">
            This collectible prides itself in fair distribution and giving
            everyone and anyone the possibility to be part of this
            membership/world. The initial launch price will start at 0.08 ETH
          </span>
        </div>
        <div className="faq2">
          <p className="p">How do i buy a bear bums?</p>
          <img src={downicon} alt="" className="turn" />
          <span className="logo2">
            You can buy a Bear Bum, either through connecting your wallet to our
            website or purchasing them on opensea.
          </span>
        </div>
        <div className="faq2">
          <p className="p">Why should i join the bear bums community?</p>
          <img src={downicon} alt="" className="turn" />
          <span className="logo2">
            Members that hold any Bear Bums NFT will have exclusive access to
            all of the wonderful things we have planned throughout our roadmap.{" "}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Faq;
