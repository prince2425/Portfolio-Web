import React from "react";
import HeroImage from "../../assets/hero-image.png";
import CV from '../../assets/Resume.docx'
import'./Hero.css'
import { FaDisplay } from "react-icons/fa6";

const Hero = () => {
  return (
    <section>
      <div className=" hero-section flex wrapper gap-4">
        <div className="hero-content">
          <span className="sub-text">Hello there!</span>
          <h1>
            <span className="green-text">I'm Prince Singh,</span>
           <br /> Web Developer <br /> based in UAE.
          </h1>
          <p className='para'>
            I'am an experiences web designer with 6+ year in the field ,
            Collaborating with various companies and startups
          </p>
          <div className="flex gap-2">
            <a href="" className="btn">View my works</a>
            <a href={CV} dounload="My CV" className="btn border-btn">Dounlode CV</a>
          </div>
        </div>

        <div className="hero-image">
          <img src={HeroImage} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
