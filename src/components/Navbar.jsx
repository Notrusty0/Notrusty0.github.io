import { useState } from "react";
import mailIcon from "../assets/email.svg"; // Replace with your email icon path
import linkedinIcon from "../assets/linkedin.png"; // Replace with your LinkedIn icon path
import artstationIcon from "../assets/artstation.svg"; // Replace with your ArtStation icon path

// Smooth Scroll Function
const smoothScroll = (e, targetId) => {
  e.preventDefault();
  const targetElement = document.getElementById(targetId);
  if (targetElement) {
    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: "smooth",
    });
  }
};

// ScrambleText component
const ScrambleText = ({ text, className = "" }) => {
  const [displayText, setDisplayText] = useState(text);
  const uniqueChars = [...new Set(text.replace(/\s/g, ""))]; // Unique characters (excluding spaces)
  let intervalId = null;

  const scramble = () => {
    if (intervalId) clearInterval(intervalId);

    intervalId = setInterval(() => {
      setDisplayText((prevDisplayText) =>
        text
          .split("")
          .map((char, index) => {
            if (char === " ") return " "; // Keep spaces intact
            let randomChar;
            let prevChar = prevDisplayText[index];

            // Ensure randomChar is different from prevChar
            do {
              randomChar = uniqueChars[Math.floor(Math.random() * uniqueChars.length)];
            } while (randomChar === prevChar);

            return randomChar;
          })
          .join("")
      );
    }, 70);

    setTimeout(() => {
      clearInterval(intervalId);
      setDisplayText(text); // After scrambling, reset to the original text
    }, 500);
  };

  return (
    <span
      onMouseEnter={scramble}
      onMouseLeave={() => setDisplayText(text)} // Reset text when hover ends
      className={className}
    >
      {displayText}
    </span>
  );
};

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  const [hoveredButton, setHoveredButton] = useState(""); // State to track hovered button

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] border-transparent">
      <div className="mx-auto px-8">
        <div className="flex justify-between items-center h-40">
          {/* Smooth Scrolling for Name */}
          <a
            href="#home"
            onClick={(e) => smoothScroll(e, "home")}
            className="text-4xl font-bold text-black ml-20 cursor-pointer"
          >
            <ScrambleText text="Kyleigh Hartman" />
          </a>

          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>

          <div className="hidden md:flex items-center space-x-5 gap-1">
            {/* Smooth Scrolling for Navbar Links */}
            <a
              href="#about"
              onClick={(e) => smoothScroll(e, "about")}
              className="text-black font-bold text-2xl hover:text-gray-800 transition-colors cursor-pointer"
            >
              <ScrambleText text="About" />
            </a>
            <a
              href="#projects"
              onClick={(e) => smoothScroll(e, "projects")}
              className="text-black font-bold text-2xl hover:text-gray-800 transition-colors cursor-pointer"
            >
              <ScrambleText text="Projects" />
            </a>

            {/* Social Media Icons */}
            <div className="flex gap-1 items-center">
              <a
                href="mailto:your-email@example.com" // Replace with your email address
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setHoveredButton("mail")}
                onMouseLeave={() => setHoveredButton("")}
                className="flex justify-center items-center p-2 rounded-full bg-transparent transition-all duration-300 flex-shrink-0"
              >
                <img
                  src={mailIcon}
                  alt="Email"
                  className={`w-7 h-7 transition-opacity duration-300 ${
                    hoveredButton === "mail" || hoveredButton === "" ? "opacity-100" : "opacity-50"
                  }`}
                />
              </a>
              <a
                href="https://www.linkedin.com/in/your-profile" // Replace with your LinkedIn URL
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setHoveredButton("linkedin")}
                onMouseLeave={() => setHoveredButton("")}
                className="flex justify-center items-center p-2 rounded-full bg-transparent transition-all duration-300 flex-shrink-0"
              >
                <img
                  src={linkedinIcon}
                  alt="LinkedIn"
                  className={`w-7 h-7 transition-opacity duration-300 ${
                    hoveredButton === "linkedin" || hoveredButton === "" ? "opacity-100" : "opacity-50"
                  }`}
                />
              </a>
              <a
                href="https://www.artstation.com/your-profile" // Replace with your ArtStation URL
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setHoveredButton("artstation")}
                onMouseLeave={() => setHoveredButton("")}
                className="flex justify-center items-center p-2 rounded-full bg-transparent transition-all duration-300 flex-shrink-0"
              >
                <img
                  src={artstationIcon}
                  alt="ArtStation"
                  className={`w-7 h-7 transition-opacity duration-300 ${
                    hoveredButton === "artstation" || hoveredButton === "" ? "opacity-100" : "opacity-50"
                  }`}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};