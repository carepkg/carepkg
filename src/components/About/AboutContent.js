import React from "react";
import AboutNavbar from "./AboutNavbar";
import AboutWhySection from "./AboutWhySection";

class AboutContent extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="about-content-wrapper">
        <AboutNavbar />
        <div id="about-main-image-wrapper">
          <img id="about-main-image" src="/about-images/about-main-light.jpg" />
        </div>
        <div id="all-text-container">
          <div id="main-text-subcontainer">
            <p>THIS IS</p>
            <p>CAREKPG</p>
            <h3>We provide for the moments you seek.</h3>
            <h3>
              Connecting people with people and people with our beautiful
              planet.
            </h3>
          </div>
          <div id="side-text-subcontainer">
            <button className="large-btn-white">Go Shopping</button>
          </div>
        </div>
        <div id="sections-wrapper">
          <div id="why" className="about-section about-section-1">
            <AboutWhySection />
          </div>
          <div id="where" className="about-section about-section-2"></div>
          <div id="when" className="about-section about-section-3"></div>
        </div>
      </div>
    );
  }
}

export default AboutContent;
