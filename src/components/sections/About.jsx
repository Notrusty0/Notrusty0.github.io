import { RevealOnScroll } from "../RevealOnScroll"; // Assuming RevealOnScroll is a custom component for scroll reveal
import ParallaxTilt from "react-parallax-tilt"; // Import ParallaxTilt for the tilt effect

import headshot from "../../assets/headshot.jpg"

export const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20 bg-gray-100">
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
          <div className="text-center text-lg text-gray-600 leading-relaxed">
            <p>
              Hello! My name is <strong>Kyleigh Hartman</strong>. I'm a passionate graphic designer and 3D modeler
              with experience in Photoshop, After Effects, Illustrator, InDesign, and 3DS Max. I love drawing, running,
              and traveling, and I'm always eager to learn new skills in any form. Feel free to reach out—I'd love to
              connect!
            </p>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};