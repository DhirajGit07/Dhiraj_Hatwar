import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <p style={{fontSize:"20px"}}>Hello, I'm Dhiraj!😀</p>
        <h2>Welcome to my portfolio Website</h2>
        <p>
          I'm a passionate frontend developer with a background in web design and
          development.
          <br />
          I am currently working remotely, focusing primarily on JavaScript and React.js.
          I am eager to learn and grow in my field.
          <br />
        </p>
        
        <p>
          <i>Passionate frontend developer | Transforming ideas into seamless and
          visual basic web solutions.</i>
        </p>
      </div>

      <div className="hero-img">
        <div>
          <img
            src="/assets/images/Photo.jpeg"
            alt="Tech Icon 2"
            className="tech-icon-profile"
          />
        </div>

        <div>
        <div className="tech-icon">
            <img src="/assets/images/logo192.png" alt="Tech Icon 1" />
          </div>
          <div className="tech-icon">
            <img src="/assets/images/social_11516140.png" alt="Tech Icon 3" />
          </div>

          <div className="tech-icon">
            <img src="/assets/images/social_11516361.png" alt="Tech Icon 4" />
          </div>

          <div className="tech-icon">
            <img src="/assets/images/js_5968292.png" alt="Tech Icon 5" />
          </div>
          <div className="tech-icon" >
            <img style={{height:"75px", width:"75px"}} src="/assets/images/shopifyicons.png" alt="Tech Icon 5" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
