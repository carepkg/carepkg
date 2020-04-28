import React from "react";

const LandingSponsors = () => {
  const sponsors = Array(7).fill("");
  return (
    <div id="landing-sponsors-page">
      <div id="landing-sponsored-cos">
        {sponsors
          ? sponsors.map(sponsor => {
              return <div className="sponsor-container">CO LOGO</div>;
            })
          : null}
      </div>
      <div id="landing-sponsors-ads">
        <div className="landing-ad landing-ad1">
          <div className="landing-ad1-textbox">
            <p className="landing-ad1-text1">Leave your Mark</p>
            <p className="landing-ad1-text2">
              Snow Gear is 20% off. Get what you need before winter season!
            </p>
          </div>
        </div>
        <div className="landing-ad landing-ad2">
          <div className="landing-ad2-textbox">
            <p className="landing-ad2-text1">One Bag to Carry it All</p>
            <p className="landing-ad2-text2">
              All Purpose. Sturdy. Quality. <span>Bring it home now!</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingSponsors;
