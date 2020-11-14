import React, { useState } from "react";

const ImageCarousel = ({ imageURLs }) => {
  const [currentImage, setImage] = useState(0);
  console.log(imageURLs);
  return (
    <div className="carousel-wrapper">
      <img className="carousel-image" src={imageURLs[currentImage]} />
      <div className="carousel-btn-menu">
        {imageURLs.map((image, idx) => (
          <button
            key={idx}
            className="carousel-btn"
            onClick={() => setImage(idx)}
          >{`0${idx + 1}`}</button>
        ))}
      </div>
    </div>
  );
};
export default ImageCarousel;
