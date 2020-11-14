import React, { useState } from "react";

const ImageCarousel = ({ imageURLs, preHeader, headers }) => {
  const [currentImage, setImage] = useState(0);
  console.log(imageURLs);
  // props.children? pass in the text ? trying to make this reusable
  return (
    <div className="carousel-wrapper">
      <h3
        className="pre-header"
        style={{ color: headers[currentImage].textColor }}
      >
        {preHeader}
      </h3>
      <div className="about-why-header-container">
        <p
          className="header-0-white"
          style={{ color: headers[currentImage].textColor }}
        >
          {headers[currentImage].text1}
        </p>
        <p
          className="header-0-white"
          style={{ color: headers[currentImage].textColor }}
        >
          {headers[currentImage].text2}
        </p>
      </div>
      <img className="carousel-image" src={imageURLs[currentImage]} />
      <div className="carousel-btn-menu">
        {imageURLs.map((image, idx) => (
          <button
            key={idx}
            className={`carousel-btn${currentImage === idx ? "-selected" : ""}`}
            onClick={() => setImage(idx)}
          >{`0${idx + 1}`}</button>
        ))}
      </div>
    </div>
  );
};
export default ImageCarousel;
