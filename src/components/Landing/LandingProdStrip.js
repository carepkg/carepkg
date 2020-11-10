import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

const LandingProductStrip = (props) => {
  const { set, name } = props;
  console.log(set);
  return (
    <div className="landing-ps-cont">
      <h3 className="landing-ps-header">{name}</h3>
      <div className="landing-ps-backdrop">
        {set.map((prod) => (
          <NavLink
            className="landing-ps-card-wrapper"
            to={`/products/id/${prod.id}`}
          >
            <div className="landing-ps-card">
              <div className="landing-ps-card-top">
                <img src={prod.image}></img>
              </div>
              <div className="landing-ps-card-bottom">
                <span className="landing-ps-card-prod-name">{prod.name}</span>
                <h6 className="landing-ps-card-price">
                  <span>$</span>
                  {prod.price}
                </h6>
              </div>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default LandingProductStrip;
