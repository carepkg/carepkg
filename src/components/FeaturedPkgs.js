import React from "react";

const FeaturedPkgs = () => {
  const packages = [1, 2, 3, 4];

  return (
    <div id="home-featured-container">
      <div id="featured-container">
        {packages.map(pkg => {
          return <div className="home-featured-package"></div>;
        })}
      </div>
    </div>
  );
};

export default FeaturedPkgs;
