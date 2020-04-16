import React from "react";

const LandingCatFooter = props => {
  const { categories } = props;
  const firstHalf = categories.slice(0, categories.length / 2);
  const secondHalf = categories.slice(categories.length / 2);
  return (
    <div id="landing-cat-footer">
      <h2 id="cat-footer-header">
        Premium Outdoors Gear <span>&#x26;</span> Clothing
      </h2>
      <h4 id="cat-footer-subheader">Shop by Category</h4>
      <div id="landing-cat-container">
        <div id="cat-col1-container">
          {categories
            ? firstHalf.map(cat => {
                return <div className="footer-category-name">{cat.name}</div>;
              })
            : null}
        </div>
        <div id="cat-col2-container">
          {categories
            ? secondHalf.map(cat => {
                return <div className="footer-category-name">{cat.name}</div>;
              })
            : null}
        </div>
      </div>
    </div>
  );
};

export default LandingCatFooter;
