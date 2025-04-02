import { useState } from "react";
import mailIcon from "../assets/email.svg"; // Replace with your email icon path
import linkedinIcon from "../assets/linkedin.png"; // Replace with your LinkedIn icon path
import artstationIcon from "../assets/artstation.svg"; // Replace with your ArtStation icon path

// ScrambleText Component
const ScrambleText = ({ text, className = "" }) => {
  const [displayText, setDisplayText] = useState(text);
  const uniqueChars = [...new Set(text.replace(/\s/g, ""))];

  let intervalId = null;

  const scramble = () => {
    if (intervalId) clearInterval(intervalId);

    intervalId = setInterval(() => {
      setDisplayText((prevDisplayText) =>
        text
          .split("")
          .map((char, index) => {
            if (char === " ") return " ";
            let randomChar;
            let prevChar = prevDisplayText[index];

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
      setDisplayText(text);
    }, 500);
  };

  return (
    <span
      onMouseEnter={scramble}
      onMouseLeave={() => setDisplayText(text)}
      className={className}
    >
      {displayText}
    </span>
  );
};

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  const [hoveredButton, setHoveredButton] = useState(""); // Track hovered icon

  return (
    <div
      className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.8)] z-40 flex flex-col items-center justify-center
                     transition-all duration-300 ease-in-out
                     ${
                       menuOpen
                         ? "h-screen opacity-100 pointer-events-auto"
                         : "h-0 opacity-0 pointer-events-none"
                     }
                   `}
    >
      {/* Close Button */}
<button
  onClick={() => setMenuOpen(false)}
  className="absolute top-6 right-6 text-white text-4xl p-2 rounded-full transition-transform duration-500 ease-in-out
             hover:rotate-180 hover:scale-110"
>
  ✕
</button>

      {/* Navigation Links with Scramble Effect */}
      <a
        href="#home"
        onClick={() => setMenuOpen(false)}
        className="text-2xl font-semibold text-white my-4 transition-transform duration-300 cursor-pointer"
      >
        <ScrambleText text="Home" />
      </a>
      <a
        href="#about"
        onClick={() => setMenuOpen(false)}
        className="text-2xl font-semibold text-white my-4 transition-transform duration-300 cursor-pointer"
      >
        <ScrambleText text="About" />
      </a>
      <a
        href="#projects"
        onClick={() => setMenuOpen(false)}
        className="text-2xl font-semibold text-white my-4 transition-transform duration-300 cursor-pointer"
      >
        <ScrambleText text="Projects" />
      </a>

      {/* Social Media Icons with Hover Effect */}
      <div className="flex gap-5 mt-8">
        <a
          href="mailto:Kyleigh@KyleighHartman.com" // Replace with your email address
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setHoveredButton("mail")}
          onMouseLeave={() => setHoveredButton("")}
          className="p-2 transition-opacity duration-300"
        >
          <img
            src={mailIcon}
            alt="Email"
            className={`w-8 h-8 transition-opacity duration-300 ${
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
          className="p-2 transition-opacity duration-300"
        >
          <img
            src={linkedinIcon}
            alt="LinkedIn"
            className={`w-8 h-8 transition-opacity duration-300 ${
              hoveredButton === "linkedin" || hoveredButton === "" ? "opacity-100" : "opacity-50"
            }`}
          />
        </a>
        <a
          href="https://www.artstation.com/kyleighhartman/" // Replace with your ArtStation URL
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setHoveredButton("artstation")}
          onMouseLeave={() => setHoveredButton("")}
          className="p-2 transition-opacity duration-300"
        >
          <img
            src={artstationIcon}
            alt="ArtStation"
            className={`w-8 h-8 transition-opacity duration-300 ${
              hoveredButton === "artstation" || hoveredButton === "" ? "opacity-100" : "opacity-50"
            }`}
          />
        </a>
      </div>
    </div>
  );
};