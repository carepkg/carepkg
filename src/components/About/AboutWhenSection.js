import React from "react";
import Discountdown from "./Discountdown";

const AboutWhenSection = () => {
  return (
    <div className="s3-wrapper">
      <h3>[ Our History ]</h3>
      <p className="s3-header">MAKING THE WORLD</p>
      <p className="s3-header">A BETTER PLACE</p>
      <p className="s3-subheader">
        through Paxos Algorithms for consensus protocols.{" "}
      </p>
      <p className="s3-text">
        At the dawn of time - one hundred years ago - a cataclysmic celestial
        event ushered in a new era of consumption, characterized by tiny
        electronic gadgets and an unprecedented demand for outdoor equipment. At
        its epicenter, a website manifested out not of thin air, but of an
        unwavering desire to give everbody everything they've ever wanted. That
        was in 2015. Today, we still dominate the industry with signature
        products like our Men's Pro Safari Shorts to name a few. Even our
        cookingware keyset is doing better than our competition's best selling
        stuff. REI. Osh. Dick's. All second-placers quivering in their
        Carepkg&trade; boots. Too bad they didn't also buy our thermal socks to
        match which, if you buy in the next 24 hours, are 6% off. And trust us,
        you'll want those 100% on.
      </p>
      <div>
        <Discountdown />
      </div>
      <p className="s3-link-text">
        Learn more about us{" "}
        <a target="_blank" href="https://en.wikipedia.org/wiki/Excellence">
          here
        </a>
        .
      </p>
    </div>
  );
};

export default AboutWhenSection;
