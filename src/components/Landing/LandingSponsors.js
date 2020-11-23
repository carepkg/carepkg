import React from "react";

const LandingSponsors = () => {
  const sponsors = [
    "eddiebauer-icon.png",
    "fjallraven-icon.png",
    "canadagoose-icon.png",
    "sorel-icon.png",
    "mammut-icon.png",
    "northface-icon.jpeg",
    "patagonia-icon.png",
  ];
  return (
    <div id="landing-sponsors-page">
      <div id="landing-sponsored-cos">
        {sponsors
          ? sponsors.map((sponsor, idx) => {
              return idx !== 3 ? (
                <img className="brand-logo" src={`/company-icons/${sponsor}`} />
              ) : (
                <img
                  className="brand-logo-small"
                  src={`/company-icons/${sponsor}`}
                />
              );
            })
          : null}
      </div>
      <div id="landing-sponsors-ads">
        <div className="landing-ad landing-ad1">
          <div className="landing-ad-textbox">
            <p className="landing-ad-header">Leave your Mark</p>
            <p className="landing-ad-subheader">
              Snow Gear is 30% off. Get what you need before winter season!
            </p>
          </div>
        </div>
        <div className="landing-ad landing-ad2">
          <div className="landing-ad-textbox">
            <p className="landing-ad-header">One Bag to Carry it All</p>
            <p className="landing-ad-subheader">
              All Purpose, Sturdy, and Quality. <span>Bring it home now!</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingSponsors;
