import React from "react";
import Typewriter from "typewriter-effect";

const Type = () => {
    return (
        <Typewriter
          options={{
            strings: [
              "Web Developer & UI/UX Enthusiast",
              "Full-Stack Developer (React & Node.js)",
              "Hackathon Winner & Innovator",
              "Passionate Problem Solver"
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
          }}
        />
      )
}

export default Type