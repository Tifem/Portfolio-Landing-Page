import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="hero">
      <h1>
        Hi, I am <span>Janet.</span>
      </h1>

      <h2>A Front-End Engineer</h2>

      <p>
        Highly motivated and detail-oriented front-end developer with 2years of
        experience in crafting responsive, user-friendly interfaces for web
        applications. Proficient in HTML, CSS, Javascript and modern frameworks.{" "}
      </p>

      <div className="connect">
        <span>resume</span>
        <FaGithub className="git" />
        <FaLinkedin className="link" />
      </div>
    </div>
  );
};

export default Hero;
