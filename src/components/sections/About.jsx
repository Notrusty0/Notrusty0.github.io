import { RevealOnScroll } from "../RevealOnScroll"; // Assuming RevealOnScroll is a custom component for scroll reveal
import ParallaxTilt from "react-parallax-tilt"; // Import ParallaxTilt for the tilt effect

import headshot from "../../assets/headshot.jpg"

export const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20 bg-gray-300">
      <div className="w-full max-w-4xl px-6">
        {/* Reveal the section on scroll */}
        <RevealOnScroll>
          {/* About Text (Big Bold Header) */}
          <h2 className="text-5xl font-extrabold text-center text-gray-800 mb-8">About Me</h2>

          {/* Parallax Tilt Image */}
          <div className="flex justify-center mb-8">
            <ParallaxTilt
              options={{ max: 25, scale: 1.05, speed: 400 }} // Parallax effect
              className="w-[200px] h-[200px] rounded-full overflow-hidden"
            >
              <img src={headshot} alt="Kyleigh Hartman Headshot" className="w-full h-full object-cover" />
            </ParallaxTilt>
          </div>

          {/* About Text Box */}
          <div className="text-center text-lg text-black leading-relaxed font-medium space-y-4">
            <p>
              Hello! My name is <strong>Kyleigh Hartman</strong>. I'm a passionate logo designer and 3D modeler with a love for drawing, running, and traveling. I'm always eager to learn new skills and grow as a creative professional.
              I graduated from Oklahoma City Community College with an Associate’s Degree in Graphic Design and plan to continue my education at Oklahoma City University.
            </p>
            <p>  
            Feel free to reach out—I'd love to connect!{" "}
            <a href="mailto:Kyleigh@KyleighHartman.com" className="text-blue-600 underline hover:text-blue-800">
            Kyleigh@KyleighHartman.com
            </a>
            </p>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};