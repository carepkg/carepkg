import React, { useState } from "react";
import ImageCarousel from "../Universal/ImageCarousel";
const AboutWhySection = () => {
  const aboutURLs = [
    "/about-images/about-values-c1.jpg",
    "/about-images/about-values-c2.jpg",
    "/about-images/about-values-c3.jpg",
    "/about-images/about-values-c4.jpg",
  ];
  const headers = [
    { text1: "PUSH YOUR LIMITS", text2: "", textColor: "white" },
    { text1: "LIVE A LITTLE", text2: "", textColor: "white" },
    { text1: "FIND YOUR PEAK", text2: "", textColor: "white" },
    { text1: "DO IT TOGETHER", text2: "", textColor: "white" },
  ];

  return (
    <div>
      <ImageCarousel
        imageURLs={aboutURLs}
        preHeader={"[ Our Values ]"}
        headers={headers}
      />
    </div>
  );
};

export default AboutWhySection;
