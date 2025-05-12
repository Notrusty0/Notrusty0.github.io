import { useState, useEffect, useRef } from "react";
import ParallaxTilt from "react-parallax-tilt"; // Import the ParallaxTilt component
import Slider from "react-slick"; // Import Slick Carousel for the gallery
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import folder from "../../assets/folder.svg";
import TnCL from "../../assets/projects/3.jpg";
import TnC1 from "../../assets/projects/1.png";
import TnC2 from "../../assets/projects/2.png";
import TnC3 from "../../assets/projects/4.png";

import arcadialogo from "../../assets/projects/8.jpg";
import arcadia1 from "../../assets/projects/5.png";
import arcadia2 from "../../assets/projects/6.png";
import arcadia3 from "../../assets/projects/7.png";

import art from "../../assets/projects/9.jpg";
import art1 from "../../assets/projects/10.jpg";
import art2 from "../../assets/projects/11.jpg";
import art3 from "../../assets/projects/12.jpg";

import sword from "../../assets/projects/15.png";
import sword2 from "../../assets/projects/16.png";
import sword3 from "../../assets/projects/17.png";
import sword4 from "../../assets/projects/18.png";

import tree from "../../assets/projects/19.png";
import tree2 from "../../assets/projects/20.png";

import ruin from "../../assets/projects/21.png";
import ruin2 from "../../assets/projects/22.png";

import milk from "../../assets/projects/23.jpg";

import treeR from "../../assets/projects/24.png";
import treer2 from "../../assets/projects/25.png";
import treer3 from "../../assets/projects/26.png";
import treer4 from "../../assets/projects/27.png";

import treeR from "../../assets/projects/24.png";
import treer2 from "../../assets/projects/25.png";

import neoorganic from "../../assets/projects/13.jpg";
import car from "../../assets/projects/14.png";
import watch from "../../assets/projects/29.png";
import barrel from "../../assets/projects/28.png";

import skills from "../../assets/projects/Skills.png";
// Modal Component with Swipeable Large Image
const ImageGalleryModal = ({ images, onClose }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const sliderRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleImageLoad = () => {
    setImagesLoaded(true);
  };

  // Slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: selectedImageIndex,
    beforeChange: (_, next) => setActiveSlide(next),
    afterChange: (current) => {
      if (sliderRef.current) {
        sliderRef.current.slickGoTo(current);
      }
    },
    swipeToSlide: true,
    nextArrow: <CustomArrow direction="right" />,
    prevArrow: <CustomArrow direction="left" />,
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center bg-[rgba(10,10,10,0.8)] bg-opacity-20">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-10 right-10 text-white text-3xl p-2 rounded-full hover:rotate-180 hover:scale-110 transition-transform duration-500"
      >
        ✕
      </button>

      {/* Image Modal */}
      <div className="relative max-w-7xl w-full p-4 flex justify-center">
        <div className="w-full max-w-5xl aspect-w-16 aspect-h-9">
          <Slider {...settings} ref={sliderRef}>
            {images.map((image, index) => (
              <div key={index} className="flex justify-center">
                <img
                  src={image}
                  alt={`large-image-${index}`}
                  className="w-screen h-screen object-contain rounded-lg" // Ensure fixed size and aspect ratio
                  onLoad={handleImageLoad}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

// Custom Arrow Component
const CustomArrow = ({ direction, onClick }) => (
  <button
    onClick={onClick}
    className={`absolute top-1/2 transform -translate-y-1/2 ${direction === "left" ? "-left-16" : "-right-16"} w-12 h-12 flex justify-center items-center text-4xl text-white hover:scale-110 transition z-50`}
  >
    {direction === "left" ? "<" : ">"}
  </button>
);

// Project Folder Card Component with Tilt Effect
const ProjectCard = ({ index, name, image, galleryImages }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <ParallaxTilt
        options={{ max: 25, scale: 1.05, speed: 400 }}
        className="bg-transparent p-5 rounded-2xl"
        style={{ width: "300px", height: "300px" }} // Fixed size
      >
        <div
          className="relative w-[300px] h-[300px] cursor-pointer" // Ensures the container remains the same size
          onClick={() => setShowModal(true)}
        >
          <img
            src={image}
            alt="project-image"
            className="w-full h-full object-cover rounded-2xl" // Ensures consistent size and cover fit
          />
          <div className="absolute inset-0 flex justify-center items-center">
            <h3 className="text-gray-700 font-bold text-[24px]">{name}</h3>
          </div>
        </div>
      </ParallaxTilt>

      {/* Modal */}
      {showModal && (
        <ImageGalleryModal images={galleryImages} onClose={() => setShowModal(false)} />
      )}
    </>
  );
};

// Projects Section with Folders and Gallery
export const Projects = () => {
  const projects = [
    {
      name: "Graphic Design",
      image: folder,
      galleryImages: [TnCL, TnC1, TnC2, TnC3, arcadialogo, arcadia1, arcadia2, arcadia3,neoorganic,car,barrel,watch],
    },
    {
      name: "3D Modeling",
      image: folder,
      galleryImages: [sword,sword2,sword3,sword4,ruin,ruin2,tree,tree2],
    },
    {
      name: "Digital Art",
      image: folder,
      galleryImages: [art,art1 ,art2,art3,milk,],
    },
    {
      name: "Skills",
      image: folder,
      galleryImages: [skills],
    },
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20">
      <div className="flex justify-center items-center gap-10 flex-wrap max-w-8xl">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </section>
  );
};