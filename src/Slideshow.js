import React, { useState, useEffect } from "react";
import "./review.css";

const Slideshow = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const nextIndex = currentImageIndex + 1;
      setCurrentImageIndex(nextIndex >= images.length ? 0 : nextIndex);
    }, 5000); // change the delay time to your preference (in milliseconds)

    return () => clearInterval(intervalId);
  }, [currentImageIndex, images.length]);

  const handleDotClick = (index) => {
    setCurrentImageIndex(index);
  };

  return (
      <div>
    <div style={{ marginTop: "30px", marginLeft: "75px", border: "1px solid black", width: "90%" }}>
      <div style={{ display: "flex", alignItems: "center", position: "relative" }}>
        <img style={{ marginLeft: "5%", marginTop: "10px", marginBottom: "10px" }} height="400px" width="500px" src={images[currentImageIndex]} alt="slideshow" />
        <div className="description" style={{ marginLeft: "20px" }}>This is the desc of the movie</div>
      </div>
    </div>
    <div className="dot-container" style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}>
    {images.map((_, index) => (
      <div key={index} className={`dot ${index === currentImageIndex ? "activeImg" : ""}`} onClick={() => handleDotClick(index)}></div>
    ))}
  </div>
  </div>
  );
};

export default Slideshow;
