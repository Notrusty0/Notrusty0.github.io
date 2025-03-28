import React, { useState, useEffect } from "react";

import img1 from "../../assets/projects/1.png"; 
import img2 from "../../assets/projects/2.png"; 
import img3 from "../../assets/projects/3.png"; 

export const Home = () => {
  const images = [img1,img2,img3]; // Array to store the image imports
  const [currentIndex, setCurrentIndex] = useState(0); // State to track current image

  // useEffect to automatically switch images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); // Cycle through images
    }, 5000); // 5 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      {/* Slideshow container */}
      <div className="relative w-full h-[800px] bg-transparent">
        {/* Image with automatic switching */}
        <img
          src={images[currentIndex]} // Dynamically use the current image index
          alt="Slideshow"
          className="w-full h-full object-contain rounded-lg"
        />
      </div>
    </section>
  );
};