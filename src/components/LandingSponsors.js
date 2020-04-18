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
        <div className="landing-ad">AD GOES HERE</div>
        <div className="landing-ad">AD GOES HERE</div>
      </div>
    </div>
  );
};

export default LandingSponsors;
