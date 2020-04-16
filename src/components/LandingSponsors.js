import React from "react";

const LandingSponsors = () => {
  const sponsors = Array(7).fill("");
  return (
    <div id="landing-sponsors-page">
      <div id="landing-sponsored-cos">
        {sponsors
          ? sponsors.map(sponsor => {
              return <div className="sponsor-container"></div>;
            })
          : null}
      </div>
      <div id="landing-sponsors-ads">
        <div className="landing-ad"></div>
        <div className="landing-ad"></div>
      </div>
    </div>
  );
};

export default LandingSponsors;
