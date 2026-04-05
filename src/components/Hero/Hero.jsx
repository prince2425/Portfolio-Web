import React from "react";
import HeroImage from "../../assets/image1.png";
import CV from "../../assets/Resume.docx";
import "./Hero.css";

const Hero = () => {
  return (
    <section id="home">
      <div  className="hero-section flex wrapper gap-4 ">
        <div className="hero-content">
          <span className="sub-text ">Hi, I'm</span>

          <h1>
            <span className="green-text ">
              Prince Singh
            </span>
            <br />{" "}
            <span className="">
              Software Developer{" "}
            </span>
          </h1>

          <p className="para ">
            I’m a passionate Software Developer who loves building clean,
            responsive, and user-friendly web interfaces.
            <br />
            Currently, I’m improving my skills by building projects and solving
            real-world problems through code.
          </p>

          <div className="flex gap-2 ">
            <a href="#" className="btn">
              View My Works
            </a>

            <a
              href={CV}
              download="MyCV"
              className=" btn border-btn "
            >
              Download CV
            </a>
          </div>
        </div>

        <div className="hero-image ">
          <img
            src={HeroImage}
            alt="Hero Image"
            className=" "
          />
          
        </div>

      
      </div>
    </section>
  );
};

export default Hero;
