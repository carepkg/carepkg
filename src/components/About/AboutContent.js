import React from "react";
import AboutNavbar from "./AboutNavbar";

const AboutContent = () => {
  return (
    <div className="about-content-wrapper">
      <AboutNavbar />
      <section>
        <img id="about-main-image" src="/about-images/about-main.jpg" />
      </section>
      <section></section>
      <section></section>
    </div>
  );
};

export default AboutContent;
