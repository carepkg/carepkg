import React, { useState } from "react";
import ImageCarousel from "../Universal/ImageCarousel";
const AboutWhySection = () => {
  const aboutURLs = [
    "/about-images/about-val-c1.jpg",
    "/about-images/about-val-c2.jpg",
    "/about-images/about-val-c3.jpg",
    "/about-images/about-val-c4.jpg",
  ];
  return (
    <div>
      <ImageCarousel imageURLs={aboutURLs} />
    </div>
  );
};

export default AboutWhySection;
